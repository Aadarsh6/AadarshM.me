import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{ x: pos.x - 10, y: pos.y - 10, scale: hovering ? 1.8 : 1 }}
      transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.3 }}
      className="fixed top-0 left-0 w-5 h-5 rounded-full bg-accent mix-blend-difference pointer-events-none z-[200] hidden md:block"
    />
  );
}

export default CustomCursor;