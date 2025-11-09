import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stethoscope, Pill, Navigation, Activity, Shield } from 'lucide-react';
import { Button } from './ui/button';

function HeroSection() {
  const floatingIcons = [
    { Icon: Pill, delay: 0, position: 'top-20 left-10' },
    { Icon: Stethoscope, delay: 0.5, position: 'top-40 right-20' },
    { Icon: Heart, delay: 1, position: 'bottom-40 left-20' },
    { Icon: Navigation, delay: 1.5, position: 'bottom-20 right-10' },
    { Icon: Activity, delay: 2, position: 'top-1/3 left-1/4' },
    { Icon: Shield, delay: 2.5, position: 'top-2/3 right-1/4' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} opacity-10`}
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{
              duration: 3,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-16 h-16 md:w-24 md:h-24" style={{ color: '#00BFA6' }} />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: '#00BFA6' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: '#2196F3' }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl mb-4" style={{ color: '#00BFA6' }}>
              Connect. Care. Cure.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              An AI-powered healthcare platform that links patients, hospitals, and doctors — making every second count.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="
      rounded-full px-8 py-6 text-lg shadow-2xl
      bg-gradient-to-r from-primary to-secondary
      text-primary-foreground
      transition-transform hover:scale-105
    "
            >
              Book Appointment
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="
      rounded-full px-8 py-6 text-lg border-2
      text-primary border-primary
      transition-all hover:scale-105
      hover:bg-primary hover:text-primary-foreground
    "
            >
              Emergency Help
            </Button>
          </motion.div>


          {/* Feature Highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: Activity, text: 'AI Queue Prediction' },
              { icon: Navigation, text: 'GPS Emergency Alerts' },
              { icon: Shield, text: 'Medicine Verification' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg"
              >
                <item.icon className="w-6 h-6" style={{ color: '#00BFA6' }} />
                <span className="text-gray-800">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
