import { motion, useReducedMotion } from "framer-motion";
import BlueprintField from "../components/Ui/BlueprintField";
import MagneticButton from "../components/Ui/MagneticButton";
import Container from "../components/Ui/Container";

const HEADLINE = "Your bold positioning statement goes here.";

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const words = HEADLINE.split(" ");

  return (
    <section id="hero" className="relative isolate flex h-screen items-center overflow-hidden">
      <BlueprintField />

      <Container className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm tracking-wide text-text-light/50 dark:text-text-dark/50"
        >
          Aadarsh Mishra — Product Designer &amp; Developer
        </motion.p>

        {prefersReducedMotion ? (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl font-display text-5xl font-bold leading-[1.08] tracking-tight text-text-light md:text-7xl dark:text-text-dark"
          >
            {HEADLINE}
          </motion.h1>
        ) : (
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.08] tracking-tight text-text-light md:text-7xl dark:text-text-dark">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        )}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-text-light/60 dark:text-text-dark/60"
        >
          A one-to-two line subline explaining what you do, for who, and why it matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex items-center gap-8"
        >
          <MagneticButton
            href="#projects"
            className="inline-block rounded-full bg-accent px-7 py-3.5 font-medium text-white shadow-[0_8px_24px_-8px_rgba(255,90,31,0.5)] transition-shadow duration-300 ease-out hover:shadow-[0_12px_28px_-8px_rgba(255,90,31,0.6)]"
          >
            View my work
          </MagneticButton>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-medium text-text-light/70 dark:text-text-dark/70"
          >
            Get in touch
            <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-9" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;