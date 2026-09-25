# Akeel Advisory website

A static website for Akeel Advisory. The Transformation Confidence Index™ is its advisory method.

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

The site uses plain HTML, CSS and JavaScript. No build step or third-party framework is required.


## Production build

Run `node scripts/build.mjs` to generate `dist/` with content-hashed static assets. Vercel uses this command and output directory. Preview `dist/` with a local static server. There are no package-manager dependencies, configured lint suite or unit-test runner. Syntax checks use `node --check assets/js/home.js` and `node --check assets/js/site.js`; browser checks cover navigation, disclosures, contact preselection, responsive reflow and accessibility.

Home uses assets/css/home.css and assets/js/home.js; all other pages retain their shared stylesheet and script. Change source assets, never generated dist files.
