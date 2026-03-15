# NEUROX — Neural Interface Platform

> Precision Intelligence for the Neural Age.

A fully animated, multi-page frontend demo website for **NEUROX** — a fictional
neural-cognitive interface platform. Built to showcase production-grade UI/UX
engineering with dark cyberpunk-industrial aesthetics, real-time dashboard
simulations, and fluid motion design.

![NEUROX Banner](./public/preview.png)

---

## Live Demo

🔗 [neurox-demo.vercel.app](https://neurox-demo.vercel.app)

---

## Pages

| Route        | Description                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- |
| `/`          | Landing page with hero, stats, infrastructure, protocol sequence, and network visualizer |
| `/dashboard` | Neural Command dashboard with live charts, KPI cards, and action feed                    |
| `/pricing`   | Neon Precision pricing tiers with testimonials                                           |

---

## Tech Stack

| Technology       | Version         | Purpose                     |
| ---------------- | --------------- | --------------------------- |
| React            | 19              | UI framework                |
| Vite             | 6               | Build tool                  |
| Tailwind CSS     | v4              | Utility styling             |
| Framer Motion    | v11             | All animations              |
| React Router DOM | v7              | Client-side routing         |
| Recharts         | v2              | Dashboard charts            |
| shadcn/ui        | latest (canary) | Base UI components          |
| Aceternity UI    | latest          | Hero effects & interactions |
| Lucide React     | latest          | Icon system                 |
| IBM Plex Mono    | —               | Monospace / data font       |
| Bebas Neue       | —               | Display / heading font      |
| Geist            | —               | Body copy font              |

---

## Features

### Landing Page

- ⚡ SparklesCore particle field hero background
- 🔦 Aceternity Spotlight with subtle orange glow
- ✍️ TextGenerateEffect animated subtitle
- 📊 Animated stats bar with count-up numbers
- 🃏 CardHoverEffect infrastructure feature grid
- 🔗 TracingBeam protocol sequence section
- 🌐 Animated SVG neural network visualizer
- 🔴 Live pulsing node status indicators

### Dashboard

- 📈 Self-drawing Recharts AreaChart with scanning dot
- 🧠 KPI cards with spring-based number counters
- 🍩 Animated donut sync chart
- 📊 Staggered progress distribution bars
- 📋 Action feed with slide-in animations
- ⚙️ Orchestrated boot-up sequence (16-step timed entrance)
- 🔄 Framer Motion sidebar with progress bar

### Pricing

- 💎 MovingBorder featured card
- 🌟 AnimatedTooltip testimonial avatars
- 🔦 BackgroundBeams page atmosphere
- ✅ Animated feature list reveals

### Global

- 🖱️ Custom spring-based cursor
- 🎬 Page transition animations (AnimatePresence)
- 📱 Responsive layout (mobile → desktop)
- ♿ Accessible markup and focus states

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/neurox-neural-interface-demo.git

# Navigate into the project
cd neurox-neural-interface-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
neurox/
├── public/
│   └── preview.png
├── src/
│   ├── main.tsx
│   ├── App.tsx                    # Router + CustomCursor + AnimatePresence
│   ├── main.css                   # Tailwind v4 @theme tokens
│   ├── pages/
│   │   ├── Landing.tsx
│   │   ├── Dashboard.tsx
│   │   └── Pricing.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── DashboardSidebar.tsx
│   │   │   └── DashboardTopbar.tsx
│   │   ├── landing/
│   │   │   ├── Hero.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── CoreInfrastructure.tsx
│   │   │   ├── ProtocolSequence.tsx
│   │   │   └── GlobalConsciousness.tsx
│   │   ├── dashboard/
│   │   │   ├── KPICards.tsx
│   │   │   ├── NeuralActivityChart.tsx
│   │   │   ├── ProcessingDistribution.tsx
│   │   │   ├── SyncDonut.tsx
│   │   │   └── ActionFeed.tsx
│   │   ├── pricing/
│   │   │   ├── PricingCards.tsx
│   │   │   └── Testimonials.tsx
│   │   └── ui/
│   │       ├── CustomCursor.tsx
│   │       └── (shadcn + aceternity components)
│   └── lib/
│       └── utils.ts
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

### Color Palette

| Token                 | Value     | Usage           |
| --------------------- | --------- | --------------- |
| `--color-bg-base`     | `#0A0806` | Page background |
| `--color-bg-surface`  | `#111009` | Sidebar, topbar |
| `--color-bg-card`     | `#16130E` | Cards           |
| `--color-border`      | `#2A2420` | All borders     |
| `--color-orange`      | `#FF4D00` | Primary accent  |
| `--color-orange-soft` | `#FF8C42` | Gradients       |
| `--color-text`        | `#F5F0E8` | Primary text    |
| `--color-muted`       | `#6B6158` | Secondary text  |
| `--color-green`       | `#3DFF8F` | Success/active  |
| `--color-warning`     | `#FFB800` | Warning states  |

### Typography

| Font          | Role                   | Sizes     |
| ------------- | ---------------------- | --------- |
| Bebas Neue    | Display / Headings     | 48px–96px |
| IBM Plex Mono | Labels / Data / Badges | 10px–13px |
| Geist         | Body / Descriptions    | 13px–16px |

### Animation Easing

All transitions use: `[0.22, 1, 0.36, 1]` (ease-out-expo)

---

## Screenshots

### Landing Page

![Landing](./public/screenshots/landing.png)

### Dashboard

![Dashboard](./public/screenshots/dashboard.png)

### Pricing

![Pricing](./public/screenshots/pricing.png)

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Upload /dist folder to Netlify
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host"]
```

---

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

MIT License — see [LICENSE](./LICENSE) for details.

---

## Acknowledgements

- [Aceternity UI](https://ui.aceternity.com) — SparklesCore, MovingBorder,
  BackgroundBeams, and other effects
- [shadcn/ui](https://ui.shadcn.com) — Base component primitives
- [Framer Motion](https://www.framer.com/motion) — Animation engine
- [Recharts](https://recharts.org) — Chart library
- Design inspiration: Bloomberg Terminal, Neuralink,
  and cyberpunk aesthetic systems

---

<p align="center">
  Built with precision. Every pixel intentional.
  <br/>
  <strong>NEUROX © 2026</strong>
</p>
```

---
