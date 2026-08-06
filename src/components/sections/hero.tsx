import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="hero page-shell"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <h1 id="hero-title">
          Tecnologia e estratégia para resolver problemas reais<span>.</span>
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
      </div>
      <div
        className="route-visual"
        aria-label="Estratégia, tecnologia e execução convergem em uma solução"
      >
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
      </div>
    </section>
  );
}
