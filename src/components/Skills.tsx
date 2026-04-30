"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const SKILLS_ROW_1 = [
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "C#", icon: "🔵" },
  { name: "C", icon: "⚙️" },
  { name: "Bash", icon: "🖥️" },
  { name: "Docker", icon: "🐳" },
];

const SKILLS_ROW_2 = [
  { name: "Flask", icon: "🧪" },
  { name: "Express.js", icon: "🚂" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🗄️" },
  { name: "SQLite", icon: "📂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "REST API", icon: "🔗" },
  { name: "Git/GitHub", icon: "🌿" },
  { name: "Redes TCP/IP", icon: "🌐" },
  { name: "Unity", icon: "🎮" },
];

const LEARNING_NOW = [
  { name: "AWS",        icon: "☁️" },
  { name: "Kubernetes", icon: "⚙️" },
  { name: "GraphQL",    icon: "🔺" },
  { name: "Redis",      icon: "🔴" },
  { name: "Terraform",  icon: "🏗️" },
];

type SkillGroup = {
  label: string;
  gradient: string;
  glowColor: string;
  skills: { name: string; level: number }[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Frontend",
    gradient: "from-red to-red/50",
    glowColor: "rgba(230,57,70,0.3)",
    skills: [
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "React / Next.js", level: 82 },
      { name: "HTML5 & CSS3", level: 90 },
    ],
  },
  {
    label: "Backend",
    gradient: "from-blue-500 to-blue-400/50",
    glowColor: "rgba(59,130,246,0.3)",
    skills: [
      { name: "Node.js / Express", level: 78 },
      { name: "Python / Flask", level: 75 },
      { name: "APIs REST", level: 80 },
    ],
  },
  {
    label: "Dados & Infra",
    gradient: "from-amber-500 to-amber-400/50",
    glowColor: "rgba(245,158,11,0.3)",
    skills: [
      { name: "PostgreSQL / MySQL", level: 75 },
      { name: "SQLite / MongoDB", level: 70 },
      { name: "Docker / CI-CD", level: 65 },
    ],
  },
  {
    label: "Sistemas & Redes",
    gradient: "from-teal-500 to-teal-400/50",
    glowColor: "rgba(20,184,166,0.3)",
    skills: [
      { name: "C / C#", level: 70 },
      { name: "Bash / Automação", level: 72 },
      { name: "Redes LAN/WAN", level: 68 },
    ],
  },
];

function MarqueeRow({ items, reverse = false }: { items: typeof SKILLS_ROW_1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden marquee-wrapper" style={{ contain: "layout style" }}>
      <div
        className={`flex gap-3 marquee-track ${reverse ? "animate-marquee2" : "animate-marquee"}`}
      >
        {doubled.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full glass glass-hover active:bg-cream/10 transition-colors duration-150 cursor-default select-none group"
          >
            <span className="text-sm leading-none">{skill.icon}</span>
            <span className="text-xs font-semibold text-cream/60 whitespace-nowrap group-hover:text-cream transition-colors duration-150">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimatedBar({
  level,
  gradient,
  glowColor,
}: {
  level: number;
  gradient: string;
  glowColor: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,253,208,0.07)" }}>
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{ boxShadow: `0 0 8px ${glowColor}` }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden" style={{ background: "#0b1525" }}>
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-red" style={{ boxShadow: "0 0 8px rgba(230,57,70,0.6)" }} />
            <span className="text-red text-[11px] font-bold uppercase tracking-widest">Tech Stack</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2
            className="font-display font-black text-cream leading-tight mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Tecnologias que
            <br />
            <span className="gradient-text-red">domino.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="text-cream/45 text-sm sm:text-base max-w-lg mb-12">
            Stack construída em ADS, cursos DankiCode e projetos reais — do
            frontend ao infra.
          </p>
        </FadeIn>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-3 mb-16">
        <MarqueeRow items={SKILLS_ROW_1} />
        <MarqueeRow items={SKILLS_ROW_2} reverse />
      </div>

      {/* Skill groups */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <FadeIn>
          <h3 className="font-display font-bold text-cream text-lg mb-6">
            Proficiência por Área
          </h3>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {SKILL_GROUPS.map((group, gi) => (
            <FadeIn key={group.label} delay={gi * 0.07}>
              <div className="p-5 rounded-2xl glass glass-hover group card-touch transition-all duration-300 hover:border-cream/18">
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${group.gradient}`}
                    style={{ boxShadow: `0 0 6px ${group.glowColor}` }}
                  />
                  <span className="text-[10px] font-bold text-cream/40 uppercase tracking-widest">
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-semibold text-cream/80">
                          {skill.name}
                        </span>
                        <span
                          className="text-xs font-bold"
                          style={{ color: `rgba(230,57,70,0.8)` }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <AnimatedBar
                        level={skill.level}
                        gradient={group.gradient}
                        glowColor={group.glowColor}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Language */}
        <FadeIn delay={0.15}>
          <div
            className="flex items-center gap-4 p-4 rounded-2xl glass glass-hover max-w-sm mb-8 card-touch transition-all duration-300"
          >
            <span className="text-xl">🌍</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-cream text-sm">Inglês — Avançado (B2+)</p>
              <p className="text-cream/40 text-xs mt-0.5">
                Leitura técnica, documentação e comunicação
              </p>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-red"
                  style={{ boxShadow: "0 0 5px rgba(230,57,70,0.6)" }}
                />
              ))}
              <div className="w-2.5 h-2.5 rounded-full bg-cream/15" />
            </div>
          </div>
        </FadeIn>

        {/* Currently learning */}
        <FadeIn delay={0.2}>
          <div className="p-5 rounded-2xl glass glass-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest"
                style={{ color: "#e63946" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-green-400"
                  style={{ boxShadow: "0 0 5px rgba(74,222,128,0.8)" }}
                />
                Aprendendo Agora
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {LEARNING_NOW.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full glass text-cream/60 text-xs font-semibold hover:text-cream hover:border-red/30 transition-all duration-200 cursor-default"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
