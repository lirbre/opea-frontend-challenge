Esse é um projeto feito no intuito de resolver o [desafio para Frontend da Opea](https://opea.notion.site/Avalia-o-Front-end-d82f51f5ab18422ca28ed8abf85f5b55). Através desse readme, venho explicar as escolhas e os motivos das minhas decisões técnicas. [acesse o deploy dele, aqui](https://opea-frontend-challenge.vercel.app/)

## Para rodar o projeto localmente
É um projeto feito através do do [create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app), logo, basta instalar as dependencias:

```bash
npm run install
# or
yarn install
# or
pnpm install
```

E, em seguida:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

---

## Sobre o projeto:

- Estruturado em SPA, através do Next.js um framework feito a partir do React.js. 
- Estilizado através de PostCSS, uma opção mais moderna que me permitiu - com mais facilidade - utilizar o [Tailwind CSS](https://tailwindcss.com/docs/installation) - através dessa mistura de "Post CSS" e tailwind, o projeto foi estilizado através de classes utilitárias; [padrão adotado pelo Tailwind](https://tailwindcss.com/docs/utility-first).
- Para toasts, foi utilizado o [Sonner](https://sonner.emilkowal.ski/) - Projeto Open Source que eu tive algumas contribuições.
- Para mutations e queries, ou seja, interagir com a API Rest, utilizei o [react-query](https://tanstack.com/query/v3/)

