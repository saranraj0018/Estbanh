import { createContext, useContext, useState } from "react";

const AdminLayoutContext = createContext();

export function AdminLayoutProvider({children}) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [settingBar, setSettingBar] = useState(false);
  const [notificationBar, setNotificationBar] = useState(false);

  return (
    <AdminLayoutContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
        settingBar,
        setSettingBar,
        notificationBar,
        setNotificationBar,
      }}
    >
      {children}
    </AdminLayoutContext.Provider>

  );
}

export const useAdminLayoutContext = () => useContext(AdminLayoutContext);