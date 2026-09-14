import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";

export function Services() {
  return (
    <section
      className="capabilities section-pad"
      id="solucoes"
      aria-labelledby="services-title"
    >
      <div className="page-shell">
        <div className="section-intro section-intro-light scene-reveal">
          <span className="section-index">02 / CAPABILITIES</span>
          <h2 id="services-title">Da presença digital ao sistema que opera por trás dela.</h2>
          <p>
            Cada frente existe para resolver um tipo de problema. Elas podem
            funcionar isoladas ou como partes do mesmo sistema.
          </p>
        </div>

        <div className="capability-list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="capability-row scene-reveal" key={service.title}>
                <span className="capability-index">{service.index}</span>
                <Icon className="capability-icon" aria-hidden="true" />
                <div>
                  <span className="capability-label">{service.label}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <ArrowUpRight className="capability-arrow" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
