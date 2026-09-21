export type CasePaletteColor = {
  name: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  challenge: string;
  concept: string;
  result: string;
  liveUrl?: string;
  sourceUrl?: string;
  cover: string;
  coverAlt: string;
  palette: readonly CasePaletteColor[];
  principles: readonly { title: string; text: string }[];
  process: readonly { step: string; title: string; text: string }[];
  stack: readonly string[];
  gallery: readonly { src: string; alt: string; caption: string; fit?: "cover" | "contain" }[];
  sourceNote: string;
  theme: {
    bg: string;
    surface: string;
    text: string;
    muted: string;
    accent: string;
    accentText: string;
  };
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "crivo-3d",
    eyebrow: "BRAND SITE / IMMERSIVE 3D",
    title: "Crivo 3D",
    subtitle: "Transformar a própria lógica da impressão 3D em linguagem de marca.",
    intro:
      "O projeto parte de uma ideia simples: se a Crivo fabrica objetos camada por camada, o site também deveria parecer construído em camadas, volume e material. A experiência usa o símbolo da marca como matéria-prima espacial e faz o visitante perceber o processo antes mesmo de ler a explicação.",
    challenge:
      "Criar uma presença digital para uma empresa de impressão 3D sem cair no repertório visual genérico de tecnologia, catálogo ou maker. O site precisava demonstrar capacidade técnica e acabamento, mas continuar claro para quem chega com uma necessidade prática.",
    concept:
      "IDEIA → CRIVO → CAMADA → FORMA. O conceito documentado no projeto transforma fabricação em narrativa: entrada sincronizada com o primeiro frame estabilizado do WebGL, hero procedural inspirado no símbolo da marca e um sistema visual escuro com sinal laranja para reforçar matéria, precisão e transformação.",
    result:
      "Uma experiência institucional em que o 3D não entra como decoração: ele explica a proposta da empresa. O sistema inclui entrada temática, hero procedural, motion controlado, carrossel em profundidade e fallbacks para dispositivos com menor capacidade.",
    sourceUrl: "https://github.com/oluisvi/Crivo-3D",
    cover: "/projects/crivo-3d.png",
    coverAlt: "Hero do projeto Crivo 3D com símbolo tridimensional",
    palette: [
      { name: "Carbon", value: "#080808" },
      { name: "Signal Orange", value: "#FF4E11" },
      { name: "Warm White", value: "#F2F1ED" },
      { name: "Graphite", value: "#343434" },
    ],
    principles: [
      { title: "Forma como argumento", text: "A peça 3D inspirada na marca comunica o serviço antes de qualquer lista de capacidades." },
      { title: "Motion sincronizado", text: "A entrada espera a cena estabilizar antes de revelar a interface, evitando um hero vazio ou quebrado." },
      { title: "3D proporcional", text: "A experiência prevê tiers de qualidade e fallback em vez de exigir a mesma carga de todos os dispositivos." },
    ],
    process: [
      { step: "01", title: "Extrair a metáfora", text: "A impressão 3D virou o vocabulário da interface: camada, volume, material e transformação." },
      { step: "02", title: "Construir o objeto", text: "O hero usa Three.js procedural, sem depender de um GLB externo para existir." },
      { step: "03", title: "Coreografar a entrada", text: "O carregamento visual é coordenado com a prontidão real da cena e possui timeout de segurança." },
      { step: "04", title: "Abrir possibilidades", text: "O restante do site expande o conceito para processo, aplicações e exploração de modelos demonstrativos." },
    ],
    stack: ["React", "TypeScript", "Vite", "Three.js", "CSS nativo"],
    gallery: [
      { src: "/projects/crivo-3d.png", alt: "Hero Crivo 3D", caption: "Hero espacial inspirado no símbolo da marca." },
      { src: "https://raw.githubusercontent.com/oluisvi/Crivo-3D/main/public/assets/printer-crivo.webp", alt: "Impressora usada no projeto Crivo 3D", caption: "Fotografia real usada como evidência de fabricação." },
      { src: "https://raw.githubusercontent.com/oluisvi/Crivo-3D/main/public/assets/og-crivo.png", alt: "Composição social do projeto Crivo 3D", caption: "Composição visual criada para o MVP." },
    ],
    sourceNote: "Case construído a partir do README, assets e implementação pública do repositório Crivo 3D.",
    theme: { bg: "#080808", surface: "#111111", text: "#F2F1ED", muted: "#9D9B95", accent: "#FF4E11", accentText: "#090909" },
  },
  {
    slug: "ruvro",
    eyebrow: "EDITORIAL COMMERCE / PRIVATE SHOWROOM",
    title: "Ruvro & Co",
    subtitle: "Desejo, contexto e confiança antes do acesso privado.",
    intro:
      "A Ruvro foi tratada menos como uma loja e mais como uma boutique editorial. O website ocupa o espaço entre descoberta social e conversa privada, usando produto em escala, ritmo cinematográfico e curadoria como linguagem de confiança.",
    challenge:
      "Criar uma experiência de relógios de alto valor sem parecer um e-commerce convencional nem recorrer ao clichê visual de luxo preto e dourado. A interface precisava construir desejo sem perder clareza e discrição.",
    concept:
      "The Curator's Light. O relógio permanece protagonista enquanto luz, material, silhueta e detalhe são revelados progressivamente. A jornada documentada é Desire → Context → Confidence → Private Access.",
    result:
      "Um showroom editorial com home narrativa, coleção, páginas de peça, Ruvro Private e interação 360°. O motion é subordinado ao produto e a arquitetura separa conteúdo, dados e apresentação para permitir evolução futura.",
    liveUrl: "https://ruvro.vercel.app/",
    sourceUrl: "https://github.com/oluisvi/Ruvro",
    cover: "https://raw.githubusercontent.com/oluisvi/Ruvro/main/docs/concepts/ruvro-home-concept.png",
    coverAlt: "Conceito da home Ruvro & Co",
    palette: [
      { name: "Graphite", value: "#0B0B0A" },
      { name: "Porcelain", value: "#F2EEE6" },
      { name: "Steel", value: "#9B9B98" },
      { name: "Champagne", value: "#B59A6D" },
    ],
    principles: [
      { title: "Produto primeiro", text: "Imagem e detalhe ocupam mais espaço que a interface; UI atua como moldura, não como protagonista." },
      { title: "Assimetria controlada", text: "Composição editorial e espaço negativo criam ritmo sem sacrificar legibilidade." },
      { title: "Conversão privada", text: "A experiência conduz para comunidade e contato, não para um checkout genérico." },
    ],
    process: [
      { step: "01", title: "Definir a jornada", text: "Descoberta e desejo abrem espaço para contexto e confiança antes do contato privado." },
      { step: "02", title: "Criar a luz do curador", text: "Silhueta, forma, dial e material são revelados como capítulos visuais." },
      { step: "03", title: "Estruturar a coleção", text: "O catálogo editorial preserva hierarquia e leitura de produto sem parecer grade de marketplace." },
      { step: "04", title: "Conectar ao acesso", text: "A jornada fecha em comunidade e conversa privada, alinhada ao modelo da marca." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Playwright", "Vitest"],
    gallery: [
      { src: "https://raw.githubusercontent.com/oluisvi/Ruvro/main/docs/concepts/ruvro-home-concept.png", alt: "Conceito visual Ruvro", caption: "Direção de arte da home." },
      { src: "https://raw.githubusercontent.com/oluisvi/Ruvro/main/public/media/hero-watch.png", alt: "Relógio em composição editorial Ruvro", caption: "Produto tratado como objeto narrativo." },
      { src: "https://raw.githubusercontent.com/oluisvi/Ruvro/main/public/media/community/rolex-cosmograph-daytona/gallery-01.webp", alt: "Relógio em galeria Ruvro", caption: "Exemplo de fotografia de coleção usada no showroom." },
    ],
    sourceNote: "Case baseado no README, conceito The Curator's Light e assets do repositório Ruvro & Co.",
    theme: { bg: "#0B0B0A", surface: "#171715", text: "#F2EEE6", muted: "#A4A099", accent: "#B59A6D", accentText: "#0B0B0A" },
  },
  {
    slug: "alvora-lab",
    eyebrow: "DIGITAL MANUFACTURING / 3D CATALOG",
    title: "Alvora Lab",
    subtitle: "Uma pequena fábrica digital apresentada como produto, catálogo e experiência 3D.",
    intro:
      "A Alvora Lab conecta fabricação digital a uma experiência de marca altamente interativa. O site equilibra catálogo, projetos personalizados e aplicação empresarial com um objeto 3D manipulável logo no hero.",
    challenge:
      "Explicar impressão 3D para públicos diferentes — quem quer comprar uma peça pronta, quem tem uma ideia personalizada e empresas — sem fragmentar a marca em três sites diferentes.",
    concept:
      "A leitura pública do produto sugere uma lógica DIGITAL → PHYSICAL → USE: ideias digitais ganham forma, entram no catálogo e chegam ao contexto real. A interface reforça isso com logo 3D, produtos renderizados e navegação por caminhos claros.",
    result:
      "Uma presença de marca com dark/light mode, logo 3D arrastável, catálogo com exposição automática, rotas para personalizados e empresas e uma hierarquia visual coerente entre objeto e serviço.",
    liveUrl: "https://alvora-lab.vercel.app/",
    cover: "https://image.thum.io/get/width/1600/crop/900/png/maxAge/24/wait/4/https://alvora-lab.vercel.app/",
    coverAlt: "Captura do site Alvora Lab",
    palette: [
      { name: "Deep Navy", value: "#080B18" },
      { name: "Electric Blue", value: "#163BFF" },
      { name: "Soft Blue", value: "#6379FF" },
      { name: "Ice", value: "#EDF0FB" },
    ],
    principles: [
      { title: "Objeto como interface", text: "O logo 3D pode ser girado por drag e teclado, criando relação direta com o que a marca fabrica." },
      { title: "Três caminhos claros", text: "Catálogo, personalizados e empresas aparecem como jornadas distintas sob a mesma identidade." },
      { title: "Exposição controlável", text: "O catálogo automatizado mantém setas e pausa, evitando que motion retire controle do usuário." },
    ],
    process: [
      { step: "01", title: "Organizar a oferta", text: "A experiência separa produto pronto, projeto sob medida e demanda B2B." },
      { step: "02", title: "Materializar a identidade", text: "O 3D interativo transforma a marca em um objeto manipulável." },
      { step: "03", title: "Criar uma exposição", text: "Produtos são apresentados em sequência visual com categorias e aplicação." },
      { step: "04", title: "Conectar intenção à ação", text: "CTAs recorrentes encaminham cada tipo de visitante para o próximo passo adequado." },
    ],
    stack: ["Interface web", "Canvas / 3D", "Catálogo", "Tema claro/escuro"],
    gallery: [
      { src: "https://image.thum.io/get/width/1600/crop/900/png/maxAge/24/wait/4/https://alvora-lab.vercel.app/", alt: "Home Alvora Lab", caption: "Hero com identidade 3D e caminhos de conversão." },
      { src: "https://alvora-lab.vercel.app/images/hero-product.png", alt: "Produto Alvora Lab", caption: "Objeto modular usado na linguagem do catálogo." },
      { src: "https://alvora-lab.vercel.app/images/wave-sculpture.png", alt: "Escultura impressa em 3D da Alvora Lab", caption: "Forma escultórica usada para comunicar possibilidades de fabricação." },
    ],
    sourceNote: "Leitura baseada no deploy público. A direção descrita aqui é inferida da interface observável; não atribui decisões internas não documentadas ao autor.",
    theme: { bg: "#080B18", surface: "#101536", text: "#EDF0FB", muted: "#AEB8DC", accent: "#163BFF", accentText: "#FFFFFF" },
  },
  {
    slug: "ferreira-imoveis",
    eyebrow: "REAL ESTATE / EDITORIAL SERVICE",
    title: "Ferreira Imóveis",
    subtitle: "Curadoria imobiliária pessoal em vez de uma parede de anúncios.",
    intro:
      "A experiência reposiciona o corretor como alguém que entende contexto e seleciona possibilidades, não como um catálogo ambulante. A fotografia arquitetônica ocupa o espaço principal e a tipografia conduz a narrativa como uma revista de arquitetura.",
    challenge:
      "Criar confiança e diferenciação num mercado em que sites imobiliários tendem a começar por filtros, cards e inventário. O projeto precisava colocar relacionamento e leitura de estilo antes da busca bruta.",
    concept:
      "Espaços para a próxima parte da sua história. O produto é organizado como curadoria: perfis residenciais, atendimento pessoal e uma sequência Entender → Selecionar → Visitar → Negociar.",
    result:
      "Uma landing editorial com descoberta por perfil, narrativa de atendimento e conversão direta por WhatsApp. O CRECI e o posicionamento consultivo aparecem como prova, sem transformar o site em portal imobiliário.",
    liveUrl: "https://ferreira-imoveis.vercel.app/",
    sourceUrl: "https://github.com/oluisvi/Ferreira-Im-veis",
    cover: "/projects/ferreira-imoveis.png",
    coverAlt: "Hero do projeto Ferreira Imóveis",
    palette: [
      { name: "Ink", value: "#171614" },
      { name: "Warm Paper", value: "#EEEAE1" },
      { name: "Stone", value: "#8D8B86" },
      { name: "White", value: "#FFFFFF" },
    ],
    principles: [
      { title: "Curadoria antes do inventário", text: "A entrada apresenta uma visão de serviço e de estilo antes de listar qualquer cenário." },
      { title: "Editorialidade", text: "Tipografia grande e imagem arquitetônica sustentam uma presença mais próxima de publicação do que de portal." },
      { title: "Conversão humana", text: "A rota principal termina em conversa direta, coerente com o posicionamento pessoal." },
    ],
    process: [
      { step: "01", title: "Reenquadrar o serviço", text: "O site passa de anúncio de imóveis para curadoria pessoal." },
      { step: "02", title: "Criar perfis", text: "Casa, apartamento e refúgio funcionam como portas de entrada por intenção e estilo." },
      { step: "03", title: "Explicar o atendimento", text: "O processo em quatro etapas mostra como a decisão é acompanhada." },
      { step: "04", title: "Reduzir fricção", text: "WhatsApp aparece como continuação natural da narrativa e não como botão solto." },
    ],
    stack: ["React", "Vite", "TypeScript", "CSS", "Motion progressivo"],
    gallery: [
      { src: "/projects/ferreira-imoveis.png", alt: "Hero Ferreira Imóveis", caption: "Composição editorial orientada por arquitetura e história." },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c3?auto=format&fit=crop&w=1600&q=85", alt: "Casa contemporânea usada no projeto", caption: "Perfil Casa — imagem de ambientação declaradamente demonstrativa." },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85", alt: "Interior de apartamento usado no projeto", caption: "Perfil Apartamento — direção de atmosfera para a busca." },
    ],
    sourceNote: "Case baseado no deploy, repositório e conteúdo público do projeto Ferreira Imóveis.",
    theme: { bg: "#171614", surface: "#24221F", text: "#F3F0E9", muted: "#B0ACA4", accent: "#EEEAE1", accentText: "#171614" },
  },
  {
    slug: "casa-aurora",
    eyebrow: "ARCHITECTURE / 360 EXPERIENCE",
    title: "Casa Aurora",
    subtitle: "Uma casa conceitual apresentada como espaço a ser explorado, não apenas como planta.",
    intro:
      "A Casa Aurora usa uma narrativa residencial calma e um explorador panorâmico 360° para aproximar o visitante da sensação dos ambientes. A interface mistura editorialidade, arquitetura e controle espacial acessível.",
    challenge:
      "Apresentar um projeto arquitetônico conceitual sem fingir que a visualização substitui um projeto executivo, ao mesmo tempo em que a experiência precisa gerar desejo e entendimento espacial.",
    concept:
      "A VIDA CABE AQUI. A experiência alterna entre narrativa e exploração: primeiro estabelece atmosfera, depois oferece cômodos, panorama e planta. O contraste entre Georgia e DM Sans separa emoção de controle funcional.",
    result:
      "Um tour residencial com panorama em canvas, seleção de ambientes, controles de teclado, planta conceitual e uma paleta orgânica de verdes e tons quentes. O conteúdo explicita que dimensões e soluções construtivas dependem de validação técnica.",
    liveUrl: "https://home-3d-three.vercel.app/",
    cover: "https://image.thum.io/get/width/1600/crop/900/png/maxAge/24/wait/4/https://home-3d-three.vercel.app/",
    coverAlt: "Captura do projeto Casa Aurora",
    palette: [
      { name: "Forest", value: "#34412F" },
      { name: "Deep Green", value: "#253029" },
      { name: "Warm Cream", value: "#E8E4D9" },
      { name: "Olive", value: "#697557" },
    ],
    principles: [
      { title: "Atmosfera antes da planta", text: "A narrativa abre com sensação de morar antes de entrar em medidas e organização espacial." },
      { title: "Exploração acessível", text: "O panorama responde a teclado, zoom e centralização, além da interação direta." },
      { title: "Conceito honesto", text: "A interface diferencia claramente estudo conceitual de projeto executivo validado." },
    ],
    process: [
      { step: "01", title: "Criar atmosfera", text: "Paleta terrosa, serif editorial e ritmo calmo estabelecem uma linguagem residencial." },
      { step: "02", title: "Mapear ambientes", text: "A casa é organizada em cômodos navegáveis, evitando que o 360° vire uma cena sem orientação." },
      { step: "03", title: "Construir o panorama", text: "Canvas entrega exploração espacial com controles alternativos e estado de ambiente." },
      { step: "04", title: "Conectar à planta", text: "A visualização é complementada por uma planta conceitual e explicações de programa." },
    ],
    stack: ["Canvas 2D", "Panorama 360°", "JavaScript", "UI acessível"],
    gallery: [
      { src: "https://image.thum.io/get/width/1600/crop/900/png/maxAge/24/wait/4/https://home-3d-three.vercel.app/", alt: "Home Casa Aurora", caption: "Entrada editorial da experiência residencial." },
      { src: "https://home-3d-three.vercel.app/planta-baixa-conceitual.png", alt: "Planta conceitual Casa Aurora", caption: "Planta usada para explicar organização dos ambientes.", fit: "contain" },
    ],
    sourceNote: "Leitura baseada no deploy público e inspeção da interface. A direção descrita é uma análise do produto visível, não um relato interno do processo do autor.",
    theme: { bg: "#E8E4D9", surface: "#F1EDE3", text: "#253029", muted: "#697557", accent: "#34412F", accentText: "#F6F2E6" },
  },
  {
    slug: "lamims",
    eyebrow: "LOCAL BUSINESS / SPATIAL EXPERIENCE",
    title: "Lamim's Barbershop",
    subtitle: "A barbearia deixa de ter uma página e passa a ter uma porta digital.",
    intro:
      "O projeto transforma um negócio local em percurso espacial: o visitante recebe uma introdução guiada, assume o controle, encontra hotspots e pode agendar a qualquer momento. O espaço digital funciona como extensão da visita física.",
    challenge:
      "Criar algo memorável para uma barbearia local sem esconder informações práticas nem comprometer dispositivos mais fracos. A experiência precisava ser imersiva, mas ainda funcionar quando WebGL ou motion não fossem apropriados.",
    concept:
      "Guided-first → free exploration. A experiência começa com direção narrativa e depois entrega autonomia. O 3D funciona como caminho para serviços, equipe, reviews, ambiente e agendamento.",
    result:
      "Um MVP espacial com Three.js/R3F, percurso reversível por scroll, hotspots, quality tiers, fallback sem WebGL, rota informativa acessível e CTA de agendamento persistente.",
    liveUrl: "https://lamim-s-barbershop.vercel.app/",
    sourceUrl: "https://github.com/oluisvi/Lamim-s-Barbershop",
    cover: "https://raw.githubusercontent.com/oluisvi/Lamim-s-Barbershop/main/public/images/lamims/interior-stations.webp",
    coverAlt: "Interior da Lamim's Barbershop",
    palette: [
      { name: "Espresso", value: "#0D0C0A" },
      { name: "Barber Cream", value: "#E8E3D9" },
      { name: "Steel", value: "#8B8B86" },
      { name: "Signal", value: "#B8FF2C" },
    ],
    principles: [
      { title: "Guided → free", text: "Primeiro a narrativa orienta; depois o visitante recebe controle do espaço." },
      { title: "Conversão persistente", text: "Agendamento continua acessível sem interromper a exploração." },
      { title: "Progressive enhancement", text: "Modo informativo, reduced motion e fallback garantem que o conteúdo não dependa do 3D." },
    ],
    process: [
      { step: "01", title: "Mapear a visita", text: "Serviços, equipe, história e ambiente viram pontos do percurso." },
      { step: "02", title: "Construir a câmera", text: "Scroll e swipe controlam um caminho espacial reversível em vez de joystick." },
      { step: "03", title: "Adicionar contexto", text: "Hotspots entregam informação sem tirar o visitante da experiência." },
      { step: "04", title: "Preservar acesso", text: "Fallback e rota informativa mantêm SEO, teclado e conteúdo real disponíveis." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Three.js", "React Three Fiber", "Drei", "Zustand"],
    gallery: [
      { src: "https://raw.githubusercontent.com/oluisvi/Lamim-s-Barbershop/main/public/images/lamims/interior-stations.webp", alt: "Estações da Lamim's", caption: "Ambiente real usado como referência espacial." },
      { src: "https://raw.githubusercontent.com/oluisvi/Lamim-s-Barbershop/main/public/images/lamims/interior-aisle.webp", alt: "Corredor da Lamim's", caption: "Referência de profundidade e circulação." },
      { src: "https://raw.githubusercontent.com/oluisvi/Lamim-s-Barbershop/main/public/images/lamims/barbershop-in-use.webp", alt: "Lamim's em uso", caption: "Fotografia real do negócio para conectar espaço e atendimento." },
    ],
    sourceNote: "Case baseado no README, arquitetura documentada e referências visuais reais catalogadas no projeto Lamim's.",
    theme: { bg: "#0D0C0A", surface: "#171512", text: "#F1ECE2", muted: "#A49E94", accent: "#B8FF2C", accentText: "#0D0C0A" },
  },
  {
    slug: "shop-co",
    eyebrow: "ECOMMERCE / EDITORIAL FASHION",
    title: "Shop.co",
    subtitle: "Um storefront que evolui de interface estática para comércio full-stack sem perder direção de arte.",
    intro:
      "Shop.co preserva uma linguagem editorial monocromática e uma vitrine fashion enquanto move catálogo, inventário, conta e checkout para uma arquitetura de comércio real. A experiência visual continua sendo parte do produto, não uma camada descartada pela engenharia.",
    challenge:
      "Adicionar backend, autenticação, estoque, pedidos e pagamento a uma experiência originalmente visual sem transformar a loja em um template genérico de e-commerce.",
    concept:
      "Urban Fashion Journal + functional commerce. A loja se comporta como uma edição editorial em movimento, mas as decisões comerciais críticas ficam sob autoridade do servidor.",
    result:
      "Storefront em Next.js com hero 3D, catálogo persistente, carrinho reconciliado, Stripe, Supabase, Seller Studio e inventário controlado pelo backend.",
    liveUrl: "https://shop-co-store.vercel.app/",
    sourceUrl: "https://github.com/oluisvi/shop-co-ecommerce",
    cover: "https://raw.githubusercontent.com/oluisvi/ServAgency/main/public/projects/shopco.png",
    coverAlt: "Interface Shop.co",
    palette: [
      { name: "Black", value: "#000000" },
      { name: "Paper", value: "#F2F0ED" },
      { name: "White", value: "#FFFFFF" },
      { name: "Gray", value: "#999999" },
    ],
    principles: [
      { title: "Editorial commerce", text: "Produto, tipografia e composição criam uma sensação de revista digital, não de catálogo utilitário." },
      { title: "Visual preservado", text: "A evolução full-stack foi feita sem substituir o sistema de interface aprovado." },
      { title: "Servidor como autoridade", text: "Preço, estoque e pedido deixam de confiar no estado local do cliente." },
    ],
    process: [
      { step: "01", title: "Construir a edição", text: "A interface nasce como um journal de moda com direção monocromática e hero interativo." },
      { step: "02", title: "Persistir o catálogo", text: "Produtos e variantes passam para PostgreSQL mantendo URLs e identidade visual." },
      { step: "03", title: "Criar comércio real", text: "Carrinho, checkout, Stripe e inventário ganham regras server-side." },
      { step: "04", title: "Adicionar operação", text: "Seller Studio e fluxos de conta tornam o projeto uma plataforma de comércio completa." },
    ],
    stack: ["Next.js", "Three.js", "NestJS", "PostgreSQL", "Supabase", "Stripe", "Prisma"],
    gallery: [
      { src: "https://image.thum.io/get/width/1600/crop/900/png/maxAge/24/wait/4/https://shop-co-store.vercel.app/", alt: "Home Shop.co", caption: "Home editorial do storefront." },
      { src: "https://shop-co-store.vercel.app/assets/main-couple.png", alt: "Campanha visual Shop.co", caption: "Imagem principal da linguagem fashion." },
      { src: "https://shop-co-store.vercel.app/assets/new-arrivals-1.png", alt: "Produto Shop.co", caption: "Produto integrado ao sistema de catálogo." },
    ],
    sourceNote: "Case baseado no README técnico e no deploy público do Shop.co.",
    theme: { bg: "#0A0A0A", surface: "#171717", text: "#F6F5F2", muted: "#A2A2A2", accent: "#F6F5F2", accentText: "#0A0A0A" },
  },
  {
    slug: "flowdesk",
    eyebrow: "B2B SAAS / OPERATIONS",
    title: "FlowDesk",
    subtitle: "Organizar o trabalho, conectar processos e automatizar o repetitivo sem perder controle.",
    intro:
      "FlowDesk é um workspace operacional para pequenas equipes. Em vez de tratar clientes, projetos, tarefas e automações como ferramentas separadas, o produto reúne contexto, execução e memória operacional na mesma experiência.",
    challenge:
      "Transformar processos fragmentados em uma interface clara sem cair em um dashboard administrativo genérico ou em uma automação visual que esconde o que o sistema realmente executa.",
    concept:
      "Organize → Connect → Automate. A UI privilegia leitura rápida, propriedade clara das tarefas e workflows visuais que reagem a eventos de domínio com execução rastreável.",
    result:
      "SaaS multi-tenant com dashboard, clientes, projetos, Kanban, colaboração, activity feed, workflow builder e execução assíncrona com fila e worker.",
    liveUrl: "https://flowdeskwebapp.vercel.app/",
    sourceUrl: "https://github.com/oluisvi/FlowDesk",
    cover: "https://raw.githubusercontent.com/oluisvi/ServAgency/main/public/projects/flowdesk.png",
    coverAlt: "Interface FlowDesk",
    palette: [
      { name: "Teal", value: "#0D9488" },
      { name: "Ink", value: "#1F2937" },
      { name: "Canvas", value: "#F3F4F6" },
      { name: "White", value: "#FFFFFF" },
    ],
    principles: [
      { title: "Calm operations", text: "A interface reduz ruído para priorizar status, dono, bloqueio e próxima ação." },
      { title: "Processos explícitos", text: "Workflows e activity deixam automação e mudanças observáveis pela equipe." },
      { title: "Multi-tenant real", text: "Workspaces, papéis e autorizações fazem parte do domínio, não de uma demo isolada." },
    ],
    process: [
      { step: "01", title: "Mapear a operação", text: "Clientes, projetos, tarefas e eventos formam o núcleo do produto." },
      { step: "02", title: "Construir superfícies", text: "Dashboard, Kanban e listas organizam o trabalho recorrente." },
      { step: "03", title: "Conectar eventos", text: "Mudanças de domínio alimentam workflows publicados." },
      { step: "04", title: "Executar com rastreio", text: "Fila, worker, notificações e histórico tornam a automação auditável." },
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
    gallery: [
      { src: "https://raw.githubusercontent.com/oluisvi/ServAgency/main/public/projects/flowdesk.png", alt: "Dashboard FlowDesk", caption: "Interface operacional usada no produto." },
      { src: "https://image.thum.io/get/width/1600/crop/900/png/maxAge/24/wait/4/https://flowdeskwebapp.vercel.app/", alt: "Deploy FlowDesk", caption: "Captura do produto em execução." },
    ],
    sourceNote: "Case baseado no README técnico, mapa de experiência e deploy do FlowDesk.",
    theme: { bg: "#0B1213", surface: "#122022", text: "#F2F7F6", muted: "#9BB1AE", accent: "#0D9488", accentText: "#FFFFFF" },
  },
  {
    slug: "atlas-finance-ai",
    eyebrow: "FINTECH / EXPLAINABLE DATA",
    title: "Atlas Finance AI",
    subtitle: "Clareza financeira do dado à decisão, sem transformar incerteza em falsa precisão.",
    intro:
      "Atlas organiza contas, movimentações, orçamento, metas, saúde financeira e insights em uma única experiência. O design combina densidade de produto financeiro com uma identidade de orientação e trajetórias.",
    challenge:
      "Criar uma interface de finanças pessoais confiável sem cair em dashboards administrativos genéricos, somas incorretas entre moedas ou diagnósticos opacos apresentados como inteligência.",
    concept:
      "Atlas Mineral. Familiaridade na interação, identidade na composição e confiabilidade nas regras. O sistema prioriza explicabilidade, separação por moeda e estados de dados insuficientes.",
    result:
      "Produto full-stack multi-moeda com dashboard, ledger, saúde financeira, relatórios e insights determinísticos, apoiado por backend tipado e uma base extensa de testes.",
    liveUrl: "https://atlas-finance-web.onrender.com/",
    sourceUrl: "https://github.com/oluisvi/atlas-finance-ai",
    cover: "https://raw.githubusercontent.com/oluisvi/atlas-finance-ai/main/docs/screenshots/dashboard-desktop.png",
    coverAlt: "Dashboard Atlas Finance AI",
    palette: [
      { name: "Mineral Navy", value: "#172033" },
      { name: "Slate Blue", value: "#315F8C" },
      { name: "Signal Green", value: "#087A5B" },
      { name: "Cloud", value: "#F5F7F9" },
    ],
    principles: [
      { title: "Explicabilidade", text: "Score e insights mostram base e fatores em vez de apresentar uma resposta misteriosa." },
      { title: "Moeda é domínio", text: "BRL, USD e EUR são tratados separadamente e nunca somados implicitamente." },
      { title: "Dado ausente não é zero", text: "Estados incompletos são comunicados como incerteza, preservando confiança." },
    ],
    process: [
      { step: "01", title: "Estruturar perguntas", text: "O produto nasce de quatro questões: onde está, o que mudou, como estou e o que merece atenção." },
      { step: "02", title: "Organizar o domínio", text: "Contas, movimentos, metas e orçamentos são conectados sem misturar responsabilidades." },
      { step: "03", title: "Construir o briefing", text: "O dashboard resume posição, comportamento e sinais antes de aprofundar em tabelas." },
      { step: "04", title: "Explicar recomendações", text: "Insights e saúde financeira tornam fatores e qualidade de dados visíveis." },
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Supabase", "OpenAPI", "PWA"],
    gallery: [
      { src: "https://raw.githubusercontent.com/oluisvi/atlas-finance-ai/main/docs/screenshots/dashboard-desktop.png", alt: "Dashboard Atlas", caption: "Financial Briefing — visão principal por moeda." },
      { src: "https://raw.githubusercontent.com/oluisvi/atlas-finance-ai/main/docs/screenshots/financial-health-desktop.png", alt: "Saúde financeira Atlas", caption: "Score e fatores apresentados de forma explicável." },
      { src: "https://raw.githubusercontent.com/oluisvi/atlas-finance-ai/main/docs/screenshots/transactions-desktop.png", alt: "Ledger Atlas", caption: "Ledger financeiro para leitura detalhada de movimentações." },
    ],
    sourceNote: "Case baseado no README, design system Atlas Mineral e screenshots documentados no repositório.",
    theme: { bg: "#111827", surface: "#172033", text: "#F5F7F9", muted: "#A8B3C3", accent: "#315F8C", accentText: "#FFFFFF" },
  },
  {
    slug: "removeit",
    eyebrow: "AI TOOL / HUMAN-IN-THE-LOOP",
    title: "RemoveIT",
    subtitle: "Automação de imagem com revisão humana antes da alteração definitiva.",
    intro:
      "RemoveIT combina detecção automática, máscara editável e reconstrução de imagem em um fluxo local-first. O usuário continua responsável por autorizar a edição e pode revisar exatamente o que será alterado antes do processamento.",
    challenge:
      "Criar uma ferramenta assistida por IA que seja útil sem esconder limitações, permissões ou decisões irreversíveis. O produto também precisava funcionar localmente e manter o processamento sob controle do usuário.",
    concept:
      "Detect → Review → Rebuild. A automação sugere; a pessoa confirma. A interface conduz por upload, detecção, edição de máscara, processamento e comparação final.",
    result:
      "Aplicação Next.js + serviço FastAPI com OpenCV/LaMa, editor de máscara, redetecção, comparação antes/depois, histórico de sessão, rate limiting e limpeza automática de arquivos temporários.",
    sourceUrl: "https://github.com/oluisvi/RemoveIT",
    cover: "",
    coverAlt: "Interface RemoveIT",
    palette: [
      { name: "Canvas", value: "#F7F8FC" },
      { name: "Ink", value: "#17172B" },
      { name: "AI Violet", value: "#6558F5" },
      { name: "Violet Mist", value: "#EEECFF" },
    ],
    principles: [
      { title: "Human in the loop", text: "A máscara pode ser corrigida antes de qualquer reconstrução final." },
      { title: "Local-first", text: "O fluxo foi pensado para processar imagens sem depender de serviços externos de imagem." },
      { title: "Limites explícitos", text: "Autorização, formatos, tamanho e limitações de reconstrução fazem parte da interface." },
    ],
    process: [
      { step: "01", title: "Autorizar e enviar", text: "O upload exige confirmação de propriedade ou autorização de edição." },
      { step: "02", title: "Detectar", text: "O serviço sugere a região provável da marca d’água." },
      { step: "03", title: "Revisar", text: "Pincel, borracha, zoom, pan e undo permitem corrigir a máscara." },
      { step: "04", title: "Reconstruir", text: "LaMa é usado quando disponível, com fallback OpenCV e comparação final." },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "Python 3.12", "OpenCV", "LaMa"],
    gallery: [],
    sourceNote: "Case baseado no README e na interface real do repositório RemoveIT. O visual da página reproduz os elementos documentados do produto em vez de inventar screenshots inexistentes.",
    theme: { bg: "#F7F8FC", surface: "#FFFFFF", text: "#17172B", muted: "#6F7484", accent: "#6558F5", accentText: "#FFFFFF" },
  },
];

export const caseStudyBySlug = new Map(caseStudies.map((item) => [item.slug, item]));
