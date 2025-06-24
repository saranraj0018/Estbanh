import Field from "@/components/_partials/Field";
import Section from "@/components/_partials/Section";
import { FileInput, SelectBox, TextArea, TextInput } from "@/shared";
import React, { useEffect, useState } from "react";

export const validate = (data) => {
    return (
        data.name &&
        data.part_number &&
        data.image &&
        data.description &&
        data.detail.category_id &&
        data.detail.sub_category_id &&
        data.detail.make &&
        data.detail.model
    );
};

const ProductDescription = ({ categories, data, errors, setData }) => {
    const [subCategory, setSubCategory] = useState([]);

    const filterSubCategories = (categoryId) => {
        const selected = categories.find((cat) => cat.id == categoryId);
        return selected?.sub_categories || [];
    };

    useEffect(() => {
        if (data.detail.category_id) {
            setSubCategory(filterSubCategories(data.detail.category_id));
        }
    }, [data.detail.category_id]);

    return (
        <div className="space-y-10">
            <Section
                title="Product Description"
                subtitle="Give us a short description about the product"
            />
            <div className="flex gap-2">
                <Field label="Product Name *" error={errors.name}>
                    <TextInput
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="mt-1 block w-full"
                        placeholder="i.e., Motorcycle, Car, Truck"
                    />
                </Field>
                <Field label="Part Number *" error={errors.part_number}>
                    <TextInput
                        id="part_number"
                        value={data.part_number}
                        onChange={(e) => setData("part_number", e.target.value)}
                        className="mt-1 block w-full"
                        placeholder="i.e., motor-for-your-cycle"
                    />
                </Field>
            </div>

            <div className="flex gap-2">
                <Field label="Make *" error={errors.name}>
                    <TextInput
                        id="make"
                        value={data?.detail?.make}
                        onChange={(e) => {
                            setData("detail", {
                                ...data.detail,
                                make: e.target.value,
                            });
                        }}
                        className="mt-1 block w-full"
                        placeholder="i.e., Yamaha"
                    />
                </Field>
                <Field label="Model *" error={errors.model}>
                    <TextInput
                        id="model"
                        value={data?.detail?.model}
                        onChange={(e) => {
                            setData("detail", {
                                ...data.detail,
                                model: e.target.value,
                            });
                        }}
                        className="mt-1 block w-full"
                        placeholder="i.e., FZ V5"
                    />
                </Field>
            </div>
            <div className="flex gap-2">
                <Field label="Category *" error={errors.name}>
                    <SelectBox
                        placeholder="Select a Category"
                        dataset={categories}
                        value={data?.detail?.category_id}
                        onChange={(e) => {
                            setData("detail", {
                                ...data.detail,
                                category_id: e.target.value,
                            });

                            setSubCategory(filterSubCategories(e.target.value));
                        }}
                    />
                </Field>
                <Field label="Sub Category *" error={errors.part_number}>
                    <SelectBox
                        placeholder="Select a Sub Category"
                        dataset={subCategory}
                        value={data.detail.sub_category_id}
                        onChange={(e) =>
                            setData("detail", {
                                ...data.detail,
                                sub_category_id: e.target.value,
                            })
                        }
                    />
                </Field>
            </div>
            <Field label="Product Description *" error={errors.description}>
                <TextArea
                    id="description"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    className="mt-1 block w-full"
                    placeholder="Biggest Motor for your cycle"
                />
            </Field>
            <Field label="Product Image *" error={errors.image}>
                <FileInput
                    onChange={(e) => setData("image", e.target.files[0])}
                    url={data.image}
                />
            </Field>
        </div>
    );
};

export default ProductDescription;
