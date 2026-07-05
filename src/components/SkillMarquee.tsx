import { motion } from "framer-motion";

interface SkillMarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

function SkillMarquee({ items, direction = "left", speed = 25 }: SkillMarqueeProps) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div
      className="relative mx-auto w-full max-w-6xl overflow-hidden py-3"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 rounded-full border border-accent/20 bg-white/80 px-4 py-2 text-sm font-medium text-black/80 shadow-[0_8px_24px_-18px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/10 hover:text-accent dark:bg-white/5 dark:text-white/85"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default SkillMarquee;