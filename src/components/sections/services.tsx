import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return (
    <section
      className="services section-pad page-shell"
      id="solucoes"
      aria-labelledby="services-title"
    >
      <SectionHeading
        id="services-title"
        number="02"
        title="Soluções construídas ao redor do seu negócio."
        description="Você não precisa descobrir sozinho qual ferramenta contratar. Entendemos o problema e recomendamos a combinação adequada."
      />
      <div className="service-list">
        {services.map(({ title, description, icon: Icon }, index) => (
          <article key={title}>
            <Icon aria-hidden="true" />
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#contato" aria-label={`Conversar sobre ${title}`}>
              <ArrowUpRight />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
