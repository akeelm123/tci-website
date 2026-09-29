# ANLAQ website design system

## Approved direction

ANLAQ Concept 1, Modern & Refined, from the user's implementation brief. Executive, understated and editorial, with generous whitespace. The approved identity takes precedence over generic design-skill concept selection. The previous design record is retained in `audit/anlaq-2026-09-29/DESIGN-before-rebrand.md`.

## Tokens

Shared styles live in `assets/css/styles.css`.

- Deep Navy `#0F2744`: principal text and dark surfaces.
- Champagne Gold `#D4AF37`: restrained rules, indexing and accents on dark surfaces.
- Warm Ivory `#FBF8F3`: primary reading surface.
- Slate Grey `#6B7280`: secondary design token; smaller body copy uses darker `#4E5C6A`.
- TCI Blue `#2E6BAA`: framework accents and interactive states.
- Accessible gold-brown `#75601E`: links on light surfaces.

Use `--font-display` (Baskerville/Iowan/Georgia) and `--font-body` (Avenir Next/Segoe UI/Arial). These preserve the existing high-quality system font stacks and add no font network requests.

## Composition

The homepage starts with the approved brand line and independent-advice proposition, followed immediately by Transformation Confidence Index™ by ANLAQ and its seven dimensions. Founder experience supplies context; the four-package comparison supports service selection. Services retains the existing detailed disclosures below its comparison. About retains the approved career evidence and includes the restrained name story.

## Assets

Faithful raster preview derivatives are in `assets/images/anlaq/`. The supplied artwork, primary wordmark, reversed and monochrome variants, Q icons and social artwork are retained. These are explicitly not vector assets. The original Akeel Advisory assets and old favicon remain available for rollback. The old site domain is intentionally unchanged.

## Responsive and accessible behaviour

At 900px and below, the four-column comparison becomes four readable package sections. Navigation uses its existing focus trap, Escape dismissal and inert background. Desktop editorial grids stack on narrow screens. Gold text is restricted to dark surfaces. Existing reduced-motion support remains in place. Avoid decorative animation, new runtime dependencies and oversized hero images.

## Validation

Run `node scripts/check.mjs` and `node scripts/build.mjs`. Browser evidence and the review record are under `audit/anlaq-2026-09-29/`. Automated accessibility scans support review; they do not establish full WCAG conformance or field Core Web Vitals.
