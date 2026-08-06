# ServAgency

Website institucional da **ServAgency**, uma agência de tecnologia e soluções digitais para pequenas e médias empresas.

A proposta é unir estratégia, desenvolvimento, design, marketing e automação para transformar problemas de negócio em soluções digitais claras, proporcionais e sustentáveis.

> Tecnologia, design e estratégia para resolver problemas reais de empresas.

## Website

- Produção: [oluisvi.github.io/ServAgency](https://oluisvi.github.io/ServAgency/)
- Repositório: [github.com/oluisvi/ServAgency](https://github.com/oluisvi/ServAgency)

## Áreas de atuação

- Websites e experiências digitais
- Presença digital e marketing
- Google e SEO
- Auditoria digital
- Automações e integrações
- Inteligência artificial
- Soluções digitais sob demanda

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- React Hook Form e Zod
- Lucide Icons
- ESLint e Prettier
- Exportação estática e deploy no GitHub Pages

## Estrutura

```text
ServAgency/
├── .github/
│   ├── copilot-instructions.md
│   └── workflows/deploy.yml
├── docs/
│   └── PROJECT_FOUNDATION_AGENCIA_TECNOLOGIA.md
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── content/
│   └── lib/
├── .env.example
├── next.config.ts
└── package.json
```

## Desenvolvimento local

Requisitos: Node.js 22 ou superior e npm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validação

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

O build gera uma versão estática na pasta `out/`, compatível com o GitHub Pages.

## Deploy

Todo push na branch `main` executa o workflow de qualidade e, se todas as verificações passarem, publica a pasta `out/` no GitHub Pages.

## Formulário

O formulário possui validação acessível com React Hook Form e Zod. Como o GitHub Pages não executa código no servidor, o transporte final de mensagens deve ser conectado quando o canal oficial for definido. Em uma futura migração para Vercel ou outro host com runtime, essa camada pode usar Server Actions e um serviço transacional de e-mail.

## Dados pendentes

Antes do lançamento comercial, substituir os placeholders por informações reais:

- nomes, fotos e especialidades dos fundadores;
- WhatsApp e e-mail;
- cidade e região atendida;
- perfis oficiais nas redes sociais;
- projetos e estudos de caso reais;
- política de privacidade e dados legais;
- domínio oficial.

Nenhum cliente, depoimento, resultado, número ou parceria deve ser inventado.

## Documentação

A estratégia, o PRD e os princípios do projeto estão em [docs/PROJECT_FOUNDATION_AGENCIA_TECNOLOGIA.md](docs/PROJECT_FOUNDATION_AGENCIA_TECNOLOGIA.md).

## Licença

Todos os direitos reservados à ServAgency.
