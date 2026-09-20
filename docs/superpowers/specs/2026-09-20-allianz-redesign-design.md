# Allianz Music Ensembles Redesign

## Purpose

Create a polished one-page prototype that surprises the owner of Allianz Music Ensembles with a credible new direction and can become the foundation of a production site. It must communicate the quality of the musicians immediately, serve weddings, private celebrations, and corporate events equally, and remain simple to publish as a static site on GitHub-backed hosting such as Netlify or Cloudflare Pages.

## Approved Visual Direction

The approved target is the revised third concept, **Nocturne in Gold**, with the decorative `01 / 02 / 03 / 04` hero markers removed. The site uses the existing Allianz logo and tagline, a charcoal and near-black foundation, warm cream sections, muted antique-gold accents, high-contrast editorial serif typography, and a precise sans serif. Fine Art Deco frames, stepped corners, rules, and spacing extend the logo's visual language throughout the page.

The presentation should feel like a luxury concert program: cinematic, lively, editorial, and contemporary. Movement comes from restrained scroll reveals, typographic transitions, hover responses, navigation states, and audio/repertoire interactions. Decorative elements must never resemble controls unless they are interactive.

## Source Integrity

- Reuse the current site's logo, musician photography, copy, testimonials, awards, social links, contact links, Google consultation form, music-list document, and SoundCloud content.
- Do not introduce generated, stock, or fabricated photography, people, venues, awards, reviews, or credentials.
- Preserve the meaning and substance of the current text. Reformat it and correct grammar, spelling, inconsistent naming, and stale phrasing where necessary.
- Keep the tagline `Music for Your Special Occasion`.
- Present pricing through consultation only.
- Preserve the current policies for deposits, cancellations, travel, weather, attire, overtime, custom arrangements, insurance, and payment, subject to later owner verification.
- Use an existing video only if the current site or its linked social channels expose a suitable performance video. The first prototype does not depend on video.

## Information Architecture

The prototype is a single page with anchor navigation rather than separate routes:

1. **Home / Hero** — logo, navigation, `Highest Quality Music`, equal mention of the three event categories, `Get a Quote`, `Explore the Ensembles`, and a scroll cue.
2. **About** — musician-run company, vetted professional musicians, Charleston base, and statewide West Virginia service.
3. **Ensembles** — solo, duo, trio, string quartet, brass quintet, mixed ensembles, and tailored combinations.
4. **Audio Lab / Repertoire** — ensemble tabs, existing SoundCloud embeds or external listening actions, and the existing downloadable music list.
5. **Occasions** — weddings, private celebrations, and corporate events with equal visual weight.
6. **How It Works** — reserve the date, select music, meet the music coordinator, and enjoy the event.
7. **Testimonials** — preserve current attribution and dates.
8. **FAQ** — accessible accordion groups that retain the meaning of the existing answers while reducing repetition.
9. **Contact** — `Get a Quote` opens the current Google consultation form; email, phone, SMS, Instagram, YouTube, Facebook, The Knot, and WeddingWire remain available.

## Core Interactions

- Sticky desktop navigation and a polished mobile menu scroll to page sections.
- Navigation exposes the current section and supports keyboard focus.
- `Get a Quote` opens the existing consultation form in a new tab.
- `Explore the Ensembles` scrolls to the ensemble section.
- Repertoire tabs switch between ensemble categories without navigation or reload.
- SoundCloud content uses the existing tracks and embeds where available; controls remain genuine SoundCloud controls or explicit external links.
- FAQ rows expand and collapse with correct button semantics, keyboard support, and ARIA state.
- Testimonials may use a touch-friendly carousel only if every control works; otherwise they use a responsive editorial list.
- Scroll reveals respect `prefers-reduced-motion` and never hide content when scripts are unavailable.
- Phone, SMS, email, social, review, and document links use their real current destinations.

## Responsive Behavior

The desktop composition follows the approved 1440-pixel concept closely. The mobile experience is a first-class layout, not a compressed desktop page: the hero becomes a clear vertical composition, headline sizes remain readable, the authentic ensemble image crops around faces and instruments, buttons become easy touch targets, tab lists can scroll horizontally, accordions remain comfortable to read, and contact actions remain obvious.

The site must work at narrow mobile widths, tablets, laptops, and large desktops without horizontal overflow. Images use responsive sizing and deliberate focal positioning. Typography scales fluidly within tested limits.

## Technical Architecture

Use a static Vite and React site with TypeScript. React provides maintainable interactive sections while the generated output remains static files suitable for Netlify, Cloudflare Pages, or GitHub Pages. No database, authentication, server functions, payment flow, or custom form backend is needed.

Content and external links live in typed local data modules so the owner's later corrections do not require restructuring components. The page is divided into focused section components with shared layout primitives and a small token-based CSS system. Animation uses CSS and lightweight browser APIs; no heavy animation framework is required.

The first implementation includes semantic HTML, keyboard behavior, visible focus states, reduced-motion handling, descriptive alternative text, sufficient contrast, responsive images, and lazy loading below the fold.

## Asset Acquisition

Download source assets only from the current public Allianz website and its existing embeds or links. Preserve original files where possible. Record every local asset's source URL in a short asset manifest. The logo must use the best available original file rather than a recreation extracted from the visual mockup.

## Validation

- Compare desktop and mobile browser captures to the approved revised visual target.
- Verify navigation, mobile menu, ensemble tabs, FAQ accordions, external links, and consultation flow.
- Confirm no fabricated visual assets or unsupported claims appear.
- Run the production build and ensure the output is a deployable static bundle.
- Test keyboard navigation, reduced motion, contrast, alt text, and layout at representative mobile, tablet, and desktop widths.
- Keep a `design-qa.md` report and resolve all material visual differences before handoff.

## GitHub and Hosting

Initialize the prototype as its own Git repository on the `main` branch. After the local design passes verification, connect it to a repository in the user's GitHub account. The user can publish it through Netlify or Cloudflare Pages by importing that GitHub repository and using the Vite build command and output directory documented in the project README.
