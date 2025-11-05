import React, { useState, useEffect } from 'react';
import { Heart, Link2, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Verify Medicine', href: '#verify' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Heart className="w-7 h-7" style={{ color: '#00BFA6' }} fill="#00BFA6" />
              <Link2 className="w-4 h-4 absolute -bottom-1 -right-1" style={{ color: '#2196F3' }} />
            </div>
            <span className="text-xl" style={{ color: '#00BFA6' }}>MediLink</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group transition-colors hover:opacity-80"
              >
                {link.name}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#00BFA6' }}
                ></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            
<NavLink
    to="/login"
    className={({ isActive }) =>
      `hover:opacity-80 ${isActive ? "text-[#00BFA6] font-bold" : ""}`
    }
  >

            <Button variant="ghost" className="hover:opacity-80">
              Login
            </Button>
            </NavLink>
            
<NavLink
    to="/signup"
    className={({ isActive }) =>
      `hover:opacity-80 ${isActive ? "text-[#00BFA6] font-bold" : ""}`
    }
  >

            <Button
              className="rounded-full shadow-lg transition-transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #00BFA6 0%, #2196F3 100%)',
                color: 'white',
              }}
            >
              Sign Up
            </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 transition-colors hover:opacity-80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <Button variant="ghost" className="w-full">
                Login
              </Button>
              <Button
                className="w-full rounded-full shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #00BFA6 0%, #2196F3 100%)',
                  color: 'white',
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
