<?php

namespace App\Contracts;

use App\Models\Address as ModelsAddress;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection;




interface Address
{





    /**
     * Get all address
     * @return Collection
     */
    public function findAll(): Collection;








    /**
     * Get one address
     * @return ModelsAddress
     */
    public function findOne(ModelsAddress $address): ModelsAddress;












    /**
     * get the default address
     * @return ModelsAddress
     */
    public function getDefault(): ModelsAddress|null;














    /**
     * Set address as default
     * @return bool
     */
    public function setDefault(ModelsAddress $address): bool;










    /**
     * create new address
     * @return ModelsAddress
     */
    public function create(array $address): ModelsAddress;










    /**
     * create new address
     * @return bool
     */
    public function update(ModelsAddress $address, array $data): bool;










    /**
     * create new address
     * @return bool
     */
    public function delete(ModelsAddress $address): bool;
}
