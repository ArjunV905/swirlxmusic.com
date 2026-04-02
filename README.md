# swirlxmusic.com

An artist website built for Swirlx. Built with [Astro](https://astro.build), [React](https://react.dev), and deployable to [Vercel](https://vercel.com) with zero configuration.

**Customize the entire site by editing a single file** — `src/config/artist.ts`.

---

## Features

- Single-page layout with parallax hero, smooth-scroll navigation
- Interactive particle animation background (or custom hero image)
- Full theming — colors, fonts, and backgrounds driven from config
- Modular sections: Latest Release, Top Tracks (Spotify embed), Tour Dates (Bandsintown widget), Newsletter signup, About, Contact
- Optional sections automatically hidden when not configured
- Required fields validated at build time (prevents broken deploys)
- SEO: Open Graph, Twitter Cards, JSON-LD structured data, canonical URLs, sitemap
- Static output for fast load times, Vercel Web Analytics ready
- Responsive and accessible

---

## Prerequisites

- **Node.js** >= 22.12.0
- **npm** (comes with Node)

---

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/ArjunV905/swirlxmusic.com.git
cd swirlxmusic.com

# 2. Install dependencies
npm install

# 3. Edit the config file with your artist info
#    Open src/config/artist.ts in your editor

# 4. Start the dev server
npm run dev
# Site runs at http://localhost:4321

# 5. Build for production
npm run build

# 6. Preview the production build locally
npm run preview
```

---

## Deployment (Vercel)

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Astro — no build settings needed
4. Done. Your site is live.

> Remember to update `artist.seo.siteUrl` and the `site` field in `astro.config.mjs` to match your production domain.

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

Examples:
- Hero background: `/images/hero.jpg`
- Album art: `/images/album-cover.jpg`
- About photo: `/images/about.jpg`
- OG image: `/images/og.png` (recommended: 1200x630px)

---

## Customization Beyond `artist.ts`

For deeper customization:

- **Styles**: Edit `src/styles/global.css` for base styles, or add scoped `<style>` blocks in individual `.astro` components
- **Layout/SEO**: Edit `src/layouts/Layout.astro`
- **Section order**: Reorder components in `src/pages/index.astro`
- **Icons**: Add new SVG icons in `src/icons/` following the existing pattern
- **Astro config**: `astro.config.mjs` controls build output, integrations, and deployment adapter


---

## Project Structure

```
src/
  config/
    artist.ts              ← THE ONLY FILE YOU NEED TO EDIT
    newsletter-embed.html  ← Paste your newsletter provider's embed code here
  layouts/
    Layout.astro       ← HTML shell, SEO meta, theme injection
  components/
    Hero.astro         ← Full-viewport hero section
    ParticleCanvas.tsx ← Interactive particle animation (React)
    NavLinks.astro     ← Navigation links (auto-hides unused)
    SocialIcons.astro  ← Social media icon row
    LatestRelease.astro← New release CTA banner
    TopTracks.astro    ← Spotify embed
    TourDates.astro    ← Bandsintown widget
    Newsletter.astro   ← Email signup form
    About.astro        ← Bio + photo
    Contact.astro      ← Contact entries grid
    Footer.astro       ← Logo + copyright + social links
  utils/
    validate.ts        ← Build-time validation (don't edit)
    sectionStyle.ts    ← Section background helper (don't edit)
  icons/
    *.astro            ← SVG icon components
  styles/
    global.css         ← Reset, typography, section base styles
  pages/
    index.astro        ← Home page (assembles all sections)
public/
  images/              ← Place your images here
  fonts/               ← Place custom font files here (if any)
  favicon.svg          ← Replace with your favicon
```

---
