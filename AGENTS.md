# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Allianz Prototype Decisions

- Use the revised Nocturne in Gold concept as the visual source of truth.
- Remove the decorative `01 / 02 / 03 / 04` hero markers; do not replace them with faux controls.
- Preserve the current Allianz logo, photography, SoundCloud media, testimonials, content meaning, and external destinations. Do not introduce invented or stock imagery.
- Give weddings, private celebrations, and corporate events equal emphasis.
- Treat mobile responsiveness as a first-class design requirement.
- Keep the output static and compatible with GitHub-backed Netlify or Cloudflare Pages hosting.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
