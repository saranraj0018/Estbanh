import { router, usePage } from "@inertiajs/react";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";

export default function NavigateHistoryHeading({ heading }) {
    return (
        <div className="flex items-center justify-start gap-4">
            <button
                onClick={() => window.history.back()}
                className="btn btn-ghost btn-circle"
            >
                <ArrowLeftIcon size={20} />
            </button>
            {heading}
        </div>
    );
}
