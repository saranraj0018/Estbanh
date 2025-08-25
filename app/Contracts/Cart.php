<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection;

/**
 * Interface Cart
 *
 * Defines the structure for a Cart system — supports multiple named carts,
 * product operations, cart switching, and price/weight aggregations.
 */
interface Cart
{
    /**
     * Get a list of all cart IDs (names).
     *
     * @return array
     */
    public function getCartList(): array;





    /**
     * Create a new cart with a given name and set it as active.
     *
     * @param string $cartName
     * @return bool
     */
    public function createCart(string $cartName): bool;





    /**
     * Delete the currently active cart and fallback to a default cart.
     *
     * @return bool
     */
    public function deleteCart(): bool;





    /**
     * Get all product models in the active cart.
     *
     * @return Collection<Product>
     */
    public function get(): Collection;





    /**
     * Get the calculated values of the cart (total, subtotal, weight, etc).
     *
     * @return array{total: float, subTotal: float, shipping: float, totalWeight: string, grandTotal: float, count: int}
     */
    public function getCartValue(): array;





    /**
     * Get the ID/name of the currently active cart.
     *
     * @return string
     */
    public function getActiveCartName(): string;





    /**
     * Switch the active cart to another by cart ID.
     *
     * @param string $cartId
     * @return bool
     */
    public function switchCart(string $cartId): bool;






    /**
     * Add a product to the cart. If already exists, quantity is updated.
     *
     * @param array $cart [productId, quantity, ...]
     * @return array The updated or inserted cart item.
     */
    public function addToCart(array $cart): array;






    /**
     * Increment the quantity of a product in the cart by 1.
     *
     * @param int $productId
     * @return bool
     */
    public function increment(int $productId): bool;







    /**
     * Decrement the quantity of a product in the cart by 1.
     * If quantity drops below 1, product is removed.
     *
     * @param int $productId
     * @return bool
     */
    public function decrement(int $productId): bool;






    /**
     * Remove a specific product from the active cart.
     *
     * @param string $cartId Product ID to remove
     * @return bool
     */
    public function removeFromCart(string $cartId): bool;
}
