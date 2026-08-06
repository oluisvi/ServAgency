"use client";

import { Plus } from "lucide-react";
import { faqs } from "@/content/site";
import { useState } from "react";

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section
      className="faq section-pad page-shell"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div>
        <span className="section-number">07</span>
        <h2 id="faq-title">Perguntas antes de começar.</h2>
        <p>
          Respostas diretas, sem promessas impossíveis ou soluções empurradas.
        </p>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <article key={question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
                aria-controls={`faq-answer-${index}`}
              >
                {question}
                <Plus aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`faq-answer-${index}`}
              className={open === index ? "is-open" : ""}
            >
              <p>{answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
