
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Linkedin, Globe2 } from 'lucide-react';
import { fadeInUp, staggerContainer, fadeIn } from '../utils/animations';

const stats = [
  { value: '10+', label: 'Franchise Networks' },
  { value: '75+', label: 'B2B Partnerships' },
  { value: 'Multi', label: 'Country Operations' },
  { value: '10+', label: 'Years Experience' }
];

export const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-premium-charcoal via-premium-black to-premium-black" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 grayscale"
        />
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-premium-red/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-premium-gold/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="mb-8 relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-premium-red via-premium-gold to-premium-charcoal shadow-[0_0_30px_rgba(214,32,39,0.3)]">
            <img src="/saroj.png" alt="Saroj Mahato" className="w-full h-full object-cover rounded-full border-4 border-premium-black" />
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center space-x-2 glass px-4 py-2 rounded-full border border-white/10">
             <Globe2 size={16} className="text-premium-gold" />
             <span className="text-sm font-medium tracking-widest text-gray-300 uppercase">Business Growth • Sales Leadership • Strategic Expansion</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Saroj <span className="text-premium-red">Mahato</span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="space-y-4 mb-10 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">Sales Head – Nepal</h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl text-center mt-4">
              Driving business growth, partnerships, and operational excellence across Nepal’s education sector.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button
              onClick={() => scrollTo('#experience')}
              className="px-8 py-4 bg-gradient-to-r from-premium-red to-red-700 rounded-full text-white font-medium flex items-center space-x-2 hover:shadow-[0_0_20px_rgba(214,32,39,0.4)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <span>View Experience</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass rounded-full text-white font-medium flex items-center space-x-2 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Linkedin size={18} />
              <span>Connect on LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card p-6 rounded-2xl text-center flex flex-col items-center justify-center border border-white/5 hover:border-premium-gold/30"
            >
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        onClick={() => scrollTo('#about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-white/50 hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};
