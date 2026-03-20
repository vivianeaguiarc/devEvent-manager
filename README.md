# 🚀 Dev Event Manager

Plataforma para gerenciamento de eventos voltados à comunidade de
tecnologia, permitindo que organizadores criem eventos e desenvolvedores
se registrem, reservem vagas e realizem check‑in.

Este projeto foi desenvolvido com foco em **boas práticas de engenharia
de software, arquitetura backend e qualidade de código**, simulando um
ambiente de desenvolvimento profissional.

------------------------------------------------------------------------

# 📸 Preview

Interface web para navegação de eventos e registro de participantes,
integrada a uma API REST robusta.

Principais fluxos da aplicação:

-   📅 criação de eventos\
-   📝 inscrição em eventos\
-   👥 gerenciamento de participantes\
-   ✅ check‑in no evento

------------------------------------------------------------------------

# 🧰 Tecnologias Utilizadas

## ⚙️ Backend

-   Node.js
-   TypeScript
-   Fastify
-   Prisma ORM
-   PostgreSQL
-   Zod (validação)
-   Docker

## 🎨 Frontend

-   Next.js
-   React
-   TailwindCSS
-   React Hook Form
-   Zod

## 🧹 Qualidade de Código

-   ESLint
-   Prettier
-   commitlint
-   Husky (Git hooks)
-   eslint-plugin-simple-import-sort

------------------------------------------------------------------------

# 🏗️ Arquitetura do Projeto

A aplicação segue uma arquitetura inspirada em **Clean Architecture**,
separando responsabilidades entre camadas:

    src
     ├ controllers
     ├ use-cases
     ├ repositories
     ├ routes
     ├ schemas
     ├ middlewares
     ├ lib
     └ server.ts

### Controllers

Responsáveis por receber requisições HTTP e delegar a execução para os
casos de uso.

### Use Cases

Contêm a lógica de negócio da aplicação.

### Repositories

Abstraem o acesso ao banco de dados.

### Schemas

Validações de dados utilizando Zod.

Essa estrutura facilita:

-   manutenção
-   escalabilidade
-   testes

------------------------------------------------------------------------

# ✨ Funcionalidades

## 👤 Usuários

-   criação de conta
-   autenticação
-   visualização de eventos disponíveis

## 🧑‍💼 Organizadores

-   criação de eventos
-   edição de eventos
-   visualização de participantes

## 🎟️ Participantes

-   inscrição em eventos
-   cancelamento de inscrição
-   check‑in no evento

------------------------------------------------------------------------

# 📏 Regras de Negócio

O sistema implementa regras comuns em aplicações reais:

-   um usuário não pode se registrar duas vezes no mesmo evento
-   eventos possuem limite de participantes
-   inscrições são bloqueadas quando o evento atinge capacidade máxima
-   check‑in só pode ser realizado no dia do evento

------------------------------------------------------------------------

# 🗄️ Modelagem do Banco de Dados

Principais entidades:

-   User
-   Event
-   Registration

Relacionamentos:

    User 1 --- N Event
    User 1 --- N Registration
    Event 1 --- N Registration

------------------------------------------------------------------------

# 🧪 Executando o Projeto

## 1️⃣ Clonar repositório

``` bash
git clone https://github.com/seu-usuario/dev-event-manager.git
cd dev-event-manager
```

------------------------------------------------------------------------

## 2️⃣ Configurar variáveis de ambiente

Crie o arquivo `.env`

    DATABASE_URL="postgresql://dev:dev@localhost:5432/events"

------------------------------------------------------------------------

## 3️⃣ Subir banco de dados com Docker

``` bash
docker-compose up -d
```

------------------------------------------------------------------------

## 4️⃣ Instalar dependências

``` bash
pnpm install
```

------------------------------------------------------------------------

## 5️⃣ Rodar migrations

``` bash
npx prisma migrate dev
```

------------------------------------------------------------------------

## 6️⃣ Iniciar servidor

``` bash
pnpm dev
```

Servidor disponível em:

    http://localhost:3333

------------------------------------------------------------------------

# 🧼 Qualidade de Código

Este projeto utiliza ferramentas para manter consistência no código:

### 🔍 ESLint

Análise estática do código.

### 🎨 Prettier

Formatação automática.

### 🪝 Husky

Executa verificações antes de commits.

### 📝 Commitlint

Padroniza mensagens de commit.

Exemplo de commit:

    feat: add event registration endpoint

------------------------------------------------------------------------

# 🔎 Prisma Studio

Para visualizar o banco:

``` bash
npx prisma studio
```

------------------------------------------------------------------------

# 🗺️ Roadmap

Funcionalidades planejadas:

-   🔐 autenticação JWT
-   📱 geração de QR Code para check‑in
-   🧑‍💻 painel de administrador
-   🧪 testes automatizados
-   📚 documentação da API com OpenAPI

------------------------------------------------------------------------

# 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como **projeto de portfólio**, com
objetivo de demonstrar habilidades em:

-   desenvolvimento backend com Node.js
-   modelagem de banco relacional
-   arquitetura de software
-   boas práticas de código
-   organização de projetos reais

------------------------------------------------------------------------

# 👩‍💻 Autor

**Viviane**\
Fullstack Developer

Tecnologias principais:

-   Node.js
-   TypeScript
-   Next.js
-   PostgreSQL
-   Prisma
-   Docker

------------------------------------------------------------------------

# 📜 Licença

MIT

------------------------------------------------------------------------

💡 **Projeto criado para demonstrar habilidades de backend engineering
em um cenário próximo de aplicações reais utilizadas em empresas.**
