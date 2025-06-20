<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
      return Inertia::render('Admin/User', [
        'users' => User::whereNotNull('password')
            ->select('id', 'name', 'email', 'issuer_phone', 'created_at')
            ->orderBy('created_at', 'desc')
            ->paginate(10),
    ]);
    }

    public function show($id)
{
    $user = User::findOrFail($id);
    return Inertia::render('Admin/UserShow', [
        'user' => $user,
    ]);
}
}
