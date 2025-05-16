import { TimeIcon } from "@/Components/icons";
import { Link } from "@inertiajs/react";
import { Minus, Plus } from "lucide-react";
import { memo, useState } from "react";

const ListItem = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const decrement = (e) => {
        e.preventDefault();

        if (quantity > 1) {
            setQuantity((quantity) => quantity - 1);
        }
        return true;
    };

    const increment = (e) => {
        e.preventDefault();

        setQuantity((quantity) => quantity + 1);
        return true;
    };

    return (
        <div className="bg-white border-2 flex items-center overflow-hidden border-gray-300 rounded-xl min-h-46 mb-3">
            <div className="bg-gray-300 w-1/4 h-46">
                <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="w-3/4 h-46 py-3 px-5 ">
                <div className="flex items-center">
                    <div className="flex-1">
                        <p className="text-[14px] font-main text-gray-600 uppercase">
                            {product.part_number}
                        </p>
                        <h1 className="text-lg mt-1 font-main font-normal">
                            {product.name}
                        </h1>

                        <div className="flex gap-2 items-center mt-1 text-[14px] font-main text-gray-600">
                            <span>
                                ₹{product.discount_price}
                                /peice |
                            </span>

                            <span className="flex items-center gap-2">
                                <TimeIcon size={18} />
                                No returns or cancellations
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="text-2xl font-medium font-main text-black me-4">
                            ₹{product.discount_price * quantity}
                        </span>
                        <button
                            onClick={(e) => decrement(e)}
                            className="p-1 border-2 border-gray-700 rounded-md"
                        >
                            <Minus className="w-5 h-5" />
                        </button>
                        <p className="text-primary text-xl font-main  font-medium px-2">
                            {quantity}
                        </p>
                        <button
                            onClick={(e) => increment(e)}
                            className="p-1 bg-gray-900 text-white rounded-md"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="mt-5 mb-2 font-main text-[13px] w-full  flex">
                    <div className="flex flex-col gap-2 w-1/2">
                        <div className="flex justify-between">
                            <span>Warrenty </span>
                            <span className="text-gray-700">None </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Reference </span>
                            <span className="text-gray-700">
                                Own Reference{" "}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Weight </span>
                            <span className="text-gray-700">0.00 kg </span>
                        </div>
                    </div>
                    <div className="rounded-md w-1/2 flex flex-col items-end justify-center gap-2">
                        <Link href={route("view-product", product.id)}>
                            <button className="border-primary border-[1px] rounded-md text-[13px] w-32 block text-primary font-medium font-primary p-2">
                                View Product
                            </button>
                        </Link>
                        <button className="bg-secondary rounded-md text-[13px] w-32 block text-black font-medium font-primary p-2">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ListItem);
