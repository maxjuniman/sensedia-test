# Sensedia – Lista de Usuários (SPA React)

Aplicação de página única (SPA) em React que exibe uma lista de usuários obtida da API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), com busca por nome (persistida na URL), alternância entre visualização em cards e tabela, e interface acessível.

## Tecnologias

- **React** + **TypeScript**
- **React Router DOM** – roteamento e parâmetros de busca na URL
- **Styled Components** – estilização (responsiva, tipografia, cores)
- **React Aria Components** – componentes acessíveis (TextField, Button, Group)
- **RSBuild** – build e dev server
- **Vitest** + **Testing Library** – testes de comportamento

## Requisitos atendidos

1. Busca de usuários em `https://jsonplaceholder.typicode.com/users`
2. Lista em layout limpo e responsivo
3. Cada usuário exibe: **Nome**, **Email**, **Telefone**
4. Alternância entre visualização em **cards** e **tabela**
5. Busca por nome com termo persistido na URL (ex.: `/?search=Leanne&view=card`)
6. Uso de **react-aria-components** para acessibilidade
7. Componentes funcionais e hooks (`useState`, `useEffect`, `useMemo`, `useSearchParams`)
8. Estilização com **Styled Components**: responsivo (media queries), espaçamento, tipografia e cores consistentes
9. Projeto em **TypeScript** com tipos definidos
10. Testes de comportamento com **Testing Library**

## Scripts

```bash
# Instalar dependências
npm install

# Desenvolvimento (abre em http://localhost:3000)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Testes (modo watch)
npm run test

# Testes (uma execução)
npm run test:run
```

## Deploy (Vercel)

### Build

- **Comando de build:** `npm run build`
- **Pasta de saída:** `dist` (padrão do RSBuild)

### Vercel

1. Conecte o repositório no [Vercel](https://vercel.com).
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Install Command:** `npm install`
5. Deploy.

Ou via CLI:

```bash
npm i -g vercel
vercel
```

### GitHub

1. Crie um repositório no GitHub.
2. No projeto local:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

3. Conecte o repositório na Vercel e faça o deploy conforme acima.

## Estrutura do projeto

```
src/
  api/          # Chamadas à API (users)
  components/   # UserCard, UserTable, SearchBar, ViewToggle
  hooks/        # useUsers
  pages/        # UsersPage (lista + busca + toggle)
  styles/       # theme, GlobalStyles, componentes styled
  test/         # setup e mocks para testes
  types/        # User e demais tipos
  App.tsx
  index.tsx
```

## Testes

Os testes cobrem:

- **UserCard** – exibição de nome, email e telefone
- **UserTable** – cabeçalhos e linhas com dados
- **SearchBar** – valor controlado e `onChange`
- **ViewToggle** – botões e troca entre card/tabela
- **UsersPage** – carregamento, lista, busca e alternância de visualização
- **useUsers** – estado de loading e dados retornados

Execute: `npm run test` ou `npm run test:run`.
