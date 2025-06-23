import Section from "@/components/_partials/Section";
import React from "react";
import AttributeForm from "./forms/AttributeForm";
import { useAttributesForm } from "@/lib/hooks/useAttributesForm";
import { InputError, SecondaryButton } from "@/shared";

export default function ProductVarients({
    data,
    setData,
    errors,
    attributes: {
        attributes,
        handleAddAttribute,
        handleRemoveAttribute,
        handleToggleMinimize,
        handleAttributeNameChange,
        handleAddVariant,
        handleRemoveVariant,
        handleVariantChange,
    },
}) {
    return (
        <>
            <Section
                title="Attributes and Variants"
                subtitle="What are all the attributes and variants of the products?"
            >
                <SecondaryButton type="button" onClick={handleAddAttribute}>
                    + New
                </SecondaryButton>
            </Section>


            <AttributeForm
                data={data}
                attributes={attributes}
                handleAddAttribute={handleAddAttribute}
                handleRemoveAttribute={handleRemoveAttribute}
                handleToggleMinimize={handleToggleMinimize}
                handleAttributeNameChange={handleAttributeNameChange}
                handleAddVariant={handleAddVariant}
                handleRemoveVariant={handleRemoveVariant}
                handleVariantChange={handleVariantChange}
            />
        </>
    );
}

export const validate = (data) => {
    return data.features.every(
        (item) =>
            item.name &&
            item.variants.length &&
            item.variants.every(
                (el) =>
                    el.weight &&
                    el.weight > 0 &&
                    el.width &&
                    el.width > 0 &&
                    el.height &&
                    el.height > 0 &&
                    el.length &&
                    el.length > 0 &&
                    el.varient &&
                    el.sale_price &&
                    el.sale_price > 0 &&
                    el.regular_price &&
                    el.regular_price > 0 &&
                    el.description
            )
    );
};
