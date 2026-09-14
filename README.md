# ServAgency — Digital Systems in Motion

Revitalização visual e estrutural do site da ServAgency.

## Direção

A home foi redesenhada como uma experiência de creative technology studio, usando a ideia de **rota/sinal** para conectar estratégia, tecnologia, execução e projetos.

### Projetos em destaque

- Ruvro & Co — luxury digital showroom
- Lamim's Barbershop — experiência espacial 3D
- FlowDesk — SaaS de operações e automação
- Atlas Finance AI — produto financeiro e dados
- Shop.co — e-commerce full-stack

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS / PostCSS
- Lucide React
- React Hook Form + Zod
- Vercel Analytics + Speed Insights

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validação

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy

O projeto está preparado para Vercel. Opcionalmente configure:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Sem essa variável o fallback é `https://servagency.vercel.app`.

## Contato

O formulário não grava dados em backend próprio. Ele valida os campos no navegador e prepara a mensagem para envio pelo WhatsApp.

## Design docs

- `docs/superpowers/specs/2026-09-14-digital-systems-in-motion-design.md`
- `docs/superpowers/plans/2026-09-14-servagency-revamp.md`
