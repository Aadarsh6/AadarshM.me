import { motion } from "framer-motion";
import { Code2, Coffee, MapPin, Sparkles } from "lucide-react";

const highlights = [
  { icon: Code2, label: "2+ years", sub: "building products" },
  { icon: Sparkles, label: "10+ projects", sub: "shipped end to end" },
  { icon: MapPin, label: "Delhi, India", sub: "based in" },
  { icon: Coffee, label: "Fueled by", sub: "coffee & curiosity" },
];

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] via-transparent to-black/[0.03] dark:from-white/[0.03] dark:to-white/[0.02]" />
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-accent"
        >
          About
        </motion.p>

        <div className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-5 inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Developer • Designer • Problem Solver
              </div>

              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                I turn ideas into fast, thoughtful products with detail that people
                actually notice.
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-black/70 dark:text-white/70 md:text-lg">
                <p>
                  I&apos;m Aadarsh Mishra, a frontend developer from Delhi who enjoys
                  building clean interfaces, smooth interactions, and products that
                  feel polished from the first click.
                </p>
                <p>
                  I care about design, performance, and the small things that make a
                  portfolio feel premium instead of generic.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-2xl" />
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: 0.12 * i }}
                    className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <h.icon size={18} className="mb-3 text-accent" />
                    <p className="text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
                      {h.sub}
                    </p>
                    <p className="mt-1 text-xl font-bold text-black dark:text-white">
                      {h.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;