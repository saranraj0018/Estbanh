import Heading from "@/Shared/Heading";
import Text from "@/Shared/Text";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const Notification = ({ notification, onDelete, showImage = true }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    return (
        <div
            key={notification.id}
            className={`p-3 rounded border cursor-pointer hover:bg-gray-50 ${
                notification.status === 0 ? "" : "bg-white"
            }`}
        >
            <div className="">
                <div>
                    {showImage && notification?.image && (
                        <img
                            className="mb-3 max-h-[100px] w-full object-cover rounded-lg"
                            src={notification.image}
                            alt="Image"
                        />
                    )}
                    <Heading className="text-sm font-medium">
                        {notification.title}
                    </Heading>
                    <Text className="text-xs text-gray-600 ">
                        {notification.description}
                    </Text>
                    <p className="text-[10px] text-gray-400 mt-1">
                        {new Date(notification.created_at).toLocaleString()}
                        {notification.status === 0 && (
                            <span className="ml-2 inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                    </p>
                </div>

                <div className="transition-all ease-out duration-500">
                    {!isDeleting && (
                        <div className="flex items-center gap-4 mt-3">
                            <button
                                onClick={() => setIsDeleting(true)}
                                className="text-red-500 font-main hover:text-red-700 text-xs"
                            >
                                Delete
                            </button>

                            {notification.type == 2 ? (
                                <Link
                                    as="button"
                                    data={{
                                        user_id:
                                            notification.registered_user_id,
                                    }}
                                    href={route(
                                        "view-register-notification",
                                        notification.id
                                    )}
                                    className="text-blue-500 font-medium font-main text-xs"
                                >
                                    View
                                </Link>
                            ) : notification.type == 3 ? (
                                <Link
                                    as="button"
                                    data={{
                                        user_id:
                                            notification.registered_user_id,
                                    }}
                                    
                                    href={route(
                                        "view-request-notification",
                                        notification.id
                                    )}
                                    className="text-blue-500 font-medium font-main text-xs"
                                >
                                    View
                                </Link>
                            ) : (
                                <Link
                                    as="button"
                                    href={route(
                                        "view-notification",
                                        notification.id
                                    )}
                                    className="text-blue-500 font-medium font-main text-xs"
                                >
                                    View
                                </Link>
                            )}
                        </div>
                    )}

                    {isDeleting && (
                        <div className="flex items-center gap-4 mt-3">
                            <button
                                onClick={() => setIsDeleting(false)}
                                className="text-gray-500 font-medium font-main text-xs"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    onDelete(notification.id);
                                }}
                                className="text-red-500 font-main hover:text-red-700 text-xs"
                            >
                                Delete this notification
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notification;
