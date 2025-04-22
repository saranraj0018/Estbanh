<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;



Route::prefix('admin')
    ->middleware(['auth:admin'])
    ->group(function() {

        Route::get('/', function () {
            return redirect()->route('admin.dashboard');
        });



        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard', [
                'admin' => Auth::guard('admin')->user(), 
            ]);
        })->name('admin.dashboard');

        Route::post('/logout', function () {
            Auth::guard('admin')->logout();
            session()->invalidate();
            session()->regenerateToken();
            return redirect()->route('admin.login');
        })->name('admin.logout');
    });

