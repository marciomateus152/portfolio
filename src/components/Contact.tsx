"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";

const socials = [
  {
    name: "GitHub",
    handle: "@marciomateus152",
    href: "https://github.com/marciomateus152",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Márcio Mateus",
    href: "https://linkedin.com/in/marcio-mateus-509952236/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "marciomateus152@gmail.com",
    href: "mailto:marciomateus152@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const reduced = useReducedMotion();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name    = data.get("name") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`Contato via portfólio — ${name}`);
    const body    = encodeURIComponent(message);
    window.open(`mailto:marciomateus152@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contato" className="py-32 overflow-hidden" style={{ background: "#0e1e32" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 lg:p-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(11,21,37,0.98) 0%, rgba(18,34,58,0.98) 100%)",
            border: "1px solid rgba(255,253,208,0.07)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          }}
        >
          {/* Ambient glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full -translate-y-1/2 hidden md:block animate-pulse-glow"
            style={{ background: "radial-gradient(circle, rgba(230,57,70,0.2) 0%, transparent 65%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 rounded-full translate-y-1/2 hidden md:block"
            style={{ background: "radial-gradient(circle, rgba(230,57,70,0.1) 0%, transparent 65%)" }}
          />
          {/* Mobile ambient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 md:hidden"
            style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(230,57,70,0.12) 0%, transparent 60%)" }}
          />

          {/* Top border glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.5), transparent)" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <FadeIn>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-red" style={{ boxShadow: "0 0 8px rgba(230,57,70,0.6)" }} />
                  <span className="text-red text-xs font-bold uppercase tracking-widest">Contato</span>
                  <div className="h-px w-8 bg-red" style={{ boxShadow: "0 0 8px rgba(230,57,70,0.6)" }} />
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2
                  className="font-display font-black text-cream leading-tight"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                >
                  Vamos construir
                  <br />
                  <span className="gradient-text-red">algo juntos?</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-6 text-cream/45 text-lg max-w-lg mx-auto leading-relaxed">
                  Estou disponível para estágios, posições júnior e colaborações.
                  Se tens um projecto interessante, fala comigo.
                </p>
              </FadeIn>
            </div>

            {/* Two-column: form + quick links */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Contact form */}
              <FadeIn delay={0.25}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-cream/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Seu Nome
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="João Silva"
                      className="w-full px-4 py-3 rounded-xl text-cream text-sm placeholder-cream/25 outline-none transition-all duration-300 focus:border-red/40 focus:shadow-[0_0_15px_rgba(230,57,70,0.12)]"
                      style={{
                        background: "rgba(255,253,208,0.04)",
                        border: "1px solid rgba(255,253,208,0.09)",
                        backdropFilter: "blur(12px)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-cream/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="joao@empresa.com"
                      className="w-full px-4 py-3 rounded-xl text-cream text-sm placeholder-cream/25 outline-none transition-all duration-300 focus:border-red/40 focus:shadow-[0_0_15px_rgba(230,57,70,0.12)]"
                      style={{
                        background: "rgba(255,253,208,0.04)",
                        border: "1px solid rgba(255,253,208,0.09)",
                        backdropFilter: "blur(12px)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-cream/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Olá Márcio, vi seu portfólio e..."
                      className="w-full px-4 py-3 rounded-xl text-cream text-sm placeholder-cream/25 outline-none transition-all duration-300 focus:border-red/40 focus:shadow-[0_0_15px_rgba(230,57,70,0.12)] resize-none"
                      style={{
                        background: "rgba(255,253,208,0.04)",
                        border: "1px solid rgba(255,253,208,0.09)",
                        backdropFilter: "blur(12px)",
                      }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileTap={reduced ? {} : { scale: 0.97 }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-red text-cream font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,70,0.45)] hover:bg-red-dark"
                  >
                    {sent ? (
                      <>✓ Abrindo cliente de email...</>
                    ) : (
                      <>Enviar Mensagem <span>↗</span></>
                    )}
                  </motion.button>
                </form>
              </FadeIn>

              {/* Quick contact */}
              <FadeIn delay={0.35}>
                <div className="flex flex-col gap-4">
                  {/* Direct email CTA */}
                  <a
                    href="mailto:marciomateus152@gmail.com"
                    className="group flex items-center gap-4 p-5 rounded-2xl glass glass-hover card-touch transition-all duration-300 hover:border-red/25 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
                  >
                    <div
                      className="w-11 h-11 rounded-xl bg-red flex items-center justify-center text-cream flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ boxShadow: "0 0 15px rgba(230,57,70,0.4)" }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream/40 text-xs uppercase tracking-wider font-semibold">Email Direto</p>
                      <p className="text-cream text-sm font-semibold mt-0.5 group-hover:text-red transition-colors duration-200">
                        marciomateus152@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Socials */}
                  <div className="flex flex-col gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-5 py-4 rounded-2xl glass glass-hover card-touch transition-all duration-300 hover:border-red/25"
                      >
                        <span className="text-cream/40 group-hover:text-red transition-colors duration-200">
                          {s.icon}
                        </span>
                        <div className="text-left">
                          <p className="text-cream/35 text-xs uppercase tracking-wider">{s.name}</p>
                          <p className="text-cream text-sm font-semibold mt-0.5 truncate max-w-[180px]">
                            {s.handle}
                          </p>
                        </div>
                        <span className="ml-auto text-cream/20 group-hover:text-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-sm">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
