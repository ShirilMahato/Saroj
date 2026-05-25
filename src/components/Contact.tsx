
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Send } from 'lucide-react';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-premium-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-premium-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-premium-red">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-premium-red to-premium-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInLeft}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's discuss global opportunities.</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Whether you're looking to establish international partnerships, expand franchise operations, or discuss strategic growth, I'm ready to connect.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <Phone className="text-premium-gold" size={20} />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 uppercase tracking-wider">Phone</span>
                  <a href="tel:+977000000000" className="text-white hover:text-premium-red transition-colors">+977 (0) 000 000 000</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <Mail className="text-premium-gold" size={20} />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 uppercase tracking-wider">Email</span>
                  <a href="mailto:contact@sarojmahato.com" className="text-white hover:text-premium-red transition-colors">contact@sarojmahato.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <Linkedin className="text-premium-gold" size={20} />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 uppercase tracking-wider">LinkedIn</span>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-premium-red transition-colors">Connect on LinkedIn</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <MapPin className="text-premium-gold" size={20} />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 uppercase tracking-wider">Location</span>
                  <span className="text-white">Kathmandu, Nepal / Global</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInRight}
          >
            <form className="glass p-8 md:p-10 rounded-2xl border border-white/5 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-premium-charcoal/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-premium-red focus:ring-1 focus:ring-premium-red transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-premium-charcoal/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-premium-red focus:ring-1 focus:ring-premium-red transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-premium-charcoal/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-premium-red focus:ring-1 focus:ring-premium-red transition-colors resize-none"
                  placeholder="How can we collaborate?"
                />
              </div>

              <button
                type="button"
                className="w-full py-4 bg-gradient-to-r from-premium-red to-red-700 hover:from-red-600 hover:to-red-800 rounded-lg text-white font-medium flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(214,32,39,0.5)] transform hover:-translate-y-0.5"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
