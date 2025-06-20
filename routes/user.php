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

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');


    Route::post('/request-product', function (Request $request) {
       
        $request->validate([
            'name' => 'required|string',
            'part_number' => 'required',
            'description' => 'required|string',
            'images' => 'required|array|max:1',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif'
        ]);

        try {

            $imagePath = $request->file('images')[0]->store('product-requests', 'public');

            \App\Models\Notification::create([
                "title" => "New Product Request",
                'user_id' => 0,
                "image" => $imagePath,
                "description" => "A User has requested a new product with part number: " . $request->part_number,
                "type" => 3,
                "registered_user_id" => auth()->user()->id,
                "others" => json_encode([
                    'name' => $request->name,
                    'part_number' => $request->part_number,
                    'description' => $request->description
                ])
            ]);

            return redirect()->back()->with('success', 'Product request submitted successfully!');

        } catch (\Throwable $th) {
            throw $th;
        }

    })->name('request-product');


});





Route::get('/', function () {
    return Inertia::render('Users/Home', [
        'products' => \App\Models\Product::take(3)->get()
    ]);
})->name('home');



Route::post('/search', function (Request $request) {

    return response()->json([
        'products' => \App\Models\Product::where('part_number', 'like', '%' . $request->search . '%')->get()
    ]);

})->name('search');





Route::get('/view-product/{product}', function (Request $request, Product $product) {
    return Inertia::render('Users/ViewProduct', [
        'product' => $product
    ]);
})->name('view-product');




Route::get('/products/{search}', function (Request $request, string $search) {

    return Inertia::render('Users/ProductList', [
        'products' => Product::where('part_number', 'like', '%' . $search . '%')->get()
    ]);

})->name('products-list');