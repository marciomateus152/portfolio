export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-navy/8 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-navy text-lg">
            MM<span className="text-red">.</span>
          </span>
          <span className="text-navy/30 text-sm">·</span>
          <span className="text-navy/40 text-sm">Márcio Mateus</span>
        </div>

        <p className="text-navy/35 text-xs text-center">
          © {year} Márcio Mateus &amp; Nexus. Construído com Next.js, Tailwind CSS &amp; Framer Motion.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/marciomateus152"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/40 hover:text-navy transition-colors duration-200 text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/marcio-mateus-509952236/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/40 hover:text-navy transition-colors duration-200 text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href="mailto:marciomateus152@gmail.com"
            className="text-navy/40 hover:text-red transition-colors duration-200 text-sm font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
