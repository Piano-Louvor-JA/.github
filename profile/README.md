# 🎹 Piano-Louvor-JA

> **Ecossistema digital para a comunidade adventista** — gestão de cultos, hinos, bíblia, projeção multi-tela e ferramentas ministeriais.

![GitHub Org stars](https://img.shields.io/github/stars/Piano-Louvor-JA?style=social)
![GitHub Org followers](https://img.shields.io/github/followers/Piano-Louvor-JA?style=social)

---

## 🚀 Produtos (8 repositórios)

| Repo | Stack | Status | Descrição |
|------|-------|--------|-----------|
| [**api**](https://github.com/Piano-Louvor-JA/api) | TypeScript • Hono • SQLite • Zod | ![CI](https://github.com/Piano-Louvor-JA/api/actions/workflows/ci.yml/badge.svg) | REST API para hinários Louvor JA + SDA Hymnal |
| [**app**](https://github.com/Piano-Louvor-JA/app) | Vue 3 • Electron • Vuetify 4 • Pinia | ![CI](https://github.com/Piano-Louvor-JA/app/actions/workflows/ci.yml/badge.svg) | Desktop nativo (Windows/macOS/Linux) — operador de culto |
| [**web**](https://github.com/Piano-Louvor-JA/web) | Vue 3 • Vite • PWA • Vuetify 4 | ![CI](https://github.com/Piano-Louvor-JA/web/actions/workflows/ci.yml/badge.svg) | PWA navegador — projeção + operador mobile |
| [**apk**](https://github.com/Piano-Louvor-JA/apk) | Flutter • Dart • Clean Architecture | ![CI](https://github.com/Piano-Louvor-JA/apk/actions/workflows/ci.yml/badge.svg) | App Android nativo — companion mobile |
| [**site**](https://github.com/Piano-Louvor-JA/site) | Nuxt 3 • SSG • TypeScript | ![CI](https://github.com/Piano-Louvor-JA/site/actions/workflows/ci.yml/badge.svg) | Landing + docs públicos + /docs/api |
| [**palco-receiver**](https://github.com/Piano-Louvor-JA/palco-receiver) | HTML/JS • webOS • Tizen • Android TV | ![Release](https://img.shields.io/github/v/release/Piano-Louvor-JA/palco-receiver) | Receivers de TV (webOS/LG, Tizen/Samsung, Android TV, Web) |
| [**palco-updates**](https://github.com/Piano-Louvor-JA/palco-updates) | GitHub Pages • JSON | ![Deploy](https://github.com/Piano-Louvor-JA/palco-updates/actions/workflows/pages.yml/badge.svg) | Canal de auto-update do Palco Receiver |
| [**docs**](https://github.com/Piano-Louvor-JA/docs) | MkDocs • Markdown • SDD | *(privado)* | Documentação SDD, onboarding agente, arquitetura |

---

## 🎯 Visão

Unificar **liturgia, hinário, bíblia, cronômetros e projeção** em um ecossistema coeso:
- **Desktop** (app) → operador principal no púlpito
- **Mobile** (apk) → operador auxiliar / controle remoto
- **Web** (web) → projeção no navegador + backup
- **TVs** (palco-receiver) → exibição fullscreen sem chrome/overlays
- **API** (api) → backend único, SQLite, OpenAPI/Zod

---

## 🛠️ Governança & Qualidade (Padrão Agnóstico)

- **Desenvolvimento**: SDD (Spec-Driven Development) — SPEC.md → PLAN.md → Tasks → Verify
- **Gestão**: PMBOK-Lean + Scrum/Agile adaptado — Portfolio → Product → Sprint
- **Execução**: Kanban Hermes (multi-agente) — peças Pn com DAG, WIP limit
- **Quality Gates**: Biome + Typecheck + Vitest (100% coverage) + Stryker (mutation testing)
- **Review**: Obrigatório (CODEOWNERS) — PR pequena, focada, evidência real
- **Branch flow**: `feat/*` → `staging` → `main` (PR only)
- **Paridade**: Feature nova = caminho em Desktop ↔ Web ↔ Mobile
- **Validação real**: Usuário leigo testa na mão antes de "pronto" (vídeo/screenshot)

---

## 📊 Visão dos Produtos

| Repo | Stack | CI | Descrição |
|------|-------|-----|-----------|
| [**api**](https://github.com/Piano-Louvor-JA/api) | TypeScript • Hono • SQLite • Zod | ![CI](https://github.com/Piano-Louvor-JA/api/actions/workflows/ci.yml/badge.svg) | REST API para hinários Louvor JA + SDA Hymnal |
| [**app**](https://github.com/Piano-Louvor-JA/app) | Vue 3 • Electron • Vuetify 4 • Pinia | ![CI](https://github.com/Piano-Louvor-JA/app/actions/workflows/ci.yml/badge.svg) | Desktop nativo (Windows/macOS/Linux) — operador de culto |
| [**web**](https://github.com/Piano-Louvor-JA/web) | Vue 3 • Vite • PWA • Vuetify 4 | ![CI](https://github.com/Piano-Louvor-JA/web/actions/workflows/ci.yml/badge.svg) | PWA navegador — projeção + operador mobile |
| [**apk**](https://github.com/Piano-Louvor-JA/apk) | Flutter • Dart • Clean Architecture | ![CI](https://github.com/Piano-Louvor-JA/apk/actions/workflows/ci.yml/badge.svg) | App Android nativo — companion mobile |
| [**site**](https://github.com/Piano-Louvor-JA/site) | Nuxt 3 • SSG • TypeScript | ![CI](https://github.com/Piano-Louvor-JA/site/actions/workflows/ci.yml/badge.svg) | Landing + docs públicos + /docs/api |
| [**palco-receiver**](https://github.com/Piano-Louvor-JA/palco-receiver) | HTML/JS • webOS • Tizen • Android TV | ![Release](https://img.shields.io/github/v/release/Piano-Louvor-JA/palco-receiver) | Receivers de TV (webOS/LG, Tizen/Samsung, Android TV, Web) |
| [**palco-updates**](https://github.com/Piano-Louvor-JA/palco-updates) | GitHub Pages • JSON | ![Deploy](https://github.com/Piano-Louvor-JA/palco-updates/actions/workflows/pages.yml/badge.svg) | Canal de auto-update do Palco Receiver |
| [**docs**](https://github.com/Piano-Louvor-JA/docs) | MkDocs • Markdown • SDD | *(privado)* | Documentação interna, onboarding agente, arquitetura |

---

## 🤝 Como Contribuir

1. Leia `CONTRIBUTING.md` em cada repo (padrão unificado via PR [#25](https://github.com/Piano-Louvor-JA/api/pull/25))
2. Abra issue com template (Bug Report / Feature Request)
3. Branch `feat/<scope>-<slug>` → PR base `staging`
4. CI verde + review Ezequias → merge

---

## 📜 Licença

MIT © 2022–2026 [LouvorJA](https://github.com/louvorja) & [Piano-Louvor-JA](https://github.com/Piano-Louvor-JA)

---

## 🔗 Links Úteis

- **API Produção**: `https://api.pianolouvorja.com.br` (Hostinger VPS)
- **Web App**: `https://app.pianolouvorja.com.br` (PWA)
- **Site Público**: `https://pianolouvorja.com.br`
- **Onboarding Público**: `https://pianolouvorja.github.io/wiki/` (wiki)