import Navigation from "@/Shared/Layouts/Navigation";
import Sidebar from "@/Shared/Layouts/Sidebar";
import NotificationBar from "@/Shared/Layouts/NotificationBar";

import { useState } from "react";
import SettingBar from "@/Shared/Layouts/SettingBar";
import Mobilebar from "@/Shared/Layouts/Mobilebar";
import { usePage } from "@inertiajs/react";
import Breadcrumb from "@/Shared/Breadcrumb";
import SecondaryButton from "@/Shared/SecondaryButton";

export default function AdminLayout({ name, text, header, children }) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [settingBar, setSettingBar] = useState(false);
    const [notificationBar, setNotificationBar] = useState(false);

    const formatted_url = usePage().props.route.uri.split("/");

    return (
        <div className={`bg-gray-50 h-screen flex justify-start align-top`}>
            {isSideBarOpen ? <Sidebar /> : <Mobilebar />}

            <div className={`w-full`}>
                <Navigation
                    onOpenSideBar={() => setIsSideBarOpen((state) => !state)}
                    onNotificationClick={() =>
                        setNotificationBar((state) => !state)
                    }
                    onSettingClick={() => setSettingBar((state) => !state)}
                />
                <div className="flex h-full w-full">
                    <div className="p-3 w-auto flex-1">
                        <div className="flex items-center justify-between gap-2">
                            <Breadcrumb paths={formatted_url} />
                            {header}
                        </div>

                        <div className="p-3 flex-1">{children}</div>
                    </div>
                    {notificationBar && (
                        <NotificationBar
                            onClick={() => setNotificationBar(() => false)}
                        />
                    )}
                    {settingBar && (
                        <SettingBar
                            onClick={() => setSettingBar(() => false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
