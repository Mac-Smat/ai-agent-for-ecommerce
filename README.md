# StockAgent — The "Stripe for AI Shopping Assistants"

Marketing and developer-facing web app for **StockAgent**, an infrastructure product that lets any
e-commerce store add photo-matching visual search and real-time inventory answers to its storefront
in minutes.

> **Positioning:** *"The Stripe for AI Shopping Assistants"* — visual search + real-time inventory
> as a drop-in service for online stores.

The app is a single-page React site with six tabbed views (Home, Features, Pricing, Docs, About,
Contact), an interactive storefront-assistant simulator, and a developer onboarding modal that acts
as the site-wide conversion entry point.

## Features

- **Hero landing page** with a looping background video, animated headline, and live dashboard mockup.
- **Interactive widget demo** — a simulated storefront assistant you can chat with to see the
  visual-search and inventory answer flow.
- **Six tabbed views** driven by local state, so the whole marketing site ships as one SPA.
- **Pricing page** with a Monthly/Annual billing toggle, four tiers, and a featured plan card.
- **Onboarding modal** ("Get your API key") reachable from every CTA on the site.
- **Scroll-triggered animations** via `IntersectionObserver` and `framer-motion`.

## Tech Stack

| Area         | Choice                                                        |
| ------------ | ------------------------------------------------------------- |
| Build tool   | [Vite 8](https://vite.dev)                                     |
| UI           | [React 19](https://react.dev) + TypeScript 6                   |
| Styling      | [Tailwind CSS 3](https://tailwindcss.com) (PostCSS + Autoprefixer) |
| Animation    | `framer-motion`                                                |
| Icons        | `lucide-react`                                                 |
| Linting      | [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)           |

## Prerequisites

- **Node.js** `^20.19.0` or `>=22.12.0` (required by Vite 8)
- **npm** (the project ships a `package-lock.json`)

```bash
node -v   # verify your Node version
```

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Mac-Smat/ai-agent-for-ecommerce.git
cd ai-agent-for-ecommerce

# 2. Install dependencies
npm install

# 3. Start the dev server (hot reload)
npm run dev
```

Vite prints the URLs on startup:

```
➜  Local:   http://localhost:5173/
➜  Network: http://<your-lan-ip>:5173/
```

The dev server binds to `0.0.0.0` (`server.host: true` in `vite.config.ts`), so the Network URL works
from other devices on the same Wi-Fi.

### Production build

```bash
npm run build     # type-check (tsc -b) then bundle into dist/
npm run preview   # serve dist/ locally to verify the build
```

`dist/` is a static bundle and can be deployed to any static host (Netlify, Vercel, GitHub Pages,
S3/CloudFront, nginx).

## Available Scripts

| Script            | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR                |
| `npm run build`   | Type-check with `tsc -b`, then build to `dist/`   |
| `npm run preview` | Serve the production build locally                |
| `npm run lint`    | Run Oxlint over the source tree                   |

## Project Structure

```
.
├── index.html                  # HTML shell, page metadata, #root mount point
├── vite.config.ts              # Vite config (React plugin, host 0.0.0.0, port 5173)
├── tailwind.config.js          # Design tokens: colors, fonts, shadows, gradients
├── postcss.config.js
├── public/                     # Static assets served from the site root
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/
│       ├── BACKGROUND_SPECS.md
│       └── Create_3D_animation_sequence_202608241537.mp4   # hero background video
├── docs/
│   └── CHANGELOG.md
└── src/
    ├── main.tsx                # React root, mounts <App/> in StrictMode
    ├── index.css               # Tailwind layers + theme CSS variables + animation utilities
    ├── styles/fonts.css        # Font-face imports (Inter, Instrument Serif)
    ├── lib/utils.ts            # cn() class-name helper
    └── app/
        ├── App.tsx             # App shell: tab state + onboarding modal orchestration
        └── components/
            ├── Navbar.tsx                  # Top nav; switches tabs, opens modal
            ├── DashboardPreview.tsx        # Hero dashboard mockup (uses Gauge)
            ├── Gauge.tsx                   # Reusable radial gauge widget
            ├── IntroducingStockAgent.tsx   # Product intro section
            ├── Integrations.tsx            # Social proof / integrations banner
            ├── ProblemFix.tsx              # "Problem vs Fix" comparison
            ├── HowItWorks.tsx              # Explainer steps (uses ScrollingFeatureShowcase)
            ├── ScrollingFeatureShowcase.tsx
            ├── LiveWidgetDemo.tsx          # Interactive storefront assistant simulator
            ├── FeaturesView.tsx            # Features tab
            ├── PricingView.tsx             # Pricing tab (billing toggle, 4 tiers)
            ├── DocsView.tsx                # Docs tab
            ├── AboutView.tsx               # About tab
            ├── ContactView.tsx             # Contact tab
            ├── OnboardingModal.tsx         # "Get API key" developer modal
            ├── Footer.tsx                  # Site footer + tab nav
            ├── Timeline.tsx                # Unused component, kept as a building block
            └── ui/
                └── text-generate-effect.tsx  # Unused animation helper
```

## How It Works

All routing is local state inside `src/app/App.tsx` — there is no router or backend:

- **`activeTab`** — `'home' | 'features' | 'pricing' | 'docs' | 'about' | 'contact'` selects which
  top-level view renders. Switching tabs scrolls back to the top.
- **`isModalOpen`** — drives `OnboardingModal`. Every section receives an `onGetApiKey` callback that
  opens it, so the whole site funnels into one conversion entry point. `Navbar` and `Footer` also
  receive `onTabChange` to switch views.

The **Home** tab composes: hero (background video + headline + CTAs) → `DashboardPreview` →
`IntroducingStockAgent` → `Integrations` → `ProblemFix` → `HowItWorks` → `LiveWidgetDemo`.

## Customizing the Design

- **Tailwind tokens** (`tailwind.config.js`) — surface colors, `accent` emerald, `glow` indigo/violet,
  font families, and glow shadows/gradients.
- **CSS variables** (`src/index.css`) — the same palette exposed as custom properties for raw CSS and
  `dark:` variants, plus the `fadeSlideIn` scroll-reveal keyframes.
- **Brand accents used inline** — orange `#ef4d23` for primary CTAs and emerald `#10B981` for success
  states.
- **Typography** — Inter (UI) and Instrument Serif (italic display accents), loaded from Google Fonts
  in `src/styles/fonts.css` and `src/index.css`.

## Notes & Limitations

- **Front-end only.** No API, database, or auth is wired up yet — the site is a marketing and
  developer-onboarding surface.
- **Hero video asset.** The hero references
  `public/images/Create_3D_animation_sequence_202608241537.mp4`. Without that file the hero falls back
  to its grey gradient background.
- **No client-side routing.** Deep links like `/pricing` are not supported; views are state-driven. A
  router would be needed for shareable per-page URLs.
- **Unused dependencies.** The `ws` package is listed in `package.json` but is not imported by any
  source file; `Timeline.tsx` and `ui/text-generate-effect.tsx` are likewise unused, kept as
  scaffolding for future sections.
- **Lint status.** `npm run lint` currently reports warnings (0 errors) about `useEffect` dependencies.

## License

No license has been added to this repository yet, so all rights are reserved by the author. Add a
`LICENSE` file if you intend to allow reuse.
