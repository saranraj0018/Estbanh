import Navigation from "@/Shared/Layouts/Navigation";
import Sidebar from "@/Shared/Layouts/Sidebar";
import NotificationBar from "@/Shared/Layouts/NotificationBar";

import SettingBar from "@/Shared/Layouts/SettingBar";
import Mobilebar from "@/Shared/Layouts/Mobilebar";
import { usePage } from "@inertiajs/react";
import Breadcrumb from "@/Shared/Breadcrumb";
import { useAdminLayoutContext } from "@/Context/AdminLayoutContext";
import DefaultPageLayout from "@/Components/DefaultPageLayout";
import Toast from "@/Shared/Toast";

export default function AdminLayout({ title, header, children }) {
    const { flash } = usePage().props;
    
    const {
        isSideBarOpen,
        setIsSideBarOpen,
        settingBar,
        setSettingBar,
        notificationBar,
        setNotificationBar,
    } = useAdminLayoutContext();

    const formatted_url = usePage().props.route.uri.split("/");

    return (
        <div
            className={`bg-gray-50 h-screen flex justify-start align-top overflow-hidden`}
        >
            {isSideBarOpen ? <Sidebar /> : <Mobilebar />}

            <div className={`w-full`}>
                <Navigation
                    onOpenSideBar={() => setIsSideBarOpen((state) => !state)}
                    onNotificationClick={() => {
                        setNotificationBar((state) => !state);
                        setSettingBar(() => false);
                    }}
                    onSettingClick={() => {
                        setSettingBar((state) => !state);
                        setNotificationBar(() => false);
                    }}
                />
                <div className="flex h-full w-full">
                    <div className="p-3 w-auto flex-1">
                        <div className="flex items-center justify-between gap-2">
                            <Breadcrumb paths={formatted_url} />
                            {header}
                        </div>

                        <div className="h-[88%] flex-1 w-full overflow-y-auto">
                            {flash.success && (
                                <Toast message={flash.success} />
                            )}
                            <div className="p-3">{children}</div>
                        </div>
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
