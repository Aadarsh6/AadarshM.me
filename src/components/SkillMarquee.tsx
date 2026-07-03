import { motion } from "framer-motion";

interface SkillMarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number; // seconds for one full loop
}

function SkillMarquee({ items, direction = "left", speed = 25 }: SkillMarqueeProps) {
  const duplicated = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden relative py-2">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[var(--color-bg-light)] dark:from-[var(--color-bg-dark)] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[var(--color-bg-light)] dark:from-[var(--color-bg-dark)] to-transparent" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/15 text-sm font-medium bg-white dark:bg-white/[0.03] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.3)] hover:border-accent hover:text-accent transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default SkillMarquee;