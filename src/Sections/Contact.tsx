import { motion } from "framer-motion";
import { socials } from "../Data/Socials";
import SocialLink from "../components/SocialLink";
import Container from "../components/Ui/Container";

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div  />
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />

      <Container className="relative">
        <div className="rounded-[2rem] border border-black/10 bg-bg-light/70 px-6 py-14 text-center shadow-[0_24px_80px_-40px_rgba(0,0,0,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] md:px-12 md:py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-secondary"
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-tight text-text-light md:text-6xl dark:text-text-dark"
          >
            Let&apos;s build something that feels premium.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-light/65 dark:text-text-dark/65 md:text-lg"
          >
            I&apos;m open to internships, freelance work, collaborations, and
            interesting product ideas. If you have a project in mind, let&apos;s talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:you@email.com"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-medium text-white shadow-[0_10px_30px_-10px_rgba(255,90,31,0.55)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_34px_-10px_rgba(255,90,31,0.65)] active:scale-[0.98]"
            >
              Say hello →
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-bg-light/80 px-8 py-4 text-lg font-medium text-text-light/75 transition-all duration-300 hover:border-secondary/40 hover:text-secondary dark:border-white/10 dark:bg-white/[0.04] dark:text-text-dark/80"
            >
              View projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mx-auto mt-10 flex w-full max-w-xs flex-wrap items-center justify-center gap-4 rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4 dark:border-white/10 dark:bg-white/[0.03] sm:max-w-sm"
          >
            {socials.map((social) => (
              <SocialLink key={social.label} social={social} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;