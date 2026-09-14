import {
  Bot,
  Braces,
  ChartNoAxesCombined,
  Cuboid,
  Globe2,
  Search,
  Workflow,
} from "lucide-react";

export const navigation = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export const outcomes = [
  {
    index: "01",
    problem: "Sua empresa não é encontrada.",
    outcome: "Estrutura, SEO e presença digital para transformar busca em descoberta.",
  },
  {
    index: "02",
    problem: "A presença digital não transmite confiança.",
    outcome: "Design, conteúdo e experiência coerentes com o valor do negócio.",
  },
  {
    index: "03",
    problem: "Ferramentas e processos não conversam.",
    outcome: "Integrações e sistemas que conectam informação, equipe e operação.",
  },
  {
    index: "04",
    problem: "O time perde tempo em tarefas repetitivas.",
    outcome: "Automação e IA aplicadas onde realmente existe ganho operacional.",
  },
] as const;

export const services = [
  {
    index: "01",
    title: "Websites e experiências digitais",
    description:
      "Sites institucionais, landing pages, produtos web e experiências interativas com clareza, performance e identidade própria.",
    icon: Globe2,
    label: "WEB / EXPERIENCE",
  },
  {
    index: "02",
    title: "Presença digital e marca",
    description:
      "Organização de canais, conteúdo inicial e sistemas visuais consistentes para a empresa parecer tão boa quanto o trabalho que entrega.",
    icon: ChartNoAxesCombined,
    label: "BRAND / PRESENCE",
  },
  {
    index: "03",
    title: "Google e SEO",
    description:
      "Fundação técnica, arquitetura de conteúdo e presença local para aumentar descoberta sem atalhos vazios.",
    icon: Search,
    label: "DISCOVERY / SEO",
  },
  {
    index: "04",
    title: "Automações e integrações",
    description:
      "Workflows, integrações e rotinas conectadas para reduzir retrabalho e manter processos previsíveis.",
    icon: Workflow,
    label: "SYSTEMS / AUTOMATION",
  },
  {
    index: "05",
    title: "Inteligência artificial",
    description:
      "IA aplicada a atendimento, análise, organização e produtividade com contexto, controle e propósito.",
    icon: Bot,
    label: "AI / OPERATIONS",
  },
  {
    index: "06",
    title: "Experiências interativas e 3D",
    description:
      "Interfaces espaciais, narrativas imersivas e experiências WebGL quando o formato melhora entendimento, desejo ou conversão.",
    icon: Cuboid,
    label: "SPATIAL / INTERACTIVE",
  },
  {
    index: "07",
    title: "Auditoria digital",
    description:
      "Leitura do cenário atual para priorizar problemas, oportunidades e próximos passos antes de escolher ferramentas.",
    icon: Braces,
    label: "AUDIT / STRATEGY",
  },
] as const;

export const processSteps = [
  [
    "Diagnóstico",
    "Entendemos o negócio, o público, o cenário e o que realmente precisa mudar.",
  ],
  [
    "Estratégia",
    "Definimos prioridades, escopo e uma direção proporcional ao problema.",
  ],
  [
    "Criação",
    "Unimos design, conteúdo, tecnologia e integrações em uma solução coerente.",
  ],
  [
    "Publicação",
    "Testamos, refinamos e colocamos a experiência no ar com segurança.",
  ],
  [
    "Evolução",
    "Acompanhamos resultados, manutenção e melhorias quando fazem sentido.",
  ],
] as const;

export type TechnologyIconName =
  | "react"
  | "nextdotjs"
  | "typescript"
  | "nodedotjs"
  | "n8n"
  | "openai"
  | "vercel"
  | "google";

export const technologies = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "n8n", icon: "n8n" },
  { name: "OpenAI", icon: "openai" },
  { name: "Vercel", icon: "vercel" },
  { name: "Google", icon: "google" },
] as const satisfies ReadonlyArray<{
  name: string;
  icon: TechnologyIconName;
}>;

export type ProjectTreatment =
  | "editorial"
  | "spatial"
  | "system"
  | "data"
  | "commerce";

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  capabilities: readonly string[];
  liveUrl: string;
  sourceUrl?: string;
  role: "flagship" | "archive";
  visual: {
    treatment: ProjectTreatment;
    label: string;
  };
};

export const flagshipProjects = [
  {
    slug: "ruvro",
    name: "Ruvro & Co",
    category: "Luxury digital showroom",
    summary:
      "Showroom digital editorial para uma curadoria privada de relógios, desenhado para transformar descoberta em desejo, contexto, confiança e acesso privado.",
    capabilities: [
      "Direção editorial",
      "Storytelling de produto",
      "Motion cinematográfico",
      "Conversão privada",
    ],
    liveUrl: "https://ruvro.vercel.app",
    sourceUrl: "https://github.com/oluisvi/Ruvro",
    role: "flagship",
    visual: { treatment: "editorial", label: "DESIRE → PRIVATE ACCESS" },
  },
  {
    slug: "lamims",
    name: "Lamim's Barbershop",
    category: "Experiência espacial 3D",
    summary:
      "Uma porta digital para a barbearia: introdução guiada, percurso espacial 3D, hotspots informativos e agendamento persistente com fallback acessível.",
    capabilities: [
      "Three.js / R3F",
      "Narrativa espacial",
      "Quality tiers",
      "Conversão local",
    ],
    liveUrl: "https://lamim-s-barbershop.vercel.app/",
    sourceUrl: "https://github.com/oluisvi/Lamim-s-Barbershop",
    role: "flagship",
    visual: { treatment: "spatial", label: "GUIDED → FREE EXPLORATION" },
  },
  {
    slug: "flowdesk",
    name: "FlowDesk",
    category: "SaaS de operações e automação",
    summary:
      "Workspace operacional para pequenas equipes centralizarem clientes, projetos, tarefas, colaboração e workflows visuais automatizados.",
    capabilities: [
      "Gestão operacional",
      "Kanban colaborativo",
      "Workflows visuais",
      "Automação de processos",
    ],
    liveUrl: "https://flowdeskwebapp.vercel.app",
    sourceUrl: "https://github.com/oluisvi/FlowDesk",
    role: "flagship",
    visual: { treatment: "system", label: "ORGANIZE → AUTOMATE" },
  },
  {
    slug: "atlas-finance-ai",
    name: "Atlas Finance AI",
    category: "Produto de finanças pessoais",
    summary:
      "Aplicação de planejamento financeiro com múltiplas moedas, relatórios e insights determinísticos e explicáveis.",
    capabilities: [
      "Planejamento financeiro",
      "Múltiplas moedas",
      "Relatórios",
      "Insights explicáveis",
    ],
    liveUrl: "https://atlas-finance-web.onrender.com/",
    sourceUrl: "https://github.com/oluisvi/atlas-finance-ai",
    role: "flagship",
    visual: { treatment: "data", label: "DATA → DECISION" },
  },
  {
    slug: "shop-co",
    name: "Shop.co",
    category: "E-commerce full-stack",
    summary:
      "Experiência de comércio digital com catálogo, carrinho, pagamentos e gestão de produtos, evoluída de estudo de interface para produto completo.",
    capabilities: [
      "Catálogo",
      "Carrinho",
      "Pagamentos",
      "Gestão de produtos",
    ],
    liveUrl: "https://shop-co-store.vercel.app/",
    sourceUrl: "https://github.com/oluisvi/shop-co-ecommerce",
    role: "flagship",
    visual: { treatment: "commerce", label: "DISCOVER → BUY" },
  },
] as const satisfies readonly PortfolioProject[];

export const archiveProjects = [
  {
    slug: "ecoeduca",
    name: "EcoEduca",
    category: "Projeto acadêmico colaborativo",
    summary:
      "Plataforma de educação ambiental com conteúdo, questionários, acessibilidade e navegação responsiva.",
    capabilities: ["Conteúdo educacional", "Questionários", "Acessibilidade"],
    liveUrl: "https://ecoeduca.onrender.com/",
    sourceUrl: "https://github.com/oluisvi/EcoEduca",
    role: "archive",
    visual: { treatment: "system", label: "EDUCATION" },
  },
  {
    slug: "sanctuary-hotel",
    name: "Sanctuary Hotel",
    category: "Estudo de design",
    summary: "Estudo visual para uma experiência digital de hotelaria.",
    capabilities: ["Design de interface", "Experiência de navegação"],
    liveUrl: "https://sanctuaryhotel.my.canva.site/",
    sourceUrl: "https://github.com/oluisvi/Design-Sanctuary-Hotel",
    role: "archive",
    visual: { treatment: "editorial", label: "HOSPITALITY" },
  },
] as const satisfies readonly PortfolioProject[];

export const aboutPrinciples = [
  {
    title: "Estratégia antes da ferramenta",
    description:
      "Entendemos o problema do negócio antes de selecionar tecnologia, formato ou efeito.",
  },
  {
    title: "Decisões explicáveis",
    description:
      "Escopo, escolhas e andamento precisam fazer sentido para quem está investindo no projeto.",
  },
  {
    title: "Parceria próxima",
    description:
      "Comunicação direta, responsabilidade compartilhada e construção sem caixa-preta.",
  },
] as const;

export const faqs = [
  [
    "Vocês trabalham apenas com sites?",
    "Não. Também atuamos com presença digital, SEO, automações, inteligência artificial, produtos web e experiências interativas sob medida.",
  ],
  [
    "Minha empresa não sabe exatamente o que precisa. Vocês ajudam?",
    "Sim. O trabalho começa pelo diagnóstico do cenário e pela definição do problema antes da escolha de qualquer ferramenta.",
  ],
  [
    "Vocês fazem projetos com 3D e experiências imersivas?",
    "Sim, quando isso melhora entendimento, narrativa ou conversão. 3D não entra como decoração nem como requisito automático.",
  ],
  [
    "Quanto custa?",
    "O investimento depende do escopo, da complexidade e do acompanhamento necessário. O diagnóstico inicial ajuda a dimensionar uma proposta proporcional.",
  ],
  [
    "Quanto tempo leva?",
    "O prazo varia conforme o escopo. A estimativa é apresentada depois que o problema, as dependências e o nível de acabamento estão claros.",
  ],
  [
    "Vocês oferecem manutenção e evolução?",
    "Sim. Podemos cuidar de suporte, atualizações, SEO, conteúdo, automações e evolução contínua conforme a necessidade.",
  ],
] as const;
