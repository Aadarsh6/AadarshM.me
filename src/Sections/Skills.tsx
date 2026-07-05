import { motion } from "framer-motion";
import { skills } from "../Data/Skils";
import SkillMarquee from "../components/SkillMarquee";

function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] via-transparent to-black/[0.03] dark:from-white/[0.03] dark:to-white/[0.02]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] border border-black/10 bg-white/70 px-6 py-12 shadow-[0_20px_80px_-35px_rgba(0,0,0,0.25)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] md:px-10 md:py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center font-display text-3xl font-bold md:text-5xl"
          >
            What I work with
          </motion.h2>

          <div className="mt-12 space-y-10">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="mx-auto mb-3 max-w-6xl px-1 md:px-3">
                  <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-black/45 dark:text-white/45">
                    {group.category}
                  </p>
                </div>

                <SkillMarquee
                  items={group.items}
                  direction={i % 2 === 0 ? "left" : "right"}
                  speed={22 + i * 5}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;