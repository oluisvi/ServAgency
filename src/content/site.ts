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
