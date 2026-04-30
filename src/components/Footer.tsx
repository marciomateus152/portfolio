export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 relative"
      style={{
        background: "#0b1525",
        borderTop: "1px solid rgba(255,253,208,0.06)",
      }}
    >
      {/* Top separator glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-cream text-lg tracking-tight">
            MM
            <span
              className="text-red"
              style={{ textShadow: "0 0 10px rgba(230,57,70,0.6)" }}
            >.</span>
          </span>
          <span className="text-cream/20 text-sm">·</span>
          <span className="text-cream/35 text-sm">Márcio Mateus</span>
        </div>

        <p className="text-cream/25 text-xs text-center">
          © {year} Márcio Mateus &amp; Nexus. Construído com Next.js, Tailwind CSS &amp; Framer Motion.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/marciomateus152"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/30 hover:text-cream transition-colors duration-200 text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/marcio-mateus-509952236/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/30 hover:text-cream transition-colors duration-200 text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href="mailto:marciomateus152@gmail.com"
            className="text-cream/30 hover:text-red transition-colors duration-200 text-sm font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
