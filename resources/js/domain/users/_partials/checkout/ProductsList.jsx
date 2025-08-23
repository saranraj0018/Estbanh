import React from "react";

export default function ProductsList({ products }) {
    console.log(products);
    return (
        <table className="w-full rounded mb-5">
            <thead className="bg-gray-300">
                <tr>
                    <th className="text-left px-2">S. no</th>
                    <th className="px-2 text-left">Product</th>
                    <th className="text-right px-2">Part Number</th>
                    <th className="text-right px-2">Quantity</th>
                    <th className="text-right px-2">Amount</th>
                </tr>
            </thead>
            <tbody>
                {products?.map((product, index) => (
                    <tr className="text-center" key={index}>
                        <td className="text-left px-2">{index + 1}.</td>
                        <td className="text-left px-2">{product?.name}</td>

                        <td className="text-right px-2">
                            {product?.part_number}
                        </td>
                        <td className="text-right px-2">{product?.quantity}</td>
                        <td className="text-right px-2">
                            {new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR",
                            }).format(product?.net_amount)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
