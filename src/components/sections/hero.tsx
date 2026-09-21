import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/ui/brand";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-symbol" aria-hidden="true">
        <BrandMark />
      </div>
      <div className="hero-meta">
        <span>CREATIVE TECHNOLOGY STUDIO</span>
        <span>JACAREÍ / SP — BRASIL</span>
      </div>
      <div className="hero-grid">
        <div>
          <p className="eyebrow">ESTRATÉGIA × DESIGN × ENGENHARIA</p>
          <h1>
            Construímos sistemas digitais que <em>se movem</em> com o seu negócio.
          </h1>
        </div>
        <div className="hero-side">
          <p>
            Websites, automações, IA, produtos web e experiências interativas
            desenvolvidos como um único sistema — da ideia ao uso real.
          </p>
          <a href="#projetos">
            Explorar projetos <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="signal" aria-hidden="true">
        <span>PROBLEMA</span>
        <i />
        <span>ESTRATÉGIA</span>
        <i />
        <span>TECNOLOGIA</span>
        <i />
        <strong>SOLUÇÃO</strong>
      </div>
      <a className="hero-cta" href="#contato">
        Falar sobre meu projeto <ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  );
}
