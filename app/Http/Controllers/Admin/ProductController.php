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
        return Inertia::render('Admin/Product', [
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
            'image' => 'required',
            'detail' => 'required|array',
            'detail.category_id' => 'required|int',
            'detail.sub_category_id' => 'required|int',
            'features' => 'required|array|min:1',
            'features.*.variants' => 'required|array|min:1',
            'images' => 'required|array|min:1',
        ]);


        try {


            $_image = null;
            if ($request->image instanceof UploadedFile) {
                $_image = $request->file('image')->storeAs('categories', now()->format('Y_m_d_His_') . str_replace(' ', '_', $request->file('image')->getClientOriginalName()), 'public');
            } else if ($request->image)
                $_image = $request->image;



            if (!($product = \App\Models\Product::find($request->get('id')))) {
                $product = \App\Models\Product::create([
                    'name' => $request->name,
                    'part_number' => $request->part_number,
                    'description' => $request->description,
                    'image' => $_image,
                    'user_id' => auth('admin')->user()->id,
                    'is_active' => 1,
                ]);

                $product->detail()->create([
                    'category_id' => $request->detail['category_id'],
                    'sub_category_id' => $request->detail['sub_category_id'],
                    'sale_price' => 0,
                    'regular_price' => 0
                ]);

                foreach($request->features as $attribute) {
                    $product->features()->create([
                        'name' => $attribute['name'],
                        'variants' => json_encode($attribute['variants']),
                    ]);
                }


                foreach($request->images as $image) {
                    $_img = null;

                    if ($image instanceof UploadedFile) {
                        $_img = $image->storeAs('categories', now()->format('Y_m_d_His_') . str_replace(' ', '_', $image->getClientOriginalName()), 'public');
                    } else
                        $_img = $image;

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
                    'user_id' => auth('admin')->user()->id,
                    'is_active' => 1,
                ]);


                $product->detail()->update([
                    'category_id' => $request->detail['category_id'],
                    'sub_category_id' => $request->detail['sub_category_id'],
                    'sale_price' => 0,
                    'regular_price' => 0
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
                        $_img = $image->storeAs('categories', now()->format('Y_m_d_His_') . str_replace(' ', '_', $image->getClientOriginalName()), 'public');
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
