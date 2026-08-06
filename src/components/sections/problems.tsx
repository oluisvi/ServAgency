import { problems } from "@/content/site";

export function Problems() {
  return (
    <section className="problems section-pad" aria-labelledby="problems-title">
      <div className="page-shell split-layout">
        <div>
          <span className="section-number">01</span>
          <h2 id="problems-title">
            Ter presença digital não significa estar bem posicionado
            <span>.</span>
          </h2>
          <p>
            Quando cada canal comunica algo diferente, o cliente encontra
            dificuldade para entender, confiar e avançar.
          </p>
        </div>
        <div className="problem-list">
          {problems.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
