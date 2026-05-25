
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Building2, Network } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const achievements = [
  {
    icon: Building2,
    value: "10",
    label: "Franchise Branches Opened",
    desc: "Successfully established and scaled franchise operations across key regional markets."
  },
  {
    icon: Network,
    value: "75+",
    label: "B2B Agents Managed",
    desc: "Built and nurtured a robust network of B2B partners, driving consistent revenue growth."
  },
  {
    icon: Trophy,
    value: "Leo of the Year",
    label: "International Award",
    desc: "Recognized globally for outstanding leadership and community service excellence."
  },
  {
    icon: Medal,
    value: "Leadership",
    label: "Lions International",
    desc: "Received multiple prestigious awards for exemplary leadership and social impact initiatives."
  },
  {
    icon: Star,
    value: "Strategic",
    label: "Global Partnerships",
    desc: "Forged high-value alliances with premier international education institutions."
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative bg-premium-charcoal overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-premium-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="text-premium-red">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-premium-red to-premium-gold mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((item, index) => {
            const Icon = item.icon;
            // Make the first two items span differently on tablet if desired, or just standard grid
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                {/* Glow Effect behind card */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-premium-red to-premium-gold rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500" />

                <div className="relative h-full glass-card p-8 rounded-2xl flex flex-col items-center text-center border border-white/5 bg-premium-black/80">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-premium-charcoal to-premium-black border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Icon className="text-premium-gold" size={28} />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-premium-red transition-colors duration-300">
                    {item.value}
                  </h3>
                  <h4 className="text-lg font-medium text-gray-200 mb-4 uppercase tracking-wide">
                    {item.label}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed mt-auto">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
