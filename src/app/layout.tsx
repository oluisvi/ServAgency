import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ServAgency — Sistemas e experiências digitais",
  description: "Estratégia, design, automação, IA e desenvolvimento web conectados.",
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en" } },
  openGraph: {
    title: "ServAgency — Sistemas e experiências digitais",
    description: "Estratégia, design e engenharia convergindo em sistemas digitais com identidade própria.",
    images: [{ url: "/og-servagency.png", width: 1200, height: 630, alt: "ServAgency — Digital Systems in Motion" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0d0f",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var r=matchMedia("(prefers-reduced-motion: reduce)").matches;var s=sessionStorage.getItem("servagency:thematic-entry-seen:v1")==="1";document.documentElement.dataset.entry=(r||s)?"skip":"show"}catch(e){document.documentElement.dataset.entry="show"}})();`,
          }}
        />
      </head>
      <body>
        <noscript>
          <style>{`.thematic-entry{display:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
