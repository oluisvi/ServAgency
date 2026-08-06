import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <section
      className="projects section-pad page-shell"
      id="projetos"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        number="05"
        title="Necessidades transformadas em experiências digitais."
        description="Estudos conceituais identificados com transparência, enquanto os primeiros projetos reais são preparados para publicação."
      />
      <div className="project-list">
        <article>
          <div className="project-art website-art" aria-hidden="true">
            <div>
              <i />
              <i />
              <i />
            </div>
            <b />
            <span />
            <span />
          </div>
          <div>
            <small>Projeto conceitual — Website institucional</small>
            <h3>Presença profissional para negócios locais.</h3>
            <p>
              Estrutura de conteúdo, UX, SEO local e conversão para transformar
              informação em contato.
            </p>
            <ArrowUpRight />
          </div>
        </article>
        <article>
          <div className="project-art automation-art" aria-hidden="true">
            <span>Formulário</span>
            <i>→</i>
            <span>Organização</span>
            <i>→</i>
            <span>Atendimento</span>
          </div>
          <div>
            <small>Projeto conceitual — Automação</small>
            <h3>Fluxos mais rápidos e organizados.</h3>
            <p>
              Integrações que reduzem repetição e melhoram a passagem de
              informações.
            </p>
            <ArrowUpRight />
          </div>
        </article>
      </div>
    </section>
  );
}
