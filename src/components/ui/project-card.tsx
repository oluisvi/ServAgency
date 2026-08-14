import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/content/site";

type FeaturedProject = Extract<PortfolioProject, { featured: true }>;

type Props = {
  project: FeaturedProject;
  layout?: "lead" | "supporting";
};

export function ProjectCard({ project, layout = "supporting" }: Props) {
  const titleId = `project-${project.slug}-title`;

  return (
    <article
      className={`project-card project-card-${layout}`}
      aria-labelledby={titleId}
    >
      <div className="project-card-media">
        <Image
          className="project-card-image"
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          width={project.screenshot.width}
          height={project.screenshot.height}
          sizes={
            layout === "lead"
              ? "(max-width: 1024px) 100vw, 64vw"
              : "(max-width: 1024px) 100vw, 42vw"
          }
        />
      </div>
      <div className="project-card-content">
        <p className="project-category">{project.category}</p>
        <h3 id={titleId}>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul
          className="project-capabilities"
          aria-label={`Capacidades demonstradas em ${project.name}`}
        >
          {project.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a
            className="project-link project-link-primary"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver produto ${project.name}`}
          >
            <span>Ver produto</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="project-link"
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver código de ${project.name}`}
          >
            <span>Ver código</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
