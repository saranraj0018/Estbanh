import { InputLabel } from "@/shared";
import Heading from "@/shared/Heading";
import { router, usePage } from "@inertiajs/react";
import React from "react";

export default function AddressList({ _address }) {
    const defaultAddress = usePage().props.default_address;

    const setDefaultAddress = (id) => {
        router.post(route("address.default", id), {
            onSuccess: () => {
                console.log("success");
            },
        });
    };

    return (
        <div className="flex items-start justify-start gap-3">
            <input
                type="radio"
                name="address"
                className="mt-1"
                id={"address_" + _address.id}
                value={_address.id}
                checked={defaultAddress?.id == _address.id}
                onChange={() => setDefaultAddress(_address.id)}
            />
            <InputLabel htmlFor={"address_" + _address.id}>
                <Heading>{_address.name}</Heading>
                <p className="text-[14px] ">{_address.address}</p>
                <span className="text-[12px]">phone: {_address.phone}</span>
            </InputLabel>
        </div>
    );
}
