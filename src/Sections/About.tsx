import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold md:sticky md:top-28">
            A bit about me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-lg leading-relaxed text-black/70 dark:text-white/70"
        >
          <p>
            Write 1-2 sentences here — who you are, what drives you, in a human
            tone.
          </p>
          <p>
            Add a second short paragraph — a detail that makes you memorable.
          </p>
          <p className="text-black/50 dark:text-white/50 text-base">
            Optional third line — currently learning X, based in Y.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;