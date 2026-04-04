<div align="center">
  <img alt="Logo" src="https://github.com/ArjunV905/swirlxmusic.com/blob/main/public/favicon.svg" width="100" height="100" />
</div>
<h1 align="center">
  swirlxmusic.com
</h1>
<p align="center">
  An artist website built for Swirlx, hosted at <a href="https://swirlxmusic.com" target="_blank">swirlxmusic.com</a>. Built with <a href="https://astro.build" target="_blank">Astro</a>, <a href="https://react.dev/" target="_blank">React</a>, and deployed using <a href="https://vercel.com/" target="_blank">Vercel</a>.
</p>
<p align="center">
  Customize the entire site by editing a single file — `src/config/artist.ts`.
</p>

![demo](https://raw.githubusercontent.com/ArjunV905/swirlxmusic.com/main/public/images/site-preview-thumbnail.jpg)

## Prerequisites

- **Node.js** >= 22.12.0
- Git

---

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/ArjunV905/swirlxmusic.com.git
cd swirlxmusic.com

# 2. Install dependencies
npm install

# 3. Edit src/config/artist.ts with your artist info  !!
#    Edit astro.config.mjs with your website url      !!

# 4. Start the dev server
npm run dev
# Site runs at http://localhost:4321

# 5. Build for production
npm run build

# 6. Preview the production build locally
npm run preview

# 7. [Optional] Generate an Open Graph image for your website (for a website preview when sharing the website link)
./capture-og.bat  # on Windows
./capture-og.sh   # on Mac/Linux
```

---

## Deployment (Vercel)

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Astro — no build settings needed
4. Done. Your site is live.

> Remember to update `artist.seo.siteUrl` and the `site` field in `astro.config.mjs` to match your production domain.

---

## Project Structure

```
├── src/
│   ├── config/
│   │   ├── artist.ts              ← Artist and site information                   [REQUIRED]
│   │   └── newsletter-embed.html  ← Paste your newsletter embed code here
│   ├── layouts/
│   │   └── Layout.astro           ← HTML shell, SEO meta, theme injection
│   ├── components/
│   │   ├── Hero.astro             ← Full-viewport hero section
│   │   ├── ParticleCanvas.tsx     ← Interactive particle animation (React)
│   │   ├── NavLinks.astro         ← Navigation links
│   │   ├── SocialIcons.astro      ← Social media icon row
│   │   ├── LatestRelease.astro    ← New song/album release CTA section
│   │   ├── TopTracks.astro        ← Spotify embed section
│   │   ├── TourDates.astro        ← Bandsintown widget section
│   │   ├── Newsletter.astro       ← Email signup form section
│   │   ├── About.astro            ← Bio + photo section
│   │   ├── Contact.astro          ← Contact entries grid section
│   │   └── Footer.astro           ← Logo + copyright + social links
│   ├── utils/
│   │   ├── validate.ts            ← Build-time validation
│   │   └── sectionStyle.ts        ← Section background helper
│   ├── icons/
│   │   └── *.astro                ← SVG icon components
│   ├── styles/
│   │   └── global.css             ← Reset, typography, section base styles
│   └── pages/
│       └── index.astro            ← Home page (assembles all sections)
├── public/
│   ├── images/                    ← Place your images here
│   ├── fonts/                     ← Place custom font files here (if any)
│   └── favicon.svg                ← Replace with your favicon
├── scripts/
│   └── capture-og.mjs             ← Core script to generate OG image
├── astro.config.mjs               ← Add your website url here                    [REQUIRED]
├── capture-og.bat                 ← og:Image script for Windows
└── capture-og.sh                  ← og:Image script for Mac/Linux
```

---

## `artist.ts` Reference

The config file (`src/config/artist.ts`) has clearly named exports. Here is what each one controls:

### `artist` (required)

| Field | Type | Description |
|---|---|---|
| `name` | `string` | Your artist / project name |
| `logotype` | `string \| null` | Path to a logo image (e.g. `/images/logo.png`). If `null`, the `name` is displayed as text. |
| `favicon` | `string` | Path to your favicon |
| `seo.title` | `string` | Page title shown in browser tab and search results |
| `seo.description` | `string` | Meta description for search engines |
| `seo.ogImage` | `string \| null` | Path to Open Graph image (social sharing thumbnail) |
| `seo.keywords` | `string[]` | SEO keywords |
| `seo.siteUrl` | `string` | Your production URL (e.g. `https://yoursite.com`) |

### `theme` (required)

| Field | Type | Description |
|---|---|---|
| `primaryColor` | `string` | Main text/heading color (hex) |
| `accentColor` | `string` | Accent color for buttons, links, highlights (hex) |
| `backgroundColor` | `string` | Page background color (hex) |
| `surfaceColor` | `string` | Alternate section background (hex) |
| `textColor` | `string` | Body text color (hex) |
| `fontHeading` | `string` | Google Font name for headings (e.g. `"Outfit"`) |
| `fontBody` | `string` | Google Font name for body text (e.g. `"Inter"`) |

### `socials` (optional)

Object with platform keys. Set a platform to a URL string to show its icon, or `null` to hide it.

Supported platforms: `spotify`, `appleMusic`, `youtube`, `instagram`, `tiktok`, `twitter`, `facebook`, `soundcloud`, `bandcamp`, `tidal`, `linktree`

### `externalLinks`

| Field | Type | Description |
|---|---|---|
| `merch` | `string \| null` | URL to merch store. Shows "Shop" in nav when set. |
| `epk` | `string \| null` | URL to EPK PDF. Shows "EPK" in nav when set. |
| `services` | `string \| null` | URL (or path) for services such as Mixing & Mastering. Shows "Services" in nav when set. |

### `hero`

| Field | Type | Description |
|---|---|---|
| `backgroundImage` | `string \| null` | Path to hero background image (e.g. `"/images/hero.jpg"`). `null` for no image. |
| `animationEnabled` | `boolean` | Whether to show the particle animation. Can be combined with `backgroundImage` to overlay particles on top of an image. |
| `particleColor` | `string` | Color of particles in the animation (hex). Defaults to accent color. |
| `navAndSocialColor` | `string \| null` | Optional hex color for hero nav link text and the hero row of social icons (footer social icons are unchanged). `null` for default color. |

### Section Background Customization

Every content section (latestRelease, topTracks, tourDates, newsletter, about, contact) supports two additional fields for background customization:

| Field | Type | Description |
|---|---|---|
| `backgroundColorOverride` | `string \| null` | Override the section's default background color (hex). `null` = use theme default. |
| `backgroundImage` | `string \| null` | Path to a background image for the section. Centered and cropped (cover). `null` = no image. |

Priority: theme color < `backgroundColorOverride` < `backgroundImage`. If a background image is set, it renders on top of the background color (which still shows during image load).

### `latestRelease` (optional)

| Field | Type | Description |
|---|---|---|
| `enabled` | `boolean` | Show/hide this section |
| `tagline` | `string` | CTA text above the release (e.g. `"OUT NOW"`) |
| `releaseType` | `string` | Type label shown above the title (e.g. `"Single"`, `"EP"`, `"Album"`) |
| `title` | `string` | Release title |
| `image` | `string` | Path to album artwork |
| `imageAlt` | `string` | Alt text for the artwork |
| `streamingLinks` | `array` | Array of `{ label, url }` objects (e.g. `{ label: "Spotify", url: "https://..." }`) |

### `topTracks` (optional)

| Field | Type | Description |
|---|---|---|
| `enabled` | `boolean` | Show/hide this section |
| `spotifyEmbedUrl` | `string` | Spotify embed URL (get from Spotify's share > embed) |

### `tourDates` (optional)

| Field | Type | Description |
|---|---|---|
| `enabled` | `boolean` | Show/hide this section. Also controls "Shows" nav link. |
| `bandsintown.artistName` | `string` | Your exact artist name on Bandsintown |

### `newsletter` (optional)

| Field | Type | Description |
|---|---|---|
| `enabled` | `boolean` | Show/hide this section |
| `heading` | `string` | Section heading |
| `subheading` | `string` | Subtitle text |

The newsletter form itself is provided via an **embed code file** at `src/config/newsletter-embed.html`. Paste your provider's embed code (Mailchimp, ConvertKit, Beehiiv, Substack, etc.) into that file. The embed is rendered inside a centered container below the heading and subheading. If the file contains only comments or is empty, no form is shown.

### `about` (required)

| Field | Type | Description |
|---|---|---|
| `heading` | `string` | Section heading |
| `bio` | `string` | Biography text (supports HTML: `<p>`, `<br>`, `<a>`, etc.) |
| `image` | `string` | Path to artist photo |
| `imageAlt` | `string` | Alt text for the photo |

### `contact` (required)

| Field | Type | Description |
|---|---|---|
| `heading` | `string` | Section heading |
| `entries` | `array` | Array of `{ label, value?, email? }` objects. At least one required. |

---

## Adding Images

Place all images in the `public/images/` directory. Reference them in `artist.ts` with paths like `/images/your-file.jpg`.

---

## OG Image Generation

A script is included to automatically generate an Open Graph image (`public/images/ogImage.png`) by screenshotting the site at 1200×630.

### Using the batch script (Windows)

```bash
# Capture from the local dev server (must be running via npm run dev)
.\capture-og.bat

# Capture from the production URL (read from artist.seo.siteUrl)
.\capture-og.bat --prod
```

### Using the batch script (Mac/Linux)

```bash
# Capture from the local dev server (must be running via npm run dev)
.\capture-og.sh

# Capture from the production URL (read from artist.seo.siteUrl)
.\capture-og.sh --prod
```

### Using the node script directly

```bash
# Default — captures from http://localhost:4321
node scripts/capture-og.mjs

# Custom URL
node scripts/capture-og.mjs https://your-site.com
```

### Using the npm shortcut

```bash
npm run og
```

---

## Customization Beyond `artist.ts`

For deeper customization:

- **Styles**: Edit `src/styles/global.css` for base styles, or add scoped `<style>` blocks in individual `.astro` components
- **Layout/SEO**: Edit `src/layouts/Layout.astro`
- **Section order**: Reorder components in `src/pages/index.astro`
- **Icons**: Add new SVG icons in `src/icons/` following the existing pattern
- **Astro config**: `astro.config.mjs` controls build output, integrations, and deployment adapter

---
