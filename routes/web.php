<?php

use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;











/**
 * User login
 */
Route::middleware(['guest'])->group( function() {
    
    Route::get('/login', function () {
        return Inertia::render('Auth/UserLogin');
    })->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'login']);
});









/**
 * Admin Login
 */
Route::prefix('admin')
    ->middleware(['guest:admin'])
    ->group(function() {

        Route::get('login', function () {
            return Inertia::render('Auth/AdminLogin');
        })->name('admin');

        Route::post('login', [AdminAuthController::class, 'login'])
        ->name('admin.login');
    });






require __DIR__ . "/admin.php";
require __DIR__ . "/user.php";

    