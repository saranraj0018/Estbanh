<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class SubCategoryController extends Controller
{
    
    public function index() {
        return Inertia::render('Admin/SubCategory', [
            'subCategories' => \App\Models\Subcategory::with('category')->latest()->paginate(10),
            'categories' => \App\Models\Category::all(['id', 'name'])
        ]);
    }




    public function save(Request $request) {
        
        $request->validate([
            'id' => 'nullable|integer',
            'name' => 'required|string|max:255',
            'category_id' => 'required',
            'slug' => 'required|string|max:1000',
            'description' => 'required|string|max:1000',
            'image' => 'required',
        ]);
        

        $_image = null;

        if ($request->image instanceof UploadedFile) {
            $_image = $request->file('image')->storeAs('sub-categories', now()->format('Y_m_d_His_') . str_replace(' ', '_', $request->file('image')->getClientOriginalName()), 'public');
        } else if ($request->image)
            $_image = $request->image;

        if(!($subCategory = \App\Models\Subcategory::find($request->get('id')))) {
            \App\Models\Subcategory::create([
                'name' => $request->name,
                'category_id' => $request->category_id,
                'slug' => $request->slug,
                'description' => $request->description,
                'image' => $_image,
                'user_id' => auth()->id(),
            ]);    
        } else {
            $subCategory->update([
                'name' => $request->name,
                'category_id' => $request->category_id,
                'slug' => $request->slug,
                'description' => $request->description,
                'image' => $_image ?? $subCategory->image,
                'user_id' => auth()->id(),

            ]); 
        }
  

        return redirect()->back()->with('success', 'Post saved successfully.');
    }


    public function destroy (Request $request) {

        if(!($id = $request->get('id'))) {
            return redirect()->back()->with('error', 'Id is required.');
        }

        $subCategory = \App\Models\Subcategory::find($id);

        if ($subCategory) {
            $subCategory->delete();
        }

        return redirect()->back()->with('success', 'Post saved successfully.');
    }
}
