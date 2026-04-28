import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Márcio Mateus — Full-Stack Developer",
  description:
    "Portfólio de Márcio Mateus, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor Full-Stack. Founder da Nexus.",
  keywords: ["portfolio", "developer", "full-stack", "next.js", "react", "nexus"],
  authors: [{ name: "Márcio Mateus" }],
  openGraph: {
    title: "Márcio Mateus — Full-Stack Developer",
    description: "Estudante de ADS. Fundador da Nexus. Construo soluções robustas com disciplina.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} font-sans`}>{children}</body>
    </html>
  );
}
