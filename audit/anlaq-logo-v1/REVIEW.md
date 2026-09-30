# ANLAQ logo rollout review

Branch: rebrand/anlaq. Preview only; no merge or production promotion.

## Changes
Supplied SVGs copied byte-for-byte from the approved ANLAQ-Vector-Artwork-v1 folder into assets/brand/anlaq-vector-v1. Updated header, footer, organisation schema, social images, favicon and manifest references on 15 pages. Adjusted only logo widths. Existing routes, copy, fonts, colours, production-domain references and older artwork preserved.

Header/footer use supplied no-descriptor variants because the descriptor would be unreadably small at those placements. Full primary logo retained in schema and a rendered 1200×630 PNG social image. Root favicon updated, with its prior bytes archived.

## Validation
- Static checks: 15 pages, 459 local references, canonical metadata, JSON-LD, seven framework dimensions, four service packages and JavaScript syntax passed.
- Production build passed: 64 versioned assets.
- Responsive browser checks: 45 page/viewport combinations at 375, 768 and 1440px; no overflow, broken images, missing fonts or page errors.
- Keyboard navigation: skip link, mobile menu focus trap, Escape and inert background passed.
- Four expanded service panels passed automated WCAG A/AA accessibility checks.
- Contact selection and draft validation passed; no message sent.
- Supplied SVG hashes recorded in asset-checks.json.
- Screenshot gallery: screenshots.html.

No package installation, dedicated linter, TypeScript checker or unit-test command exists in this dependency-free static repository.

## Release note
Social image and organisation-logo URLs retain the existing production-domain base by request. Their new asset paths will only resolve on that domain after a separately approved release; preview-local files are available for review. The preview does not change production.
