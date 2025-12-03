// Dashboard Layout Component - Main container for the application

import { SidebarProvider, useSidebar, Sidebar } from "./Sidebar.tsx";
import { Header } from "./Header.tsx";
import { useLocation, Outlet } from "react-router-dom";

function DashboardLayoutContent() {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const location = useLocation();
  const path = location.pathname;
  const title = path.split("/")[1] ?? "";

  const toUpperCaseFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? "ml-20" : "ml-70"
        } md:${isCollapsed ? "ml-20" : "ml-70"}`}
      >
        <Header
          title={toUpperCaseFirstLetter(title)}
          onToggleSidebar={toggleSidebar}
        />
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <DashboardLayoutContent />
    </SidebarProvider>
  );
}
