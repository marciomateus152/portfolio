"use client";

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

type SkillGroup = {
  label: string;
  color: string;
  skills: { name: string; level: number }[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Frontend",
    color: "from-red to-red/60",
    skills: [
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "React / Next.js", level: 82 },
      { name: "HTML5 & CSS3", level: 90 },
    ],
  },
  {
    label: "Backend",
    color: "from-navy to-navy/60",
    skills: [
      { name: "Node.js / Express", level: 78 },
      { name: "Python / Flask", level: 75 },
      { name: "APIs REST", level: 80 },
    ],
  },
  {
    label: "Dados & Infra",
    color: "from-amber-600 to-amber-400",
    skills: [
      { name: "PostgreSQL / MySQL", level: 75 },
      { name: "SQLite / MongoDB", level: 70 },
      { name: "Docker / CI-CD", level: 65 },
    ],
  },
  {
    label: "Sistemas & Redes",
    color: "from-teal-700 to-teal-500",
    skills: [
      { name: "C / C#", level: 70 },
      { name: "Bash / Automação", level: 72 },
      { name: "Redes LAN/WAN", level: 68 },
    ],
  },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof SKILLS_ROW_1;
  reverse?: boolean;
}) {
  // Double the list so the loop is seamless
  const doubled = [...items, ...items];
  return (
    <div
      className="relative flex overflow-hidden marquee-wrapper"
      style={{ contain: "layout style" }}
    >
      <div
        className={`flex gap-3 marquee-track ${
          reverse ? "animate-marquee2" : "animate-marquee"
        }`}
      >
        {doubled.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full border border-navy/12 bg-beige/70
                       active:bg-navy active:text-cream transition-colors duration-150 cursor-default select-none"
          >
            <span className="text-sm leading-none">{skill.icon}</span>
            <span className="text-xs font-semibold text-navy/80 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-beige/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-red" />
            <span className="text-red text-[11px] font-bold uppercase tracking-widest">
              Tech Stack
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2
            className="font-display font-black text-navy leading-tight mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Tecnologias que
            <br />
            <span className="text-red">domino.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="text-navy/55 text-sm sm:text-base max-w-lg mb-12">
            Stack construída em ADS, cursos DankiCode e projetos reais — do
            frontend ao infra.
          </p>
        </FadeIn>
      </div>

      {/* Marquee rows — GPU-accelerated */}
      <div className="flex flex-col gap-3 mb-16">
        <MarqueeRow items={SKILLS_ROW_1} />
        <MarqueeRow items={SKILLS_ROW_2} reverse />
      </div>

      {/* Skill bars */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <FadeIn>
          <h3 className="font-display font-bold text-navy text-lg mb-6">
            Proficiência por Área
          </h3>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {SKILL_GROUPS.map((group, gi) => (
            <FadeIn key={group.label} delay={gi * 0.06}>
              <div className="p-5 rounded-2xl bg-cream border border-navy/8">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${group.color}`}
                  />
                  <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-col gap-3.5">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-navy">
                          {skill.name}
                        </span>
                        <span className="text-xs text-navy/35">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-navy/8 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Language */}
        <FadeIn delay={0.2}>
          <div className="mt-4 flex items-center gap-4 p-4 rounded-2xl bg-navy/5 border border-navy/10 max-w-sm">
            <span className="text-xl">🌍</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-navy text-sm">Inglês — Avançado (B2+)</p>
              <p className="text-navy/45 text-xs mt-0.5">
                Leitura técnica, documentação e comunicação
              </p>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-red" />
              ))}
              <div className="w-2 h-2 rounded-full bg-navy/20" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
