import { localizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

export function Process({ locale, copy }: { locale: Locale; copy: SiteCopy["process"] }) {
  const { process: processSteps } = localizedContent(locale);
  return (
    <section className="section dark process-section" id="processo">
      <div className="intro section-heading-motion">
        <span>{copy.kicker}</span>
        <h2 data-parallax="0.02">{copy.title}</h2>
      </div>
      <ol className="process motion-stagger">
        {processSteps.map(([title, description], index) => (
          <li key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
