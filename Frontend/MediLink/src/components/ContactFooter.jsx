import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Link2, Mail, Phone, MapPin, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

function ContactFooter() {
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
    <section id="contact" ref={sectionRef} className="bg-white">
      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#00BFA6' }}>
              Ready to Make Healthcare Smarter?
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch with us to learn more about MediLink or join our network.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="rounded-xl border-gray-200 focus:border-[#00BFA6] focus:ring-[#00BFA6]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl border-gray-200 focus:border-[#00BFA6] focus:ring-[#00BFA6]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="rounded-xl border-gray-200 focus:border-[#00BFA6] focus:ring-[#00BFA6]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full py-6 shadow-lg transition-transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #00BFA6 0%, #2196F3 100%)',
                    color: 'white',
                  }}
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info & CTA */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Join as Hospital CTA */}
              <div className="bg-gradient-to-br from-[#00BFA6] to-[#2196F3] rounded-3xl p-8 text-white shadow-xl">
                <Activity className="w-12 h-12 mb-4" />
                <h3 className="text-2xl mb-3">Join as a Hospital</h3>
                <p className="mb-6 text-white/90">
                  Become part of the MediLink network and transform patient care with AI-powered coordination.
                </p>
                <Button
                  className="bg-white border-none rounded-full px-6 py-3 hover:scale-105 transition-transform"
                >
                  <span className="bg-gradient-to-r from-[#00BFA6] to-[#2196F3] bg-clip-text text-transparent">
                    Partner With Us
                  </span>
                </Button>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00BFA6] to-[#2196F3] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-gray-800">contact@medilink.health</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00BFA6] to-[#2196F3] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-gray-800">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00BFA6] to-[#2196F3] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-800">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #00BFA6 0%, #2196F3 100%)',
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
    </section>
  );
}

export default ContactFooter;
