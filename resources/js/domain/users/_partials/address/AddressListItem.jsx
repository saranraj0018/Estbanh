import { InputLabel } from "@/shared";
import DangerButton from "@/shared/DangerButton";
import Heading from "@/shared/Heading";
import { router, usePage } from "@inertiajs/react";
import { EditIcon, TrashIcon } from "lucide-react";
import React, { useState } from "react";

export default function AddressListItem({
    address,
    editingAddress,
    setEditingAddress,
}) {
    const defaultAddress = usePage().props.default_address;
    const [isDeleting, setIsDeleting] = useState(false);

    const setDefaultAddress = () => {
        router.post(route("address.default", address.id), {
            onSuccess: () => {
                console.log("success");
            },
        });
    };

    const deleteAddress = () => {
        router.delete(route("address.delete", address.id), {
            onSuccess: () => {
                setIsDeleting(false);
            },
        });
    };

    return (
        <div
            className={`shadow-sm rounded-xl p-2 ${
                editingAddress?.id == address.id ? "bg-zinc-200" : ""
            }`}
        >
            <div>
                <div className="flex items-start justify-start gap-3">
                    <input
                        type="radio"
                        name="address"
                        className="mt-1"
                        id={"address_" + address.id}
                        value={address.id}
                        checked={defaultAddress?.id == address.id}
                        onChange={setDefaultAddress}
                    />
                    <InputLabel htmlFor={"address_" + address.id}>
                        <Heading>{address.name}</Heading>
                        <p className="text-[14px] ">{address.address}</p>
                        <span className="text-[12px]">
                            phone: {address.phone}
                        </span>
                    </InputLabel>
                </div>
                <div className="mx-7">
                    {!isDeleting && editingAddress?.id != address.id && (
                        <div className="flex items-center gap-3 mt-5">
                            <button
                                className="flex flex-col justify-center items-center"
                                onClick={() => setEditingAddress(address)}
                            >
                                <EditIcon size={18} />
                                <span className="text-[12px]">Edit</span>
                            </button>
                            <button
                                onClick={() => setIsDeleting(true)}
                                className="flex flex-col justify-center items-center"
                            >
                                <TrashIcon size={18} />
                                <span className="text-[12px]">Delete</span>
                            </button>
                        </div>
                    )}

                    {isDeleting && (
                        <div className="flex items-center gap-3 mt-5">
                            <button
                                onClick={() => setIsDeleting(false)}
                                className="flex flex-col justify-center items-center"
                            >
                                <span className="text-[12px]">Cancel</span>
                            </button>
                            <DangerButton
                                onClick={deleteAddress}
                                className="text-[12px] space-x-1"
                            >
                                <TrashIcon className="text-black" size={18} />
                                <span className="text-black">
                                    Delete Address
                                </span>
                            </DangerButton>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
