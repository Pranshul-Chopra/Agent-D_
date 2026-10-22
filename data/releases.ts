export interface ReleaseLog {
  version: string;
  codename: string;
  date: string;
  badge: string;
  summary: string;
  highlights: string[];
}

export const RELEASE_HISTORY: ReleaseLog[] = [
  {
    version: "v0.3.0",
    codename: "Clinical Doctor Contextual Platform",
    date: "October 2026",
    badge: "CURRENT RELEASE",
    summary:
      "Production-ready deployment featuring a zero-friction one-click setup installer, hardened TypeScript validation across all modules, and dedicated platform landing page.",
    highlights: [
      "Smooth One-Click Setup: silent installation to user space with desktop and start menu shortcuts",
      "Strict TypeScript hardening: zero typecheck errors across all clinical components",
      "Dedicated marketing and architectural landing page showcasing verified platform capabilities",
    ],
  },
  {
    version: "v0.2.0",
    codename: "Clinical Agility & Encounters",
    date: "October 2026",
    badge: "MAJOR FEATURE RELEASE",
    summary:
      "Expanded clinical agility with an interactive 7-column calendar widget, standalone consultations hub, keyboard-driven slash command palette, and full CRUD approval-first engine.",
    highlights: [
      "7-column practice calendar on dashboard with today jump and blue/amber clinical indicator dots",
      "Dedicated Consultations module decoupled from home dashboard for live encounter dictation",
      "Copilot slash (/) command palette with keyboard navigation (/consultation, /brief, /note, etc.)",
      "Approval-first CRUD mutation executor enforcing physician sign-off across all clinical records",
    ],
  },
  {
    version: "v0.1.0",
    codename: "Clinical Vault",
    date: "October 2026",
    badge: "INITIAL RELEASE",
    summary:
      "The foundational release establishing the privacy-first local clinical desktop workstation with AES-256-GCM storage and Gemini multi-key rotation.",
    highlights: [
      "Hardware-bound AES-256-GCM encryption at rest with PBKDF2 derivation",
      "Automated cryptographic alias mapper ensuring Zero Cloud PII leakage",
      "Structured Patient Context Artifacts with immutable version snapshots and visual diffs",
      "Multi-Key Gemini rotation pool with automatic 60-second rate-limit cooldown failover",
    ],
  },
];
