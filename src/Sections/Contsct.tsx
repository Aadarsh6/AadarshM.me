import { motion } from "framer-motion";
import { socials } from "../Data/Socials";
import SocialLink from "../components/SocialLink";

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 max-w-5xl mx-auto text-center bg-black/[0.015] dark:bg-white/[0.02]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl md:text-6xl font-bold"
      >
        Let's build something.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-lg leading-relaxed text-black/60 dark:text-white/60"
      >
        Open to opportunities and interesting projects. Reach out anytime.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="mailto:you@email.com"
        className="inline-block mt-8 px-8 py-4 rounded-full bg-accent text-white font-medium text-lg shadow-[0_8px_24px_-8px_rgba(255,90,31,0.5)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_12px_28px_-8px_rgba(255,90,31,0.6)] active:scale-[0.98]"
      >
        Say hello →
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex justify-center gap-4"
      >
        {socials.map((social) => (
          <SocialLink key={social.label} social={social} />
        ))}
      </motion.div>
    </section>
  );
}

export default Contact;