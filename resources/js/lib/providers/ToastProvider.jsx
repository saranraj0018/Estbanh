import { usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ToastProvider({ children }) {
    const flash = usePage().props?.flash;
    const { success, error } = flash;

    useEffect(() => {
        if (success) {
            toast.success(success);
        }

        if (error) {
            toast.error(error);
        }
    }, [success, error]);

    return (
        <>
            <Toaster position="top-right" />
            {children}
        </>
    );
}
