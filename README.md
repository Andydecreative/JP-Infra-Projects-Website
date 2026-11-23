# JP Infra Projects website package

A complete responsive multi-page static website prototype with shared header/footer, 5 service pages, contact page, about page, and custom 404.

## Pages
- `index.html` Home
- `about.html` About Us
- `services.html` Services overview
- `mining.html` Mining and Quarry Operations
- `infrastructure.html` Infrastructure Projects
- `villas.html` Villa Projects
- `dams.html` Dams and Reservoirs
- `irrigation.html` Irrigation Projects
- `contact.html` Contact Us
- `404.html` Custom not-found page

## Run
Open `index.html` directly, or serve this folder through a static web server (recommended). Example: `python3 -m http.server 8000`.

## Brand logo
The official supplied SVG mark is used in the shared header, footer brand panel and favicon.

## Photography limitation
External network/DNS was unavailable in the packaging environment. Curated Unsplash image URLs are wired in as remote image sources but could not be downloaded or visually verified. Before production, download/licence and optimise the photos into `assets/images/`, replace remote image URLs with local WebP paths, and verify every image load. The source URL notes are in `assets/images/PHOTO_SOURCES.txt`.
## Contact form
The current static form uses `mailto:` as a no-backend fallback. Replace with a real form service/backend before launch if a seamless form submission experience is required.
## Note
The static Google Maps embed is responsive. The supplied address and contact details are used in contact/footer.
