# Ziptech Limited - Corporate Website 🚀

Welcome to the official repository for **Ziptech Limited's** corporate website. This project is a visually stunning, meticulously crafted digital experience built to showcase our portfolio, services, and company culture at an Awwwards-competition level of design and performance.

## 🌟 Key Features

- **Immersive 3D Interactions**: Features floating elements, complex scroll-driven animations leveraging Framer Motion, and cinematic typography reveals.
- **Buttery Smooth Performance**: Optimized to 60fps with Next.js App Router, combining Server and Client components perfectly.
- **Dynamic Theming**: An elegant dark-mode dominant aesthetic ("sidebar" theme) accented by custom neon cyan gradients.
- **Premium Typography**: Features intermixed serif and modern sans-serif typefaces configured meticulously for contrast and hierarchy.

## 🛠️ Technology Stack

- **Framework**: [Next.js 14/15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

To run the development server locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
src/
├── app/                  # Next.js App Router (pages & layouts)
│   ├── about/            # About page
│   ├── work/             # Portfolio index and dynamic project pages
│   ├── contact/          # Contact page
│   ├── globals.css       # Global Tailwind CSS configurations
│   └── layout.tsx        # Root HTML layout and global metadata
├── components/
│   ├── sections/         # Reusable page sections (Hero, Navbar, Footer, etc.)
│   └── ui/               # Granular reusable UI elements
├── lib/
│   ├── project-data.ts   # Mocked data source for portfolio projects
│   └── utils.ts          # Utility functions
```

## 🎨 Design Philosophy

Our design relies heavily on "glassmorphism", deep shadows, and cinematic vignette overlays to draw focus to critical content elements. The color palette centers around deep blacks and charcoals contrasted sharply with energetic, high-saturation cyan (`#00ffff`), keeping true to the Ziptech Limited visual identity.
