import { localizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

export function Services({ locale, copy }: { locale: Locale; copy: SiteCopy["services"] }) {
  const { services } = localizedContent(locale);
  return (
    <section className="section dark" id="solucoes">
      <div className="intro section-heading-motion">
        <span>{copy.kicker}</span>
        <h2 data-parallax="0.025">{copy.title}</h2>
      </div>
      <div className="services motion-stagger">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.index}>
              <span>{service.index}</span>
              <Icon aria-hidden="true" />
              <div>
                <small>{service.label}</small>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
