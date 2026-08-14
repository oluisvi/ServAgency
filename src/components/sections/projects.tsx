import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { complementaryProjects, featuredProjects } from "@/content/site";

export function Projects() {
  return (
    <section
      className="projects section-pad page-shell"
      id="projetos"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        id="projects-title"
        number="05"
        title="Produtos reais, experiência comprovada."
        description="Projetos de produto, estudos acadêmicos e exercícios de interface construídos antes da ServAgency."
      />

      <p className="projects-attribution">
        Experiência construída pela equipe por trás da ServAgency
      </p>

      <div className="project-list">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            layout={index === 0 ? "lead" : "supporting"}
          />
        ))}
      </div>

      <div className="complementary-projects">
        <div className="complementary-heading">
          <p className="complementary-eyebrow">Outros trabalhos</p>
          <h3>Estudos complementares de interface e design.</h3>
        </div>
        <div className="complementary-list">
          {complementaryProjects.map((project) => {
            const titleId = `project-${project.slug}-title`;

            return (
              <article
                className="complementary-project"
                key={project.slug}
                aria-labelledby={titleId}
              >
                <div className="complementary-copy">
                  <p className="complementary-category">{project.category}</p>
                  <h4 id={titleId}>{project.name}</h4>
                  <p>{project.summary}</p>
                </div>
                <div className="complementary-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver produto ${project.name}`}
                  >
                    <span>Ver produto</span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código de ${project.name}`}
                  >
                    <span>Ver código</span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
