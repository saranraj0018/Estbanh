

export const useAttributesForm = (data, setData) => {

    const { features } = data
    
    const setAttributes = (dataOrUpdater) => {
        if (typeof dataOrUpdater === "function") {
            setData('features', dataOrUpdater(features));
        } else {
            setData('features', dataOrUpdater);
        }
    };

    const handleAddAttribute = () => {
        setAttributes((prev) => [
            ...prev,
            {
                name: "",
                variants: [],
                minimized: false,
            },
        ]);
    };

    const handleRemoveAttribute = (index) => {
        setAttributes((prev) => prev.filter((_, i) => i !== index));
    };

    const handleToggleMinimize = (index) => {
        setAttributes((prev) =>
            prev.map((attr, i) =>
                i === index ? { ...attr, minimized: !attr.minimized } : attr
            )
        );
    };

    const handleAttributeNameChange = (index, value) => {
        setAttributes((prev) =>
            prev.map((attr, i) =>
                i === index ? { ...attr, name: value } : attr
            )
        );
    };

    const handleAddVariant = (index) => {
        setAttributes((prev) =>
            prev.map((attr, i) =>
                i === index
                    ? {
                          ...attr,
                          variants: [
                              ...attr.variants,
                              {
                                  varient: "",
                                  weight: "",
                                  sale_price: "",
                                  regular_price: "",
                                  description: "",
                                  length: "",
                                  width: "",
                                  height: "",
                              },
                          ],
                      }
                    : attr
            )
        );
    };

    const handleRemoveVariant = (attrIndex, variantIndex) => {
        setAttributes((prev) =>
            prev.map((attr, i) =>
                i === attrIndex
                    ? {
                          ...attr,
                          variants: attr.variants.filter((_, vi) => vi !== variantIndex),
                      }
                    : attr
            )
        );
    };

    const handleVariantChange = (attrIndex, variantIndex, field, value) => {
        setAttributes((prev) =>
            prev.map((attr, i) =>
                i === attrIndex
                    ? {
                          ...attr,
                          variants: attr.variants.map((variant, vi) =>
                              vi === variantIndex
                                  ? { ...variant, [field]: value }
                                  : variant
                          ),
                      }
                    : attr
            )
        );
    };



    return {
        attributes: features,
        setAttributes,
        handleAddAttribute,
        handleRemoveAttribute,
        handleToggleMinimize,
        handleAttributeNameChange,
        handleAddVariant,
        handleRemoveVariant,
        handleVariantChange
    }

}