import type { Metadata } from "next";
import { LocalizedHome } from "@/components/localized-home";

export const metadata: Metadata = {
  title: "ServAgency — Technology and strategy",
  description:
    "Websites, automation, and digital strategies for companies that want to be found, build trust, and work better.",
  alternates: {
    canonical: "/en",
    languages: { "pt-BR": "/", en: "/en" },
  },
};

export default function EnglishHome() {
  return <LocalizedHome locale="en" />;
}
