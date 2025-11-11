// ✅ Common Homepage Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import AboutSection from './components/AboutSection';
import ImpactSection from './components/ImpactSection';
import ContactFooter from './components/ContactFooter';

// ✅ Authentication Pages
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

// ✅ Dashboards
import PatientDashboard from "./components/PatientDashboard";
// import HospitalDashboard from './components/HospitalDashboard';  // Your old one

// ✅ Doctor Dashboard (Friend’s code)
import DoctorDashboardMain from './components/DoctorDashboardMain';
import DDashboard from "./components/pages/DDashboard";
import MyPatients from "./components/pages/MyPatients";
import DQueue from "./components/pages/DQueue";
import Prescriptions from "./components/pages/Prescriptions";
import Reports from "./components/pages/Reports";
import DProfile from "./components/pages/DProfile";

// ✅ React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ✅ All Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AboutSection />
        <ImpactSection />
        <ContactFooter />
      </>
    ),
  },

  // ✅ Auth Routes
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },

  // ✅ Patient Dashboard
  { path: "/patient-dashboard", element: <PatientDashboard /> },

  // ✅ New Doctor / Hospital Dashboard with nested routes
  {
    path: "/hospital-dashboard",
    element: <DoctorDashboardMain />,
    children: [
      { index: true, element: <DDashboard /> },               // /hospital-dashboard
      { path: "patients", element: <MyPatients /> },          // /hospital-dashboard/patients
      { path: "queue", element: <DQueue /> },                 // /hospital-dashboard/queue
      { path: "prescriptions", element: <Prescriptions /> },  // /hospital-dashboard/prescriptions
      { path: "reports", element: <Reports /> },              // /hospital-dashboard/reports
      { path: "profile", element: <DProfile /> },             // /hospital-dashboard/profile
    ],
  },

  // ✅ Optional: Keep your old hospital dashboard
  // { path: "/hospital-dashboard-old", element: <HospitalDashboard /> },
]);

// ✅ App Component
export default function App() {
  return <RouterProvider router={router} />;
}
