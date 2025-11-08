// // import { motion } from 'framer-motion'; // or 'motion/react' if you're using Motion One
// // import { 
// //   LayoutDashboard, 
// //   Calendar, 
// //   AlertCircle, 
// //   Pill, 
// //   CreditCard, 
// //   LogOut,
// //   Bell,
// //   Settings,
// //   User,
// //   Heart
// // } from 'lucide-react';
// // import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuLabel,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// // } from '../ui/dropdown-menu';
// // import { Badge } from '../ui/badge';

// // const navLinks = [
// //   { name: 'Dashboard', icon: LayoutDashboard, page: 'dashboard' },
// //   { name: 'Book Appointment', icon: Calendar, page: 'book-appointment' },
// //   { name: 'Emergency', icon: AlertCircle, page: 'emergency' },
// //   { name: 'Verify Medicine', icon: Pill, page: 'verify-medicine' },
// //   { name: 'Payments', icon: CreditCard, page: 'payments' },
// // ];

// // export function DashboardNavbar({ notificationCount = 0, currentPage, onPageChange, onNotificationClick }) {
// //   return (
// //     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-16">
// //           {/* Logo */}
// //           <motion.div 
// //             className="flex items-center gap-2 cursor-pointer"
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             onClick={() => onPageChange('dashboard')}
// //           >
// //             <div className="relative">
// //               <motion.div
// //                 animate={{ scale: [1, 1.2, 1] }}
// //                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
// //               >
// //                 <Heart className="w-6 h-6 text-[#00BFA6] fill-[#00BFA6]" />
// //               </motion.div>
// //             </div>
// //             <span className="bg-gradient-to-r from-[#00BFA6] to-[#2196F3] bg-clip-text text-transparent">
// //               MediLink
// //             </span>
// //           </motion.div>

// //           {/* Navigation Links - Hidden on mobile */}
// //           <div className="hidden lg:flex items-center gap-1">
// //             {navLinks.map((link, index) => {
// //               const Icon = link.icon;
// //               const isActive = currentPage === link.page;

// //               return (
// //                 <motion.button
// //                   key={link.name}
// //                   onClick={() => onPageChange(link.page)}
// //                   className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
// //                     isActive ? 'text-[#00BFA6]' : 'text-gray-600 hover:text-[#00BFA6]'
// //                   }`}
// //                   initial={{ opacity: 0, y: -10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.1 }}
// //                 >
// //                   <Icon className="w-4 h-4" />
// //                   <span className="text-sm">{link.name}</span>
// //                   {isActive && (
// //                     <motion.div
// //                       layoutId="activeLink"
// //                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00BFA6] to-[#2196F3]"
// //                       style={{ borderRadius: '2px' }}
// //                     />
// //                   )}
// //                 </motion.button>
// //               );
// //             })}
// //           </div>

// //           {/* Right Side - Notifications & User */}
// //           <div className="flex items-center gap-4">
// //             {/* Notifications */}
// //             <motion.button
// //               className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={onNotificationClick}
// //             >
// //               <Bell className="w-5 h-5 text-gray-600" />
// //               {notificationCount > 0 && (
// //                 <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white text-xs">
// //                   {notificationCount}
// //                 </Badge>
// //               )}
// //             </motion.button>

// //             {/* User Dropdown */}
// //             <DropdownMenu>
// //               <DropdownMenuTrigger asChild>
// //                 <motion.button
// //                   className="flex items-center gap-2 hover:opacity-80 transition-opacity"
// //                   whileHover={{ scale: 1.02 }}
// //                 >
// //                   <Avatar className="h-9 w-9 ring-2 ring-[#00BFA6]/20">
// //                     <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=patient" alt="User Avatar" />
// //                     <AvatarFallback>JD</AvatarFallback>
// //                   </Avatar>
// //                   <div className="hidden md:block text-left">
// //                     <p className="text-sm text-gray-900">John Doe</p>
// //                     <p className="text-xs text-gray-500">Patient ID: P12345</p>
// //                   </div>
// //                 </motion.button>
// //               </DropdownMenuTrigger>
// //               <DropdownMenuContent align="end" className="w-56">
// //                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
// //                 <DropdownMenuSeparator />
// //                 <DropdownMenuItem>
// //                   <User className="mr-2 h-4 w-4" />
// //                   <span>Profile</span>
// //                 </DropdownMenuItem>
// //                 <DropdownMenuItem>
// //                   <Settings className="mr-2 h-4 w-4" />
// //                   <span>Settings</span>
// //                 </DropdownMenuItem>
// //                 <DropdownMenuSeparator />
// //                 <DropdownMenuItem className="text-red-600">
// //                   <LogOut className="mr-2 h-4 w-4" />
// //                   <span>Logout</span>
// //                 </DropdownMenuItem>
// //               </DropdownMenuContent>
// //             </DropdownMenu>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }



// // DashboardNavbar.jsx
// 'use client'; // (Needed for Next.js app router when using framer-motion or shadcn/ui)

// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   LayoutDashboard,
//   Calendar,
//   AlertCircle,
//   Pill,
//   CreditCard,
//   LogOut,
//   Settings,
//   User,
//   Heart,
// } from 'lucide-react';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'; // NOTE: If your file is lowercase, use '../ui/avatar'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '../ui/dropdown-menu';

// const navLinks = [
//   { name: 'Dashboard', icon: LayoutDashboard, page: 'dashboard' },
//   { name: 'Book Appointment', icon: Calendar, page: 'book-appointment' },
//   { name: 'Emergency', icon: AlertCircle, page: 'emergency' },
//   { name: 'Verify Medicine', icon: Pill, page: 'verify-medicine' },
//   { name: 'Payments', icon: CreditCard, page: 'payments' },
// ];

// export default function DashboardNavbar({
//   currentPage = 'dashboard',
//   onPageChange = () => {},
// }) {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <motion.div
//             className="flex items-center gap-2 cursor-pointer"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             onClick={() => onPageChange('dashboard')}
//           >
//             <div className="relative">
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//               >
//                 <Heart className="w-6 h-6 text-[#00BFA6] fill-[#00BFA6]" />
//               </motion.div>
//             </div>
//             <span className="bg-gradient-to-r from-[#00BFA6] to-[#2196F3] bg-clip-text text-transparent font-semibold">
//               MediLink
//             </span>
//           </motion.div>

//           {/* Navigation Links - Hidden on mobile */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link, index) => {
//               const Icon = link.icon;
//               const isActive = currentPage === link.page;

//               return (
//                 <motion.button
//                   key={link.name}
//                   onClick={() => onPageChange(link.page)}
//                   className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
//                     isActive ? 'text-[#00BFA6]' : 'text-gray-600 hover:text-[#00BFA6]'
//                   }`}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Icon className="w-4 h-4" />
//                   <span className="text-sm">{link.name}</span>
//                   {isActive && (
//                     <motion.div
//                       layoutId="activeLink"
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00BFA6] to-[#2196F3]"
//                       style={{ borderRadius: '2px' }}
//                     />
//                   )}
//                 </motion.button>
//               );
//             })}
//           </div>

//           {/* Right Side - User Dropdown (Notifications removed) */}
//           <div className="flex items-center gap-4">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <motion.button
//                   className="flex items-center gap-2 hover:opacity-80 transition-opacity"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <Avatar className="h-9 w-9 ring-2 ring-[#00BFA6]/20">
//                     <AvatarImage
//                       src="https://api.dicebear.com/7.x/avataaars/svg?seed=patient"
//                       alt="User Avatar"
//                     />
//                     <AvatarFallback>JD</AvatarFallback>
//                   </Avatar>
//                   <div className="hidden md:block text-left">
//                     <p className="text-sm text-gray-900">John Doe</p>
//                     <p className="text-xs text-gray-500">Patient ID: P12345</p>
//                   </div>
//                 </motion.button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-56">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <User className="mr-2 h-4 w-4" />
//                   <span>Profile</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Settings className="mr-2 h-4 w-4" />
//                   <span>Settings</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem className="text-red-600">
//                   <LogOut className="mr-2 h-4 w-4" />
//                   <span>Logout</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// DashboardNavbar.jsx

import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Calendar,
  AlertCircle,
  Pill,
  CreditCard,
  LogOut,
  Settings,
  User,
  Heart,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'; // use '../ui/avatar' if your file is lowercase
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const navLinks = [
  { name: 'Dashboard', icon: LayoutDashboard, page: 'dashboard' },
  { name: 'Book Appointment', icon: Calendar, page: 'book-appointment' },
  { name: 'Emergency', icon: AlertCircle, page: 'emergency' },
  { name: 'Verify Medicine', icon: Pill, page: 'verify-medicine' },
  { name: 'Payments', icon: CreditCard, page: 'payments' },
];

function DashboardNavbar({ currentPage = 'dashboard', onPageChange = () => {} }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => onPageChange('dashboard')}
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart className="w-6 h-6 text-[#00BFA6] fill-[#00BFA6]" />
              </motion.div>
            </div>
            <span className="bg-gradient-to-r from-[#00BFA6] to-[#2196F3] bg-clip-text text-transparent font-semibold">
              MediLink
            </span>
          </motion.div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = currentPage === link.page;

              return (
                <motion.button
                  key={link.name}
                  onClick={() => onPageChange(link.page)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'text-[#00BFA6]' : 'text-gray-600 hover:text-[#00BFA6]'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00BFA6] to-[#2196F3]"
                      style={{ borderRadius: '2px' }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right Side - User Dropdown (Notifications removed) */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                >
                  <Avatar className="h-9 w-9 ring-2 ring-[#00BFA6]/20">
                    <AvatarImage
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=patient"
                      alt="User Avatar"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <p className="text-sm text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">Patient ID: P12345</p>
                  </div>
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;