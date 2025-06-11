const DefaultSideBar = ({ header, children, dispatchSideBarState, width }) => {
    return (
        <div className={`border-1 shadow-sm border-gray-200`} style={{ minWidth: width }}>
            <div className="flex justify-start items-center gap-3 bg-gray-50 p-3 shadow-sm">
                <button onClick={() => dispatchSideBarState()}>
                    <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <span className="text-[15px] font-[450] mt-[0.09em]">
                    {header}
                </span>
            </div>

            <div className="p-5">
                <div className="py-4">{children}</div>
            </div>
        </div>
    );
};

export default DefaultSideBar;
