import Image from "next/image";
import { ArrowUpRight, Braces } from "lucide-react";
import type { PortfolioProject } from "@/content/site";

function ProjectVisual({ project }: { project: PortfolioProject }) {
  const { visual } = project;

  if (!visual.src || !visual.alt) {
    return (
      <div className={`visual project-media project-media-${visual.treatment} project-media-fallback`}>
        <span>{project.name}</span>
        <small>{visual.label}</small>
      </div>
    );
  }

  return (
    <div className={`visual project-media project-media-${visual.treatment}`}>
      <div className="project-media-chrome" aria-hidden="true">
        <span>LIVE PROJECT</span>
        <span>{project.name.toUpperCase()}</span>
      </div>
      <div className="project-media-stage">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="(max-width: 900px) calc(100vw - 1.25rem), 62vw"
          className={`project-media-image project-media-image-${visual.fit ?? "cover"}`}
          priority={project.slug === "ruvro"}
          unoptimized={visual.src.startsWith("http")}
        />
      </div>
      <div className="project-media-footer" aria-hidden="true">
        <span>{visual.label}</span>
        <i />
      </div>
    </div>
  );
}

export function ProjectScene({ project, index }: { project: PortfolioProject; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={`project-scene project-${project.visual.treatment}`}>
      <div className="project-sticky page-shell">
        <div className="project-copy">
          <div className="project-number"><span>{number}</span><span>/ 05</span></div>
          <p className="project-category">{project.category}</p>
          <h3>{project.name}</h3>
          <p className="project-summary">{project.summary}</p>
          <ul className="project-capabilities" aria-label={`Capacidades demonstradas em ${project.name}`}>
            {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
          <div className="project-actions">
            <a className="project-action-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Ver projeto <ArrowUpRight aria-hidden="true" />
            </a>
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                <Braces aria-hidden="true" /> Código
              </a>
            )}
          </div>
          <div className="project-signal"><span>{project.visual.label}</span><i /></div>
        </div>
        <div className="project-visual-wrap">
          <ProjectVisual project={project} />
        </div>
      </div>
    </article>
  );
}
