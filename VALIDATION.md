# Validation

## Verified in this environment

- 20 arquivos TypeScript/TSX passaram por transpile de sintaxe sem diagnósticos.
- Chaves CSS balanceadas e o sistema de motion contém os estados necessários.
- Implementações verificadas: parallax, scrub, pin + transform, fade + lift, stagger, clip reveal, magnetic CTA, image zoom, text shift, press + spring e state change.
- Desktop usa rail horizontal pinado + scrub; mobile usa overflow horizontal nativo + scroll snap.
- `prefers-reduced-motion` remove o motion não essencial e mantém o portfólio acessível.
- Os seis assets remotos usados como capas reais foram confirmados nos respectivos repositórios GitHub.
- RemoveIT usa um fallback visual fiel reconstruído a partir do layout real do projeto.
- O `postcss.config.mjs` legado foi removido para não reintroduzir o erro `Cannot find module '@tailwindcss/postcss'` na Vercel.
- O modelo `PortfolioProject` mantém `liveUrl`, `src`, `alt` e `fit` opcionais para compatibilidade com componentes legados ainda presentes no repositório.

## Environment limitation

A instalação completa das dependências (`npm install`) excedeu o timeout de rede deste ambiente. Por isso, `next build`, ESLint e o typecheck com as dependências reais não puderam ser executados localmente nesta rodada.

Execute após extrair/copiar os arquivos:

```bash
npm install
npm run typecheck
npm run lint
npm run build
```
