/**
 * Centralized Configuration Pool for Agent-D Landing Page
 *
 * Controlled by a single config flag (DEMO_BANNER = true) that only the owner changes.
 */

export const DEMO_BANNER = true;

export const SITE_CONFIG = {
  // Demo Banner Flag
  demoBanner: DEMO_BANNER,
  demoBannerText:
    "Demo build · pending legal review · not for use with real patient information.",

  // Release Info
  version: "v0.5.0",
  versionStatusChip: "v0.5.0 · Demo build · synthetic data only",
  releaseDate: "October 2026",
  platform: "Windows 10 / 11, 64-bit",

  // Demo Release Asset
  demoDownloadUrl: "https://github.com/Pranshul-Chopra/Agent-D/releases",

  // Repository & Social URLs
  githubRepoUrl: "https://github.com/Pranshul-Chopra/Agent-D",
  linkedinUrl: "https://www.linkedin.com/in/pranshul-chopra-269789371/",
  email: "pranshulchopra@gmail.com",

  // Metadata
  siteUrl: "https://agent-d.vercel.app",
  productName: "Agent-D",
  tagline: "A local-first practice workspace for physicians.",
  creator: "Pranshul Chopra",
} as const;

export type SiteConfig = typeof SITE_CONFIG;
