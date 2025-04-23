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
            return Inertia::render('Admin/Dashboard');
        })->name('admin.dashboard');

        Route::get('/categories', function () {
            return Inertia::render('Admin/Category', [
                'categories' => Inertia::deepMerge(\App\Models\Category::latest()->paginate(10, page: 1))
            ]);
        });


        Route::get('/sub-categories', function () {
            return Inertia::render('Admin/SubCategory');
        });



        Route::get('/products', function () {
            return Inertia::render('Admin/Product');
        });



        Route::get('/orders', function () {
            return Inertia::render('Admin/Order');
        });

    });

