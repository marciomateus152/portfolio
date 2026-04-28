"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        // Faster stagger on all devices; skip entirely if reduced-motion
        staggerChildren: reduced ? 0 : 0.07,
        delayChildren: reduced ? 0 : 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-cream"
    >
      {/* Grid — lightweight, no blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1D3557 1px,transparent 1px),linear-gradient(90deg,#1D3557 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blobs — hidden on mobile (blur-3xl kills GPU on small devices) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-red/6 blur-3xl hidden md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full bg-navy/6 blur-3xl hidden md:block"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">

          {/* ── Left: text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 min-w-0"
          >
            {/* Badges */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-navy/20 bg-beige text-navy/60 text-[11px] font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
                Disponível para oportunidades
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-navy/15 bg-beige text-navy/50 text-[11px] font-semibold">
                🇧🇷 Manaus · B2+ English
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display font-black leading-[0.88] tracking-tight text-navy"
              style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
            >
              MÁRCIO
              <br />
              <span className="text-red">MATEUS</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div variants={item} className="mt-5 flex items-center gap-3">
              <div className="h-px w-10 bg-red rounded-full flex-shrink-0" />
              <p className="text-base md:text-lg font-medium text-navy/60">
                Analista de Sistemas Júnior ·{" "}
                <span className="text-navy font-bold">ADS</span>
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-navy/60 text-sm md:text-base leading-relaxed"
            >
              Busco oportunidades em tecnologia — desenvolvedor júnior ou
              analista de sistemas. Aplicando conhecimentos em web, APIs e sistemas.
              Ex-Fuzileiro Naval: disciplina em cada linha de código.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-cream font-semibold text-sm overflow-hidden transition-colors duration-300 active:scale-95"
              >
                <span className="relative z-10">Ver Projetos</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">→</span>
                {/* Fill animation — desktop only via hover */}
                <span className="absolute inset-0 bg-red translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 hidden sm:block ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-navy text-navy font-semibold text-sm hover:bg-navy hover:text-cream transition-colors duration-200 active:scale-95"
              >
                Minha Jornada
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg"
            >
              {[
                { value: "ADS", label: "Martha Falcão Wyden" },
                { value: "15+", label: "Repos GitHub" },
                { value: "6+", label: "Certificações" },
                { value: "B2+", label: "Inglês" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <p className="font-display font-black text-2xl md:text-3xl text-navy group-hover:text-red transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-navy/45 mt-0.5 uppercase tracking-wider leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: photo ── */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.35 }}
            className="flex-shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating ring — desktop only (GPU-expensive) */}
              <motion.div
                animate={reduced ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                aria-hidden
                className="absolute -inset-3 rounded-full hidden md:block gpu"
                style={{
                  background:
                    "conic-gradient(from 0deg,#E63946,#1D3557,#FFFDD0,#E63946)",
                  opacity: 0.2,
                  filter: "blur(4px)",
                }}
              />

              {/* Static ring — always visible, cheap */}
              <div className="absolute -inset-1.5 rounded-full border-2 border-red/25" />

              {/* Photo */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cream shadow-xl shadow-navy/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portfolio/profile.jpg"
                  alt="Márcio Mateus"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-top"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {/* Floating badges — desktop only to avoid layout issues on small screens */}
              <motion.div
                animate={reduced ? {} : { y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-navy text-cream text-xs font-bold shadow-lg whitespace-nowrap gpu"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to work
              </motion.div>

              <motion.div
                animate={reduced ? {} : { y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-3 -right-4 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red text-cream text-xs font-bold shadow-lg gpu"
              >
                📍 Manaus
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] uppercase tracking-widest text-navy/35">Scroll</span>
        <motion.div
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border-2 border-navy/15 flex items-start justify-center pt-1 gpu"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-navy/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}
