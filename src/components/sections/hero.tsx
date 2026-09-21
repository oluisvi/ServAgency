import type { CSSProperties } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/ui/brand";

function KineticLine({ text, emphasis }: { text: string; emphasis?: string }) {
  const words = text.split(" ");
  return (
    <span className="kinetic-line">
      {words.map((word, wordIndex) => {
        const clean = word.replace(/[.,]/g, "");
        const highlighted = emphasis === clean;
        return (
          <span className={`kinetic-word${highlighted ? " kinetic-word-accent" : ""}`} key={`${word}-${wordIndex}`}>
            {Array.from(word).map((char, charIndex) => (
              <span
                className="kinetic-char"
                key={`${char}-${charIndex}`}
                style={{ "--char-index": charIndex, "--word-index": wordIndex } as CSSProperties}
              >
                {char}
              </span>
            ))}
            {wordIndex < words.length - 1 ? <span className="kinetic-space">&nbsp;</span> : null}
          </span>
        );
      })}
    </span>
  );
}

function SignalSculpture() {
  return (
    <div className="signal-sculpture" data-sculpture aria-hidden="true">
      <div className="signal-sculpture-stage">
        <div className="signal-cube">
          <i className="face face-front" />
          <i className="face face-back" />
          <i className="face face-left" />
          <i className="face face-right" />
          <i className="face face-top" />
          <i className="face face-bottom" />
        </div>
        <span className="signal-ring signal-ring-a" />
        <span className="signal-ring signal-ring-b" />
        <span className="signal-ring signal-ring-c" />
        <span className="signal-node signal-node-a" />
        <span className="signal-node signal-node-b" />
        <span className="signal-node signal-node-c" />
      </div>
      <div className="signal-sculpture-caption">
        <span>INTERACTIVE SIGNAL OBJECT</span>
        <i />
        <strong>MOVE POINTER</strong>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="inicio" data-pointer-field>
      <div className="hero-symbol" aria-hidden="true" data-parallax="0.07">
        <BrandMark />
      </div>
      <div className="hero-pointer-glow" aria-hidden="true" />
      <div className="hero-meta motion-reveal">
        <span>CREATIVE TECHNOLOGY STUDIO</span>
        <span>JACAREÍ / SP — BRASIL</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy-block">
          <p className="eyebrow motion-reveal">ESTRATÉGIA × DESIGN × ENGENHARIA</p>
          <h1 className="hero-title motion-clip" data-kinetic-title>
            <KineticLine text="Construímos sistemas" />
            <KineticLine text="digitais que se movem" emphasis="se" />
            <KineticLine text="com o seu negócio." />
          </h1>
        </div>
        <div className="hero-side motion-reveal" data-parallax="0.025">
          <SignalSculpture />
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
