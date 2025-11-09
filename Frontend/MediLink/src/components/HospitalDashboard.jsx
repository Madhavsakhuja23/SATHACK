import { useState } from "react";
import { Toaster } from "./ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "./ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import DashboardLayout from "./pages/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import AddDoctors from "./pages/AddDoctors";
import DoctorList from "./pages/DoctorList";
import QueueManagement from "./pages/QueueManagement";
import EmergencyAlerts from "./pages/EmergencyAlerts";
import PatientRecords from "./pages/PatientRecords";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

export default function HospitalDashboard() {
  // ✅ Same pattern as PatientDashboard
  const [currentPage, setCurrentPage] = useState("dashboard");

  // ✅ Internal render logic
  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;

      case "add-doctors":
        return <AddDoctors />;

      case "doctors":
        return <DoctorList />;

      case "queue":
        return <QueueManagement />;

      case "emergency":
        return <EmergencyAlerts />;

      case "patients":
        return <PatientRecords />;

      case "analytics":
        return <Analytics />;

      case "profile":
        return <Profile />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* ✅ No Routes, no BrowserRouter */}
        <DashboardLayout currentPage={currentPage} onPageChange={setCurrentPage}>
          {renderPage()}
        </DashboardLayout>


      </TooltipProvider>
    </QueryClientProvider>
  );
}
