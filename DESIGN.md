---
version: alpha
name: TierraTrace-design-system
description: "TierraTrace is an enterprise Digital Product Passport & supply-chain traceability platform (ESPR/CSRD/CBAM compliance, carbon accounting, blockchain-anchored provenance). The marketing site sells trust to compliance officers, sustainability leads and supply-chain executives — not consumer delight. This system keeps TierraTrace Green (#10C35A) as the single brand signature but replaces the current site's generic gradient-blob/particle hero with a restrained, data-credible aesthetic: a deep forest-black dark mode used consistently (not three different near-blacks), one clear pill-green primary CTA hierarchy, dark ink text on the bright green pill for real AA contrast, hairline-bordered flat cards, and a formal type/spacing scale replacing the current file's ad-hoc pixel values. Structural template inspired by VoltAgent/awesome-design-md's MongoDB analysis (same category: enterprise data platform, same green brand) — every token, section and component below is native to TierraTrace."

colors:
  primary: "#10C35A"
  primary-deep: "#0EA64C"
  primary-pressed: "#0B8A3F"
  primary-soft: "#E7FBEE"
  on-primary: "#052015"
  on-primary-dark-canvas: "#052015"
  canvas: "#FFFFFF"
  canvas-dark: "#071A11"
  canvas-dark-2: "#0C2418"
  surface: "#F7FAF8"
  surface-2: "#EFF5F1"
  surface-feature: "#E7FBEE"
  hairline: "#E4EAE6"
  hairline-strong: "#C7D2CB"
  hairline-dark: "#1C3327"
  hairline-dark-strong: "#2A4A38"
  ink: "#0B1310"
  ink-secondary: "#2B372F"
  ink-muted: "#5F6D64"
  ink-subtle: "#8B958E"
  on-dark: "#FFFFFF"
  on-dark-muted: "#A9B7AE"
  status-ready-bg: "#E7FBEE"
  status-ready-text: "#0B8A3F"
  status-review-bg: "#FFF6E0"
  status-review-text: "#8A5E14"
  status-planned-bg: "#EFF5F1"
  status-planned-text: "#5F6D64"
  error: "#D64550"
  error-soft: "#FDEDEE"

typography:
  hero-display:
    fontFamily: Be Vietnam Pro
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -0.02em
  heading-1:
    fontFamily: Be Vietnam Pro
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  heading-2:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.015em
  heading-3:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  heading-4:
    fontFamily: Be Vietnam Pro
    fontSize: 19px
    fontWeight: 600
    lineHeight: 1.30
  heading-5:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.40
  subtitle:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.60
  body:
    fontFamily: Be Vietnam Pro
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.60
  body-medium:
    fontFamily: Be Vietnam Pro
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.55
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 13.5px
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: Be Vietnam Pro
    fontSize: 12.5px
    fontWeight: 500
    lineHeight: 1.40
  micro-uppercase:
    fontFamily: Be Vietnam Pro
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0.14em
  button:
    fontFamily: Be Vietnam Pro
    fontSize: 14.5px
    fontWeight: 600
    lineHeight: 1.20
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  xxxl: 28px
  hero: 32px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
  section: 96px
  section-lg: 128px
  hero: 140px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.ink-subtle}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
    border: "1px solid {colors.hairline-strong}"
  button-secondary-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
    border: "1px solid {colors.hairline-dark-strong}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "10px 18px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary-pressed}"
    typography: "{typography.body-medium}"
    padding: "0"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-feature-dark:
    backgroundColor: "{colors.canvas-dark-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-dark}"
  metric-band:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xxl}"
    padding: "{spacing.xl}"
  metric-item:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-1}"
  lifecycle-step:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"
  lifecycle-step-active:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    border: "1px solid {colors.primary}"
  industry-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxl}"
    border: "1px solid {colors.hairline}"
  compliance-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "{spacing.md} {spacing.lg}"
    border: "0 0 1px {colors.hairline} solid"
  status-badge-ready:
    backgroundColor: "{colors.status-ready-bg}"
    textColor: "{colors.status-ready-text}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  status-badge-review:
    backgroundColor: "{colors.status-review-bg}"
    textColor: "{colors.status-review-text}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  status-badge-planned:
    backgroundColor: "{colors.status-planned-bg}"
    textColor: "{colors.status-planned-text}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  capability-row:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  passport-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxl}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
  passport-card-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  code-mono-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
    border: "1px solid {colors.hairline}"
  roadmap-step:
    backgroundColor: "{colors.canvas-dark-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md} {spacing.lg}"
    border: "1px solid {colors.hairline-dark}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline-strong}"
    height: 48px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.primary-pressed}"
  select-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline-strong}"
    height: 48px
  form-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  eyebrow-pill:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-pressed}"
    typography: "{typography.micro-uppercase}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
    border: "1px solid {colors.hairline-strong}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.full}"
    height: 64px
    border: "1px solid {colors.hairline}"
  mega-menu-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  footer-region:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
  logo-marquee-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.heading-4}"
---

## Overview

TierraTrace sells to compliance officers, ESG leads and supply-chain executives evaluating a system of record for regulatory audits (ESPR, CBAM, EU Battery Regulation) — not consumers. The site must read as **credible infrastructure**, the same register as an enterprise data-platform vendor, while keeping its own identity: **TierraTrace Green** (`{colors.primary}` `#10C35A`) as the single chromatic signature, applied the way a serious brand uses one color — scarce, deliberate, load-bearing — never as decoration.

**What changes from the current build, and why:**

1. **One dark surface, not three.** The current site uses `bg-ink` (near-black) for the Pilot CTA band and a separate `from-[#06331A] via-[#052614] to-[#02140A]` green gradient for the Footer — two unrelated dark colors on the same page read as unfinished. This system defines one `{colors.canvas-dark}` (`#071A11`, deep forest-black with a whisper of green) used everywhere the page goes dark, with `{colors.canvas-dark-2}` one step up for cards lifted on it.
2. **Fix the CTA hierarchy.** Today, green pills, black pills, and outlined pills all claim to be primary actions across different sections ("Request Pilot" green, "Explore Industries" black, "Talk to integrations" black). Only one action per viewport may be `{colors.primary}` green — everything else is `button-secondary` or `button-ghost`.
3. **Fix contrast on the primary button.** White text on `#10C35A` is under 2:1 contrast — fails WCAG AA. `on-primary` is now `{colors.on-primary}` (`#052015`, near-black), matching the pattern serious green-branded platforms use (bright pill, dark ink label).
4. **Retire the gradient-blob hero.** The nature-orb/particle/topographic-wave background reads as generic AI-startup decoration and undercuts an enterprise-compliance pitch. The interactive globe is the one hero visual worth keeping — it's a real product metaphor (trace a product across the physical world), not atmosphere. Everything else in the hero background is now a flat canvas or, at most, the existing faint particle-network canvas already used in `WhyTierraTrace` — nowhere else.
5. **Formal type and spacing scale.** The current file is full of one-off arbitrary values (`text-[38px]`, `text-[56px]`, `py-28 sm:py-36`, ad-hoc box-shadows per section). Every size below traces to a token; no new arbitrary value should ship without one.
6. **Compliance becomes a real table, not a list.** Regulatory readiness (`ESPR`, `CBAM`, `Battery Regulation`, `AGEC`...) is the single strongest trust signal this site can show a compliance buyer. It gets a dedicated `compliance-row` component with a `status-badge` (Ready / In review / Planned) — the same visual language an auditor expects from a compliance dashboard, not a marketing bullet list.

**Key Characteristics:**
- TierraTrace Green (`{colors.primary}` `#10C35A`) as the sole chromatic accent — pill CTAs, active states, link emphasis, status-ready badges only.
- One consistent deep forest-black (`{colors.canvas-dark}`) for every dark section: Pilot, Footer, dark cards.
- Dark ink text (`{colors.on-primary}`) on the bright green pill for real contrast.
- Flat, hairline-bordered cards (`{rounded.lg}`–`{rounded.xxl}`) — shadow reserved for the handful of things that should feel "lifted" (globe hero, passport card, modals).
- A named, numbered compliance-readiness table as the platform's central trust artifact.
- Be Vietnam Pro across every surface; IBM Plex Mono reserved for passport IDs, batch codes, and jurisdiction codes.

## Colors

### Brand
- **Primary** (`{colors.primary}`): TierraTrace Green — every primary CTA, active nav state, "Ready" status, link emphasis, primary chart series.
- **Primary Deep** (`{colors.primary-deep}`): Hover state of the primary button.
- **Primary Pressed** (`{colors.primary-pressed}`): Active/pressed state; also the color of inline text links (passes AA on white).
- **Primary Soft** (`{colors.primary-soft}`): Pale mint tint — eyebrow pills, "Ready" badge background, subtle section tints.
- **On Primary** (`{colors.on-primary}`): Deep near-black ink used as *text* on the bright green pill — never white-on-green.

### Surface — Light
- **Canvas** (`{colors.canvas}`): Page background, default card fill.
- **Surface** (`{colors.surface}`): Section-level tint distinguishing one band from the next without a hard edge.
- **Surface 2** (`{colors.surface-2}`): One step deeper — nested panels inside a surface section.
- **Surface Feature** (`{colors.surface-feature}`): Mint-tinted background for a single featured/highlighted card (used once per page, max).

### Surface — Dark
- **Canvas Dark** (`{colors.canvas-dark}`): The one dark surface in the system — Pilot band, Footer, any full-bleed dark section.
- **Canvas Dark 2** (`{colors.canvas-dark-2}`): One step lifted — cards and roadmap steps sitting on the dark canvas.
- **Hairline Dark** (`{colors.hairline-dark}`) / **Hairline Dark Strong** (`{colors.hairline-dark-strong}`): Borders on dark surfaces.

### Borders
- **Hairline** (`{colors.hairline}`): Default 1px card/table border on light surfaces.
- **Hairline Strong** (`{colors.hairline-strong}`): Input borders, secondary-button borders.

### Text
- **Ink** (`{colors.ink}`): Headlines and primary body — deep forest-black, not neutral grey.
- **Ink Secondary** (`{colors.ink-secondary}`): Emphasized body copy.
- **Ink Muted** (`{colors.ink-muted}`): Secondary/supporting copy, captions.
- **Ink Subtle** (`{colors.ink-subtle}`): Tertiary labels, disabled text, placeholder.
- **On Dark** (`{colors.on-dark}`): White text on `canvas-dark`.
- **On Dark Muted** (`{colors.on-dark-muted}`): Secondary text on dark surfaces (footer links, roadmap descriptions).

### Status (Compliance table only — never used decoratively elsewhere)
- **Ready** (`{colors.status-ready-bg}` / `{colors.status-ready-text}`): Regulation fully supported today.
- **In Review** (`{colors.status-review-bg}` / `{colors.status-review-text}`): Amber — regulation partially mapped or pending.
- **Planned** (`{colors.status-planned-bg}` / `{colors.status-planned-text}`): Neutral grey — on the roadmap, not yet started.

### Semantic
- **Error** (`{colors.error}`) / **Error Soft** (`{colors.error-soft}`): Form validation only.

## Typography

### Font Family
**Be Vietnam Pro** (primary) — already the site's font; kept because it's a confident geometric-humanist grotesk that reads as technical without being cold. Fallbacks: `ui-sans-serif, system-ui, sans-serif`.
**IBM Plex Mono** (mono) — new addition, replaces ad-hoc `font-mono` usage. Used exclusively for passport IDs (`TT-92·AC-1174`), batch codes, jurisdiction codes, timestamps.

### Hierarchy

| Token | Size | Weight | Line Height | Tracking | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 60px | 600 | 1.08 | -0.02em | Hero headline only |
| `{typography.display-lg}` | 48px | 600 | 1.10 | -0.02em | Major section openers (Why, Compliance) |
| `{typography.heading-1}` | 40px | 600 | 1.15 | -0.02em | Section headlines |
| `{typography.heading-2}` | 32px | 600 | 1.20 | -0.015em | Subsection headlines |
| `{typography.heading-3}` | 24px | 600 | 1.25 | -0.01em | Card titles, metric values |
| `{typography.heading-4}` | 19px | 600 | 1.30 | 0 | Feature-card titles |
| `{typography.heading-5}` | 16px | 600 | 1.40 | 0 | Compliance row titles, form labels |
| `{typography.subtitle}` | 18px | 400 | 1.55 | 0 | Hero subhead, section lead paragraph |
| `{typography.body-lg}` | 17px | 400 | 1.60 | 0 | Lead body copy |
| `{typography.body}` | 15px | 400 | 1.60 | 0 | Default body |
| `{typography.body-medium}` | 15px | 500 | 1.55 | 0 | Nav links, inline emphasis |
| `{typography.body-sm}` | 13.5px | 400 | 1.55 | 0 | Card description, footer body |
| `{typography.caption}` | 12.5px | 500 | 1.40 | 0 | Status badges, meta text |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 0.14em | Eyebrow labels only |
| `{typography.button}` | 14.5px | 600 | 1.20 | 0 | All button labels |
| `{typography.mono}` | 13px | 400 | 1.50 | 0 | Passport IDs, batch/jurisdiction codes |

### Principles
- One display size per page: `{typography.hero-display}` appears exactly once (the hero `<h1>`). Every other section headline is `{typography.display-lg}` or `{typography.heading-1}` — the current file lets nearly every section run its own arbitrary display size, which flattens the hierarchy the scale is supposed to create.
- Negative tracking only above 24px; body text carries 0 tracking — Be Vietnam Pro's body weights get muddy with negative tracking below display size.
- `{typography.micro-uppercase}` is the *only* place uppercase + letter-spacing is allowed. Don't uppercase button labels or nav items.

## Layout

### Spacing System
- Base unit 4px, primary increment 8px.
- Section vertical rhythm: `{spacing.section}` (96px) standard, `{spacing.section-lg}` (128px) for the three anchor moments (Why, Compliance, Pilot). The current file's `py-28 sm:py-36` / `py-24 sm:py-32` mix collapses to these two values.
- Hero band: `{spacing.hero}` (140px) top padding.

### Grid & Container
- Max content width 1240px (matches current `max-w-[1240px]`), 1320px for the wider Industries/Compliance bands.
- Feature/metric grids: 3-up desktop → 2-up tablet → 1-up mobile.
- Industry cards: horizontal scroll-snap track (keep the existing GSAP-pinned interaction — it's a genuine differentiator, not decoration).
- Compliance table: full-width single column, one row per regulation.

### Whitespace Philosophy
Light sections breathe at `{spacing.section}`–`{spacing.section-lg}`. The two dark sections (Pilot, Footer) compress slightly tighter to feel like a deliberate full-stop, not another scroll band.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; `{colors.hairline}` 1px border | Default cards, compliance rows, nav |
| 1 (subtle) | `rgba(11,19,16,0.04) 0px 1px 2px 0px` | Hover-lifted cards |
| 2 (card) | `rgba(11,19,16,0.08) 0px 8px 24px -8px` | Feature cards, industry cards on hover |
| 3 (hero) | `rgba(11,19,16,0.14) 0px 24px 60px -20px` | Passport preview card, globe hero panel |
| 4 (modal) | `rgba(11,19,16,0.20) 0px 32px 80px -16px` | Modals, mobile menu overlay |

**Rule:** at most one Level-3 element per viewport. The current site stacks 4–5 differently-colored glow/shadow combos per section (`shadow-[0_20px_60px_-15px_rgba(16,195,90,0.4)]`, `shadow-[0_0_20px_rgba(22,193,95,0.15)]`, etc.) — collapse all of it to this five-level scale.

### Decorative Depth
- The interactive **globe** (`CobeGlobe` / `Globe`) is the system's one atmospheric element — keep it in the Hero and the Pilot band, nowhere else.
- No radial-gradient "orb" blobs, no floating-particle animation, no animated topographic wave lines. Delete `nature-orb-*`, `particle-*`, `nature-wave`, `nature-shimmer` from `styles.css` once the hero is rebuilt.
- The faint `NetworkCanvas` particle-graph (already in `WhyTierraTrace`) may stay as the one "data network" motif — it's thematically justified (supply-chain graph) and already restrained (`opacity-[0.03]`–`0.15`).

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Mono code chips |
| `{rounded.sm}` | 6px | Status badges (square variant), small tags |
| `{rounded.md}` | 8px | Inputs, ghost buttons |
| `{rounded.lg}` | 12px | Default cards, lifecycle steps, roadmap steps |
| `{rounded.xl}` | 16px | Feature cards, dark cards |
| `{rounded.xxl}` | 24px | Metric band, form card, featured panels |
| `{rounded.xxxl}` | 28px | Industry cards |
| `{rounded.hero}` | 32px | Pilot CTA band (the site's single largest panel) |
| `{rounded.full}` | 9999px | All buttons, all status badges, nav pill |

### Don't
- Don't invent a new radius outside this scale — the current file has one-off values (`rounded-[20px]`, `rounded-[28px]`, `rounded-[32px]`) scattered without a system; every one of them now maps to a named token above.

## Components

### Buttons

**`button-primary`** — The single primary action per viewport.
- Background `{colors.primary}`, text `{colors.on-primary}` (dark ink, not white), type `{typography.button}`, padding `14px 28px`, rounded `{rounded.full}`.
- Hover → `button-primary` background shifts to `{colors.primary-deep}`. Pressed → `{colors.primary-pressed}`.
- Used for: hero "Request Pilot", Pilot band "Apply for pilot", Contact "Request a briefing". Nowhere else.

**`button-secondary`** — Every other CTA that isn't the page's single primary action.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, rounded `{rounded.full}`, padding `14px 28px`.
- Replaces the current inconsistent black-pill CTAs ("Explore Industries", "Talk to integrations", "See platform") — those become `button-secondary`, freeing green exclusively for the one true primary action.

**`button-secondary-on-dark`** — Secondary CTA on `canvas-dark` surfaces.
- Background transparent, text `{colors.on-dark}`, border `1px solid {colors.hairline-dark-strong}`, rounded `{rounded.full}`, padding `14px 28px`.

**`button-ghost`** — Quiet nav/inline actions ("Contact sales" in the nav bar).
- Background transparent, text `{colors.ink}`, rounded `{rounded.full}`, padding `10px 18px`.

**`button-link`** — Inline text link.
- Background transparent, text `{colors.primary-pressed}`, type `{typography.body-medium}`, no padding.

### Cards

**`card-base`** — Generic content card.
- Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`. Elevation level 0; level 2 on hover.

**`card-feature`** — The three `WhyTierraTrace` cards (Verifiable Trust / Radical Transparency / Built for Circularity).
- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`. One icon (`{colors.primary}` on `{colors.primary-soft}` chip), `{typography.heading-4}` title, `{typography.body-sm}` description.

**`card-feature-dark`** — Reserved for one deliberate dark accent card if a section needs contrast (e.g. a "why blockchain" callout).
- Background `{colors.canvas-dark-2}`, text `{colors.on-dark}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-dark}`.

### Metrics

**`metric-band`** — The dark stat strip in `WhyTierraTrace` (42Bn products tracked, 180+ countries, etc.).
- Background `{colors.canvas-dark}`, text `{colors.on-dark}`, rounded `{rounded.xxl}`, padding `{spacing.xl}`.

**`metric-item`** — Individual stat.
- Value in `{typography.heading-1}` `{colors.on-dark}`; label in `{typography.body-sm}` `{colors.on-dark-muted}`; icon chip `{colors.primary}` on 10%-opacity primary fill.

### Traceability / Lifecycle

**`lifecycle-step`** / **`lifecycle-step-active`** — The 7-stage lifecycle path (Raw material → Recycle).
- Default: `{colors.canvas}` background, `{rounded.lg}`, `1px solid {colors.hairline}` border.
- Active/hovered: border becomes `1px solid {colors.primary}` — no scale-jump or colored glow shadow (the current `hover:scale-[1.4]` + green glow shadow is too theatrical for an enterprise flow diagram; a border-color change plus a small lift is enough).

### Industries

**`industry-card`** — The scroll-snap industry showcase.
- Background `{colors.canvas}`, rounded `{rounded.xxxl}`, `1px solid {colors.hairline}` border, elevation level 0 → level 2 on hover (no color-shift shadow).
- Structure unchanged from current build: image top, title (`{typography.heading-4}`), description (`{typography.body-sm}`), feature checklist (`{colors.primary}` check chips), "Learn more" link.

### Compliance (new — the platform's central trust artifact)

**`compliance-row`** — One row per regulation, replacing the current plain-list treatment.
- Background `{colors.canvas}`, padding `{spacing.md} {spacing.lg}`, bottom border `1px solid {colors.hairline}`.
- Layout: regulation name (`{typography.heading-5}`) + jurisdiction (`{typography.body-sm}` `{colors.ink-muted}`) on the left, `status-badge-*` on the right.

**`status-badge-ready`** / **`status-badge-review`** / **`status-badge-planned`** — Pill status indicator.
- `{typography.caption}`, `{rounded.full}`, padding `3px 10px`. Ready uses `{colors.status-ready-bg}`/`{colors.status-ready-text}` — the only place outside `button-primary` that green appears as a fill.

**`capability-row`** — The four platform-capability rows (Enterprise Data Integration, Trust & Verification Engine, etc.) sitting below the compliance table.
- Background `{colors.surface}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. Icon chip `{colors.primary}` on `{colors.primary-soft}`, title `{typography.heading-5}`, description `{typography.body-sm}`.

### Digital Product Passport

**`passport-card`** — The passport preview (product summary, chain-of-custody, QR).
- Background `{colors.canvas}`, rounded `{rounded.xxl}`, padding `{spacing.lg}`, border `1px solid {colors.hairline}`. Elevation level 3 — this is the one hero-weight artifact on the page besides the globe.

**`code-mono-chip`** — Passport ID / batch code display (`TT-92·AC-1174`).
- `{typography.mono}`, `{colors.surface}` background, `{colors.ink-muted}` text, `{rounded.sm}`, `1px solid {colors.hairline}` border, padding `2px 8px`.

### Pilot Program

**`roadmap-step`** — The four-step pilot roadmap (Discover / Design / Deploy / Scale) on the dark Pilot band.
- Background `{colors.canvas-dark-2}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.md} {spacing.lg}`, border `1px solid {colors.hairline-dark}`. Active/expanded state: border becomes `1px solid {colors.primary}` — no colored glow shadow.

### Forms

**`form-card`** — Contact form container.
- Background `{colors.canvas}`, rounded `{rounded.xxl}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline}`.

**`text-input`** / **`text-input-focused`** / **`select-input`** — Form fields.
- Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`, height 48px, border `1px solid {colors.hairline-strong}`.
- Focused: border becomes `2px solid {colors.primary-pressed}`.

### Navigation

**`top-nav`** — Floating pill nav bar.
- Background `{colors.canvas}`, rounded `{rounded.full}`, height 64px, border `1px solid {colors.hairline}`. Keep the floating/inset treatment — it's a good signature — but drop the green-tinted glow shadow (`shadow-[...rgba(16,195,90,0.15)]`) in favor of flat `1px` border + elevation level 1.

**`mega-menu-item`** — Services dropdown item (Passport / Trace / Carbon / Verify / Insights / Connect).
- Background transparent, text `{colors.ink}`, `{typography.body-medium}`, rounded `{rounded.md}`, padding `{spacing.sm} {spacing.md}`. Icon in `{colors.primary}`.

### Footer

**`footer-region`** — Full-width dark footer.
- Background `{colors.canvas-dark}` (same token as Pilot — no separate gradient), text `{colors.on-dark}`, `{typography.body-sm}`, padding `{spacing.section} {spacing.xxl}`.

**`footer-link`** — Individual link.
- Background transparent, text `{colors.on-dark-muted}`, `{typography.body-sm}`, padding `{spacing.xxs} 0`.

**`logo-marquee-item`** — "Trusted by" logo strip wordmark.
- Text `{colors.ink-subtle}`, `{typography.heading-4}` weight, no card/border — plain text at reduced opacity, consistent with the current treatment.

## Do's and Don'ts

### Do
- Use `{colors.primary}` for exactly one CTA per viewport, plus "Ready" status badges and link emphasis — nowhere else.
- Use dark ink text (`{colors.on-primary}`) on every bright-green fill, never white.
- Use `{colors.canvas-dark}` for every dark section — Pilot, Footer, any future dark card. One dark color for the whole site.
- Keep the globe and the GSAP-pinned industry scroll — they're real product metaphors, not decoration.
- Route every regulation callout through the `compliance-row` + `status-badge-*` pattern.
- Snap every new size to a token in this file before shipping an arbitrary Tailwind bracket value.

### Don't
- Don't use white text on the primary green button.
- Don't introduce a second dark color (no more `bg-ink` + separate green-gradient footer).
- Don't use more than one `elevation: 3` (hero-weight shadow) element per viewport.
- Don't bring back radial-gradient orbs, floating particles, or the animated topographic wave — they read as generic AI-startup decoration and undercut the compliance pitch.
- Don't uppercase anything except `{typography.micro-uppercase}` eyebrows.
- Don't let more than one CTA per section claim the primary-green treatment.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 480px | Single column. Hero 32px (down from 60px). Nav collapses to sheet menu. |
| Mobile-Lg | 480–767px | Feature/metric grids 2-up. Hero 40px. |
| Tablet | 768–1023px | Feature grids 2-up → 3-up transition. Hero 48px. Industry cards 2-visible. |
| Desktop | 1024–1279px | Full 3-up feature grids. Hero 56px. Industry scroll-pin active. |
| Wide | ≥ 1280px | Full 60px hero presentation. 1240–1320px containers. |

### Touch Targets
- Pill buttons render at 44–48px effective height (bumped from the current 40px `py-3` on mobile — compliance-buyer personas skew toward keyboard/mouse but the marketing site still needs AA touch targets).
- Form inputs: 48px height across all breakpoints.
- Nav mega-menu items: 44px minimum tap height on mobile sheet.

### Collapsing Strategy
- **Top nav**: below 1024px, mega-menu collapses to a full-screen sheet (current behavior kept, background swaps to `{colors.canvas}` flat sheet, drop the shadow-heavy floating card treatment on mobile).
- **Industry cards**: horizontal scroll-snap on all breakpoints; GSAP scroll-pin only active ≥1024px (already implemented this way — keep it).
- **Compliance table**: rows stay full-width single-column at every breakpoint — never collapses to cards.
- **Metric band**: 2-up → 4-up at desktop, `lg:divide-x` hairline dividers only ≥1024px.
- **Footer**: 4-column → 2-column tablet → single-column accordion-free stack on mobile (no accordion needed at this column count).

## Iteration Guide

1. Rebuild one section at a time, starting with Hero (drop the gradient-blob background first — it's the highest-leverage fix).
2. Every new component variant gets a named entry under `components:` in this file before it ships in code — no more one-off arbitrary Tailwind values.
3. Default body copy to `{typography.body}`; only the hero `<h1>` gets `{typography.hero-display}`.
4. Enforce the one-primary-CTA-per-viewport rule explicitly in review — it's the single highest-impact hierarchy fix in this system.
5. Delete `nature-orb-*`, `particle-*`, `nature-wave`, `nature-shimmer` keyframes from `styles.css` once no section references them.
6. Keep `CobeGlobe` / `Globe` and the GSAP industry-scroll pin — verified differentiators, not defaults to strip.

## Known Gaps

- No dark-mode toggle exists on the current site (it's light-mode-only marketing); this system doesn't define a full alternate dark theme, only the two dark *sections* (Pilot, Footer) that already exist.
- Animation/transition timings are not formalized here; recommend 150–200ms ease-out for hover/focus, and keep the existing Framer Motion `[0.22, 1, 0.36, 1]` reveal easing — it's already well-chosen.
- Exact chart/analytics color ramp (for a future carbon-metrics or dashboard preview section) is not specified; extend from `{colors.primary}` plus neutral greys only — do not introduce a rainbow category palette.
- Accessibility contrast for `{colors.on-primary}` on `{colors.primary}` should be verified against WCAG AA (4.5:1 for body text, 3:1 for large/bold text) once implemented — dark ink (`#052015`) on `#10C35A` is expected to pass comfortably but has not been measured with a contrast tool as part of this document.
