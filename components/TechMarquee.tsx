"use client";

import { ShieldCheck, Lock, Terminal, Bot, Calendar, Stethoscope, FileText, Key, Kanban, Database } from "lucide-react";

export function TechMarquee() {
  const items = [
    { label: "Hardware-Bound AES-256-GCM Vault", icon: Lock },
    { label: "Zero Cloud PII (PT-XXXX Alias Scrubber)", icon: ShieldCheck },
    { label: "Loopback http://127.0.0.1:5050", icon: Terminal },
    { label: "Doctor-in-the-Loop Proposal Gate", icon: Bot },
    { label: "Multi-Key Gemini Rotation & 60s Cooldown", icon: Key },
    { label: "7-Column Clinical Calendar & Agenda", icon: Calendar },
    { label: "Standalone Consultations & Live Encounters", icon: Stethoscope },
    { label: "Living Patient Context Artifacts & Diff Snapshots", icon: FileText },
    { label: "Follow-ups Kanban Board", icon: Kanban },
    { label: "SQLite WAL Encrypted at Rest", icon: Database },
  ];

  return (
    <div className="w-full py-6 border-y border-slate-200 bg-white overflow-hidden relative select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-infinite gap-8 items-center flex">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 whitespace-nowrap shadow-xs"
            >
              <Icon className="w-4 h-4 text-[#2563EB]" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
