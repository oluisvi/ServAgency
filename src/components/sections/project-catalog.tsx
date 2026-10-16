import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { nicheProjectCategories, nicheProjects } from "@/content/niche-projects";

function catalogHref(category: string, query: string) {
  const params = new URLSearchParams();
  if (category !== "Todos") params.set("nicho", category);
  if (query) params.set("q", query);
  const search = params.toString();
  return search ? `/projetos?${search}` : "/projetos";
}

export default function ProjectCatalog({
  activeCategory,
  query,
}: {
  activeCategory?: string;
  query?: string;
}) {
  const selectedCategory = nicheProjectCategories.includes(activeCategory as (typeof nicheProjectCategories)[number])
    ? activeCategory!
    : "Todos";
  const normalizedQuery = (query ?? "").trim().toLocaleLowerCase("pt-BR");
  const filteredProjects = nicheProjects.filter((project) => {
    const matchesCategory = selectedCategory === "Todos" || project.category === selectedCategory;
    const searchableText = `${project.name} ${project.description} ${project.category}`.toLocaleLowerCase("pt-BR");
    return matchesCategory && searchableText.includes(normalizedQuery);
  });

  return (
    <section className="niche-catalog" aria-labelledby="niche-catalog-title">
      <div className="niche-catalog-inner">
        <header className="niche-catalog-heading">
          <div>
            <span className="niche-catalog-kicker">CATÁLOGO DE POSSIBILIDADES</span>
            <h2 id="niche-catalog-title">Experiências para diferentes <em>universos.</em></h2>
          </div>
          <p>Estudos demonstrativos e conceitos independentes. Explore a experiência e o código de cada projeto.</p>
        </header>

        <div className="niche-catalog-controls">
          <nav className="niche-catalog-filters" aria-label="Filtrar projetos por nicho">
            {nicheProjectCategories.map((category) => (
              <Link
                href={catalogHref(category, query ?? "")}
                className="niche-catalog-filter"
                key={category}
                aria-current={selectedCategory === category ? "page" : undefined}
              >
                {category}
              </Link>
            ))}
          </nav>
          <form className="niche-catalog-search" action="/projetos" method="get">
            {selectedCategory !== "Todos" && <input type="hidden" name="nicho" value={selectedCategory} />}
            <Search aria-hidden="true" />
            <label className="niche-catalog-sr-only" htmlFor="catalog-search">Buscar projetos</label>
            <input id="catalog-search" name="q" type="search" defaultValue={query} placeholder="Buscar por nome ou descrição" />
            <button type="submit">Buscar</button>
          </form>
        </div>

        <p className="niche-catalog-count" aria-live="polite" aria-atomic="true">
          {filteredProjects.length} {filteredProjects.length === 1 ? "experiência" : "experiências"} para explorar
        </p>

        {filteredProjects.length > 0 ? (
          <div className="niche-catalog-grid">
            {filteredProjects.map((project, index) => (
              <article className="niche-catalog-card" key={project.slug}>
                <div className="niche-catalog-card-meta">
                  <span>{project.category}</span>
                  <span aria-label={`Projeto ${index + 1}`}>{String(nicheProjects.indexOf(project) + 1).padStart(2, "0")}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="niche-catalog-links">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Abrir demo <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="niche-catalog-empty" role="status">Nenhuma experiência encontrada. Tente outro termo ou nicho.</p>
        )}
      </div>
    </section>
  );
}
