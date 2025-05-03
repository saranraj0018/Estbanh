<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth'])->group(function () {
    
    Route::get('/', function () {
        return redirect()->route('dashboard');
    });


    Route::get('/home', function () {
        return Inertia::render('Users/Home');
    })->name('dashboard');
});
 