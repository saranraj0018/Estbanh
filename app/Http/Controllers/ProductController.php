<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller {




    public function index() {
        return Inertia::render('users/Home', [
            'products' => Product::take(3)->get()
        ]);
    }


    

    public function search(Request $request) {
        return response()->json([
            'products' => \App\Models\Product::where('part_number', 'like', '%' . $request->search . '%')->get()
        ]);
    }



    public function view (Request $request, Product $product) {
        return Inertia::render('users/ViewProduct', [
            'product' => $product
        ]);
    }



    public function searchProduct(Request $request, string $search) {
        return Inertia::render('users/ProductList', [
            'products' => Product::where('part_number', 'like', '%' . $search . '%')->get()
        ]);
    
    }



    /**
     * Request product
     * @return \Illuminate\Http\RedirectResponse
     */
    public function requestProduct(Request $request): RedirectResponse {
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
    }
}
