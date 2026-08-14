import { technologies } from "@/content/site";
import { TechnologyIcon } from "@/components/ui/technology-icon";

function TechnologyGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="technology-marquee-group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {technologies.map((technology) => (
        <li key={technology.name}>
          <TechnologyIcon name={technology.icon} />
          <span>{technology.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function Technologies() {
  return (
    <section className="technology-rail" aria-label="Tecnologias">
      <div className="page-shell">
        <p>
          Selecionamos ferramentas de acordo com a necessidade de cada projeto.
        </p>
        <div className="technology-marquee">
          <div className="technology-marquee-track">
            <TechnologyGroup />
            <TechnologyGroup duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
