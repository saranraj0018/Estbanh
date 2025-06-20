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
import RoleForm from "@/Components/Partials/RoleForm";
import { usePage } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useAdminDefaultContext } from "@/Context/AdminDefaultContext";

export default function Role({ roles, permissions }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        id: null,
        role_name: "",
        permissions: [],
    });

    const { auth } = usePage().props;
    const { getObjectMountState, dispatchSideBarState, object } = useAdminDefaultContext();

    const handleCreateOrUpdate = () => {
        post(route("save-role"), {
            onSuccess: () => dispatchSideBarState(),
        });
    };

    const handleDelete = () => {
        post(route("delete-role", { id: object?.id }), {
            onSuccess: () => dispatchSideBarState(),
        });
    };

    const formContent =
        getObjectMountState() === "deleting" ? (
            <DefaultDeleteAction title="Role" onDelete={handleDelete} />
        ) : auth.permissions.includes("create_roles") ?  (
            <RoleForm
                data={data}
                errors={errors}
                setData={setData}
                onSubmit={handleCreateOrUpdate}
                permissions={permissions}
            />
        ):null;

    return (
        <AdminLayout className="p-3">
            <DefaultPageLayout title="Roles" reset={reset} form={formContent}>
                <StyledTable>
                    <StyledTableHeader>
                        <tr>
                            <StyledTableHeaderCell>S.No</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Role Name</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Referral Code</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Created At</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Actions</StyledTableHeaderCell>
                        </tr>
                    </StyledTableHeader>
                    <StyledTableBody>
                        {roles.data.map((role, index) => (
                            <StyledTableRow key={role.id}>
                                <StyledTableCell>{index + 1}</StyledTableCell>
                                <StyledTableCell>{role.role_name}</StyledTableCell>
                                <StyledTableCell>{role.referral_code}</StyledTableCell>
                                <StyledTableCell>{new Date(role.created_at).toLocaleDateString()}</StyledTableCell>
                                <StyledTableCell className="flex gap-2">
                                    <ActionButtons
                                        object={role}
                                        data={data}
                                        setData={setData}
                                        module="roles"
                                        transform={(r) => ({
                                            id: r.id,
                                            role_name: r.role_name,
                                            permissions: r.permissions,
                                        })}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </StyledTableBody>
                </StyledTable>
                <Pagination collection={roles} />
            </DefaultPageLayout>
        </AdminLayout>
    );
}
