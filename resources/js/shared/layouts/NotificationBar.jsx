import React from "react";
import Heading from "../Heading";
import { useForm, usePage } from "@inertiajs/react";
import Notification from "./_partials/Notification";

const NotificationBar = ({ onClick }) => {
    const { notifications } = usePage().props;

    const { post } = useForm();

    const _notifications = notifications.map((notification) => (
        <Notification
            onDelete={(element) => {
                post(route("delete-notification", element));
            }}
            notification={notification}
        />
    ));

    return (
        <div className={`w-[300px] border-1 shadow-sm border-gray-200`}>
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
                    {/* Display user's name and email */}

                    <span className="text-gray-800 font-main text-xs font-bold">
                        Notifications
                    </span>
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {_notifications}
            </div>
        </div>
    );
};

export default NotificationBar;
