// components/StatusTag.jsx
export default function StatusTag({ status }) {
    const baseClasses =
        "px-2 py-1 rounded-full text-xs font-medium inline-block";

    const statusClasses = {
        Ordered: "bg-blue-100 text-blue-700",
        "On Hold": "bg-yellow-100 text-yellow-700",
        Shipped: "bg-indigo-100 text-indigo-700",
        Delivered: "bg-green-100 text-green-700",
        Cancelled: "bg-red-100 text-red-700",
        Refunded: "bg-gray-200 text-gray-700",
    };

    return (
        <span
            className={`${baseClasses} ${
                statusClasses[status] || "bg-gray-100 text-gray-600"
            }`}
        >
            {status}
        </span>
    );
}
