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
              className="rounded-full px-8 py-6 text-lg shadow-2xl transition-transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #00BFA6 0%, #2196F3 100%)',
                color: 'white',
              }}
            >
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-2 transition-all hover:scale-105"
              style={{
                borderColor: '#00BFA6',
                color: '#00BFA6',
              }}
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

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
