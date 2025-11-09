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
import { NavLink } from "./NavLink";
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

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Add Doctors", url: "/add-doctors", icon: UserPlus },
  { title: "Doctor List", url: "/doctors", icon: Users },
  { title: "Queue Management", url: "/queue", icon: Clock },
  { title: "Emergency Alerts", url: "/emergency", icon: AlertTriangle },
  { title: "Patient Records", url: "/patients", icon: FileText },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="py-4">
        {/* Logo Section */}
        <div className="px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-glow">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            {open && (
              <div className="animate-slide-in">
                <h1 className="text-lg font-bold text-sidebar-foreground">MediLink</h1>
                <p className="text-xs text-muted-foreground">Connect. Care. Cure.</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="group relative hover:bg-sidebar-accent rounded-lg transition-all duration-300"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm border-l-4 border-primary"
                    >
                      <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Logout Button */}
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Logout">
                  <button className="group w-full flex items-center gap-3 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-all duration-300">
                    <LogOut className="h-5 w-5 transition-transform group-hover:scale-110" />
                    {open && <span>Logout</span>}
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
