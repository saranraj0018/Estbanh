import UserLayout from "@/shared/layouts/UserLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import Heading from "@/shared/Heading";
import AddressListItem from "./_partials/address/AddressListItem";
import CreateAddress from "./_partials/address/CreateAddress";
import NavigateHistoryHeading from "@/shared/NavigateHistoryHeading";

const Address = ({ address }) => {
    const [editingAddress, setEditingAddress] = useState(null);

    return (
        <UserLayout>
            <Head title="Address" />
            <div className="px-[8em] mt-5">
                <div className="flex gap-3 items-center">
                    <NavigateHistoryHeading
                        heading={
                            <Heading className="text-[22px]">Address</Heading>
                        }
                    />
                </div>
                <div className="mt-10 gap-5 flex justify-between">
                    <div className="w-[40%]">
                        <div className="mt-3 space-y-6">
                            {address.map((_address, index) => (
                                <AddressListItem
                                    address={_address}
                                    key={index}
                                    setEditingAddress={setEditingAddress}
                                    editingAddress={editingAddress}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-[60%]">
                        <CreateAddress
                            editingAddress={editingAddress}
                            setEditingAddress={setEditingAddress}
                        />
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Address;
