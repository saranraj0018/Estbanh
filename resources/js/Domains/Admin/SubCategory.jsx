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
import Image from "@/Shared/Image";
import SubCategoryForm from "@/Components/Partials/SubCategoryForm";

export default function SubCategory({ subCategories, categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        category_id: null,
        slug: "",
        description: "",
        image: null,
    });

    const { getObjectMountState, dispatchSideBarState, object } =
        useAdminDefaultContext();

    const handleCreate = () => {
        post(route("create-sub-category", { id: object?.id }), {
            onSuccess: () => dispatchSideBarState(),
        });
    };

    const handleDelete = () => {
        post(route("delete-sub-category", { id: object?.id }), {
            onSuccess: () => dispatchSideBarState(),
        });
    };

    const formContent =
        getObjectMountState() === "deleting" ? (
            <DefaultDeleteAction title="Sub Category" onDelete={handleDelete} />
        ) : (
            <SubCategoryForm
                data={data}
                errors={errors}
                setData={setData}
                onSubmit={handleCreate}
                categories={categories}
            />
        );

    return (
        <AdminLayout>
            <DefaultPageLayout
                title="Sub Category"
                reset={reset}
                form={formContent}
            >
                <StyledTable>
                    <StyledTableHeader>
                        <tr>
                            <StyledTableHeaderCell>Id</StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Category
                            </StyledTableHeaderCell>
                            <StyledTableHeaderCell>Name</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Slug</StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Action
                            </StyledTableHeaderCell>
                        </tr>
                    </StyledTableHeader>
                    <StyledTableBody>
                        {subCategories.data.map((subCategory, index) => (
                            <StyledTableRow key={index}>
                              
                                <StyledTableCell>
                                    {subCategory.id}
                                </StyledTableCell>
                              
                                <StyledTableCell>
                                    {subCategory?.category?.name}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {subCategory.name}
                                </StyledTableCell>
                                <StyledTableCell>
                                    {subCategory.slug}
                                </StyledTableCell>
                              
                                <StyledTableCell className="flex gap-2">
                                    <ActionButtons
                                        object={subCategory}
                                        data={data}
                                        setData={setData}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </StyledTableBody>
                </StyledTable>

                <Pagination collection={subCategories} />
            </DefaultPageLayout>
        </AdminLayout>
    );
}
