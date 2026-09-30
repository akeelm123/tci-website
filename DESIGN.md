# ANLAQ website design system

## Approved direction

ANLAQ Concept 1, Modern & Refined, from the user's implementation brief. Executive, understated and editorial, with generous whitespace. The approved identity takes precedence over generic design-skill concept selection. The previous design record is retained in `audit/anlaq-2026-09-29/DESIGN-before-rebrand.md`.

## Tokens

Shared styles live in `assets/css/styles.css`.

- Deep Navy `#0F2744`: principal text and dark surfaces.
- Champagne `#C6A15B`: restrained rules, indexing and accents on dark surfaces.
- Warm Ivory `#FBF8F3`: primary reading surface.
- Slate `#66717D`: secondary text on ivory; Ink `#17202A` for body and small text on Mist.
- Mist `#E8EAEC`: subtle panels and rules.
- Midnight navy for accessible links on light surfaces; champagne is an accent and dark-surface highlight.

Use `--font-display` (Playfair Display) and `--font-body` (Inter). Two self-hosted Latin variable WOFF2 files cover the required weights, with font-display swap and preloads. The build versions fonts before CSS so both share the same immutable font URLs. OFL licences are included under `assets/fonts/`.

## Composition

The homepage starts with the approved brand line and independent-advice proposition, followed immediately by Transformation Confidence Index™ by ANLAQ and its seven dimensions. Founder experience supplies context; the four-package comparison supports service selection. Services retains the existing detailed disclosures below its comparison. About retains the approved career evidence and includes the restrained name story.

## Assets

The approved v1 production assets and brand rules are in `assets/brand/anlaq/`. All supplied SVGs are byte-identical to the user's originals. Use the primary SVG on light backgrounds, monochrome-light on the navy footer, and Q mark for app icons. Header and footer spacing protects at least one A cap-height around the logo. No filters, blend modes, recolouring, font substitution or redraws are applied to the supplied artwork. Raster social and fallback icon files are direct SVG renders. The previous assets remain in `assets/images/anlaq/`, including the v1 root favicon, for rollback. Existing canonical origins and production aliases remain unchanged.

The homepage uses the approved v2 hero copy, primary “Explore TCI™” and secondary “Explore our services” links. The compact founder-experience section remains at the end above the footer.

## Responsive and accessible behaviour

At 900px and below, the four-column comparison becomes four readable package sections. Navigation uses its existing focus trap, Escape dismissal and inert background. Desktop editorial grids stack on narrow screens. Gold text is restricted to dark surfaces. Existing reduced-motion support remains in place. Avoid decorative animation, new runtime dependencies and oversized hero images. Brand governance is defined by `assets/brand/anlaq/ANLAQ-Brand-System-v1.md`.

## Validation

Run `node scripts/check.mjs` and `node scripts/build.mjs`. Browser evidence and the review record are under `audit/anlaq-v2/`. Automated accessibility scans support review; they do not establish full WCAG conformance or field Core Web Vitals.
