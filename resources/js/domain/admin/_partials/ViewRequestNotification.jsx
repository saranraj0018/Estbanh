import AdminLayout from "@/shared/layouts/AdminLayout";
import {
    InputLabel,
    PrimaryButton,
    SecondaryButton,
    TextInput,
} from "@/shared";
import Heading from "@/shared/Heading";
import Text from "@/shared/Text";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

const ViewRequestNotification = ({ notification, user }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [preview, setPreview] = useState(null);
    const [updatedUserAboutNewProduct, setUpdatedUserAboutNewProduct] =
        useState(false);
    const { post: deleteNotification } = useForm();

    return (
        <AdminLayout>
            <Head title={`${notification.title}`} />
            <div className="flex gap-8 mb-16 text-sm mt-5">
                {/* Left Panel */}
                <div className="w-[60%] border-r border-gray-200 ">
                    {/* Notification Header */}
                    <div className="mb-6 px-[2.5em]">
                        <Heading className="text-xl font-semibold">
                            {notification.title}
                        </Heading>
                        <Text className="text-gray-700 mt-1">
                            {notification.description}
                        </Text>
                        <p className="text-xs text-gray-400 mt-1">
                            {new Date(notification.created_at).toLocaleString()}
                        </p>
                    </div>

                    <div className="transition-all ease-out duration-500 mb-5">
                        {!isDeleting && (
                            <div className="flex items-center mt-3 gap-4 bg-gray-50 border-2 border-gray-200 px-[2.5em] py-2">
                                <div className="flex items-center gap-4 flex-1">
                                    <button
                                        onClick={() => setIsDeleting(true)}
                                        className="text-red-500  p-1 rounded-md font-main hover:text-red-700 text-xs"
                                    >
                                        Delete Notification
                                    </button>
                                </div>
                            </div>
                        )}

                        {isDeleting && (
                            <div className="flex items-center gap-4 mt-3 px-[2.5em]">
                                <button
                                    onClick={() => setIsDeleting(false)}
                                    className="text-gray-500 font-medium font-main text-xs"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        deleteNotification(
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

                        <div className="px-[2.5em] min-h-[20vh] w-full  my-10 border-b-2 border-gray-300 pb-5">
                            <h2 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-3">
                                Request
                            </h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-black font-main text-[13px]">
                                        Product Name
                                    </span>
                                    <span>{notification?.others?.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black font-main text-[13px]">
                                        Part Number
                                    </span>
                                    <span>
                                        {notification?.others?.part_number}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black font-main text-[13px]">
                                        Description
                                    </span>
                                    <span>
                                        {notification?.others?.description}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-end items-center mt-10 gap-2">
                                {updatedUserAboutNewProduct && (
                                    <Link
                                        method="POST"
                                        href={route(
                                            "product-added-notification",
                                            notification.id
                                        )}
                                        onClick={() =>
                                            setUpdatedUserAboutNewProduct(true)
                                        }
                                        className="text-blue-700 bg-blue-50 border-2 border-blue-200 p-2 rounded-md font-main text-xs"
                                    >
                                        Resend product added notification
                                    </Link>
                                )}
                                {!updatedUserAboutNewProduct && (
                                    <Link
                                        method="POST"
                                        href={route(
                                            "product-added-notification",
                                            notification.id
                                        )}
                                        onClick={() =>
                                            setUpdatedUserAboutNewProduct(true)
                                        }
                                        className="text-blue-700 bg-blue-50 border-2 border-blue-200 p-2 rounded-md font-main text-xs"
                                    >
                                        Send product added notification to user
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* User Info Section */}
                    <div className="space-y-10 px-[2.5em]">
                        {/* User Details */}
                        <div>
                            <h2 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-3">
                                User Details
                            </h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-black font-main text-[13px]">
                                        Name
                                    </span>
                                    <span>{user.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black font-main text-[13px]">
                                        Email
                                    </span>
                                    <span>{user.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-[3em] px-[2.5em]">
                        <h2 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-3">
                            Contact Information
                        </h2>
                        <div className="flex justify-between items-center">
                            {[
                                ["Issuer", user.issuer_name, user.issuer_phone],
                                [
                                    "Accountant",
                                    user.accountant_name,
                                    user.accountant_phone,
                                ],
                                [
                                    "Authority",
                                    user.authority_name,
                                    user.authority_phone,
                                ],
                            ].map(([role, name, phone], idx) => (
                                <div key={idx} className="mb-3 ">
                                    <span className="font-main">{role}</span>
                                    <div className="space-y-1">
                                        <div className="text-gray-600 text-sm">
                                            <span className="font-main text-black">
                                                {" "}
                                            </span>{" "}
                                            {name}
                                        </div>
                                        <div className="text-gray-600 text-sm">
                                            <span className="font-main text-black"></span>{" "}
                                            {phone}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="w-[40%]">
                    <div className="mb-5">
                        <h2 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-3">
                            Address
                        </h2>
                        <div className="text-gray-700 space-y-1 leading-relaxed">
                            <div>{user.address_line_1}</div>
                            {user.address_line_2 && (
                                <div>{user.address_line_2}</div>
                            )}
                            <div>
                                {user.city.name}, {user.state.name},{" "}
                                {user.country.name}
                            </div>
                            <div>{user.pin_code}</div>
                        </div>
                    </div>

                    <Heading className="text-base font-semibold text-gray-800 mb-4">
                        Image
                    </Heading>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        <img
                            onClick={() =>
                                setPreview(`/storage/${notification.image}`)
                            }
                            src={`/storage/${notification.image}`}
                            className="w-full aspect-square object-cover rounded-md border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer"
                        />
                    </div>
                    {preview && (
                        <img
                            src={preview}
                            className="w-full mt-6 rounded-md border border-gray-200 shadow-md object-contain max-h-[50vh]"
                        />
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default ViewRequestNotification;
