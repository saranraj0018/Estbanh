import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ collection }) => {
    const { links } = collection;

    return (
        <nav
            className="flex items-center justify-end flex-column flex-wrap md:flex-row  pt-4"
            aria-label="Table navigation"
        >

            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                {links.map((link, index) => {
                    const isFirst = index === 0;
                    const isLast = index === links.length - 1;
                    const isActive = link.active;
                    const isDisabled = link.url === null;

                    return (
                        <li key={index}>
                            <Link
                                href={link.url ?? '#'}
                                className={`
                                    flex items-center justify-center leading-tight border border-gray-300 font-inter px-4 py-2 text-[13px] text-black font-medium bg-gray-50  hover:bg-gray-100
                                    ${isActive
                                        ? 'bg-gray-400 '
                                        : ' '}
                                    ${isFirst ? 'rounded-s-lg' : ''}
                                    ${isLast ? 'rounded-e-lg' : ''}
                                    ${isDisabled ? 'pointer-events-none text-gray-400' : ''}
                                `}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                preserveScroll={true}
                            />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
