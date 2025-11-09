import  Navbar  from './components/Navbar';
import  HeroSection  from './components/HeroSection';
import  FeaturesSection  from './components/FeaturesSection';
import  HowItWorksSection  from './components/HowItWorksSection';
import  AboutSection  from './components/AboutSection';
import  ImpactSection  from './components/ImpactSection';
import  ContactFooter  from './components/ContactFooter';
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import PatientDashboard from "./components/PatientDashboard";
import HospitalDashboard from './components/HospitalDashboard';

const Router= createBrowserRouter([
  {
    path:"/",
    element:<>
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <AboutSection />
    <ImpactSection />
    <ContactFooter />
    </>
  },
  
{
    path: "/login",
    element: 
      <>
      
        <LoginPage />
      </>
    ,
  },

{
    path: "/signup",
    element: 
      <>
    
        <SignupPage />
      </>
    ,
  },
  {
    path:"/patient-dashboard",
    element:<PatientDashboard />
    
  },
  {
    path:"/hospital-dashboard",
    element:<HospitalDashboard />
  }

])

function App() {
  return (
    <>
    <RouterProvider router={Router}></RouterProvider>
    </>
  );
}
export default App;



// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeaturesSection';
// import HowItWorksSection from './components/HowItWorksSection';
// import AboutSection from './components/AboutSection';
// import ImpactSection from './components/ImpactSection';
// import ContactFooter from './components/ContactFooter';
// import LoginPage from "./components/LoginPage";
// import SignupPage from "./components/SignupPage";
// import PatientDashboard from "./components/PatientDashboard";
// import HospitalDashboard from './components/HospitalDashboard';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Navbar />
//         <HeroSection />
//         <FeaturesSection />
//         <HowItWorksSection />
//         <AboutSection />
//         <ImpactSection />
//         <ContactFooter />
//       </>
//     ),
//   },
//   { path: "/login", element: <LoginPage /> },
//   { path: "/signup", element: <SignupPage /> },
//   { path: "/patient-dashboard", element: <PatientDashboard /> },
//   { path: "/hospital-dashboard", element: <HospitalDashboard /> },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }
