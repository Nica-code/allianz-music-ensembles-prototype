# Allianz Music Ensembles Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive, one-page Allianz Music Ensembles prototype that faithfully implements the approved Nocturne in Gold design using only source assets and content from the current public site.

**Architecture:** A Vite-built React and TypeScript static application renders typed content through focused page-section components. CSS custom properties, container queries, media queries, and lightweight browser APIs provide the visual system and motion; interactive components remain local and require no backend.

**Tech Stack:** React 19, TypeScript, Vite, CSS, Vitest, Testing Library, and Playwright for browser checks.

**Spec:** `docs/superpowers/specs/2026-09-20-allianz-redesign-design.md`

## Global Constraints

- Reuse only the current public site's logo, photographs, copy, testimonials, awards, SoundCloud content, social links, consultation form, and music-list link.
- Do not add generated, stock, or fabricated photography, people, venues, awards, reviews, credentials, or pricing.
- Preserve the meaning of current copy; grammar and naming may be corrected.
- Keep `Music for Your Special Occasion` as the tagline.
- The page must be fully static and deployable to Netlify, Cloudflare Pages, or GitHub Pages.
- The desktop target is the approved revised Nocturne in Gold image with the decorative hero numbers removed.
- The mobile experience is a first-class responsive composition with no horizontal overflow at 320 CSS pixels.
- Every control must work and expose keyboard-visible focus; motion must respect `prefers-reduced-motion`.

## Review Focus

- Broken or unavailable third-party embeds must leave a usable SoundCloud link rather than an empty region.
- Long FAQ answers must expand without layout overflow and remain keyboard reachable.
- Hash navigation must account for the sticky header and update focus without trapping keyboard users.
- Source imagery must preserve faces and instruments across narrow and wide crops.
- External actions must retain the exact current destinations and clearly open a new context when appropriate.

---

### Task 1: Static Foundation, Source Assets, and Typed Content

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/vite-env.d.ts`
- Create: `src/data/siteContent.ts`
- Create: `src/data/siteContent.test.ts`
- Create: `public/assets/asset-manifest.md`
- Create: `public/assets/allianz-logo.webp`
- Create: `public/assets/allianz-ensemble.webp`
- Create: `public/assets/weddingwire-award.webp`
- Create: `public/assets/review-the-knot.webp`
- Create: `public/assets/review-weddingwire.webp`

**Interfaces:**
- Produces: `siteContent`, `ensembleCategories`, `soundCloudTracks`, `faqGroups`, `testimonials`, and `externalLinks` typed exports.
- Produces: source-faithful public assets consumed by later section components.

- [ ] **Step 1: Write the failing content-integrity test**

```ts
import { describe, expect, it } from 'vitest'
import { ensembleCategories, externalLinks, faqGroups, testimonials } from './siteContent'

describe('source content', () => {
  it('represents every agreed ensemble and current external action', () => {
    expect(ensembleCategories.map(({ id }) => id)).toEqual([
      'solo', 'duo', 'trio', 'quartet', 'brass-quintet', 'mixed',
    ])
    expect(externalLinks.quote).toBe('https://forms.gle/LbBmjp8uhE6gigvAA')
    expect(externalLinks.musicList).toContain('drive.google.com/file/d/1lVjwFTAEdUpZt1tluRu4ic8ugRGGvKD0')
    expect(faqGroups.length).toBeGreaterThanOrEqual(4)
    expect(testimonials).toHaveLength(5)
  })
})
```

- [ ] **Step 2: Run the test and verify the missing module failure**

Run: `npm test -- --run src/data/siteContent.test.ts`

Expected: FAIL because `src/data/siteContent.ts` does not exist.

- [ ] **Step 3: Create the Vite application configuration**

Use scripts `dev: vite`, `build: tsc -b && vite build`, `test: vitest`, and `preview: vite preview`. Configure `base: './'` so the built site works from a repository subpath and set `server.allowedHosts` to include `terminal.local`.

- [ ] **Step 4: Download and record the real source assets**

Download the original public-site image URLs into `public/assets/`, inspect each file, and record source URL, local filename, dimensions, and role in `asset-manifest.md`. The first known sources are:

```text
https://www.allianzmusicensembles.com/_assets/87161E94-446F-4E39-953B-6E014AAB5574?auto=compress,format&q=60&fit=crop&w=1500
https://www.allianzmusicensembles.com/_assets/5D90916E-C0D8-4013-86BD-21CAFFDE5056?auto=compress,format&q=60&fit=crop&w=1500
https://www.allianzmusicensembles.com/_assets/f94cf46a-ecae-4471-953b-3d31bfd4ede3?auto=compress,format&q=65&fit=clip&w=200
```

Use the page asset inventory to resolve the three current review graphics. Do not create replacements when a source file is unavailable.

- [ ] **Step 5: Create typed source content**

Define explicit interfaces for navigation items, ensemble categories, SoundCloud tracks, testimonials, FAQ items, and external links. Include the current contact targets, all five testimonial attributions and dates, ensemble descriptions, four-step booking flow, and grouped FAQ content from the public site. Store this exact link map:

```ts
export const externalLinks = {
  quote: 'https://forms.gle/LbBmjp8uhE6gigvAA',
  musicList: 'https://drive.google.com/file/d/1lVjwFTAEdUpZt1tluRu4ic8ugRGGvKD0/view?usp=drivesdk',
  email: 'mailto:ian@allianzmusicensembles.com',
  phone: 'tel:+13045503078',
  sms: 'sms:+13045503078',
  instagram: 'https://www.instagram.com/allianzmusicensembles',
  youtube: 'https://www.youtube.com/channel/UCtjE1zkH7J1KNhq3d4CEHuQ',
  facebook: 'https://m.facebook.com/AllianzMusicEnsembles/',
  theKnotReview: 'https://www.theknot.com/review-wedding-vendors/2037426',
  weddingWire: 'https://www.weddingwire.com/biz/allianz-music-ensembles/c64da8c30a3edadc.html',
  weddingWireReview: 'https://www.weddingwire.com/shared/rate/new?vid=c64da8c30a3edadc',
} as const
```

- [ ] **Step 6: Run the content test**

Run: `npm test -- --run src/data/siteContent.test.ts`

Expected: PASS.

- [ ] **Step 7: Commit the foundation**

```bash
git add package.json vite.config.ts tsconfig*.json index.html src public/assets
git commit -m "feat: establish Allianz prototype content"
```

### Task 2: Design System, Header, and Hero

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Create: `src/styles/motion.css`
- Create: `src/components/ArtDecoFrame.tsx`
- Create: `src/components/Header.tsx`
- Create: `src/components/Header.test.tsx`
- Create: `src/sections/Hero.tsx`
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

**Interfaces:**
- Consumes: navigation and external links from `src/data/siteContent.ts`.
- Produces: shared `.section-shell`, `.eyebrow`, `.display`, `.button`, `.button--outline`, and motion utilities.

- [ ] **Step 1: Write failing navigation behavior tests**

```tsx
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('opens the mobile menu and exposes section links', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: /open navigation/i }))
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeVisible()
    expect(screen.getByRole('link', { name: /ensembles/i })).toHaveAttribute('href', '#ensembles')
  })
})
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npm test -- --run src/components/Header.test.tsx`

Expected: FAIL because `Header` does not exist.

- [ ] **Step 3: Implement the visual tokens and global foundations**

Define `--ink: #111311`, `--charcoal: #1b1d1b`, `--cream: #f4efe4`, `--paper: #fbf7ee`, `--gold: #c9a451`, `--gold-soft: #e0c87a`, fluid display sizes, consistent section gaps, focus rings, and a maximum content width near 1360 pixels. Import a free high-contrast serif and clean sans serif through CSS with robust system fallbacks.

- [ ] **Step 4: Build the responsive header**

Use a semantic header, real image logo, desktop anchor links, working `Get a Quote` link, and a button-controlled mobile overlay. Close the menu on link activation and Escape; lock document scroll only while the menu is open.

- [ ] **Step 5: Build the approved hero**

Recreate the revised target: two-column cinematic composition, exact source ensemble photo, `Highest Quality Music`, existing tagline, equal audience copy, quote and ensemble actions, restrained Art Deco rules, and a genuine scroll link. Do not include the removed numbers or substitute pagination marks.

- [ ] **Step 6: Add progressive motion**

Use Intersection Observer to add reveal classes only after mount. Under `prefers-reduced-motion: reduce`, disable transforms, transitions, smooth scrolling, and animated masks while leaving all content visible.

- [ ] **Step 7: Run tests and build**

Run: `npm test -- --run src/components/Header.test.tsx && npm run build`

Expected: PASS and a successful Vite production bundle.

- [ ] **Step 8: Commit header and hero**

```bash
git add src
git commit -m "feat: build Nocturne hero and navigation"
```

### Task 3: About, Ensembles, Occasions, and Booking Journey

**Files:**
- Create: `src/sections/About.tsx`
- Create: `src/sections/Ensembles.tsx`
- Create: `src/sections/Occasions.tsx`
- Create: `src/sections/Process.tsx`
- Create: `src/sections/Sections.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: `ensembleCategories`, `aboutCopy`, and `bookingSteps` from `src/data/siteContent.ts`.
- Produces: anchors `#about`, `#ensembles`, and `#process` used by navigation.

- [ ] **Step 1: Write the failing section-content test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('core marketing sections', () => {
  it('gives all event categories and ensembles equal access', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /weddings/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: /private celebrations/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: /corporate events/i })).toBeVisible()
    expect(screen.getByText(/string quartet/i)).toBeVisible()
    expect(screen.getByText(/brass quintet/i)).toBeVisible()
  })
})
```

- [ ] **Step 2: Run the test and verify the missing sections**

Run: `npm test -- --run src/sections/Sections.test.tsx`

Expected: FAIL because the section content is absent.

- [ ] **Step 3: Implement the About section**

Use the approved cream editorial layout with `Vetted Professional Musicians` and `A Personal Touch`, preserving the musician-run, auditioned-team, administrative-service, and Charleston statements.

- [ ] **Step 4: Implement ensemble and occasion sections**

Present ensemble formats through a typographic list with hover and focus detail panels, not a generic card grid. Present Weddings, Private Celebrations, and Corporate Events as equal columns on desktop and equal stacked regions on mobile, using no invented event photography.

- [ ] **Step 5: Implement the four-step booking journey**

Build an accessible ordered list for reserving the date, selecting music, meeting the coordinator, and enjoying the event. Use Art Deco connectors and scroll reveals that collapse into a simple vertical sequence on mobile.

- [ ] **Step 6: Run tests and build**

Run: `npm test -- --run src/sections/Sections.test.tsx && npm run build`

Expected: PASS with no TypeScript or build errors.

- [ ] **Step 7: Commit the content sections**

```bash
git add src
git commit -m "feat: add ensembles occasions and booking journey"
```

### Task 4: Audio Lab, Testimonials, FAQ, and Contact

**Files:**
- Create: `src/sections/AudioLab.tsx`
- Create: `src/sections/AudioLab.test.tsx`
- Create: `src/sections/Testimonials.tsx`
- Create: `src/sections/Faq.tsx`
- Create: `src/sections/Faq.test.tsx`
- Create: `src/sections/Contact.tsx`
- Create: `src/components/Icon.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: `soundCloudTracks`, `testimonials`, `faqGroups`, and `externalLinks`.
- Produces: working anchors `#listen`, `#faq`, and `#contact`.

- [ ] **Step 1: Write failing Audio Lab and FAQ interaction tests**

```tsx
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AudioLab } from './AudioLab'
import { Faq } from './Faq'

describe('interactive content', () => {
  it('changes the visible SoundCloud selection by ensemble', () => {
    render(<AudioLab />)
    fireEvent.click(screen.getByRole('tab', { name: /trio/i }))
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/air on the g string/i)
  })

  it('exposes FAQ answer state to assistive technology', () => {
    render(<Faq />)
    const question = screen.getByRole('button', { name: /how does it work/i })
    expect(question).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
  })
})
```

- [ ] **Step 2: Run the tests and verify the missing-component failures**

Run: `npm test -- --run src/sections/AudioLab.test.tsx src/sections/Faq.test.tsx`

Expected: FAIL because `AudioLab` and `Faq` do not exist.

- [ ] **Step 3: Implement Audio Lab tabs and real embeds**

Render keyboard-operable tabs for available source categories and load one real SoundCloud iframe at a time. Include explicit track title, ensemble label, external SoundCloud action, and music-list link. If an iframe fails or is blocked, the title and external link remain usable.

- [ ] **Step 4: Implement testimonials without fake carousel behavior**

Use an editorial quote rail with real previous/next buttons, status text, touch-safe controls, and all five original attributions and dates. With JavaScript disabled, quotes remain a readable list.

- [ ] **Step 5: Implement grouped FAQ accordions**

Use native button semantics with `aria-expanded`, stable panel IDs, one independent state per item, and full answers that preserve policies and meaning. Ensure long answers wrap and do not animate height for reduced-motion users.

- [ ] **Step 6: Implement contact and footer actions**

Provide the real quote form, email, phone, SMS, Instagram, YouTube, Facebook, music list, The Knot review, and WeddingWire links. Use a reputable icon package and visible text labels; do not draw icons with CSS or SVG markup.

- [ ] **Step 7: Run interaction tests and build**

Run: `npm test -- --run src/sections/AudioLab.test.tsx src/sections/Faq.test.tsx && npm run build`

Expected: PASS and a successful static build.

- [ ] **Step 8: Commit the interactive sections**

```bash
git add src
git commit -m "feat: add listening FAQ testimonials and contact"
```

### Task 5: Browser Verification, Design QA, and Publishing Documentation

**Files:**
- Create: `tests/site.spec.ts`
- Create: `playwright.config.ts`
- Create: `README.md`
- Create: `netlify.toml`
- Create: `public/_headers`
- Create: `design-qa.md`
- Modify: `package.json`
- Modify: `.gitignore`

**Interfaces:**
- Consumes: the complete static application.
- Produces: verified `dist/`, deployment instructions, and a passing design-QA record.

- [ ] **Step 1: Write the browser acceptance test**

```ts
import { expect, test } from '@playwright/test'

test('primary inquiry and exploration journey works', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Highest Quality Music' })).toBeVisible()
  await page.getByRole('link', { name: 'Explore the Ensembles' }).click()
  await expect(page.locator('#ensembles')).toBeInViewport()
  await expect(page.getByRole('link', { name: 'Get a Quote' }).first()).toHaveAttribute(
    'href',
    'https://forms.gle/LbBmjp8uhE6gigvAA',
  )
  await expect(page.locator('body')).not.toHaveCSS('overflow-x', 'scroll')
})
```

- [ ] **Step 2: Run all automated checks**

Run: `npm test -- --run && npm run build && npm run test:e2e`

Expected: all unit tests, TypeScript checks, production build, and browser tests pass.

- [ ] **Step 3: Inspect desktop and mobile renderings**

Run the local Vite server, capture 1440-pixel desktop and 390-pixel mobile views, and inspect every section. Verify the mobile menu, sticky navigation, tabs, SoundCloud fallback, testimonial controls, accordions, focus states, quote link, and external contact links.

- [ ] **Step 4: Complete blocking design QA**

Compare the revised Nocturne in Gold reference and the desktop prototype at the same viewport. Record findings in `design-qa.md`, fix every P0, P1, and P2 item, recapture, and repeat until the file ends with:

```text
final result: passed
```

- [ ] **Step 5: Document GitHub and free-host deployment**

The README must include local commands, asset-source notes, how to create and push a GitHub repository, Netlify settings (`npm run build`, `dist`), Cloudflare Pages settings (`npm run build`, `dist`), and GitHub Pages notes. Do not include credentials or assume a repository owner.

- [ ] **Step 6: Commit verified delivery files**

```bash
git add .
git commit -m "docs: verify and document Allianz prototype"
```

- [ ] **Step 7: Final repository check**

Run: `git status --short && git log --oneline --decorate -5`

Expected: clean working tree and a readable sequence of implementation commits.
