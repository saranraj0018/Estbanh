import React, { useState, useEffect } from "react";
// import RegisterLayout from "@/Layouts/UserRegister";
import {
    InputLabel,
    SecondaryButton,
    SelectBox,
    TextInput,
} from "@/Shared/index.js";
import { Head, router, usePage } from "@inertiajs/react";
import { useRegisterContext } from "@/Context/RegisterContext.jsx";
import RegisterLayout from "@/Layouts/GuestLayout";
import AppButton from "@/Shared/AppButton";
// import { router } from "@inertiajs/react";

export default function AddressStep() {
    const {
        data,
        setData,
        processing: loading,
        post,
        errors,
    } = useRegisterContext();

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch("/locations/countries")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    useEffect(() => {
        if (data.country) {
            fetch(`/locations/states/${data.country}`)
                .then((res) => res.json())
                .then((data) => {
                    setStates(data);
                });
        }
    }, [data.country]);

    useEffect(() => {
        if (data.state) {
            fetch(`/locations/cities/${data.state}`)
                .then((res) => res.json())
                .then((data) => {
                    setCities(data);
                });
        }
    }, [data.state]);

    const submit = (e) => {
        e.preventDefault();
        post(route("register.address.data"));
    };

    return (
        <RegisterLayout>
            <Head title="Registration - User Address" />
            <div className="h-full overflow-scroll relative">
                <div className="flex items-center justify-between mb-8">
                    <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                    <div className="h-1 w-full bg-yellow-400 mx-2 rounded" />
                    <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                    <div className="h-1 w-full bg-gray-300 mx-2 rounded" />
                    <div className="h-3 w-3 bg-gray-300 rounded-full" />
                    <div className="h-1 w-full bg-gray-300 mx-2 rounded" />
                    <div className="h-3 w-3 bg-gray-300 rounded-full" />
                </div>
                <h2 className="text-2xl font-bold mb-1">
                    Your Address Details
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                    Tell us where you're from
                </p>

                <form onSubmit={submit}>
                    <div className="mt-4">
                        <InputLabel>Address Line 1</InputLabel>
                        <TextInput
                            value={data?.address_line_1}
                            onChange={(e) =>
                                setData("address_line_1", e.target.value)
                            }
                            className="w-full border rounded px-3 py-2 text-sm"
                        />
                        {errors.address_line_1 && (
                            <p className="text-red-500 text-xs">
                                {errors.address_line_1}
                            </p>
                        )}
                    </div>

                    <div className="mt-4">
                        <InputLabel>Address Line 2</InputLabel>
                        <TextInput
                            value={data?.address_line_2}
                            onChange={(e) =>
                                setData("address_line_2", e.target.value)
                            }
                            className="w-full border rounded px-3 py-2 text-sm"
                        />
                        {errors.address_line_2 && (
                            <p className="text-red-500 text-xs">
                                {errors.address_line_2}
                            </p>
                        )}
                    </div>

                    <div className="flex gap-4 mt-4">
                        <div className="w-1/2">
                            <InputLabel>Country</InputLabel>
                            <SelectBox
                                placeholder="Select a Country Name"
                                dataset={countries}
                                value={data.country}
                                onChange={(e) => {
                                    const countryId = e.target.value;
                                    setData("country", countryId);
                                    setStates([]);
                                    setCities([]);
                                    setData("state", "");
                                    setData("city", "");
                                }}
                            />
                            {errors.country && (
                                <p className="text-red-500 text-xs">
                                    {errors.country}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <InputLabel>State</InputLabel>
                            <SelectBox
                                placeholder="Select a State Name"
                                dataset={states}
                                value={data.state}
                                onChange={(e) => {
                                    const stateId = e.target.value;
                                    setData("state", stateId);
                                    setCities([]);
                                    setData("city", "");
                                }}
                            />

                            {errors.state && (
                                <p className="text-red-500 text-xs">
                                    {errors.state}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <div className="w-1/2">
                            <InputLabel>City</InputLabel>
                            <SelectBox
                                placeholder="Select a City Name"
                                dataset={cities}
                                value={data.city}
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                            />
                            {errors.city && (
                                <p className="text-red-500 text-xs">
                                    {errors.city}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <InputLabel>Pin Code</InputLabel>
                            <TextInput
                                type="number"
                                value={data?.pin_code}
                                onChange={(e) =>
                                    setData("pin_code", e.target.value)
                                }
                                className="w-full border rounded px-3 py-2 text-sm"
                            />
                            {errors.pin_code && (
                                <p className="text-red-500 text-xs">
                                    {errors.pin_code}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-[3em] flex items-center justify-between">
                        <SecondaryButton
                            type="button"
                            onClick={() => router.visit("/register")}
                        >← Back
                        </SecondaryButton>


                        <AppButton
                            type="submit"
                            className={`
                        ${
                            loading
                                ? "opacity-60 cursor-not-allowed"
                                : ""
                        }`}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2 text-black hover:text-white">
                                    <svg
                                        className="animate-spin h-4 w-4  "
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className=""
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                        ></path>
                                    </svg>
                                    
                                </span>
                            ) : (
                                <span>Next →</span>
                            )}
                        </AppButton>
                    </div>
                </form>
            </div>
        </RegisterLayout>
    );
}
