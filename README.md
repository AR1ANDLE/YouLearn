# Learn / YouCode

A responsive, interactive browser prototype for a first-year learning roadmap. Open `index.html` directly or serve this folder with any static file server. No build step is needed.

## What works in this prototype

- Seven first-year phase titles from YouCode's public programme page, shown separately from five supplementary topic paths.
- Search, phase filters, journey/list layouts, and phase detail panel.
- Completion tracking, personal learning goals, and dark theme persisted in the current browser with `localStorage`.
- Responsive layout, keyboard-operable controls, visible focus/skip link, semantic sections, and reduced-motion handling.

Personal goals and completion state are browser-local. There is no account system, shared database, server-side authorization, curriculum administration, concept content management, or cross-device sync. The prototype should not be described as a production release.

## Source classification

The public [YouCode first-year programme page](https://youcode.ma/programme) lists these official phase titles: SAS immersion; design and wireframing; dynamic and adaptable user interfaces; application databases; web/mobile-web back end; CMS/e-commerce interfaces; CMS/e-commerce components. The public page does not give detailed learning outcomes, assignments, dates, or a named back-end framework. This prototype does not infer those as official facts. Skills listed under each phase are provisional learning suggestions. React, TypeScript, Laravel, Git, and other additional topics are not represented as mandatory YouCode modules.

## Design system

- **Palette:** warm paper `#f6f3eb`, ink `#20211e`, acid lime `#d5fb3f`, signal orange `#ff6743`, powder blue `#cbd9ff`.
- **Type:** Space Grotesk for interface/editorial text; DM Mono for labels and metadata; Georgia italic accent for editorial contrast.
- **Layout:** 12-column editorial composition on desktop, stacked single-column experience on narrow screens; 8px spacing rhythm.
- **Shape and depth:** 2px near-black outlines, square corners, offset 4–6px shadows.
- **Motion:** short hover/state transitions; no scroll-jacking; all nonessential motion is disabled under `prefers-reduced-motion`.
- **Theme:** light default with a browser-persisted dark theme toggle.

## Production architecture proposal

Use the official Laravel React Starter Kit with React, TypeScript, Inertia, Vite, and Laravel authentication. Public roadmap and concept routes should use Inertia SSR or an equivalent server-rendered route; add unique metadata, canonical links, sitemap generation, robots rules, and structured data only where content supports it. Personal pages require authentication and `noindex`.

Suggested normalized content model:

| Entity | Purpose |
| --- | --- |
| `learning_paths` | Official, supplementary, and custom path ownership/type |
| `phases`, `modules`, `concepts` | Ordered public curriculum and learning content |
| `concept_dependencies` | Directed prerequisite edges with cycle validation |
| `resources`, `exercises`, `assessments`, `projects` | Reusable instructional material attached to concepts |
| `user_progress`, `user_notes`, `learning_activities` | Per-student progress, notes, and activity |
| `custom_roadmaps`, `custom_concepts` | Student-owned extensions and ordering |
| `roles` / policies | Server-side administrator authorization |

Keep official content and student-owned content under separate ownership rules. Validate dependency changes transactionally and reject cycles. Expose editorial updates through authenticated admin routes and an audit log. Use database-backed progress; do not port localStorage as the production persistence layer.

## Research and resource audit (2026-11-07)

- **YouCode programme:** the official public page supports the seven phase labels above, but not detailed outcomes. Those details remain provisional pending a curriculum document or confirmation from YouCode.
- **Laravel React Starter Kit:** selected as the production foundation because Laravel currently documents its React starter kit as React + TypeScript + Inertia, with authentication scaffolding and SSR support. Its architecture avoids a separate API/backend app for the first release.
- **Anthropic skills repository:** inspected as a potential development aid. No skill was installed or copied; this project does not need a skill runtime dependency. Before adopting any skill, inspect its `SKILL.md`, scripts, maintenance, and applicable license in the exact revision.
- **UI/UX Pro Max:** its upstream repository advertises MIT licensing and a searchable design guideline catalog. Not installed: the project already has a small explicit design system and bringing in an unrelated agent skill is not needed for the application runtime.
- **React Bits:** offers many animated React components, but its current license includes a Commons Clause restriction. Not selected for this commercial-capable product without legal review; the interface uses CSS motion and native controls instead.
- **Motion, GSAP, Lenis, Aceternity, Magic UI, shadcn/ui, Lucide:** none are bundled in this no-build prototype. Add a library only after a specific need; avoid multiple motion systems and dependency weight.

## Next production milestones

1. Obtain YouCode's detailed curriculum and have an authorized curriculum owner verify phase/module mapping.
2. Scaffold the Laravel React starter kit and move all roadmap content to database seed/import records.
3. Implement public concept pages, authenticated progress/custom roadmap workflows, and admin policies/audit trail.
4. Add automated unit, feature, accessibility, and end-to-end coverage; verify keyboard and touch behavior on real viewports.
5. Configure production database, backups, monitoring, SSR, canonical/sitemap/robots handling, deployment, and security review.

These milestones are required before claiming the production acceptance criteria from the supplied brief are met.
