import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="page-shell hero-grid">
        <div className="hero-copy scene-reveal">
          <div className="hero-meta" aria-hidden="true">
            <span>SERVAGENCY / 2026</span>
            <span>JACAREÍ · BRASIL</span>
          </div>
          <h1 id="hero-title">
            Transformamos problemas reais em <em>sistemas</em> e experiências
            digitais.
          </h1>
          <p className="hero-lead">
            Estratégia, design, automação, IA e desenvolvimento web conectados
            para empresas que querem trabalhar melhor e se apresentar à altura
            do que entregam.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">
              Falar sobre meu projeto <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#projetos">
              Ver projetos <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-system scene-reveal" aria-hidden="true">
          <div className="hero-system-head">
            <span>SYSTEM ROUTE / 001</span>
            <span>ACTIVE</span>
          </div>
          <svg viewBox="0 0 700 520" role="presentation">
            <path
              className="signal-base"
              d="M40 96 H210 C260 96 252 180 310 180 H420 C480 180 458 270 520 270 H655"
              pathLength="1"
            />
            <path
              className="signal-live"
              d="M40 96 H210 C260 96 252 180 310 180 H420 C480 180 458 270 520 270 H655"
              pathLength="1"
            />
            <circle cx="40" cy="96" r="7" />
            <circle cx="310" cy="180" r="7" />
            <circle cx="520" cy="270" r="7" />
            <circle className="signal-output" cx="655" cy="270" r="10" />
          </svg>
          <div className="system-label system-label-a">
            <span>01</span>
            <strong>Estratégia</strong>
          </div>
          <div className="system-label system-label-b">
            <span>02</span>
            <strong>Tecnologia</strong>
          </div>
          <div className="system-label system-label-c">
            <span>03</span>
            <strong>Execução</strong>
          </div>
          <div className="system-output">
            <span>OUTPUT</span>
            <strong>Solução</strong>
          </div>
          <p>
            O problema orienta a rota. A ferramenta entra depois.
          </p>
        </div>
      </div>
      <div className="hero-scroll-note" aria-hidden="true">
        <span>SCROLL TO TRACE THE SYSTEM</span>
        <i />
      </div>
    </section>
  );
}
