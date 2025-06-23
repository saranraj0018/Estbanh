<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class ProductController extends Controller
{

    public function index()
    {
        return Inertia::render('admin/Product', [
            'products' => \App\Models\Product::with(['detail', 'features'])->latest()->paginate(10),
            'categories' => \App\Models\Category::with('subCategories')->get()
        ]);
    }




    public function save(Request $request)
    {

    
        $request->validate([
            'id' => 'nullable|integer',
            'name' => 'required|string|max:255',
            'part_number' => 'required|string|max:1000',
            'description' => 'required|string|max:1000',
            'image' => 'required|mimes:png,jpg,jpeg,svg',
            'detail' => 'required|array',
            'detail.category_id' => 'required|int',
            'detail.sub_category_id' => 'required|integer',
            'detail.product_details' => 'required|array|min:1',
            'detail.product_details.*.name' => 'required',
            'detail.product_details.*.value' => 'required',
            'features' => 'required|array|min:1',
            'features.*.variants' => 'required|array|min:1',
            'images' => 'required|array|min:1',
            'images.*' => 'required|mimes:png,jpg,jpeg,svg',
            'make' => 'required|string',
            'model' => 'required|string',
        ]);


  

        try {



            $_image = null;
            if ($request->image instanceof UploadedFile) {
                $_image = $request->file('image')->storeAs('products', now()->format('Y_m_d_His_') . str_replace(' ', '_', $request->file('image')->getClientOriginalName()), 'public');
            } else if ($request->image)
                $_image = $request->image;



            if (!($product = \App\Models\Product::find($request->get('id')))) {
                $product = \App\Models\Product::create([
                    'name' => $request->name,
                    'part_number' => $request->part_number,
                    'description' => $request->description,
                    'image' => $_image,
                    'user_id' => 20,
                    'is_active' => 1,
                ]);

                $product->detail()->create([
                    'category_id' => 112,
                    'sub_category_id' => empty($request->detail['sub_category_id']) ? $request->detail['sub_category_id'] : 3,
                    'sale_price' => 0,
                    'regular_price' => 0,
                    'make' => $request->make,
                    'model' => $request->model,
                    'product_details' => json_encode($request->product_details),
                ]);

                foreach($request->features as $attribute) {
                    $product->features()->create([
                        'name' => $attribute['name'],
                        'variants' => json_encode($attribute['variants']),
                    ]);
                }

                foreach($request->images as $key => $image) {
                    $_img = $image instanceof UploadedFile ? 
                        $image->storeAs('products', now()->format('Y_m_d_His_') . str_replace(' ', '_', $image->getClientOriginalName()), 'public') : 
                            $image;

                    $product->images()->create([
                        'image' => $_img,
                        'description' => 'The Real Slim Shady, please stand up',
                    ]);
                }
                
            } else {

                $product->update([
                    'name' => $request->name,
                    'part_number' => $request->part_number,
                    'description' => $request->description,
                    'image' => $_image,
                    'user_id' => 20,
                    'is_active' => 1,
                ]);


                $product->detail()->update([
                    'category_id' => $request->detail['category_id'],
                    'sub_category_id' => empty($request->detail['sub_category_id']) ? $request->detail['sub_category_id'] : 3,
                    'sale_price' => 0,
                    'regular_price' => 0,
                    'make' => $request->make,
                    'model' => $request->model,
                    'product_details' => json_encode($request->product_details),
                ]);


                $product->features()->delete();
                $product->images()->delete();


                foreach($request->features as $attribute) {
                    $product->features()->create([
                        'name' => $attribute['name'],
                        'variants' => json_encode($attribute['variants']),
                    ]);
                }

                foreach($request->images as $image) {
                    $_img = null;

                    if ($image instanceof UploadedFile) {
                        $_img = $image->storeAs('products', now()->format('Y_m_d_His_') . str_replace(' ', '_', $image->getClientOriginalName()), 'public');
                    } else
                        $_img = $image;

                    $product->images()->create([
                        'image' => $_img,
                        'description' => 'The Real Slim Shady, please stand up',
                    ]);
                }
            }

            return redirect()->back()->with('success', 'Post saved successfully.');
        } catch (\Throwable $th) {
            dd($th->getMessage(), $request->all());
        }
    }


    public function destroy(Request $request)
    {

        if (!($id = $request->get('id'))) {
            return redirect()->back()->with('error', 'Id is required.');
        }

        $category = \App\Models\Product::find($id);

        if ($category) {
            $category->delete();
        }

        return redirect()->back()->with('success', 'Post saved successfully.');
    }
}
