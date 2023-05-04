## Introdução:

Esse é um projeto feito no intuito de resolver o [desafio para Frontend da Opea](https://opea.notion.site/Avalia-o-Front-end-d82f51f5ab18422ca28ed8abf85f5b55). Através desse readme, venho explicar as escolhas e os motivos das minhas decisões técnicas. [acesse o deploy dele, aqui](https://opea-frontend-challenge.vercel.app/)

## Para rodar o projeto localmente:
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

- Estruturado em SPA, através do Next.js um framework feito a partir do React.js. Feito com TypeScript.
- Estilizado através do pré-processador PostCSS, uma opção mais moderna que me permitiu - com mais facilidade - utilizar o [Tailwind CSS](https://tailwindcss.com/docs/installation) - através dessa mistura de "Post CSS" e tailwind, o projeto foi estilizado através de classes utilitárias; [padrão adotado pelo Tailwind](https://tailwindcss.com/docs/utility-first). ([Conteúdo sobre o PostCSS](https://dev.to/dawnind/what-is-postcss-why-should-we-care-45fj
))
- Para toasts, foi utilizado o [Sonner](https://sonner.emilkowal.ski/) - Projeto Open Source que eu tive algumas contribuições.
- Para mutations e queries, ou seja, interagir com a API Rest, utilizei o [react-query](https://tanstack.com/query/v3/) - através disso, POSTS / DELETE e PUT são feitas através do hook `useMutation` e os GETs feitos através do hooks `useQuery`. Essas queries são listadas através de uma chave (queryKey) e controladas através do [react-query](https://tanstack.com/query/v3/) que é uma lib de cacheamento.
  - Por ser uma lib de cache é possível notar que, em alguns momentos, ao sair da página e voltar; será realizado um "refetch" - utilizando do principio de SWR que significa "stale-while-revalidate" e gerenciada através de um `cacheTime` e um `staleTime` adicionado dentro do custom hook `[useCompany](https://github.com/lirbre/opea-frontend-challenge/blob/main/src/hooks/useCompany.tsx)`.
  - Aproveitando do `react-query` é utilizado uma lógica de `prefetchQuery` através do `server side rendering` utilizando o [getServerSideProps](https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props) do Next.js.
- Para validação de tipagem e formulários (com o custom hook [useForm](https://github.com/lirbre/opea-frontend-challenge/blob/main/src/hooks/useForm.tsx) e os schemas criados para o zod), foi utilizado o [zod](https://zod.dev/) como extensão do TypeScript. 
- Como forma de controle de estado global, foi utiizado a URL [como forma de implementar essa ideia aqui](https://betterprogramming.pub/how-and-why-you-should-store-react-ui-state-in-the-url-f2013a204cb2). Isso torna possível coisas como [https://opea-frontend-challenge.vercel.app/?search=empresa](https://opea-frontend-challenge.vercel.app/?search=empresa) trazendo benefícios de compartilhamento e simplicidade ao projeto. 

### Página principal:

![image](https://user-images.githubusercontent.com/86065449/236275936-485715ea-2357-46e6-939e-2b3f66cb176b.png)

### Página em que a busca não foi encontrada:
 
![image](https://user-images.githubusercontent.com/86065449/236277331-7bc5ae1c-a2d9-4497-8384-75b25814cb30.png)

### Página da busca, em loading:

![image](https://user-images.githubusercontent.com/86065449/236281874-e45807de-431d-4f97-b642-767ee687a456.png)

### Modal de editar:

![image](https://user-images.githubusercontent.com/86065449/236282322-35c09797-876f-4079-97e8-6e59b496cdf8.png)
![image](https://user-images.githubusercontent.com/86065449/236282372-9562e04c-14df-4c25-9bea-d9f6d48b3173.png)

### Modal de cadastrar:

![image](https://user-images.githubusercontent.com/86065449/236282147-5ae40223-78fa-40c6-86e2-bb75b079eba6.png)
![image](https://user-images.githubusercontent.com/86065449/236282112-66754f6d-f98e-4d92-896e-a0c7e5085e8a.png)

