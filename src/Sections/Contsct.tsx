import { motion } from "framer-motion";
import { socials } from "../Data/Socials";
import SocialLink from "../components/SocialLink";

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center">
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
        className="mt-4 text-lg text-black/60 dark:text-white/60"
      >
        Open to opportunities and interesting projects. Reach out anytime.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="mailto:you@email.com"
        className="inline-block mt-8 px-8 py-4 rounded-full bg-accent text-white font-medium text-lg hover:opacity-90 transition-opacity"
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