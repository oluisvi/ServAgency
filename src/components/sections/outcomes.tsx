import { ArrowDownRight } from "lucide-react";
import { outcomes } from "@/content/site";

export function Outcomes() {
  return (
    <section className="outcomes section-pad" aria-labelledby="outcomes-title">
      <div className="page-shell">
        <div className="section-intro scene-reveal">
          <span className="section-index">01 / FRICTION</span>
          <h2 id="outcomes-title">Tecnologia só importa quando muda alguma coisa.</h2>
          <p>
            A ServAgency começa pelo atrito real do negócio. O objetivo não é
            adicionar ferramenta: é remover ruído, aumentar confiança e criar
            uma rota mais eficiente.
          </p>
        </div>

        <div className="outcome-list">
          {outcomes.map((item) => (
            <article className="outcome-row scene-reveal" key={item.index}>
              <span>{item.index}</span>
              <h3>{item.problem}</h3>
              <ArrowDownRight aria-hidden="true" />
              <p>{item.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
