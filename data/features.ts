export interface FeatureItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlight: string;
  iconName: string;
  category: "copilot" | "safety" | "clinical" | "security";
  bullets: string[];
}

export const CLINICAL_FEATURES: FeatureItem[] = [
  {
    id: "copilot",
    title: "Conversational Clinical Copilot & In-View Scoping",
    badge: "DECISION SUPPORT",
    description:
      "A dual-pane clinical workbench. On the left, a real-time conversational intelligence agent streams clinical synthesis; on the right, living patient artifacts and practice context stay pinned in view with in-view chart scoping.",
    highlight: "Real-time SSE streaming with live dynamic SQLite context injection",
    iconName: "Bot",
    category: "copilot",
    bullets: [
      "In-view patient context switcher in header: toggle between General Practice and individual charts (PT-XXXX)",
      "Ask natural questions like 'What is on my dashboard today?' or 'Summarize recent HbA1c trends'",
      "Floating slash (/) command palette with keyboard tabbing for rapid dictation (/consultation, /note, /ticket)",
    ],
  },
  {
    id: "safety-gate",
    title: "Doctor-in-the-Loop Proposal Safety Gate",
    badge: "SAFETY PROTOCOL",
    description:
      "The AI never mutates clinical records autonomously. Every suggestion produces a typed, visual diff proposal requiring explicit physician confirmation before committing to the vault.",
    highlight: "Zero autonomous database writes — physician remains final authority",
    iconName: "ShieldCheck",
    category: "safety",
    bullets: [
      "Visual before/after diffs for medication updates, problem lists, and allergies",
      "One-click Approve, Edit, or Reject directly in the chat stream",
      "Immutable audit log records every approved change with doctor timestamp",
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
      "A specialized encounters module decoupled from the dashboard to conduct patient consultations, start live encounters, record encrypted clinical dictation notes, and jump into Copilot context.",
    highlight: "End-to-end encounter lifecycle from check-in to notes archive",
    iconName: "Stethoscope",
    category: "clinical",
    bullets: [
      "Filter by status: Scheduled, In Progress, Completed, Cancelled",
      "Add structured encounter notes saved directly into AES-256 encrypted logs",
      "One-click 'Open in Copilot' instantly primes chat with patient history",
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
    id: "local-ollama",
    title: "100% On-Device Sovereign Ollama Inference",
    badge: "AIR-GAPPED SOVEREIGNTY",
    description:
      "Run state-of-the-art open clinical language models locally via Ollama strictly bound to loopback 127.0.0.1:11434, backed by embedded rule-based clinical synthesis with zero external network calls.",
    highlight: "Zero cloud keys, zero remote transmission, zero cloud API reliance",
    iconName: "Cpu",
    category: "security",
    bullets: [
      "Pluggable BaseLLMProvider interface with hardened loopback OllamaProvider",
      "Strict loopback enforcement (127.0.0.1:11434) rejecting non-local addresses",
      "Automatic graceful fallback to embedded rule-based clinical synthesis",
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
      "Integrated with Copilot proposals for automatic post-consult ticket creation",
    ],
  },
];
