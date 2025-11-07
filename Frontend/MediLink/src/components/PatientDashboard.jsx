// // src/components/PatientDashboard.jsx
// import { useState } from "react";
// import { motion } from "framer-motion"; // or: import { motion } from "framer-motion";
// import { MessageSquare,Heart,Link2 } from "lucide-react";

// import { DashboardNavbar } from "./pages/DashboardNavbar";
// import { GreetingBanner } from "./pages/GreetingBanner";
// import {AppointmentCard} from "./pages/AppointmentCard";
// import {PaymentsCard } from "./pages/PaymentsCard";
// import {QueueTracker } from "./pages/QueueTracker";
// // OPTIONAL: uncomment these when you have the files
// // import { NotificationPanel } from "./NotificationPanel";
// // import { Dashboard } from "./pages/Dashboard";
// import { BookAppointment } from "./pages/BookAppointment";
// import { Emergency } from "./pages/Emergency";
// import { VerifyMedicine } from "./pages/VerifyMedicine";
// // import { PaymentsCard } from "./PaymentsCard";

// export default function PatientDashboard() {
//   const [currentPage, setCurrentPage] = useState("dashboard");
// //   const [isNotificationOpen, setIsNotificationOpen] = useState(false);

//   // OPTIONAL: when you add inner pages, switch on `currentPage`
//   const renderPage = () => {
//     switch (currentPage) {
//       case "book-appointment":
//         return <BookAppointment />;
//       case "emergency":
//         return <Emergency />;
//       case "verify-medicine":
//         return <VerifyMedicine />;
//       case "payments":
//         return (
//           <div className="max-w-2xl">
//       //       <PaymentsCard />
//       //     </div>
//         );
//       default:
//         // For now just show the banner; add the cases above when your pages exist
//         return <>
//             <DashboardNavbar />
//             <GreetingBanner />
//             <AppointmentCard />
//             <PaymentsCard />
//             <QueueTracker />
//             {/* <BookAppointment />
//             <Emergency />
//             <VerifyMedicine /> */}
//         </>
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC]">
//       {/* Navbar */}
//       <DashboardNavbar
//         // notificationCount={3}
//         currentPage={currentPage}
//         onPageChange={setCurrentPage}
//         // onNotificationClick={() => setIsNotificationOpen(true)}
//       />

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
//         {renderPage()}
//       </main>

//             {/* Footer */}
//       <footer
//         className="relative overflow-hidden"
//         style={{
//           background: 'linear-gradient(135deg, #00BFA6 0%, #2196F3 100%)',
//         }}
//       >
//         {/* Heartbeat Animation */}
//         <div className="absolute inset-0 overflow-hidden opacity-10">
//           <motion.div
//             className="absolute top-1/2 left-0 right-0 h-1 bg-white"
//             animate={{
//               scaleX: [1, 1.2, 1],
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//             }}
//           />
//         </div>

//         <div className="container mx-auto px-6 py-12 relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//             {/* Brand */}
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <Heart className="w-8 h-8 text-white" fill="white" />
//                 <Link2 className="w-5 h-5 text-white" />
//                 <span className="text-2xl text-white">MediLink</span>
//               </div>
//               <p className="text-white/90 mb-4">Connect. Care. Cure.</p>
//               <p className="text-white/80 text-sm">
//                 Powered by AI for better, safer healthcare.
//               </p>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="text-white mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-white/80">
//                 <li>
//                   <a href="#home" className="hover:text-white transition-colors">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#about" className="hover:text-white transition-colors">
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#features"
//                     className="hover:text-white transition-colors"
//                   >
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#contact"
//                     className="hover:text-white transition-colors"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Resources */}
//             <div>
//               <h4 className="text-white mb-4">Resources</h4>
//               <ul className="space-y-2 text-white/80">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Terms of Service
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     WHO Reference
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     CDSCO Reference
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="border-t border-white/20 pt-8 text-center text-white/80">
//             <p>© 2025 MediLink — "Connect. Care. Cure." All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       {/* OPTIONAL Notification Panel
//       <NotificationPanel
//         isOpen={isNotificationOpen}
//         onClose={() => setIsNotificationOpen(false)}
//       /> */}

//       {/* Floating Support Button */}
//       <motion.button
//         className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white shadow-2xl z-30"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         animate={{
//           boxShadow: [
//             "0 10px 30px rgba(0, 191, 166, 0.3)",
//             "0 10px 40px rgba(0, 191, 166, 0.5)",
//             "0 10px 30px rgba(0, 191, 166, 0.3)",
//           ],
//         }}
//         transition={{ duration: 2, repeat: Infinity }}
//         aria-label="Support"
//         title="Support"
//       >
//         <MessageSquare className="w-6 h-6" />
//       </motion.button>
//     </div>
//   );
// }


// src/components/PatientDashboard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Heart, Link2 } from "lucide-react";

import { DashboardNavbar } from "./pages/DashboardNavbar";
import { GreetingBanner } from "./pages/GreetingBanner";
import { AppointmentCard } from "./pages/AppointmentCard";
import { PaymentsCard } from "./pages/PaymentsCard";
import { QueueTracker } from "./pages/QueueTracker";
// import { NotificationPanel } from "./NotificationPanel";
import { BookAppointment } from "./pages/BookAppointment";
import { Emergency } from "./pages/Emergency";
import { VerifyMedicine } from "./pages/VerifyMedicine";

export default function PatientDashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  // const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "book-appointment":
        return <BookAppointment />;
      case "emergency":
        return <Emergency />;
      case "verify-medicine":
        return <VerifyMedicine />;
      case "payments":
        return (
          <div className="max-w-2xl">
            <PaymentsCard />
          </div>
        );
      default:
        // Dashboard landing: banner + row-flex cards + tracker below
        return (
          <>
            <DashboardNavbar />
            {/* Banner on top */}
            <GreetingBanner />

            {/* A bit below the banner (mt-6/mt-8) — side-by-side row */}
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-6 items-stretch">
              <section className="flex-1">
                <AppointmentCard />
              </section>
              <section className="flex-1">
                <PaymentsCard />
              </section>
            </div>

            {/* Queue Tracker below the row */}
            <div className="mt-6">
              <QueueTracker />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navbar */}
      <DashboardNavbar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        // notificationCount={3}
        // onNotificationClick={() => setIsNotificationOpen(true)}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #00BFA6 0%, #2196F3 100%)",
        }}
      >
        {/* Heartbeat Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-1 bg-white"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-8 h-8 text-white" fill="white" />
                <Link2 className="w-5 h-5 text-white" />
                <span className="text-2xl text-white">MediLink</span>
              </div>
              <p className="text-white/90 mb-4">Connect. Care. Cure.</p>
              <p className="text-white/80 text-sm">
                Powered by AI for better, safer healthcare.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    WHO Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CDSCO Reference
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2025 MediLink — "Connect. Care. Cure." All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* OPTIONAL Notification Panel */}
      {/* <NotificationPanel
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      /> */}

      {/* Floating Support Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white shadow-2xl z-30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 10px 30px rgba(0, 191, 166, 0.3)",
            "0 10px 40px rgba(0, 191, 166, 0.5)",
            "0 10px 30px rgba(0, 191, 166, 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Support"
        title="Support"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>
    </div>
  );
}