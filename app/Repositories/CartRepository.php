<?php

namespace App\Repositories;

use App\Contracts\Cart;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection as SupportCollection;

class CartRepository implements Cart
{



    /**
     * Get the Product Return Format 
     * @param \App\Models\Product $product
     * @param array|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|SupportCollection $cart
     * @return array{cart: array|Collection|Model, id: mixed, image: mixed, name: mixed, part_number: mixed, varient: string}
     */
    protected function product(Product $product, array|Collection|Model|SupportCollection $cart): array
    {

        return [
            "id" => $product->id,
            "name" => $product->name,
            "part_number" => $product->part_number,
            "image" => $product->image,
            "discount_price" => $product->discount_price,
            "quantity" => $cart['quantity'],
            "gross_amount" => $product->discount_price * $cart['quantity'],
            "weight" => $product->weight,
            "overall_weight" => $product->weight * $cart['quantity'],
        ];
    }





    /**
     * Get the User Cart
     * @throws \Exception
     * @return \Illuminate\Support\Collection
     */
    protected function getCart(): SupportCollection
    {

        # check if the user is not null
        if (!($user = auth()->user())) {
            throw new \Exception("Cannot create a cart for unknown user", 401);
        }

        # get the user's cart 
        $cartKey = "cart_{$user?->id}";
        return collect(\Illuminate\Support\Facades\Cache::get($cartKey, []));
    }








    /**
     * Reassign the Cart
     * @param array|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|SupportCollection $cart
     * @throws \Exception
     * @return bool
     */
    protected function insertCart(array|Collection|Model|SupportCollection $cart): bool
    {

        # check if the user is not null
        if (!($user = auth()->user())) {
            throw new \Exception("Cannot create a cart for unknown user", 401);
        }

        # get the user's cart 
        $cartKey = "cart_{$user?->id}";
        \Illuminate\Support\Facades\Cache::put($cartKey, array_values($cart), now()->addDays(7));

        return true;
    }






    /**
     * Find the index of a product in a cart
     * @param int $productId
     * @param int $varientId
     * @return bool|TKey
     */
    protected function indexOf(int $productId): int
    {
        return $this->getCart()->search(function ($item) use ($productId) {
            return $item['product_id'] == $productId;
        });
    }





    public function getCartValue(): array {
        $cart = $this->get();
        // dd($cart->toArray());
        $tax = 0;
        $shipping = 0;
       

        return [
            "total" => $total = $cart->sum('gross_amount'),
            "subTotal" => $subTotal = $total - $tax,
            "shipping" => $shipping,
            "totalWeight" => $cart->sum('overall_weight') . 'g',
            "grandTotal" => $subTotal - $shipping,
        ];
    }




    /**
     * Get the Cart Items
     * @return Collection<int, array{cart: array|Collection|Model, id: mixed, image: mixed, name: mixed, part_number: mixed, varient: string>|\Illuminate\Support\Collection<int, array{cart: array|Collection|Model, id: mixed, image: mixed, name: mixed, part_number: mixed, varient: string}>}
     */
    public function get(): Collection|SupportCollection
    {

        $cart = $this->getCart();

        return Product::whereIn('id', [...$cart->pluck('product_id')])->get()->map(callback: function (Product $product) use ($cart) {
            return $this->product($product, $cart->filter(fn($item) => $item["product_id"] == $product->id)?->first());
        });
    }





    /**
     * Find One Product in the Cart
     * @param int $productId
     * @param int $varientId
     * @return array|array{cart: array|Collection|Model, id: mixed, image: mixed, name: mixed, part_number: mixed, varient: string}
     */
    public function findOne(int $productId): array
    {

        $item = $this->getCart()->filter(fn($item) => ($item['product_id'] == $productId))?->first();

        if (!$item) {
            return [];
        }

        return $this->product(Product::find($item?->product_id), $item);
    }








    /**
     * Check if the product exists in the cart
     * @param int $productId
     * @param int $varientId
     * @return bool
     */
    public function exists(int $productId): bool
    {
        # filter the cart for the product
        $item = $this->getCart()->filter(fn($item) => ($item['product_id'] == $productId))?->first();

        if (!$item) {
            return false; # no product available
        }

        return true;
    }







    /**
     * Add an item to the cart
     * @param int $productId
     * @param int $varientId
     * @param int $quantity
     * @return bool
     */
    public function add(int $productId, int $quantity): bool
    {

        # retrive the cart
        $cart = $this->getCart();

        # checking if the product exists
        if ($this->exists(productId: $productId)) {
            $this->appendQuantity(productId: $productId, quantity: $quantity);
            return true;
        }

        return $this->insertCart([
            ...$cart, # previous values from cart
            [
                'product_id' => $productId,
                'quantity' => $quantity,
            ]
        ]);
    }






    /**
     * Remove items from the cart
     * @param int $productId
     * @param int $varientId
     * @return bool
     */
    public function remove(int $productId): bool
    {

        # checking if the product exists
        if (!$this->exists(productId: $productId)) {
            return false;
        }

        # remove item from the cart
        $cart = $this->getCart()->filter(fn($item) => ($item['product_id'] != $productId))->toArray();
        $this->insertCart($cart);
        return true;
    }






    /**
     * Increment the quantity
     * @param int $productId
     * @param int $varientId
     * @return bool
     */
    public function increment(int $productId): bool
    {
        $cartIndex = $this->indexOf(productId: $productId);
        $cart = $this->getCart()->toArray();
        $cart[$cartIndex]["quantity"] = $cart[$cartIndex]["quantity"] + 1;

        $this->insertCart($cart);
        return true;
    }





    /**
     * Decrement the quantity
     * @param int $productId
     * @param int $varientId
     * @return bool
     */
    public function decrement(int $productId): bool
    {
        $cartIndex = $this->indexOf(productId: $productId);
        $cart = $this->getCart()->toArray();
        $cart[$cartIndex]["quantity"] = $cart[$cartIndex]["quantity"] - 1;
        
        if ($cart[$cartIndex]["quantity"] <= 0) {
            $this->remove(productId: $productId);
            return true;
        }
        
        $this->insertCart($cart);
        return true;
    }






    /**
     * Assign new Quantity
     * @param int $productId
     * @param int $varientId
     * @param int $quantity
     * @return bool
     */
    public function setQuantity(int $productId, int $quantity): bool
    {
        $cartIndex = $this->indexOf(productId: $productId);
        $cart = $this->getCart()->toArray();
        $cart[$cartIndex]["quantity"] = $quantity;

        if ($cart[$cartIndex]["quantity"] < 1) {
            $this->remove(productId: $productId);
        }

        $this->insertCart($cart);
        return true;
    }







    /**
     * Append Quantity
     * @param int $productId
     * @param int $varientId
     * @param int $quantity
     * @return bool
     */
    public function appendQuantity(int $productId, int $quantity): bool
    {
        $cartIndex = $this->indexOf(productId: $productId);
        $cart = $this->getCart()->toArray();
        $cart[$cartIndex]["quantity"] = $cart[$cartIndex]["quantity"] + $quantity;

        if ($cart[$cartIndex]["quantity"] < 1) {
            $this->remove(productId: $productId);
        }

        $this->insertCart($cart);
        return true;
    }











    /**
     * Clear the Cart
     * @throws \Exception
     * @return bool
     */
    public function clear(): bool
    {

        # check if the user is not null
        if (!($user = auth()->user())) {
            throw new \Exception("Cannot create a cart for unknown user", 401);
        }

        # get the user's cart 
        $cartKey = "cart_{$user?->id}";
        \Illuminate\Support\Facades\Cache::forget($cartKey);

        return true;
    }



}
