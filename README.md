# TierraTrace website — redesign

One connected site: homepage + the six Platform product pages, all reachable from the **Platform** menu.

- **Quick look (no install):** open `preview/index.html` in a browser. Every page and the Platform menu work from that one file.
- **Develop:** `npm install` then `npm run dev`, open the printed URL.
- **Rebuild preview:** `npm run build:preview`.
- **Type-check:** `npm run typecheck` · **Production build:** `npm run build` (outputs `dist/`).

## Routes
| Page | Route | Folder | Status |
|---|---|---|---|
| Home | `#/` | `src/pages/home` | Rebuilt from tierratrace.in |
| Passport | `#/platform/passport` | `src/pages/platform/passport` | Done |
| Trace | `#/platform/trace` | `src/pages/platform/trace` | Done |
| Carbon | `#/platform/carbon` | `src/pages/platform/carbon` | Done |
| Verify | `#/platform/verify` | `src/pages/platform/verify` | Done |
| Insights | `#/platform/insights` | `src/pages/platform/insights` | Done |
| Connect | `#/platform/connect` | `src/pages/platform/connect` | Done |

Shared pieces: `src/components/layout` (Nav with Platform mega-menu, Footer, ScrollManager), `src/components/ui.tsx`,
`src/components/Closing.tsx` (sibling product links + pilot CTA), product list in `src/data/products.ts`.

Brand: green `#31C35A`, ink `#080C0F`, Be Vietnam Pro, H1 60px / body 18px (tokens in `src/index.css`).

## Sources in the TierraTrace repo
| Page | Spec |
|---|---|
| Passport | `docs/prd/web-core.md` §8.4, §56 |
| Trace | `docs/prd/web-core.md` §8.3, §48, §52, §53 |
| Carbon | `docs/prd/web-carbon.md` §1–3, §8, §12.7–12.19 |
| Verify | `docs/prd/web-verify.md` §1–3, §12.1, §12.7, §12.8 |
| Insights | `docs/prd/web-core.md` §58–59, `docs/plan/web-insights-build-plan.md` |
| Connect | `docs/prd/web-connect.md` §1–2, §7.3, §8.4, §18, §25–26 |

Shared building blocks for product pages live in `src/components/product.tsx` (ProductHero, DemoCard, Segmented, FeatureGrid, StandardsStrip).
`src/pages/platform/ComingSoon.tsx` is the fallback for any future product added to `src/data/products.ts` before its page exists.
