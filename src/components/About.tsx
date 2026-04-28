"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const education = [
  {
    period: "2023 — 2027",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Martha Falcão Wyden",
    detail: "Previsão de conclusão: Novembro de 2027.",
    color: "bg-red",
  },
  {
    period: "2019 — 2020",
    title: "Ensino Médio Técnico em Informática",
    institution: "Fundação Mathias Machline · Manaus",
    detail:
      "Foco em manutenção de computadores, redes LAN/WAN, lógica de programação e banco de dados.",
    color: "bg-navy",
  },
];

const certifications = [
  { year: "2026", title: "Git e Controle de Versão", source: "YouTube", tags: ["Git", "GitHub"] },
  { year: "2025", title: "Frontend Developer", source: "DankiCode", tags: ["React", "TypeScript", "HTML", "CSS"] },
  { year: "2025", title: "Backend Developer", source: "DankiCode", tags: ["Node.js", "APIs REST"] },
  { year: "2025", title: "Banco de Dados SQL & MySQL", source: "DankiCode", tags: ["SQL", "MySQL", "Modelagem"] },
  { year: "2025", title: "Python para Iniciantes", source: "YouTube", tags: ["Python", "Automação"] },
  { year: "Presente", title: "Automação com Python + Bash", source: "DankiCode", tags: ["Python", "Bash", "Scripts"] },
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
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-10 border-l-2 border-navy/12 last:border-transparent group"
    >
      {/* Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-navy bg-cream group-hover:bg-red group-hover:border-red transition-all duration-300" />

      <span className="text-xs text-red font-bold uppercase tracking-widest">{exp.period}</span>
      <h3 className="font-display font-bold text-navy text-lg mt-1 leading-snug group-hover:text-red transition-colors duration-200">
        {exp.title}
      </h3>
      <p className="text-navy/50 text-sm mb-3">{exp.type}</p>
      <ul className="space-y-1.5">
        {exp.bullets.map((b, j) => (
          <li key={j} className="flex items-start gap-2 text-navy/60 text-sm">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-red flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-3">
        {exp.tags.map((t) => (
          <span
            key={t}
            className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-beige border border-navy/10 text-navy/60"
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
    <section id="sobre" className="py-32 bg-beige/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-red" />
            <span className="text-red text-xs font-bold uppercase tracking-widest">Jornada</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-display font-black text-navy leading-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            De Fuzileiro Naval
            <br />
            <span className="text-red">a Dev Full-Stack.</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Experience timeline */}
          <div>
            <FadeIn>
              <h3 className="font-display font-bold text-navy text-xl mb-8 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red flex items-center justify-center text-cream text-xs">✦</span>
                Experiência
              </h3>
            </FadeIn>
            <div>
              {experience.map((exp, i) => (
                <TimelineItem key={exp.title} exp={exp} i={i} />
              ))}
            </div>
          </div>

          {/* Right — Education + Certs */}
          <div className="flex flex-col gap-12">
            {/* Education */}
            <div>
              <FadeIn>
                <h3 className="font-display font-bold text-navy text-xl mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-navy flex items-center justify-center text-cream text-xs">🎓</span>
                  Formação
                </h3>
              </FadeIn>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <FadeIn key={edu.title} delay={i * 0.1}>
                    <div className="p-6 rounded-2xl bg-cream border border-navy/8 hover:border-navy/20 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className={`w-2 h-2 rounded-full ${edu.color} flex-shrink-0 mt-2`} />
                        <div>
                          <span className="text-xs text-navy/40 font-semibold uppercase tracking-wider">
                            {edu.period}
                          </span>
                          <h4 className="font-display font-bold text-navy text-base mt-1 group-hover:text-red transition-colors duration-200">
                            {edu.title}
                          </h4>
                          <p className="text-navy/50 text-sm mt-0.5">{edu.institution}</p>
                          <p className="text-navy/40 text-xs mt-2 leading-relaxed">{edu.detail}</p>
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
                <h3 className="font-display font-bold text-navy text-xl mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-red/15 flex items-center justify-center text-red text-xs">📜</span>
                  Cursos &amp; Certificações
                </h3>
              </FadeIn>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert, i) => (
                  <FadeIn key={cert.title} delay={i * 0.05}>
                    <div className="p-4 rounded-xl bg-cream border border-navy/8 hover:border-red/30 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-red uppercase tracking-widest">
                          {cert.year}
                        </span>
                        <span className="text-[10px] text-navy/35">{cert.source}</span>
                      </div>
                      <p className="text-navy text-sm font-semibold leading-tight group-hover:text-red transition-colors duration-200">
                        {cert.title}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {cert.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-beige text-navy/50 border border-navy/8"
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
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-navy/5 border border-navy/8">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-xl flex-shrink-0">
                  🌍
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">Inglês — Avançado (B2+)</p>
                  <p className="text-navy/45 text-xs mt-0.5">
                    Comunicação técnica, documentação e colaboração em projetos internacionais.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
