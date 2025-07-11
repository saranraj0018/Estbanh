<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class SubCategoryController extends Controller
{
    
    public function index() {
        return Inertia::render('admin/SubCategory', [
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
        ]);
        

       

        if(!($subCategory = \App\Models\Subcategory::find($request->get('id')))) {
            \App\Models\Subcategory::create([
                'name' => $request->name,
                'category_id' => $request->category_id,
                'slug' => $request->slug,
                'user_id' => auth()->id(),
            ]);    
        } else {
            $subCategory->update([
                'name' => $request->name,
                'category_id' => $request->category_id,
                'slug' => $request->slug,
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
