import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Informações sobre privacidade e tratamento de dados na ServAgency.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <a className="legal-back" href="/"><ArrowLeft aria-hidden="true" /> Voltar para a ServAgency</a>
        <span className="section-index">PRIVACY / 2026</span>
        <h1>Privacidade sem caixa-preta.</h1>
        <p className="legal-lead">
          O formulário do site valida seus dados no navegador e prepara uma mensagem para o WhatsApp. A ServAgency não mantém um banco de dados próprio com essas submissões.
        </p>
        <section>
          <h2>Dados informados</h2>
          <p>Nome, empresa opcional, contato, necessidade e mensagem são usados apenas para preparar o contato solicitado por você.</p>
        </section>
        <section>
          <h2>Analytics</h2>
          <p>O site pode usar Vercel Analytics e Speed Insights para métricas técnicas e agregadas de uso e desempenho.</p>
        </section>
        <section>
          <h2>Links externos</h2>
          <p>Projetos, GitHub e WhatsApp são serviços externos com políticas próprias. Ao abrir esses links, o tratamento de dados passa a seguir as regras desses serviços.</p>
        </section>
        <section>
          <h2>Contato</h2>
          <p>Para dúvidas sobre privacidade, use os mesmos canais de contato apresentados no site.</p>
        </section>
      </div>
    </main>
  );
}
