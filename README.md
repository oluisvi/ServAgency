# ServAgency — Signal Convergence + Motion System

Reestruturação visual da ServAgency com identidade própria, portfólio horizontal e assinatura visual baseada no conceito **Digital Systems in Motion**.

## Motion language

O site usa motion como sistema de hierarquia e continuidade, sem adicionar uma biblioteca pesada:

- **parallax** no hero e títulos-chave;
- **fade + lift** para entradas editoriais;
- **stagger** em listas e timelines;
- **clip reveal** nos títulos de cena;
- **magnetic CTA + press/spring** nos CTAs principais;
- **text shift + state change** em hover, FAQ e projetos;
- **image zoom** guiado pelo foco do projeto;
- **pin + transform + scrub** no carrossel horizontal de projetos.

No desktop, a vitrine de projetos fica pinada e o scroll vertical move o rail horizontalmente. No mobile, o mesmo conteúdo vira um carrossel touch nativo com `scroll-snap`, sem scroll-jacking.

`prefers-reduced-motion` remove scrub, parallax, transforms e motion não essencial, preservando toda a informação e navegação.

## Capas dos projetos

As capas priorizam material real do próprio trabalho:

- Crivo 3D — social/hero visual oficial do projeto;
- Ruvro & Co — conceito visual real da home;
- Lamim's Barbershop — fotografia real usada na experiência;
- FlowDesk — screenshot real da interface;
- Atlas Finance AI — screenshot real do dashboard;
- Shop.co — screenshot real da interface;
- RemoveIT — composição em HTML/CSS reconstruída fielmente a partir do hero e upload reais do próprio código, já que o repositório não possui screenshot de capa.

## Identidade

A marca usa o símbolo **Signal Convergence**: múltiplas rotas convergem em um único nó, representando estratégia, design e engenharia transformadas em solução. Consulte `BRAND.md`.

## Entrada temática

Na primeira visita de cada sessão, uma microcena curta desenha as rotas da marca e revela o hero. A experiência aparece uma vez por `sessionStorage`, possui timeout de segurança, não captura foco e é desativada em `prefers-reduced-motion`.

## Rodar

```bash
npm install
npm run dev
```

Validação:

```bash
npm run typecheck
npm run lint
npm run build
```
