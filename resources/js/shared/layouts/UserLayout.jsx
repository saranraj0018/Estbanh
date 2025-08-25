import ToastProvider from "@/lib/providers/ToastProvider";
import "@/public/styles/style.css";
import Footer from "@/shared/layouts/users/Footer";
import Navbar from "@/shared/layouts/users/Navbar";

export default function UserLayout({ children }) {
    return (
        <ToastProvider>
            <div className="min-h-screen flex flex-col justify-between bg-gray-100">
                <Navbar />
                <div className="min-h-[70vh]">{children}</div>
                <Footer />
            </div>
        </ToastProvider>
    );
}
