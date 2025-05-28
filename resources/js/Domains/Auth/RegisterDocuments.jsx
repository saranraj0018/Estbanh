import React, { useState } from "react";
import RegisterLayout from "@/Layouts/UserRegister";
import {router, usePage} from "@inertiajs/react";
import {MultipleFilesInput} from "@/Shared/index.js";
import {useRegisterContext} from "@/Context/RegisterContext.jsx";
import {redirect} from "react-router-dom";

export default function UploadDocumentsStep() {

    const { data, setData, processing: loading, post, errors } = useRegisterContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("register.documents.data"));
    }

    return (
        <RegisterLayout>
            <div className="flex items-center justify-between mb-8">
                <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                <div className="h-1 w-full bg-yellow-400 mx-2 rounded" />
                <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                <div className="h-1 w-full bg-yellow-400 mx-2 rounded" />
                <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                <div className="h-1 w-full bg-gray-300 mx-2 rounded" />
                <div className="h-3 w-3 bg-gray-300 rounded-full" />
            </div>
            <h2 className="text-2xl font-bold mb-1">Upload Documents</h2>
            <p className="text-sm text-gray-500 mb-6">Let's verify a few things</p>

            <form onSubmit={handleSubmit}>
                {errors.images && (
                    <span className="text-red-500 font-main text-[12px]">{errors.images}</span>
                )}
                <MultipleFilesInput
                    onChange={(files) => setData("images", files)}
                    urls={data.images}
                />
                <div className="mt-[3em] flex justify-between items-center gap-4">
                    <button
                        type="button"
                        onClick={() => router.visit('/register/address')}
                        className="bg-gray-200 text-black font-semibold py-2 px-6 rounded hover:bg-gray-300 transition"
                    >
                        ← Back
                    </button>

                    <button
                        type="submit"

                        className={`flex items-center justify-center gap-2 px-6 font-semibold py-2 rounded transition ${
                            loading
                                ? "bg-gray-400 cursor-not-allowed text-black"
                                : "bg-yellow-400 hover:bg-yellow-500 text-black"
                        }`}
                    >
                        {loading && (
                            <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                ></path>
                            </svg>
                        )}
                        {loading ? "Loading..." : "Next →"}
                    </button>
                </div>

            </form>
        </RegisterLayout>
    );
}
