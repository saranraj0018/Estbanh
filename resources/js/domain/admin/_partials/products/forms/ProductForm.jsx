import { MultipleFilesInput } from "@/shared";
import ProductInvoice from "../ProductInvoice";
import { useAttributesForm } from "@/lib/hooks/useAttributesForm";
import { useProductDetailsForm } from "@/lib/hooks/useProductDetailsForm";
import ProductDetailsForm from "./ProductDetailsForm";
import Section from "../../../../../components/_partials/Section";
import Steps from "@/shared/multistep/Steps";
import Step from "@/shared/multistep/Step";
import ProductVarients, { validate } from "../ProductVarients";
import { useAdminDefaultContext } from "@/lib/context/AdminDefaultContext";

import ProductDescription, {
    validate as validateDescription,
} from "../ProductDescription";



export default function ProductForm({ categories, ...form }) {
    const { data, setData, errors, post } = form;
    const attributes = useAttributesForm(data, setData);
    const productDetails = useProductDetailsForm(data, setData);

    const { dispatchSideBarState, object } = useAdminDefaultContext();

    const onSubmit = () => {
        post(route("create-product", { id: object?.id }), {
            onSuccess: () => dispatchSideBarState(),
        });
    };


    const errorElement = Object.entries(errors).map(([key, error], index) => (
        <li className="text-red-500 text-[13px] font-normal">  {index + 1}. {error}</li>
    ));

    return (
        <form onSubmit={(e) => e.preventDefault()} className="min-h-full">
            {Object.entries(errors).length > 0 && (
                <ul className="bg-red-50 p-2 rounded-lg mb-10 border-2 border-red-100 space-y-2">{errorElement}</ul>
            )}

            <Steps totalSteps={5} data={data} onSubmit={onSubmit}>
                <Step step={1} validate={() => validateDescription(data)}>
                    <ProductDescription categories={categories} {...form} />
                </Step>

                <Step step={2} validate={() => validate(data)}>
                    <ProductVarients attributes={attributes} {...form} />
                </Step>

                <Step step={3} validate={() => data.images.length}>
                    <Section
                        title="Product Images"
                        subtitle="Add some images for your product to be recognized"
                    />

                    <MultipleFilesInput
                        onChange={(files) => setData("images", files)}
                        urls={data.images}
                    />
                </Step>

                <Step step={4} validate={() => data.images.length}>
                    <Section
                        title="Product Details"
                        subtitle="Add some more details about the product"
                    />

                    <ProductDetailsForm productDetails={productDetails} />
                </Step>

                <Step step={5} validate={() => data.images.length}>
                    <Section
                        title="Product Review"
                        subtitle="please review your changes"
                    />

                    <ProductInvoice data={data} />
                </Step>
            </Steps>
        </form>
    );
}
