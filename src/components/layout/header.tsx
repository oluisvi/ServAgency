import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/content/site";
import { Brand } from "@/components/ui/brand";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

export function Header({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  return (
    <header className="header">
      <a href="#inicio"><Brand /></a>
      <nav>{navigation.map((item, index) => <a key={item.href} href={item.href}>{copy.nav[index]}</a>)}</nav>
      <div className="header-local-actions">
        <LanguageSwitcher locale={locale} label={locale === "en" ? "Language" : "Idioma"} />
        <a className="header-cta" href="#contato" data-magnetic>{copy.headerCta} <ArrowUpRight /></a>
      </div>
    </header>
  );
}
