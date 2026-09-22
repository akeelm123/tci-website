# Akeel Advisory website audit — 22 September 2026

## Scope and evidence

This review covers all 14 local HTML pages in the current uncommitted working copy. Playwright opened every page at 1440, 768, 390 and 320 CSS pixels, checked 27 distinct link destinations, and exercised mobile navigation, service context and the introductory assessment. Desktop and mobile screenshots were reviewed. File inspection covered structure, CSS, JavaScript and assets. Five representative pages were measured in a local Chromium session. Live Vercel headers were checked separately to distinguish deployed behaviour from local changes.

This is a design and implementation audit, not a WCAG certification or a field Core Web Vitals report. Local load timings are useful for comparison but do not represent visitor devices or network conditions. The SEO performance script could not run because its Python `requests` dependency is absent, so browser timing, temporary Lighthouse tooling and asset inspection were used instead. INP field data was not available.

## What is working

- All 14 local pages return HTTP 200, have one H1, a description, `en-GB`, and header, navigation, main and footer landmarks. The six newsletter images load locally and have alt text.
- All local page, PDF and fragment targets resolve. The mobile menu opens, closes with Escape, restores focus, and navigates. The assessment sliders update their visible values and reveal discussion guidance.
- The site uses plain HTML, CSS and JavaScript without a third-party runtime library or build bundle. The restrained navy, ivory, serif and amber system is appropriate for an executive advisory firm.
- The illustrative scenarios explicitly say they are fictional rather than client results. The assessment distinguishes its five introductory themes from the seven TCI™ dimensions.

## Prioritized findings and recommendations

### High — fix before approval to publish

1. **Clarify the only enquiry route.** Every primary contact action leads to a LinkedIn profile. The page explains this honestly, but a buyer without LinkedIn access or messaging permission has no alternative. Add a verified direct route once Akeel supplies one; until then, make the external handoff unmistakable and give visitors a copyable, service-specific message. The automated check received LinkedIn HTTP 999, which is a bot restriction and does **not** prove the profile link is broken. `contact.html`, service CTAs and sitewide CTA bands.
2. **Remove false precision from fictional scenarios.** All five scenario pages show scores such as `19 / 35` and confidence bands such as “Low” or “Moderate,” although their own disclosure says the method is unvalidated and illustrative. The disclaimer does not neutralise the visual authority of a score. Prefer a qualitative evidence panel: what is known, what is uncertain, and what would change the decision. Keep the fictional disclosure close to the first scenario claim. `case-study-1.html` through `case-study-5.html`.
3. **Correct TCI™ dimension count.** The “Transformation Confidence in 90 Minutes” card says “five TCI™ dimensions”; the site defines seven. Change that card to seven dimensions, or describe a distinct five-theme workshop if that is the intended offer. `speaking.html`.
4. **Repair contrast across the site.** An axe scan at 390px found serious `color-contrast` violations on 10 of 14 pages. The affected elements include scenario confidence bands, TCI card numbers, Assessment pills, Resources captions, Contact caption and Speaking list items. Brand amber `#E9A01B` against warm ivory `#F4F1EA` calculates at about **1.96:1**. Use the darker amber text token `#88601A` on light surfaces and fix the other failing tokens by context; bright amber on navy calculates at about **7.8:1**. Recheck actual rendered text and focus states rather than relying on token contrast alone. `assets/css/styles.css` and affected pages.

### Medium — improve decision clarity and usability

5. **Give each page a distinct job and proof object.** Home, Services, TCI, Speaking and the scenarios repeat a large serif headline, split text and the same diagonal motif. Keep the brand language but let the content lead: Home should foreground the investment question and a real evidence example; Services should compare buyer, trigger and decision for each offer; TCI should show how evidence leads to judgement; Speaking should state audience and takeaways; scenarios should show a decision record rather than a generic action list. Avoid stock images, invented client outcomes or decorative dashboards.
6. **Make proof more concrete.** About names 30 years of experience and roles at CGI, Barclays and Standard Chartered, but Home offers little immediate founder evidence. Add a concise, verifiable founder proof strip or link near the first service decision. Do not treat fictional scenarios as client case studies. Where commercial proof is unavailable, show a sample review artifact, evidence question or deliverable clearly marked as illustrative. `index.html`, `about.html`, `services.html`, `resources.html`.
7. **Shorten the mobile route to an offer.** At 390px, the eight comparison rows become a long vertical stack before the four service options. Keep the full comparison on larger screens; on narrow screens, feature a small set of decisive contrasts and provide a clear route to the full explanation. Bring the decision trigger or service signpost earlier. `index.html`.
8. **Adapt the tablet hero graphic.** At 768px, the Home orbit's `Leadership` and `Data & AI` labels extend beyond the viewport and are clipped by the page's horizontal clipping rules. Reflow or hide labels at the content-failure breakpoint, with an accessible text equivalent for all seven dimensions. There was no document-level horizontal scrolling in the tested 320, 375, 390, 768, 1024 and 1440px viewports. `index.html`, `assets/css/styles.css`.
9. **Make service selection easier.** The four service descriptions repeat the same “When it matters / What we examine / What leaders receive” pattern. Add a compact comparison using intended buyer, decision point and output before the detailed descriptions. The `?service=` parameter appears on Contact, but the visitor must manually carry it into LinkedIn; provide a copyable enquiry sentence to preserve context. `services.html`, `contact.html`.
10. **Finish the assessment's announced state.** Sliders have labels and keyboard input worked. The newly revealed result is not a live region, so screen-reader announcement was not established. Add a status region or move focus to the result after submission. Explain the initial default rating or require deliberate selection so a prefilled `3` is not mistaken for the visitor's judgement. `assessment.html`, `assets/js/site.js`.
11. **Separate available resources from planned ones.** The featured guide is usable; two adjacent cards are only “Planned resource.” Put available material first and visually separate future items. On TCI, replace the flat seven-card list or the generic eighth “Connected evidence” card with a single evidence → judgement → decision example. `resources.html`, `tci.html`.
12. **Review type at actual size.** Body copy is generally legible, but 10–12px uppercase labels, meta lines and footer text are difficult to scan on phones. Test at 320px and 200% text enlargement. Increase the smallest labels that carry meaning; maintain Baskerville for executive questions and Avenir Next for reading and controls. `assets/css/styles.css` across pages.

### Medium — performance and discoverability

13. **Optimise newsletter thumbnails.** The six PNGs total about **6.6 MB**. The Issue 6 file is about **1.32 MB**, and the locally loaded newsletter page transferred about **1.45 MB** in its initial browser run while only the first visible images loaded. Produce card-sized WebP/AVIF variants with suitable `srcset`/`sizes`, preserving the original artwork elsewhere. Keep lazy loading for below-fold images. `newsletter.html`, `assets/images/newsletters/`.
14. **Add canonical and sharing metadata after domain confirmation.** All 14 pages lack canonical URLs and `og:image`. Every page already has a title, description and one H1; six local images have alt text. Add absolute canonical URLs on the confirmed public domain and a branded sharing image. Add `robots.txt` and `sitemap.xml`; both returned **404** on the live Vercel deployment checked today. Consider structured data only where it describes real visible content. `*.html`, site root.
15. **Repair heading jumps.** Resources and Speaking move from H1 directly to H3 for the first card section. Add a section-level H2 that describes the set, keeping card titles at H3. `resources.html`, `speaking.html`.
16. **Keep caching proportionate.** The live HTML, CSS and JS responses use `cache-control: public, max-age=0, must-revalidate`; Vercel reported cache HIT for HTML/JS and a MISS for CSS in the sampled request. This is functional, but unversioned assets cannot safely use long immutable caching. If asset filenames become fingerprinted, give those static assets a longer cache life. No additional JavaScript library is justified by the current site.

## Page-by-page direction

| Page | Review focus |
| --- | --- |
| Home | Keep the investment promise and comparison; shorten the mobile conceptual route, show founder or artifact proof sooner, and fix tablet orbit labels. |
| About | Lead with specific, verifiable career evidence; keep the advisory position distinct from client outcome claims. |
| Services | Add a buyer/decision/output chooser before four similarly structured descriptions. |
| The Index | Show one worked evidence-to-decision path across the seven dimensions. |
| Resources | Separate downloadable material, illustrative scenarios and planned resources. |
| Newsletter | Keep all six issues and their artwork; reduce thumbnail weight and improve archive scanning on mobile. |
| Contact | Provide a dependable route beyond LinkedIn when available; preserve selected-service context in the handoff. |
| Assessment | Preserve the introductory/five-theme distinction; announce results and avoid an assumed default score. |
| Speaking | Correct the dimension count and make audience, format and takeaways explicit for each offer. |
| Scenario 1 | Replace `20 / 35` and “Moderate” with evidence gaps and a decision test. |
| Scenario 2 | Replace `21 / 35` and “Moderate” with evidence gaps and a decision test. |
| Scenario 3 | Replace `19 / 35` and “Low” with evidence gaps and a decision test. |
| Scenario 4 | Replace `20 / 35` and “Moderate” with evidence gaps and a decision test. |
| Scenario 5 | Replace `19 / 35` and “Low” with evidence gaps and a decision test. |

## Technical measurements and limits

| Local page, mobile Chromium | Load event | LCP observation | CLS observation | Initial response bytes |
| --- | ---: | ---: | ---: | ---: |
| Home | 144 ms | 188 ms | 0 | 45,562 |
| Services | 68 ms | 120 ms | 0 | 43,669 |
| Newsletter | 61 ms | 96 ms | 0 | 1,448,208 |
| Assessment | 68 ms | 104 ms | 0 | 42,440 |
| Contact | 59 ms | 92 ms | 0 | 40,096 |

These are single-run localhost observations without network or CPU throttling. They are **not** Core Web Vitals field results. No INP was measured. CSS is 32,840 bytes (about 7,125 gzip); JavaScript is 3,341 bytes (about 1,191 gzip). No third-party runtime libraries were found.

Temporary Lighthouse mobile runs on localhost returned the following baselines. Scores are specific to these runs and cannot confirm future fixes or real-user experience.

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Home | 91 | 100 | 100 | 100 | 1.1 s | 0 |
| Newsletter | 100 | 100 | 100 | 100 | 1.1 s | 0 |
| TCI | 100 | 95 | 100 | 100 | 1.2 s | 0 |

The Home speed index in that run was 11.5 s despite its 1.1 s LCP, so one score alone should not be treated as a performance verdict. Newsletter's Lighthouse report counted about 6,776 KiB total page weight. Lighthouse did not flag the missing sitemap or canonicals in these local runs. The live deployment's `robots.txt` and `sitemap.xml` returned 404 when requested directly.

An axe scan of all 14 local pages at 390px found contrast violations on Assessment (4 nodes), TCI (8), Resources (12), Contact (1), Speaking (6), and each of the five scenario pages (2 each). Home, About, Services and Newsletter had no automatically detected violations in that scan. Some contrast checks remained inconclusive, and automated results do not establish WCAG conformance. The mobile menu's Escape/focus return and the assessment's keyboard slider updates were manually exercised; 200% text enlargement and screen-reader output still need manual review after the proposed changes.

Of 27 distinct checked destinations, 26 returned 200. The remaining LinkedIn profile returned HTTP 999 to automation and needs a normal-browser human check. All local fragment links resolve to existing IDs, and there were no duplicate IDs. The live deployment differs from this uncommitted copy: the Issue 6 thumbnail returned 404 on Vercel, while it loaded locally. That is a deployment gap, not a local broken image.

## Team review outcome

The Writer proposed stronger page-specific proof and a shorter mobile decision route. The Editor rejected a generic visual overhaul and pushed for a dependable enquiry path, explicit service selection and fewer decorative repetitions. The Fact-checker removed claims that the LinkedIn 999 response proved a broken link, that localhost timings represented real visitors, or that automated checks established WCAG compliance. The recommendations above incorporate those corrections.

## Implementation update — local working copy

The user subsequently authorised implementation. The current local copy now includes a direct email route to `akeelm@duck.com`, a form that opens a prepared email draft, a copy-email control and the existing LinkedIn route. No phone or WhatsApp number was supplied or published. The form does not send data through the website; delivery depends on the visitor sending the draft from an email app.

The five scenario scores and confidence bands have been replaced with qualitative evidence panels, Speaking now says seven TCI™ dimensions, contrast tokens were repaired, the mobile Home comparison is expandable, the first mobile viewport contains a Services CTA, and tablet orbit labels stay within the viewport. Newsletter images use two responsive WebP sizes per issue; all 12 derivatives total **281,714 bytes**. Canonical URLs, OG/Twitter image metadata, a 1200×630 branded sharing image, `sitemap.xml` and `robots.txt` are present locally.

Post-change checks: all 14 pages returned 200 locally; 27 of 28 distinct link targets returned 200, while LinkedIn again returned HTTP 999 to automation. Every tested page had no document-level horizontal overflow at 320, 375, 390, 768, 1024 and 1440px. Axe found no initial-state WCAG A/AA violations on all 14 pages. Mobile Lighthouse scored Home, Newsletter, TCI and Contact **100** in Performance, Accessibility, Best Practices and SEO; Newsletter's measured total page weight fell from about **6,776 KiB to 232 KiB**. These are localhost lab checks. Real-user Core Web Vitals, including INP, and manual WCAG conformance remain unverified. Nothing was committed or deployed.
