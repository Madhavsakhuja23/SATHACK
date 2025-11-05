import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Navigation, Shield, CreditCard } from 'lucide-react';

function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI Queue Prediction',
      description: 'Predicts waiting time using live hospital data and intelligent algorithms.',
      gradient: 'from-[#00BFA6] to-[#2196F3]',
    },
    {
      icon: Navigation,
      title: 'Emergency GPS Alerts',
      description: 'Notifies hospitals before critical patients arrive, saving precious time.',
      gradient: 'from-[#2196F3] to-[#00BFA6]',
    },
    {
      icon: Shield,
      title: 'Medicine Authenticity Check',
      description: 'Verifies medicines with WHO and CDSCO data for your safety.',
      gradient: 'from-[#00BFA6] to-[#2196F3]',
    },
    {
      icon: CreditCard,
      title: 'Digital Payments & Billing',
      description: 'Fast, transparent, and paperless healthcare transactions.',
      gradient: 'from-[#2196F3] to-[#00BFA6]',
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
    <section id="features" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#00BFA6' }}>
            Smarter Healthcare, Powered by AI
          </h2>
          <p className="text-xl text-gray-600">
            MediLink brings together technology and trust to transform the way care is delivered.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                {/* Gradient Border on Hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                  style={{ padding: '2px' }}
                ></div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-20`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
