
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const partners = [
  "UNSW", "Deakin University", "Macquarie University", "Griffith University",
  "University of Adelaide", "Torrens University", "Curtin University",
  "Western Sydney University", "Victoria University", "Charles Darwin University",
  "Le Cordon Bleu", "Navitas"
];

export const Partners = () => {
  return (
    <section id="partners" className="py-24 relative bg-premium-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Global <span className="text-premium-red">Partnerships</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Collaborating with world-renowned educational institutions to deliver unparalleled global opportunities.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass p-6 rounded-xl flex items-center justify-center text-center h-24 hover:bg-white/10 hover:border-premium-gold/30 transition-all duration-300 group"
            >
              <span className="text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
                {partner}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
