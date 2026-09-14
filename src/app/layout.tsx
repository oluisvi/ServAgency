import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionController } from "@/components/ui/motion-controller";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://servagency.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ServAgency — Sistemas e experiências digitais",
    template: "%s | ServAgency",
  },
  description:
    "Estratégia, design, automação, IA e desenvolvimento web conectados para transformar problemas reais em sistemas e experiências digitais.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "ServAgency",
    title: "ServAgency — Sistemas e experiências digitais",
    description:
      "Estratégia, design e tecnologia conectados para resolver problemas reais de empresas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ServAgency — Sistemas e experiências digitais",
    description:
      "Web, automação, IA, produtos digitais e experiências interativas com estratégia e acabamento.",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#090b0f",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <MotionController />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
