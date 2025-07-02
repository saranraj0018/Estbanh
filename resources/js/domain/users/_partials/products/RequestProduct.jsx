import { InputLabel, MultipleFilesInput, TextArea, TextInput } from "@/shared";
import AppButton from "@/shared/AppButton";
import Modal from "@/shared/Modal";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

const RequestProduct = ({ state, action, setSubmitted,  }) => {

    const { data, setData, errors, post, reset } = useForm({
        name: "",   
        part_number: "",
        description: "",
        images: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('request-product'), {
            onSuccess: () => {
                action(false);
                reset()
                setSubmitted(true)
            }
        });
    };

    return (
        <Modal show={state}>
            <form className="p-6" onSubmit={handleSubmit}>
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        Couldn't find what you were looking for?
                    </h2>

                    <button onClick={() => action(false)}>
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                    stroke="#1C274C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                ></path>{" "}
                                <path
                                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                                    stroke="#1C274C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                ></path>{" "}
                            </g>
                        </svg>
                    </button>
                </div>

                <p className="mt-1 text-sm text-gray-600 ">
                    Your request will be sent to the admin for support.
                </p>

                <div className="rounded-[10px] w-full mt-10">
                    <div className="flex items-center gap-3">
                        <div className="w-full">
                            <InputLabel>Product Name</InputLabel>
                            <TextInput 
                                className="w-full"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                            />

                            <span className="text-red-500 text-[13px]">{errors?.name ?? ""}</span>
                        </div>

                        <div className="w-full">
                            <InputLabel>Part Number</InputLabel>
                            <TextInput 
                                className="w-full" 
                                value={data.part_number}
                                onChange={(e) => setData("part_number", e.target.value)}
                            />
                            <span className="text-red-500 text-[13px]">{errors?.part_number ?? ""}</span>
                        </div>
                    </div>

                    <div className="w-full mt-5">
                        <InputLabel>Product Description</InputLabel>
                        <TextArea 
                            className="w-full" 
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                        />
                        <span className="text-red-500 text-[13px]">{errors?.description ?? ""}</span>
                    </div>

                    <div className="w-full mt-5">
                        <InputLabel>Product Image</InputLabel>
                        <span className="text-red-500 text-[13px]">{errors?.images ?? ""}</span>
                        <MultipleFilesInput
                            maxFiles={1}
                            onChange={(files) => setData("images", files)}
                            previewClass="flex gap-3 flex-wrap"
                            previewLayout={(file, index, remove) => (
                                <div className="relative group rounded-md overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                                    {!file?.name?.includes(".pdf") ? (
                                        <img
                                            src={file.src}
                                            alt={file.name}
                                            className="w-full h-28 object-cover"
                                        />
                                    ) : (
                                        <div className="w-36 h-28 flex justify-center items-center">
                                            <Heading>PDF</Heading>
                                        </div>
                                    )}
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
                </div>

                <AppButton className="w-full flex justify-center items-center mt-5">
                    Request
                </AppButton>
            </form>
        </Modal>
    );
};

export default RequestProduct;
