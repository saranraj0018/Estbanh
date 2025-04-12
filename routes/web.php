<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/**
 * User login
 */
Route::get('/login', function () {
    return Inertia::render('Auth/User/Login');
})->name('user.login');



/**
 * Admin login
 */
Route::get('/admin/login', function () {
    return 'ADMIN';
})->name('admin.login');