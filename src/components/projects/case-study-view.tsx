import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ImageIcon, Sparkles } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { caseStudies } from "@/content/case-studies";

interface CaseStudyViewProps {
  project: CaseStudy;
}

type CaseStyle = CSSProperties & {
  "--case-bg": string;
  "--case-surface": string;
  "--case-text": string;
  "--case-muted": string;
  "--case-accent": string;
  "--case-accent-text": string;
};

function RemoveItCaseVisual() {
  return (
    <div className="case-removeit" aria-label="Reconstrução visual da interface RemoveIT" role="img">
      <div className="case-removeit-nav">
        <span><i><Sparkles aria-hidden="true" /></i> Remove<b>IT</b></span>
        <small>EDIÇÃO INTELIGENTE DE IMAGENS</small>
      </div>
      <div className="case-removeit-body">
        <div>
          <span>AI WITH HUMAN CONTROL</span>
          <h2>Fotos limpas.<br /><em>Em poucos segundos.</em></h2>
          <p>Detecção automática, máscara editável e revisão humana antes da reconstrução.</p>
        </div>
        <div className="case-removeit-upload">
          <ImageIcon aria-hidden="true" />
          <strong>Solte sua imagem aqui</strong>
          <small>JPG, PNG ou WebP · até 20 MB</small>
          <span>□ Confirmo que possuo autorização para editar.</span>
        </div>
      </div>
    </div>
  );
}

function CaseImage({ src, alt, fit = "cover" }: { src: string; alt: string; fit?: "cover" | "contain" }) {
  return (
    <div className={`case-image case-image-${fit}`}>
      {/* Plain img intentionally supports project-hosted and screenshot-service URLs without Next image host configuration. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  const index = caseStudies.findIndex((item) => item.slug === project.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const style: CaseStyle = {
    "--case-bg": project.theme.bg,
    "--case-surface": project.theme.surface,
    "--case-text": project.theme.text,
    "--case-muted": project.theme.muted,
    "--case-accent": project.theme.accent,
    "--case-accent-text": project.theme.accentText,
  };

  return (
    <main className="case-study" style={style}>
      <nav className="case-nav" aria-label="Navegação do projeto">
        <Link href="/#projetos" className="case-back">
          <ArrowLeft aria-hidden="true" /> Projetos
        </Link>
        <span>ServAgency / Case Study</span>
        <div className="case-nav-actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Ver ao vivo <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </nav>

      <section className="case-hero">
        <div className="case-hero-copy">
          <span className="case-kicker">{project.eyebrow}</span>
          <h1>{project.title}</h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <p className="case-intro">{project.intro}</p>
        </div>
        <div className="case-hero-media">
          {project.cover ? <CaseImage src={project.cover} alt={project.coverAlt} /> : <RemoveItCaseVisual />}
          <div className="case-hero-index" aria-hidden="true">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <i />
            <span>{String(caseStudies.length).padStart(2, "0")}</span>
          </div>
        </div>
      </section>

      <section className="case-two-col case-section">
        <div>
          <span className="case-section-label">01 / DESAFIO</span>
          <h2>O problema que a experiência precisava resolver.</h2>
        </div>
        <p>{project.challenge}</p>
      </section>

      <section className="case-concept case-section">
        <span className="case-section-label">02 / DIREÇÃO</span>
        <div className="case-concept-grid">
          <h2>Uma ideia central para orientar decisões visuais e funcionais.</h2>
          <p>{project.concept}</p>
        </div>
      </section>

      <section className="case-palette case-section">
        <div className="case-section-heading">
          <span className="case-section-label">03 / SISTEMA VISUAL</span>
          <h2>Paleta e atmosfera.</h2>
        </div>
        <div className="case-swatches">
          {project.palette.map((color) => (
            <article key={color.name} style={{ background: color.value }}>
              <span style={{ color: color.value.toLowerCase() === "#ffffff" ? "#111" : undefined }}>{color.name}</span>
              <code style={{ color: color.value.toLowerCase() === "#ffffff" ? "#111" : undefined }}>{color.value}</code>
            </article>
          ))}
        </div>
      </section>

      <section className="case-principles case-section">
        <div className="case-section-heading">
          <span className="case-section-label">04 / DECISÕES</span>
          <h2>O que sustenta a identidade do projeto.</h2>
        </div>
        <div className="case-principles-grid">
          {project.principles.map((principle, principleIndex) => (
            <article key={principle.title}>
              <span>{String(principleIndex + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-process case-section">
        <div className="case-section-heading">
          <span className="case-section-label">05 / CONSTRUÇÃO</span>
          <h2>Da intenção à experiência.</h2>
        </div>
        <ol>
          {project.process.map((item) => (
            <li key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="case-gallery case-section">
        <div className="case-section-heading">
          <span className="case-section-label">06 / PROJETO EM USO</span>
          <h2>Interface, imagem e evidência.</h2>
        </div>
        {project.gallery.length > 0 ? (
          <div className="case-gallery-grid">
            {project.gallery.map((image, imageIndex) => (
              <figure key={`${image.src}-${imageIndex}`} className={imageIndex === 0 ? "case-gallery-wide" : undefined}>
                <CaseImage src={image.src} alt={image.alt} fit={image.fit} />
                <figcaption>
                  <span>{String(imageIndex + 1).padStart(2, "0")}</span>
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <RemoveItCaseVisual />
        )}
      </section>

      <section className="case-stack case-section">
        <div>
          <span className="case-section-label">07 / ENGENHARIA</span>
          <h2>Tecnologia que serve ao conceito.</h2>
        </div>
        <ul>
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="case-result case-section">
        <span className="case-section-label">08 / RESULTADO</span>
        <h2>{project.result}</h2>
        <p>{project.sourceNote}</p>
        <div className="case-result-actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Abrir experiência <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </section>

      <Link className="case-next" href={`/projetos/${next.slug}`}>
        <span>PRÓXIMO CASE</span>
        <strong>{next.title}</strong>
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </main>
  );
}
