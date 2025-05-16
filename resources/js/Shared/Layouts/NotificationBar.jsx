import React from "react";

const NotificationBar = ({ onClick }) => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/notifications");
            setNotifications(Array.isArray(response?.data) ? response.data : []);
        } catch (err) {
            setError("Failed to fetch notifications");
        } finally {
            setLoading(false);
        }
    };

    const markAsRead = async (id) => {
        await axios.post(`/notifications/${id}/read`);
        fetchNotifications(); // reload list
    };

    const markAllAsRead = async () => {
        await axios.post("/notifications/mark-all-read");
        fetchNotifications();
    };

    const deleteAll = async () => {
        await axios.delete("/notifications/delete-all");
        fetchNotifications();
    };

    // Delete individual notification
    const deleteNotification = async (id) => {
        try {
            const response = await axios.delete(`/notifications/${id}`);
            if (response.status === 200) {
                // Only fetch the updated notifications if the deletion was successful
                fetchNotifications();
            } else {
                setError("Failed to delete notification.");
            }
        } catch (err) {
            setError("Failed to delete notification.");
            console.error("Delete error: ", err);
        }
    };

    return (
        <div className={`w-[300px] border-2 shadow-sm border-gray-200`}>
            <div className="p-2 flex justify-start items-center gap-3">
            <button className="" onClick={onClick}>
                    <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button onClick={deleteAll} className="text-red-500 hover:underline">
                    Delete all
                </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {loading ? (
                    <div className="text-center text-gray-500 text-sm">Loading...</div>
                ) : error ? (
                    <div className="text-center text-red-500 text-sm">{error}</div>
                ) : notifications.length === 0 ? (
                    <div className="text-gray-500 text-sm text-center">No notifications</div>
                ) : (
                    notifications.map((n) => (
                        <div
                            key={n.id}
                            onClick={() => markAsRead(n.id)}
                            className={`p-3 rounded border cursor-pointer hover:bg-gray-50 ${n.status === 0 ? "bg-blue-50 border-blue-300" : "bg-white"}`}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium">{n.title}</p>
                                    <p className="text-xs text-gray-600">{n.description}</p>
                                    <p className="text-[10px] text-gray-400 mt-1">
                                        {new Date(n.created_at).toLocaleString()}
                                        {n.status === 0 && (
                                            <span className="ml-2 inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                                        )}
                                    </p>
                                </div>
                                {/* Delete icon for individual notification */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteNotification(n.id);
                                    }}
                                    className="text-red-500 hover:text-red-700 text-xs"
                                >
                                    Delete
                                </button>

                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NotificationBar;
