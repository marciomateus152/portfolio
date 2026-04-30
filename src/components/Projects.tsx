"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

type Project = {
  name: string;
  description: string;
  techs: string[];
  href: string;
  highlight?: boolean;
  icon: string;
  category: "Web" | "Backend" | "Scripts" | "Sistemas" | "Game";
};

const projects: Project[] = [
  {
    name: "Visão Financeira",
    description:
      "Dashboard financeiro dinâmico com CRUD de transações em tempo real, gráficos interativos e exportação para Excel.",
    techs: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    href: "https://github.com/marciomateus152/Visao_Financeira",
    highlight: true,
    icon: "📊",
    category: "Web",
  },
  {
    name: "Gestão de Finanças",
    description:
      "Aplicação web completa para gestão de finanças pessoais com Next.js, TypeScript e banco de dados relacional.",
    techs: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "https://github.com/marciomateus152/gestao_de_financas",
    highlight: true,
    icon: "💰",
    category: "Web",
  },
  {
    name: "Microserviço de Autenticação",
    description:
      "Arquitetura de microsserviço de autenticação com JWT, containerização Docker e testes integrados.",
    techs: ["Node.js", "Express.js", "Docker", "JWT"],
    href: "https://github.com/marciomateus152/microservico_autenticacao",
    icon: "🔐",
    category: "Backend",
  },
  {
    name: "Sistema de Estoque",
    description:
      "Aplicação web backend com Python (Flask) e MySQL. Cadastro de produtos, controle de estoque, relatórios e autenticação básica.",
    techs: ["Python", "Flask", "MySQL", "HTML"],
    href: "https://github.com/marciomateus152/Sistema_de_Estoque",
    icon: "📦",
    category: "Backend",
  },
  {
    name: "Mini Sistema de Tarefas",
    description:
      "To-Do List com front-end interativo e backend em Python. Banco de dados SQLite com CRUD completo.",
    techs: ["Python", "SQLite", "JavaScript", "CSS"],
    href: "https://github.com/marciomateus152/mini-sistema-tarefas",
    icon: "✅",
    category: "Web",
  },
  {
    name: "Automação com Python+Bash",
    description:
      "Scripts para automação de tarefas repetitivas, manipulação de arquivos, extração de dados e geração de relatórios.",
    techs: ["Python", "Bash", "pandas"],
    href: "https://github.com/marciomateus152/controle-financeiro",
    icon: "⚡",
    category: "Scripts",
  },
  {
    name: "SO em C",
    description:
      "Implementação de um sistema operacional em linguagem C — gerenciamento de processos e memória.",
    techs: ["C", "Unix/POSIX"],
    href: "https://github.com/marciomateus152/SO_C",
    icon: "🖥️",
    category: "Sistemas",
  },
  {
    name: "Site RPG",
    description:
      "Site temático de RPG construído com HTML, CSS e JavaScript puro — foco em DOM e experiência visual.",
    techs: ["JavaScript", "HTML5", "CSS3"],
    href: "https://github.com/marciomateus152/Site_Rpg",
    icon: "⚔️",
    category: "Web",
  },
  {
    name: "Jogo Bolinha Unity",
    description:
      "Jogo 3D desenvolvido com a engine Unity e C#, explorando física e colisões em tempo real.",
    techs: ["C#", "Unity"],
    href: "https://github.com/marciomateus152/Jogo_Bolinha_Unity",
    icon: "🎮",
    category: "Game",
  },
];

const techColors: Record<string, string> = {
  JavaScript:   "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  TypeScript:   "bg-blue-500/15 text-blue-300 border-blue-500/20",
  React:        "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  "Next.js":    "bg-white/10 text-white/70 border-white/15",
  "Node.js":    "bg-green-500/15 text-green-300 border-green-500/20",
  Python:       "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
  "C#":         "bg-purple-500/15 text-purple-300 border-purple-500/20",
  C:            "bg-orange-500/15 text-orange-300 border-orange-500/20",
  Docker:       "bg-sky-500/15 text-sky-300 border-sky-500/20",
  PostgreSQL:   "bg-blue-600/15 text-blue-300 border-blue-600/20",
  Unity:        "bg-white/10 text-white/60 border-white/15",
  Flask:        "bg-teal-500/15 text-teal-300 border-teal-500/20",
  MySQL:        "bg-orange-600/15 text-orange-300 border-orange-500/20",
  SQLite:       "bg-slate-500/15 text-slate-300 border-slate-500/20",
  Bash:         "bg-zinc-500/15 text-zinc-300 border-zinc-500/20",
  pandas:       "bg-blue-400/15 text-blue-300 border-blue-400/20",
  "Express.js": "bg-white/8 text-white/60 border-white/12",
  JWT:          "bg-red/15 text-red-light border-red/20",
  HTML:         "bg-orange-500/15 text-orange-300 border-orange-500/20",
  HTML5:        "bg-orange-500/15 text-orange-300 border-orange-500/20",
  CSS:          "bg-blue-400/15 text-blue-300 border-blue-400/20",
  CSS3:         "bg-blue-400/15 text-blue-300 border-blue-400/20",
  "Unix/POSIX": "bg-zinc-500/15 text-zinc-300 border-zinc-500/20",
};

const categoryStyle: Record<string, string> = {
  Web:      "text-red border-red/30",
  Backend:  "text-sky-300 border-sky-300/30",
  Scripts:  "text-yellow-300 border-yellow-300/30",
  Sistemas: "text-orange-300 border-orange-300/30",
  Game:     "text-purple-300 border-purple-300/30",
};

function ProjectCard({ project, i }: { project: Project; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col p-7 rounded-3xl border transition-all duration-400 cursor-pointer overflow-hidden card-touch ${
        project.highlight
          ? "border-red/20 hover:border-red/50"
          : "glass glass-hover hover:border-cream/18"
      }`}
      style={
        project.highlight
          ? {
              background: "linear-gradient(135deg, rgba(29,53,87,0.9) 0%, rgba(18,34,58,0.95) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,253,208,0.06)",
            }
          : undefined
      }
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {/* Hover glow overlay */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl pointer-events-none ${
          project.highlight
            ? "shadow-[0_0_50px_rgba(230,57,70,0.18),inset_0_0_30px_rgba(230,57,70,0.04)]"
            : "shadow-[0_0_30px_rgba(255,253,208,0.05),inset_0_0_20px_rgba(255,253,208,0.02)]"
        }`}
      />

      {/* Highlight top border glow */}
      {project.highlight && (
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-60"
          style={{ background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.6), transparent)" }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon + category + link */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
              {project.icon}
            </div>
            <span
              className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                project.highlight ? "text-cream/40 border-white/10" : categoryStyle[project.category]
              }`}
            >
              {project.category}
            </span>
          </div>
          <span
            className={`text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ${
              project.highlight ? "text-red" : "text-cream/40"
            }`}
          >
            ↗
          </span>
        </div>

        {/* Name */}
        <h3
          className={`font-display font-bold text-lg mb-2.5 leading-tight group-hover:text-red transition-colors duration-250 ${
            project.highlight ? "text-cream" : "text-cream"
          }`}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed flex-1 ${
            project.highlight ? "text-cream/45" : "text-cream/45"
          }`}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                techColors[tech] ?? "bg-white/8 text-cream/50 border-white/12"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="relative py-32 overflow-hidden" style={{ background: "#0e1e32" }}>
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,253,208,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,253,208,0.1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-red" style={{ boxShadow: "0 0 8px rgba(230,57,70,0.6)" }} />
            <span className="text-red text-xs font-bold uppercase tracking-widest">Portfólio</span>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <FadeIn>
            <h2
              className="font-display font-black text-cream leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              O que já
              <br />
              <span className="gradient-text-red">construí.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <a
              href="https://github.com/marciomateus152"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cream/40 hover:text-cream transition-colors duration-200"
            >
              Ver todos no GitHub
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
