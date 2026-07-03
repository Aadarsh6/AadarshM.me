function Footer() {
  return (
    <footer className="py-8 px-6 text-center text-sm text-black/40 dark:text-white/40 border-t border-black/5 dark:border-white/10">
      <p>© {new Date().getFullYear()} YourName. Built with React & Tailwind.</p>
    </footer>
  );
}

export default Footer;