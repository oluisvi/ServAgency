import {
  Bot,
  Braces,
  ChartNoAxesCombined,
  Globe2,
  Search,
  Workflow,
} from "lucide-react";

export const navigation = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
] as const;

export const problems = [
  [
    "Não são encontradas",
    "Sites sem estrutura e SEO deixam oportunidades passarem.",
  ],
  [
    "Transmitem pouca confiança",
    "Canais antigos ou inconsistentes enfraquecem a percepção da marca.",
  ],
  [
    "Não trabalham em conjunto",
    "Ferramentas desconectadas geram retrabalho e informação perdida.",
  ],
  [
    "Dependem de tarefas manuais",
    "Processos repetitivos consomem tempo que poderia gerar valor.",
  ],
] as const;

export const services = [
  {
    title: "Websites e experiências digitais",
    description:
      "Sites institucionais, landing pages e soluções web que explicam seu valor e facilitam o próximo passo.",
    icon: Globe2,
  },
  {
    title: "Presença digital e marketing",
    description:
      "Organização de canais, conteúdo inicial e comunicação consistente para fortalecer a marca.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Google e SEO",
    description:
      "Estrutura técnica e presença local para sua empresa ser encontrada com mais facilidade.",
    icon: Search,
  },
  {
    title: "Automações e integrações",
    description:
      "Ferramentas conectadas e menos tarefas repetitivas para liberar tempo da sua equipe.",
    icon: Workflow,
  },
  {
    title: "Inteligência artificial",
    description:
      "IA aplicada com propósito ao atendimento, à organização, à análise e à produtividade.",
    icon: Bot,
  },
  {
    title: "Auditoria digital",
    description:
      "Análise de site, SEO, redes e processos para organizar problemas, prioridades e oportunidades.",
    icon: Braces,
  },
] as const;

export const auditAreas = [
  ["Website e UX", "Clareza"],
  ["Google e SEO", "Descoberta"],
  ["Redes sociais", "Consistência"],
  ["Processos", "Eficiência"],
] as const;

export const processSteps = [
  [
    "Diagnóstico",
    "Entendemos o negócio, o público, o cenário e o que realmente precisa mudar.",
  ],
  [
    "Estratégia",
    "Definimos prioridades, escopo e a solução proporcional ao problema.",
  ],
  [
    "Criação",
    "Unimos design, conteúdo, tecnologia e integrações em uma entrega coerente.",
  ],
  [
    "Publicação",
    "Testamos, ajustamos e colocamos a solução no ar com segurança.",
  ],
  [
    "Evolução",
    "Acompanhamos resultados, manutenção e melhorias quando fizer sentido.",
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

export const faqs = [
  [
    "Vocês trabalham apenas com sites?",
    "Não. Também atuamos com presença digital, Google, SEO, auditorias, automações, inteligência artificial e soluções sob demanda.",
  ],
  [
    "Minha empresa não sabe o que precisa. Vocês ajudam?",
    "Sim. Começamos entendendo o cenário e transformamos o problema em um plano claro e proporcional.",
  ],
  [
    "Vocês atendem qualquer segmento?",
    "Atendemos diferentes segmentos, desde que exista aderência entre o problema e nossa capacidade de gerar uma solução responsável.",
  ],
  [
    "Quanto custa?",
    "O investimento depende do escopo, da complexidade e do acompanhamento necessário. O diagnóstico inicial ajuda a dimensionar a proposta.",
  ],
  [
    "Quanto tempo leva?",
    "O prazo varia conforme o escopo. Uma estimativa transparente é apresentada depois de entendermos a necessidade.",
  ],
  [
    "Vocês oferecem manutenção?",
    "Sim. Podemos cuidar de suporte, atualizações, SEO, conteúdo, automações e evolução contínua.",
  ],
  [
    "Vocês garantem resultados?",
    "Não prometemos resultados impossíveis. Nosso compromisso é com estratégia, qualidade técnica, transparência e melhoria contínua.",
  ],
  [
    "O atendimento pode ser remoto?",
    "Sim. O processo pode acontecer de forma remota, com encontros e acompanhamento online.",
  ],
] as const;

type PortfolioProjectBase = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  capabilities: readonly string[];
  liveUrl: string;
  sourceUrl: string;
};

type PortfolioScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PortfolioProject = PortfolioProjectBase &
  (
    | {
        featured: true;
        screenshot: PortfolioScreenshot;
      }
    | {
        featured: false;
        screenshot?: never;
      }
  );

export const featuredProjects = [
  {
    slug: "atlas-finance-ai",
    name: "Atlas Finance AI",
    category: "Produto de finan\u00e7as pessoais",
    summary:
      "Aplica\u00e7\u00e3o de finan\u00e7as pessoais para planejamento, m\u00faltiplas moedas e relat\u00f3rios, com insights determin\u00edsticos e explic\u00e1veis.",
    capabilities: [
      "Planejamento financeiro",
      "M\u00faltiplas moedas",
      "Relat\u00f3rios",
      "Insights determin\u00edsticos e explic\u00e1veis",
    ],
    liveUrl: "https://atlas-finance-web.onrender.com/",
    sourceUrl: "https://github.com/oluisvi/atlas-finance-ai",
    featured: true,
    screenshot: {
      src: "/projects/atlas-finance.webp",
      alt: "Painel financeiro do Atlas Finance AI",
      width: 1600,
      height: 900,
    },
  },
  {
    slug: "flowdesk",
    name: "FlowDesk",
    category: "SaaS de gest\u00e3o operacional",
    summary:
      "Plataforma para pequenas equipes centralizarem clientes, projetos e tarefas, com colabora\u00e7\u00e3o e automa\u00e7\u00f5es visuais para processos repetitivos.",
    capabilities: [
      "Gest\u00e3o de clientes e projetos",
      "Kanban e colabora\u00e7\u00e3o",
      "Workflows visuais",
      "Automa\u00e7\u00e3o de processos",
    ],
    liveUrl: "https://flowdeskwebapp.vercel.app",
    sourceUrl: "https://github.com/oluisvi/FlowDesk",
    featured: true,
    screenshot: {
      src: "/projects/flowdesk.webp",
      alt: "Dashboard operacional do FlowDesk",
      width: 1600,
      height: 900,
    },
  },
  {
    slug: "shop-co",
    name: "Shop.co",
    category: "E-commerce full-stack",
    summary:
      "E-commerce de moda com cat\u00e1logo, carrinho, pagamentos e gerenciamento de produtos, desenvolvido a partir de uma interface revitalizada para uma aplica\u00e7\u00e3o full-stack.",
    capabilities: [
      "E-commerce full-stack",
      "Cat\u00e1logo e carrinho",
      "Pagamentos",
      "Gest\u00e3o de produtos",
    ],
    liveUrl: "https://shop-co-store.vercel.app/",
    sourceUrl: "https://github.com/oluisvi/shop-co-ecommerce",
    featured: true,
    screenshot: {
      src: "/projects/shop-co.webp",
      alt: "Interface do e-commerce Shop.co",
      width: 1600,
      height: 900,
    },
  },
] as const satisfies readonly PortfolioProject[];

export const complementaryProjects = [
  {
    slug: "ecoeduca",
    name: "EcoEduca",
    category: "Projeto acad\u00eamico colaborativo",
    summary:
      "Plataforma de educa\u00e7\u00e3o ambiental com conte\u00fados, question\u00e1rios e navega\u00e7\u00e3o responsiva.",
    capabilities: [
      "Conte\u00fado educacional",
      "Question\u00e1rios",
      "Acessibilidade",
      "Design responsivo",
    ],
    liveUrl: "https://ecoeduca.onrender.com/",
    sourceUrl: "https://github.com/oluisvi/EcoEduca",
    featured: false,
  },
  {
    slug: "sanctuary-hotel",
    name: "Sanctuary Hotel",
    category: "Estudo de design",
    summary:
      "Estudo de design para uma experi\u00eancia digital de hotel.",
    capabilities: [
      "Design de interface",
      "Experi\u00eancia de navega\u00e7\u00e3o",
    ],
    liveUrl: "https://sanctuaryhotel.my.canva.site/",
    sourceUrl: "https://github.com/oluisvi/Design-Sanctuary-Hotel",
    featured: false,
  },
] as const satisfies readonly PortfolioProject[];

export const aboutPrinciples = [
  {
    title: "Estrat\u00e9gia antes da ferramenta",
    description:
      "Entendemos o problema do neg\u00f3cio antes de selecionar a tecnologia.",
  },
  {
    title: "Decis\u00f5es explic\u00e1veis",
    description:
      "Tornamos escopo, escolhas e andamento compreens\u00edveis para todos os envolvidos.",
  },
  {
    title: "Parceria pr\u00f3xima",
    description:
      "Trabalhamos com comunica\u00e7\u00e3o direta e responsabilidade compartilhada.",
  },
] as const;
