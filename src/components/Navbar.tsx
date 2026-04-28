"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Jornada", href: "#sobre" },
  { label: "Nexus", href: "#nexus" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/80 backdrop-blur-xl border-b border-navy/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-display font-black text-xl text-navy tracking-tight">
            MM<span className="text-red">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy/70 hover:text-navy transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-red transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-cream text-sm font-semibold hover:bg-red transition-all duration-300 magnetic-btn"
          >
            Falar comigo
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="font-display font-bold text-4xl text-navy hover:text-red transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-navy text-cream font-semibold text-lg hover:bg-red transition-all duration-300"
            >
              Falar comigo
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
