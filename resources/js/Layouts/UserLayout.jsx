import ApplicationLogo from '@/Shared/ApplicationLogo';
import Dropdown from '@/Shared/Dropdown';
import Footer from '@/Shared/Layouts/Users/Footer';
import Navbar from '@/Shared/Layouts/Users/Navbar';
import NavLink from '@/Shared/NavLink';
import ResponsiveNavLink from '@/Shared/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
// import '@/Assets/Styles/style.css';

export default function UserLayout({ header, children }) {
  
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar/>
            {children}
            <Footer />
        </div>
    );
}