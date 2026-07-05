import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function AdvancedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      // Added inputs and textareas to standard clickable targets
      setHovering(!!target.closest("a, button, input, textarea"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Configure the number of trailing dots
  const trails = Array.from({ length: 4 });

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] hidden overflow-hidden md:block">
      {/* The Fading Trail */}
      {trails.map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            x: pos.x - 4, // Offset by half of w-2 (8px)
            y: pos.y - 4 
          }}
          transition={{
            type: "spring",
            // Progressively lazier physics for each dot creates the trail
            damping: 15 + i * 8,
            stiffness: 400 - i * 50,
            mass: 0.1 + i * 0.05,
          }}
          className="absolute left-0 top-0 h-2 w-2 rounded-full bg-accent mix-blend-difference"
          style={{
            // Fade and shrink as they go further back in the trail
            opacity: 0.4 - i * 0.1,
            scale: 1 - i * 0.15,
          }}
        />
      ))}

      {/* The Main Head */}
      <motion.div
        animate={{
          x: pos.x - (hovering ? 16 : 6), // Dynamically center based on size
          y: pos.y - (hovering ? 16 : 6),
        }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 500, 
          mass: 0.1 
        }}
        className={`absolute left-0 top-0 rounded-full mix-blend-difference transition-all duration-200 ${
          hovering 
            ? "h-8 w-8 border-[1px] border-accent bg-accent/10" // Hollow ring on hover
            : "h-3 w-3 bg-accent" // Solid dot when resting
        }`}
      />
    </div>
  );
}

export default AdvancedCursor;