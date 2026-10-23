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
    version: "v0.5.0",
    codename: "Sovereign Air-Gapped AI & Local Ollama",
    date: "October 2026",
    badge: "CURRENT RELEASE",
    summary:
      "Eliminates cloud AI legal and regulatory exposure under the IT Act 2000 and DPDP Act 2023 with a 100% On-Device Sovereign Architecture powered by local Ollama on loopback, hardened prompt boundaries, and persistent pre-clinical demo guardrails.",
    highlights: [
      "100% On-Device Sovereign Architecture: Pluggable BaseLLMProvider interface with hardened OllamaProvider bound strictly to loopback (127.0.0.1:11434)",
      "Zero Cloud Egress: Cloud Gemini REST clients, cloud key vaults, key rotation, and /keys endpoints permanently eliminated from runtime",
      "Embedded Air-Gapped Clinical Synthesis: Graceful automatic fallback ensuring uninterrupted consultation briefs and ticket generation without external models",
      "Network Audit & Compliance: Disabled automatic background updater polling; zero external CDNs, Google Fonts, or telemetry beacons",
      "Persistent Demo Guardrail: Prominent amber warning banner across UI ('Demo only: no real patient data — pending legal review')",
    ],
  },
  {
    version: "v0.4.0",
    codename: "In-View Context Scoping & CI/CD Hardening",
    date: "October 2026",
    badge: "PREVIOUS RELEASE",
    summary:
      "Major contextual workflow evolution shifting patient scoping directly into Copilot and Artifacts Studio, real-time dynamic SQLite context synchronization across all modules, and hardened CI/CD release automation.",
    highlights: [
      "In-View Patient Scoping: Interactive patient context switcher directly in Copilot header supporting General Practice Copilot and individual charts (PT-XXXX)",
      "Dedicated Artifacts Studio Directory: Empty-state chart selector grid with instant demographic search and in-header [Switch Chart ▾] dropdown",
      "Real-Time Dynamic Context Sync: Per-turn SQLite prompt injection in Copilot pulling live artifacts, recent vitals, open tickets, and today's schedule",
      "Clinical Dashboard Prioritization: Promoted Clinical Calendar & Agenda directly beneath quick metrics, anchoring pre-visit briefs beneath daily schedule",
      "CI/CD Pipeline Hardening: Zero-timeout GitHub Actions release workflow with offline electron-builder packaging, UPX disabled, and softprops/action-gh-release@v2",
    ],
  },
  {
    version: "v0.3.0",
    codename: "Clinical Doctor Contextual Platform",
    date: "October 2026",
    badge: "STABLE RELEASE",
    summary:
      "Production-ready deployment featuring a zero-friction one-click setup installer, hardened TypeScript validation across all modules, and dedicated platform landing page.",
    highlights: [
      "Smooth One-Click Setup: silent installation to user space with desktop and start menu shortcuts",
      "AI Engine Setup Guides: In-app guide for Google AI Studio Gemini API key acquisition and local Ollama setup with side-by-side trade-offs",
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
