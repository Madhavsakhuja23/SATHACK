import { Toaster } from "./ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "./ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DashboardLayout } from "./pages/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import AddDoctors from "./pages/AddDoctors";
import DoctorList from "./pages/DoctorList";
import QueueManagement from "./pages/QueueManagement";
import EmergencyAlerts from "./pages/EmergencyAlerts";
import PatientRecords from "./pages/PatientRecords";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const HospitalDashboard = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* ❌ Removed BrowserRouter + Routes */}
      {/* ✅ Just render your main dashboard layout directly */}
      <DashboardLayout>
        <Dashboard />
        {/* You can conditionally render other components based on state or sidebar selections */}
      </DashboardLayout>

    </TooltipProvider>
  </QueryClientProvider>
);

export default HospitalDashboard;
