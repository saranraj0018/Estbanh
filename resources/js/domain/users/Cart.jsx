import UserLayout from "@/shared/layouts/UserLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import ListItem from "./_partials/cart/ListItem";
import Heading from "@/shared/Heading";
import Text from "@/shared/Text";
import AppButton from "@/shared/AppButton";

const Cart = ({ cart, invoice }) => {

    const {
        total,
        subTotal,
        shipping,
        totalWeight,
        grandTotal
    } = invoice;

    return (
        <UserLayout>
            <Head title="Cart" />
            <div className="px-[8em] mt-5">
                <Heading className="text-[22px]">Shopping Cart</Heading>
                <div className="mt-10 gap-5 flex justify-between">
                    <div className="w-[70%]">
                        <div>
                            <div className="flex items-center gap-3 font-main">
                                <span>{cart.length} results | </span>
                                <div className="text-gray-500 flex items-center gap-3 flex-1">
                                    <input type="checkbox" />
                                    <span>Select all</span>
                                </div>

                                <div>
                                    <div>
                                        <span>Sort By: </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            {cart.map((product, index) => (
                                <ListItem product={product} key={index} />
                            ))}
                        </div>
                    </div>

                    <div className="w-[30%]">
                        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-5 mt-9">
                            <div className="flex justify-between items-center mb-1">
                                <Text>Total: </Text>
                                <span className="font-inter">₹ {total}</span>
                            </div>

                            <div className="flex justify-between items-center mb-5">
                                <Text>Sub Total: </Text>
                                <span className="font-inter">₹ {subTotal}</span>
                            </div>

                            <div className="flex justify-between items-center mb-1">
                                <Text>Shipping: </Text>
                                <span className="font-inter">₹ {shipping}</span>
                            </div>

                            <div className="flex justify-between items-center mb-5">
                                <Text>Est. Total Weight: </Text>
                                <span className="font-inter">{totalWeight}</span>
                            </div>

                            <div className="flex justify-between items-center border-t-2 border-gray-300 pt-4">
                                <Text>Grand Total: </Text>
                                <span className="font-inter">₹ {grandTotal}</span>
                            </div>

                            <div className="rounded-[10px] w-full mt-5 flex space-x-2 bg-white shadow-md border-2 border-gray-200">
                                <select
                                    name=""
                                    id=""
                                    className="border-none rounded-md focus:outline-none focus:ring-0 focus:ring-white text-zinc-500 text-[12px] md:text-[15px] pe-2 md:pe-auto w-full"
                                >
                                    <option value="Make">
                                        Select your Career
                                    </option>
                                </select>
                            </div>

                            <AppButton className="w-full mt-5 flex items-center justify-center">
                                Continue to Checkout
                            </AppButton>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Cart;
