import { motion } from "framer-motion";
import { Code2, Coffee, MapPin, Sparkles } from "lucide-react";
import Container from "../components/Ui/Container";

const highlights = [
    { icon: Sparkles, label: "10+ projects", sub: "shipped end to end" },
    { icon: MapPin, label: "Delhi, India", sub: "based in" },
    { icon: Code2, label: "", sub: "building products" },
  { icon: Coffee, label: "Fueled by", sub: "coffee & curiosity" },
];

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-secondary"
        >
          About
        </motion.p>

        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold leading-tight text-text-light md:text-5xl dark:text-text-dark">
              I build thoughtful digital experiences with clean UI and solid frontend craft.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-text-light/70 dark:text-text-dark/70 md:text-lg">
              <p>
                I&apos;m Aadarsh Mishra, a frontend developer from Delhi focused on modern
                interfaces, smooth interactions, and polished user experiences.
              </p>
              <p>
                I like building portfolio websites, product pages, and UI systems that feel
                simple, fast, and memorable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="rounded-2xl border border-black/10 bg-bg-light p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 dark:border-white/10 dark:bg-white/[0.02]"
              >
                <h.icon size={18} className="mb-3 text-secondary" />
                <p className="text-sm uppercase tracking-wide text-text-light/45 dark:text-text-dark/45">
                  {h.sub}
                </p>
                <p className="mt-1 text-xl font-semibold text-text-light dark:text-text-dark">
                  {h.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;