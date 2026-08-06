import { processSteps } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section
      className="process section-pad"
      id="processo"
      aria-labelledby="process-title"
    >
      <div className="page-shell">
        <SectionHeading
          number="04"
          title="Do problema à solução, sem complicação."
          description="Um processo transparente para transformar uma necessidade em uma entrega funcional, clara e pronta para evoluir."
          dark
        />
        <ol className="process-route">
          {processSteps.map(([title, description], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <i />
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
