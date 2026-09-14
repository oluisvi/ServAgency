import { ArrowUpRight } from "lucide-react";
import { archiveProjects, flagshipProjects } from "@/content/site";
import { ProjectScene } from "@/components/ui/project-scene";

export function Projects() {
  return (
    <section className="projects" id="projetos" aria-labelledby="projects-title">
      <div className="page-shell projects-intro section-pad scene-reveal">
        <span className="section-index">03 / SELECTED WORK</span>
        <div>
          <h2 id="projects-title">Projetos que mostram amplitudes diferentes da mesma capacidade.</h2>
          <p>
            Produto, dados, automação, e-commerce, direção editorial e experiência
            espacial. Não como exercícios isolados, mas como formas diferentes de
            transformar um problema em experiência.
          </p>
        </div>
      </div>

      <div className="project-rail" aria-label="Projetos em destaque">
        {flagshipProjects.map((project, index) => (
          <ProjectScene project={project} index={index} key={project.slug} />
        ))}
      </div>

      <div className="page-shell project-archive scene-reveal">
        <div>
          <span className="section-index">ARCHIVE / EARLIER WORK</span>
          <h3>Outros trabalhos e estudos.</h3>
        </div>
        <div className="archive-list">
          {archiveProjects.map((project) => (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" key={project.slug}>
              <span>{project.name}</span>
              <small>{project.category}</small>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
