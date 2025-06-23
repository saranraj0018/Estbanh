import "@/public/styles/style.css";
import Footer from "@/shared/layouts/users/Footer";
import Navbar from "@/shared/layouts/users/Navbar";

export default function UserLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-100">
            <Navbar />
            <div className="min-h-[70vh]">{children}</div>
            <Footer />
        </div>
    );
}
