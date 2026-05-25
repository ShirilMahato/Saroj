
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const experiences = [
  {
    role: "Sales Head Nepal",
    company: "Study Square",
    period: "Present",
    achievements: [
      "Leading sales strategies and revenue generation in the Nepal region.",
      "Expanding institutional partnerships and maximizing market penetration.",
      "Overseeing a high-performing sales team to exceed regional targets."
    ]
  },
  {
    role: "Regional Head South Asia",
    company: "Educonnect Australia",
    period: "Previous",
    achievements: [
      "Directed operations across multiple South Asian countries.",
      "Established strategic frameworks for cross-border student recruitment.",
      "Cultivated key relationships with top-tier Australian universities."
    ]
  },
  {
    role: "Head of Business Relations",
    company: "Unicampus Global",
    period: "Previous",
    achievements: [
      "Spearheaded business development initiatives globally.",
      "Negotiated high-value contracts and institutional agreements.",
      "Enhanced brand positioning in competitive international markets."
    ]
  },
  {
    role: "Group Head of Business",
    company: "Softed Group",
    period: "Previous",
    achievements: [
      "Oversaw diverse business units driving cohesive growth.",
      "Implemented streamlined operational protocols across the group.",
      "Led strategic mergers, acquisitions, and expansions."
    ]
  },
  {
    role: "Leadership Roles",
    company: "Green Apple Education & Migration Services | Australian Visa & Education Consultants",
    period: "Earlier Career",
    achievements: [
      "Built foundational expertise in visa operations and migration services.",
      "Managed client relations and navigated complex regulatory environments.",
      "Consistently achieved top-tier client satisfaction ratings."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-premium-black">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-premium-red">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-premium-red to-premium-gold mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-premium-red via-premium-gold/50 to-transparent md:-translate-x-1/2 hidden md:block" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-premium-red border-4 border-premium-black md:-translate-x-1/2 mt-6 md:mt-0 z-10 shadow-[0_0_10px_rgba(214,32,39,0.8)] hidden md:block" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-premium-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex items-center space-x-2 text-premium-gold mb-3 text-sm font-medium tracking-wider uppercase">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-premium-red transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-400 mb-6">
                          <Briefcase size={16} />
                          <span className="text-lg">{exp.company}</span>
                        </div>

                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-gray-300 text-sm md:text-base">
                              <ChevronRight size={18} className="text-premium-red mr-2 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
