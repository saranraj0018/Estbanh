import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function SubCategory() {
    return (
        <AdminLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    SubCategory
                </h2>
            }
        >
            <Head title="SubCategory" />

            <div>
            SubCategory
            </div>
        </AdminLayout>
    );
}
