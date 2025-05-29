import "@/Assets/Styles/style.css";
import Footer from "@/Shared/Layouts/Users/Footer";
import Navbar from "@/Shared/Layouts/Users/Navbar";

export default function UserLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-100">
            <Navbar />
            <div className="min-h-[70vh]">{children}</div>
            <Footer />
        </div>
    );
}
