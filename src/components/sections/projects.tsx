import type { CSSProperties } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Braces, ImageIcon, Sparkles } from "lucide-react";
import { flagshipProjects, type PortfolioProject } from "@/content/site";

type ProjectMediaStyle = CSSProperties & {
  "--project-image"?: string;
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

function ProjectArtwork({ project, index }: { project: PortfolioProject; index: number }) {
  const hasImage = Boolean(project.visual.src);
  const style: ProjectMediaStyle = hasImage
    ? {
        "--project-image": `url("${project.visual.src}")`,
        "--project-position": project.visual.position ?? "center",
      }
    : {};

  return (
    <div
      className={`project-art ${hasImage ? "has-project-image" : "has-project-mockup"} project-fit-${project.visual.fit ?? "cover"}`}
      role="img"
      aria-label={project.visual.alt ?? `Visual do projeto ${project.name}`}
      style={style}
      data-tilt-surface
    >
      {project.visual.mockup === "removeit" ? <RemoveItCover /> : <div className="project-media" aria-hidden="true" />}
      <div className="project-art-shade" aria-hidden="true" />
      <div className="project-art-meta" aria-hidden="true">
        <span>{project.visual.kicker}</span>
        <i>{String(index + 1).padStart(2, "0")}</i>
      </div>
      <strong aria-hidden="true">{project.visual.label}</strong>
      <div className="project-state" aria-hidden="true">
        <span>STATE</span><b>ACTIVE</b>
      </div>
    </div>
  );
}

export function Projects() {
  const total = String(flagshipProjects.length).padStart(2, "0");

  return (
    <section className="projects motion-projects" id="projetos" data-project-carousel>
      <div className="project-head motion-clip">
        <div>
          <span>03 / SELECTED WORK</span>
          <h2>Projetos em movimento, sem transformar a página em uma maratona.</h2>
        </div>
        <p>
          Arraste, use as setas ou navegue pelos índices. Cada capa usa material real do próprio projeto e reage ao foco.
        </p>
      </div>

      <div className="project-controls">
        <span className="project-progress-label">SCRUB / {total} PROJECTS</span>
        <div className="project-progress" aria-hidden="true"><i /></div>
        <div className="project-control-actions">
          <button type="button" data-project-prev aria-label="Projeto anterior"><ArrowLeft /></button>
          <button type="button" data-project-next aria-label="Próximo projeto"><ArrowRight /></button>
        </div>
      </div>

      <div className="project-jumps" aria-label="Navegação dos projetos">
        {flagshipProjects.map((project, index) => (
          <button type="button" key={project.slug} data-project-jump aria-label={`Ir para ${project.name}`}>
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

      <div className="project-window">
        <div className="project-track" data-project-track tabIndex={0} aria-label="Projetos selecionados">
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
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-magnetic>
                      Ver projeto <ArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Braces aria-hidden="true" /> Código
                    </a>
                  )}
                </div>
              </div>
              <ProjectArtwork project={project} index={index} />
            </article>
          ))}
        </div>
      </div>
      <p className="project-a11y-status" aria-live="polite" data-project-status />
    </section>
  );
}
