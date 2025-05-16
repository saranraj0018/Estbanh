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
import { useForm } from "@inertiajs/react";
import { useAdminDefaultContext } from "@/Context/AdminDefaultContext";
import CategoryForm from "@/Components/Partials/CategoryForm";
import Image from "@/Shared/Image";

export default function Category({ categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        slug: "",
    });

    const { getObjectMountState, dispatchSideBarState, object } =
        useAdminDefaultContext();

    const handleCreate = () => {
        post(route("create-category", { id: object?.id }), {
            onSuccess: () => dispatchSideBarState(),
        });
    };

    const handleDelete = () => {
        post(route("delete-category", { id: object?.id }), {
            onSuccess: () => dispatchSideBarState(),
        });
    };

    const formContent =
        getObjectMountState() === "deleting" ? (
            <DefaultDeleteAction title="Category" onDelete={handleDelete} />
        ) : (
            <CategoryForm
                data={data}
                errors={errors}
                setData={setData}
                onSubmit={handleCreate}
            />
        );

    return (
        <AdminLayout>
            <DefaultPageLayout
                title="Category"
                reset={reset}
                form={formContent}
            >
                <StyledTable>
                    <StyledTableHeader>
                        <tr>
                            <StyledTableHeaderCell>Id</StyledTableHeaderCell>

                            <StyledTableHeaderCell>Name</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Slug</StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Action
                            </StyledTableHeaderCell>
                        </tr>
                    </StyledTableHeader>
                    <StyledTableBody>
                        {categories.data.map((category, index) => (
                            <StyledTableRow key={index}>
                                 <StyledTableCell>
                                    {category.id}
                                </StyledTableCell>

                                <StyledTableCell>
                                    {category.name}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {category.slug}
                                </StyledTableCell>
                                <StyledTableCell className="flex gap-2">
                                    <ActionButtons
                                        object={category}
                                        data={data}
                                        setData={setData}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </StyledTableBody>
                </StyledTable>

                <Pagination collection={categories} />
            </DefaultPageLayout>
        </AdminLayout>
    );
}
