# ServAgency — Signal Convergence

Reestruturação visual da ServAgency com identidade própria, portfólio em cenas e assinatura visual baseada no conceito **Digital Systems in Motion**.

## Identidade

A marca usa o símbolo **Signal Convergence**: múltiplas rotas convergem em um único nó, representando estratégia, design e engenharia transformadas em solução. Consulte `BRAND.md`.

## Entrada temática

Na primeira visita de cada sessão, uma microcena curta desenha as rotas da marca e revela o hero. A experiência:

- aparece uma vez por `sessionStorage` (`servagency:thematic-entry-seen:v1`);
- aguarda fontes + múltiplos frames antes de abrir;
- possui timeout de segurança;
- não captura foco e é `aria-hidden`;
- é desativada em `prefers-reduced-motion`;
- usa apenas CSS e APIs nativas, sem biblioteca de animação.

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
