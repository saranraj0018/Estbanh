import { useState, useEffect } from "react";
import {
    InputLabel,
    TextInput,
    TextArea,
    FileInput,
    InputError,
    SecondaryButton,
    PrimaryButton,
    SelectBox,
    MultipleFilesInput,
} from "@/Shared"; // Grouped imports
import StepIndicator from "../StepIndicator";
import FormSubmitButtons from "@/Components/Shared/FormSubmitButtons";
import AttributeForm from "./Extends/AttributeForm";
import ProductInvoice from "./Extends/ProductInvoice";
import { useAttributesForm } from "@/Hooks/useAttributesForm";

export default function ProductForm({
    data,
    errors,
    setData,
    categories,
    onSubmit,
}) {
    const totalSteps = 4;
    const [step, setStep] = useState(1);
    const [subCategory, setSubCategory] = useState([]);
    const [canProceed, setCanProceed] = useState(false); // Always true in your current logic

    const {
        attributes,
        handleAddAttribute,
        handleRemoveAttribute,
        handleToggleMinimize,
        handleAttributeNameChange,
        handleAddVariant,
        handleRemoveVariant,
        handleVariantChange,
    } = useAttributesForm(data, setData);

    const filterSubCategories = (categoryId) => {
        const selected = categories.find((cat) => cat.id == categoryId);
        return selected?.sub_categories || [];
    };

    const validateStep = () => {
        switch (step) {
            case 1:
                return (
                    data.name &&
                    data.part_number &&
                    data.image &&
                    data.description &&
                    data.detail.category_id &&
                    data.detail.sub_category_id
                );
            case 2:
                return data.features.every(
                    (item) =>
                        item.name &&
                        item.variants.length &&
                        item.variants.every(
                            (el) =>
                                (el.weight && el.weight > 0) &&
                                (el.width && el.width > 0) &&
                                (el.height && el.height > 0) &&
                                (el.length && el.length > 0) &&
                                el.varient &&
                                (el.sale_price && el.sale_price > 0) &&
                                (el.regular_price && el.regular_price > 0) &&
                                el.description
                        )
                );
            case 3:
                return data.images.length;
            case 4:
                return true;
            default:
                return false;
        }
    };

    useEffect(() => {
        setCanProceed(() => validateStep());
    }, [step, data]);

    useEffect(() => {
        if (!data.features.length) {
            handleAddAttribute();
        }
    }, []);

    useEffect(() => {
        if (data.detail.category_id) {
            setSubCategory(filterSubCategories(data.detail.category_id));
        }
    }, [data.detail.category_id]);

    const nextStep = () =>
        step < totalSteps && canProceed && setStep((prev) => prev + 1);
    const prevStep = () => step > 1 && setStep((prev) => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        step === totalSteps ? onSubmit() : nextStep();
    };

    const renderStep = () => {
        const fieldStyle = "mt-1 block w-full";
        switch (step) {
            case 1:
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
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className={fieldStyle}
                                    placeholder="i.e., Motorcycle, Car, Truck"
                                />
                            </Field>
                            <Field
                                label="Part Number *"
                                error={errors.part_number}
                            >
                                <TextInput
                                    id="part_number"
                                    value={data.part_number}
                                    onChange={(e) =>
                                        setData("part_number", e.target.value)
                                    }
                                    className={fieldStyle}
                                    placeholder="i.e., motor-for-your-cycle"
                                />
                            </Field>
                        </div>
                        <div className="flex gap-2">
                            <Field label="Category *" error={errors.name}>
                                <SelectBox
                                    placeholder="Select a Category"
                                    dataset={categories}
                                    value={data.detail.category_id}
                                    onChange={(e) => {
                                        setData("detail", {
                                            ...data.detail,
                                            category_id: e.target.value,
                                        });

                                        setSubCategory(
                                            filterSubCategories(e.target.value)
                                        );
                                    }}
                                />
                            </Field>
                            <Field
                                label="Sub Category *"
                                error={errors.part_number}
                            >
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
                        <Field
                            label="Product Description *"
                            error={errors.description}
                        >
                            <TextArea
                                id="description"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className={fieldStyle}
                                placeholder="Biggest Motor for your cycle"
                            />
                        </Field>
                        <Field label="Product Image *" error={errors.image}>
                            <FileInput
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                                url={data.image}
                            />
                        </Field>
                    </div>
                );

            case 2:
                return (
                    <>
                        <Section
                            title="Attributes and Variants"
                            subtitle="What are all the attributes and variants of the products?"
                        >
                            <button
                                type="button"
                                onClick={handleAddAttribute}
                                className="text-xl font-bold"
                            >
                                +
                            </button>
                        </Section>
                        <AttributeForm
                            attributes={attributes}
                            handleAddAttribute={handleAddAttribute}
                            handleRemoveAttribute={handleRemoveAttribute}
                            handleToggleMinimize={handleToggleMinimize}
                            handleAttributeNameChange={
                                handleAttributeNameChange
                            }
                            handleAddVariant={handleAddVariant}
                            handleRemoveVariant={handleRemoveVariant}
                            handleVariantChange={handleVariantChange}
                        />
                    </>
                );

            case 3:
                return (
                    <>
                        <Section
                            title="Product Images"
                            subtitle="Add some images for your product to be recognized"
                        />

                        <MultipleFilesInput
                            onChange={(files) => setData("images", files)}
                            urls={data.images}
                        />
                    </>
                );

            case 4:
                return (
                    <>
                        <Section
                            title="Product Review"
                            subtitle="please review your changes"
                        />

                        <ProductInvoice data={data} />
                        <div className="flex justify-between items-center mt-5">
                            <SecondaryButton type="button" onClick={prevStep}>
                                Back
                            </SecondaryButton>
                            <FormSubmitButtons />
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="min-h-full">
            <div className="mb-10">
                <StepIndicator step={step} totalSteps={totalSteps} />
            </div>

            {renderStep()}

            {step < totalSteps && (
                <div className="mt-10 flex justify-between">
                    {step > 1 ? (
                        <SecondaryButton type="button" onClick={prevStep}>
                            Back
                        </SecondaryButton>
                    ) : (
                        <div />
                    )}
                    <PrimaryButton
                        type="button"
                        disabled={!canProceed}
                        onClick={() => {
                            nextStep();
                            console.log(data);
                        }}
                    >
                        Next
                    </PrimaryButton>
                </div>
            )}
        </form>
    );
}

const Section = ({ title, subtitle, children }) => (
    <div className="mb-5">
        <div className="flex justify-between items-center">
            <h1 className="font-bold">{title}</h1>
            {children}
        </div>
        <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
);

const Field = ({ label, error, children }) => (
    <div className="w-full">
        <InputLabel value={label} />
        {children}
        <InputError message={error} className="mt-2" />
    </div>
);
