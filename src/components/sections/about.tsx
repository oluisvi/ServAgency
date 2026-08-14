import { aboutPrinciples } from "@/content/site";

export function About() {
  return (
    <section
      className="about section-pad page-shell"
      id="sobre"
      aria-labelledby="about-title"
    >
      <div className="about-copy">
        <span className="section-number">06</span>
        <h2 id="about-title">
          Tecnologia com proximidade, estratégia e responsabilidade.
        </h2>
        <p>
          Somos uma agência criada por dois profissionais de tecnologia que
          acreditam que boas soluções digitais começam com uma compreensão real
          do negócio.
        </p>
        <p>
          Combinamos desenvolvimento, design, marketing e automação para
          construir uma presença mais profissional e processos mais eficientes.
        </p>
        <p>
          Estamos tirando a ServAgency do papel em Jacareí, no Vale do Paraíba.
          Atendemos presencialmente na região e trabalhamos remotamente com
          empresas de todo o Brasil.
        </p>
      </div>
      <div className="about-principles">
        <ol>
          {aboutPrinciples.map((principle, index) => (
            <li key={principle.title}>
              <span className="about-principle-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
