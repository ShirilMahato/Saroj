
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const testimonials = [
  {
    name: "Amardeep Mandal",
    role: "Industry Leader",
    quote: "Saroj's ability to navigate complex international markets and drive growth is unparalleled. A visionary leader who consistently delivers results."
  },
  {
    name: "Kedar Koirala",
    role: "Strategic Partner",
    quote: "Working with Saroj has been transformative for our regional operations. His strategic acumen and dedication to excellence are truly inspiring."
  },
  {
    name: "Nawaraj Silwal",
    role: "Educational Consultant",
    quote: "An exceptional professional who brings both deep industry knowledge and an impressive network to every initiative he leads."
  },
  {
    name: "Anup Pahari",
    role: "Business Executive",
    quote: "His dynamic approach to sales and business development sets a high standard in the international education sector."
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-premium-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-premium-red">References</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-premium-red to-premium-gold mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass p-8 rounded-2xl relative border border-white/5 hover:border-premium-gold/30 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 text-premium-gold/20" size={48} />
              <div className="relative z-10">
                <p className="text-gray-300 italic mb-6 leading-relaxed text-lg">"{item.quote}"</p>
                <div>
                  <h4 className="text-white font-bold text-lg">{item.name}</h4>
                  <span className="text-premium-gold text-sm">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
