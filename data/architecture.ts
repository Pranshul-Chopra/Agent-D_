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
    technologies: ["Python 3.13", "Flask 3", "PyInstaller 6", "SSE Streaming"],
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
    name: "De-Identification Perimeter",
    description:
      "Local cryptographic alias scrubber that substitutes legal patient names with tokens (e.g. PT-1042) prior to external model synthesis.",
    technologies: ["Regex Scrubber", "Alias Table", "Audit Logger", "Memory-only mapping"],
    metrics: ["Zero Cloud PII", "Deterministic reversibility locally", "Tamper-evident audit trail"],
  },
  {
    layer: "05",
    name: "Sovereign Local LLM Engine",
    description:
      "Pluggable on-device inference coordinator running local models via Ollama strictly over 127.0.0.1:11434 loopback, backed by embedded rule-based clinical synthesis with zero external network egress.",
    technologies: ["Ollama (Loopback)", "Llama 3.2 / Qwen 2.5", "Local Rule Engine", "Zero Egress Choke"],
    metrics: ["100% On-device processing", "127.0.0.1:11434 loopback only", "Air-gapped clinical fallback"],
  },
];
