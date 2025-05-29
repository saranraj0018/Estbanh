<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthenticatedSessionController extends Controller
{

    /**
     *  Register page 1 is store the session
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function storeSession(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email',
            'cnr_number' => 'required|string',
            'vat_number' => 'required|string',
        ]);

        session()->put('registration.step_one', $validated);

        return redirect()->route('register.address');
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
}
