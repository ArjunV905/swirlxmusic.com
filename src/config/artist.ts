// ============================================================================
// ARTIST CONFIGURATION
// This is the ONLY file you need to modify to customize this website.
// Fill in your information below and the site will be built accordingly.
// Fields marked [REQUIRED] must be filled. Optional sections can be disabled
// by setting enabled: false or leaving fields as null.
// ============================================================================

// --- Types -------------------------------------------------------------------

export interface StreamingLink {
  label: string;
  url: string;
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
  animationEnabled: boolean;
  particleColor?: string;
  navAndSocialColor?: string | null;
}

export interface SectionStyle {
  backgroundColorOverride?: string | null;
  backgroundImage?: string | null;
}

export interface LatestReleaseConfig extends SectionStyle {
  enabled: boolean;
  tagline: string;
  releaseType: string;
  title: string;
  image: string;
  imageAlt: string;
  streamingLinks: StreamingLink[];
}

export interface TopTracksConfig extends SectionStyle {
  enabled: boolean;
  spotifyEmbedUrl: string;
}

export interface TourDatesConfig extends SectionStyle {
  enabled: boolean;
  bandsintown: {
    artistName: string;
  };
}

export interface NewsletterConfig extends SectionStyle {
  enabled: boolean;
  heading: string;
  subheading: string;
}

export interface AboutConfig extends SectionStyle {
  heading: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export interface ContactConfig extends SectionStyle {
  heading: string;
  entries: ContactEntry[];
}

// --- Main Configuration -----------------------------------------------------------

/** [REQUIRED] Visual theme — colors and fonts */
export const theme: ThemeConfig = {
  primaryColor: "#ffffff",
  accentColor: "#e6214f", // or "#b629de",
  backgroundColor: "#020202",
  surfaceColor: "#090909",
  textColor: "#e0e0e0",

  fontHeading: "Outfit",
  fontBody: "Inter",
};

/** [REQUIRED] Core artist information */
export const artist: ArtistConfig = {
  name: "Swirlx",
  logotype: "/images/Swirlx logotype white.svg",
  favicon: "/favicon.svg",
  seo: {
    title: "Swirlx",
    description: "Official website for DJ & Producer Swirlx. Listen to the latest tracks on Spotify and Apple Music, check tour dates, and more.",
    ogImage: "/images/ogImage.png",
    keywords: ["swirlx", "music", "artist", "electronic", "EDM", "melodic bass", "future bass"],
    siteUrl: "https://swirlxmusic.com",
  },
};

/**
 * Social / platform links.
 * Set a platform to null or remove it to hide its icon.
 */
export const socials: SocialsConfig = {
  spotify: "https://open.spotify.com/artist/0aMStIm5O84kBbnZWsukHW",
  appleMusic: "https://music.apple.com/us/artist/swirlx/1762903367",
  youtube: "https://www.youtube.com/channel/UCpr_X2AXBeK1uID2B8dWnvg",
  instagram: "https://www.instagram.com/swirlxmusic",
  tiktok: "https://www.tiktok.com/@swirlxmusic",
  twitter: null, // "https://x.com/swirlxmusic/",
  facebook: null,
  soundcloud: "https://soundcloud.com/swirlx",
  bandcamp: "https://swirlx.bandcamp.com/",
  tidal: "https://tidal.com/artist/49679136",
  linktree: "https://linktr.ee/swirlx",
};

/** 
 * Additional Links that are displayed in the nav
 * Can be a URL or a local file path. Hidden if null. 
 */
export const externalLinks = {
  merch: null as string | null,
  epk: "/Swirlx EPK.pdf",
  services: "https://soundbetter.com/profiles/621428-swirlx",
};

/** 
 * Hero section 
 * Customize the background image and animation 
 */
export const hero: HeroConfig = {
  backgroundImage: "/images/Chasing Fire Background.jpg",
  animationEnabled: true,
  particleColor: theme.accentColor, // or use Hex codes like "#6c63ff"
  navAndSocialColor: null,          // optional: overrides the nav links and social icons color
};


// --- Sections Configuration -----------------------------------------------------------

/** [OPTIONAL] Latest music release CTA */
export const latestRelease: LatestReleaseConfig = {
  enabled: true,
  tagline: "OUT NOW",
  releaseType: "Single",
  title: "Chasing Fire",
  image: "/images/Chasing Fire.png",
  imageAlt: "Chasing Fire",
  streamingLinks: [
    { label: "Listen Now", url: "https://www.submithub.com/link/swirlx-chasing-fire" },
  ],

  backgroundColorOverride: null,
  backgroundImage: null,
};

/** [OPTIONAL] Spotify top tracks embed */
export const topTracks: TopTracksConfig = {
  enabled: true,
  spotifyEmbedUrl: "https://open.spotify.com/embed/artist/0aMStIm5O84kBbnZWsukHW?utm_source=generator&theme=0",

  backgroundColorOverride: null,
  backgroundImage: null,
};

/** [OPTIONAL] Tour dates via Bandsintown widget */
export const tourDates: TourDatesConfig = {
  enabled: true,
  bandsintown: {
    artistName: "id_15606169", // Artist ID can be found in the Bandsintown URL. Example: https://www.bandsintown.com/a/15606169
  },

  backgroundColorOverride: null,
  backgroundImage: null,
};

/** [OPTIONAL] Newsletter signup — paste embed code in src/config/newsletter-embed.html */
export const newsletter: NewsletterConfig = {
  enabled: false,
  heading: "Newsletter",
  subheading: "Get updates on new releases, shows, and more.",

  backgroundColorOverride: null,
  backgroundImage: null,
};

/** [REQUIRED] About section */
export const about: AboutConfig = {
  heading: "About",
  bio: "<p>Arjun Vellanki, who goes by the stage name Swirlx, is a Washington, D.C. based musician, DJ, and producer who was raised in India and has pursued music throughout his life. From playing piano at a young age to learning how to produce electronic music in 2019, his journey has always been rooted in emotion and connection.</p>" + 
       "<p>Now emerging as an upcoming artist, Swirlx is driven by a passion to create music that speaks to the heart, writing tracks that allow listeners to get lost in their emotions and feel understood. Fusing melodic bass with melodies that are both beautiful and aching, Swirlx crafts songs for those navigating the highs and lows of life, offering a place to escape, reflect, and heal. <3</p>",
  image: "/images/Swirlx.png",
  imageAlt: "Swirlx",

  backgroundColorOverride: null,
  backgroundImage: null,
};

/** [REQUIRED] Contact section */
export const contact: ContactConfig = {
  heading: "Contact",
  entries: [
    { label: "General Inquiries", email: "swirlxmusic@gmail.com" },
    { label: "Booking", email: "booking@swirlxmusic.com" },
  ],

  backgroundColorOverride: null,
  backgroundImage: null,
};
