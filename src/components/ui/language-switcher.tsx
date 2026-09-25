"use client";

import { localeCookie, type Locale } from "@/i18n/config";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const switchTo = (nextLocale: Locale) => {
    document.cookie = `${localeCookie}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    window.location.assign(nextLocale === "en" ? "/en" : "/");
  };

  return (
    <div className="language-switcher" aria-label={label}>
      <button
        type="button"
        className={locale === "pt-BR" ? "is-active" : ""}
        aria-pressed={locale === "pt-BR"}
        onClick={() => switchTo("pt-BR")}
      >
        PT
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={locale === "en" ? "is-active" : ""}
        aria-pressed={locale === "en"}
        onClick={() => switchTo("en")}
      >
        EN
      </button>
    </div>
  );
}
