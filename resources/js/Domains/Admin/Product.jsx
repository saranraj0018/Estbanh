import AdminLayout from "@/Layouts/AdminLayout";
import DefaultPageLayout from "@/Components/DefaultPageLayout";
import StyledTable, {
    StyledTableBody,
    StyledTableCell,
    StyledTableHeader,
    StyledTableHeaderCell,
    StyledTableRow,
} from "@/Shared/Styled/StyledTable";
import Pagination from "@/Shared/Pagination";
import ActionButtons from "@/Components/Shared/ActionButtons";
import DefaultDeleteAction from "@/Components/Shared/DefaultDeleteAction";
import { usePage } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useAdminDefaultContext } from "@/Context/AdminDefaultContext";
import Image from "@/Shared/Image";
import ProductForm from "@/Components/Partials/ProductForm";

export default function Product({ products, categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        part_number: "",
        description: "",
        image: null,
        detail: {
            category_id: null,
            sub_category_id: null
        },
        features: [],
        images: []
    });

    const { auth } = usePage().props;
    const { getObjectMountState, dispatchSideBarState, object } =
        useAdminDefaultContext();

    const handleCreate = () => {
        post(route("create-product", { id: object?.id }), {
            onSuccess: () => dispatchSideBarState(),
        });
    };

    const handleDelete = () => {
        post(route("delete-product", { id: object?.id }), {
            onSuccess: () => dispatchSideBarState(),
        });
    };

    const formContent =
        getObjectMountState() === "deleting" ? (
            <DefaultDeleteAction title="Product" onDelete={handleDelete} />
        ) : auth.permissions.includes("create_products") ?  (
            <ProductForm
                data={data}
                errors={errors}
                setData={setData}
                categories={categories}
                onSubmit={handleCreate}
            />
        ):null;

    return (
        <AdminLayout className="p-3">
            <DefaultPageLayout
                title="Product"
                reset={reset}
                form={formContent}
                sideBarWidth={`400px`}
            >
                <StyledTable>
                    <StyledTableHeader>
                        <tr>
                            <StyledTableHeaderCell>Id</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Image</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Name</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Part Number</StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Description
                            </StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Action
                            </StyledTableHeaderCell>
                        </tr>
                    </StyledTableHeader>
                    <StyledTableBody>
                        {products.data.map((product, index) => (
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
                                    {product.description}
                                </StyledTableCell>
                                <StyledTableCell className="flex gap-2">
                                    <ActionButtons
                                        object={product}
                                        data={data}
                                        setData={setData}
                                         module="products"
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </StyledTableBody>
                </StyledTable>

                <Pagination collection={products} />
            </DefaultPageLayout>
        </AdminLayout>
    );
}
