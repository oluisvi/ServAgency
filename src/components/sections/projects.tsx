import type { CSSProperties } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ImageIcon,
  Sparkles,
} from "lucide-react";
import { flagshipProjects, type PortfolioProject } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

type ProjectMediaStyle = CSSProperties & {
  "--project-position"?: string;
};

function RemoveItCover() {
  return (
    <div className="removeit-cover" aria-hidden="true">
      <div className="removeit-nav">
        <span className="removeit-brand"><i><Sparkles /></i>Remove<b>IT</b></span>
        <span>Como funciona&nbsp;&nbsp;&nbsp; Privacidade</span>
        <strong>Começar ↗</strong>
      </div>
      <div className="removeit-hero">
        <small><i /> EDIÇÃO INTELIGENTE DE IMAGENS</small>
        <h4>Fotos limpas.<br /><em>Em poucos segundos.</em></h4>
        <p>A IA encontra marcas d&apos;água e mantém você no controle.</p>
        <div className="removeit-upload">
          <span><ImageIcon /></span>
          <b>Solte sua imagem aqui</b>
          <small>ou escolha um arquivo do seu dispositivo</small>
          <button type="button" tabIndex={-1}>Escolher imagem ↗</button>
          <i>□ Confirmo que possuo autorização para editar esta imagem.</i>
        </div>
      </div>
    </div>
  );
}

function ProjectArtwork({ project, index, copy }: { project: PortfolioProject; index: number; copy: SiteCopy["projects"] }) {
  const hasImage = Boolean(project.visual.src);
  const style: ProjectMediaStyle = hasImage
    ? { "--project-position": project.visual.position ?? "center" }
    : {};

  return (
    <div
      className={`project-art ${hasImage ? "has-project-image" : "has-project-mockup"} project-fit-${project.visual.fit ?? "cover"}`}
      role="img"
      aria-label={project.visual.alt ?? `${copy.visual} ${project.name}`}
      style={style}
      data-tilt-surface
    >
      {project.visual.mockup === "removeit" ? (
        <RemoveItCover />
      ) : hasImage ? (
        // Plain img keeps remote project imagery compatible while allowing native lazy loading.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="project-media"
          src={project.visual.src}
          alt=""
          aria-hidden="true"
          loading={index < 2 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
          draggable={false}
        />
      ) : (
        <div className="project-media" aria-hidden="true" />
      )}
      <div className="project-art-shade" aria-hidden="true" />
      <div className="project-art-meta" aria-hidden="true">
        <span>{project.visual.kicker}</span>
        <i>{String(index + 1).padStart(2, "0")}</i>
      </div>
      <div className="project-state" aria-hidden="true">
        <span>{copy.state}</span>
        <strong className="project-art-label">{project.visual.label}</strong>
        <b>{copy.active}</b>
      </div>
    </div>
  );
}

export function Projects({ copy }: { locale: Locale; copy: SiteCopy }) {
  const total = String(flagshipProjects.length).padStart(2, "0");

  return (
    <section className="projects motion-projects" id="projetos" data-project-carousel>
      <div className="project-pin">
        <div className="project-head section-heading-motion">
          <div>
            <span>{copy.projects.kicker}</span>
            <h2>{copy.projects.title}</h2>
          </div>
          <p>
            {copy.projects.body}
          </p>
        </div>

        <div className="project-controls">
          <span className="project-progress-label">AUTO / DRAG / {total} {copy.projects.progress}</span>
          <div className="project-progress" aria-hidden="true"><i /></div>
          <div className="project-nav-actions">
            <button
              type="button"
              className="project-autoplay-toggle"
              data-project-autoplay-toggle
              aria-pressed="false"
              aria-label={copy.projects.pause}
            >
              <span data-project-autoplay-label>PAUSE</span>
            </button>
            <button type="button" className="project-arrow" data-project-prev aria-label={copy.projects.previous}>
              <ArrowLeft aria-hidden="true" />
            </button>
            <div className="project-jumps" aria-label={copy.projects.navigation}>
              {flagshipProjects.map((project, index) => (
                <button type="button" key={project.slug} data-project-jump aria-label={`${copy.projects.goTo} ${project.name}`}>
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
            <button type="button" className="project-arrow" data-project-next aria-label={copy.projects.next}>
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="project-window" data-project-window>
          <div className="project-track" data-project-track tabIndex={0} aria-label={copy.projects.carousel}>
            {flagshipProjects.map((project, index) => (
              <article
                className={`project-slide ${project.visual.treatment}`}
                key={project.slug}
                data-project-slide
                data-project-treatment={project.visual.treatment}
              >
                <div className="project-copy">
                  <div className="project-no"><span>{String(index + 1).padStart(2, "0")}</span><span>/ {total}</span></div>
                  <small>{project.year} — {project.category}</small>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <ul>{project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
                  <div className="actions">
                    <a href={`/projetos/${project.slug}`} data-magnetic data-carousel-interactive>
                      {copy.projects.viewCase} <ArrowUpRight aria-hidden="true" />
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-carousel-interactive>
                        {copy.projects.live} <ArrowUpRight aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
                <ProjectArtwork project={project} index={index} copy={copy.projects} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
