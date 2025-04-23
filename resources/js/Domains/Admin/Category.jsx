import DaysFilter from "@/Components/Filters/DaysFilter";
import SearchFilter from "@/Components/Filters/SearchFilter";
import StyledTable from "@/Components/Styled/StyledTable";
import StyledTableBody from "@/Components/Styled/StyledTableBody";
import StyledTableCell from "@/Components/Styled/StyledTableCell";
import StyledTableHeader from "@/Components/Styled/StyledTableHeader";
import StyledTableHeaderCell from "@/Components/Styled/StyledTableHeaderCell";
import StyledTableRow from "@/Components/Styled/StyledTableRow";
import AdminLayout from "@/Layouts/AdminLayout";
import PrimaryButton from "@/Shared/PrimaryButton";
import { Head } from "@inertiajs/react";

export default function Category({categories}) {
    return (
        <AdminLayout name="Category" text="Categories">
            <Head title="Category" />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4 gap-2">
                    <DaysFilter />
                    <SearchFilter/>

                    <PrimaryButton>
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M6 12H18M12 6V18"
                                    stroke="#ffffff"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </g>
                        </svg>
                        Create Category
                    </PrimaryButton>
                </div>


                <StyledTable>
                    <StyledTableHeader>
                        <tr>
                            <StyledTableHeaderCell>S. No</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Name</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Slug</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Description</StyledTableHeaderCell>
                            <StyledTableHeaderCell>Action</StyledTableHeaderCell>
                        </tr>
                    </StyledTableHeader>
                    <StyledTableBody>
                        {categories.map((category, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>{index}</StyledTableCell>
                                <StyledTableCell>{category.name}</StyledTableCell>
                                <StyledTableCell>{category.slug}</StyledTableCell>
                                <StyledTableCell>{category.description}</StyledTableCell>
                                <StyledTableCell className="flex gap-2">
                                    <button className="text-blue-600 font-main">Edit</button>
                                    <button className="text-red-500 font-main">Delete</button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </StyledTableBody>
                </StyledTable>
            </div>
        </AdminLayout>
    );
}
