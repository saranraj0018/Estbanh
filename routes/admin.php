<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SubCategoryController;
use Illuminate\Http\Request;
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


        Route::get('/categories', [CategoryController::class, 'index'])->name('admin.categories');
        Route::post('/save-category', [CategoryController::class, 'save'])->name('create-category');
        Route::post('/delete-category', [CategoryController::class, 'destroy'])->name('delete-category');


        Route::get('/sub-categories', [SubCategoryController::class, 'index'])->name('admin.sub-categories');
        Route::post('/save-sub-categories', [SubCategoryController::class, 'save'])->name('create-sub-category');
        Route::post('/delete-sub-categories', [SubCategoryController::class, 'destroy'])->name('delete-sub-category');

        Route::get('/products', [ProductController::class, 'index'])->name('admin.products');
        Route::post('/save-product', [ProductController::class, 'save'])->name('create-product');
        Route::post('/delete-product', [ProductController::class, 'destroy'])->name('delete-product');

        Route::get('/orders', function () {
            return Inertia::render('Admin/Order');
        });
    });

