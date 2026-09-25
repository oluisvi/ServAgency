import { outcomes, processSteps, services, principles, faqs } from "@/content/site";
import type { Locale } from "./config";

const enOutcomes = [["01", "Your company is not being found.", "Structure, SEO, and digital presence that turn searches into discovery."], ["02", "Your digital presence does not build trust.", "Design, content, and an experience consistent with the real value of the business."], ["03", "Tools and processes do not communicate.", "Systems and integrations connecting information, teams, and operations."], ["04", "The team loses time to repetitive tasks.", "Automation and AI applied where measurable operational gains exist."]] as const;
const enServices = [
  ["Websites and digital experiences", "Corporate sites, landing pages, web products, and interactive experiences with identity, clarity, and performance."],
  ["Digital presence and brand", "Coherent visual systems and digital presence that make the company look as good as the work it delivers."],
  ["Google and SEO", "Technical foundations, content architecture, and local presence to increase discovery without empty shortcuts."],
  ["Automation and integrations", "Connected workflows and routines that reduce rework and keep processes predictable."],
  ["Artificial intelligence", "AI applied to service, analysis, organization, and productivity with context, human review, and purpose."],
  ["Interactive and 3D experiences", "Spatial interfaces and WebGL when the format improves understanding, desire, narrative, or conversion."],
  ["Digital audit", "An assessment of the current landscape to prioritize problems, opportunities, and next steps before choosing tools."],
] as const;
const enProcess = [["Diagnosis", "We understand the business, audience, context, and what truly needs to change."], ["Strategy", "We define priorities, scope, and a direction proportional to the problem."], ["Creation", "We combine design, content, technology, and integrations into a coherent solution."], ["Launch", "We test, refine, and safely put the experience live."], ["Evolution", "We follow results, maintenance, and improvements whenever they make sense."]] as const;
const enPrinciples = [["01", "Strategy before tools", "The problem defines the technology — never the other way around."], ["02", "Explainable decisions", "Scope, choices, and progress must make sense to those investing in the project."], ["03", "Close partnership", "Direct communication, shared responsibility, and no black boxes."]] as const;
const enFaqs = [["Do you only build websites?", "No. We also work with digital presence, SEO, automation, AI, web products, and tailored interactive experiences."], ["My company does not know exactly what it needs yet. Can you help?", "Yes. The work begins by diagnosing the context and defining the problem before choosing any tool."], ["Do you build 3D projects and immersive experiences?", "Yes, when they improve understanding, narrative, or conversion. 3D is not added as decoration or an automatic requirement."], ["How much does it cost?", "Investment depends on scope, complexity, and required support. The initial diagnosis helps size a proportional proposal."], ["How long does it take?", "Timing varies by scope. We provide an estimate after the problem, dependencies, and finish level are clear."]] as const;

export const localizedContent = (locale: Locale) => ({
  outcomes: locale === "en" ? enOutcomes : outcomes,
  services: services.map((service, index) => locale === "en" ? { ...service, title: enServices[index][0], description: enServices[index][1] } : service),
  process: locale === "en" ? enProcess : processSteps,
  principles: locale === "en" ? enPrinciples : principles,
  faqs: locale === "en" ? enFaqs : faqs,
});
