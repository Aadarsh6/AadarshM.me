import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SIGNATURE_PATH_D, SIGNATURE_VIEWBOX } from "../Data/SignaturePath";

const REVEAL_DURATION = 1.1; // seconds for the wipe to draw the signature
const HOLD_DURATION = 350; // ms to hold the finished signature before fading
const FADE_DURATION = 0.6; // seconds for the overlay to fade into Hero

interface IntroSignatureProps {
  onFinish?: () => void;
}

/**
 * Full-screen splash shown on every page load: a solid background with
 * Aadarsh's signature "written" on via an animated mask wipe, then the
 * whole overlay fades out to reveal the Hero section underneath.
 *
 * Plays every refresh by design (no sessionStorage gate) — keep the
 * durations short so it never feels like it's blocking the page.
 */
function IntroSignature({ onFinish }: IntroSignatureProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Reveal finishes at REVEAL_DURATION, then hold briefly, then fade out.
    const holdTimer = setTimeout(() => {
      setVisible(false);
    }, REVEAL_DURATION * 1000 + HOLD_DURATION);

    return () => clearTimeout(holdTimer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          key="intro-signature"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-light dark:bg-bg-dark"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-[min(72vw,420px)]"
          >
            <svg
              viewBox={SIGNATURE_VIEWBOX}
              className="h-auto w-full text-accent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Mask reveals the signature along its natural upward slant,
                    like a pen moving left to right across the page. */}
                <mask id="signature-wipe-mask">
                  <motion.rect
                    x="-200"
                    y="-400"
                    width="450"
                    height="1600"
                    fill="white"
                    initial={{ x: -650 }}
                    animate={{ x: 900 }}
                    transition={{
                      duration: REVEAL_DURATION,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                    transform="rotate(-20 465 403)"
                  />
                </mask>
              </defs>
              <g
                transform="translate(0,807) scale(0.1,-0.1)"
                fill="currentColor"
                stroke="none"
                mask="url(#signature-wipe-mask)"
              >
                <path d={SIGNATURE_PATH_D} />
              </g>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroSignature;