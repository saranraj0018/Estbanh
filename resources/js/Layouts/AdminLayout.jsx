
import Navigation from "@/Components/Layouts/Navigation";
import Sidebar from "@/Components/Layouts/Sidebar";
import NotificationBar from "@/Components/Layouts/NotificationBar";

import { useState } from "react";
import SettingBar from "@/Components/Layouts/SettingBar";
import Mobilebar from "@/Components/Layouts/Mobilebar";

export default function AdminLayout({ header, children }) {
    // const user = usePage().props.auth.user;


    const [isSideBarOpen, setIsSideBarOpen] = useState(false);




    const [settingBar, setSettingBar] =
        useState(false);

    const [notificationBar, setNotificationBar] =
        useState(false);


    return (
        <div className={`bg-gray-50 h-screen flex justify-start align-top`}>
            {
                isSideBarOpen ? <Sidebar /> : <Mobilebar />
            }

            <div className={`w-full `}>
                <Navigation onOpenSideBar={() => setIsSideBarOpen(state => !state)} onNotificationClick={() => setNotificationBar((state) => !state)} onSettingClick={() => setSettingBar((state) => !state)} />
                <div className="flex h-full">
                    <div className="p-3 flex-1">{children}</div>
                    { notificationBar && <NotificationBar onClick={() => setNotificationBar(() => false)} /> }
                    { settingBar && <SettingBar onClick={() => setSettingBar(() => false)} /> }
                </div>
            </div>
        </div>
    );
}
