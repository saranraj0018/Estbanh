<?php

namespace App\Http\Controllers;

use App\Events\UserRegistered;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Exception;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Models\UserDocument;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class AuthenticatedSessionController extends Controller
{

    /**
     * show the register page
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('auth/RegisterUser', [
            'sessionData' => session('registration.step_one', [])
        ]);
    }

    /**
     *  Register page 1 is store the session
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function storeSession(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email',
            'cnr_number' => 'required|string',
            'vat_number' => 'required|string',
        ]);

        return redirect()->route('register.address');
    }

    /**
     * Address Tab
     *
     * @return \Inertia\Response
     */
    public function createAddress()
    {
        return Inertia::render('auth/RegisterAddress', [
            'sessionData' => session('registration.address', [])
        ]);
    }

    /**
     * Register stores the address for session
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function storeAddress(Request $request)
    {
        $request->validate([
            'address_line_1' => 'required|string',
            'address_line_2' => 'required|string',
            'country' => 'required|integer',
            'state' => 'required|integer',
            'city' => 'required|integer',
            'pin_code' => 'required|integer',
        ]);

        return redirect()->route('register.documents');
    }

    /**
     * Create documents
     *
     * @return \Inertia\Response
     */
    public function createDocument()
    {
        return Inertia::render('auth/RegisterDocuments', [
            'sessionData' => session('registration.documents', [])
        ]);
    }
    /**
     * Register documents store the session
     *
     */
    public function storeDocuments(Request $request)
    {
        // Validate uploaded files
        $request->validate([
            'images'   => 'required|array',
            'images.*' => 'file|mimes:jpg,jpeg,png,pdf|max:5120', // Max 5MB per file
        ]);

        return redirect()->route('register.contact');
    }

    public function createContact()
    {
        return Inertia::render('auth/RegisterContact');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function login(LoginRequest $request): RedirectResponse
    {

        $request->authenticate('user');

        $request->session()->regenerate();

        return redirect()->route('home');
    }



    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {

        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }


    /**
     * Register customer store the data in database
     *
     * @param Request $request
     * @return RedirectResponse
     */

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email',
            'cnr_number' => 'required|string',
            'vat_number' => 'required|string',
            'address_line_1' => 'required|string',
            'address_line_2' => 'nullable|string',
            'country' => 'required|integer',
            'state' => 'required|integer',
            'city' => 'required|integer',
            'pin_code' => 'required|integer',
            'images'   => 'required|array',
            'images.*' => 'file|mimes:jpg,jpeg,png,pdf|max:5120', // Max 5MB
            'issuer_name' => 'required|string|max:255',
            'issuer_phone' => 'required|string|max:20',
            'accountant_name' => 'required|string|max:255',
            'accountant_phone' => 'required|string|max:20',
            'authority_name' => 'required|string|max:255',
            'authority_phone' => 'required|string|max:20',
            'terms' => 'required',
        ]);

        DB::beginTransaction();

        try {
            $user = new User();
            $user->name = $request['first_name'] . ' ' . $request['last_name'];
            $user->email = $request['email'];
            $user->cnr_number = $request['cnr_number'];
            $user->vat_number = $request['vat_number'];
            $user->address_line_1 = $request['address_line_1'] . ' ' . $request['address_line_2'];
            $user->country = $request['country'];
            $user->state = $request['state'];
            $user->city = $request['city'];
            $user->pin_code = $request['pin_code'];
            $user->issuer_name = $request['issuer_name'];
            $user->issuer_phone = $request['issuer_phone'];
            $user->accountant_name = $request['accountant_name'];
            $user->accountant_phone = $request['accountant_phone'];
            $user->authority_name = $request['authority_name'];
            $user->authority_phone = $request['authority_phone'];
            $user->save();

            $uniq_id = Str::random(6);
            foreach ($request->file('images') as $file) {
                $originalName = $file->getClientOriginalName();
                $extension = $file->getClientOriginalExtension();
                $fileName = $uniq_id . '_' . $originalName;
                $file->storeAs('user-documents/', $fileName, 'public');

                $doc = new UserDocument();
                $doc->user_id = $user->id;
                $doc->document_type = $extension;
                $doc->name = $fileName;
                $doc->save();
            }

            DB::commit();
            
            event(new UserRegistered(user: $user));
            return redirect()->route('register.thank-you');
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Registration failed: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString()
            ]);
            return back()->withErrors(['general' => 'Something went wrong. Please try again later.'])->withInput();
        }
    }
}
