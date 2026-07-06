import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SEGMENT_COUNT = 7;

function AdvancedCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const target = e.target as HTMLElement;
      hoveringRef.current = !!target.closest("a, button, input, textarea");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] hidden overflow-hidden md:block">
      <SnakeBody mouseX={mouseX} mouseY={mouseY} />
      <Head mouseX={mouseX} mouseY={mouseY} />
    </div>
  );
}

/**
 * Each segment springs toward the PREVIOUS segment's live position
 * (not the raw cursor), so motion propagates down the chain the way
 * a snake's body follows its head — with real follow-through curl
 * on direction changes, not just independent lag.
 */
function SnakeBody({
  mouseX,
  mouseY,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const segments = Array.from({ length: SEGMENT_COUNT });

  // Build the chain: segment[0] follows the cursor, segment[i] follows segment[i-1]
  const xs: ReturnType<typeof useSpring>[] = [];
  const ys: ReturnType<typeof useSpring>[] = [];

  segments.forEach((_, i) => {
    const prevX = i === 0 ? mouseX : xs[i - 1];
    const prevY = i === 0 ? mouseY : ys[i - 1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    xs.push(useSpring(prevX, { damping: 22, stiffness: 260, mass: 0.4 }));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ys.push(useSpring(prevY, { damping: 22, stiffness: 260, mass: 0.4 }));
  });

  return (
    <>
      {segments.map((_, i) => {
        const size = 10 - i * 1.1; // tapers from head to tail
        const opacity = 0.55 - i * 0.07; // fades out toward the tail
        return (
          <motion.div
            key={i}
            style={{
              x: xs[i],
              y: ys[i],
              translateX: "-50%",
              translateY: "-50%",
              width: Math.max(size, 2),
              height: Math.max(size, 2),
              opacity: Math.max(opacity, 0),
            }}
            className="absolute left-0 top-0 rounded-full bg-accent mix-blend-difference"
          />
        );
      })}
    </>
  );
}

function Head({
  mouseX,
  mouseY,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const springX = useSpring(mouseX, { damping: 26, stiffness: 420, mass: 0.25 });
  const springY = useSpring(mouseY, { damping: 26, stiffness: 420, mass: 0.25 });

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="absolute left-0 top-0 h-3 w-3 rounded-full bg-accent mix-blend-difference"
    />
  );
}

export default AdvancedCursor;