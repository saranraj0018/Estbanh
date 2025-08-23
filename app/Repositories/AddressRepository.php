<?php

namespace App\Repositories;

use App\Contracts\Address;
use App\Models\Address as ModelsAddress;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AddressRepository implements Address
{


    /**
     * Get all address
     * @return Collection
     */
    public function findAll(): Collection
    {
        return ModelsAddress::where('user_id', Auth::id())->latest()->get();
    }



    /**
     * Get one address
     * @return ModelsAddress
     */
    public function findOne(ModelsAddress $address): ModelsAddress
    {
        return $address;
    }





    /**
     * Get the default address
     * @return ModelsAddress
     */
    public function getDefault(): ModelsAddress|null
    {
        # if no default address give and the user has other addresses
        return ModelsAddress::where('user_id', Auth::id())
            ->where('is_default', "1")
            ?->first();
    }




    /**
     * Set address as default
     * @return bool
     */
    public function setDefault(ModelsAddress $address): bool
    {
        try {
            DB::beginTransaction();

            ModelsAddress::where('is_default', "1")->update(['is_default' => "0"]);
            $address->update(['is_default' => "1"]);

            DB::commit();
            return true;
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }



    /**
     * create new address
     * @return ModelsAddress
     */
    public function create(array $address): ModelsAddress
    {
        try {
            # creating the address
            $_main = ModelsAddress::create([
                ...$address,
                "is_default" => "0",
                "user_id" => Auth::id()
            ]);

            # set default address to it
            $this->setDefault($_main);
            return $_main;
        } catch (\Throwable $th) {
            throw $th;
        }
    }



    /**
     * create new address
     * @return bool
     */
    public function update(ModelsAddress $address, array $data): bool
    {
        try {
            $_main = $address->update($data);
            return $_main;
        } catch (\Throwable $th) {
            dd($th);
            throw $th;
        }
    }



    /**
     * create new address
     * @return bool
     */
    public function delete(ModelsAddress $address): bool
    {
        try {
            if ($address->is_default && ($this->findAll()->first()))
                $this->setDefault($this->findAll()->first());

            $_main = $address->delete();
            return $_main;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
