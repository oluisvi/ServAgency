import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Entenda como a ServAgency trata os dados informados no site e como exercer seus direitos.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <article className="page-shell legal-content">
        <Link className="legal-back" href="/">
          ← Voltar para o site
        </Link>
        <span className="eyebrow">PRIVACIDADE · LGPD</span>
        <h1>Política de privacidade</h1>
        <p className="legal-lead">
          Esta política explica, de forma direta, quais dados a ServAgency trata
          quando você visita o site ou entra em contato conosco.
        </p>

        <section>
          <h2>1. Quem controla os dados</h2>
          <p>
            A ServAgency é responsável pelas decisões sobre os dados pessoais
            coletados neste website. Dúvidas e solicitações relacionadas à
            privacidade podem ser enviadas pelo WhatsApp{" "}
            <a href="https://wa.me/5512992568583">(12) 99256-8583</a>.
          </p>
        </section>

        <section>
          <h2>2. Dados tratados</h2>
          <p>Podemos tratar os dados que você fornece voluntariamente:</p>
          <ul>
            <li>nome e empresa;</li>
            <li>WhatsApp ou e-mail;</li>
            <li>tipo de necessidade e conteúdo da mensagem.</li>
          </ul>
          <p>
            Também recebemos métricas agregadas de acesso, como página,
            referência, país aproximado, navegador e tipo de dispositivo. O
            Vercel Web Analytics não associa essas métricas a uma identidade ou
            endereço IP individual.
          </p>
        </section>

        <section>
          <h2>3. Para que usamos os dados</h2>
          <ul>
            <li>responder a solicitações e conversar sobre projetos;</li>
            <li>entender a necessidade apresentada e preparar propostas;</li>
            <li>proteger o site contra abuso e diagnosticar falhas;</li>
            <li>medir uso, conversão e desempenho para melhorar o produto.</li>
          </ul>
          <p>
            O tratamento ocorre para atender à solicitação do próprio titular,
            realizar procedimentos preliminares a um possível contrato e
            observar interesses legítimos relacionados à segurança e melhoria do
            serviço, sempre respeitando os direitos do titular.
          </p>
        </section>

        <section>
          <h2>4. Compartilhamento e operadores</h2>
          <p>
            Utilizamos a Vercel para hospedagem, métricas agregadas e medição de
            desempenho, e o WhatsApp quando você escolhe iniciar uma conversa.
            Esses fornecedores tratam dados conforme seus próprios termos e
            políticas. Não vendemos dados pessoais.
          </p>
        </section>

        <section>
          <h2>5. Retenção e segurança</h2>
          <p>
            Mantemos dados de contato somente pelo período necessário para
            responder, elaborar propostas, cumprir obrigações aplicáveis ou
            resguardar direitos. Adotamos medidas técnicas e organizacionais
            proporcionais ao estágio e à natureza da operação.
          </p>
        </section>

        <section>
          <h2>6. Seus direitos</h2>
          <p>
            Você pode solicitar confirmação do tratamento, acesso, correção,
            informação sobre compartilhamento, oposição, anonimização, bloqueio
            ou eliminação quando aplicável. Para exercer esses direitos, fale
            conosco pelo canal indicado nesta página.
          </p>
        </section>

        <section>
          <h2>7. Cookies e analytics</h2>
          <p>
            O site utiliza Vercel Web Analytics e Speed Insights para métricas
            agregadas e de desempenho. A configuração atual não utiliza cookies
            publicitários nem ferramentas de perfil comportamental.
          </p>
        </section>

        <section>
          <h2>8. Atualizações</h2>
          <p>
            Esta política poderá mudar quando novos canais, integrações ou
            tratamentos forem adicionados. A versão vigente será sempre
            publicada nesta URL.
          </p>
          <p>
            <strong>Última atualização:</strong> 6 de agosto de 2026.
          </p>
        </section>

        <aside className="legal-note">
          Este documento descreve a operação atual do website e deverá ser
          revisado com assessoria jurídica quando a estrutura societária e os
          dados cadastrais definitivos da ServAgency forem formalizados.
        </aside>
      </article>
    </main>
  );
}
