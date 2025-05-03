import React, { useState, useRef, useEffect } from "react";
import S1 from "@/Assets/home/S1.png";
import Suggestions from "./Suggestions";

const SearchIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 19 19"
        fill="none"
    >
        <path
            d="M9.29415 16.1913C13.0173 16.1913 16.0356 13.1731 16.0356 9.44991C16.0356 5.72673 13.0173 2.7085 9.29415 2.7085C5.57097 2.7085 2.55273 5.72673 2.55273 9.44991C2.55273 13.1731 5.57097 16.1913 9.29415 16.1913Z"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M13.9834 14.4888L16.6264 17.125"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ProductSuggestions = [
    { Image: S1, ProductCode: "TVH/5616", ProductName: "Chrome Gear Machine" },
    { Image: S1, ProductCode: "TVH/7823", ProductName: "Steel Rod" },
    { Image: S1, ProductCode: "TVH/1298", ProductName: "Aluminum Sheet" },
    { Image: S1, ProductCode: "TVH/4512", ProductName: "Iron Bolts" },
];

const SearchBar = () => {
    const [isActive, setIsActive] = useState(false);
    const [searchText, setSearchText] = useState(""); // Input state
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsActive(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle input change
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        setIsActive(true);
    };

    // Clear input and close popup
    const handleClear = () => {
        setSearchText(""); // Reset input field
        setIsActive(false); // Close dropdown
    };

    // Filter products based on input
    const filteredSuggestions = ProductSuggestions.filter(
        (product) =>
            product.ProductCode.toLowerCase().includes(
                searchText.toLowerCase()
            ) ||
            product.ProductName.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            {/* Semi-transparent background when active */}
            {isActive && <div className="fixed inset-0 bg-black/50 z-30"></div>}

            {/* Search Container */}
            <div className="relative z-40" ref={dropdownRef}>
                {/* Search Input */}
                <div className="p-[1px] border-[1px] border-secondary bg-zinc-50 rounded-[10px] w-full flex space-x-2">
                    <select className="border-none rounded-md focus:outline-none focus:ring-0 focus:ring-white text-zinc-500 text-[12px] md:text-[15px] pe-2 md:pe-auto">
                        <option value="Make">Make</option>
                        <option value="Option1">Option1</option>
                        <option value="Option2">Option2</option>
                    </select>
                    <input
                        type="text"
                        value={searchText}
                        placeholder="Start your search for quality parts..."
                        className="border-none rounded-md focus:outline-none focus:ring-0 focus:ring-white w-full text-[12px] md:text-[15px]"
                        onChange={handleInputChange}
                    />
                    <button
                        className="text-zinc-400 text-[13px] font-primary"
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                    <button className="bg-secondary text-black font-primary py-2 px-1 md:px-3 flex font-medium my-auto rounded-[10px] text-[12px] md:text-[15px]">
                        <div className="my-auto me-1">{SearchIcon}</div>
                        Search
                    </button>
                </div>

                {/* Dropdown Menu - Shows only if search text is entered and matches products */}
                {isActive &&
                    searchText.trim() !== "" &&
                    filteredSuggestions.length > 0 && (
                        <Suggestions Suggestions={filteredSuggestions} />
                    )}

                {/* If no matches are found */}
                {isActive &&
                    searchText.trim() !== "" &&
                    filteredSuggestions.length === 0 && (
                        <div className="absolute bg-white border border-gray-200 w-full mt-1 p-2 rounded-md shadow-md text-gray-500">
                            No matching products found.
                        </div>
                    )}
            </div>
        </>
    );
};

export default SearchBar;