import AppButton from "@/shared/AppButton";
import Text from "@/shared/Text";
import { router, usePage } from "@inertiajs/react";
import React from "react";

export default function Description({ invoice }) {
    const defaultAddress = usePage().props.default_address;
    if (!invoice) return null;

    const { total, subTotal, shipping, totalWeight, grandTotal } = invoice;

    const proceedToPay = (e) => {
        e.preventDefault();

        router.post(route("order.create"), {
            onSuccess: () => {
                console.log("success");
            },
        });
    };

    return (
        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-5">
            <div className="flex justify-between items-center mb-1">
                <Text>Total: </Text>
                <span className="">
                    {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                    }).format(total)}
                </span>
            </div>

            <div className="flex justify-between items-center mb-5">
                <Text>Sub Total: </Text>
                <span className="">
                    {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                    }).format(subTotal)}
                </span>
            </div>

            <div className="flex justify-between items-center mb-1">
                <Text>Shipping: </Text>
                <span className="">
                    {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                    }).format(shipping)}
                </span>
            </div>

            <div className="flex justify-between items-center mb-5">
                <Text>Est. Total Weight: </Text>
                <span className="">{totalWeight}</span>
            </div>

            <div className="flex justify-between items-center border-t-2 border-gray-300 pt-4">
                <Text>Grand Total: </Text>
                <span className="">
                    {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                    }).format(grandTotal)}
                </span>
            </div>

            <div className="flex items-center justify-center mt-5 ">
                {defaultAddress && total > 0 && (
                    <AppButton
                        onClick={proceedToPay}
                        className="w-[70%] flex items-center justify-center "
                    >
                        Proceed to Pay
                    </AppButton>
                )}
            </div>
        </div>
    );
}
