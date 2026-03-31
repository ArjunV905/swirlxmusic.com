import { artist, theme, about, contact } from "../config/artist";

function fail(field: string, message: string): never {
  throw new Error(
    `[artist.ts] Missing required field "${field}": ${message}\n` +
      `Open src/config/artist.ts and fill in this field before building.`
  );
}

export function validateConfig(): void {
  if (!artist.name?.trim()) {
    fail("artist.name", "Artist name is required.");
  }

  if (!artist.seo.title?.trim()) {
    fail("artist.seo.title", "SEO title is required.");
  }

  if (!artist.seo.description?.trim()) {
    fail("artist.seo.description", "SEO description is required.");
  }

  if (!artist.seo.siteUrl?.trim()) {
    fail("artist.seo.siteUrl", "Site URL is required for SEO and sitemap generation.");
  }

  if (!theme.primaryColor || !theme.backgroundColor || !theme.textColor) {
    fail("theme", "primaryColor, backgroundColor, and textColor are all required.");
  }

  if (!theme.fontHeading?.trim() || !theme.fontBody?.trim()) {
    fail("theme.font*", "Both fontHeading and fontBody are required.");
  }

  if (!about.heading?.trim()) {
    fail("about.heading", "About section heading is required.");
  }

  if (!about.bio?.trim()) {
    fail("about.bio", "About section bio text is required.");
  }

  if (!about.image?.trim()) {
    fail("about.image", "About section image path is required.");
  }

  if (!about.imageAlt?.trim()) {
    fail("about.imageAlt", "About section image alt text is required for accessibility.");
  }

  if (!contact.heading?.trim()) {
    fail("contact.heading", "Contact section heading is required.");
  }

  if (!contact.entries || contact.entries.length === 0) {
    fail("contact.entries", "At least one contact entry is required.");
  }

  for (const [i, entry] of contact.entries.entries()) {
    if (!entry.label?.trim()) {
      fail(`contact.entries[${i}].label`, "Each contact entry needs a label.");
    }
    if (!entry.email?.trim() && !entry.value?.trim()) {
      fail(
        `contact.entries[${i}]`,
        "Each contact entry needs at least an email or a value."
      );
    }
  }
}
