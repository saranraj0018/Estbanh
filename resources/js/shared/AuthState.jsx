import { usePage } from "@inertiajs/react";

export default function AuthState({ children, guest }) {

    const { user } = usePage().props.auth;

    if(!user) {
        return (
            <div>
                {guest}
            </div>
        );
    }

    return (
        <div>
            {children}
        </div>
    );
}
