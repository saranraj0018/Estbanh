<?php

namespace App\Http\Controllers;

use App\Contracts\Address;
use App\Http\Controllers\Controller as BaseController;
use App\Http\Requests\AddressRequest;
use App\Models\Address as ModelsAddress;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;


class AddressController extends BaseController
{



    public function __construct(protected Address $address)
    {
        //
    }







    /**
     * @return Response
     */
    public function index(): Response
    {
        return inertia('users/Address', [
            'address' => $this->address->findAll(),
        ]);
    }








    /**
     * Add item to Cart
     * @return RedirectResponse
     */
    public function setDefault(ModelsAddress $address): RedirectResponse
    {

        try {
            # make and action to the cart
            if (!$this->address->setDefault($address))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back()->with('success', 'Address Set as Default');
        } catch (\Throwable $th) {
            throw $th;
        }
    }








    /**
     * Add item to Cart
     * @return RedirectResponse
     */
    public function create(AddressRequest $request): RedirectResponse
    {
        try {
            # make and action to the cart
            if (!$this->address->create($request->validated()))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back()->with('success', 'Address Created Successfully');
        } catch (\Throwable $th) {
            throw $th;
        }
    }








    /**
     * Add item to Cart
     * @return RedirectResponse
     */
    public function update(AddressRequest $request, ModelsAddress $address): RedirectResponse
    {
        try {
            # make and action to the cart
            if (!$this->address->update(address: $address, data: $request->validated()))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back()->with('success', 'Address Updated Successfully');
        } catch (\Throwable $th) {
            throw $th;
        }
    }





    /**
     * Add item to Cart
     * @return RedirectResponse
     */
    public function delete(ModelsAddress $address): RedirectResponse
    {
        try {
            # decrement the product from the cart
            if (!$this->address->delete($address))
                throw new \Exception('Something Went Wrong', 500);

            return redirect()->back()->with('success', 'Address Deleted Successfully');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
