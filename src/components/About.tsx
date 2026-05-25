
import { motion } from 'framer-motion';
import { Target, TrendingUp, Globe, Users } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft } from '../utils/animations';

const highlights = [
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Leadership across Nepal, India, Bangladesh, Sri Lanka, Bhutan, and LATAM regions."
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    desc: "Expertise in scaling operations, establishing franchise networks, and driving revenue."
  },
  {
    icon: Users,
    title: "Partnerships",
    desc: "Managing extensive B2B agent networks and fostering international institutional ties."
  },
  {
    icon: Target,
    title: "Operations",
    desc: "Streamlining sales, marketing, and visa operations for maximum efficiency."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-premium-charcoal">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-premium-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Executive <span className="text-premium-red">Summary</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-premium-red to-premium-gold" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
              A dynamic and results-driven <strong className="text-white font-medium">Global Business Leader</strong> with over a decade of distinguished experience in the international education sector.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Specializing in strategic growth, cross-border operations, and high-level partnerships. Proven track record of expanding market presence and establishing robust franchise networks across South Asia and emerging global markets.
            </p>
            <div className="p-6 glass-card rounded-2xl border-l-4 border-l-premium-red">
              <p className="text-gray-300 italic">
                "Committed to bridging global educational opportunities through strategic leadership, operational excellence, and meaningful international partnerships."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass p-6 rounded-2xl border border-white/5 hover:border-premium-red/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-premium-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-premium-gold" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
