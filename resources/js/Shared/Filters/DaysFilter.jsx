import React from "react";

const DaysFilter = () => {
    return (
        <div className="flex-1">
            <div>
                <button
                    id="dropdownRadioButton"
                    data-dropdown-toggle="dropdownRadio"
                    className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                    type="button"
                >
                    <svg
                        className="w-3 h-3 text-gray-500  me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                    </svg>
                    Last 30 days
                    <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>

                <div
                    id="dropdownRadio"
                    className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm"
                    data-popper-reference-hidden=""
                    data-popper-escaped=""
                    data-popper-placement="top"
                    style={{
                        position: "absolute",
                        inset: "auto auto 0px 0px",
                        margin: "0px",
                        transform: "translate3d(522.5px, 3847.5px, 0px)",
                    }}
                >
                    <ul
                        className="p-3 space-y-1 text-sm text-gray-700 "
                        aria-labelledby="dropdownRadioButton"
                    >
                        <li>
                            <div className="flex items-center p-2 rounded-sm hover:bg-gray-100">
                                <input
                                    id="filter-radio-example-1"
                                    type="radio"
                                    value=""
                                    name="filter-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                                />
                                <label
                                    htmlFor="filter-radio-example-1"
                                    className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm "
                                >
                                    Last day
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 rounded-sm hover:bg-gray-100">
                                <input
                                    id="filter-radio-example-2"
                                    type="radio"
                                    value=""
                                    name="filter-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                                />
                                <label
                                    htmlFor="filter-radio-example-2"
                                    className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm "
                                >
                                    Last 7 days
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 rounded-sm hover:bg-gray-100">
                                <input
                                    id="filter-radio-example-3"
                                    type="radio"
                                    value=""
                                    name="filter-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                                />
                                <label
                                    htmlFor="filter-radio-example-3"
                                    className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm "
                                >
                                    Last 30 days
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 rounded-sm hover:bg-gray-100">
                                <input
                                    id="filter-radio-example-4"
                                    type="radio"
                                    value=""
                                    name="filter-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                                />
                                <label
                                    htmlFor="filter-radio-example-4"
                                    className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm "
                                >
                                    Last month
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 rounded-sm hover:bg-gray-100">
                                <input
                                    id="filter-radio-example-5"
                                    type="radio"
                                    value=""
                                    name="filter-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                                />
                                <label
                                    htmlFor="filter-radio-example-5"
                                    className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm "
                                >
                                    Last year
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DaysFilter;
