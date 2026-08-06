import { ArrowRight } from "lucide-react";
import { auditAreas } from "@/content/site";

export function Audit() {
  return (
    <section className="audit section-pad" aria-labelledby="audit-title">
      <div className="page-shell audit-grid">
        <div>
          <span className="section-number">03</span>
          <h2 id="audit-title">
            Antes de investir mais, descubra o que realmente precisa melhorar.
          </h2>
          <p>
            Analisamos sua presença digital, identificamos gargalos e
            organizamos um plano de ação por prioridade.
          </p>
          <a className="button" href="#contato">
            Solicitar diagnóstico <ArrowRight />
          </a>
        </div>
        <div className="audit-route">
          {auditAreas.map(([area, outcome], index) => (
            <div key={area}>
              <span>0{index + 1}</span>
              <h3>{area}</h3>
              <p>{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
