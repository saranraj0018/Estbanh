import React, { useState, useRef, useEffect } from "react";
import S1 from "@/Assets/home/S1.png";
import Suggestions from "./Suggestions";
import { SearchIcon } from "@/Components/icons";
import { router, useForm } from "@inertiajs/react";
import axios from "axios";

const SearchBar = () => {
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);
    const [dataset, setDataset] = useState(false);

    const { data, setData, reset } = useForm({
        search: "",
    });

    const submit = async (e) => {
        e.preventDefault();
        if(data.search.length) {
            router.get(route("products-list",  { search: data.search }))
        }
    };

    const handleInputChange = async (e) => {
        if (e.target.value.length) {
            const response = await axios.post(route("search"), {
                search: e.target.value,
            });

            setDataset(() => response.data.products);
            if (response.data.products.length) {
                setIsActive(() => true);
            }
        } else {
            setDataset(() => []);
            setIsActive(() => false);
        }
    };

    return (
        <>
            {/* Semi-transparent background when active */}
            {isActive && <div className="fixed inset-0 bg-black/50 z-30"></div>}

            {/* Search Container */}
            <div className="relative z-40" ref={dropdownRef}>
                {/* Search Input */}
                <form
                    onSubmit={submit}
                    className="py-[2px] px-[4px] border-1 border-secondary bg-white rounded-xl w-[500px] flex space-x-2"
                >
                    <select className="border-none font-main rounded-md focus:outline-none focus:ring-0 focus:ring-white text-zinc-500 text-[11px] md:text-[13px] pe-2 md:pe-auto">
                        <option value="Make">Make</option>
                    </select>
                    <input
                        type="text"
                        value={data.search}
                        placeholder="Start your search for quality parts..."
                        className="border-none rounded-md focus:outline-none focus:ring-0 focus:ring-white w-full text-[11px] md:text-[14px]"
                        onChange={(e) => {
                            setData("search", e.target.value);
                            handleInputChange(e);
                        }}
                    />
                    <button
                        className="text-zinc-400 text-[13px] font-main"
                        onClick={() => reset()}
                        type="button"
                    >
                        Clear
                    </button>
                    <button type="submit" className="bg-secondary text-black font-main py-2 px-1 md:px-3 flex font-regular my-auto rounded-[10px] text-[12px] md:text-[13px]">
                        <div className="my-auto me-1">{SearchIcon}</div>
                        Search
                    </button>
                </form>

                {dataset.length > 0 && <Suggestions Suggestions={dataset} />}

                {isActive && dataset.length === 0 && (
                    <div className="absolute bg-white border border-gray-200 w-full mt-1 p-2 rounded-md shadow-md text-gray-500">
                        No matching products found.
                    </div>
                )}
            </div>
        </>
    );
};

export default React.memo(SearchBar);
