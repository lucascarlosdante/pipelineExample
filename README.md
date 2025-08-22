# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como rodar os testes end-to-end (Cypress)

```bash
npx cypress open
# ou
npx cypress run
```

## Como fazer build para produção

```bash
VITE_ENV=prd npm run build
```

## Deploy no GitHub Pages
O deploy é feito automaticamente ao dar push na branch `prd`.

## Diferenciação de ambientes
O header muda de cor e exibe o nome do ambiente conforme a variável `VITE_ENV` (dev, tst, hml, prd).
