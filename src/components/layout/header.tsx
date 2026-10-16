import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { navigation } from "@/content/site";
import { Brand } from "@/components/ui/brand";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

export function Header({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  return (
    <header className="header">
      <Link href="/#inicio"><Brand /></Link>
      <nav>{navigation.map((item, index) => <Link key={item.href} href={item.href}>{copy.nav[index]}</Link>)}</nav>
      <div className="header-local-actions">
        <LanguageSwitcher locale={locale} label={locale === "en" ? "Language" : "Idioma"} />
        <Link className="header-cta" href="/#contato" data-magnetic>{copy.headerCta} <ArrowUpRight /></Link>
      </div>
    </header>
  );
}
