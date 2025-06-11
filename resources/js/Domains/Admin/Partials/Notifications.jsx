import AdminLayout from "@/Layouts/AdminLayout";
import Heading from "@/Shared/Heading";
import Notification from "@/Shared/Layouts/Partials/Notification";
import Text from "@/Shared/Text";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";

const ViewRegisteredNotification = () => {
    const { notifications } = usePage().props;

    const _notifications = notifications.map((notification) => (
        <Notification
            onDelete={(element) => {
                post(route("delete-notification", element));
            }}
            showImage={false}
            notification={notification}
        />
    ));

    return (
        <AdminLayout className="p-3">
            <Head title="Notifications" />
            <Heading>Notifications</Heading>

            <div className="mt-5">{_notifications}</div>
        </AdminLayout>
    );
};

export default ViewRegisteredNotification;
