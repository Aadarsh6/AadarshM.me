import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function GradientBlob() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 40 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 40 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
    >
      {/* Cursor-tracking blob — slower spring, lower opacity, ink blue */}
      <motion.div
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[480px] h-[480px] rounded-full bg-secondary/10 dark:bg-secondary/15 blur-[110px]"
      />

      {/* Independent drifting blob — gives depth, doesn't just chase mouse */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-1/3 w-[320px] h-[320px] rounded-full bg-accent/6 blur-[100px]"
      />
    </div>
  );
}

export default GradientBlob;