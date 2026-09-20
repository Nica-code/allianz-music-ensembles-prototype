# Design QA

## References

- Approved direction: `C:\Users\whizz\.codex\generated_images\01a0c0a7-2b2a-7652-ba29-b10a477ba5fd\exec-79e3b282-0130-40a4-aa80-c0b4857d93c1.png`
- Browser implementation: `http://localhost:4173/`
- Source logo and photography: `public/assets/allianz-logo.webp` and `public/assets/allianz-ensemble.webp`

## Comparison

The implementation carries the approved Nocturne in Gold direction through the entire one-page experience: near-black fields, warm ivory editorial sections, restrained gold rules, oversized serif display type, compact uppercase labels, split compositions, and generous spacing. The hero omits the unused `01–04` decoration and uses the organization’s existing portrait and logo.

The approved mock established the visual language rather than every page section. The implementation extends that language consistently into the ensemble selector, SoundCloud listening area, occasion cards, four-step consultation path, testimonial carousel, grouped FAQ, and contact footer.

## Responsive and interaction review

- Desktop: verified the complete page visually in the in-app browser at 1440px-class width.
- Mobile: verified at 390 × 844; navigation opens and closes, calls to action stack, imagery crops without overflow, and multi-column sections collapse cleanly.
- Interactions: verified ensemble selection, Duo/Trio audio tabs, track selection, testimonial controls, FAQ disclosure, Escape-to-close navigation, and anchor navigation.
- Accessibility: semantic landmarks, visible focus states, descriptive image text, `aria-expanded`, `aria-controls`, `aria-selected`, live regions, and reduced-motion handling are present.
- Content integrity: contact, social, review, quote, repertoire, and SoundCloud destinations use links found on the existing Allianz site. No invented photography was added.

## Result

Pass. No P0, P1, or P2 visual issues remain in the reviewed desktop and mobile layouts.
