<?php

namespace App\Repositories;

use App\Contracts\CartManager as Manager;
use Illuminate\Support\Facades\Cache;

class CartManagerRepository implements Manager
{
    protected array $manager;
    protected string $active;




    /**
     * Boot up the cart manager by loading from cache.
     * Creates a default cart if none found.
     */
    public function __construct()
    {
        $this->manager = Cache::get('manager', []);
        $this->active = Cache::get('manager_active_cart_id', '');

        // If no carts exist, create a default one
        if (empty($this->manager)) {
            $newCart = $this->create('#cart_DEFAULT');
            $this->active = $newCart['id'];
            $this->save();
        }

        // If active cart is missing or invalid, fallback to first available cart
        if (!$this->findOne($this->active)) {
            $this->active = $this->manager[0]['id'] ?? '';
            $this->save();
        }
    }





    /**
     * Persist manager and active cart to cache
     */
    public function save(): void
    {
        Cache::put('manager', $this->manager);
        Cache::put('manager_active_cart_id', $this->active);
    }





    /**
     * Get the currently active cart ID
     */
    public function getActiveCartId(): string
    {
        return $this->active;
    }





    /**
     * Retrieve the active cart's full data
     */
    public function getActiveCart(): array|null
    {
        return $this->findOne($this->active);
    }





    /**
     * Retrieve the product list from the active cart
     */
    public function getProducts(): array|null
    {
        $cart = $this->findOne($this->active);
        return $cart["products"] ?? [];
    }





    /**
     * Set the active cart by ID, create if not found
     */
    public function setActive(string $cartId): array
    {
        $cart = $this->findOne($cartId);

        if (!$cart) {
            $cart = $this->create($cartId);
        }

        $this->active = $cart['id'];
        $this->save();

        return $cart;
    }





    /**
     * Set or replace products in the active cart
     */
    public function setProducts(array $products): bool
    {
        $indexOfCart = $this->indexOf($this->active);

        if ($indexOfCart === false) {
            return false; // active cart not found
        }

        $this->manager[$indexOfCart]["products"] = $products;
        $this->save();
        return true;
    }






    /**
     * Retrieve a single cart by ID
     */
    public function findOne(string $cartId): array|null
    {
        return collect($this->manager)->firstWhere('id', $cartId);
    }





    /**
     * Find the index of a cart within the manager
     */
    protected function indexOf(string $cartId): int|false
    {
        return collect($this->manager)->search(fn($item) => $item['id'] === $cartId);
    }





    /**
     * Retrieve all carts
     */
    public function all(): array
    {
        return $this->manager;
    }





    /**
     * Create a new cart with an optional ID
     * If already exists, returns the existing one
     */
    public function create(string|null $cartId = null): array
    {
        $cartId = $cartId ?: 'cart_' . uniqid();

        $existing = $this->findOne($cartId);
        if ($existing) {
            return $existing;
        }

        $newCart = ['id' => $cartId, "products" => []];
        $this->manager[] = $newCart;
        $this->save();

        return $newCart;
    }





    /**
     * Add new items to the active cart
     */
    public function update(array $cart): array
    {
        $indexOfCart = $this->indexOf($this->active);
        if ($indexOfCart === false) {
            throw new \Exception("Cart not found", 404);
        }

        $this->manager[$indexOfCart]["products"][] = $cart;
        $this->save();

        return $this->manager[$indexOfCart];
    }






    /**
     * Delete a cart by ID and reset active cart if needed
     */
    public function delete(string $cartId): bool
    {
        $exists = $this->findOne($cartId);

        if (!$exists) {
            return false;
        }

        // Remove the cart
        $this->manager = array_values(array_filter($this->manager, fn($cart) => $cart['id'] !== $cartId));

        // If deleted cart was active, reassign
        if ($this->active === $cartId) {
            $this->active = $this->manager[0]['id'] ?? '';
        }

        $this->save();
        return true;
    }
}
