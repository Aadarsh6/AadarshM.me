import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto relative"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-accent font-medium mb-4 tracking-wide"
      >
        Hi, I'm YourName 👋
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-5xl md:text-7xl font-bold leading-tight max-w-3xl"
      >
        Your bold positioning statement goes here.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg text-black/60 dark:text-white/60 max-w-xl"
      >
        A one-to-two line subline explaining what you do, for who, and why it matters.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex gap-4"
      >
        <a  
          href="#projects"
          className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:opacity-90 transition-opacity"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-black/10 dark:border-white/20 font-medium hover:border-accent transition-colors"
        >
          Get in touch
        </a>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-10 left-6"
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