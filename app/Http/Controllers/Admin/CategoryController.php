<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class CategoryController extends Controller
{
    
    public function index() {
        return Inertia::render('Admin/Category', [
            'categories' => \App\Models\Category::latest()->paginate(10)
        ]);
    }




    public function save(Request $request) {

        $request->validate([
            'id' => 'nullable|integer',
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:1000',
            'description' => 'required|string|max:1000',
            'image' => 'required',
        ]);
        

        $_image = null;
        if ($request->image instanceof UploadedFile) {
            $_image = $request->file('image')->storeAs('categories', now()->format('Y_m_d_His_') . str_replace(' ', '_', $request->file('image')->getClientOriginalName()), 'public');
        } else if ($request->image)
        $_image = $request->image;

        if(!($category = \App\Models\Category::find($request->get('id')))) {
            \App\Models\Category::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'description' => $request->description,
                'image' => $_image
            ]);    
        } else {
            $category->update([
                'name' => $request->name,
                'slug' => $request->slug,
                'description' => $request->description,
                'image' => $_image ?? $category->image
            ]); 
        }
  


        return redirect()->back()->with('success', 'Post saved successfully.');

    }


    public function destroy (Request $request) {

        if(!($id = $request->get('id'))) {
            return redirect()->back()->with('error', 'Id is required.');
        }

        $category = \App\Models\Category::find($id);

        if ($category) {
            $category->delete();
        }

        return redirect()->back()->with('success', 'Post saved successfully.');
    }
}
