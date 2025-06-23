import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "@/shared";
import InputError from "@/shared/InputError";
import InputLabel from "@/shared/InputLabel";
import TextInput from "@/shared/TextInput";
import DangerButton from "@/shared/DangerButton";

const ProductDetailsForm = ({
    details: data,
    setDetails: setData,
    handleRemoveDetails,
}) => {
    const [details, setDetails] = useState(data?.details || []);
    const [editingIndex, setEditingIndex] = useState(null);
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [errors, setErrors] = useState({});

    const resetForm = () => {
        setName("");
        setValue("");
        setEditingIndex(null);
        setErrors({});
    };

    const handleAddOrUpdateDetail = () => {
        let newErrors = {};
        const trimmedName = name.trim();
        const trimmedValue = value.trim();

        if (!trimmedName) newErrors.name = "Name is required.";
        if (!trimmedValue) newErrors.value = "Value is required.";

        const nameExists = details.some(
            (d, i) =>
                d.name.toLowerCase() === trimmedName.toLowerCase() &&
                i !== editingIndex
        );
        if (nameExists) newErrors.name = "Name must be unique.";

        if (Object.keys(newErrors).length) {
            console.log(data);
            setErrors(newErrors);
            return;
        }

        let updatedDetails = [...details];

        if (editingIndex !== null) {
            updatedDetails[editingIndex] = {
                name: trimmedName,
                value: trimmedValue,
            };
        } else {
            updatedDetails.push({ name: trimmedName, value: trimmedValue });
        }

        resetForm();
        setDetails(updatedDetails);
        setData(updatedDetails);
    };

    const handleEdit = (index) => {
        const detail = details[index];
        setName(detail.name);
        setValue(detail.value);
        setEditingIndex(index);
        setErrors({}); // 👈 Clear errors when editing
    };

    const handleDelete = (index) => {
        if (editingIndex === index) return; // 👈 Prevent delete on editing item
        const updatedDetails = details.filter((_, i) => i !== index);
        handleRemoveDetails(index);
        setDetails(updatedDetails);
        setData(updatedDetails);
        resetForm();
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 border-t pt-6 mb-20">
            {/* Form Section */}
            <div className="pr-4 border-r border-gray-300">
                <div>
                    <div className="flex items-center mb-4 w-full gap-3">
                        <Field label="Name *" error={errors?.name}>
                            <TextInput
                                id="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setErrors((prev) => ({
                                        ...prev,
                                        name: null,
                                    }));
                                }}
                                className="w-full"
                            />
                        </Field>
                        <Field label="Value *" error={errors?.value}>
                            <TextInput
                                id="value"
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    setErrors((prev) => ({
                                        ...prev,
                                        value: null,
                                    }));
                                }}
                                className="w-full"
                            />
                        </Field>
                    </div>
                    <div className="flex gap-3 justify-end pt-2">
                        <PrimaryButton
                            onClick={handleAddOrUpdateDetail}
                            className="w-full justify-center"
                        >
                            {editingIndex !== null ? "Update" : "+ Add"}
                        </PrimaryButton>
                        {editingIndex !== null && (
                            <SecondaryButton onClick={resetForm}>
                                Cancel
                            </SecondaryButton>
                        )}
                    </div>
                </div>
            </div>

            {/* List Section */}
            <div className="pl-4">
                {details.length === 0 && (
                    <p className="text-sm text-gray-500">
                        No details added yet.
                    </p>
                )}
                {details.map((detail, index) => {
                    const isEditing = editingIndex === index;
                    return (
                        <div
                            key={index}
                            className={`p-2 mb-2 flex justify-between items-center border-b pb-2 transition 
                                ${
                                    isEditing
                                        ? "border-blue-500 bg-blue-50 shadow-sm"
                                        : "border-gray-200 bg-white"
                                }`}
                        >
                            <div className="text-sm">
                                <p className="font-medium text-gray-700">
                                    {detail.name}
                                    {isEditing && (
                                        <span className="ml-2 text-blue-500 text-[10px] bg-blue-100 px-2 py-0.5 rounded-full">
                                            editing
                                        </span>
                                    )}
                                </p>
                                {!isEditing && (
                                    <p className="text-gray-500">
                                        {detail.value}
                                    </p>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {!isEditing && (
                                    <SecondaryButton
                                        onClick={() => handleEdit(index)}
                                    >
                                        Edit
                                    </SecondaryButton>
                                )}
                                <DangerButton
                                    onClick={() => handleDelete(index)}
                                    disabled={isEditing} // 👈 Disable delete on editing item
                                >
                                    Delete
                                </DangerButton>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductDetailsForm;

const Field = ({ label, error, children }) => (
    <div className="w-full mb-4">
        <InputLabel value={label} />
        {children}
        <InputError message={error} className="mt-1" />
    </div>
);
