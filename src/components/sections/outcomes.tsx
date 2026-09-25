import { localizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

export function Outcomes({ locale, copy }: { locale: Locale; copy: SiteCopy["outcomes"] }) {
  const { outcomes } = localizedContent(locale);
  return (
    <section className="section light">
      <div className="intro section-heading-motion">
        <span>{copy.kicker}</span>
        <h2 data-parallax="0.025">{copy.title}</h2>
      </div>
      <div className="rows motion-stagger">
        {outcomes.map(([number, problem, result]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{problem}</h3>
            <p>{result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
