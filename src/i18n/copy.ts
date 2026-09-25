import type { Locale } from "./config";

const copies = {
  "pt-BR": {
    nav: ["Soluções", "Projetos", "Processo", "Studio", "Contato"], headerCta: "Iniciar projeto",
    hero: { meta: ["CREATIVE TECHNOLOGY STUDIO", "JACAREÍ / SP — BRASIL"], eyebrow: "ESTRATÉGIA × DESIGN × ENGENHARIA", lines: ["Construímos sistemas", "digitais que se movem", "com o seu negócio."], emphasis: "se", sculptureLabel: "Logo ServAgency em profundidade interativa", caption: ["IDENTITY IN MOTION", "MOVE POINTER"], body: "Websites, automações, IA, produtos web e experiências interativas desenvolvidos como um único sistema — da ideia ao uso real.", projects: "Explorar projetos", signal: ["PROBLEMA", "ESTRATÉGIA", "TECNOLOGIA", "SOLUÇÃO"], cta: "Falar sobre meu projeto" },
    outcomes: { kicker: "01 / FRICTION", title: "Tecnologia só importa quando muda alguma coisa." },
    services: { kicker: "02 / CAPABILITIES", title: "Da presença digital ao sistema que opera por trás dela." },
    projects: { kicker: "03 / SELECTED WORK", title: "Projetos em movimento, sem transformar a página em uma maratona.", body: "Deixe rodar sozinho, arraste para o lado ou use os controles. As capas usam material real de cada produto e respondem ao foco e ao cursor.", progress: "PROJECTS", pause: "Pausar reprodução automática dos projetos", previous: "Projeto anterior", navigation: "Navegação dos projetos", goTo: "Ir para", next: "Próximo projeto", carousel: "Carrossel de projetos", viewCase: "Ver case", live: "Ver ao vivo", state: "STATE", active: "ACTIVE", visual: "Visual do projeto" },
    process: { kicker: "04 / PROCESS", title: "Uma rota clara do diagnóstico à evolução." },
    about: { kicker: "05 / STUDIO", title: "Mais sistema. Menos ruído.", body: "A ServAgency conecta estratégia, design e engenharia sem transformar tecnologia em espetáculo ou complexidade em desculpa." },
    faq: { kicker: "06 / FAQ", title: "Perguntas antes de começar." },
    contact: { kicker: "07 / START A PROJECT", title: "Tem um problema, uma ideia ou um processo travado?", body: "Vamos definir a rota.", fields: ["Seu nome", "Empresa", "WhatsApp ou e-mail", "Conte um pouco sobre o que precisa mudar"], button: "Preparar mensagem", intro: "Olá! Conheci a ServAgency pelo site.", labels: ["Nome", "Empresa", "Contato", "Projeto"] },
    footer: { body: "Estratégia, design e tecnologia conectados para resolver problemas reais.", location: "Jacareí · São Paulo · Brasil", signature: "Digital systems in motion." },
  },
  en: {
    nav: ["Solutions", "Projects", "Process", "Studio", "Contact"], headerCta: "Start a project",
    hero: { meta: ["CREATIVE TECHNOLOGY STUDIO", "JACAREÍ / SP — BRAZIL"], eyebrow: "STRATEGY × DESIGN × ENGINEERING", lines: ["We build digital", "systems that move", "with your business."], emphasis: "move", sculptureLabel: "Interactive ServAgency logo in depth", caption: ["IDENTITY IN MOTION", "MOVE POINTER"], body: "Websites, automation, AI, web products, and interactive experiences developed as one system — from the idea to real-world use.", projects: "Explore projects", signal: ["PROBLEM", "STRATEGY", "TECHNOLOGY", "SOLUTION"], cta: "Discuss my project" },
    outcomes: { kicker: "01 / FRICTION", title: "Technology only matters when it changes something." },
    services: { kicker: "02 / CAPABILITIES", title: "From digital presence to the system operating behind it." },
    projects: { kicker: "03 / SELECTED WORK", title: "Projects in motion, without turning the page into a marathon.", body: "Let it run, drag sideways, or use the controls. Covers use real material from each product and respond to focus and the pointer.", progress: "PROJECTS", pause: "Pause automatic project playback", previous: "Previous project", navigation: "Project navigation", goTo: "Go to", next: "Next project", carousel: "Project carousel", viewCase: "View case", live: "View live", state: "STATE", active: "ACTIVE", visual: "Project visual" },
    process: { kicker: "04 / PROCESS", title: "A clear route from diagnosis to evolution." },
    about: { kicker: "05 / STUDIO", title: "More system. Less noise.", body: "ServAgency connects strategy, design, and engineering without turning technology into spectacle or complexity into an excuse." },
    faq: { kicker: "06 / FAQ", title: "Questions before we begin." },
    contact: { kicker: "07 / START A PROJECT", title: "Do you have a problem, an idea, or a stalled process?", body: "Let’s define the route.", fields: ["Your name", "Company", "WhatsApp or email", "Tell us what needs to change"], button: "Prepare message", intro: "Hello! I found ServAgency through the website.", labels: ["Name", "Company", "Contact", "Project"] },
    footer: { body: "Strategy, design, and technology connected to solve real problems.", location: "Jacareí · São Paulo · Brazil", signature: "Digital systems in motion." },
  },
} as const;

export type SiteCopy = (typeof copies)[Locale];
export const getSiteCopy = (locale: Locale): SiteCopy => copies[locale];
