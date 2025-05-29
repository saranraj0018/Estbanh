import React, { useState,useEffect } from "react";
import RegisterLayout from "@/Layouts/GuestLayout";
import { router, usePage } from "@inertiajs/react";
import {useRegisterContext} from "@/Context/RegisterContext.jsx";
import {SecondaryButton, TextInput} from "@/Shared/index.js";
import {PrimaryButton} from "@/Shared/index.js";
import AppButton from "@/Shared/AppButton.jsx";

export default function RegisterUser() {

    const { data, setData, processing: loading, post, errors } = useRegisterContext();
    const submit = (e) => {
        e.preventDefault();
        post(route('register.data'))
    }
    return (
        <RegisterLayout>
            <div className="flex items-center justify-between mb-8">
                <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                <div className="h-1 w-full bg-gray-300 mx-2 rounded" />
                <div className="h-3 w-3 bg-gray-300 rounded-full" />
                <div className="h-1 w-full bg-gray-300 mx-2 rounded" />
                <div className="h-3 w-3 bg-gray-300 rounded-full" />
                <div className="h-1 w-full bg-gray-300 mx-2 rounded" />
                <div className="h-3 w-3 bg-gray-300 rounded-full" />
            </div>
            <h2 className="text-2xl font-bold mb-1">Let’s Get Started</h2>
            <p className="text-sm text-gray-500 mb-6">Power Up Your Projects!</p>

            <form onSubmit={submit}>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium mb-1">Full name</label>
                        <TextInput

                            value={data?.first_name}
                            onChange={(e) => setData("first_name", e.target.value)}
                            className="w-full border rounded px-3 py-2 text-sm"
                        />
                        {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm font-medium mb-1">Last name</label>
                        <TextInput
                            value={data?.last_name}
                            onChange={(e) => setData("last_name", e.target.value)}
                            className="w-full border rounded px-3 py-2 text-sm"
                        />
                        {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <TextInput
                        type="email"
                        value={data?.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />

                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">CNR Number</label>
                    <TextInput
                        value={data?.cnr_number}
                        onChange={(e) => setData("cnr_number", e.target.value)}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />

                    {errors.cnr_number && <p className="text-red-500 text-xs">{errors.cnr_number}</p>}
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">VAT Number</label>
                    <TextInput
                        value={data?.vat_number}
                        onChange={(e) => setData("vat_number", e.target.value)}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />

                    {errors.vat_number && <p className="text-red-500 text-xs">{errors.vat_number}</p>}
                </div>

                <div className="mt-[3em]">
                    <AppButton className={`w-full mt-6 font-semibold py-2 rounded transition flex items-center justify-center gap-2 ${
                        loading ? "bg-gray-400 cursor-not-allowed text-black" : "bg-yellow-400 hover:bg-yellow-500 text-black"
                    }`} disabled={loading} >
                        {loading && (
                            <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                        )}
                        {loading ? "Loading..." : "Next →"}
                    </AppButton>
                </div>
            </form>
        </RegisterLayout>
    );
}
