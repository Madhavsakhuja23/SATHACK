import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Zap, CheckCircle } from 'lucide-react';

function HowItWorksSection() {
  const steps = [
    {
      icon: MousePointerClick,
      number: '01',
      title: 'Book or Press Emergency',
      description: 'Choose your service in one click — appointment or emergency alert.',
    },
    {
      icon: Zap,
      number: '02',
      title: 'AI + GPS in Action',
      description: 'Hospitals get ready instantly with AI predictions and real-time location.',
    },
    {
      icon: CheckCircle,
      number: '03',
      title: 'Get Treated & Verified',
      description: 'Receive care with real-time updates and secure digital health records.',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          style={{ background: '#00BFA6' }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
          style={{ background: '#2196F3' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#00BFA6' }}>
            How MediLink Works
          </h2>
          <p className="text-xl text-gray-600">
            From booking to treatment — every step, simplified and smart.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Connection Line - Desktop */}
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#00BFA6] via-[#2196F3] to-[#00BFA6] opacity-30"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div
                    className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #00BFA6 0%, #2196F3 100%)' }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00BFA6] to-[#2196F3] flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3 text-center text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>

                {/* Pulse Animation */}
                <motion.div
                  className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                  style={{ background: '#00BFA6' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
