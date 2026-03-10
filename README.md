# Ziptech Limited — Corporate Website 🚀

Welcome to the official repository for **Ziptech Limited's** corporate website. This modern, high‑performance site showcases our services, portfolio, and company culture with polished visuals, smooth motion, and strong accessibility.

## 🌟 Key Features

- **Immersive Motion & 3D**: Scroll‑driven animations powered by Framer Motion and optional WebGL scenes with three.js/react‑three‑fiber.
- **Smooth UX**: Turbocharged dev server, client/server components via Next.js App Router, and performance‑minded rendering.
- **Dark Theming**: Elegant dark‑first aesthetic with accent gradients and thoughtful contrast.
- **Composable UI**: Radix‑based components and utility‑first styling for rapid iteration.

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **Animations**: Framer Motion
- **Language**: TypeScript

## ✅ Requirements

- Node.js 18+ (recommended)
- npm 10+ (or Bun 1+ if preferred)

## 🚀 Getting Started

Run the site locally:

```bash
# Install dependencies
npm install

# Start development (Turbopack)
npm run dev
```

Open http://localhost:3000 in your browser.

Using Bun:

```bash
bun install
bun run dev
```

## 📜 Scripts

- `dev` — Start Next.js in development with Turbopack
- `build` — Production build
- `start` — Run the production server
- `lint` — Lint the codebase

## 📁 Project Structure

```text
public/                     # Static assets (images, icons)
src/
├─ app/                     # Next.js App Router (layouts & routes)
│  ├─ about/                # About page
│  ├─ work/                 # Portfolio index & dynamic project pages
│  ├─ contact/              # Contact page
│  ├─ globals.css           # Global styles (Tailwind v4)
│  ├─ layout.tsx            # Root layout & metadata
│  └─ page.tsx              # Home page
├─ components/
│  ├─ sections/             # Page sections (Hero, Navbar, Footer, etc.)
│  ├─ ui/                   # Reusable UI primitives
│  └─ providers/            # App‑level providers (e.g., smooth scrolling)
├─ hooks/                   # Custom React hooks
├─ lib/                     # Utilities & data (e.g., project-data.ts)
└─ visual-edits/            # Visual edits messenger & helpers
```

## 🧪 Quality

- **Linting**: ESLint with Next.js config (`npm run lint`)
- **Type Safety**: TypeScript with strict settings (`tsconfig.json`)

## ☁️ Deployment

- Recommended: **Vercel**
  - Import the repository
  - Build command: `next build`
  - Output is auto‑detected; `next start` used for Node deployments outside Vercel
  - Set any required environment variables in the platform dashboard (none required by default)

## 🎨 Design Notes

Glassmorphism accents, subtle shadows, and cinematic vignettes focus attention on key content. The palette leans toward deep neutrals with energetic cyan accents to reflect Ziptech’s brand.

## 🤝 Contributing

- Fork the repo and create a feature branch
- Run `npm run lint` before opening a PR
- Keep components small, composable, and accessible

## 📄 License

Copyright © Ziptech Limited. All rights reserved.
