import { router } from "@inertiajs/react";
import AdminLayout from "@/shared/layouts/AdminLayout";

function FieldGroup({ label, value }) {
    return (
        <div className="flex flex-col">
            <span className="text-gray-500 text-sm">{label}</span>
            <span className="text-gray-800 font-medium">{value ?? "-"}</span>
        </div>
    );
}

export default function UserShow({ user }) {
    return (
        <AdminLayout className="p-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">User Details</h2>
                <button
                    onClick={() => router.visit(route("admin.users"))}
                    className="flex items-center gap-2 p-2 bg-black text-white rounded hover:bg-gray-800 transition"
                    title="Back"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>


            </div>

            <div className="bg-white rounded shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FieldGroup label="ID" value={user.id} />
                    <FieldGroup label="Name" value={user.name} />
                    <FieldGroup label="Email" value={user.email} />
                    <FieldGroup label="Phone" value={user.issuer_phone} />
                    <FieldGroup label="CNR Number" value={user.cnr_number} />
                    <FieldGroup label="VAT Number" value={user.vat_number} />
                    <FieldGroup label="Address" value={user.address_line_1} />
                    <FieldGroup label="City" value={user.city} />
                    <FieldGroup label="State" value={user.state} />
                    <FieldGroup label="Country" value={user.country} />
                    <FieldGroup label="Pincode" value={user.pin_code} />
                    <FieldGroup label="Issuer Name" value={user.issuer_name} />
                    <FieldGroup label="Issuer Phone" value={user.issuer_phone} />
                    <FieldGroup label="Accountant Name" value={user.accountant_name} />
                    <FieldGroup label="Accountant Phone" value={user.accountant_phone} />
                    <FieldGroup label="Authority Name" value={user.authority_name} />
                    <FieldGroup label="Authority Phone" value={user.authority_phone} />
                    <FieldGroup label="Created At" value={new Date(user.created_at).toLocaleString()} />
                </div>
            </div>
        </AdminLayout>
    );
}
