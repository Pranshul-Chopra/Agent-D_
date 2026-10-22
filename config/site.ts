/**
 * Centralized Configuration Pool for Agent-D Landing Page
 *
 * Update this file when releasing new versions or updating external URLs.
 */

export const SITE_CONFIG = {
  // Current Release Info
  version: "v0.3.0",
  versionLabel: "v0.3.0 Clinical Contextual Platform",
  releaseDate: "October 2026",
  platform: "Windows 10 / 11 (x64)",

  // Desktop Executables
  setupDownloadUrl:
    "https://github.com/Pranshul-Chopra/Agent-D/releases/download/v0.3.0/Agent-D-Setup-0.3.0.exe",
  portableDownloadUrl:
    "https://github.com/Pranshul-Chopra/Agent-D/releases/download/v0.3.0/Agent-D-Portable-0.3.0.exe",

  // Local Security Architecture Specs
  localVaultPath: "%LOCALAPPDATA%\\AgentD\\context.db",
  loopbackHost: "http://127.0.0.1:5050",
  encryptionStandard: "AES-256-GCM Hardware-Bound PBKDF2",

  // Repository & Social URLs
  githubRepoUrl: "https://github.com/Pranshul-Chopra/Agent-D",
  githubReleasesUrl: "https://github.com/Pranshul-Chopra/Agent-D/releases",
  linkedinUrl: "https://www.linkedin.com/in/pranshul-chopra-269789371/",
  email: "pranshulchopra@gmail.com",

  // Metadata & Site Details
  siteUrl: "https://agent-d.vercel.app",
  productName: "Agent-D",
  tagline: "Conversational-First Clinical Workspace for Attending Physicians",
  creator: "Pranshul Chopra",
} as const;

export type SiteConfig = typeof SITE_CONFIG;
