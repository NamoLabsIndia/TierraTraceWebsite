# TierraTrace Website — Frontend PRDs

Four PRDs, one per developer, matching the task tracker (TASK-1 → TASK-4). Each is self-contained — read your own, you don't need the others to start.

| File | Task | Owner |
|---|---|---|
| [`TASK-1-platform-section.md`](./TASK-1-platform-section.md) | Platform Section — index, links to 9 per-page PRDs | Ayush |
| [`TASK-2-industries-section.md`](./TASK-2-industries-section.md) | Industries Section | Jebaz |
| [`TASK-3-compliance-section.md`](./TASK-3-compliance-section.md) | Compliance Section | Rishabh |
| [`TASK-4-resources-section.md`](./TASK-4-resources-section.md) | Resources Section | Sansitha |

## What's in scope, project-wide

Frontend build only. No SEO, no metadata strategy, no structured data — that's handled separately. Visual design, layout and component styling are each developer's own call; these documents describe **what** each page needs to cover, not **how it should look**.

## Before anyone starts: one shared thing to agree on

None of the four tasks own the site's shared shell — the navigation bar and footer that every page sits inside. Today they're defined inline on the single homepage (`src/routes/index.tsx`). The moment a second route exists, that needs to live somewhere all routes inherit it from (TanStack Router's `src/routes/__root.tsx` is the natural place), or four people end up building against four slightly different shells.

This doesn't need its own owner — whoever's PR lands first should just move the existing `Nav`/`Footer` into the root layout as part of that PR, and say so in the PR description so the others know it's there. Ten minutes of coordination, not a fifth task.

## Technical baseline (applies to all four)

- **Stack:** TanStack Start (React 19, Vite, Nitro), Tailwind. File-based routing: a file under `src/routes/` becomes its URL.
- **Server rendering is mandatory.** In July the homepage briefly shipped an empty page on every request because a library touched `window` at module load time and crashed the server render. Any library touching `window`, `document`, `navigator`, or WebGL at module scope must be loaded via dynamic `import()` inside `useEffect`, never imported statically into a route.
- **Source of truth for product content:** the six portal PRDs in `TierraTrace/docs/prd/` (`web-auth.md`, `web-core.md`, `web-connect.md`, `web-verify.md`, `web-carbon.md`, `web-trust.md`). Each task PRD below pulls the relevant parts out for you, but the full specs are there if you want more detail on any capability.
- **Content accuracy — read this even though it's not "SEO":** don't name real third-party companies as customers/partners without a real, permissioned relationship (trademark/false-endorsement risk), and don't state a security certification (SOC 2, ISO 27001) as *held* unless it actually is — "designed to SOC 2 Type II control objectives" is the accurate phrasing until it's certified. This already tripped the site up once (the current homepage's "trusted by" strip and metrics band); don't reintroduce the same problem on a new page.
