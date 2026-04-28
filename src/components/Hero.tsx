"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream"
    >
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1D3557 1px, transparent 1px), linear-gradient(90deg, #1D3557 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-red/6 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.06, 1], rotate: [0, -4, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full bg-navy/6 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Badges */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-navy/20 bg-beige text-navy/60 text-xs font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
              Disponível para oportunidades
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-navy/15 bg-beige text-navy/50 text-xs font-semibold">
              🇧🇷 Manaus · Inglês Avançado
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="font-display font-black leading-[0.88] tracking-tight text-navy"
            style={{ fontSize: "clamp(4rem, 11vw, 10rem)" }}
          >
            MÁRCIO
            <br />
            <span className="text-red">MATEUS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={item} className="mt-6 flex items-center gap-4">
            <div className="h-px w-12 bg-red rounded-full" />
            <p className="text-lg md:text-xl font-medium text-navy/60">
              Analista de Sistemas Júnior · Estudante de{" "}
              <span className="text-navy font-bold">ADS</span>
            </p>
          </motion.div>

          {/* Description — from CV Perfil */}
          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-navy/60 text-base md:text-lg leading-relaxed"
          >
            Busco oportunidades em tecnologia atuando como desenvolvedor júnior ou
            analista de sistemas, aplicando conhecimentos em desenvolvimento web, APIs
            e suporte a sistemas para contribuir com a melhoria de processos e
            crescimento das empresas. Ex-Fuzileiro Naval — disciplina e foco em cada
            linha de código.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-navy text-cream font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">Ver Projetos</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">→</span>
              <span className="absolute inset-0 bg-red translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-navy text-navy font-semibold text-sm hover:bg-navy hover:text-cream transition-all duration-300 hover:scale-[1.03]"
            >
              Minha Jornada
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
          >
            {[
              { value: "ADS", label: "Martha Falcão Wyden" },
              { value: "15+", label: "Repositórios GitHub" },
              { value: "6+", label: "Certificações" },
              { value: "B2+", label: "Inglês Avançado" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <p className="font-display font-black text-2xl md:text-3xl text-navy group-hover:text-red transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-[11px] text-navy/45 mt-1 uppercase tracking-wider leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-navy/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-navy/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-navy/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
