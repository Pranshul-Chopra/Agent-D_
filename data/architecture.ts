export interface ArchitectureLayer {
  layer: string;
  name: string;
  description: string;
  technologies: string[];
  metrics: string[];
}

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    layer: "01",
    name: "Native Desktop Shell",
    description:
      "Electron 44 desktop container with context isolation, strict CSP, sandbox enabled, and automated lifecycle process supervision.",
    technologies: ["Electron 44", "Node 20", "IPC Bridge", "electron-updater"],
    metrics: ["Port discovery 5050–5065", "Zero Node in renderer", "Single-instance lock"],
  },
  {
    layer: "02",
    name: "Headless Clinical Engine",
    description:
      "A local Python 3.13 Flask service compiled into a standalone headless executable via PyInstaller. Binds strictly to 127.0.0.1 loopback.",
    technologies: ["Python 3.13", "Flask 3", "PyInstaller 6", "Loopback REST"],
    metrics: ["Zero public interfaces", "Dynamic 32-byte bearer token", "Sub-20ms local REST latency"],
  },
  {
    layer: "03",
    name: "Local Cryptographic Vault",
    description:
      "Hardware-bound SQLite database with Write-Ahead Logging (WAL) and AES-256-GCM encryption at rest for patient records and consultation dictations.",
    technologies: ["SQLite WAL", "AES-256-GCM", "PBKDF2 Derivation", "cryptography (OpenSSL)"],
    metrics: ["Zero cloud storage", "%LOCALAPPDATA% vault", "Immutable version snapshots"],
  },
  {
    layer: "04",
    name: "De-Identification & Alias Perimeter",
    description:
      "Local cryptographic alias mapper that assigns non-colliding tokens (e.g. PT-1042) to protect patient identity across all views and local storage.",
    technologies: ["Cryptographic Alias Table", "PBKDF2 Salt", "Audit Logger", "Decoupled Identifier Mapping"],
    metrics: ["Zero Cloud PII", "Deterministic reversibility locally", "Tamper-evident audit trail"],
  },
  {
    layer: "05",
    name: "Deterministic Clinical Synthesis",
    description:
      "Fast rule-based extraction engine in Python that parses doctor dictation notes with regular expressions to synthesize typed medication, diagnosis, and lab tickets for physician sign-off.",
    technologies: ["Regex Clinical Parser", "Deterministic Rules", "Proposal Staging", "Zero Egress Choke"],
    metrics: ["100% Deterministic execution", "Sub-10ms parsing speed", "Zero hallucination risk"],
  },
];
