# ANLAQ website

A static website for ANLAQ. The Transformation Confidence Index™ is its advisory method.

## Preview

Open `index.html` in a browser, or run a local server from this folder:

```text
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Pages

- Home
- About Akeel
- Transformation Confidence Index™
- Newsletter
- Resources
- Speaking
- Contact
- Executive Self-Assessment landing page

## Before publishing

1. Confirm the public domain used in canonical URLs, social metadata, `robots.txt` and `sitemap.xml`.
2. The Contact page opens an email draft addressed to `akeelm@duck.com`; it does not submit data through the website. Add a server-side form service only if in-site submission is required.
3. Confirm analytics and privacy wording before launch.
4. Review the current published newsletter links and thumbnails.

The site uses plain HTML, CSS and JavaScript. No third-party framework or runtime dependency is required.

## Production build

Run `node scripts/build.mjs` to create `dist/`. Vercel runs this command automatically. The build includes public pages and assets, excluding the audit reports and working documents. It gives CSS, JavaScript and supporting images content-hashed filenames under `assets/versioned/`; only those immutable URLs receive year-long browser caching. Logo variants keep stable URLs, and downloads keep stable links.

Preview the production output with `python3 -m http.server 8081 --directory dist`. After editing any source, rebuild before checking the production output.

## ANLAQ review

Run `node scripts/check.mjs` for brand, links, canonical URLs, schema, framework, service and JavaScript checks. There is no package install, framework linter, TypeScript compiler or existing unit-test suite: this is a dependency-free static site. Browser QA covers responsive layouts, automated accessibility, keyboard navigation and enquiry drafts.

The rebrand is preview-only on `rebrand/anlaq`. Production SVGs and the brand system are under `assets/brand/anlaq/`; previous raster assets are retained for rollback. Playfair Display and Inter are self-hosted, licensed variable WOFF2 fonts. See `audit/anlaq-v2/REVIEW.md` for v2 evidence and release constraints.
