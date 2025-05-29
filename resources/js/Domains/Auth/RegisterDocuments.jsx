import React, { useState } from "react";
import RegisterLayout from "@/Layouts/GuestLayout";
import { router, usePage } from "@inertiajs/react";
import { MultipleFilesInput, SecondaryButton } from "@/Shared/index.js";
import { useRegisterContext } from "@/Context/RegisterContext.jsx";
import AppButton from "@/Shared/AppButton";

export default function RegisterDocuments() {
    const {
        data,
        setData,
        processing: loading,
        post,
        errors,
    } = useRegisterContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("register.documents.data"));
    };

    return (
        <RegisterLayout>
            <div className="h-full relative">
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
                <p className="text-sm text-gray-500 mb-6">
                    Let's verify a few things
                </p>

                <form onSubmit={handleSubmit} className="overflow-scroll">
                    {errors.images && (
                        <span className="text-red-500 font-main text-[12px]">
                            {errors.images}
                        </span>
                    )}

                    <div className="overflow-scroll h-[48vh]">
                        <MultipleFilesInput
                            onChange={(files) => setData("images", files)}
                            urls={data.images}
                            previewClass="flex gap-3 flex-wrap"
                            previewLayout={(file, index, remove) => (
                                <div className="relative group rounded-md overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                                    <img
                                        src={file.src}
                                        alt={file.name}
                                        className="w-40 h-28 object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[12px] px-2 py-1 opacity-0 group-hover:opacity-100 transition truncate">
                                        {file.name}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            remove(index);
                                        }}
                                        className="absolute top-1.5 right-1.5 bg-red-500 hover:bg-red-600 text-white text-xs rounded-full p-1 shadow"
                                    >
                                        ✕
                                    </button>
                                </div>
                            )}

                            handlerLayout={(open) => (
                                <div
                                    onClick={open}
                                    className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-400 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all h-28 w-40"
                                >
                                    <span className="text-indigo-600 font-medium text-sm">
                                        + Upload
                                    </span>
                                </div>
                            )}
                        />
                    </div>

                    <div className="mt-[3em] flex items-center justify-between">
                        <SecondaryButton
                            type="button"
                            onClick={() => router.visit("/register/address")}
                        >
                            ← Back
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
