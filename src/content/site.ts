import { Bot, Braces, ChartNoAxesCombined, Cuboid, Globe2, Search, Workflow } from "lucide-react";

export const navigation = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Studio", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export const outcomes = [
  ["01", "Sua empresa não é encontrada.", "Estrutura, SEO e presença digital para transformar busca em descoberta."],
  ["02", "A presença digital não transmite confiança.", "Design, conteúdo e experiência coerentes com o valor real do negócio."],
  ["03", "Ferramentas e processos não conversam.", "Sistemas e integrações que conectam informação, equipe e operação."],
  ["04", "O time perde tempo em tarefas repetitivas.", "Automação e IA aplicadas onde existe ganho operacional mensurável."],
] as const;

export const services = [
  { index: "01", title: "Websites e experiências digitais", description: "Sites institucionais, landing pages, produtos web e experiências interativas com identidade, clareza e performance.", icon: Globe2, label: "WEB / EXPERIENCE" },
  { index: "02", title: "Presença digital e marca", description: "Sistemas visuais e presença digital coerentes para fazer a empresa parecer tão boa quanto o trabalho que entrega.", icon: ChartNoAxesCombined, label: "BRAND / PRESENCE" },
  { index: "03", title: "Google e SEO", description: "Fundação técnica, arquitetura de conteúdo e presença local para aumentar descoberta sem atalhos vazios.", icon: Search, label: "DISCOVERY / SEO" },
  { index: "04", title: "Automações e integrações", description: "Workflows e rotinas conectadas para reduzir retrabalho e manter processos previsíveis.", icon: Workflow, label: "SYSTEMS / AUTOMATION" },
  { index: "05", title: "Inteligência artificial", description: "IA aplicada a atendimento, análise, organização e produtividade com contexto, revisão humana e propósito.", icon: Bot, label: "AI / OPERATIONS" },
  { index: "06", title: "Experiências interativas e 3D", description: "Interfaces espaciais e WebGL quando o formato melhora entendimento, desejo, narrativa ou conversão.", icon: Cuboid, label: "SPATIAL / INTERACTIVE" },
  { index: "07", title: "Auditoria digital", description: "Leitura do cenário atual para priorizar problemas, oportunidades e próximos passos antes de escolher ferramentas.", icon: Braces, label: "AUDIT / STRATEGY" },
] as const;

export const processSteps = [
  ["Diagnóstico", "Entendemos negócio, público, cenário e o que realmente precisa mudar."],
  ["Estratégia", "Definimos prioridades, escopo e uma direção proporcional ao problema."],
  ["Criação", "Unimos design, conteúdo, tecnologia e integrações em uma solução coerente."],
  ["Publicação", "Testamos, refinamos e colocamos a experiência no ar com segurança."],
  ["Evolução", "Acompanhamos resultados, manutenção e melhorias quando fazem sentido."],
] as const;

export type ProjectTreatment = "ai" | "spatial" | "editorial" | "system" | "data" | "commerce";
export type TechnologyIconName =
  | "react"
  | "nextdotjs"
  | "typescript"
  | "nodedotjs"
  | "n8n"
  | "openai"
  | "vercel"
  | "google";

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  capabilities: readonly string[];
  liveUrl?: string;
  sourceUrl?: string;
  visual: {
    treatment: ProjectTreatment;
    label: string;
    kicker: string;
    src?: string;
    alt?: string;
    fit?: "cover" | "contain";
  };
};

export const flagshipProjects: readonly PortfolioProject[] = [
  {
    slug: "removeit", name: "RemoveIT", year: "2026", category: "Visão computacional + produto web",
    summary: "Ferramenta local-first para remoção assistida de marcas d’água autorizadas, combinando detecção automática, máscara editável e inpainting com revisão humana.",
    capabilities: ["Next.js 16", "FastAPI", "OpenCV / LaMa", "Privacidade local-first"],
    sourceUrl: "https://github.com/oluisvi/RemoveIT",
    visual: { treatment: "ai", label: "DETECT → REVIEW → REBUILD", kicker: "AI WITH HUMAN CONTROL" },
  },
  {
    slug: "crivo-3d", name: "Crivo 3D", year: "2026", category: "Website imersivo + WebGL",
    summary: "Experiência institucional para uma empresa de impressão 3D em que camada, volume e material viram linguagem visual e interação.",
    capabilities: ["React + TypeScript", "Three.js", "Entrada sincronizada", "Viewer 3D"],
    sourceUrl: "https://github.com/oluisvi/Crivo-3D",
    visual: { treatment: "spatial", label: "IDEA → LAYER → FORM", kicker: "SPATIAL BRAND EXPERIENCE" },
  },
  {
    slug: "ruvro", name: "Ruvro & Co", year: "2026", category: "Luxury digital showroom",
    summary: "Showroom editorial para uma curadoria privada de relógios, desenhado para transformar descoberta em desejo, contexto, confiança e acesso privado.",
    capabilities: ["Direção editorial", "Storytelling de produto", "Motion cinematográfico", "Conversão privada"],
    liveUrl: "https://ruvro.vercel.app", sourceUrl: "https://github.com/oluisvi/Ruvro",
    visual: { treatment: "editorial", label: "DESIRE → PRIVATE ACCESS", kicker: "EDITORIAL COMMERCE" },
  },
  {
    slug: "lamims", name: "Lamim's Barbershop", year: "2026", category: "Experiência espacial 3D",
    summary: "Uma porta digital para a barbearia: introdução guiada, percurso espacial, hotspots informativos e agendamento persistente com fallback acessível.",
    capabilities: ["Three.js / R3F", "Narrativa espacial", "Quality tiers", "Conversão local"],
    liveUrl: "https://lamim-s-barbershop.vercel.app/", sourceUrl: "https://github.com/oluisvi/Lamim-s-Barbershop",
    visual: { treatment: "spatial", label: "GUIDED → FREE", kicker: "DIGITAL SPACE" },
  },
  {
    slug: "flowdesk", name: "FlowDesk", year: "2026", category: "SaaS de operações e automação",
    summary: "Workspace operacional para pequenas equipes centralizarem clientes, projetos, tarefas, colaboração e workflows visuais automatizados.",
    capabilities: ["Gestão operacional", "Kanban", "Workflows visuais", "Automação"],
    liveUrl: "https://flowdeskwebapp.vercel.app", sourceUrl: "https://github.com/oluisvi/FlowDesk",
    visual: { treatment: "system", label: "ORGANIZE → AUTOMATE", kicker: "OPERATIONS SYSTEM" },
  },
  {
    slug: "atlas-finance-ai", name: "Atlas Finance AI", year: "2026", category: "Produto de finanças pessoais",
    summary: "Aplicação de planejamento financeiro com múltiplas moedas, relatórios e insights determinísticos e explicáveis.",
    capabilities: ["Planejamento", "Múltiplas moedas", "Relatórios", "Insights explicáveis"],
    liveUrl: "https://atlas-finance-web.onrender.com/", sourceUrl: "https://github.com/oluisvi/atlas-finance-ai",
    visual: { treatment: "data", label: "DATA → DECISION", kicker: "FINANCIAL CLARITY" },
  },
  {
    slug: "shop-co", name: "Shop.co", year: "2026", category: "E-commerce full-stack",
    summary: "Experiência de comércio digital com catálogo, carrinho, pagamentos e gestão de produtos, evoluída de estudo de interface para produto completo.",
    capabilities: ["Catálogo", "Carrinho", "Pagamentos", "Gestão de produtos"],
    liveUrl: "https://shop-co-store.vercel.app/", sourceUrl: "https://github.com/oluisvi/shop-co-ecommerce",
    visual: { treatment: "commerce", label: "DISCOVER → BUY", kicker: "COMMERCE EXPERIENCE" },
  },
];

export const technologies = ["React", "Next.js", "TypeScript", "Node.js", "Three.js", "n8n", "OpenAI", "Vercel", "Google"] as const;

export const principles = [
  ["01", "Estratégia antes da ferramenta", "O problema define a tecnologia — nunca o contrário."],
  ["02", "Decisões explicáveis", "Escopo, escolhas e andamento precisam fazer sentido para quem investe no projeto."],
  ["03", "Parceria próxima", "Comunicação direta, responsabilidade compartilhada e construção sem caixa-preta."],
] as const;

export const faqs = [
  ["Vocês trabalham apenas com sites?", "Não. Também atuamos com presença digital, SEO, automações, IA, produtos web e experiências interativas sob medida."],
  ["Minha empresa ainda não sabe exatamente o que precisa. Vocês ajudam?", "Sim. O trabalho começa pelo diagnóstico do cenário e pela definição do problema antes da escolha de qualquer ferramenta."],
  ["Vocês fazem projetos com 3D e experiências imersivas?", "Sim, quando isso melhora entendimento, narrativa ou conversão. 3D não entra como decoração nem como requisito automático."],
  ["Quanto custa?", "O investimento depende do escopo, complexidade e acompanhamento necessário. O diagnóstico inicial ajuda a dimensionar uma proposta proporcional."],
  ["Quanto tempo leva?", "O prazo varia conforme o escopo. A estimativa é apresentada depois que problema, dependências e nível de acabamento estão claros."],
] as const;
