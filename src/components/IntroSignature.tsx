import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SIGNATURE_PATH_D, SIGNATURE_VIEWBOX } from "../Data/SignaturePath";

const REVEAL_DURATION = 1.3; // seconds for the stroke to trace itself
const FILL_DELAY_RATIO = 0.88; // fill kicks in just before the stroke finishes
const HOLD_DURATION = 450; // ms to hold the finished signature before fading
const FADE_DURATION = 0.7; // seconds for the overlay to dissolve into Hero

interface IntroSignatureProps {
  onFinish?: () => void;
}

// Custom easing: slow, deliberate start (like a pen touching down),
// accelerating through the midstroke, easing out at the end.
const INK_EASE: [number, number, number, number] = [0.22, 0.68, 0.32, 0.98];

function IntroSignature({ onFinish }: IntroSignatureProps) {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const totalDelay = prefersReducedMotion
      ? 500
      : REVEAL_DURATION * 1000 + HOLD_DURATION;
    const holdTimer = setTimeout(() => setVisible(false), totalDelay);
    return () => clearTimeout(holdTimer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          key="intro-signature"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-bg-light dark:bg-bg-dark"
          aria-hidden="true"
        >
          {/* Soft radial vignette so the signature sits in a pool of light
              rather than a flat, dead background. */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(120,120,255,0.06), transparent 60%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-[min(70vw,420px)]"
          >
            <svg
              viewBox={SIGNATURE_VIEWBOX}
              className="h-auto w-full overflow-visible text-accent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradient ink instead of a flat fill — reads as premium
                    rather than a static logo. */}
                <linearGradient
                  id="signature-ink"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                </linearGradient>

                {/* Subtle glow that trails the pen tip while drawing */}
                <filter id="signature-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g transform="translate(0,807) scale(0.1,-0.1)">
                {prefersReducedMotion ? (
                  <path d={SIGNATURE_PATH_D} fill="url(#signature-ink)" stroke="none" />
                ) : (
                  <>
                    {/* Glowing trace — the "pen" moving across the page */}
                    <motion.path
                      d={SIGNATURE_PATH_D}
                      fill="none"
                      stroke="url(#signature-ink)"
                      strokeWidth={16}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#signature-glow)"
                      initial={{ pathLength: 0, opacity: 0.9 }}
                      animate={{ pathLength: 1, opacity: [0.9, 1, 0] }}
                      transition={{
                        pathLength: { duration: REVEAL_DURATION, ease: INK_EASE },
                        opacity: {
                          duration: REVEAL_DURATION,
                          times: [0, 0.50, 1],
                          ease: "easeInOut",
                        },
                      }}
                    />
                    {/* Solid ink fill, settling in just as the trace finishes
                        so the glow hands off to a clean, resting mark */}
                    <motion.path
                      d={SIGNATURE_PATH_D}
                      fill="url(#signature-ink)"
                      stroke="none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: REVEAL_DURATION * FILL_DELAY_RATIO,
                      }}
                    />
                  </>
                )}
              </g>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroSignature;