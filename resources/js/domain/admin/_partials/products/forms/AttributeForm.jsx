import { SecondaryButton } from "@/shared";
import DangerButton from "@/shared/DangerButton";
import InputLabel from "@/shared/InputLabel";
import TextArea from "@/shared/TextArea";
import TextInput from "@/shared/TextInput";
import React, { useEffect } from "react";

const Attribute = ({
    attr,
    index,
    handleToggleMinimize,
    handleRemoveAttribute,
    handleAttributeNameChange,
    handleAddVariant,
    handleVariantChange,
    handleRemoveVariant,
}) => {
    return (
        <div
            key={index}
            className="p-4 pt-10 border-t-2  mt-4 rounded-lg bg-white"
        >
            <div className="flex justify-between items-center">
                <InputLabel htmlFor={`attribute-${index}`} value="Name *" />
                <div className="flex ">
                    <button
                        type="button"
                        onClick={() => handleToggleMinimize(index)}
                        className="text-xs"
                    >
                        {attr.minimized ? (
                            <svg
                                width="20px"
                                height="20px"
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
                                        d="M6 9L12 15L18 9"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>{" "}
                                </g>
                            </svg>
                        ) : (
                            <svg
                                width="20px"
                                height="20px"
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
                                        d="M6 15L12 9L18 15"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>{" "}
                                </g>
                            </svg>
                        )}
                    </button>
                    <DangerButton
                        type="button"
                        onClick={() => handleRemoveAttribute(index)}
                        className="ms-3"
                    >
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 -0.5 25 25"
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
                                    d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                                    fill="#ffffff"
                                ></path>{" "}
                            </g>
                        </svg>{" "}
                        Remove
                    </DangerButton>
                </div>
            </div>

            <TextInput
                id={`attribute-${index}`}
                type="text"
                value={attr.name}
                onChange={(e) =>
                    handleAttributeNameChange(index, e.target.value)
                }
                className="mt-1 block w-full"
                placeholder="i.e., Color"
            />

            {!attr.minimized && (
                <div className="border-2 border-gray-300 rounded-lg mt-10">
                    <div className="">
                        <div className="flex justify-between items-center">
                            <h1 className="text-[14px] font-bold">Variants</h1>

                            <SecondaryButton
                                type="button"
                                onClick={() => handleAddVariant(index)}
                            >
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M4 12H20M12 4V20"
                                            stroke="#555"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                    </g>
                                </svg>{" "}
                                New Varient
                            </SecondaryButton>
                        </div>
                        <div className="border-t-2 mt-4 border-gray-200 pb-3 mb-1">
                            {attr.variants.map((variant, variantIndex) => (
                                <VarientForm
                                    key={variantIndex}
                                    variant={variant}
                                    index={index}
                                    variantIndex={variantIndex}
                                    handleVariantChange={handleVariantChange}
                                    handleRemoveVariant={handleRemoveVariant}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const VarientForm = ({
    handleVariantChange,
    variant,
    index,
    variantIndex,
    handleRemoveVariant,
}) => {
    return (
        <div
            key={variantIndex}
            className=" p-4 rounded-lg mt-5 border-2 pb-10 border-gray-300 bg-gray-50"
        >
            <div className="flex gap-2 items-center">
                <div className="w-full">
                    <InputLabel htmlFor="varient" value="Name *" />
                    <TextInput
                        type="text"
                        value={variant.varient}
                        onChange={(e) =>
                            handleVariantChange(
                                index,
                                variantIndex,
                                "varient",
                                e.target.value
                            )
                        }
                        className="mt-1 block w-full"
                        placeholder="i.e., Red, Blue"
                    />
                </div>
                <div className="w-1/2">
                    <InputLabel htmlFor="weight" value="Weight *" />
                    <TextInput
                        type="number"
                        value={variant.weight}
                        onChange={(e) =>
                            handleVariantChange(
                                index,
                                variantIndex,
                                "weight",
                                e.target.value
                            )
                        }
                        className="mt-1 block w-full"
                        placeholder="i.e., 10"
                    />
                </div>
            </div>

            <div className="flex gap-2 mt-4">
                <div className="w-full">
                    <InputLabel htmlFor="sale_price" value="Sale Price *" />
                    <TextInput
                        type="number"
                        value={variant.sale_price}
                        onChange={(e) =>
                            handleVariantChange(
                                index,
                                variantIndex,
                                "sale_price",
                                e.target.value
                            )
                        }
                        className="mt-1 block w-full"
                        placeholder="i.e., 99.99"
                    />
                </div>
                <div className="w-full">
                    <InputLabel
                        htmlFor="regular_price"
                        value="Regular Price *"
                    />
                    <TextInput
                        type="number"
                        value={variant.regular_price}
                        onChange={(e) =>
                            handleVariantChange(
                                index,
                                variantIndex,
                                "regular_price",
                                e.target.value
                            )
                        }
                        className="mt-1 block w-full"
                        placeholder="i.e., 129.99"
                    />
                </div>
            </div>

            <div className="mt-4">
                <InputLabel
                    htmlFor="description"
                    value="Varient Description *"
                />
                <TextArea
                    value={variant.description}
                    onChange={(e) =>
                        handleVariantChange(
                            index,
                            variantIndex,
                            "description",
                            e.target.value
                        )
                    }
                    className="mt-1 block w-full"
                    placeholder="Describe this variant"
                />
            </div>

            <div className="flex gap-2 mt-4">
                {["length", "width", "height"].map((dim) => (
                    <div className="w-full" key={dim}>
                        <div>
                            <InputLabel
                                htmlFor={dim}
                                value={`${
                                    dim.charAt(0).toUpperCase() + dim.slice(1)
                                } *`}
                            />
                            <TextInput
                                type="number"
                                value={variant[dim]}
                                onChange={(e) =>
                                    handleVariantChange(
                                        index,
                                        variantIndex,
                                        dim,
                                        e.target.value
                                    )
                                }
                                className="mt-1 block w-full"
                                placeholder={`i.e., 10`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-10">
                <DangerButton
                    type="button"
                    onClick={() => handleRemoveVariant(index, variantIndex)}
                >
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 -0.5 25 25"
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
                                d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                                fill="#ffffff"
                            ></path>{" "}
                        </g>
                    </svg>{" "}
                    Remove
                </DangerButton>
            </div>
        </div>
    );
};

const AttributeForm = ({
    data,
    attributes,
    handleRemoveAttribute,
    handleToggleMinimize,
    handleAttributeNameChange,
    handleAddVariant,
    handleAddAttribute,
    handleRemoveVariant,
    handleVariantChange,
}) => {

    useEffect(() => {
        if (!data.features.length) {
            handleAddAttribute();
        }
    }, []);

    return (
        <div>
            {attributes.map((attr, index) => (
                <Attribute
                    attr={attr}
                    index={index}
                    key={index}
                    handleToggleMinimize={handleToggleMinimize}
                    handleRemoveAttribute={handleRemoveAttribute}
                    handleAttributeNameChange={handleAttributeNameChange}
                    handleAddVariant={handleAddVariant}
                    handleVariantChange={handleVariantChange}
                    handleRemoveVariant={handleRemoveVariant}
                />
            ))}
        </div>
    );
};

export default AttributeForm;
