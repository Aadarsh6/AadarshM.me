import { motion } from "framer-motion";
import { skills } from "../Data/Skils";
import SkillMarquee from "../components/SkillMarquee";
import Container from "../components/Ui/Container";

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-secondary"
        >
          Stack
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-text-light md:text-5xl dark:text-text-dark"
        >
          The instruments of my{" "}
          <span className="italic text-text-light/40 dark:text-text-dark/40">
            craft.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-text-light/60 dark:text-text-dark/60"
        >
          Tools change, but fundamentals remain. I use a focused stack to
          build fast, scalable, and resilient interfaces without the bloat.
        </motion.p>

        <div className="mt-20 border-t border-black/10 dark:border-white/10">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid items-center gap-6 border-b border-black/10 py-10 transition-colors duration-300 last:border-0 hover:border-secondary/30 md:grid-cols-[220px_1fr] md:gap-10 md:py-14 dark:border-white/10 dark:hover:border-secondary/30"
            >
              <div className="flex items-baseline justify-between md:block">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-black/25 dark:text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-text-light transition-colors duration-300 group-hover:text-secondary dark:text-text-dark">
                    {group.category}
                  </h3>
                </div>
                <p className="hidden font-mono text-xs text-black/30 md:mt-2 md:block dark:text-white/30">
                  {group.items.length} tools
                </p>
              </div>

              <SkillMarquee
                items={group.items}
                direction={i % 2 === 0 ? "left" : "right"}
                speed={30}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;