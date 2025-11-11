// import { LayoutDashboard, Users, Clock, FileText, BarChart3, User, LogOut } from "lucide-react";
// import { DNavLink } from "./DNavLink";
// import { Button } from "../ui/button";

// const navItems = [
//   { icon: LayoutDashboard, label: "Dashboard", path: "/" },
//   { icon: Users, label: "My Patients", path: "/patients" },
//   { icon: Clock, label: "Queue", path: "/queue" },
//   { icon: FileText, label: "Prescriptions", path: "/prescriptions" },
//   { icon: BarChart3, label: "Reports", path: "/reports" },
//   { icon: User, label: "Profile", path: "/profile" },
// ];

// export const DSidebar = () => {
//   return (
//     <aside className="w-64 bg-card border-r shadow-card h-screen sticky top-0 flex flex-col">
//       {/* Logo */}
//       <div className="p-6 border-b">
//         <div className="flex items-center gap-2">
//           <div className="relative">
//             <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-6 w-6 text-white"
//               >
//                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//               </svg>
//             </div>
//           </div>
//           <div>
//             <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               MediLink
//             </h1>
//             <p className="text-xs text-muted-foreground">Healthcare Portal</p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-4 space-y-2">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//  className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
//             activeClassName="bg-primary/10 text-primary font-medium border-l-4 border-l-primary shadow-glow"
//           >
//             <item.icon className="h-5 w-5" />
//             <span>{item.label}</span>
//           </NavLink>
//         ))}
//       </nav>

//       {/* Logout */}
//       <div className="p-4 border-t">
//         <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
//           <LogOut className="h-5 w-5 mr-3" />
//           Logout
//         </Button>
//       </div>
//     </aside>
//   );
// };





import { LayoutDashboard, Users, Clock, FileText, BarChart3, User, LogOut } from "lucide-react";
import { DNavLink } from "./DNavLink";
import { Button } from "../ui/button";

// const navItems = [
//   { icon: LayoutDashboard, label: "Dashboard", path: "/" },
//   { icon: Users, label: "My Patients", path: "/patients" },
//   { icon: Clock, label: "Queue", path: "/queue" },
//   { icon: FileText, label: "Prescriptions", path: "/prescriptions" },
//   { icon: BarChart3, label: "Reports", path: "/reports" },
//   { icon: User, label: "Profile", path: "/profile" },
// ];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/hospital-dashboard" },
  { icon: Users, label: "My Patients", path: "/hospital-dashboard/patients" },
  { icon: Clock, label: "Queue", path: "/hospital-dashboard/queue" },
  { icon: FileText, label: "Prescriptions", path: "/hospital-dashboard/prescriptions" },
  { icon: BarChart3, label: "Reports", path: "/hospital-dashboard/reports" },
  { icon: User, label: "Profile", path: "/hospital-dashboard/profile" },
];
export const DSidebar = () => {
  return (
    <aside className="w-64 bg-card border-r shadow-card h-screen sticky top-0 flex flex-col">
      {/* ...logo... */}

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <DNavLink
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
            activeClassName="bg-primary/10 text-primary font-medium border-l-4 border-l-primary shadow-glow"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </DNavLink>
        ))}
      </nav>

      {/* ...logout... */}
    </aside>
  );
};