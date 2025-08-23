import UserLayout from "@/shared/layouts/UserLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import React from "react";
import Heading from "@/shared/Heading";
import { InputLabel } from "@/shared";

import Description from "./_partials/checkout/Description";
import ProductsList from "./_partials/checkout/ProductsList";
import AddressList from "./_partials/checkout/AddressList";
import NavigateHistoryHeading from "@/shared/NavigateHistoryHeading";

const Checkout = ({ products, address, invoice }) => {
    return (
        <UserLayout>
            <Head title="Checkout" />
            <div className="px-[8em] mt-5">
                <div className="flex gap-3 items-center">
                    <NavigateHistoryHeading
                        heading={
                            <Heading className="text-[22px]">Checkout</Heading>
                        }
                    />
                </div>
                <div className="mt-10 gap-5 flex justify-between">
                    <div className="w-[40%]">
                        <div className="mt-3 space-y-6">
                            <Heading>Shipping Info</Heading>

                            <Link href="/address">
                                <span className="text-blue-500 underline text-[13px] mt-10 cursor-pointer">
                                    Create Address
                                </span>
                            </Link>

                            {address.map((_address, index) => (
                                <AddressList _address={_address} key={index} />
                            ))}
                        </div>
                    </div>

                    <div className="w-[60%] mt-3 ">
                        <Heading className="mb-5">Invoice</Heading>

                        <ProductsList products={products} />
                        <Description invoice={invoice} />
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Checkout;
