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


        Route::get('/categories', function () {
            return Inertia::render('Category');
        });
    


        Route::get('/sub-categories', function () {
            return Inertia::render('SubCategory');
        });



        Route::get('/products', function () {
            return Inertia::render('Product');
        });



        Route::get('/orders', function () {
            return Inertia::render('Order');
        });

    });

