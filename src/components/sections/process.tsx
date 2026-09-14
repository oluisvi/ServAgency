import { processSteps } from "@/content/site";

export function Process() {
  return (
    <section className="process section-pad" id="processo" aria-labelledby="process-title">
      <div className="page-shell">
        <div className="section-intro section-intro-light scene-reveal">
          <span className="section-index">04 / PROCESS</span>
          <h2 id="process-title">Uma rota clara do diagnóstico à evolução.</h2>
          <p>
            O processo mantém decisão, execução e contexto conectados. Menos
            improviso, menos caixa-preta, mais clareza sobre o que acontece agora
            e o que vem depois.
          </p>
        </div>

        <ol className="process-track">
          {processSteps.map(([title, description], index) => (
            <li className="scene-reveal" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
