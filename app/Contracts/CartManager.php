<?php

namespace App\Contracts;

/**
 * Interface CartManager
 *
 * Contract for managing user carts, including cart creation, retrieval,
 * updating products, and handling active cart state.
 */
interface CartManager
{


    /**
     * Initialize the cart manager.
     * Used to prepare or load data sources like session, cache, or storage.
     */
    public function __construct();




    /**
     * Persist the current state of the Cart Manager and active cart.
     * Commonly used to store changes to session or cache.
     *
     * @return void
     */
    public function save(): void;





    /**
     * Get the identifier of the currently active cart.
     *
     * @return string Active cart ID
     */
    public function getActiveCartId(): string;






    /**
     * Retrieve the currently active cart.
     *
     * @return array|null The cart data or null if no active cart exists
     */
    public function getActiveCart(): array|null;







    /**
     * Retrieve all products from the active cart.
     *
     * @return array|null Array of products or null if cart is empty or inactive
     */
    public function getProducts(): array|null;







    /**
     * Set the active cart using the provided cart ID.
     * Creates the cart if it doesn't already exist.
     *
     * @param string $cartId The cart ID to activate
     * @return array The newly activated or existing cart data
     */
    public function setActive(string $cartId): array;







    /**
     * Replace the product list in the active cart.
     *
     * @param array $products Array of product data
     * @return bool True if update was successful, false otherwise
     */
    public function setProducts(array $products): bool;






    /**
     * Find and return a cart by its ID.
     *
     * @param string $cartId The cart ID to search for
     * @return array|null Cart data or null if not found
     */
    public function findOne(string $cartId): array|null;






    /**
     * Retrieve all available carts managed by this instance.
     *
     * @return array Array of all cart objects
     */
    public function all(): array;








    /**
     * Create a new cart with an optional custom ID.
     * If the cart already exists, it is skipped.
     *
     * @param string|null $cartId Optional cart ID
     * @return array The newly created or existing cart data
     */
    public function create(string|null $cartId = null): array;






    /**
     * Update a cart with new data.
     * Typically merges new product data into an existing cart.
     *
     * @param array $cart The cart data to update
     * @return array The updated cart
     */
    public function update(array $cart): array;







    /**
     * Delete a cart by its ID.
     *
     * @param string $cartId The cart ID to delete
     * @return bool True if deletion was successful, false otherwise
     */
    public function delete(string $cartId): bool;
}
