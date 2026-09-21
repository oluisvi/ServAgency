import { outcomes } from "@/content/site";

export function Outcomes() {
  return (
    <section className="section light">
      <div className="intro motion-clip">
        <span>01 / FRICTION</span>
        <h2 data-parallax="0.025">Tecnologia só importa quando muda alguma coisa.</h2>
      </div>
      <div className="rows motion-stagger">
        {outcomes.map(([number, problem, result]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{problem}</h3>
            <p>{result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
