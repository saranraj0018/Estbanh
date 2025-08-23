<?php

namespace App\Http\Controllers;

use App\Contracts\Cart;
use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;


class CartController extends BaseController
{



    public function __construct(public readonly Cart $cart)
    {
        //
    }

    /**
     * @return Response
     */
    public function index(): Response
    {

        // Cache::flush();
        return inertia('users/Cart', [
            'cart' => $this->cart->get(),
            "invoice" => $this->cart->getCartValue()
        ]);
    }



    /**
     * @return Response
     */
    public function createCart(Request $request)
    {
        try {

            $request->validate([
                'name' => 'required',
            ]);

            # increment the product from the cart
            if (!$this->cart->createCart("#cart_" . $request->name))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back()->with('success', 'Cart Created');;
        } catch (\Throwable $th) {
            throw $th;
        }
    }






    /**
     * @return Response
     */
    public function switchCart(Request $request)
    {
        try {

            # Validate cart
            $request->validate([
                'cartId' => 'required',
            ]);

            # increment the product from the cart
            if (!$this->cart->switchCart($request->cartId))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back()->with('success', 'Cart Switched');;
        } catch (\Throwable $th) {
            throw $th;
        }
    }









    /**
     * @return Response
     */
    public function deleteCart()
    {
        try {

            # increment the product from the cart
            if (!$this->cart->deleteCart())
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back()->with('success', 'Product Deleted from Cart');;
        } catch (\Throwable $th) {
            throw $th;
        }
    }








    /**
     * Add item to Cart
     * @return RedirectResponse
     */
    public function create(Request $request): RedirectResponse
    {

        try {

            # Validate cart
            $request->validate([
                'productId' => 'required|integer',
                'quantity' => 'required|integer|min:1'
            ]);

            $cart = ["productId" => $request->productId, "quantity" => $request->quantity];

            # make and action to the cart
            if (!$this->cart->addToCart($cart))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back()->with('success', 'Product Added to Cart Successfully');
        } catch (\Throwable $th) {
            throw $th;
        }
    }






    /**
     * Add item to Cart
     * @return RedirectResponse
     */
    public function increment(Request $request): RedirectResponse
    {

        try {

            # Validate cart
            $request->validate([
                'productId' => 'required|integer',
                'quantity' => 'required|integer|min:1'
            ]);

            # increment the product from the cart
            if (!$this->cart->increment(productId: $request->productId))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back()->with('success', 'Product Added to Cart');
        } catch (\Throwable $th) {
            throw $th;
        }
    }





    /**
     * Add item to Cart
     * @return RedirectResponse
     */
    public function decrement(Request $request): RedirectResponse
    {

        try {

            # Validate cart
            $request->validate([
                'productId' => 'required|integer',
                'quantity' => 'required|integer|min:1'
            ]);

            # decrement the product from the cart
            if (!$this->cart->decrement(productId: $request->productId))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back()->with('success', 'Product Removed from Cart');
        } catch (\Throwable $th) {
            throw $th;
        }
    }






    /**
     * Add item to Cart
     * @return RedirectResponse
     */
    public function remove(Request $request): RedirectResponse
    {

        try {

            # Validate cart
            $request->validate([
                'productId' => 'required|integer',
            ]);

            # decrement the product from the cart
            if (!$this->cart->removeFromCart($request->productId))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back();
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
