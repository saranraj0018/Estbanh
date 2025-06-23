import DaysFilter from "@/shared/filters/DaysFilter";
import SearchFilter from "@/shared/filters/SearchFilter";
import PrimaryButton from "@/shared/SecondaryButton";
import React from "react";

const Filters = ({ title, showCreateButton, toggleCreateBar }) => {
    return (
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-2 gap-2">
            <DaysFilter />
            <SearchFilter />

            {showCreateButton && (
                <PrimaryButton onClick={toggleCreateBar}>
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
                            <path
                                d="M6 12H18M12 6V18"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </g>
                    </svg>
                    Create {title}
                </PrimaryButton>
            )}
        </div>
    );
};

export default Filters;
