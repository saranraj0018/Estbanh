<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::prefix('admin')
    ->middleware(['auth:admin'])
    ->group(function() {

        Route::get('/', function () {
            return redirect()->route('admin.dashboard');
        });
    


        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('admin.dashboard');
    });

