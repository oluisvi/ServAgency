import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="hero page-shell"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <div className="hero-kicker">
          <span>ServAgency / Tecnologia aplicada</span>
          <span>Jacareí · Brasil</span>
        </div>
        <h1 id="hero-title">
          Do problema à solução, sem desvio<span>.</span>
        </h1>
        <p>
          Criamos websites, automações e estratégias digitais para empresas que
          querem ser encontradas, transmitir confiança e trabalhar melhor.
        </p>
        <div className="hero-actions">
          <a className="button" href="#contato">
            Falar sobre meu projeto <ArrowDownRight />
          </a>
          <a className="button button-secondary" href="#solucoes">
            Conhecer as soluções
          </a>
        </div>
        <div className="hero-proof" aria-label="Diferenciais da ServAgency">
          <span>
            <b>01</b> Diagnóstico antes da ferramenta
          </span>
          <span>
            <b>02</b> Estratégia conectada à execução
          </span>
          <span>
            <b>03</b> Solução proporcional ao negócio
          </span>
        </div>
      </div>
      <div
        className="route-visual"
        aria-label="Estratégia, tecnologia e execução convergem em uma solução"
      >
        <span className="route-caption">Sistema de decisão / 001</span>
        <div className="route route-one">
          <span>Estratégia</span>
          <i />
        </div>
        <div className="route route-two">
          <span>Tecnologia</span>
          <i />
        </div>
        <div className="route route-three">
          <span>Execução</span>
          <i />
        </div>
        <div className="route-output">
          <i />
          <span>Solução</span>
        </div>
        <div className="route-status">
          <span>Problema compreendido</span>
          <strong>Rota definida</strong>
        </div>
      </div>
    </section>
  );
}
