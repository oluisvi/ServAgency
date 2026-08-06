import { technologies } from "@/content/site";

export function Technologies() {
  return (
    <section className="technology-rail" aria-label="Tecnologias">
      <div className="page-shell">
        <p>
          Selecionamos ferramentas de acordo com a necessidade de cada projeto.
        </p>
        <div>
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
