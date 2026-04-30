"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const education = [
  {
    period: "2025 — 2027",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Martha Falcão Wyden",
    detail: "Previsão de conclusão: Novembro de 2027.",
    color: "bg-red",
    glow: "rgba(230,57,70,0.3)",
  },
  {
    period: "2019 — 2020",
    title: "Ensino Médio Técnico em Informática",
    institution: "Fundação Mathias Machline · Manaus",
    detail:
      "Foco em manutenção de computadores, redes LAN/WAN, lógica de programação e banco de dados.",
    color: "bg-navy",
    glow: "rgba(29,53,87,0.5)",
  },
];

const certifications = [
  { year: "2026",      title: "Git e Controle de Versão",          source: "YouTube",   tags: ["Git", "GitHub"] },
  { year: "2025",      title: "Frontend Developer",                 source: "DankiCode",  tags: ["React", "TypeScript", "HTML", "CSS"] },
  { year: "2025",      title: "Backend Developer",                  source: "DankiCode",  tags: ["Node.js", "APIs REST"] },
  { year: "2025",      title: "Banco de Dados SQL & MySQL",         source: "DankiCode",  tags: ["SQL", "MySQL", "Modelagem"] },
  { year: "2025",      title: "Python para Iniciantes",             source: "YouTube",   tags: ["Python", "Automação"] },
  { year: "Presente",  title: "Automação com Python + Bash",        source: "DankiCode",  tags: ["Python", "Bash", "Scripts"] },
];

const experience = [
  {
    period: "Fev 2026",
    title: "Automação de Tarefas com Python",
    type: "Projeto Pessoal",
    bullets: [
      "Scripts em Python e Bash para automação de tarefas repetitivas",
      "Manipulação de arquivos, extração e formatação de dados",
      "Geração de relatórios automáticos",
    ],
    tags: ["Python", "Bash"],
  },
  {
    period: "Jan 2026",
    title: "Desenvolvedor Web Fullstack",
    type: "Portfólio Pessoal",
    bullets: [
      "Site responsivo com HTML, CSS e JavaScript",
      "Formulários integrados a APIs REST",
      "Controle de versão com Git/GitHub e deploy online",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    period: "Nov 2025",
    title: "Mini Sistema de Gestão de Tarefas",
    type: "Projeto de Aprendizado",
    bullets: [
      "To-Do List com front-end interativo e backend em Python",
      "Banco de dados SQLite com CRUD completo",
      "Lógica de programação e manipulação de dados",
    ],
    tags: ["Python", "SQLite", "JavaScript"],
  },
  {
    period: "Out 2025",
    title: "Sistema de Gerenciamento de Estoque",
    type: "Projeto Acadêmico",
    bullets: [
      "Aplicação web backend com Python (Flask) e MySQL",
      "Cadastro de produtos, controle de estoque e relatórios",
      "Autenticação básica e front-end responsivo",
    ],
    tags: ["Python", "Flask", "MySQL"],
  },
];

function TimelineItem({ exp, i }: { exp: (typeof experience)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-10 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, rgba(230,57,70,0.4), rgba(230,57,70,0.05))" }} />

      {/* Dot */}
      <div
        className="absolute -left-[5px] top-0.5 w-2.5 h-2.5 rounded-full border border-red bg-[#0b1525] transition-all duration-300 group-hover:bg-red group-hover:shadow-[0_0_12px_rgba(230,57,70,0.8)]"
      />

      <span className="text-xs text-red font-bold uppercase tracking-widest">{exp.period}</span>
      <h3 className="font-display font-bold text-cream text-lg mt-1 leading-snug group-hover:text-red transition-colors duration-250">
        {exp.title}
      </h3>
      <p className="text-cream/35 text-sm mb-3">{exp.type}</p>
      <ul className="space-y-1.5">
        {exp.bullets.map((b, j) => (
          <li key={j} className="flex items-start gap-2 text-cream/50 text-sm">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-red flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-3">
        {exp.tags.map((t) => (
          <span
            key={t}
            className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold glass text-cream/60"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden" style={{ background: "#0e1e32" }}>
      {/* Subtle dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fffdd0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-red" style={{ boxShadow: "0 0 8px rgba(230,57,70,0.6)" }} />
            <span className="text-red text-xs font-bold uppercase tracking-widest">Jornada</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-display font-black text-cream leading-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            De Fuzileiro Naval
            <br />
            <span className="gradient-text-red">a Dev Full-Stack.</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Experience timeline */}
          <div>
            <FadeIn>
              <h3 className="font-display font-bold text-cream text-xl mb-8 flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-full bg-red flex items-center justify-center text-cream text-xs"
                  style={{ boxShadow: "0 0 15px rgba(230,57,70,0.5)" }}
                >✦</span>
                Experiência
              </h3>
            </FadeIn>
            <div>
              {experience.map((exp, i) => (
                <TimelineItem key={exp.title} exp={exp} i={i} />
              ))}
            </div>
          </div>

          {/* Right — Education + Certs + Language */}
          <div className="flex flex-col gap-10">
            {/* Education */}
            <div>
              <FadeIn>
                <h3 className="font-display font-bold text-cream text-xl mb-6 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full glass flex items-center justify-center text-cream text-sm">🎓</span>
                  Formação
                </h3>
              </FadeIn>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <FadeIn key={edu.title} delay={i * 0.1}>
                    <div
                      className="p-6 rounded-2xl glass glass-hover group card-touch transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-2 h-2 rounded-full ${edu.color} flex-shrink-0 mt-2`}
                          style={{ boxShadow: `0 0 8px ${edu.glow}` }}
                        />
                        <div>
                          <span className="text-xs text-cream/35 font-semibold uppercase tracking-wider">
                            {edu.period}
                          </span>
                          <h4 className="font-display font-bold text-cream text-base mt-1 group-hover:text-red transition-colors duration-200">
                            {edu.title}
                          </h4>
                          <p className="text-cream/45 text-sm mt-0.5">{edu.institution}</p>
                          <p className="text-cream/30 text-xs mt-2 leading-relaxed">{edu.detail}</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <FadeIn>
                <h3 className="font-display font-bold text-cream text-xl mb-6 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full glass flex items-center justify-center text-sm">📜</span>
                  Cursos &amp; Certificações
                </h3>
              </FadeIn>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert, i) => (
                  <FadeIn key={cert.title} delay={i * 0.05}>
                    <div className="p-4 rounded-xl glass glass-hover group card-touch transition-all duration-300 hover:border-red/25">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest"
                          style={{ color: "#e63946", textShadow: "0 0 8px rgba(230,57,70,0.4)" }}
                        >
                          {cert.year}
                        </span>
                        <span className="text-[10px] text-cream/30">{cert.source}</span>
                      </div>
                      <p className="text-cream text-sm font-semibold leading-tight group-hover:text-red transition-colors duration-200">
                        {cert.title}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {cert.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-2 py-0.5 rounded-full glass text-cream/40"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Language badge */}
            <FadeIn>
              <div
                className="flex items-center gap-4 p-5 rounded-2xl glass glass-hover transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-full glass flex items-center justify-center text-xl flex-shrink-0">
                  🌍
                </div>
                <div className="flex-1">
                  <p className="font-bold text-cream text-sm">Inglês — Avançado (B2+)</p>
                  <p className="text-cream/40 text-xs mt-0.5">
                    Comunicação técnica, documentação e colaboração em projetos internacionais.
                  </p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 rounded-full bg-red"
                      style={{ boxShadow: "0 0 6px rgba(230,57,70,0.6)" }}
                    />
                  ))}
                  <div className="w-2.5 h-2.5 rounded-full bg-cream/15" />
                </div>
              </div>
            </FadeIn>

            {/* Soft skills — military advantage */}
            <FadeIn delay={0.1}>
              <div className="p-5 rounded-2xl glass glass-hover group transition-all duration-300 hover:border-red/25">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red text-xs font-bold uppercase tracking-widest">Diferenciais</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "⚓ Disciplina Militar",
                    "🎯 Foco em Resultados",
                    "🤝 Trabalho em Equipe",
                    "⚡ Alta Adaptabilidade",
                    "🧠 Aprendizado Rápido",
                    "📐 Atenção ao Detalhe",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-full glass text-cream/60 text-xs font-medium hover:text-cream hover:border-red/30 transition-all duration-200 cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
