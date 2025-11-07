// // import { motion } from 'framer-motion'; // or: import { motion } from 'framer-motion';
// // import { CheckCircle, Clock, User } from 'lucide-react';
// // import { Card } from '../ui/card';
// // import { Progress } from '../ui/progress';
// // import { Badge } from '../ui/badge';

// // const queueSteps = [
// //   { name: 'Token Generated', status: 'completed', icon: CheckCircle },
// //   { name: 'Waiting', status: 'active', icon: Clock },
// //   { name: 'Doctor Called', status: 'pending', icon: User },
// //   { name: 'Consultation Done', status: 'pending', icon: CheckCircle },
// // ];

// // export function QueueTracker() {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ delay: 0.7 }}
// //     >
// //       <Card className="p-6 shadow-md hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
// //         <div className="flex items-center justify-between mb-6">
// //           <div>
// //             <h3 className="text-gray-900 mb-1">Your Appointment Status</h3>
// //             <p className="text-sm text-gray-600">Real-time queue tracking</p>
// //           </div>
// //           <Badge className="bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white border-0">
// //             Live
// //           </Badge>
// //         </div>

// //         {/* Queue Position Card */}
// //         <motion.div
// //           className="p-6 rounded-xl bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white mb-6 relative overflow-hidden"
// //           animate={{
// //             boxShadow: [
// //               '0 4px 14px rgba(0, 191, 166, 0.3)',
// //               '0 4px 20px rgba(0, 191, 166, 0.5)',
// //               '0 4px 14px rgba(0, 191, 166, 0.3)',
// //             ],
// //           }}
// //           transition={{ duration: 2, repeat: Infinity }}
// //         >
// //           <div className="relative z-10 text-center">
// //             <motion.div
// //               className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-3"
// //               animate={{ scale: [1, 1.05, 1] }}
// //               transition={{ duration: 2, repeat: Infinity }}
// //             >
// //               <span className="text-3xl">3</span>
// //             </motion.div>
// //             <p className="text-lg mb-1">You're #3 in the queue</p>
// //             <p className="text-white/90 text-sm">Estimated wait time: ~15 minutes</p>
// //           </div>

// //           {/* Animated background circles */}
// //           <motion.div
// //             className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10"
// //             animate={{
// //               scale: [1, 1.2, 1],
// //               opacity: [0.3, 0.1, 0.3],
// //             }}
// //             transition={{ duration: 3, repeat: Infinity }}
// //           />
// //         </motion.div>

// //         {/* Progress Steps */}
// //         <div className="space-y-4 mb-6">
// //           {queueSteps.map((step, index) => {
// //             const Icon = step.icon;
// //             const isCompleted = step.status === 'completed';
// //             const isActive = step.status === 'active';

// //             return (
// //               <motion.div
// //                 key={step.name}
// //                 className="flex items-center gap-4"
// //                 initial={{ opacity: 0, x: -20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: 0.8 + index * 0.1 }}
// //               >
// //                 <motion.div
// //                   className={`flex items-center justify-center w-10 h-10 rounded-full ${
// //                     isCompleted
// //                       ? 'bg-green-100'
// //                       : isActive
// //                       ? 'bg-gradient-to-r from-[#00BFA6] to-[#2196F3]'
// //                       : 'bg-gray-100'
// //                   }`}
// //                   animate={isActive ? { scale: [1, 1.1, 1] } : {}}
// //                   transition={{ duration: 2, repeat: Infinity }}
// //                 >
// //                   <Icon
// //                     className={`w-5 h-5 ${
// //                       isCompleted
// //                         ? 'text-green-600'
// //                         : isActive
// //                         ? 'text-white'
// //                         : 'text-gray-400'
// //                     }`}
// //                   />
// //                 </motion.div>

// //                 <div className="flex-1">
// //                   <p
// //                     className={`${
// //                       isCompleted || isActive ? 'text-gray-900' : 'text-gray-500'
// //                     }`}
// //                   >
// //                     {step.name}
// //                   </p>
// //                   {isActive && (
// //                     <motion.p
// //                       className="text-sm text-[#00BFA6]"
// //                       animate={{ opacity: [0.5, 1, 0.5] }}
// //                       transition={{ duration: 2, repeat: Infinity }}
// //                     >
// //                       In Progress...
// //                     </motion.p>
// //                   )}
// //                 </div>

// //                 {isCompleted && <CheckCircle className="w-5 h-5 text-green-600" />}
// //               </motion.div>
// //             );
// //           })}
// //         </div>

// //         {/* Progress Bar */}
// //         <div className="space-y-2">
// //           <div className="flex items-center justify-between text-sm">
// //             <span className="text-gray-600">Overall Progress</span>
// //             <span className="text-gray-900">25%</span>
// //           </div>
// //           <Progress value={25} className="h-2" />
// //         </div>
// //       </Card>
// //     </motion.div>
// //   );
// // }

// // components/QueueTracker.tsx
// "use client";

// import { motion } from "framer-motion";
// import { CheckCircle, Clock, User } from "lucide-react";
// import { Card } from "../ui/card";
// import { Progress } from "../ui/progress";
// import { Badge } from "../ui/badge";

// const queueSteps = [
//   { name: "Token Generated", status: "completed", icon: CheckCircle },
//   { name: "Waiting", status: "active", icon: Clock },
//   { name: "Doctor Called", status: "pending", icon: User },
//   { name: "Consultation Done", status: "pending", icon: CheckCircle },
// ];

// export function QueueTracker() {
//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
//       <Card className="p-6 shadow-md hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
//         {/* ...other sections... */}

//         {/* Progress Bar */}
//         <div className="space-y-2">
//           <div className="flex items-center justify-between text-sm">
//             <span className="text-gray-600">Overall Progress</span>
//             <span className="text-gray-900">25%</span>
//           </div>
//           <Progress value={25} className="h-3" />
//         </div>
//       </Card>
//     </motion.div>
//   );
// }





"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, User } from "lucide-react";
import { Card } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";

const queueSteps = [
  { name: "Token Generated", status: "completed", icon: CheckCircle },
  { name: "Waiting", status: "active", icon: Clock },
  { name: "Doctor Called", status: "pending", icon: User },
  { name: "Consultation Done", status: "pending", icon: CheckCircle },
];

export function QueueTracker() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
      <Card className="p-6 shadow-md hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-gray-900 mb-1">Your Appointment Status</h3>
            <p className="text-sm text-gray-600">Real-time queue tracking</p>
          </div>
          <Badge className="bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white border-0">Live</Badge>
        </div>

        {/* Queue Position Card */}
        <motion.div
          className="p-6 rounded-xl bg-gradient-to-r from-[#00BFA6] to-[#2196F3] text-white mb-6 relative overflow-hidden"
          animate={{
            boxShadow: [
              "0 4px 14px rgba(0, 191, 166, 0.3)",
              "0 4px 20px rgba(0, 191, 166, 0.5)",
              "0 4px 14px rgba(0, 191, 166, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="relative z-10 text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-3xl">3</span>
            </motion.div>
            <p className="text-lg mb-1">You're #3 in the queue</p>
            <p className="text-white/90 text-sm">Estimated wait time: ~15 minutes</p>
          </div>

          {/* Animated background circle */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Progress Steps */}
        <div className="space-y-4 mb-6">
          {queueSteps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = step.status === "completed";
            const isActive = step.status === "active";

            return (
              <motion.div
                key={step.name}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    isCompleted
                      ? "bg-green-100"
                      : isActive
                      ? "bg-gradient-to-r from-[#00BFA6] to-[#2196F3]"
                      : "bg-gray-100"
                  }`}
                  animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isCompleted ? "text-green-600" : isActive ? "text-white" : "text-gray-400"
                    }`}
                  />
                </motion.div>

                <div className="flex-1">
                  <p className={`${isCompleted || isActive ? "text-gray-900" : "text-gray-500"}`}>{step.name}</p>
                  {isActive && (
                    <motion.p
                      className="text-sm text-[#00BFA6]"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      In Progress...
                    </motion.p>
                  )}
                </div>

                {isCompleted && <CheckCircle className="w-5 h-5 text-green-600" />}
              </motion.div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Overall Progress</span>
            <span className="text-gray-900">25%</span>
          </div>
          <Progress value={25} className="h-3" />
        </div>
      </Card>
    </motion.div>
  );
}

export default QueueTracker;