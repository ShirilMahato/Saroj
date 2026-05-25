import { useState, useEffect } from "react";

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, Award, Globe, Heart, Phone } from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Achievements', href: '#achievements', icon: Award },
  { name: 'Partners', href: '#partners', icon: Globe },
  { name: 'Impact', href: '#impact', icon: Heart },
  { name: 'Contact', href: '#contact', icon: Phone },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div
            className="text-xl font-bold tracking-wider cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-white">SAROJ</span>
            <span className="text-premium-red">MAHATO</span>
            <span className="text-premium-gold">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors hover:text-premium-red relative group',
                  activeSection === link.href.substring(1) ? 'text-premium-red' : 'text-gray-300'
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[2px] bg-premium-red transition-all duration-300 group-hover:w-full",
                  activeSection === link.href.substring(1) ? 'w-full' : 'w-0'
                )} />
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="px-5 py-2 text-sm font-medium border border-white/20 rounded-full hover:border-premium-red hover:bg-premium-red/10 transition-all text-white"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-premium-black/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center space-x-4 text-xl font-medium text-gray-200 hover:text-premium-red transition-colors w-full text-left"
                  >
                    <Icon size={20} className="text-premium-gold" />
                    <span>{link.name}</span>
                  </button>
                )
              })}
            </div>

            <div className="mt-auto mb-10 border-t border-white/10 pt-8">
               <button
                onClick={() => scrollTo('#contact')}
                className="w-full py-4 text-lg font-medium bg-gradient-to-r from-premium-red to-red-700 rounded-lg text-white"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
