"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Jornada",  href: "#sobre" },
  { label: "Nexus",    href: "#nexus" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills",   href: "#skills" },
  { label: "Contato",  href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-[rgba(255,253,208,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-black text-xl text-cream tracking-tight group"
          >
            MM
            <span
              className="text-red transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(230,57,70,0.8)]"
            >.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setActive(link.href)}
                onMouseLeave={() => setActive("")}
                className="relative text-sm font-medium text-cream/50 hover:text-cream transition-colors duration-200 group py-1"
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px rounded-full bg-red transition-all duration-300 group-hover:w-full w-0"
                  style={{ boxShadow: active === link.href ? "0 0 8px rgba(230,57,70,0.7)" : "none" }}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cream/80 text-sm font-semibold hover:bg-red hover:text-cream hover:border-red transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,57,70,0.4)]"
          >
            Falar comigo
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span className={`block w-5 h-0.5 bg-cream transition-transform duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-0.5 bg-cream transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-cream transition-transform duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 md:hidden"
            style={{ background: "rgba(11, 21, 37, 0.97)", backdropFilter: "blur(24px)" }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
                className="font-display font-bold text-4xl text-cream active:text-red transition-colors group relative"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red rounded-full transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-8 py-3.5 rounded-full bg-red text-cream font-semibold text-lg shadow-[0_0_30px_rgba(230,57,70,0.4)] active:scale-95 transition-transform"
            >
              Falar comigo
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
