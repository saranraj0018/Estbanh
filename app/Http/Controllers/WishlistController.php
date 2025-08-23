<?php

namespace App\Http\Controllers;

use App\Contracts\Address;
use App\Contracts\Cart;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class WishlistController extends Controller
{






    public function index()
    {
        return Inertia::render('users/WishList', [
            'wishlist' => Product::whereIn('id', json_decode(Auth::user()->wishlist) ?: [])->latest()->get(),
        ]);
    }













    public function toggle(Product $product)
    {

        $wishlist = json_decode(Auth::user()->wishlist) ?: [];

        if (in_array($product->id, $wishlist)) {
            $wishlist = array_diff($wishlist, [$product->id]);
        } else {
            $wishlist[] = $product->id;
        }

        $user = User::find(Auth::id());
        $user->update([
            'wishlist' => json_encode(array_values($wishlist)),
        ]);

        return redirect()->back()->with('success', 'Item Added to wishlist');
    }
}
