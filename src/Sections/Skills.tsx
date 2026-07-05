import { motion } from "framer-motion";
import { skills } from "../Data/Skils"; 
import SkillMarquee from "../components/SkillMarquee";

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      {/* Restored Standard Header Orientation */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-black/40 dark:text-white/40"
      >
        // 03. The Arsenal
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-neutral-900 md:text-5xl dark:text-neutral-100"
      >
        The instruments of my <span className="italic text-neutral-400 dark:text-neutral-500">craft.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500 dark:text-neutral-400"
      >
        Tools change, but fundamentals remain. I use a focused stack to build fast, scalable, and resilient interfaces without the bloat.
      </motion.p>

      {/* Structural Grid for Skills */}
      <div className="mt-20 space-y-4 border-t border-black/10 pt-12 dark:border-white/10">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group grid items-center gap-6 border-b border-black/5 pb-12 last:border-0 md:grid-cols-[220px_1fr] md:gap-10 md:pb-16 dark:border-white/5"
          >
            {/* Left side: Monospace Data Label */}
            <div className="flex items-center justify-between md:block">
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
                {group.category}
              </h3>
              <p className="mt-2 hidden font-mono text-xs text-black/30 md:block dark:text-white/30">
                [{group.items.length} Items]
              </p>
            </div>

            {/* Right side: Contained Marquee with Crisp Light-Mode Styling */}
            <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.02] py-8 dark:border-white/[0.08] dark:bg-white/[0.02]">
              {/* Fade masks mapped to the container's background for smooth clipping */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white dark:from-[#0a0a0a] dark:to-[#0a0a0a] [mask-image:linear-gradient(to_right,white_5%,transparent_20%,transparent_80%,white_95%)]" />
              
              <SkillMarquee
                items={group.items}
                direction={i % 2 === 0 ? "left" : "right"}
                speed={30}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;