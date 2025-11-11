// import { Toaster } from "../ui/toaster";
// import { Toaster as Sonner } from "sonner";
// import { TooltipProvider } from "../ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { DDashboardLayout } from "./pages/DDashboardLayout";
// import DDashboard from "./pages/DDashboard";
// import MyPatients from "./pages/MyPatients";
// import DQueue from "./pages/DQueue";
// import Prescriptions from "./pages/Prescriptions";
// import Reports from "./pages/Reports";
// import DProfile from "./pages/DProfile";
// // import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const DoctorDashboardMain = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
//           <Route path="/patients" element={<DashboardLayout><MyPatients /></DashboardLayout>} />
//           <Route path="/queue" element={<DashboardLayout><Queue /></DashboardLayout>} />
//           <Route path="/prescriptions" element={<DashboardLayout><Prescriptions /></DashboardLayout>} />
//           <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
//           <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           {/* <Route path="*" element={<NotFound />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default DoctorDashboardMain;




// import { Toaster as UiToaster } from "./ui/toaster";
// import { Toaster as SonnerToaster } from "sonner";
// import { TooltipProvider } from "./ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { DDashboardLayout } from "./pages/DDashboardLayout";
// import DDashboard from "./pages/DDashboard";
// import MyPatients from "./pages/MyPatients";
// import DQueue from "./pages/DQueue";
// import Prescriptions from "./pages/Prescriptions";
// import Reports from "./pages/Reports";
// import DProfile from "./pages/DProfile";
// // import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const DoctorDashboardMain = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       {/* App-wide toasters */}
//       <UiToaster />
//       <SonnerToaster />
//       {/* Local router for dashboard sections */}
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <DDashboardLayout>
//                 <DDashboard />
//               </DDashboardLayout>
//             }
//           />

//           <Route
//             path="/patients"
//             element={
//               <DDashboardLayout>
//                 <MyPatients />
//               </DDashboardLayout>
//             }
//           />

//           <Route
//             path="/queue"
//             element={
//               <DDashboardLayout>
//                 <DQueue />
//               </DDashboardLayout>
//             }
//           />

//           <Route
//             path="/prescriptions"
//             element={
//               <DDashboardLayout>
//                 <Prescriptions />
//               </DDashboardLayout>
//             }
//           />

//           <Route
//             path="/reports"
//             element={
//               <DDashboardLayout>
//                 <Reports />
//               </DDashboardLayout>
//             }
//           />

//           <Route
//             path="/profile"
//             element={
//               <DDashboardLayout>
//                 <DProfile />
//               </DDashboardLayout>
//             }
//           />

//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           {/* <Route path="*" element={<NotFound />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default DoctorDashboardMain;






















// src/components/DoctorDashboardMain.jsx
import { DDashboardLayout } from "./pages/DDashboardLayout";
import { Outlet } from "react-router-dom";

// IMPORTANT: No BrowserRouter, No Routes here.
export default function DoctorDashboardMain() {
  return (
    <DDashboardLayout>
      <Outlet />
    </DDashboardLayout>
  );
}