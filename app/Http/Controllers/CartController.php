<?php

namespace App\Http\Controllers;

use App\Contracts\Cart;
use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\JsonResponse;
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

        return inertia('users/Cart', [
            'cart' => $this->cart->get(),
            "invoice" => $this->cart->getCartValue()
        ]);
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

            # make and action to the cart
            if (!$this->cart->add(productId: $request->productId, quantity: $request->quantity))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back();

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

            return redirect()->back();

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

            return redirect()->back();

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
            if (!$this->cart->remove(productId: $request->productId))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back();

        } catch (\Throwable $th) {
            throw $th;
        }
    }
}

