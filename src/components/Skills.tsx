
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from '../utils/animations';

const skills = [
  "Strategic Planning",
  "Business Development",
  "Leadership",
  "Sales & Marketing",
  "International Education",
  "Public Speaking",
  "Team Management",
  "Cross-Cultural Communication",
  "Operations Management"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-premium-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="text-premium-red">Competencies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-premium-red to-premium-gold mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass px-6 py-4 rounded-full border border-white/10 hover:border-premium-red/50 hover:bg-premium-red/10 cursor-default transition-colors duration-300 shadow-lg"
            >
              <span className="text-lg font-medium text-gray-200 tracking-wide">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
