import { SearchIcon, TimeIcon } from "@/Components/icons";
import UserLayout from "@/Layouts/UserLayout";
import { PrimaryButton } from "@/Shared";
import AppButton from "@/Shared/AppButton";
import { Head, Link, usePage } from "@inertiajs/react";
import { Minus, Plus, Search } from "lucide-react";
import React from "react";
import ListItem from "./Partials/Products/ListItem";

const ProductList = ({ products }) => {
    const { search } = usePage().props.route.parameters;

    return (
        <UserLayout>
            <Head title="Search Product" />

            <section className="px-[8em]">
                <div className="mt-[1em]  bg-white p-5 rounded-lg border-1 border-gray-300">
                    <h1 className="font-main text-xl">Results for {search}</h1>

                    <div className="flex items-start gap-[1em] mt-[3em] w-full">
                        <div className="w-[30%] p-5">
                            <div className="bg-white border-1 border-gray-300 rounded-xl p-5">
                                <h1 className="font-main ">
                                    Refind your search
                                </h1>
                                <span className="font-main block text-primary mt-3 text-[14px]">
                                    Suitable for
                                </span>

                                <div className="rounded-[10px] w-full mt-5 flex space-x-2 bg-white shadow-md border-1 border-gray-200">
                                    <select
                                        name=""
                                        id=""
                                        className="border-none rounded-md focus:outline-none focus:ring-0 focus:ring-white text-zinc-500 text-[12px] md:text-[15px] pe-2 md:pe-auto w-full"
                                    >
                                        <option value="Make">Make</option>
                                    </select>
                                </div>

                                <AppButton className="w-full mt-3 flex justify-center items-center">
                                    {SearchIcon} Search
                                </AppButton>
                            </div>
                        </div>
                        <div className="w-[70%] p-5">
                            <div className="flex items-center gap-3 font-main">
                                <span>{products.length} Results | </span>
                                <div className="text-gray-500 flex items-center gap-3">
                                    <input type="checkbox" />{" "}
                                    <span>Select all</span>
                                </div>
                            </div>

                            <div className="mt-3">
                                {products.map((product, index) => (
                                    <ListItem product={product} key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default ProductList;
