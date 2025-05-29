<?php

use App\Http\Controllers\AuthenticatedSessionController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth'])->group(function () {
    
    /**
     * Track your orders
     */
    Route::get('/order-tracking', function () {
        dd('Order');
    })->name('tracking');    
});


Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');



Route::get('/', function () {
    return Inertia::render('Users/Home', [
        'products' => \App\Models\Product::take(3)->get()
    ]);
})->name('home');



Route::post('/search', function (Request $request) {

    return response()->json([
        'products' => \App\Models\Product::where('name', 'like', '%'. $request->search . '%')->get()
    ]);
    
})->name('search');



Route::get('/view-product/{product}', function (Request $request, Product $product) {
    return Inertia::render('Users/ViewProduct', [
        'product' => $product
    ]);
})->name('view-product');




Route::get('/products/{search}', function (Request $request, string $search) {

    return Inertia::render('Users/ProductList', [
        'products' => Product::where('name', 'like', '%'. $search .'%')->get()
    ]);

})->name('products-list');