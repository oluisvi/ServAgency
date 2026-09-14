import { aboutPrinciples } from "@/content/site";

export function About() {
  return (
    <section className="about section-pad" id="sobre" aria-labelledby="about-title">
      <div className="page-shell about-grid">
        <div className="about-copy scene-reveal">
          <span className="section-index">05 / STUDIO</span>
          <h2 id="about-title">Tecnologia aplicada com intenção.</h2>
          <p>
            A ServAgency existe para conectar estratégia, design e engenharia sem
            transformar tecnologia em espetáculo ou complexidade em desculpa.
            Construímos soluções proporcionais ao problema, com acabamento forte e
            decisões que podem ser explicadas.
          </p>
        </div>
        <ol className="principle-list">
          {aboutPrinciples.map((principle, index) => (
            <li className="scene-reveal" key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
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
