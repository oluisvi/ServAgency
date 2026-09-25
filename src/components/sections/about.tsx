import { technologies } from "@/content/site";
import { localizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

export function About({ locale, copy }: { locale: Locale; copy: SiteCopy["about"] }) {
  const { principles } = localizedContent(locale);
  return <><section className="tech"><div>{[...technologies, ...technologies].map((technology, index) => <span key={index}>{technology} <b>✦</b></span>)}</div></section><section className="section light" id="sobre"><div className="about motion-reveal"><div className="intro section-heading-motion"><span>{copy.kicker}</span><h2>{copy.title}</h2><p>{copy.body}</p></div><ol>{principles.map(([number, title, description]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></div></section></>;
}
