export const locales = ["pt-BR", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";
export const localeCookie = "servagency-locale";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromCountry(country: string | null): Locale {
  if (!country) return defaultLocale;
  return country.toUpperCase() === "BR" ? "pt-BR" : "en";
}
