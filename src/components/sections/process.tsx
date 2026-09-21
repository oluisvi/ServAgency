import { processSteps } from "@/content/site";

export function Process() {
  return (
    <section className="section dark process-section" id="processo">
      <div className="intro section-heading-motion">
        <span>04 / PROCESS</span>
        <h2 data-parallax="0.02">Uma rota clara do diagnóstico à evolução.</h2>
      </div>
      <ol className="process motion-stagger">
        {processSteps.map(([title, description], index) => (
          <li key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
