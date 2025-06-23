import AdminLayout from "@/shared/layouts/AdminLayout";
import DefaultPageLayout from "@/components/DefaultPageLayout";
import StyledTable, {
    StyledTableBody,
    StyledTableCell,
    StyledTableHeader,
    StyledTableHeaderCell,
    StyledTableRow,
} from "@/shared/styled/StyledTable";
import Pagination from "@/shared/Pagination";
import ActionButtons from "@/shared/ActionButtons";
import DefaultDeleteAction from "@/shared/DefaultDeleteAction";
import { usePage } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useAdminDefaultContext } from "@/lib/context/AdminDefaultContext";
import Image from "@/shared/Image";
import ProductForm from "@/app/admin/_partials/products/forms/ProductForm";

export default function Product({ products, categories }) {
    const { auth } = usePage().props;
    const { getObjectMountState, dispatchSideBarState, object } =
        useAdminDefaultContext();

    const form = useForm({
        name: "",
        part_number: "",
        description: "",
        image: null,
        detail: {
            category_id: null,
            sub_category_id: null,
            product_details: [],
        },
        features: [],
        images: [],
        make: "",
        model: "",
    });

    const formContent =
        getObjectMountState() === "deleting" ? (
            <DefaultDeleteAction
                title="Product"
                onDelete={() => {
                    form.post(route("delete-product", { id: object?.id }), {
                        onSuccess: () => dispatchSideBarState(),
                    });
                }}
            />
        ) : auth.permissions.includes("create_products") ? (
            <ProductForm {...form} categories={categories} />
        ) : null;

    return (
        <AdminLayout className="p-3">
            <DefaultPageLayout
                title="Product"
                reset={form.reset}
                form={formContent}
                sideBarWidth={`8xl`}
            >
                <StyledTable>
                    <StyledTableHeader>
                        <tr>
                            <StyledTableHeaderCell>Id</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Image</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Name</StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Part Number
                            </StyledTableHeaderCell>
                            <StyledTableHeaderCell>Make</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Model</StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Description
                            </StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Action
                            </StyledTableHeaderCell>
                        </tr>
                    </StyledTableHeader>
                    <StyledTableBody>
                        {products?.data
                            ? products?.data?.map((product, index) => (
                                  <StyledTableRow key={index}>
                                      <StyledTableCell>
                                          {product.id}
                                      </StyledTableCell>
                                      <td className="ps-4">
                                          <Image source={product.image} />
                                      </td>
                                      <StyledTableCell>
                                          {product.name}
                                      </StyledTableCell>
                                      <StyledTableCell>
                                          {product.part_number}
                                      </StyledTableCell>
                                      <StyledTableCell>
                                          {product.make}
                                      </StyledTableCell>
                                      <StyledTableCell>
                                          {product.model}
                                      </StyledTableCell>
                                      <StyledTableCell>
                                          {product.description}
                                      </StyledTableCell>
                                      <StyledTableCell className="flex gap-2">
                                          <ActionButtons
                                              object={product}
                                              data={form.data}
                                              setData={form.setData}
                                              module="products"
                                          />
                                      </StyledTableCell>
                                  </StyledTableRow>
                              ))
                            : null}
                    </StyledTableBody>
                </StyledTable>
                {products?.data ? <Pagination collection={products} /> : null}
            </DefaultPageLayout>
        </AdminLayout>
    );
}
