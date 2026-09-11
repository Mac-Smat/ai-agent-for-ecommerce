# Implementation Plan — Pricing Page Redesign

> Rebuild the Pricing page to match the supplied HTML template's structure and interactions,
> adapted to the site's existing **light theme** and **4-tier** data model.

## Overview

Restyle `PricingView.tsx` to match the supplied template: a centered `isolate` section with a subtle top glow, a Monthly/Annual billing toggle (animated knob + "Save 20%" badge), a responsive 4-column card grid with a **featured** Growth card (image background + radial accent overlay + distinct CTA), per-card feature lists with emerald check icons, and scroll-triggered `fadeSlideIn` entrance animations with staggered delays. The template's dark theme and Manrope font are **not** adopted — the structure is mapped onto the existing light design system (Inter font, neutral palette, `accent` emerald `#10B981`, `#ef4d23` brand orange). The current 4-tier data (Free / Starter / Growth / Scale) is preserved; Growth becomes the featured card. A neutral-gradient placeholder marks where the featured card's background image will go (user supplies the real image later).

## Types

No new TypeScript types. The existing `plans` array shape is retained. Three new **optional** fields support the toggle-driven price swapping:

- `dataMonthly?: string` — price shown when monthly is selected (e.g. `"$49"`)
- `dataAnnual?: string` — price shown when annual is selected (e.g. `"$39"`)
- `dataPeriod?: string` — period label swapped by the toggle (e.g. `"/mo"` vs `"/yr"`)

The existing `priceMonthly` / `priceAnnual` / `period` strings remain as the static fallback.

## Files

### Modify
- `src/app/components/PricingView.tsx` — full restyle: section wrapper, billing toggle, card grid, featured card, scroll animations, footer note.
- `src/index.css` — add `fadeSlideIn` keyframes and `.animate-on-scroll` / `.is-visible` utility classes.

### Create
- *None.* The redesign lives entirely in the existing `PricingView.tsx`.

### Configuration
- `tailwind.config.js` — **no change** (keeping Inter per the light-theme decision; Manrope not added).

## Functions

### `PricingView` — `src/app/components/PricingView.tsx`
Complete restyle. Specific changes:

1. **Section wrapper** — `isolate overflow-hidden pt-24 pb-24 relative` with subtle top glow `bg-[radial-gradient(60%_80%_at_50%_0%,rgba(0,0,0,0.02),transparent_60%)]` and inner `z-10 md:px-8 max-w-7xl mx-auto px-6 relative`.

2. **Header** — keep badge + title + subtitle. Add billing toggle: "Monthly" label, animated knob button, "Annual" label with amber "Save 20%" badge. Knob translates `translate-x-0` (monthly) to `translate-x-8` (annual) via the existing `useState<boolean>` (`annual`). Container: `bg-neutral-200/80 rounded-full p-1 ring-1 ring-neutral-200`.

3. **Card grid** — `grid gap-6 lg:grid-cols-4` (4 tiers). Default cards: `bg-white border-neutral-200 shadow-sm`. **Featured card (Growth)**: `ring-2 ring-[#ef4d23]/20 shadow-xl scale-[1.02] z-10`, inner `relative overflow-hidden rounded-2xl` area with a placeholder neutral-gradient background (`bg-gradient-to-b from-neutral-100 to-neutral-200`) plus radial accent glow `bg-[radial-gradient(60%_80%_at_80%_0%,rgba(239,77,35,0.12),transparent_60%)]`. A commented `<img>` placeholder marks where the real image goes. Featured CTA uses `#ef4d23`; Starter/Scale use `bg-neutral-900`; Free uses outline style.

4. **Price swapping** — each price reads `annual ? plan.dataAnnual : plan.dataMonthly` (fallback to existing `priceMonthly`/`priceAnnual`); period label reads `dataPeriod` when present.

5. **Feature lists** — emerald-600 checks on default cards, `#ef4d23` checks on the featured card.

6. **Scroll animations** — header, each card, and footer note wrapped in `animate-on-scroll`; staggered via inline `style={{ animationDelay }}`.

7. **Footer note** — add *"All plans include 14-day free trial. No setup fees."*; keep the existing FAQ banner beneath it.

### `index.css` — `src/index.css`
Add the `fadeSlideIn` keyframes and `.animate-on-scroll` / `.is-visible` utility classes at the end of the file. Because CSS-only scroll animation isn't reliable, the component uses a small `useEffect` + `IntersectionObserver` that adds `.is-visible` to each `.animate-on-scroll` element to trigger the animation. The `forwards` fill-mode keeps the final state.

## Classes

No new React classes. The `IntersectionObserver` logic lives in an inline `useEffect` in `PricingView.tsx` that attaches refs and toggles `.is-visible`.

## Dependencies

**None.** All work uses the existing stack (React 19, Tailwind 3, lucide-react). No new packages.

## Testing

- `npm run build` (type-check + bundle) and `npm run lint` must pass with 0 errors.
- Manual check: toggle Monthly ↔ Annual and confirm prices/period labels swap; scroll down and confirm cards fade-slide in; confirm Growth card is visually featured; confirm 4 tiers render.

## Implementation Order
1. Add `fadeSlideIn` + `.animate-on-scroll` CSS to `src/index.css`. **[done]**
2. Restyle `PricingView.tsx` section wrapper + header + billing toggle (animated knob + badge).
3. Restyle the card grid: default cards, featured Growth card (placeholder image area), per-card CTAs.
4. Wire price/period swapping to the toggle state.
5. Add `IntersectionObserver` scroll-reveal + stagger delays to header, cards, footer note.
6. Add the "14-day free trial" footer note; keep the existing FAQ banner beneath it.
7. Verify: `npm run build` + `npm run lint`, then visual check of toggle + animations + 4-tier grid.

