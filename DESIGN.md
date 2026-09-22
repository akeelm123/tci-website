# Akeel Advisory website design system

## Direction

The public site behaves like an executive evidence brief for **Akeel Advisory**. The Transformation Confidence Index™ is the firm's method, not the site brand. The experience should turn transformation confidence into a visible sequence of evidence, judgement and action. It should avoid generic consultancy cards as its primary expression and use decisive information fields, fine evidence rules and a restrained amber sightline.

## Colour

- Midnight Navy `#031122`: primary authority field and footer.
- Deep Blue `#071C31`: secondary dark field and framework surfaces.
- Amber Gold `#E9A01B`: decisions, focus, active markers and primary conversion.
- Warm Ivory `#F4F1EA`: reading ground.
- Warm White `#FFFDF7`: raised paper surface.
- Muted Steel `#C9D1D7`: supporting copy on dark fields.
- Copper `#B96D2E`: rare supporting evidence marker.

## Typography

Baskerville carries editorial questions and major judgements. Avenir Next carries navigation, controls and evidence copy. Display text is balanced, never larger than 96px, and body copy stays within a readable measure.

## Components

Buttons and fields are rectangular with 3–8px radii. Pills are reserved for compact metadata. Cards use one clear edge or one shadow, never both as decoration. Gold identifies a decision or action; it is not scattered ornament.

## Motion

Content remains visible by default. Hover movement is restrained and reduced-motion removes transitions. The first viewport's diagonal evidence sightline is the signature moment.

## Responsive behaviour

Desktop pages use editorial splits and wide evidence fields. Below 1020px navigation becomes a full-width, keyboard-dismissable menu. Below 760px grids become one column and page gutters reduce to 16px. At the tablet breakpoint, the Home evidence dial and all seven labels must remain readable without clipping. On narrow phones, the comparison should preserve its core argument without delaying the route to a service.

## Implemented refinements awaiting visual approval

The baseline evidence and page-by-page recommendations are in [SITE-AUDIT-2026-09-22.md](SITE-AUDIT-2026-09-22.md). The changes below are implemented in the local working copy for visual review. They have not been committed or deployed.

1. **Proof before polish:** Show verifiable founder experience and a clearly marked sample evidence artifact. Keep fictional scenarios distinct from client work; replace their numeric confidence scores and bands with qualitative decision evidence.
2. **One clear job per page:** Home frames the investment decision; Services distinguishes buyer, trigger and output; TCI shows the evidence-to-judgement path; Resources separates available from planned material; Contact completes a dependable enquiry handoff.
3. **Readable hierarchy:** Keep the editorial serif for questions and judgements, with Avenir Next for body text and controls. Review 10–12px labels, amber text on light surfaces, focus states and 200% text reflow before approval.
4. **Responsive replacement:** Keep the full status/confidence comparison on wide screens. On mobile, prioritise the few contrasts that best explain the decision and give access to the complete view. Rework the tablet evidence dial where labels clip.
5. **Lean assets:** Keep the no-framework static stack. Resize and compress newsletter thumbnails, using responsive image sources while retaining the original cover artwork. Add canonical URLs, a sharing image, sitemap and robots file once the final public domain is confirmed.
6. **Commercial accuracy:** Correct Speaking's “five TCI™ dimensions” wording to match the seven-dimension method, or clearly describe a separate five-theme workshop. Preserve the distinction between the 21-question introductory guide and a formal TCI™ assessment.

## Implementation and acceptance checks

The table records the change brief and the checks that still matter. The verified business email is `akeelm@duck.com`; the user asked to leave phone and WhatsApp unpublished. The contact form prepares an email draft in the visitor's email app and does not submit through the website. A server-side enquiry service would be a separate integration.

| Severity | Description | Actionable recommendation | Acceptance check |
| --- | --- | --- | --- |
| High | LinkedIn was the only enquiry route. | Provide an email-draft form and the verified direct address in the desktop header, mobile menu, Contact page and footer. Keep LinkedIn available. Leave phone and WhatsApp unpublished as requested, and preserve the selected service in the draft. | Check valid and invalid forms, draft contents, keyboard access and the visible fallback at phone and desktop widths. A visitor must send the draft from their email app. |
| High | Fictional scenarios present `19–21 / 35` confidence scores and Low/Moderate labels as if calibrated. | Prefer qualitative evidence states: **supported**, **uncertain**, **requires testing**. Pair each with the evidence needed to change the judgement. If scores remain, repeat the illustrative, unvalidated disclosure beside every score and remove benchmark-like band styling. | A reader can identify each scenario as fictional before seeing a rating; no score appears as a validated TCI™ result. |
| High | Speaking says “five TCI™ dimensions” while TCI™ describes seven. | Change to “seven TCI™ dimensions” if the session covers the whole Index; otherwise name the separate five-theme workshop explicitly. | Speaking, TCI and Assessment use consistent language for the seven-dimension method and five-theme introductory guide. |
| High | Automated accessibility checks found serious contrast failures on 10 of 14 pages. | Use dark amber on ivory and audit all small text on light and dark surfaces, including scenario bands, TCI card numbers, captions and list labels. Check focus, status announcements, text enlargement and keyboard paths manually after changes. | Axe reports no WCAG A/AA violations on every page and key interaction state; manual WCAG 2.2 AA review finds no blockers. Do not claim conformance from automated scores alone. |
| Medium | Mobile visitors scroll through the full eight-row comparison before reaching the services. | Add a direct service or decision CTA within the first mobile viewport, then reduce the mobile comparison to a few decisive examples with a route to the complete view. Keep the full table on wider screens. | At 375–390px, a service path is visible without scrolling past the comparison; the central argument remains clear. |
| Medium | Two Home orbit labels extend beyond the 768px viewport and are clipped. | Reflow the seven labels or switch to a compact labelled list before they collide. Keep the accessible text equivalent. | Check 768px and 1024px screenshots: every visible label is legible and no content is clipped. |
| Medium | Newsletter PNG thumbnails total about 6.6 MB. | Export responsive WebP/AVIF thumbnails sized for their cards; keep original covers separately. Target **under 1 MB for all six thumbnail files combined**, with `srcset`, `sizes`, width/height and below-fold lazy loading. | Verify the six delivered thumbnail files total under 1 MB and images remain sharp on standard and high-density phones. |
| Medium | All pages lacked canonical URLs and social sharing images. | Add one absolute canonical per page on the current public domain, plus `og:image`, `twitter:card` and `twitter:image` using a branded image with appropriate dimensions. | Inspect rendered metadata locally and test representative URLs in social sharing previews after deployment. |
| Medium | The live site returns 404 for `sitemap.xml` and `robots.txt`. | Add both files at the site root; include all intended indexable pages and the canonical sitemap URL. Decide whether illustrative scenarios should be indexed. | Both files return 200 on the preview deployment and the sitemap URLs resolve to canonical pages. |
| Medium | Real-user Core Web Vitals evidence is unavailable. | Re-run mobile and desktop Lighthouse on a production preview after visual approval, especially Home, Newsletter, TCI and Contact. Use field data when available. Report INP only from a source that measures it. | Compare local and preview Lighthouse reports, transferred bytes and image requests; do not treat localhost scores as a production pass. |

### Local verification after implementation

- The five fictional scenario score panels now present qualitative evidence to weigh. Speaking refers to seven TCI™ dimensions.
- The Home mobile hero exposes a Services CTA in the first 844px viewport; the comparison initially shows four rows and expands to eight. Tablet orbit labels remain within the viewport.
- Header and footer now expose direct email; Contact offers a prepared email draft, copyable address and LinkedIn link. No phone or WhatsApp number is shown.
- All 14 pages have a canonical URL and OG/Twitter image metadata. `sitemap.xml`, `robots.txt` and the branded sharing image return 200 locally. The canonical origin is the currently supplied `https://akeel-advisory.vercel.app`; review it if a custom domain is chosen.
- The 12 responsive WebP newsletter thumbnails total **281,714 bytes** across both size variants, below the 1 MB target. The original cover files remain as source assets.
- Axe found no WCAG A/AA violations in its initial-state scan of all 14 pages. This is an automated result, not a conformance claim. Four sampled mobile Lighthouse runs scored 100 for performance, accessibility, best practices and SEO; Newsletter transfer fell from about 6.8 MiB to 232 KiB in those local lab runs. Real-user INP and production performance remain unmeasured.
