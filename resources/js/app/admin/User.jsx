import { router } from '@inertiajs/react';
import AdminLayout from "@/shared/layouts/AdminLayout";
import StyledTable, {
    StyledTableBody,
    StyledTableCell,
    StyledTableHeader,
    StyledTableHeaderCell,
    StyledTableRow,
} from "@/shared/styled/StyledTable";
import Pagination from "@/shared/Pagination";

export default function User({ users }) {
    return (
        <AdminLayout className="p-3">
            <StyledTable>
                <StyledTableHeader>
                    <tr>
                        <StyledTableHeaderCell>#</StyledTableHeaderCell>
                        <StyledTableHeaderCell>Name</StyledTableHeaderCell>
                        <StyledTableHeaderCell>Email</StyledTableHeaderCell>
                        <StyledTableHeaderCell>Created At</StyledTableHeaderCell>
                        <StyledTableHeaderCell>Action</StyledTableHeaderCell>
                    </tr>
                </StyledTableHeader>

                <StyledTableBody>
                    {users.data.map((user, index) => (
                        <StyledTableRow key={user.id}>
                            <StyledTableCell>{index + 1}</StyledTableCell>
                            <StyledTableCell>{user.name}</StyledTableCell>
                            <StyledTableCell>{user.email}</StyledTableCell>
                            <StyledTableCell>{new Date(user.created_at).toLocaleDateString()}</StyledTableCell>
                            <StyledTableCell>
                                <button
                                    onClick={() => router.get(route('admin.users.show', user.id))}
                                    className="text-blue-500 hover:text-blue-700 transition"
                                    title="View"
                                >
                                    {/* Heroicons eye icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </StyledTableBody>
            </StyledTable>

            <Pagination collection={users} />
        </AdminLayout>
    );
}
