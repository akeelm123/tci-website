# ANLAQ rebrand review

Branch: `rebrand/anlaq`. Production merge and promotion require explicit approval.

[Open the Vercel preview](https://tci-website-fzdpyr5ao-akeelm-projects.vercel.app). Vercel reports Ready, target Preview. Deployed implementation commit: `6c9661fc84952b6a2bb405fd90397d6e9c4172b0`. Home, TCI, Services and About match the tested local build after excluding Vercel’s injected preview-feedback toolbar. The production homepage still presents Akeel Advisory. Full deployment evidence is in `deployment.json`.

## What changed

- All 14 public HTML pages: ANLAQ header/footer, legal entity, metadata, social artwork, favicon and manifest references.
- Home: approved brand line, independent advisory proposition and immediate TCI introduction with all seven dimensions. Existing four-package comparison and management sequence retained.
- Services: shared four-package comparison added above existing full-scope disclosures; mobile uses readable stacked packages.
- TCI: endorsed as Transformation Confidence Index™ by ANLAQ; seven existing dimensions and content retained.
- About: founder identity and restrained name story. Existing, previously approved career results retained without new claims.
- Newsletter: publication name is Transformation Confidence.
- Shared CSS: navy, champagne gold, ivory, slate and TCI blue tokens; existing efficient system serif/sans typography.
- Contact JavaScript: ANLAQ email subject. Existing address, service selection, validation and draft-only behaviour preserved.
- Assets/build: faithful raster wordmark variants, Q icons, social image, manifest and existing content-hashed asset pipeline.

## Validation

- `node scripts/check.mjs`: passed 14 pages and 389 local references; canonical metadata, schema, seven dimensions, four packages and JavaScript syntax.
- `node scripts/build.mjs`: passed; 28 versioned assets.
- `git diff --check`: passed.
- Browser QA: all 14 pages at 375, 768 and 1440px, 42 combinations, no document overflow, broken loaded images, old visible master-brand text or JavaScript errors.
- Accessibility: 28 page/viewport WCAG A/AA automated scans plus four expanded Services scans, zero detected violations.
- Interaction checks: skip link, mobile menu focus trap, Escape dismissal, inert background, service deep link, enquiry preselection, required-field validation and ANLAQ draft contents passed. No email was sent.
- Performance: no new runtime dependencies, animation libraries or web-font downloads. Header logo reduced from 428,107 to 18,256 bytes. Gzipped Home+CSS+JS increased by about 0.65 KB overall, offset by the smaller logo. This is a payload comparison, not field Core Web Vitals certification.
- No package installation, framework linter, TypeScript compiler or pre-existing unit-test suite applies to this dependency-free static project. The new static check and browser acceptance tests cover the implementation.

## Brand audit classification

Updated current public brand text, alt/accessible labels, contact-draft subject, organisation schema, page/social titles, social image references and footer details. Preserved all route paths, canonical origin, sitemap/robots domain, Git/deployment identifiers and external profile links. Personal biography, founder identity and trademark attribution remain Akeel Munshi. Historical audit documents and publication cover artwork remain historical records; old image files and the old favicon are retained for rollback. Extracted text from the nine-page downloadable guide contained no Akeel Advisory references; the guide is unchanged. No external social profile or announcement was modified.

## Known limitation, accepted for preview

The supplied `ANLAQ_Logo_Primary.svg` is PNG data, not SVG. The user approved using the exact artwork for this preview. Primary, monochrome, reversed and compact Q assets are faithful raster derivatives; true vector originals remain pending. No font approximation or redesigned wordmark has been substituted. Social/schema asset URLs retain the production origin as required; newly added production asset paths become available there only after an approved release.

## Screenshots from the final local production build

- [Home desktop](homepage-1440-viewport.png) and [full page](index-1440.png)
- [Home mobile](homepage-375-viewport.png) and [full page](index-375.png)
- [TCI desktop](tci-1440.png)
- [Services desktop](services-1440.png) and [comparison](comparison-1440.png)
- [Services mobile](services-375.png) and [comparison](comparison-375.png)
- [About](about-1440.png)
- [Header](header-desktop.png) and [mobile navigation](navigation-mobile.png)
- [Footer](footer-desktop.png)

Tablet captures are included alongside these. `screenshots.html` is a convenient local gallery. Earlier design evidence remains in `../implementation-2026-09-24/`.

## Rollback and release

The original uncommitted site was saved as baseline commit `6d80bf8`, separately from the ANLAQ changes. Historical unrelated audit files remain in the working tree. The old assets and production deployment remain available. Revert the ANLAQ implementation commit to return to that baseline. Do not merge, promote, change the production domain or retire assets without approval.
