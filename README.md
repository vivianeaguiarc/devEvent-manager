# 🚀 FSC Events

Backend application built with Node.js and TypeScript following **Hexagonal Architecture**, focused on scalability, maintainability and clean code practices.

---

## 🧱 Architecture

This project follows:

- Hexagonal Architecture (Ports & Adapters)
- SOLID principles
- Clean Code practices

---

## 🛠️ Tech Stack

- Node.js (v24+)
- TypeScript
- PostgreSQL
- Prisma ORM
- PNPM
- Docker (for local/CI database)

---

## ⚙️ Setup

```bash
# install dependencies
pnpm install

# generate prisma client
pnpm prisma:generate

# run migrations
pnpm prisma migrate dev

# run project
pnpm dev
```

---

## 🧪 Testing

```bash
pnpm test
```

---

## 📦 Build

```bash
pnpm build
```

---

# 🔁 Continuous Integration

![CI](https://github.com/SEU_USUARIO/SEU_REPO/actions/workflows/ci.yml/badge.svg)

This project uses GitHub Actions for automated validation on every push and pull request.

### ✅ Pipeline validates:

- Code formatting (Prettier)
- Lint rules (ESLint)
- Type checking (TypeScript)
- Automated tests
- Database migrations (Prisma)
- Production build
- Test coverage artifact upload

### 🐘 Database in CI

The pipeline spins up a PostgreSQL container to simulate a real environment during tests.

---

# 🧾 Commit Convention

This project enforces commit message standards using commitlint.

### ✔️ Valid examples:

```
feat: add create event use case
fix: correct validation error
chore: update dependencies
```

### ❌ Invalid examples:

```
update stuff
bug fix
coisa nova
```

Commits are validated automatically in Pull Requests.

---

# 🌿 Branch Strategy

This repository follows a simplified Git Flow:

```
main       → production (protected)
feat/*     → new features
fix/*      → bug fixes
```

### 📌 Workflow:

1. Create a branch:

```bash
git checkout -b feat/create-event
```

2. Push branch:

```bash
git push origin feat/create-event
```

3. Open Pull Request → `main`

4. Wait for CI + CommitLint to pass

5. Merge 🚀

---

# 🔒 Branch Protection

The `main` branch should be protected with the following rules:

- ✅ Require Pull Request before merge
- ✅ Require CI to pass
- ✅ Require CommitLint validation
- ✅ Prevent direct pushes

---

# 📊 Code Quality

This project enforces high-quality standards:

- Strict TypeScript configuration
- Linting and formatting checks
- Automated testing
- CI/CD validation pipeline

---

# 🎯 Purpose

This project is part of a professional portfolio focused on:

- Backend Engineering
- Scalable Architecture
- Production-ready pipelines
- Real-world development practices

---

# 👩‍💻 Author

<a href="https://www.linkedin.com/in/vivianeaguiarc/">**Viviane Aguiar Linkedin**</a>
