# ANLAQ logo refinement

The refined identity retains ANLAQ’s uppercase wordmark, opposing framing symbol, navy and muted gold. The lettering uses clean vector geometry with stronger minimum strokes. The Q has a shorter gold tail, and the symbol sits closer to the name.

## Artwork

Files are in `assets/images/anlaq/`:

- `logo-refined-primary.svg`: standard horizontal website logo without descriptor.
- `logo-refined-reversed.svg`: white wordmark and gold accent for navy backgrounds.
- `logo-refined-navy.svg`, `logo-refined-black.svg`, `logo-refined-white.svg`: single-colour versions.
- `logo-refined-full.svg`: large-format logo with “Technology • AI • Transformation”.
- `symbol-refined-primary.svg` and matching reversed, navy, black and white versions: symbol alone.
- `symbol-refined-icon.svg`: square ivory icon for browsers and app shortcuts.
- `symbol-refined-16.png`, `-24.png`, `-32.png`, `-180.png`, `-192.png`, `-512.png`: rendered icons.
- `social-refined.png`: 1200 × 630 social card.

Earlier artwork remains available for comparison and rollback.

## Colour and spacing

Navy: #0F2744. Gold: #C9A45B. Reversed wordmark: #FFFFFF. Icon background: #FBF8F3.

Let X equal the framing symbol’s stroke thickness (8 units in the 400-unit horizontal master). Leave at least X of unobstructed space around the visible artwork. Use 2X for report covers and presentation title slides when space allows. Preserve the aspect ratio.

## Size and application

Website header: 245 pixels wide on desktop, 195 pixels on mobile. Use the descriptor-free version; keep the service descriptor as readable page text. Recommended minimum horizontal logo width is 180 pixels. Below that size, use the symbol alone.

Full logo with descriptor: use at least 320 pixels wide or 85 mm in print. Confirm descriptor readability in the final output. The wordmark and symbol are outlined vectors; the descriptor is live text using Arial with Helvetica and sans-serif fallbacks.

Favicon: use the square symbol, checked at 16, 24 and 32 pixels. Use the same symbol for app shortcuts and avatars. For monochrome printing, use the black master so recognition never depends on gold.

Do not stretch the artwork, add shadows, reduce opacity, or place it over a busy photograph. Use the white master on dark backgrounds when a single-colour treatment is required.

## Website rollout

All 15 public pages use the same primary header and reversed footer. The organisation schema uses the full logo. Browser icons, app manifest and social cards use matching artwork. The refinement is prepared on `refine/anlaq-logo`; production publication is a separate release step.
