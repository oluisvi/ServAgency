import type { CSSProperties } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { SiteCopy } from "@/i18n/copy";

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

function LogoSculpture({ copy }: { copy: SiteCopy["hero"] }) {
  const layers = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div className="logo-sculpture" data-sculpture aria-label={copy.sculptureLabel}>
      <div className="logo-sculpture-stage" aria-hidden="true">
        <div className="logo-sculpture-stack">
          {layers.map((layer) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/logo-hero-alpha.webp"
              alt=""
              key={layer}
              className="logo-sculpture-layer"
              style={{ "--logo-depth": layer } as CSSProperties}
            />
          ))}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-hero-alpha.webp" alt="" className="logo-sculpture-face" />
        </div>
        <span className="logo-sculpture-orbit logo-sculpture-orbit-a" />
        <span className="logo-sculpture-orbit logo-sculpture-orbit-b" />
        <i className="logo-sculpture-node logo-sculpture-node-a" />
        <i className="logo-sculpture-node logo-sculpture-node-b" />
      </div>
      <div className="signal-sculpture-caption">
        <span>{copy.caption[0]}</span>
        <i />
        <strong>{copy.caption[1]}</strong>
      </div>
    </div>
  );
}

export function Hero({ copy }: { copy: SiteCopy["hero"] }) {
  return (
    <section className="hero" id="inicio" data-pointer-field>
      <div className="hero-pointer-glow" aria-hidden="true" />
      <div className="hero-meta motion-reveal">
        <span>{copy.meta[0]}</span>
        <span>{copy.meta[1]}</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy-block">
          <p className="eyebrow motion-reveal">{copy.eyebrow}</p>
          <h1 className="hero-title motion-clip" data-kinetic-title>
            <KineticLine text={copy.lines[0]} />
            <KineticLine text={copy.lines[1]} emphasis={copy.emphasis} />
            <KineticLine text={copy.lines[2]} />
          </h1>
        </div>
        <div className="hero-side motion-reveal" data-parallax="0.025">
          <LogoSculpture copy={copy} />
          <p>{copy.body}</p>
          <a href="#projetos" className="motion-link" data-magnetic>
            {copy.projects} <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="signal motion-stagger" aria-hidden="true">
        <span>{copy.signal[0]}</span>
        <i />
        <span>{copy.signal[1]}</span>
        <i />
        <span>{copy.signal[2]}</span>
        <i />
        <strong>{copy.signal[3]}</strong>
      </div>
      <a className="hero-cta motion-reveal" href="#contato" data-magnetic>
        {copy.cta} <ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  );
}
