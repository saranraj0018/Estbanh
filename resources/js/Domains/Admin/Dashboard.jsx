import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AdminLayout useDefaultPageLayout={false}>
            <Head title="Dashboard" />

            <div>
                Hello
            </div>
        </AdminLayout>
    );
}
