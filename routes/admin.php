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
            return Inertia::render('Admin/Dashboard');
        })->name('admin.dashboard');

        Route::get('/categories', function () {
            return Inertia::render('Admin/Category', [
                'categories' => \App\Models\Category::latest()->paginate(10),
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

        Route::post('/logout',[\App\Http\Controllers\Auth\AdminAuthController::class, 'destroy'])->name('admin.logout');

    });

