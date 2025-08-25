import StatusTag from "@/components/StatusTag";
import { EyeIcon } from "lucide-react";
import moment from "moment";

export default function SingleOrder({ order, setOrder }) {
    return (
        <tr className="hover:bg-gray-50 transition-colors">
            {/* Order ID */}
            <td className="text-left px-4 py-3 font-medium text-gray-800">
                {order?.order_id}
            </td>

            {/* Date */}
            <td className="text-left px-4 py-3 text-gray-600">
                {moment(order?.created_at).format("DD-MM-YYYY HH:mm A")}
            </td>

            {/* Gross Amount */}
            <td className="text-right px-4 py-3 text-gray-700">
                ₹ {order?.gross_amount}
            </td>

            {/* Net Amount */}
            <td className="text-right px-4 py-3 text-gray-700">
                ₹ {order?.net_amount}
            </td>

            {/* Status */}
            <td className="text-right px-4 py-3">
                <StatusTag status={order?.status} />
            </td>

            {/* Actions */}
            <td className="px-4 py-3 text-center">
                <button
                    onClick={() => setOrder(order)}
                    className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                >
                    <EyeIcon size={16} />
                    View
                </button>
            </td>
        </tr>
    );
}
