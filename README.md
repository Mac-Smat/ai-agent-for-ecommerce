# StockAgent — The "Stripe for AI Shopping Assistants"

A marketing/web app front-end for **StockAgent**, an infrastructure product that lets any e-commerce
store add photo-matching visual search and real-time inventory checking to their storefront in minutes.

> Positioning: *"The Stripe for AI Shopping Assistants"* — visual search + real-time inventory as a
> drop-in service for online stores.

## Tech Stack

- **Build tool:** Vite 8 (`vite`)
- **UI:** React 19 (`react`, `react-dom`) with TypeScript 6
- **Styling:** Tailwind CSS 3 (+ PostCSS / Autoprefixer)
- **Lint:** Oxlint (`oxlint`)
- **Icons:** `lucide-react`

## Project Structure

```
src/
├── main.tsx                      # React root, mounts <App/> in StrictMode
├── index.css                     # Global styles
├── styles/
│   └── fonts.css                 # Custom font-face declarations (Inter, Instrument Serif)
└── app/
    ├── App.tsx                   # Top-level shell: tab state + onboarding modal orchestration
    └── components/
        ├── Navbar.tsx            # Top nav, switches tabs, triggers onboarding modal
        ├── DashboardPreview.tsx  # Hero dashboard mockup (no props)
        ├── IntroducingStockAgent.tsx
        ├── Integrations.tsx      # Social proof / integrations banner (largest component)
        ├── ProblemFix.tsx        # "Problem vs Fix" comparison section
        ├── HowItWorks.tsx        # Steps / explainer section
        ├── LiveWidgetDemo.tsx    # Interactive storefront assistant simulator (largest component)
        ├── FeaturesView.tsx      # /features tab view
        ├── PricingView.tsx       # /pricing tab view
        ├── AboutView.tsx         # /about tab view
        ├── DocsView.tsx          # /docs tab view
        ├── OnboardingModal.tsx   # "Get API key" developer onboarding modal
        ├── Footer.tsx            # Site footer + tab nav
        └── Gauge.tsx             # Reusable radial gauge widget
```

## How It Works

`App.tsx` holds two pieces of UI state:

- `activeTab`: `'home' | 'features' | 'pricing' | 'docs' | 'about'` — controls which top-level view renders.
- `isModalOpen`: drives the `OnboardingModal` ("Get API key" / developer signup).

Most sections receive an `onGetApiKey` callback that opens the onboarding modal, giving the whole
site a single shared conversion entry point. `Navbar` and `Footer` receive `onTabChange` to switch views.

The home tab composes: Hero (with background video at
`/images/Create_3D_animation_sequence_202608241537.mp4`) → `DashboardPreview` →
`IntroducingStockAgent` → `Integrations` → `ProblemFix` → `HowItWorks` → `LiveWidgetDemo`.

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start Vite dev server (HMR)         |
| `npm run build`   | Type-check (`tsc -b`) + Vite build  |
| `npm run lint`    | Run Oxlint                          |
| `npm run preview` | Preview the production build        |

## Notes

- No backend is wired in yet — the app is a front-end / marketing surface.
- Background hero video is referenced from `public/images/...`; ensure that asset exists for the hero to render.
- This README is maintained by the monitoring assistant. See `docs/CHANGELOG.md` for change history.
