"use client";

import { motion, useReducedMotion } from "framer-motion";

const TECH_PILLS = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Docker",
];

export default function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : 0.07,
        delayChildren: reduced ? 0 : 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden hero-bg"
    >
      {/* Animated dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,253,208,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full hidden md:block animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(230,57,70,0.25) 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-32 w-[600px] h-[600px] rounded-full hidden md:block"
        style={{ background: "radial-gradient(circle, rgba(29,53,87,0.6) 0%, transparent 70%)" }}
      />
      {/* Mobile ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(230,57,70,0.12) 0%, transparent 55%)" }}
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
            {/* Status badges */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-2 mb-7">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cream/80 text-[11px] font-semibold uppercase tracking-wider"
                style={{ boxShadow: "0 0 20px rgba(74,222,128,0.08)" }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-green-400"
                  style={{ boxShadow: "0 0 8px rgba(74,222,128,0.9)", animation: "pulse-dot 2s ease-in-out infinite" }}
                />
                Disponível para oportunidades
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass text-cream/55 text-[11px] font-semibold">
                🇧🇷 Manaus · B2+ English
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display font-black leading-[0.88] tracking-tight text-cream"
              style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
            >
              MÁRCIO
              <br />
              <span className="gradient-text-red">MATEUS</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div variants={item} className="mt-5 flex items-center gap-3">
              <div
                className="h-px w-10 rounded-full flex-shrink-0"
                style={{ background: "#e63946", boxShadow: "0 0 10px rgba(230,57,70,0.7)" }}
              />
              <p className="text-base md:text-lg font-medium text-cream/55">
                Analista de Sistemas Júnior ·{" "}
                <span className="text-cream font-bold">ADS</span>
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-cream/45 text-sm md:text-base leading-relaxed"
            >
              Busco oportunidades em tecnologia — desenvolvedor júnior ou
              analista de sistemas. Aplicando conhecimentos em web, APIs e sistemas.
              Ex-Fuzileiro Naval: disciplina em cada linha de código.
            </motion.p>

            {/* Tech stack pills */}
            <motion.div variants={item} className="mt-5 flex flex-wrap gap-2">
              {TECH_PILLS.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-[11px] font-bold text-cream/50 glass transition-all duration-200 hover:text-cream hover:border-red/30"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-red text-cream font-semibold text-sm overflow-hidden transition-all duration-300 active:scale-95"
                style={{ boxShadow: "0 0 25px rgba(230,57,70,0.35)" }}
              >
                <span className="relative z-10">Ver Projetos</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-dark to-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-cream font-semibold text-sm hover:border-red/30 transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(255,253,208,0.06)]"
              >
                Minha Jornada
              </a>
              <a
                href="https://github.com/marciomateus152"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-cream/60 font-semibold text-sm hover:text-cream hover:border-cream/20 transition-all duration-300 active:scale-95"
              >
                GitHub ↗
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg"
            >
              {[
                { value: "ADS",  label: "Martha Falcão Wyden" },
                { value: "15+", label: "Repos GitHub" },
                { value: "6+",  label: "Certificações" },
                { value: "B2+", label: "Inglês" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group glass glass-hover rounded-xl p-3 card-touch cursor-default"
                >
                  <p className="font-display font-black text-2xl md:text-3xl text-cream group-hover:text-red transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-cream/35 mt-0.5 uppercase tracking-wider leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: photo ── */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.4 }}
            className="flex-shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer spinning ring */}
              {!reduced && (
                <div
                  className="absolute -inset-6 rounded-full hidden md:block gpu animate-spin-slow opacity-20"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, #E63946, transparent, #FFFDD0, transparent)",
                    filter: "blur(2px)",
                  }}
                />
              )}

              {/* Inner spinning ring */}
              {!reduced && (
                <div
                  className="absolute -inset-3 rounded-full hidden md:block gpu animate-spin-rev opacity-30"
                  style={{
                    background:
                      "conic-gradient(from 180deg, #E63946, #1D3557, #FFFDD0, #E63946)",
                    filter: "blur(5px)",
                  }}
                />
              )}

              {/* Static glow ring */}
              <div
                className="absolute -inset-1.5 rounded-full border animate-border-glow"
              />

              {/* Photo */}
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-cream/10"
                style={{
                  boxShadow:
                    "0 0 80px rgba(230,57,70,0.2), 0 0 40px rgba(230,57,70,0.1), 0 30px 60px rgba(0,0,0,0.6)",
                }}
              >
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

              {/* Open to work badge */}
              <motion.div
                animate={reduced ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full glass text-cream text-xs font-bold shadow-lg whitespace-nowrap gpu"
                style={{ boxShadow: "0 0 20px rgba(74,222,128,0.2)", borderColor: "rgba(74,222,128,0.2)" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 6px rgba(74,222,128,0.9)" }} />
                Open to work
              </motion.div>

              {/* Location badge */}
              <motion.div
                animate={reduced ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-3 -right-4 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red text-cream text-xs font-bold shadow-lg gpu"
                style={{ boxShadow: "0 0 20px rgba(230,57,70,0.5)" }}
              >
                📍 Manaus
              </motion.div>

              {/* Full-Stack badge */}
              <motion.div
                animate={reduced ? {} : { y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 -left-8 hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-cream/80 text-xs font-bold gpu"
              >
                ⚡ Full-Stack
              </motion.div>

              {/* Ex-Navy badge */}
              <motion.div
                animate={reduced ? {} : { y: [0, 5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-16 -right-10 hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-cream/70 text-xs font-bold gpu"
              >
                ⚓ Ex-Navy
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] uppercase tracking-widest text-cream/25">Scroll</span>
        <motion.div
          animate={reduced ? {} : { y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-cream/15 flex items-start justify-center pt-1 gpu"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-red/60" style={{ boxShadow: "0 0 4px rgba(230,57,70,0.8)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
