import { motion } from "framer-motion";
import Container from "../components/Ui/Container";

const HIGHLIGHTS = [
  { value: "2+", label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "Delhi", label: "Based in, IN" },
//   { value: "Open", label: "For freelance" },
];

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-secondary"
          >
            About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-display text-3xl font-medium leading-[1.12] tracking-tight text-text-light md:text-5xl dark:text-text-dark"
          >
            I build interfaces that feel calm to use, clear to understand, and polished enough to stand out.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-8 max-w-3xl text-base leading-[1.85] text-text-light/70 dark:text-text-dark/70 md:text-lg"
          >
            <p>
              I&apos;m Aadarsh Mishra, a frontend developer from Delhi focused on building modern
              portfolio websites, product pages, and UI systems with a strong sense of structure
              and detail.
            </p>
            <p className="mt-5">
              My work sits between design and engineering: I care about spacing, hierarchy,
              performance, and the small interactions that make a product feel considered rather
              than just finished.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-x-8 justify-center gap-y-10 border-t border-black/10 pt-10 sm:grid-cols-4 dark:border-white/10"
          >
            {HIGHLIGHTS.map((item) => (
              <div key={item.label}>
                <p className="font-display text-2xl font-bold text-text-light md:text-3xl dark:text-text-dark">
                  {item.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-text-light/45 dark:text-text-dark/45">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;