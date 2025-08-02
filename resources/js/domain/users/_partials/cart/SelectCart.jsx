import Dropdown from "@/shared/Dropdown";
import { router, usePage } from "@inertiajs/react";
import { ChevronDown, ShoppingCartIcon } from "lucide-react";
import React from "react";

export default function SelectCart() {
    const carts = usePage().props?.carts;
    const activeCart = usePage().props?.activeCart;

    const selectActiveCart = (cart) => {
        router.post(route("switch-cart"), { cartId: cart });
    };

    return (
        <Dropdown>
            <Dropdown.Trigger>
                <span className="inline-flex rounded-md">
                    <button
                        type="button"
                        className="flex items-center py-1 px-1 rounded-full border-[2px] border-secondary h-min space-x-1"
                    >
                        <div className="bg-gray-200 p-1 shadow-md rounded-full">
                            <ShoppingCartIcon color="#000" size={18} />
                        </div>

                        <span className="text-black font-main text-[12px] ">
                            {activeCart}
                        </span>
                        <ChevronDown color="#000" />
                    </button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content className="bg-primary">
                {carts &&
                    carts.map((cart, idx) => (
                        <Dropdown.Button
                            key={idx}
                            href={route("logout")}
                            method="post"
                            as="button"
                            onClick={() => selectActiveCart(cart)}
                            className="bg-primary text-white hover:bg-gray-900"
                        >
                            {cart}
                        </Dropdown.Button>
                    ))}
            </Dropdown.Content>
        </Dropdown>
    );
}
