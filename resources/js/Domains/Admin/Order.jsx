import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AdminLayout
            className="p-3"
        >
            <Head title="Order" />

            <div>
            Order
            </div>
        </AdminLayout>
    );
}
