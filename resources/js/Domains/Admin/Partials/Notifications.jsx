import AdminLayout from "@/Layouts/AdminLayout";
import Notification from "@/Shared/Layouts/Partials/Notification";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

const ViewRegisteredNotification = () => {
    const { notifications } = usePage().props;
    const { post } = useForm();

    const _notifications = notifications.map((notification) => (
        <Notification
            key={notification.id}
            onDelete={(element) => {
                post(route("delete-notification", element));
            }}
            showImage={false}
            notification={notification}
        />
    ));

    return (
        <AdminLayout className="p-4">
            <Head title="Notifications" />
            <div className="">{_notifications}</div>
        </AdminLayout>
    );
};

export default ViewRegisteredNotification;
