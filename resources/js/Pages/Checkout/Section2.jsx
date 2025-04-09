const Section2 = ({
    Sec_2_Billing_Shipping,
    Sec_2_Product_Data,
    Sec_2_Trade_Data,
}) => {
    return (
        <>
            <section className="px-4 lg:px-32 xl:px-32 2xl:px-40">
                <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-6 lg:col-span-7">
                        <div className="overflow-x-auto">
                            <div className="w-full">
                                <table className="w-full table-auto">
                                    <thead className="bg-secondary">
                                        <tr className="text-left text-sm text-black">
                                            <th className="p-3 border">S.No</th>
                                            <th className="p-3 border">
                                                Products
                                            </th>
                                            <th className="p-3 border">Code</th>
                                            <th className="p-3 border">
                                                Quantity
                                            </th>
                                            <th className="p-3 border">
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Sec_2_Product_Data.map(
                                            (item, index) => (
                                                <tr
                                                    key={index}
                                                    className="text-sm text-gray-700"
                                                >
                                                    <td className="p-3 border">
                                                        {index + 1}.
                                                    </td>
                                                    <td className="p-3 border">
                                                        {item.Products}
                                                    </td>
                                                    <td className="p-3 border">
                                                        {item.Code}
                                                    </td>
                                                    <td className="p-3 border">
                                                        {item.Quantity}
                                                    </td>
                                                    <td className="p-3 border">
                                                        {item.Amount}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 space-y-3">
                        <div className="p-3 rounded-lg bg-[#F9F9F9] border-[1px] border-zinc-200 shadow-md space-y-3">
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        SHIPPING INFO
                                    </p>
                                    <p className="text-sm font-primary">
                                        {Sec_2_Billing_Shipping.Shipping}
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium text-end">
                                        DATE
                                    </p>
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Billing_Shipping.Date}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="">
                                <p className="text-sm text-[#556174] font-primary font-medium">
                                    BILLING INFO
                                </p>
                                <p className="text-sm font-primary">
                                    {Sec_2_Billing_Shipping.Billing}
                                </p>
                            </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#F9F9F9] border-[1px] border-zinc-200 shadow-md space-y-3">
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        Career
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Trade_Data.Career}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        Delivery Method
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Trade_Data.Delivery_Method}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        Shipment Priority
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Trade_Data.Shipment_Priority}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        INCO_Terms
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Trade_Data.INCO_Terms}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        Country of Destination
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {
                                            Sec_2_Trade_Data.Country_of_Destination
                                        }
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <h3 className="text-[12px] font-primary font-medium">
                                BACKORDERS
                            </h3>
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        Delivery Method
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Trade_Data.Delivery_Method}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        Shipment Priority
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Trade_Data.Shipment_Priority}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        Est. total weight
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Trade_Data.Est_total_weight}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        Est shipping cost
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Trade_Data.Est_shipping_cost}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-sm text-[#556174] font-primary font-medium">
                                        Subtotal
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Trade_Data.Subtotal}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-end">
                                <div className="w-2/3 space-y-2">
                                    <p className="text-md font-primary font-medium">
                                        TOTAL
                                    </p>
                                </div>
                                <div className="w-1/3 space-y-2">
                                    <p className="text-sm font-primary text-end">
                                        {Sec_2_Trade_Data.Total}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="rounded-md text-black px-3 py-2 text-sm font-primary font-medium bg-secondary">
                                Proceed to Pay
                            </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section2;
