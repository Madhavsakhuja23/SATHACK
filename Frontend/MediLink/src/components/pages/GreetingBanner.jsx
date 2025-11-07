import { motion } from "framer-motion"; // or 'motion/react' if using Motion One
import { Heart, Activity, Stethoscope, Pill } from "lucide-react";

export function GreetingBanner() {
  const floatingIcons = [
    { Icon: Heart, delay: 0, x: 50, y: 30 },
    { Icon: Activity, delay: 0.5, x: 200, y: 50 },
    { Icon: Stethoscope, delay: 1, x: 350, y: 20 },
    { Icon: Pill, delay: 1.5, x: 500, y: 40 },
  ];

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#00BFA6] to-[#2196F3] p-8 md:p-12 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating Medical Icons */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: `${x}px`, top: `${y}px` }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-12 h-12 text-white" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-white mb-2 text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome back, John Doe 👋
        </motion.h1>
        <motion.p
          className="text-white/90 text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Here's your health journey today.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          className="flex flex-wrap gap-6 mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white/90 text-sm">
              Next Appointment: Today, 3:00 PM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span className="text-white/90 text-sm">Health Score: 85/100</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}