import { motion } from "framer-motion";
import GradientBlob from "../components/Ui/GradientBlob";
import Container from "../components/Ui/Container";

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <GradientBlob />

      <Container className="relative z-10 flex min-h-screen flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-medium mb-4 tracking-wide text-sm md:text-base"
        >
          Hi, I'm YourName 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold leading-[1.1] max-w-3xl"
        >
          Your bold positioning statement goes here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg leading-relaxed text-black/60 dark:text-white/60 max-w-xl"
        >
          A one-to-two line subline explaining what you do, for who, and why it matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-full bg-accent text-white font-medium shadow-[0_8px_24px_-8px_rgba(255,90,31,0.5)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_12px_28px_-8px_rgba(255,90,31,0.6)] active:scale-[0.98]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full border border-black/10 dark:border-white/20 font-medium transition-all duration-300 ease-out hover:border-accent hover:text-accent hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in touch
          </a>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-black/20 dark:border-white/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-black/40 dark:bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;