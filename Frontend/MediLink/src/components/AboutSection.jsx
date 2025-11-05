import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Heart, Database, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';

function AboutSection() {
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

  const highlights = [
    { icon: Network, text: 'Connected Healthcare Network' },
    { icon: Heart, text: 'Patient-Centered Care' },
    { icon: Database, text: 'Secure Data Management' },
    { icon: Sparkles, text: 'AI-Powered Intelligence' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,0 Q25,50 50,0 T100,0 V100 H0 Z"
            fill="url(#aboutGradient)"
          />
          <defs>
            <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00BFA6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#2196F3', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#00BFA6' }}>
              About MediLink
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              MediLink bridges the gap between hospitals, doctors, and patients using AI, live data, and secure digital healthcare.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that faster coordination, verified care, and data transparency can save lives. Every second counts in healthcare, and our platform ensures that technology works seamlessly to connect all stakeholders in the healthcare ecosystem.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00BFA6] to-[#2196F3] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643264560215-9c2f72485ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzYyMzMyMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare team connection"
                className="w-full h-[500px] object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00BFA6]/20 to-transparent"></div>
            </div>

            {/* Floating Connection Nodes */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00BFA6] to-[#2196F3] flex items-center justify-center shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Network className="w-12 h-12 text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#2196F3] to-[#00BFA6] flex items-center justify-center shadow-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <Heart className="w-12 h-12 text-white" fill="white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
