import { InputLabel, PrimaryButton, TextInput } from "@/shared";
import AppButton from "@/shared/AppButton";
import Heading from "@/shared/Heading";
import { useForm } from "@inertiajs/react";
import React, { useCallback, useEffect } from "react";

export default function CreateAddress({ editingAddress, setEditingAddress }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        phone: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        state: "",
        country: "",
        landmark: "",
        pincode: "",
    });

    const assign = useCallback(
        (object) => {
            Object.entries(object).map(([key, value]) => {
                if (data.hasOwnProperty(key)) {
                    setData(key, value);
                }
            });
        },
        [editingAddress]
    );

    useEffect(() => {
        if (editingAddress) {
            assign(editingAddress);
        }
    }, [editingAddress]);

    const create = (e) => {
        e.preventDefault();

        if (!editingAddress) {
            post(route("address.create"), {
                onSuccess: () => {
                    reset();
                },
            });

            return true;
        }

        post(route("address.update", editingAddress?.id), {
            onSuccess: () => {
                reset();
                setEditingAddress(null);
            },
        });
    };

    return (
        <form
            className="bg-gray-50 border-2 border-gray-200 rounded-lg p-5 mt-2"
            onSubmit={create}
        >
            <div className=" mb-6">
                <Heading>
                    {editingAddress ? "Update" : "Create"} Address
                </Heading>
                <p className="text-[14px] text-gray-700">
                    This Address can be used in checkout
                </p>
            </div>

            <div className="flex gap-2 items-center justify-start w-full ">
                <div className="w-full">
                    <InputLabel htmlFor="">
                        Full Name <span className="text-red-500">*</span>
                    </InputLabel>
                    <TextInput
                        className="w-full"
                        placeholder="eg.., Dolby Theatre"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />

                    {errors.name && (
                        <span className="text-red-500 text-[12px]">
                            {errors.name}
                        </span>
                    )}
                </div>
                <div className="w-full">
                    <InputLabel htmlFor="">
                        Phone <span className="text-red-500">*</span>
                    </InputLabel>
                    <TextInput
                        className="w-full"
                        placeholder="eg.., (323) 308-6300"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                    />
                    {errors.phone && (
                        <span className="text-red-500 text-[12px]">
                            {errors.phone}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex gap-2 items-center justify-start w-full mt-5">
                <div className="w-full">
                    <InputLabel htmlFor="">
                        Address Line 1 <span className="text-red-500">*</span>
                    </InputLabel>
                    <TextInput
                        className="w-full"
                        placeholder="eg.., 6801 Hollywood Blvd,"
                        value={data.address_line_1}
                        onChange={(e) =>
                            setData("address_line_1", e.target.value)
                        }
                    />
                    {errors.address_line_1 && (
                        <span className="text-red-500 text-[12px]">
                            {errors.address_line_1}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex gap-2 items-center justify-start w-full mt-5">
                <div className="w-full">
                    <InputLabel htmlFor="">Address Line 2</InputLabel>
                    <TextInput
                        className="w-full"
                        placeholder="eg.., ..."
                        value={data.address_line_2}
                        onChange={(e) =>
                            setData("address_line_2", e.target.value)
                        }
                    />
                </div>
            </div>

            <div className="flex gap-2 items-center justify-start w-full mt-5">
                <div className="w-full">
                    <InputLabel htmlFor="">
                        City <span className="text-red-500">*</span>
                    </InputLabel>
                    <TextInput
                        className="w-full"
                        placeholder="eg.., Los Angeles"
                        value={data.city}
                        onChange={(e) => setData("city", e.target.value)}
                    />

                    {errors.city && (
                        <span className="text-red-500 text-[12px]">
                            {errors.city}
                        </span>
                    )}
                </div>
                <div className="w-full">
                    <InputLabel htmlFor="">
                        State <span className="text-red-500">*</span>
                    </InputLabel>
                    <TextInput
                        className="w-full"
                        placeholder="eg.., California"
                        value={data.state}
                        onChange={(e) => setData("state", e.target.value)}
                    />

                    {errors.state && (
                        <span className="text-red-500 text-[12px]">
                            {errors.state}
                        </span>
                    )}
                </div>

                <div className="w-full">
                    <InputLabel htmlFor="">
                        Country <span className="text-red-500">*</span>
                    </InputLabel>
                    <TextInput
                        className="w-full"
                        placeholder="eg.., USA"
                        value={data.country}
                        onChange={(e) => setData("country", e.target.value)}
                    />
                    {errors.country && (
                        <span className="text-red-500 text-[12px]">
                            {errors.country}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex gap-2 items-center justify-start w-full mt-5">
                <div className="w-full">
                    <InputLabel htmlFor="">
                        Zip code <span className="text-red-500">*</span>
                    </InputLabel>
                    <TextInput
                        className="w-full"
                        type="number"
                        placeholder="eg.., 90028"
                        value={data.pincode}
                        onChange={(e) => setData("pincode", e.target.value)}
                    />
                    {errors.pincode && (
                        <span className="text-red-500 text-[12px]">
                            {errors.pincode}
                        </span>
                    )}
                </div>

                <div className="w-full">
                    <InputLabel htmlFor="">
                        Landmark <span className="text-red-500">*</span>
                    </InputLabel>
                    <TextInput
                        className="w-full"
                        placeholder="eg.., Hollywood Walk of Fame"
                        value={data.landmark}
                        onChange={(e) => setData("landmark", e.target.value)}
                    />
                    {errors.landmark && (
                        <span className="text-red-500 text-[12px]">
                            {errors.landmark}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-end gap-3">
                {editingAddress && (
                    <PrimaryButton
                        onClick={() => {
                            reset();
                            setEditingAddress(null);
                        }}
                        className="text-[12px] mt-10"
                    >
                        Cancel
                    </PrimaryButton>
                )}
                <AppButton
                    type="submit"
                    className="w-full mt-10 flex items-center justify-center"
                >
                    {editingAddress ? "Update" : "Create"} Address
                </AppButton>
            </div>
        </form>
    );
}
