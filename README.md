# JP INFRA Projects website

A two-page responsive website built with plain HTML, CSS and JavaScript.

## Files
- `index.html` — Home page
- `about.html` — About JP INFRA page
- `assets/css/styles.css` — Shared styles and responsive layouts
- `assets/js/main.js` — Mobile navigation, reveal animations and dynamic footer year

## Preview locally
Open `index.html` in a browser. No build step or package installation is required.

## Before publishing
1. The supplied JP INFRA geometric logo mark is installed at `assets/images/jp-infra-logo.svg`; the wordmark remains editable website text.
2. Confirm the contact details, annual turnover statement and office address.
3. Replace the remote Unsplash photo URLs with approved company/project photography where available.
4. Add the final domain and hosting configuration.

The website currently uses external Unsplash image URLs and Google Fonts, so an internet connection is needed for those assets to load.


## Brand typography
The JP INFRA wordmark in the shared header and footer now requests the `Intro` typeface, matching the letterhead's embedded font identification (`Intro`). Manrope / Arial Black are fallbacks. For consistent rendering on every visitor's device, add the licensed Intro webfont (WOFF2) to `assets/fonts/` and define it with `@font-face` in `assets/css/styles.css`. The PDF's embedded font is a subset and is not suitable as a complete website font file.


## Logo sizing
The supplied SVG logo mark has been enlarged to 48 × 56 px in the desktop header/footer and 40 × 47 px on mobile, with spacing adjusted for clear visibility.


## Mining photography
The supplied mining and quarry photographs replace the previous external stock-image URLs. Images are stored locally in `assets/images/` and are assigned to the homepage hero, capability cards, contact band, About hero, About image strip, people/operations visual, and vision background according to their subject.


## Wordmark update
The separate icon and stacked text lockup have been replaced in both pages with a single-line `J P INFRA PROJECTS` wordmark, matching the letterhead layout. The wordmark uses Intro as its preferred typeface, with Manrope and Arial Black fallbacks.


## Combined brand lockup
The original supplied JP INFRA logo mark is displayed beside the single-line `J P INFRA PROJECTS` wordmark in the header and footer on both pages. The logo mark is 46 × 50 px on desktop and 36 × 40 px on mobile. Intro remains the preferred wordmark typeface, with fallback fonts configured.


## Footer logo layout
In the footer, the logo mark is stacked above `J P INFRA PROJECTS`. The mark is sized to the wordmark width for a balanced vertical brand lockup. The horizontal logo-plus-wordmark lockup remains unchanged in the header.


## Footer refinements
The footer logo mark and `J P INFRA PROJECTS` wordmark are now centre-aligned. The wordmark is larger, and the brand statement “Built on strength. Driven by progress.” sits beneath it. Email and phone icons have been added beside the corresponding contact links.


## Expanded service website (2026 update)
- Home page now features an automatically rotating, touch-friendly services carousel linking to service detail pages.
- Added Services overview and individual service pages: mining, infrastructure, villas, dams & reservoirs, irrigation.
- Shared header/footer/navigation, responsive styles, simple transitions, keyboard-focusable controls and reduced-motion support.
- Service-page copy is draft positioning and should be reviewed against confirmed company scope.
- Non-mining service visuals currently reuse the provided mining/site photos as temporary imagery; replace with genuine service/project photos before public launch to avoid implying specific project photos.
