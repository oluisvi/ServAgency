import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/ui/brand";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-symbol" aria-hidden="true" data-parallax="0.12">
        <BrandMark />
      </div>
      <div className="hero-meta motion-reveal">
        <span>CREATIVE TECHNOLOGY STUDIO</span>
        <span>JACAREÍ / SP — BRASIL</span>
      </div>
      <div className="hero-grid">
        <div>
          <p className="eyebrow motion-reveal">ESTRATÉGIA × DESIGN × ENGENHARIA</p>
          <h1 className="hero-title motion-clip">
            <span>Construímos sistemas</span>
            <span>digitais que <em>se movem</em></span>
            <span>com o seu negócio.</span>
          </h1>
        </div>
        <div className="hero-side motion-reveal" data-parallax="0.045">
          <p>
            Websites, automações, IA, produtos web e experiências interativas
            desenvolvidos como um único sistema — da ideia ao uso real.
          </p>
          <a href="#projetos" className="motion-link" data-magnetic>
            Explorar projetos <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="signal motion-stagger" aria-hidden="true">
        <span>PROBLEMA</span>
        <i />
        <span>ESTRATÉGIA</span>
        <i />
        <span>TECNOLOGIA</span>
        <i />
        <strong>SOLUÇÃO</strong>
      </div>
      <a className="hero-cta motion-reveal" href="#contato" data-magnetic>
        Falar sobre meu projeto <ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  );
}
