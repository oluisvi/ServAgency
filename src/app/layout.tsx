import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://servagency.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ServAgency — Tecnologia e estratégia",
    template: "%s | ServAgency",
  },
  description:
    "Websites, automações e estratégias digitais para empresas que querem ser encontradas, transmitir confiança e trabalhar melhor.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "ServAgency",
    title: "ServAgency — Tecnologia e estratégia",
    description:
      "Tecnologia, design e estratégia para resolver problemas reais de empresas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ServAgency — Tecnologia e estratégia",
    description:
      "Tecnologia, design e estratégia para resolver problemas reais de empresas.",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
