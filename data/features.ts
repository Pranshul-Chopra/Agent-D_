export interface FeatureItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlight: string;
  iconName: string;
  category: "dashboard" | "safety" | "clinical" | "security";
  bullets: string[];
}

export const CLINICAL_FEATURES: FeatureItem[] = [
  {
    id: "practice-dashboard",
    title: "Unified Practice Dashboard & Schedule Hub",
    badge: "CLINICAL DISPATCH",
    description:
      "A centralized practice command hub for the attending physician. Displays active patient metrics, today's schedule agenda, instant encounter launching, and next-patient clinical pointers.",
    highlight: "Sub-second live aggregation of active patients, consults, and follow-ups",
    iconName: "Activity",
    category: "dashboard",
    bullets: [
      "Real-time patient census, unreviewed artifacts tally, and pending follow-up counts",
      "One-click encounter launcher to begin consultations directly from today's schedule",
      "Zero-latency desktop response times (< 50ms) across all practice operations",
    ],
  },
  {
    id: "safety-gate",
    title: "Doctor-in-the-Loop Proposal Safety Gate",
    badge: "SAFETY PROTOCOL",
    description:
      "The workstation never mutates clinical records autonomously. Deterministic rule-based extraction parses encounter notes into typed visual diff proposals requiring explicit physician approval.",
    highlight: "Zero autonomous database writes — physician remains sole clinical authority",
    iconName: "ShieldCheck",
    category: "safety",
    bullets: [
      "Visual before/after diffs for medication updates, problem lists, and allergies",
      "One-click [Approve & Commit] or [Reject] with full audit trail",
      "Deterministic extraction with zero probabilistic hallucinations",
    ],
  },
  {
    id: "calendar",
    title: "Interactive Practice Calendar & Day Agenda",
    badge: "AGENDA WORKBENCH",
    description:
      "A dedicated 7-column clinical calendar on the home dashboard. Displays current-month consult density, today jump navigation, and day agenda with inline check-off tasks.",
    highlight: "Blue dots for consultations · Amber dots for follow-ups",
    iconName: "Calendar",
    category: "clinical",
    bullets: [
      "Quick 'Today' button jumps straight to current clinic schedule",
      "Live task list with instant pending/done toggle and quick-add row",
      "Time-slot blocks synchronized with patient chart aliases",
    ],
  },
  {
    id: "consultations",
    title: "Standalone Consultations & Live Encounters",
    badge: "PATIENT ENCOUNTERS",
    description:
      "A specialized encounters module decoupled from the dashboard to conduct patient consultations, start live encounters, record encrypted clinical dictation notes, and stage differential proposals.",
    highlight: "End-to-end encounter lifecycle from check-in to notes archive",
    iconName: "Stethoscope",
    category: "clinical",
    bullets: [
      "Filter by status: Scheduled, In Progress, Completed, Cancelled",
      "Add structured encounter notes saved directly into AES-256 encrypted logs",
      "Automatic generation of prescription and follow-up lab proposals upon concluding encounter",
    ],
  },
  {
    id: "artifacts",
    title: "Patient Context Artifacts & In-Header Chart Switcher",
    badge: "LIVING CONTEXT",
    description:
      "Replaces static PDF records with living, structured clinical documents per patient: active problems, current medication regimens, watch-for items, and baseline observations.",
    highlight: "Immutable version history with visual side-by-side diffs and quick-switch chart picker",
    iconName: "FileText",
    category: "clinical",
    bullets: [
      "Dedicated empty-state chart directory grid with demographic search and active status badges",
      "In-header [Switch Chart ▾] dropdown for instantaneous switching between patient artifacts",
      "Structured JSON architecture ensuring clean clinical field separation and immutable audit versions",
    ],
  },
  {
    id: "zero-ai-egress",
    title: "100% Deterministic Architecture & Zero Network Egress",
    badge: "PRIVACY SOVEREIGNTY",
    description:
      "Pure deterministic clinical workstation with zero generative AI, zero external model calls, and zero cloud network egress. All data stays strictly on the physician's computer.",
    highlight: "Zero cloud API keys, zero third-party data processors, zero DPDP liability",
    iconName: "ShieldCheck",
    category: "security",
    bullets: [
      "Eliminated all external cloud models, API keys, and background neural pipelines",
      "Strict loopback IPC binding (127.0.0.1:5050) with 32-byte dynamic bearer token",
      "Full compliance with Indian IT Act 2000 Section 43A and DPDP Act 2023",
    ],
  },
  {
    id: "vault-security",
    title: "Hardware-Bound AES-256 Vault & Zero Cloud PII",
    badge: "PATIENT PRIVACY",
    description:
      "Your patient records never leave your local computer. Hosted on loopback 127.0.0.1:5050 with hardware-bound AES-256-GCM encryption at rest and automated alias de-identification.",
    highlight: "Real legal names never transmitted to external AI endpoints",
    iconName: "Lock",
    category: "security",
    bullets: [
      "Cryptographic alias mapper replaces identifiers with tokens (PT-1042)",
      "Dynamic 32-byte per-launch bearer token protects all local HTTP endpoints",
      "Local SQLite vault located strictly in user AppData space",
    ],
  },
  {
    id: "kanban",
    title: "Clinical Follow-ups Kanban Board",
    badge: "TASK MANAGEMENT",
    description:
      "Visual drag-and-drop workflow tracker designed specifically for clinical follow-ups: lab orders, pathology recalls, specialist referrals, and chart reviews.",
    highlight: "Structured columns: To Do, In Progress, Review, Completed",
    iconName: "Kanban",
    category: "clinical",
    bullets: [
      "Drag-and-drop state transitions with priority tags (Urgent, High, Med, Low)",
      "Direct link to associated patient chart alias on every ticket",
      "Integrated with deterministic post-consultation proposals for instant ticket creation",
    ],
  },
];
