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
  JavaScript: "bg-yellow-100 text-yellow-800 border-yellow-200",
  TypeScript: "bg-blue-100 text-blue-800 border-blue-200",
  React: "bg-cyan-100 text-cyan-800 border-cyan-200",
  "Next.js": "bg-slate-100 text-slate-800 border-slate-200",
  "Node.js": "bg-green-100 text-green-800 border-green-200",
  Python: "bg-indigo-100 text-indigo-800 border-indigo-200",
  "C#": "bg-purple-100 text-purple-800 border-purple-200",
  C: "bg-orange-100 text-orange-800 border-orange-200",
  Docker: "bg-sky-100 text-sky-800 border-sky-200",
  PostgreSQL: "bg-blue-100 text-blue-900 border-blue-200",
  Unity: "bg-gray-100 text-gray-800 border-gray-200",
  Flask: "bg-teal-100 text-teal-800 border-teal-200",
  MySQL: "bg-orange-100 text-orange-900 border-orange-200",
  SQLite: "bg-slate-100 text-slate-700 border-slate-200",
  Bash: "bg-zinc-100 text-zinc-800 border-zinc-200",
  pandas: "bg-blue-50 text-blue-700 border-blue-100",
};

const categoryColor: Record<string, string> = {
  Web: "text-red border-red/30",
  Backend: "text-navy border-navy/30",
  Scripts: "text-amber-700 border-amber-300",
  Sistemas: "text-orange-700 border-orange-300",
  Game: "text-purple-700 border-purple-300",
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
      className={`group relative flex flex-col p-7 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden ${
        project.highlight
          ? "bg-navy border-navy hover:border-red"
          : "bg-beige/50 border-navy/10 hover:border-navy/25"
      }`}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl ${
          project.highlight
            ? "shadow-[0_0_40px_rgba(230,57,70,0.25)]"
            : "shadow-[0_0_30px_rgba(29,53,87,0.1)]"
        }`}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon + category + external link */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <span
              className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                project.highlight
                  ? "text-cream/40 border-white/10"
                  : categoryColor[project.category]
              }`}
            >
              {project.category}
            </span>
          </div>
          <span
            className={`text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ${
              project.highlight ? "text-red" : "text-navy/40"
            }`}
          >
            ↗
          </span>
        </div>

        {/* Name */}
        <h3
          className={`font-display font-bold text-lg mb-2.5 leading-tight group-hover:text-red transition-colors duration-200 ${
            project.highlight ? "text-cream" : "text-navy"
          }`}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed flex-1 ${
            project.highlight ? "text-cream/50" : "text-navy/55"
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
                project.highlight
                  ? "bg-white/10 text-cream/70 border-white/15"
                  : (techColors[tech] ?? "bg-beige text-navy/60 border-navy/10")
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
    <section id="projetos" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-red" />
            <span className="text-red text-xs font-bold uppercase tracking-widest">Portfólio</span>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <FadeIn>
            <h2
              className="font-display font-black text-navy leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              O que já
              <br />
              <span className="text-red">construí.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <a
              href="https://github.com/marciomateus152"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-navy/55 hover:text-navy transition-colors duration-200"
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
