import { localizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

export function FAQ({ locale, copy }: { locale: Locale; copy: SiteCopy["faq"] }) {
  const { faqs } = localizedContent(locale);
  return <section className="section light faq"><div className="intro section-heading-motion"><span>{copy.kicker}</span><h2>{copy.title}</h2></div><div>{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}</summary><p>{answer}</p></details>)}</div></section>;
}
