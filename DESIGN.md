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

## Previous site refinements

The baseline evidence and page-by-page recommendations are in [SITE-AUDIT-2026-09-22.md](SITE-AUDIT-2026-09-22.md). The changes below were implemented in the previous site release.

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

## Services and logo update

- The Services page now follows the four-offering architecture in `service-offering.md`: TCI™ Self-Assessment, TCI™ Executive Diagnostic, AI Investment Confidence Review™ and Transformation Confidence Assessment™. The free executive conversation is a route to choosing an offering, not a fifth paid assessment.
- Each offering appears as a compact `details`/`summary` row. The default view shows only title and short summary. Native keyboard interaction opens and closes details; direct links from Home and TCI open the relevant row on arrival. The expanded text describes purpose, method, evidence, audience, output and decision role using the updated product architecture.
- The seven-dimension TCI™ Self-Assessment described in the new architecture is distinct from the website's existing five-theme introductory PDF. The page names that difference and routes enquiries to Contact; it does not present the existing PDF as the new offering.
- The supplied Akeel Advisory PNG is retained as the source logo. Its emblem is displayed in the header beside the existing readable firm name and descriptor, replacing the previous CSS-drawn mark on all pages. The source image is decoratively cropped in CSS and has empty alt text because the adjacent name labels the home link.
- Home service previews and Contact service choices now match the four offerings. Existing TCI links to the full assessment and AI review still resolve.
- The visible direct-email label is **Mailto:Akeel-Advisory** in the Contact page and all footers. The underlying `mailto:` target, prepared draft recipient and copy-email control still use the verified business inbox.
- Visual acceptance checked the collapsed and expanded Services page at desktop, tablet and phone widths, the logo crop, keyboard toggles, direct links and Contact preselection. The user approved committing and deploying this update.

## Resources update and live-site audit — 22 September 2026

### Local change for visual review

The Resources page replaces the planned **Guide** tile with **Technology readiness / What can the evidence support today?** The copy describes the maturity-level and evidence check supplied by the user, and the action opens `https://trl-evidence-planner.vercel.app/`. The destination returned HTTP 200 during this audit. The page metadata now names the planner. Two stale references to fictional scenario “scores” and “ratings” were corrected to match the qualitative evidence shown on the current scenario pages. The user approved committing and deploying these edits after visual review.

### Audit evidence and limits

- Playwright opened all **14 live HTML pages**: each returned 200, had one H1, loaded its images, and produced no page-script error. All **20 distinct internal URL targets** found in page links returned 200. The planner returned 200. Seven LinkedIn newsletter destinations returned 200; the LinkedIn profile returned HTTP 999 to automation, which does not establish a visitor-facing broken link.
- Every live page was checked at **320, 375, 390, 768, 1024 and 1440 CSS px**. None showed page-level horizontal overflow. Mobile menu open/Escape, Home comparison expansion, Services keyboard expand/collapse, and Contact service preselection/invalid-field focus behaved as expected.
- Axe ran WCAG A/AA rules at 390 and 1440 px on all 14 pages: **one serious colour-contrast violation** appeared on About at desktop; the other 27 scans reported none. Automated scans and these interaction checks do not establish WCAG 2.2 AA conformance.
- Representative live pages use one first-party stylesheet and one first-party script, with no detected third-party library bundle. Cold browser transfers were about **433 KiB** on Home, Services, Resources and Contact, and **530 KiB** on Newsletter in the audit run. The shared logo PNG is **428,107 bytes** and is requested on every page. The deployed HTML, CSS, JS, logo and sampled WebP all returned `Cache-Control: public, max-age=0, must-revalidate`.
- A single mobile browser lab run with simulated network latency and CPU slowdown measured LCP around **0.51–0.57 s** and CLS **0** on Home, Services, Resources and Newsletter. This is not a Lighthouse score or real-user Core Web Vitals. PageSpeed Insights returned HTTP 429 for both mobile and desktop; **INP and production field CWV remain unavailable**.
- All 14 pages have unique titles, one H1, canonical and OG/Twitter image metadata, image alt attributes, and no skipped heading levels in the inspected DOM. `robots.txt` and `sitemap.xml` return 200; the sitemap lists all 14 intended canonical pages. The five fictional scenario pages share one meta description. No Organization/Person structured data was found.

### Prioritised recommendations from Stark and The Team

| Severity | Area and evidence | Recommended change | Acceptance check |
| --- | --- | --- | --- |
| High | **Accessibility — About:** the first desktop timeline label has navy `#071C31` text on midnight `#031122`, about **1.1:1** contrast in axe. | Give timeline labels a light foreground on the dark section and check every label against its actual background. | Axe has no A/AA contrast violation at desktop and mobile; keyboard focus and text reflow still work. |
| Medium | **Resource hierarchy:** one planned template still occupies the same large tile area as the two usable resources. | Move unpublished material into a compact “In development” note or remove it until available. Keep the self-assessment and evidence planner visually primary. | Visitors can identify usable resources and their actions without reading a planned-status caption. |
| Medium | **Proof strength:** the Home promise and four service previews are farther down the page from the About page's founder history; the five scenarios are clearly fictional, so they cannot carry client proof. | Bring a short, verifiable founder-experience strip or a clearly labelled sample evidence artifact close to the service decision. Do not imply client outcomes, quantified benefits or third-party endorsement without source permission. | A visitor can see what experience supports the judgement and distinguish illustrative work from client results. |
| Medium | **Generic structure:** Home moves through a long status comparison and an Assess/Assure/Advise explanation before the four offers. | Keep the strongest status-to-confidence contrasts and bring the four-offer route earlier in the on-page reading path. Retain the existing direct Services navigation and mobile CTA. | At phone and desktop widths, the first service choice is easy to find without traversing multiple explanatory sections. |
| Medium | **Offer clarity:** the collapsed Services rows state the question but do not consistently identify the free versus paid scope at a glance. | Label the free entry point, focused paid diagnostic, specialist AI review and full assessment in the collapsed state; avoid unvalidated duration or price claims. | Readers can choose a likely starting offer before expanding a row. |
| Medium | **Typography and contrast:** several small uppercase labels carry important states, especially “Illustrative”, “Planned” and service boundaries. | Use normal reading-size text for meaningful status, reserve microtype for ornament, and review navy/amber/grey combinations on their real surfaces. | Critical status remains readable at 200% text zoom and meets WCAG contrast targets. |
| Medium | **Caching:** static assets require revalidation in the recorded audit. | Apply long-lived caching to versioned assets and keep HTML revalidating. Logo changes are complete per Akeel’s 24 September update. | Repeat visits reuse static assets. |
| Low | **SEO:** the five fictional scenario pages have identical descriptions, though titles and canonical URLs are unique. | Write a distinct, factual description for each scenario and consider verified Organization/Person schema if discoverability warrants it. | Each scenario has a unique search snippet; schema claims match published evidence. |
| Low | **External link verification:** LinkedIn profile automation returned 999 while seven other LinkedIn destinations returned 200. | Check the profile in a normal signed-out browser as part of visual approval; keep the direct email route regardless. | A visitor can reach the profile, or the link is corrected if a human check shows a problem. |
| No action | **Library weight:** no unnecessary third-party libraries were detected in the site bundle. | Keep the static HTML/CSS/JS approach for this scope. | Dependency count stays unchanged unless a new interaction truly requires one. |

The Team's Editor challenged offer hierarchy, founder proof placement and status readability; the Fact-checker corrected stale audit assumptions about numeric scenario scores and missing metadata; the Writer recommended giving available resources priority over planned cards. The audit distinguishes current live behavior from earlier audit findings and from the local Resources edit.


## Audit recommendations, 23 September 2026

This is the current recommendation record. Earlier sections describe prior designs and checks; use the dated report below for the live state. These changes are proposed, not implemented or deployed.

[Full audit and evidence](</Users/akeelmunshi/work/github repo/akeel-advisory/tci-website/WEBSITE-AUDIT-2026-09-23.md>)

### Design direction

Keep the existing navy, ivory and amber palette, serif display headings, local-font body stack and static implementation. The site's main job is to help a board member or executive identify the right review and contact Akeel with a specific investment decision. Make the adviser and supporting evidence visible before the method becomes detailed.

Proposed homepage order: hero and adviser identity; confirmed career strip; four comparable offers; approved case or clearly labelled sample report; compact seven-stage decision sequence; contact. Keep detailed TCI dimensions on the TCI page.

### Suggested changes

| Priority | Area | Change | Acceptance |
| --- | --- | --- | --- |
| High | TCI card | Give the light “Connected evidence” card dark text. Current text and background are both `rgb(255, 253, 247)`. | Heading and paragraph are visible and meet text contrast at 390/1440px. |
| High | About timeline | Give every `.timeline-item small` a light foreground in the dark section. Current contrast is about 1.1:1. | All four labels meet at least 4.5:1. |
| High | Free assessment | Rename the Home action to “Open the introductory discussion guide” while it points to the five-theme guide. Use an enquiry label for the separate seven-dimension service until a matching start route is verified. | Visitors receive the product named by the link. |
| High | Positioning | Use “I” for Akeel's work, “me” in enquiry prompts and a short personal introduction. Retain client-perspective “we” in quoted diagnostic questions. | Provider identity is consistent across Home, Services, About and Contact. |
| High | Proof | Bring the published 30-year career claim and former Barclays, Standard Chartered and CGI roles onto Home after owner confirmation. Prepare one approved case and 2–3 supported outcomes. | Claims identify scope, time, evidence and Akeel's contribution. Former employers are not presented as clients or endorsers. |
| High | Hero | Proposed H1: “Is your transformation delivering the value you funded?” Supporting copy: “I help boards and executive leaders examine the evidence before they commit more funding, change direction or reset a transformation.” | Audience, decision and next action are clear without knowing TCI. |
| High | Service facts | Show the proposed comparison facts below on Home and in closed service summaries. | Time, output, fee basis and best-fit situation are visible without expanding a panel. |
| Medium | Method | Keep the seven-stage decision sequence compact on Home. Move dimensions detail to TCI; reconcile “Data Confidence” and “Data & AI Confidence”. | One seven-part explanation on Home and consistent dimension names. |
| Medium | Trademarks | Remove ™ from reading copy and keep the applicable attribution in the footer. | Marks appear only in footer notices; ownership wording remains accurate. |
| Medium | Type and decoration | Keep serif/sans roles; enlarge meaningful status text, stack service facts on mobile and move the diagonal line away from hero copy. | Real 200% zoom, narrow-screen reading and keyboard focus checks pass. |
| Medium | Performance | Use hashed asset URLs before immutable caching. | Repeat visits reuse versioned assets. |
| Low | SEO and resources | Give each scenario a distinct description, improve Services/TCI titles, consider verified Person/Organization data and demote planned resources. | Search-facing descriptions and visible availability match the page. |

### Proposed offer facts

These are the owner's proposed terms, not verified existing delivery commitments. Akeel should confirm start conditions and scope before publication. The current five-theme guide must not inherit the seven-dimension product's promised output.

| Service | Duration | Deliverable | Fee signal | Best for |
| --- | --- | --- | --- | --- |
| TCI Self-Assessment | 15–20 mins | Indicative confidence profile | Free | An initial health check |
| TCI Executive Diagnostic | 2–3 weeks | Executive Confidence Diagnostic | Entry-level fixed fee | Concerns exist but the cause is unclear |
| AI Investment Confidence Review | 3–5 weeks | AI Investment Confidence Report | Specialist fixed fee | Before further AI funding or scale |
| Transformation Confidence Assessment | 5–7 weeks | Board/ExCo-ready Transformation Confidence Executive Report | Flagship engagement | Before a major funding, intervention or reset decision |

### Verification record and limits

All 14 live pages returned 200; 21 internal HTTP destinations and 20 fragment destinations passed. No document overflow was measured across six widths. Menu, service-panel, assessment and contact-draft probes passed. LinkedIn profile access returned 999 to automation and remains unverified for ordinary visitors.

The 28 initial axe scans reported one desktop About contrast violation; visual inspection and computed colours found the invisible TCI card as well. Both are required repairs, regardless of automated scan results. No full WCAG conformance claim is made.

No external library bundle was detected. Unthrottled browser LCP samples were fast, but PageSpeed returned 429. Real-user CWV, INP and Lighthouse scores remain unavailable. CDN cache hits coexist with browser revalidation; the caching recommendation concerns the browser policy for versioned files.

The Team reviewed the proposed copy and corrected terminology and product-availability assumptions. The report and this addition were edited with anti-AI in reader mode. Skills inventory: [SKILLS-INVENTORY.md](</Users/akeelmunshi/work/github repo/akeel-advisory/tci-website/SKILLS-INVENTORY.md>).

### Status update, 24 September 2026

Akeel confirmed that the logo changes are complete. Logo replacement and size reduction are removed from the proposed work. Earlier measurements remain as dated audit evidence; the updated logo has not been remeasured in this revision.


## Implementation, 24 September 2026

The audit recommendations are implemented in the local website. The logo asset and its presentation remain unchanged. This section supersedes the earlier proposed-work tables for the items listed below.

### Approved content

Akeel approved the durations and fee descriptions for all four offers and chose **Data & AI Confidence** as the fifth dimension. His supplied biography replaces the earlier About introduction and supports the homepage experience strip: more than 30 years across technology consulting, enterprise architecture, global banking and transformation; senior global roles at Standard Chartered and Barclays; earlier consulting at CGI/Logica; and most recently leadership of Standard Chartered’s Global Data Platform strategy and evolution.

The site uses first-person provider copy. No client case, testimonial or outcome statistic has been invented. The five teaching scenarios remain explicitly fictional.

### Implemented changes

- Home now leads with the investment question and Akeel's identity, followed by experience, comparable offers and the compact decision sequence. Detailed TCI dimensions live on the TCI page.
- Home and the closed Services panels show duration, output, fee basis and best-fit situation. Repeated comparison and service-relationship sections were removed.
- The free TCI offer uses an information/enquiry route. Its separate five-theme resource is labelled “introductory discussion guide”. No new assessment engine or automated confidence score is implied.
- TCI’s light card has dark text. All About timeline labels have a light foreground. Meaningful status text and service facts are larger; the diagonal hero decoration no longer crosses copy.
- Reading copy and dynamic labels omit trademark symbols; existing ownership attribution remains in the footer.
- Headers share one navigation order. Contact displays the email address and retains the prepared-draft and copy-address routes.
- Resources gives the two available tools priority and puts the planned guide in a short note. Newsletter covers were checked at source: the earlier blank captures were a lazy-loading capture issue, so no replacement artwork was needed.
- Every fictional scenario has its own description. Services and TCI have descriptive titles. Home and About include basic Person/Organization data using published identity details.
- A dependency-free build copies only public content into `dist/` and assigns content hashes to CSS, JavaScript and supporting images. Vercel configuration applies long-lived caching only to `/assets/versioned/`. The logo and downloads keep their existing URLs. Audit files are excluded from the build.

### Remaining evidence

Client outcomes, an approved client case, extra speaking-format commitments and genuine event evidence need source material before they can be added. Field Core Web Vitals and Search Console index coverage still require production data. The LinkedIn profile's HTTP 999 response does not establish whether ordinary visitors can open it. Browser-cache headers must be checked on Vercel after deployment.

Local verification results are recorded in `audit/implementation-2026-09-24/`. No deployment has been performed as part of this implementation.

### Local acceptance result

The 24 September production-build checks passed: 14 pages, 41 internal URL checks, 28 initial accessibility scans and four expanded service-panel scans. No document overflow was measured at five widths. Keyboard and draft-email checks passed. Reflow was also emulated at the effective width of 200% desktop zoom; this was not a native browser zoom action. These results do not establish full WCAG conformance or field performance. See [verification record](</Users/akeelmunshi/work/github repo/akeel-advisory/tci-website/audit/implementation-2026-09-24/VERIFICATION.md>).

## About page redesign, 24 September 2026

The About page now uses Akeel’s expanded biography and supplied career results. An editorial introduction leads into four outcome measures, a consolidated career account, qualifications, working approach and the purpose of TCI. Repeated consulting history and the overlapping career timeline were removed. The page retains first-person copy and footer-only trademark attribution.

The outcome measures retain their original qualifications: DevOps adoption from 15% to 95%, regression testing cycles shortened by up to 80%, delivery capacity increased by 53%, and infrastructure provisioning reduced from approximately 135 days to five days. Multi-million-dollar cost efficiencies appear separately. These are presented as career results; no employer, client, project or timeframe has been assigned to an individual result.

The new qualifications section includes the MA in Digital Management from Teesside University and the supplied certification areas. No portrait, library or additional font was introduced. The existing logo is unchanged. The results grid becomes two columns at narrower widths and one column at the smallest width; the biography and qualifications stack on mobile.

The earlier request for outcome source material is now partly resolved by the biography supplied for this update. A named or anonymised client case has not been supplied.

Validation: the rebuilt About page passed checks at 320, 390, 768 and 1440 pixels with no horizontal overflow, automated WCAG A/AA violations or JavaScript errors. Both main calls to action returned HTTP 200. Desktop and mobile screenshots were visually reviewed. Evidence is saved in `audit/implementation-2026-09-24/about-refresh-checks.json` and the accompanying screenshots. These checks do not establish full WCAG conformance. The update is local and has not been deployed.

## Production deployment, 24 September 2026

All current website changes, including the About redesign, were deployed to https://akeel-advisory.vercel.app. Vercel deployment `dpl_B4gHof5bM1WPLVeLFe5HPR514zTt` is ready and assigned to the production domain. Live checks confirmed that all 14 HTML pages and 22 versioned assets returned HTTP 200 and matched the local build byte for byte. Versioned assets return `public, max-age=31536000, immutable`. Evidence: `audit/implementation-2026-09-24/production-checks.json`. This supersedes the earlier local-only deployment notes.
