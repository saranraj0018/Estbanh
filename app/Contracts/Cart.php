<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection;

interface Cart
{







  /**
   * Get User's Cart
   * @return Collection|EloquentCollection
   */
  public function getCartValue(): array;








  /**
   * Get User's Cart
   * @return Collection|EloquentCollection
   */
  public function get(): Collection|EloquentCollection;








  /**
   * Get User's Cart
   * @return Collection|EloquentCollection
   */
  public function findOne(int $productId): array;









  /**
   * Check if a product is already in a cart
   * @return bool
   */
  public function exists(int $productId): bool;







  /**
   * Add a product to the cart
   * @return bool
   */
  public function add(int $productId, int $quantity): bool;








  /**
   * Remove a product from the cart
   * @return bool
   */
  public function remove(int $productId): bool;










  /**
   * Increment the quantity for the product
   * @return bool
   */
  public function increment(int $productId): bool;










  /**
   * Remove a product from the cart
   * @return bool
   */
  public function decrement(int $productId): bool;






  /**
   * Assign new Quantity
   * @param int $productId
   * @param int $varientId
   * @param int $quantity
   * @return bool
   */
  public function setQuantity(int $productId, int $quantity): bool;






  /**
   * Append Quantity
   * @param int $productId
   * @param int $varientId
   * @param int $quantity
   * @return bool
   */
  public function appendQuantity(int $productId, int $quantity): bool;




  /**
   * Clear the Cart
   * @throws \Exception
   * @return bool
   */
  public function clear(): bool;


}