# Viktor Lukianov — Portfolio Website

> Personal engineering portfolio website of **Viktor Lukianov**, Full-Stack Software Engineer specializing in Python and TypeScript ecosystems.  
> Live Website: [marrybye.github.io](https://marrybye.github.io/)

---

## 1. Overview

This repository contains the source code for Viktor Lukianov's personal developer portfolio. Built as a high-performance single-page application (SPA), the site showcases production-grade full-stack systems, distributed SaaS platforms, clinical automation bots, and technical career achievements.

### Key Capabilities
- **Real-Time Project Directory:** Interactive portfolio catalog featuring category filtering (`All`, `Full-Stack`, `Bots / AI`, `SaaS`), multi-field search (title, subtitle, description, tech stack tags), and direct links to open-source GitHub repositories.
- **Career & Experience Presentation:** Detailed timeline of engineering roles, operational leadership milestones (leading 21 instructors), and pedagogical achievements (mentoring 50+ students).
- **Modern UI & Design System:** Tailored dark-mode-first aesthetic powered by Tailwind CSS and accessible Radix UI primitives.
- **Fast Client Architecture:** Instant client-side hash routing ensuring smooth navigation on static hosts such as GitHub Pages.

---

## 2. Featured Projects Catalog

The portfolio presents Viktor's real production and open-source systems:

| Project | Domain | Core Technologies | Live Repository |
|---|---|---|---|
| **BizX Platform** | Enterprise B2B SaaS Monorepo | TypeScript, NestJS 11, Next.js 15, React 19, Expo SDK 52, Drizzle ORM, Redis, BullMQ, Docker | [MarryBye/bizx-platform](https://github.com/MarryBye/bizx-platform) |
| **Taxi Dispatch Platform** | Full-Stack Ride Hailing | Python, FastAPI, PostgreSQL, PL/pgSQL (roles, triggers, views), React 18, Vite, Docker | [MarryBye/taxi-dispatch-platform](https://github.com/MarryBye/taxi-dispatch-platform) |
| **Taxi CRM** | Fleet & Order Management | TypeScript, React, TanStack Query/Router, Express, TypeORM, Playwright, Storybook, Docker | [MarryBye/taxi-crm](https://github.com/MarryBye/taxi-crm) |
| **Donor Center Telegram Bot** | Clinical Healthcare Bot | Python, Aiogram 3, PostgreSQL, FSM, JSON i18n (6 languages), Docker | [MarryBye/donor-center-telegram-bot](https://github.com/MarryBye/donor-center-telegram-bot) |
| **Coderator** | Multimodal AI Assistant | Python, Discord.py, Google Gemini API, SQLAlchemy, SQLite, Docker | [MarryBye/coderator-discord-bot](https://github.com/MarryBye/coderator-discord-bot) |
| **SUITT Schedule Bot** | Timetable & AI Notes | Python, Aiogram, Google Gemini API, SQLite, Docker | [MarryBye/suitt-schedule-bot](https://github.com/MarryBye/suitt-schedule-bot) |

---

## 3. Tech Stack

- **Core Framework:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + custom dark theme configuration
- **UI Primitives:** [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) patterns
- **Icons:** [Lucide React](https://lucide.dev/) + optimized custom SVG assets
- **Routing:** [React Router](https://reactrouter.com/) (HashRouter for GitHub Pages static hosting compatibility)
- **Deployment:** GitHub Pages via `gh-pages`

---

## 4. Project Structure

```
marrybye.github.io/
├── public/                  # Static assets and technology brand icons
│   ├── github.svg
│   ├── linkedin.svg
│   ├── python.svg
│   ├── react.svg
│   ├── sql.svg
│   ├── telegram.svg
│   └── typescript.svg
├── src/
│   ├── components/          # Reusable UI primitives and layout wrappers
│   │   ├── layouts/         # Base page shell with navigation
│   │   ├── ui/              # Radix UI and shadcn-inspired components
│   │   ├── hollow-container.tsx
│   │   └── nav-panel.tsx    # Header navigation bar with dropdown menus
│   ├── lib/                 # Class merging utilities (clsx + tailwind-merge)
│   ├── pages/               # Application view routes
│   │   ├── Home.tsx         # Executive summary, core stack, social links
│   │   ├── Projects.tsx     # Filterable and searchable 6-project showcase
│   │   ├── Experience.tsx   # Professional employment timeline & metrics
│   │   ├── Graduate.tsx     # Higher education degrees & language proficiency
│   │   ├── Career.tsx       # Engineering principles & leadership trajectory
│   │   ├── Contact.tsx      # Direct communication channels & availability
│   │   └── About.tsx        # High-level professional overview
│   ├── App.tsx              # Root application setup & route declarations
│   └── index.html           # HTML entry point
├── package.json             # NPM dependencies and build scripts
├── tsconfig.json            # Strict TypeScript configuration
└── vite.config.ts           # Vite build pipeline setup
```

---

## 5. Local Development Quickstart

### Prerequisites
- **Node.js:** v18.0.0 or higher (v20+ / v22+ recommended)
- **Package Manager:** `npm` (or `pnpm` / `yarn`)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MarryBye/marrybye.github.io.git
   cd marrybye.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173/`.

4. **Build production bundle:**
   ```bash
   npm run build
   ```
   Compiled static assets will be output to the `dist/` directory (ignored by git).

5. **Preview production build locally:**
   ```bash
   npm run serve
   ```

---

## 6. Author & Contact

**Viktor Lukianov**  
Full-Stack Software Engineer (Python / TypeScript)  
- Location: Brno, Czech Republic (Open to Remote / Hybrid / Relocation)
- Email: [vlukianov04@gmail.com](mailto:vlukianov04@gmail.com)
- LinkedIn: [linkedin.com/in/lukianov-viktor](https://www.linkedin.com/in/lukianov-viktor/)
- GitHub: [github.com/MarryBye](https://github.com/MarryBye)
- Telegram: [@viktorlukianov](https://t.me/viktorlukianov)
