import UserLayout from "@/shared/layouts/UserLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import Heading from "@/shared/Heading";
import moment from "moment";
import { EyeIcon } from "lucide-react";
import SingleOrder from "./_partials/orders/SingleOrder";
import OrderModal from "./_partials/orders/OrderModal";
import NavigateHistoryHeading from "@/shared/NavigateHistoryHeading";

const Orders = ({ orders }) => {
    const [order, setOrder] = useState(false);

    return (
        <UserLayout>
            <Head title="Orders" />
            <div className="px-[8em] mt-8">
                {/* Header */}
                <div className="flex gap-3 items-center border-b pb-3">
                    <NavigateHistoryHeading
                        heading={
                            <Heading className="text-2xl font-semibold text-gray-800">
                                Orders
                            </Heading>
                        }
                    />
                </div>

                {/* Table */}
                <div className="mt-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                    <table className="w-full text-sm text-gray-700">
                        <thead className="bg-gray-100">
                            <tr className="border-b text-gray-600">
                                <th className="px-4 py-3 text-left font-medium">
                                    Order Id
                                </th>
                                <th className="px-4 py-3 text-left font-medium">
                                    Date
                                </th>
                                <th className="px-4 py-3 text-right font-medium">
                                    Total Amount
                                </th>
                                <th className="px-4 py-3 text-right font-medium">
                                    Net Amount
                                </th>
                                <th className="px-4 py-3 text-right font-medium">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-center font-medium">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders?.map((order, index) => (
                                <SingleOrder
                                    order={order}
                                    key={index}
                                    setOrder={setOrder}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {order && (
                <OrderModal show={!!order} order={order} setOrder={setOrder} />
            )}
        </UserLayout>
    );
};

export default Orders;
