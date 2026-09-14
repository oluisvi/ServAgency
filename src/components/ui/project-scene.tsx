import { ArrowUpRight, Github } from "lucide-react";
import type { PortfolioProject, ProjectTreatment } from "@/content/site";

function ProjectVisual({ treatment, name }: { treatment: ProjectTreatment; name: string }) {
  if (treatment === "editorial") {
    return (
      <div className="visual visual-editorial" aria-hidden="true">
        <div className="editorial-topline"><span>PRIVATE CURATION</span><span>RUVRO / 01</span></div>
        <div className="watch-form"><i /><b /></div>
        <div className="editorial-copy"><small>DIGITAL SHOWROOM</small><strong>THE CURATOR&apos;S<br/>LIGHT</strong></div>
      </div>
    );
  }

  if (treatment === "spatial") {
    return (
      <div className="visual visual-spatial" aria-hidden="true">
        <div className="room-grid" />
        <div className="door-frame"><i /><i /><i /></div>
        <div className="spatial-label"><span>SCENE 03 / 06</span><strong>ENTER THE SPACE</strong></div>
        <div className="hotspot hotspot-a">+</div>
        <div className="hotspot hotspot-b">+</div>
      </div>
    );
  }

  if (treatment === "system") {
    return (
      <div className="visual visual-system" aria-hidden="true">
        <div className="app-topbar"><span>FLOWDESK</span><i /><i /><i /></div>
        <div className="system-sidebar"><i/><i/><i/><i/><i/></div>
        <div className="kanban">
          {["Inbox", "Doing", "Review"].map((lane, index) => (
            <div className="kanban-lane" key={lane}>
              <span>{lane}</span>
              <i className={`task task-${index + 1}`} />
              <i className={`task task-${index + 2}`} />
            </div>
          ))}
        </div>
        <div className="workflow-line"><i/><i/><i/></div>
      </div>
    );
  }

  if (treatment === "data") {
    return (
      <div className="visual visual-data" aria-hidden="true">
        <div className="data-top"><span>ATLAS FINANCE</span><strong>R$ 42.840,70</strong></div>
        <svg viewBox="0 0 620 260" role="presentation">
          <path className="chart-grid" d="M10 220H610M10 160H610M10 100H610M10 40H610" />
          <path className="chart-line" d="M20 200 C85 180 105 212 165 150 S260 138 305 92 S410 128 462 62 S545 82 600 30" />
          <path className="chart-area" d="M20 200 C85 180 105 212 165 150 S260 138 305 92 S410 128 462 62 S545 82 600 30 V230 H20Z" />
        </svg>
        <div className="data-stats"><span>+12.8%<small>Receitas</small></span><span>-4.2%<small>Despesas</small></span><span>6<small>Metas ativas</small></span></div>
      </div>
    );
  }

  return (
    <div className="visual visual-commerce" aria-hidden="true">
      <div className="commerce-head"><strong>SHOP.CO</strong><span>NEW ARRIVALS&nbsp;&nbsp; TOP SELLING</span></div>
      <div className="commerce-products">
        {[0, 1, 2].map((item) => (
          <div className={`commerce-product product-${item + 1}`} key={item}>
            <i />
            <span>ESSENTIAL {String(item + 1).padStart(2, "0")}</span>
            <b>R$ {(149 + item * 35).toFixed(2).replace(".", ",")}</b>
          </div>
        ))}
      </div>
      <div className="commerce-strip">{name.toUpperCase()} / FULL-STACK COMMERCE</div>
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
                <Github aria-hidden="true" /> Código
              </a>
            )}
          </div>
          <div className="project-signal"><span>{project.visual.label}</span><i /></div>
        </div>
        <div className="project-visual-wrap">
          <ProjectVisual treatment={project.visual.treatment} name={project.name} />
        </div>
      </div>
    </article>
  );
}
