import { motion } from "framer-motion";
import GradientBlob from "../components/Ui/GradientBlob";
import Container from "../components/Ui/Container";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center overflow-hidden"
    >
      <GradientBlob />

      <Container className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm tracking-wide text-black/50 dark:text-white/50"
        >
          Aadarsh Mishra — Product Designer & Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl"
        >
          Your bold positioning statement goes here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-black/60 dark:text-white/60"
        >
          A one-to-two line subline explaining what you do, for who, and why it matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center gap-8"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-7 py-3.5 font-medium text-white shadow-[0_8px_24px_-8px_rgba(255,90,31,0.5)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_12px_28px_-8px_rgba(255,90,31,0.6)] active:scale-[0.98]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-medium text-black/70 dark:text-white/70"
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