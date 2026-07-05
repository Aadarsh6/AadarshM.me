// src/components/GradientBlob.tsx
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function GradientBlob() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 40, stiffness: 60 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 60 });

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
      <motion.div
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-[500px] h-[500px] rounded-full bg-accent/20 dark:bg-accent/25 blur-[100px]"
      />
    </div>
  );
}

export default GradientBlob;
  