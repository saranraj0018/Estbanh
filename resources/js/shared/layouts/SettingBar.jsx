import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

const SettingBar = ({ onClick, onSignOut }) => {

    const user = usePage().props.auth.user;


    const { post } = useForm();

    const logout = (e) => {
        e.preventDefault();
        post(route('admin.logout.test'), {
            onFinish: () => {
                console.log("completed logout");
            }
        });

      
    }



    return (
        <div className={`w-[300px] border-2 shadow-sm border-gray-200`}>
            <div className="h-[40px] px-3 flex justify-start items-center gap-3 border-b-2">
                <button className="" onClick={onClick}>
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        transform="rotate(180)"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#000000"
                                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                            ></path>
                            <path
                                fill="#000000"
                                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                            ></path>
                        </g>
                    </svg>
                </button>

                <div className="flex-1">
                    <span className="text-gray-800 font-main text-xs font-bold">
                        {user?.email || "guest@email.com"}
                    </span>
                </div>
            </div>

            {/* Menu */}
            <ul className="h-[90%] px-2 mt-3">
                <li className="w-full rounded-md">
                    <button
                        onClick={logout} className="w-full px-1 py-2 rounded-lg flex gap-4 items-center hover:bg-gray-100"
                    >
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="0 -0.5 25 25"
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
                                    d="M7.04401 9.53165C7.33763 9.23949 7.33881 8.76462 7.04665 8.47099C6.75449 8.17737 6.27962 8.17619 5.98599 8.46835L7.04401 9.53165ZM2.97099 11.4683C2.67737 11.7605 2.67619 12.2354 2.96835 12.529C3.26051 12.8226 3.73538 12.8238 4.02901 12.5317L2.97099 11.4683ZM4.02901 11.4683C3.73538 11.1762 3.26051 11.1774 2.96835 11.471C2.67619 11.7646 2.67737 12.2395 2.97099 12.5317L4.02901 11.4683ZM5.98599 15.5317C6.27962 15.8238 6.75449 15.8226 7.04665 15.529C7.33881 15.2354 7.33763 14.7605 7.04401 14.4683L5.98599 15.5317ZM3.5 11.25C3.08579 11.25 2.75 11.5858 2.75 12C2.75 12.4142 3.08579 12.75 3.5 12.75V11.25ZM17.5 12.75C17.9142 12.75 18.25 12.4142 18.25 12C18.25 11.5858 17.9142 11.25 17.5 11.25V12.75ZM5.98599 8.46835L2.97099 11.4683L4.02901 12.5317L7.04401 9.53165L5.98599 8.46835ZM2.97099 12.5317L5.98599 15.5317L7.04401 14.4683L4.02901 11.4683L2.97099 12.5317ZM3.5 12.75L17.5 12.75V11.25L3.5 11.25V12.75Z"
                                    fill="#000000"
                                ></path>
                                <path
                                    d="M9.5 15C9.5 17.2091 11.2909 19 13.5 19H17.5C19.7091 19 21.5 17.2091 21.5 15V9C21.5 6.79086 19.7091 5 17.5 5H13.5C11.2909 5 9.5 6.79086 9.5 9"
                                    stroke="#000000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                        </svg>
                        <span className="text-[15px] font-[450] mt-[0.09em]">
                            Sign Out
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default SettingBar;
