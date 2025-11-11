// DFooter.jsx
import { Heart, Link2 } from "lucide-react";
import { motion } from "framer-motion";

export const DFooter = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #00BFA6 0%, #2196F3 100%)",
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
  );
};