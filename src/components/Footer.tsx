
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-premium-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div
            className="text-2xl font-bold tracking-wider cursor-pointer mb-6 md:mb-0"
            onClick={scrollToTop}
          >
            <span className="text-white">SAROJ</span>
            <span className="text-premium-red">MAHATO</span>
            <span className="text-premium-gold">.</span>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-premium-red transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-premium-red transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-premium-red transition-colors">
              <Facebook size={24} />
            </a>
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            &copy; {currentYear} Saroj Mahato. All rights reserved.<br/>
            <span className="text-xs opacity-50">Designed for Global Leadership</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
