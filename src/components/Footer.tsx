function Footer() {
  return (
    <footer className="border-t border-black/5 px-6 py-8 text-center text-sm text-text-light/40 dark:border-white/10 dark:text-text-dark/40">
      <p>© {new Date().getFullYear()} Aadarsh Mishra. Built with React &amp; Tailwind.</p>
    </footer>
  );
}

export default Footer;