import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { TopNavbar } from "./TopNavbar";

export default function DashboardLayout({ children, currentPage, onPageChange }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">

        {/* ✅ Pass onPageChange to sidebar */}
        <AppSidebar onPageChange={onPageChange} currentPage={currentPage} />

        <div className="flex-1 flex flex-col w-full">
          <TopNavbar />

          {/* ✅ Render whichever page is active */}
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
