<?php

namespace App\Http\Controllers\Admin;

use App\Events\UserRegistrationApproved;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class OrderController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/Order');
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('admin/UserShow', [
            'user' => $user,
        ]);
    }



    public function approve(Request $request, User $user) {

        $request->validate([
            "password" => "required|confirmed|min:8"
        ]);

        try {
            $user->update([
                'password' => bcrypt($request->password),
                'status' => 1
            ]);
            event(new UserRegistrationApproved(user: $user, password: $request->password));
        } catch (\Throwable $th) {
            return redirect()->back()
                ->withErrors(['password' => $th->getMessage()]);
        }

    }
}
