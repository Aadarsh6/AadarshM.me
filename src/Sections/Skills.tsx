import { motion } from "framer-motion";
import { skills } from "../Data/Skils";
import SkillMarquee from "../components/SkillMarquee";

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-black/[0.015] dark:bg-white/[0.02] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-5xl font-bold mb-14"
        >
          What I work with
        </motion.h2>
      </div>

      <div className="space-y-8">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="max-w-5xl mx-auto px-6 text-sm uppercase tracking-wide text-black/50 dark:text-white/50 mb-3">
              {group.category}
            </p>
            <SkillMarquee
              items={group.items}
              direction={i % 2 === 0 ? "left" : "right"}
              speed={20 + i * 5}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;