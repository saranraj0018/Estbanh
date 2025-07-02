import { TimeIcon } from "@/components/icons";
import { Link, useForm } from "@inertiajs/react";
import { Minus, Plus } from "lucide-react";
import { memo, useState } from "react";

const ListItem = ({ product }) => {
    const { data, setData, errors, post } = useForm({
        productId: product.id,
        quantity: product?.quantity,
    });

    const decrement = (e) => {
        e.preventDefault();

        if (data?.quantity > 1) {
            post(route("decrement.cart"), {
                onError: (error) => console.log(error),
            });
        }
        return true;
    };
  
    const increment = (e) => {
        e.preventDefault();


        post(route("increment.cart"), {
            onError: (error) => console.log(error),
        });
        return true;
    };

 

    const remove = (e) => {
        e.preventDefault();

        post(route("remove.cart"), {
            onError: (error) => console.log(error),
        });
    }

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
                <div className="flex items-start">
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

                    <button className="bg-yellow-50 p-[.5em] rounded-full" onClick={remove}>
                        <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.40231 4.06482L4.19236 17.344C4.20426 17.5419 4.29123 17.7278 4.43551 17.8637C4.5798 17.9997 4.77054 18.0755 4.9688 18.0756H12.0053C12.2036 18.0755 12.3943 17.9997 12.5386 17.8637C12.6829 17.7278 12.7699 17.5419 12.7818 17.344L13.5718 4.06482H3.40231ZM14.7423 4.06482L13.9474 17.413C13.9179 17.9081 13.7004 18.3733 13.3395 18.7134C12.9785 19.0536 12.5013 19.2431 12.0053 19.2432H4.9688C4.47282 19.2431 3.9956 19.0536 3.63465 18.7134C3.2737 18.3733 3.05625 17.9081 3.02674 17.413L2.23182 4.06482H0.216797V3.38374C0.216797 3.25472 0.268052 3.13098 0.359286 3.03974C0.450519 2.94851 0.574259 2.89725 0.703283 2.89725H16.2709C16.3999 2.89725 16.5236 2.94851 16.6148 3.03974C16.7061 3.13098 16.7573 3.25472 16.7573 3.38374V4.06482H14.7423ZM10.433 0.756714C10.562 0.756714 10.6858 0.807969 10.777 0.899203C10.8682 0.990436 10.9195 1.11418 10.9195 1.2432V1.92428H6.05464V1.2432C6.05464 1.11418 6.10589 0.990436 6.19712 0.899203C6.28836 0.807969 6.4121 0.756714 6.54112 0.756714H10.433ZM6.05464 6.59455H7.2222L7.70869 15.3513H6.54112L6.05464 6.59455ZM9.75193 6.59455H10.9195L10.433 15.3513H9.26545L9.75193 6.59455Z"
                                fill="black"
                            />
                        </svg>
                    </button>
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
                        <div className="flex gap-1 items-center">
                            <span className="text-xl font-medium font-main text-black me-4">
                                ₹{product.discount_price * product.quantity}
                            </span>
                            <button
                                onClick={(e) => decrement(e)}
                                className="p-1 border-2 border-gray-700 rounded-md"
                            >
                                <Minus className="w-5 h-5" />
                            </button>
                            <p className="text-primary text-lg font-main  font-medium px-2">
                                {product.quantity}
                            </p>
                            <button
                                onClick={(e) => increment(e)}
                                className="p-1 bg-gray-900 text-white rounded-md"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ListItem);
