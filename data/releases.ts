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
    version: "v0.5.1",
    codename: "Demo Governance & Patient Guardrails",
    date: "October 2026",
    badge: "CURRENT RELEASE",
    summary:
      "Introduces mandatory demonstration safety banners and one-time first-launch legal compliance acknowledgments to prevent real patient data entry pending clinic legal review.",
    highlights: [
      "Persistent Top Demo Banner: Amber compliance banner pinned across all screens stating 'Demo version: pending legal review. Do not enter real patient information.'",
      "Legal Reason Subtext: Displays secondary notice: 'Real-patient use will be enabled only after the clinic’s legal review is complete.'",
      "First-Launch Acknowledgment Dialog: One-time mandatory consent modal with '[ I understand ]' confirmation enforcing invented test patients only",
      "Client-Side Compliance State: Cleanly persisted via local storage to ensure physician acknowledgment on initial workstation deployment",
      "Hardened Deterministic Runtime: Continued zero-egress architecture with 100% physician authority and local AES-256-GCM storage",
    ],
  },
  {
    version: "v0.5.0",
    codename: "Pure Deterministic Clinical Workstation",
    date: "October 2026",
    badge: "PREVIOUS RELEASE",
    summary:
      "Transition to a pure deterministic, privacy-first local clinical desktop workstation. All generative AI models, cloud LLMs, and prompt pipelines are completely removed in favor of 100% physician authority, deterministic rule-based clinical extraction, and hardware-bound AES-256-GCM storage with zero network egress.",
    highlights: [
      "100% Deterministic Architecture: Complete elimination of probabilistic LLMs and hallucination vectors",
      "Zero Cloud Egress: Cloud Gemini REST clients, API key vaults, rotation pools, and LLM routes permanently removed",
      "Deterministic Clinical Extraction: Regex and rule-based parsing automatically stages prescription and lab tickets from encounter notes",
      "Hardened Loopback IPC: Sub-second desktop response times across all clinical encounters, patient artifacts, and Kanban boards",
      "Strict Regulatory Compliance: Full alignment with Indian IT Act 2000 Section 43A and DPDP Act 2023 with zero third-party data processor liabilities",
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
