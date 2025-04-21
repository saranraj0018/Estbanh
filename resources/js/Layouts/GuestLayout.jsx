import ApplicationLogo from '@/Components/ApplicationLogo';
import Card from '@/Components/Card';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-white">
            {children}
        </div>
    );
}