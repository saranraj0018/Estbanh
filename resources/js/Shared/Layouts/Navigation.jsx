import React, { useEffect, useState } from "react";
import axios from "axios";

const Navigation = ({ onOpenSideBar, onNotificationClick, onSettingClick }) => {
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        fetchUnreadCount();
        const interval = setInterval(fetchUnreadCount, 30000);
        return () => clearInterval(interval);
    }, []);

    const fetchUnreadCount = async () => {
        try {
            const { data } = await axios.get('/notifications/unread-count');
            setUnreadCount(data.count);
        } catch (error) {
            console.error('Error fetching unread count:', error);
        }
    };

    window.updateUnreadCount = fetchUnreadCount;

    return (
        <div className="border-2 shadow-sm border-gray-200 h-[60px] flex justify-between items-center px-4">
            <button onClick={onOpenSideBar}>
                {/* Sidebar Icon */}
                <svg width="25" height="25" fill="none" viewBox="0 0 24 24">
                    <path d="M22 3H2M22 21H2M9 8H8C6.114 8 5.172 8 4.586 8.586C4 9.172 4 10.114 4 12C4 13.886 4 14.828 4.586 15.414C5.172 16 6.114 16 8 16H16C17.886 16 18.828 16 19.414 15.414C20 14.828 20 13.886 20 12C20 10.114 20 9.172 19.414 8.586C18.828 8 17.886 8 16 8H13" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </button>

            <div className="flex gap-3">
                <button className="relative" onClick={onNotificationClick}>
                    {/* Notification Icon */}
                    <svg width="25" height="25" fill="none" viewBox="0 0 24 24">
                        <circle cx="19" cy="5" r="3" stroke="#1C274C" strokeWidth="1.5" />
                        <path d="M7 14H16M7 17.5H13M2 12C2 16.714 2 19.071 3.464 20.535C4.929 22 7.286 22 12 22C16.714 22 19.071 22 20.535 20.535C22 19.071 22 16.714 22 12V10.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464C2.491 4.438 2.164 5.807 2.055 8"
                            stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full">
                            {unreadCount}
                        </span>
                    )}
                </button>

                <button onClick={onSettingClick}>
                    {/* Settings Icon */}
                    <svg width="25" height="25" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="6" r="4" stroke="#1C274C" strokeWidth="1.5" />
                        <path d="M15 20.615C14.091 20.862 13.074 21 12 21C8.134 21 5 19.209 5 17C5 14.791 8.134 13 12 13C15.866 13 19 14.791 19 17C19 17.345 18.923 17.68 18.78 18"
                            stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Navigation;
