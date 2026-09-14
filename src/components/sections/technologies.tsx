import { technologies } from "@/content/site";

export function Technologies() {
  const items = [...technologies, ...technologies];
  return (
    <section className="technology-rail" aria-label="Tecnologias usadas pela ServAgency">
      <div className="page-shell">
        <div className="technology-heading">
          <span>TOOLS / NOT THE STRATEGY</span>
          <p>A ferramenta entra depois que a rota está definida.</p>
        </div>
        <div className="technology-marquee">
          <div className="technology-track">
            {items.map((technology, index) => (
              <span key={`${technology.name}-${index}`} aria-hidden={index >= technologies.length || undefined}>
                {technology.name}<i />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
