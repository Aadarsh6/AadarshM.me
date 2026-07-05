import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SIGNATURE_PATH_D, SIGNATURE_VIEWBOX } from "../Data/SignaturePath";

const REVEAL_DURATION = 1.3; // seconds for the stroke to trace itself
const FILL_DELAY_RATIO = 0.88; // fill kicks in just before the stroke finishes
const HOLD_DURATION = 450; // ms to hold the finished signature before fading
const FADE_DURATION = 0.7; // seconds for the natural (auto) exit wipe
const SKIP_EXIT_DURATION = 0.35; // seconds for the exit wipe when the user skips
const SKIP_HINT_DELAY = 0.8; // seconds before the "skip" hint fades in

interface IntroSignatureProps {
  onFinish?: () => void;
}

// Slow, deliberate start (pen touching down), accelerating through the
// midstroke, easing out at the end.
const INK_EASE: [number, number, number, number] = [0.22, 0.68, 0.32, 0.98];
// Crisp "expo" easing for the wipe-reveal exit — a curtain pulled away.
const WIPE_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

function IntroSignature({ onFinish }: IntroSignatureProps) {
  const [visible, setVisible] = useState(true);
  const [skipped, setSkipped] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const totalDelay = prefersReducedMotion
      ? 500
      : REVEAL_DURATION * 1000 + HOLD_DURATION;
    holdTimerRef.current = setTimeout(() => setVisible(false), totalDelay);
    return () => clearTimeout(holdTimerRef.current);
  }, [prefersReducedMotion]);

  // Let people skip on click or any keypress — it plays on every refresh,
  // so returning visitors shouldn't be stuck waiting on it.
  useEffect(() => {
    if (!visible) return;
    const skipIntro = () => {
      clearTimeout(holdTimerRef.current);
      setSkipped(true);
      setVisible(false);
    };
    window.addEventListener("keydown", skipIntro);
    return () => window.removeEventListener("keydown", skipIntro);
  }, [visible]);

  const handleSkipClick = () => {
    clearTimeout(holdTimerRef.current);
    setSkipped(true);
    setVisible(false);
  };

  const exitDuration = skipped ? SKIP_EXIT_DURATION : FADE_DURATION;

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          key="intro-signature"
          onClick={handleSkipClick}
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 0% 100%)" }}
          transition={{ duration: exitDuration, ease: WIPE_EASE }}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center overflow-hidden bg-bg-light dark:bg-bg-dark"
          aria-hidden="true"
        >
          {/* Vignette in the brand's secondary tone — ties the intro to the
              same palette as the rest of the site, in both modes. */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--color-secondary) 14%, transparent), transparent 60%)",
            }}
          />

          {/* Same grain used across the site, so the intro doesn't feel like
              a flatter, separate surface from the page underneath. */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex w-[min(70vw,420px)] flex-col items-center"
          >
            <svg
              viewBox={SIGNATURE_VIEWBOX}
              className="h-auto w-full overflow-visible text-secondary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="signature-ink" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                </linearGradient>

                <filter id="signature-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
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
                          times: [0, 0.5, 1],
                          ease: "easeInOut",
                        },
                      }}
                    />
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

            {/* A soft bloom right as the ink settles — like wet ink catching
                the light for a moment before it dries. */}
            {!prefersReducedMotion && (
              <motion.div
                className="pointer-events-none absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 1,
                  delay: REVEAL_DURATION * FILL_DELAY_RATIO + 0.35,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--color-secondary) 22%, transparent), transparent 70%)",
                }}
              />
            )}

            {/* Baseline + printed name — reads like a signed document
                rather than just a logo animating on screen. */}
            <motion.div
              className="mt-3 h-px w-3/5 origin-center bg-secondary/25"
              initial={prefersReducedMotion ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.6, ease: WIPE_EASE, delay: REVEAL_DURATION * FILL_DELAY_RATIO + 0.1 }
              }
            />
            <motion.p
              className="mt-2 text-center text-[10px] font-body uppercase tracking-[0.3em] text-text-light/40 dark:text-text-dark/40"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.5, delay: REVEAL_DURATION * FILL_DELAY_RATIO + 0.3 }
              }
            >
              Aadarsh
            </motion.p>
          </motion.div>

          {/* Subtle, unobtrusive way out for anyone who doesn't want to
              wait through the full animation. */}
          {!prefersReducedMotion && (
            <motion.span
              className="absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.25em] text-text-light/30 dark:text-text-dark/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: SKIP_HINT_DELAY }}
            >
              Skip →
            </motion.span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroSignature;