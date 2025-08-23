import StatusTag from "@/components/StatusTag";
import Modal from "@/shared/Modal";
import { usePage } from "@inertiajs/react";
import moment from "moment";
import React from "react";

export default function OrderModal({ show, order, setOrder }) {
    const user = usePage().props.auth.user;

    console.log(order);

    return (
        <Modal show={show}>
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        {order?.order_id}
                    </h2>

                    <button onClick={() => setOrder(null)}>
                        <svg
                            width="30px"
                            height="30px"
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
                                    d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                    stroke="#1C274C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                ></path>
                                <path
                                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                                    stroke="#1C274C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                ></path>
                            </g>
                        </svg>
                    </button>
                </div>

                <p className="mt-1 text-sm text-gray-600 ">Order Details</p>

                <div className="mt-5 text-sm text-gray-600 ">
                    <div className="flex justify-between items-center mb-3">
                        <h1 className="text-black">Status </h1>
                        <StatusTag status={order?.status} />
                    </div>

                    <div className="flex justify-between items-center mb-3">
                        <h1 className="text-black">Customer name </h1>
                        <span>{user?.name}</span>
                    </div>

                    <div className="flex justify-between items-center mb-3 border-b-2 border-gray-400 pb-4">
                        <h1 className="text-black">Shipped date </h1>
                        <span>
                            {" "}
                            {moment(order?.created_at).format(
                                "DD-MM-YYYY HH:mm A"
                            )}
                        </span>
                    </div>

                    <div className="mb-4">
                        <h1 className="text-black font-bold">Products </h1>

                        <div className="mt-5 border-b-2 border-gray-400 pb-4">
                            {order?.order_details?.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center mb-2"
                                >
                                    <span className="text-gray-900 font-bold">
                                        {item.product_name}
                                    </span>
                                    <span>
                                        {item.quantity} x{" "}
                                        {new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                        }).format(item.net_amount)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-900 font-bold">
                                Grand Total
                            </span>

                            <span className="text-blue-900">
                                {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                }).format(order.net_amount)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
