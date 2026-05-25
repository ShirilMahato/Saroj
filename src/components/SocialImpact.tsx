
import { motion } from 'framer-motion';
import { Heart, Droplet, Users, BookOpen } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const initiatives = [
  {
    icon: Users,
    title: "Lions International",
    desc: "Active leadership role fostering community service and international cooperation."
  },
  {
    icon: Droplet,
    title: "Blood for Nepal",
    desc: "Driving vital blood donation campaigns and awareness programs across the region."
  },
  {
    icon: Heart,
    title: "Matribhumi Foundation Nepal",
    desc: "Supporting grassroots initiatives aimed at sustainable community development."
  },
  {
    icon: BookOpen,
    title: "Hastalikhit Network Nepal",
    desc: "Promoting literacy, youth leadership, and social activism through educational networks."
  }
];

export const SocialImpact = () => {
  return (
    <section id="impact" className="py-24 relative bg-premium-black overflow-hidden border-t border-white/5">
      {/* Red Accent Glow */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-premium-red/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Social <span className="text-premium-red">Impact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-premium-red to-premium-gold mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Dedicated to giving back to the community and driving meaningful change through sustained leadership and activism.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass p-8 rounded-2xl flex items-start space-x-6 hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-premium-red/30"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-premium-red/10 flex items-center justify-center group-hover:bg-premium-red transition-colors duration-300">
                  <Icon className="text-premium-red group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};
