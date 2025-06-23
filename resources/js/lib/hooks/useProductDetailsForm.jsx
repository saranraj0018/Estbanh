export const useProductDetailsForm = (data, setData) => {
    const product_details = data?.detail?.product_details;

    const setDetails = (dataOrUpdater) => {
        setData("detail", {
            ...data.detail,
            product_details: dataOrUpdater,
        })
    };

    const handleRemoveDetails = (index) => {
        setDetails((prev) => prev.filter((_, i) => i !== index));
    };

    const handleDetailsNameChange = (index, value) => {
        setDetails((prev) =>
            prev.map((attr, i) =>
                i === index ? { ...attr, name: value } : attr
            )
        );
    };

    return {
        details: product_details,
        setDetails,
        handleRemoveDetails,
        handleDetailsNameChange,
    };
};
