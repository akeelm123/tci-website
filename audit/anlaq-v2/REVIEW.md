# ANLAQ v2 preview review

Branch: `rebrand/anlaq`. Preview only; explicit approval is required before merging or publishing.

## Implementation

- Copied all five supplied SVGs and the brand-system document into `assets/brand/anlaq/`. Their SHA-256 checks confirm byte-for-byte identity with the supplied files. No logo paths, typography, colours or proportions were altered.
- Replaced active raster logos with primary and monochrome-light SVGs across all 15 pages; protected logo clear space and retained accessible names.
- Updated SVG/ICO favicons, Apple touch icon, Q app icons, manifest and social artwork. PNG icons and social image are direct renders of supplied SVGs, not redrawn artwork.
- Applied Playfair Display and Inter through two self-hosted variable Latin WOFF2 files, about 84 KB combined. Included OFL licences, preloads, swap behaviour and content-hashed font delivery.
- Applied Midnight, Champagne #C6A15B, Ivory, Ink, Slate and Mist tokens. Small text on Mist uses Ink to meet contrast requirements.
- Applied the supplied homepage proposition and “Explore TCI™” / “Explore our services” CTAs. Preserved the compact founder section at the page end, the four service packages, the seven TCI dimensions, current routes and sample-report functionality.
- Updated the build to version fonts before hashing CSS, preserving immutable asset caching without introducing dependencies.

## Migration audit

All current HTML, JavaScript, active shared CSS, SVG framework labels and manifest references were checked. No current Akeel Advisory master-brand text or obsolete “Data Confidence” dimension labels remain. All seven canonical dimensions are verified, including Data & AI Confidence. Founder biography, publication authorship, personal links and TCI trademark attribution remain Akeel Munshi.

Historical reports, old logo files and former raster derivatives are retained for rollback. The previous root favicon is archived as `assets/images/anlaq/v1-favicon.ico`. Legacy unused homepage CSS/JS and old publication cover artwork remain historical assets. No routes, redirect rules, existing canonical origins, production aliases or external profiles were changed.

## Checks

- `node scripts/check.mjs`: 15 pages, 459 local references, metadata/schema, seven dimensions, four packages, production SVG references, font preloads and JavaScript syntax passed.
- `node scripts/build.mjs`: passed, 43 versioned assets.
- `git diff --check`: passed.
- 45 browser page/viewport checks: all 15 pages at 375, 768 and 1440px, no overflow, broken images or JavaScript errors; both specified fonts loaded.
- 30 automated WCAG A/AA page scans and four expanded-service scans: zero detected violations after correcting Slate-on-Mist contrast.
- Keyboard skip link, mobile menu focus trap and Escape, inert background, service deep links, contact preselection, form validation and prepared email draft passed. No email was sent.

No package install, framework lint command, TypeScript compiler or existing unit-test runner is configured in this dependency-free static repository. The static checks and browser acceptance checks are its applicable equivalents. Automated checks do not certify complete accessibility or field Core Web Vitals.

## Screenshots

These are screenshots of the final local production build, not mock-ups.

1. [Homepage desktop](homepage-1440-viewport.png), [full page](index-1440.png)
2. [Homepage mobile](homepage-375-viewport.png), [full page](index-375.png)
3. [TCI desktop](tci-1440.png)
4. [Services desktop](services-1440.png)
5. [Services mobile](services-375.png)
6. [About](about-1440.png)
7. [Header](header-desktop.png), [mobile navigation](navigation-mobile.png)
8. [Footer](footer-desktop.png)

Tablet captures and package-comparison screenshots are also included. [Open the screenshot gallery](screenshots.html).

## Known issues and release gate

No implementation regressions are known from the checks above. The earlier raster-logo limitation is resolved by the supplied production SVGs. Existing production-origin canonical/social URLs are intentionally retained, so preview metadata does not point to a temporary preview hostname. New social asset URLs become available at the production origin only after an approved release.

STOP before merge or production promotion. Existing production assets and deployment remain available.
