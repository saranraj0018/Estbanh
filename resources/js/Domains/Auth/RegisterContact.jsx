import React, { useState } from "react";
import RegisterLayout from "@/Layouts/GuestLayout";
import { Head, router } from "@inertiajs/react";
import { InputLabel, SecondaryButton, TextInput } from "@/Shared/index.js";
import { useRegisterContext } from "@/Context/RegisterContext.jsx";
import Checkbox from "@/Shared/Checkbox";
import AppButton from "@/Shared/AppButton";

export default function ContactStep() {
    const {
        data,
        setData,
        processing: loading,
        post,
        errors,
    } = useRegisterContext();
    const [selectedTypes, setSelectedTypes] = useState(["issuer"]);

    const contactLabels = {
        issuer: "Issuer",
        accountant: "Accountant",
        authority: "Authority",
    };

    const handleInputChange = (type, field, value) => {
        setData(`${type}_${field}`, value);
    };

    const toggleType = (type) => {
        setSelectedTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("register.store"));
    };

    return (
        <RegisterLayout>
            <Head title="Registration - User Contact" />
            <div className="h-full overflow-scroll relative">
                <div className="flex items-center justify-between mb-8">
                    <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                    <div className="h-1 w-full bg-yellow-400 mx-2 rounded" />
                    <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                    <div className="h-1 w-full bg-yellow-400 mx-2 rounded" />
                    <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                    <div className="h-1 w-full bg-yellow-400 mx-2 rounded" />
                    <div className="h-3 w-3 bg-gray-300 rounded-full" />
                </div>

                {Object.keys(errors).length > 0 && (
                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm space-y-1">
                        {/* Show grouped message if all authority/accountant fields are missing */}
                        {(errors.accountant_name || errors.accountant_phone) &&
                            (errors.authority_name ||
                                errors.authority_phone) && (
                                <div>
                                    Please fill in both Accountant and Authority
                                    (Tab) contact details.
                                </div>
                            )}

                        {/* Show all individual error messages */}
                        {Object.entries(errors).map(([key, message]) => (
                            <div key={key}>{message}</div>
                        ))}
                    </div>
                )}

                <h2 className="text-2xl font-bold mb-1">Contact Information</h2>
                <p className="text-sm text-gray-500 mb-4">
                    How can we reach you?
                </p>

                <div className="flex gap-2 mb-6">
                    {Object.keys(contactLabels).map((type) => (
                        <button
                            type="button"
                            key={type}
                            onClick={() => toggleType(type)}
                            className={`px-3 py-1 rounded-full text-sm border ${
                                selectedTypes.includes(type)
                                    ? "bg-yellow-400 text-black"
                                    : "bg-white text-gray-600"
                            }`}
                        >
                            {contactLabels[type]}
                        </button>
                    ))}
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 overflow-hidden flex flex-col justify-between items-start w-full"
                >
                    <div className="h-[36vh] overflow-scroll w-full">
                        <div className="w-full">
                            {selectedTypes.map((type, index) => (
                                <div key={type} className="w-full">
                                    <h3 className="font-semibold mb-2">
                                        {contactLabels[type]} Contact
                                    </h3>
                                    <div className="flex items-center w-full gap-4 mt-5 mb-[2em]">
                                        <div className="w-full">
                                            <InputLabel
                                                htmlFor={`name_` + index}
                                            >
                                                Name *
                                            </InputLabel>
                                                                                                                     <TextInput
                                                id={`name_` + index}
                                                value={
                                                    data[`${type}_name`] || ""
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        type,
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full mb-1 px-3 py-2 border rounded"
                                            />
                                            {errors[`${type}_name`] && (
                                                <p className="text-red-500 text-xs">
                                                    {errors[`${type}_name`]}
                                                </p>
                                            )}
                                        </div>
                                        <div className="w-full">
                                        <InputLabel
                                                htmlFor={`phone_` + index}
                                            >
                                                Phone Number *
                                            </InputLabel>
                                            <TextInput
                                            id={`phone_` + index}
                                                type="number"
                                                value={
                                                    data[`${type}_phone`] || ""
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        type,
                                                        "phone",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full mb-1 px-3 py-2 border rounded"
                                            />
                                            {errors[`${type}_phone`] && (
                                                <p className="text-red-500 text-xs">
                                                    {errors[`${type}_phone`]}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1">
                        <label className="text-sm flex items-center gap-2 ">
                            <Checkbox
                                checked={data.terms}
                                onChange={(e) =>
                                    setData("terms", e.target.checked)
                                }
                            />
                            I accept the{" "}
                            <a href="#" className="underline">
                                terms of use
                            </a>{" "}
                            and{" "}
                            <a href="#" className="underline">
                                privacy policy
                            </a>
                        </label>

                        {errors.terms && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.terms}
                            </p>
                        )}
                    </div>
                    <div className="mt-[3em] flex items-center justify-between w-full">
                        <SecondaryButton
                            type="button"
                            onClick={() => router.visit("/register/documents")}
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
