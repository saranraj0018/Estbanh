import React from "react";

const StyledTable = ({ children }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                {children}
            </table>
        </div>
    );
};

export const StyledTableBody = ({ children }) => {
    return <tbody>{children}</tbody>;
};

export const StyledTableCell = ({ className, children }) => {
    return <td className={`px-6 py-4 text-black ${className}`}>{children}</td>;
};

export const StyledTableHeader = ({ children }) => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            {children}
        </thead>
    );
};

export const StyledTableHeaderCell = ({ children }) => {
    return (
        <th scope="col" className="px-6 py-3">
            {children}
        </th>
    );
};

export const StyledTableRow = ({ children }) => {
    return (
        <tr className="bg-[#fff] border-b   border-white hover:bg-gray-100">
            {children}
        </tr>
    );
};


export default StyledTable;
