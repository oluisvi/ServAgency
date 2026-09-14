import { faqs } from "@/content/site";

export function FAQ() {
  return (
    <section className="faq section-pad" id="faq" aria-labelledby="faq-title">
      <div className="page-shell faq-grid">
        <div className="faq-heading scene-reveal">
          <span className="section-index">06 / FAQ</span>
          <h2 id="faq-title">Perguntas antes de começar.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details className="scene-reveal" key={question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {question}
                <i aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
