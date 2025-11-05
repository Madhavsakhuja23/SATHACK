import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Ambulance, Shield, CreditCard } from 'lucide-react';

function ImpactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Clock,
      value: 60,
      suffix: '%',
      label: 'Faster Hospital Readiness',
      color: '#00BFA6',
    },
    {
      icon: Ambulance,
      value: 80,
      suffix: '%',
      label: 'Quicker Emergency Response',
      color: '#2196F3',
    },
    {
      icon: Shield,
      value: 90,
      suffix: '%',
      label: 'Medicine Verification Accuracy',
      color: '#00BFA6',
    },
    {
      icon: CreditCard,
      value: 100,
      suffix: '%',
      label: 'Digital Transparency',
      color: '#2196F3',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #00BFA6 0%, #2196F3 100%)',
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Because Every Second Counts
          </h2>
          <p className="text-xl text-white/90">
            Real impact, real results — transforming healthcare delivery with
            data-driven insights.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
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

function StatCard({ icon: Icon, value, suffix, label, color, index, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 text-center">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-8 h-8" style={{ color }} />
        </div>

        {/* Counter */}
        <div className="mb-2">
          <span className="text-5xl" style={{ color }}>
            {count}
          </span>
          <span className="text-4xl" style={{ color }}>
            {suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-gray-700">{label}</p>

        {/* Glow Effect */}
        <div
          className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </motion.div>
  );
}

export default ImpactSection;
