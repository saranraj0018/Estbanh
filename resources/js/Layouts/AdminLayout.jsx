import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import Navigation from "@/Components/Layouts/Navigation";
import Sidebar from "@/Components/Layouts/Sidebar";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Text from "@/Components/Text";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AdminLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className={`bg-gray-50 h-screen flex justify-start align-top`}>
            
            <Sidebar />

            <div className={`w-full `}>
                <Navigation />
                <div className="p-3">{children}</div>
            </div>
        </div>
    );
}
