import React from "react";

const SelectBox = ({ dataset, placeholder, name = 'name', onChange, value }) => {

    return (
        <select
            onChange={onChange}
            id="countries"
            value={value}
            className="rounded-lg border-2 w-full border-gray-200 focus:border-indigo-900 ring-0 hover:ring-0 focus:outline-none focus:ring-0  hover:outline-0 outline-0 shadow-sm text-[13px] font-main font-light mt-2 text-gray-700 px-3 py-2"
        >

            <option value={0}>{placeholder}</option>
            {dataset && dataset.map((item, index) => (
                <option key={index} value={item.id}>{item[name]}</option>
            ))}
        </select>
    );
};

export default SelectBox;
