"use client";

import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { RELEASE_HISTORY } from "@/data/releases";

export function CurrentState() {
  const shipped = [
    "Hardware-bound AES-256-GCM Local Vault (%LOCALAPPDATA%\\AgentD\\context.db)",
    "Cryptographic Alias Scrubber replacing legal names with PT-XXXX tokens",
    "Loopback architecture binding strictly to http://127.0.0.1:5050",
    "Doctor-in-Control Proposal Safety Gate with visual diff inspections",
    "Conversational Clinical Copilot with SSE token streaming & slash commands",
    "7-Column Interactive Practice Calendar with today jump & dot indicators",
    "Standalone Consultations & Live Encounters module for clinical dictation",
    "Living Patient Context Artifacts with immutable version history",
    "Multi-Key Gemini Inference Gateway with 60s rate-limit cooldown rotation",
    "Clinical Follow-ups Kanban Board for lab orders and recall tracking",
    "Smooth One-Click Setup Installer & Standalone Portable Executable",
  ];

  const upcomingMilestone6 = [
    "Encrypted Database Backup & Restore Engine (.agentd_backup archive export/import)",
    "LLM Call Inspector & Zero-PII Real-Time Audit Viewer",
    "Automated Pre-Visit 3-Bullet Briefing Engine & Windows Notifications",
  ];

  return (
    <section id="releases" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Transparency &amp; Status
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
          Shipped Reality vs Roadmap Horizon
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          We only promise what has been compiled and verified in the codebase today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Shipped v0.3.0 */}
        <div className="p-8 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Shipped &amp; Active (v0.3.0)</span>
            </h3>
            <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
              Verified In Code
            </span>
          </div>
          <p className="text-xs text-slate-600">All features below are compiled into the Windows binaries and available now.</p>
          <div className="space-y-2.5 pt-2">
            {shipped.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone 6 Roadmap */}
        <div className="p-8 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
              <span>Milestone 6: Hardening &amp; Polish</span>
            </h3>
            <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-blue-50 text-[#2563EB] border border-blue-200">
              Next In Pipeline
            </span>
          </div>
          <p className="text-xs text-slate-600">Upcoming engineering deliverables following the core specification.</p>
          <div className="space-y-3 pt-2">
            {upcomingMilestone6.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 flex items-start gap-2.5 text-xs text-slate-800">
                <Clock className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Release Changelog Timeline */}
      <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Release Evolution Log</h3>
        <div className="space-y-6 divide-y divide-slate-100">
          {RELEASE_HISTORY.map((rel) => (
            <div key={rel.version} className="pt-6 first:pt-0 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-bold text-slate-900">{rel.version}</span>
                <span className="text-xs font-semibold text-slate-700 font-mono">({rel.codename})</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] border border-blue-200">
                  {rel.badge}
                </span>
                <span className="text-xs text-slate-400 ml-auto">{rel.date}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{rel.summary}</p>
              <div className="space-y-1 pt-1">
                {rel.highlights.map((h, i) => (
                  <div key={i} className="text-[11px] text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
