import { motion } from "framer-motion";
import { skills } from "../Data/Skils";
import SkillBadge from "../components/SkillBadge";

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-black/[0.015] dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-5xl font-bold mb-14"
        >
          What I work with
        </motion.h2>

        <div className="space-y-10">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-sm uppercase tracking-wide text-black/50 dark:text-white/50 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;