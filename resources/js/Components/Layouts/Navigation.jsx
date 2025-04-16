import React from "react";

const Navigation = ({ onOpenSideBar, onNotificationClick, onSettingClick }) => {
    return (
        <div
            className={`border-2 shadow-sm border-gray-200 h-[60px] flex justify-between items-center px-4`}
        >
            <button className="bg-transparent border-0 outline-none" onClick={onOpenSideBar}>
                <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22 3L2 3"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                    <path
                        d="M22 21L18 21M2 21L14 21"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                    <path
                        d="M9 8L8 8C6.11438 8 5.17157 8 4.58579 8.58579C4 9.17157 4 10.1144 4 12C4 13.8856 4 14.8284 4.58579 15.4142C5.17157 16 6.11438 16 8 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12C20 10.1144 20 9.17157 19.4142 8.58579C18.8284 8 17.8856 8 16 8L13 8"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                </svg>
            </button>

            <div className="flex gap-3">
                <button className="bg-transparent border-0 outline-none" onClick={onNotificationClick}>
                    <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="19"
                            cy="5"
                            r="3"
                            stroke="#1C274C"
                            stroke-width="1.5"
                        />
                        <path
                            d="M7 14H16"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                        <path
                            d="M7 17.5H13"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                        <path
                            d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12V10.5M13.5 2H12C7.28595 2 4.92893 2 3.46447 3.46447C2.49073 4.43821 2.16444 5.80655 2.0551 8"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
                <button className="bg-transparent border-0 outline-none" onClick={onSettingClick}>
                    <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="12"
                            cy="6"
                            r="4"
                            stroke="#1C274C"
                            stroke-width="1.5"
                        />
                        <path
                            d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Navigation;
