// ============================================================================
// ARTIST CONFIGURATION
// This is the ONLY file you need to modify to customize this website.
// Fill in your information below and the site will be built accordingly.
// Fields marked [REQUIRED] must be filled. Optional sections can be disabled
// by setting enabled: false or leaving fields as null.
// ============================================================================

// --- Types -------------------------------------------------------------------

export interface StreamingLink {
  platform: string;
  url: string;
  label?: string;
}

export interface ContactEntry {
  label: string;
  value?: string;
  email?: string;
}

export interface ArtistConfig {
  name: string;
  logotype: string | null;
  favicon: string;
  seo: {
    title: string;
    description: string;
    ogImage: string | null;
    keywords: string[];
    siteUrl: string;
  };
}

export interface ThemeConfig {
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  fontHeading: string;
  fontBody: string;
}

export interface SocialsConfig {
  spotify?: string | null;
  appleMusic?: string | null;
  youtube?: string | null;
  instagram?: string | null;
  tiktok?: string | null;
  twitter?: string | null;
  facebook?: string | null;
  soundcloud?: string | null;
  bandcamp?: string | null;
  tidal?: string | null;
  linktree?: string | null;
}

export interface HeroConfig {
  backgroundImage: string | null;
  particleColor?: string;
}

export interface LatestReleaseConfig {
  enabled: boolean;
  tagline: string;
  title: string;
  image: string;
  imageAlt: string;
  streamingLinks: StreamingLink[];
}

export interface TopTracksConfig {
  enabled: boolean;
  spotifyEmbedUrl: string;
}

export interface TourDatesConfig {
  enabled: boolean;
  bandsintown: {
    artistName: string;
  };
}

export interface NewsletterConfig {
  enabled: boolean;
  heading: string;
  subheading: string;
  formActionUrl: string;
  emailFieldName: string;
}

export interface AboutConfig {
  heading: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export interface ContactConfig {
  heading: string;
  entries: ContactEntry[];
}

// --- Configuration -----------------------------------------------------------

/** [REQUIRED] Core artist information */
export const artist: ArtistConfig = {
  name: "Swirlx",
  logotype: "/images/Swirlx logotype white.svg",
  favicon: "/favicon.svg",
  seo: {
    title: "Swirlx | Official Website",
    description: "Official website of Swirlx. Discover music, shows, and more.",
    ogImage: "/images/ogImage.png",
    keywords: ["swirlx", "music", "artist", "electronic"],
    siteUrl: "https://swirlxmusic.com",
  },
};

/** [REQUIRED] Visual theme — colors and fonts */
export const theme: ThemeConfig = {
  primaryColor: "#ffffff",
  accentColor: "#6c63ff",
  backgroundColor: "#0a0a0a",
  surfaceColor: "#141414",
  textColor: "#e0e0e0",
  fontHeading: "Outfit",
  fontBody: "Inter",
};

/**
 * Social / platform links.
 * Set a platform to null or remove it to hide its icon.
 */
export const socials: SocialsConfig = {
  spotify: "https://open.spotify.com/artist/0aMStIm5O84kBbnZWsukHW",
  appleMusic: null,
  youtube: null,
  instagram: "https://www.instagram.com/swirlxmusic",
  tiktok: null,
  twitter: null,
  facebook: null,
  soundcloud: null,
  bandcamp: null,
  tidal: null,
  linktree: null,
};

/** Links that control nav visibility */
export const externalLinks = {
  merch: null as string | null,
  epk: null as string | null,
};

/** Hero section — set backgroundImage to an image path, or null for particle animation */
export const hero: HeroConfig = {
  backgroundImage: null,
  particleColor: "#6c63ff",
};

/** [OPTIONAL] Latest music release CTA */
export const latestRelease: LatestReleaseConfig = {
  enabled: true,
  tagline: "OUT NOW",
  title: "Chasing Fire",
  image: "/images/Chasing Fire.png",
  imageAlt: "Chasing Fire artwork",
  streamingLinks: [
    { platform: "spotify", url: "https://open.spotify.com/track/7w8xfJYoc2Hi6VfZLvd8JS?si=3d7b50ad97e9411c", label: "Spotify" },
    // { platform: "appleMusic", url: "https://music.apple.com/...", label: "Apple Music" },
  ],
};

/** [OPTIONAL] Spotify top tracks embed */
export const topTracks: TopTracksConfig = {
  enabled: true,
  spotifyEmbedUrl: "https://open.spotify.com/embed/artist/0aMStIm5O84kBbnZWsukHW?utm_source=generator&theme=0",
};

/** [OPTIONAL] Tour dates via Bandsintown widget */
export const tourDates: TourDatesConfig = {
  enabled: true,
  bandsintown: {
    artistName: "id_10442627", // Artist ID can be found in the Bandsintown URL. Example: https://www.bandsintown.com/a/15606169
  },
};

/** [OPTIONAL] Newsletter signup */
export const newsletter: NewsletterConfig = {
  enabled: true,
  heading: "Newsletter",
  subheading: "Get updates on new releases, shows, and more.",
  formActionUrl: "",
  emailFieldName: "email",
};

/** [REQUIRED] About section */
export const about: AboutConfig = {
  heading: "About",
  bio: "<p>Arjun Vellanki, who goes by the stage name Swirlx, is a Washington, D.C. based musician, DJ, and producer who was raised in India and has pursued music throughout his life. From playing piano at a young age to learning how to produce electronic music in 2019, his journey has always been rooted in emotion and connection.</p>" + 
       "<p>Now emerging as an upcoming artist, Swirlx is driven by a passion to create music that speaks to the heart, writing tracks that allow listeners to get lost in their emotions and feel understood. Fusing melodic bass with melodies that are both beautiful and aching, Swirlx crafts songs for those navigating the highs and lows of life, offering a place to escape, reflect, and heal. <3</p>",
  image: "/images/Swirlx.png",
  imageAlt: "Swirlx Artist photo",
};

/** [REQUIRED] Contact section */
export const contact: ContactConfig = {
  heading: "Contact",
  entries: [
    { label: "General Inquiries", email: "swirlxmusic@gmail.com" },
    { label: "Booking", email: "booking@swirlxmusic.com" },
  ],
};
