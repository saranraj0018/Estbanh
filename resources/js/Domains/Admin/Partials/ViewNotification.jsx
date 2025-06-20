import AdminLayout from "@/Layouts/AdminLayout";
import Heading from "@/Shared/Heading";
import Text from "@/Shared/Text";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

const ViewNotification = ({ notification }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const { post } = useForm();

    return (
        <AdminLayout className="p-3">
            <Head title={`${notification.title}`} />
            <div className="flex items-start justify-between">
                <div className="w-[60%] border-1 h-[80vh] border-gray-400">
                    <Heading>{notification.title}</Heading>
                    <Text>{notification.description}</Text>
                    <p className="text-[10px] text-gray-400 mt-1">
                        {new Date(notification.created_at).toLocaleString()}
                    </p>

                    <div className="transition-all ease-out duration-500">
                        {!isDeleting && (
                            <div className="flex items-center gap-4 mt-3">
                                <button
                                    onClick={() => setIsDeleting(true)}
                                    className="text-red-500 font-main hover:text-red-700 text-xs"
                                >
                                    Delete Notification
                                </button>

                                <button className="text-blue-400 font-main hover:text-blue-700 text-xs">
                                    Reply
                                </button>

                                {notification?.type == "register" && (
                                    <Link
                                        as="button"
                                        method="POST"
                                        href={route(
                                            "approve-user",
                                            notification.id
                                        )}
                                        className="text-blue-500 font-medium font-main text-xs"
                                    >
                                        Approve user
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
                                        post(
                                            route(
                                                "delete-notification",
                                                notification.id
                                            )
                                        );
                                    }}
                                    className="text-red-500 font-main hover:text-red-700 text-xs"
                                >
                                    Delete this notification
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-[40%]  px-[2em]">
                    <Heading>Notification image</Heading>

                    <img
                        src={`/storage/${notification.image}`}
                        className="rounded-md object-cover w-full"
                    />
                </div>
            </div>
        </AdminLayout>
    );
};

export default ViewNotification;
