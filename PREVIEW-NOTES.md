# The Clearer View — branch review

This preview is on `codex/anlaq-homepage-preview`, based on upstream commit `72e2d5feee2fb6634953aedcc5ca010338612eaa`.

The source was retrieved through the user's connected GitHub account, Barere. The exact upstream files, tree and shallow commit were reconstructed and verified by their Git object hashes. No synthetic baseline commit was created. Earlier history can be fetched later through an authenticated Git client if needed. The user has explicitly approved pushing this review branch and obtaining a branch preview. GitHub operations must use the user's Barere connection; no bot or different account is authorised. A pull request, merge into main and production deployment still require separate approval. The local command-line origin push URL remains disabled as a safeguard against accidental pushes outside that approval.

## Design

- Complete homepage based on the approved navy/ivory design, with the chosen AQ monogram.
- AQ artwork is outlined SVG, paired with the existing outlined ANLAQ wordmark. Previous identity assets remain available.
- Requested gold-accent update: `#B79A57` on the monogram Q and wordmark Q tail, including reversed variants and browser icons. The main lettering and page design are retained.
- Header/footer logos and browser icons are updated across the public pages for consistent navigation. The internal page layouts and disclosures are otherwise retained.
- Glass artwork is a separate, locally stored, optimized WebP asset. It was generated with the built-in image tool from the approved visual concept. The full image is under 100 KB and the mobile alternative under 30 KB.
- The homepage decision selector supports keyboard arrows, Home and End. Each selection links to Contact with the corresponding original question prefilled; nothing is submitted automatically.
- Service rows expand to reveal the original question, outcome and existing detail-page link. The original assessment journey remains available in the framework disclosure.

## Wording

The implementation deliberately retains the owner's original wording rather than the exploratory copy in the generated mockup. In particular:

- Original hero proposition, four proof points, four decision questions, four service names, descriptions, outcomes and timeframes are retained.
- “When the decision matters, test the evidence.” remains the decision heading. The original second hero paragraph moves below that heading.
- “Advisory grounded in enterprise experience.” remains the founder heading. The biography is unchanged.
- The framework name, seven dimensions and explanatory paragraph are retained. “Confidence requires evidence.” is promoted from the original statement to the display heading; “Progress records movement.” is retained immediately below it.
- The new homepage resource section reuses the existing assessment page's heading and guide description. It does not rewrite them in the user's personal voice.
- New short display text from the approved visual concept: “Seven dimensions. One clearer decision.” and the resource label “A practical starting point”. The source's hero label now uses slashes between Technology, AI and Transformation.
- Original footer links, legal name and trademark notices remain. No claims, client logos or testimonials were added.

## Run locally

No package installation is required. Run `node scripts/check.mjs` and `node scripts/build.mjs`, then serve `dist/` with `python3 -m http.server 8081 --bind 127.0.0.1 --directory dist`.

The build writes local files only. The Vercel configuration and production URLs have not been changed. The review branch push is approved; opening a pull request, merging and publishing to production remain subject to the user's approval.

## Validation completed

- The existing site checker passes: 15 public pages and 435 local references, including canonical metadata, schema, seven dimensions, four packages and JavaScript syntax.
- The production build passes, with 70 versioned assets.
- A source comparison found every original homepage paragraph and outcome string retained. The two-line framework statement is presented in reversed order, as described above.
- Browser checks at 1280, 768, 390 and 320 pixels found no clipped text or horizontal overflow in the homepage content.
- Mobile menu open/Escape dismissal, touch selection and arrow-key decision switching, expandable diagnostic details and decision-to-contact prefilling were exercised successfully. No message was sent. Browser error logs were empty.
- `git fsck --connectivity-only` and `git diff --check` passed.

## Generated hero artwork

The final local assets are `assets/images/clarity/optical-glass.webp` (94,612 bytes) and `assets/images/clarity/optical-glass-800.webp` (28,060 bytes). The original PNG was generated with the built-in image tool, then converted to WebP for the site. The supplied reference was the approved AQ homepage concept in this chat. This artwork is decorative; the actual page and lettering are HTML and outlined SVG.

Final generation prompt:

> Use case: precise-object-edit / website asset extraction. The supplied image is an approved ANLAQ website concept. Create ONLY the hero's optical glass sculpture artwork as a separate high quality production website image, no UI. Recreate faithfully the seven progressively offset upright lightly frosted clear glass planes in the RIGHT HALF of the supplied website hero. Horizontal landscape canvas approximately 1600 x 1200 pixels. Rich nearly black ink navy studio background exactly #13263A, subtle navy floor. Seven long vertical glass planes have elegantly lit clear edges, subtle realistic glass haze and refraction. They stand diagonally receding from large front plane on LEFT toward smaller planes on RIGHT. A shared softly lit ivory rectangular aperture resolves through their middle, expressing evidence coming into focus. Delicate muted brass hairline horizontally through the center. Material realism, refined studio light, soft long shadows, absolutely beautiful cinematic still life photography with restraint. Same sculpture shape, calm luxury, and navy palette as the approved concept. Leave a generous dark navy area on the leftmost 12 percent for a seamless blend with the website's text area. Crop object artfully at bottom right, maintain all seven panels visibly countable. Remove ALL website text, letters, navigation, logos, buttons, labels, proof strip, footer and borders. Output ARTWORK ONLY. No fabricated diagrams, no person, no building, no scenic view, no floating icons, no glowing science fiction, no colored rainbow glass, no chrome blobs.
