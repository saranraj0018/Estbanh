import { SearchIcon } from "@/Components/icons";
import UserLayout from "@/Layouts/UserLayout";
import { PrimaryButton } from "@/Shared";
import AppButton from "@/Shared/AppButton";
import { Head, usePage } from "@inertiajs/react";
import { Search } from "lucide-react";
import React from "react";

const ProductList = ({ products }) => {
    const { search } = usePage().props.route.parameters;

    return (
        <UserLayout>
            <Head title="Search Product" />

            <section className="px-[8em]">
                <div className="mt-[1em]  bg-white p-5 rounded-lg border-2 border-gray-300">
                    <h1 className="font-main text-xl">Results for {search}</h1>

                    <div className="flex items-start gap-[1em] mt-[3em] w-full">
                        <div className="w-[30%] p-5">
                            <div className="bg-white border-2 border-gray-300 rounded-xl p-5">
                                <h1 className="font-main ">
                                    Refind your search
                                </h1>
                                <span className="font-main block text-primary mt-3 text-[14px]">
                                    Suitable for
                                </span>

                                <div className="rounded-[10px] w-full mt-5 flex space-x-2 bg-white shadow-md border-2 border-gray-200">
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
                                {products.map((product) => (
                                    <div className="bg-white border-2 flex items-center overflow-hidden border-gray-300 rounded-xl min-h-40 mb-3">
                                        <div className="bg-gray-300 w-1/4 h-40">
                                            <img
                                                src={product.image}
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <div className="w-3/4 h-40 py-3 px-5 flex items-start">
                                            <div className="flex-1">
                                                <p className="text-[14px] font-main text-gray-600 uppercase">
                                                    {product.part_number}
                                                </p>
                                                <h1 className="text-2xl mt-1 font-main font-normal">
                                                    {product.name}
                                                </h1>

                                                <div className="mt-3">
                                                  <p>Warrent -</p>
                                                </div>

                                                <div className="flex gap-2 items-center mt-1 text-[14px] font-main text-gray-600">
                                                    <span>
                                                        ₹
                                                        {product.discount_price}
                                                        /peice
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                              hello
                                            </div>
                                        </div>
                                    </div>
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
