import React from "react";
import { Link } from "@inertiajs/react";
import { Settings, SquareDashedMousePointer } from "lucide-react";

const Breadcrumb = ({ paths }) => {
    return (
        <nav className="h-10 flex items-center px-4 border-b-1 border-gray-300 w-full">
            <div className="flex items-center h-full w-full space-x-3 flex-1">
                <button>
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M20 7L4 7"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>{" "}
                            <path
                                opacity="0.5"
                                d="M20 12L4 12"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>{" "}
                            <path
                                d="M20 17L4 17"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>{" "}
                        </g>
                    </svg>
                </button>
                {paths.map((crumb, index) => {
                    const isLast = index === paths.length - 1;
                    const to = "/" + paths.slice(0, index + 1).join("/");

                    return (
                        <React.Fragment key={index}>
                            {!isLast ? (
                                <Link
                                    href={to}
                                    className="hover:underline capitalize"
                                >
                                    <span className="text-gray-800 font-main text-xs">
                                        {crumb}
                                    </span>
                                </Link>
                            ) : (
                                <span className="capitalize">
                                    <span className="text-gray-800 font-main text-xs font-bold">
                                        {crumb}
                                    </span>
                                </span>
                            )}

                            {!isLast && (
                                <span className="text-gray-800 font-main text-sm">
                                    <svg
                                        fill="#000000"
                                        width="10px"
                                        height="10px"
                                        viewBox="0 0 24 24"
                                        id="right-2"
                                        data-name="Flat Line"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon flat-line"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <polyline
                                                id="primary"
                                                points="7.5 3 16.5 12 7.5 21"
                                                style={{
                                                    fill: "none",
                                                    stroke: "#000000",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                }}
                                            ></polyline>
                                        </g>
                                    </svg>
                                </span>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <button>
                <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <line
                            x1="5.99"
                            y1="12"
                            x2="6"
                            y2="12"
                            strokeLinecap="round"
                            strokeWidth="2"
                        ></line>
                        <line
                            x1="11.99"
                            y1="12"
                            x2="12"
                            y2="12"
                            strokeLinecap="round"
                            strokeWidth="2"
                        ></line>
                        <line
                            x1="17.99"
                            y1="12"
                            x2="18"
                            y2="12"
                            strokeLinecap="round"
                            strokeWidth="2"
                        ></line>
                    </g>
                </svg>
            </button>
        </nav>
    );
};

export default Breadcrumb;
