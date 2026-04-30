"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: "⚡",
    title: "Desenvolvimento Web",
    desc: "Aplicações web modernas, rápidas e escaláveis com as melhores tecnologias do mercado.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: "🔌",
    title: "APIs & Microsserviços",
    desc: "Arquiteturas desacopladas, REST/GraphQL e integração contínua para sistemas robustos.",
    tags: ["Node.js", "Docker", "REST"],
  },
  {
    icon: "🎯",
    title: "Consultoria Tech",
    desc: "Análise de requisitos, definição de stack e roadmap técnico para o seu produto digital.",
    tags: ["Arquitetura", "Roadmap"],
  },
  {
    icon: "🚀",
    title: "Deploy & DevOps",
    desc: "Containerização com Docker, CI/CD e automação para entregas ágeis e confiáveis.",
    tags: ["Docker", "CI/CD", "Bash"],
  },
];

export default function Nexus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nexus" className="relative py-32 overflow-hidden" style={{ background: "#0b1525" }}>
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,253,208,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,253,208,0.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(230,57,70,0.18) 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,53,87,0.4) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-red" style={{ boxShadow: "0 0 8px rgba(230,57,70,0.6)" }} />
            <span className="text-red text-xs font-bold uppercase tracking-widest">Empresa</span>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Nexus intro */}
          <div>
            <FadeIn delay={0.1}>
              <h2
                className="font-display font-black text-cream leading-tight"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                NEXUS
                <span
                  className="text-red"
                  style={{ textShadow: "0 0 30px rgba(230,57,70,0.6)" }}
                >.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-cream/55 text-lg leading-relaxed max-w-md">
                A Nexus é uma empresa focada em desenvolver e vender{" "}
                <span className="text-cream font-semibold">serviços e soluções de software</span>{" "}
                para outras empresas — transformando necessidades reais em produtos digitais de alto impacto.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-4 text-cream/35 leading-relaxed max-w-md">
                Da arquitetura ao deploy, entregamos tecnologia com a mesma disciplina
                e rigor que guiaram a nossa trajetória profissional.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-red/30 text-red text-sm font-semibold hover:bg-red hover:text-cream transition-all duration-300 cursor-pointer group hover:shadow-[0_0_25px_rgba(230,57,70,0.4)]">
                Conhecer a Nexus
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </FadeIn>

            {/* Founder card */}
            <FadeIn delay={0.5}>
              <div
                className="mt-12 flex items-center gap-4 p-5 rounded-2xl glass glass-hover max-w-xs transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full bg-red flex items-center justify-center font-display font-black text-cream text-sm flex-shrink-0"
                  style={{ boxShadow: "0 0 20px rgba(230,57,70,0.4)" }}
                >
                  MM
                </div>
                <div>
                  <p className="text-cream font-semibold text-sm">Márcio Mateus</p>
                  <p className="text-cream/35 text-xs mt-0.5">Founder & Lead Developer</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Bento grid services */}
          <div ref={ref}>
            <div className="grid grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group p-6 rounded-3xl glass glass-hover card-touch transition-all duration-400 cursor-default hover:border-red/25 hover:shadow-[0_8px_30px_rgba(230,57,70,0.08)] ${
                    i === 0 ? "col-span-2" : ""
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    {s.icon}
                  </div>
                  <h3 className="font-display font-bold text-cream text-base mb-2 group-hover:text-red transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="text-cream/40 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full glass text-cream/45 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
