import { motion } from "framer-motion";
import { skills } from "../Data/Skils"; 
import SkillMarquee from "../components/SkillMarquee";

function Skills() {
  return (
    <section 
      id="skills" 
      className="mx-auto max-w-7xl px-6 py-24 md:py-40"
    >
      {/* Header Section: Asymmetric, confident, and text-driven */}
      <div className="mb-20 flex flex-col items-start justify-between gap-8 md:mb-32 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8 block font-mono text-sm tracking-widest text-black/40 dark:text-white/40"
          >
            // 03. THE ARSENAL
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-medium tracking-tight text-neutral-900 md:text-6xl lg:text-7xl dark:text-neutral-100"
          >
            The instruments of my <span className="italic text-neutral-400 dark:text-neutral-500">craft.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="max-w-xs text-sm leading-relaxed text-neutral-500 md:text-right dark:text-neutral-400"
        >
          Tools change, but fundamentals remain. I use a focused stack to build fast, scalable, and resilient interfaces without the bloat.
        </motion.p>
      </div>

      {/* Structural Grid for Skills */}
      <div className="space-y-4 border-t border-black/10 pt-16 dark:border-white/10">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group grid items-center gap-6 border-b border-black/5 pb-12 last:border-0 md:grid-cols-[250px_1fr] md:gap-12 md:pb-16 dark:border-white/5"
          >
            {/* Left side: Monospace Data Label */}
            <div className="flex items-center justify-between md:block">
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
                {group.category}
              </h3>
              {/* Added a dynamic count for a nice data-driven detail */}
              <p className="mt-3 hidden font-mono text-xs text-black/30 md:block dark:text-white/30">
                [{group.items.length} Items]
              </p>
            </div>

            {/* Right side: Contained Marquee */}
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100/50 py-8 dark:bg-neutral-900/50">
              {/* Fade masks so the items don't hit the box edges harshly */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-neutral-100/50 via-transparent to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-900/50" />
              
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