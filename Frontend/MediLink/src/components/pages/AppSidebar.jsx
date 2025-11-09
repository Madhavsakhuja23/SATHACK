import {
  LayoutDashboard,
  UserPlus,
  Users,
  Clock,
  AlertTriangle,
  FileText,
  BarChart3,
  User,
  LogOut,
  HeartPulse,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";

// ✅ Use internal keys instead of URLs
const menuItems = [
  { title: "Dashboard", key: "dashboard", icon: LayoutDashboard },
  { title: "Add Doctors", key: "add-doctors", icon: UserPlus },
  { title: "Doctor List", key: "doctors", icon: Users },
  { title: "Queue Management", key: "queue", icon: Clock },
  { title: "Emergency Alerts", key: "emergency", icon: AlertTriangle },
  { title: "Patient Records", key: "patients", icon: FileText },
  { title: "Analytics", key: "analytics", icon: BarChart3 },
  { title: "Profile", key: "profile", icon: User },
];

export function AppSidebar({ onPageChange }) {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="py-4">

        {/* Logo */}
        <div className="px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-glow">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>

            {open && (
              <div className="animate-slide-in">
                <h1 className="text-lg font-bold text-sidebar-foreground">MediLink</h1>
                <p className="text-xs text-muted-foreground">
                  Connect. Care. Cure.
                </p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>

              {/* ✅ Sidebar navigation (state-based) */}
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <div
                      onClick={() => onPageChange(item.key)}
                      className="group w-full flex items-center gap-3 cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition-all duration-300 px-2 py-2"
                    >
                      <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      {open && <span>{item.title}</span>}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* ✅ Logout button (no nested <button>) */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Logout">
                  <div
                    onClick={() => console.log("Logging out...")}
                    className="group cursor-pointer w-full flex items-center gap-3 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-all duration-300 px-2 py-2"
                  >
                    <LogOut className="h-5 w-5 transition-transform group-hover:scale-110" />
                    {open && <span>Logout</span>}
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}
