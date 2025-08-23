import { SearchIcon, TimeIcon } from "@/components/icons";
import UserLayout from "@/shared/layouts/UserLayout";

import AppButton from "@/shared/AppButton";
import { Head, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import ListItem from "./_partials/products/ListItem";
import RequestProduct from "./_partials/products/RequestProduct";
import SelectCart from "./_partials/cart/SelectCart";
import NavigateHistoryHeading from "@/shared/NavigateHistoryHeading";

const Wishlist = ({ wishlist }) => {
    const { search } = usePage().props.route.parameters;
    const [show, setShow] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { make } = usePage().props;
    const user = usePage().props.auth.user;

    return (
        <UserLayout>
            <Head title="Search Product" />

            <RequestProduct
                state={show}
                action={setShow}
                setSubmitted={setSubmitted}
            />

            <section className="px-[8em]">
                <div className="mt-[1em]  bg-white p-5 rounded-lg border-2 border-gray-300">
                    <NavigateHistoryHeading
                        heading={
                            <div className="flex items-center justify-between w-full">
                                <h1 className="font-main text-xl ">
                                    Wishlist products
                                </h1>
                                <SelectCart />
                            </div>
                        }
                    />

                    <div className="flex items-start gap-[1.4em] mt-[3em] w-full">
                        <div className="w-[30%] ">
                            <div className="bg-white border-2 border-gray-300 rounded-xl p-5">
                                <h1 className="font-main ">
                                    Search Wished Products
                                </h1>

                                <div className="rounded-[10px] w-full mt-5 flex space-x-2 bg-white shadow-md border-2 border-gray-200">
                                    <select
                                        name=""
                                        id=""
                                        className="border-none rounded-md focus:outline-none focus:ring-0 focus:ring-white text-zinc-500 text-[12px] md:text-[15px] pe-2 md:pe-auto w-full"
                                    >
                                        <option value="Make">Make</option>
                                        {make &&
                                            make?.map((m) => (
                                                <option value={m.id}>
                                                    {m.make}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                <AppButton className="w-full mt-3 flex justify-center items-center">
                                    {SearchIcon} Search
                                </AppButton>
                            </div>
                        </div>
                        <div className="w-[70%]">
                            <div className="flex items-center gap-3 ">
                                <span>{wishlist.length} products </span>
                            </div>

                            <div className="mt-3">
                                {wishlist.map((product, index) => (
                                    <ListItem product={product} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default Wishlist;
