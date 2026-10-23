"use client";

import { useState } from "react";
import { Download, ShieldCheck, Stethoscope, Terminal, ArrowRight, Lock, Calendar, Activity, FileText, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  const [activePreview, setActivePreview] = useState<"dashboard" | "calendar" | "consultations" | "artifacts" | "proposals">("dashboard");

  const previewTabs = [
    { id: "dashboard", label: "Practice Dashboard", icon: Activity },
    { id: "calendar", label: "Practice Calendar", icon: Calendar },
    { id: "consultations", label: "Live Encounters", icon: Stethoscope },
    { id: "artifacts", label: "Living Artifacts", icon: FileText },
    { id: "proposals", label: "Approval Safety Gate", icon: ShieldCheck },
  ] as const;

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern bg-[#FAFAFC]">
      {/* Soft Ambient Radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] lg:w-[850px] h-[340px] sm:h-[450px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs text-[#2563EB] mb-6 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
        </span>
        <span className="font-mono text-[0.72rem] tracking-wider uppercase font-semibold">
          {SITE_CONFIG.version} Released · Windows 10/11 Desktop
        </span>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
          The Privacy-First Clinical Workspace for{" "}
          <span className="text-[#2563EB] underline decoration-blue-200 decoration-wavy underline-offset-8">
            Attending Physicians
          </span>
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          100% on-device clinical workstation. Protected by a hardware-bound{" "}
          <strong className="text-slate-800 font-semibold">AES-256-GCM vault</strong>, deterministic{" "}
          <strong className="text-slate-800 font-semibold">rule-based clinical extraction</strong>, doctor-in-the-loop proposals, and{" "}
          <strong className="text-slate-800 font-semibold">zero network egress</strong>.
        </p>
      </div>

      {/* Primary CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-12">
        <a
          href={SITE_CONFIG.setupDownloadUrl}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/25 hover:shadow-lg"
        >
          <Download className="w-4 h-4" />
          <span>Download One-Click Setup ({SITE_CONFIG.version})</span>
        </a>

        <a
          href={SITE_CONFIG.portableDownloadUrl}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all shadow-sm"
        >
          <Lock className="w-4 h-4 text-slate-600" />
          <span>Standalone Portable Executable</span>
        </a>
      </div>

      {/* Architecture Highlights Bar */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 mb-12 font-medium">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>100% Deterministic (Zero AI)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Lock className="w-4 h-4 text-[#2563EB]" />
          <span>Zero Network Egress</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Terminal className="w-4 h-4 text-slate-700" />
          <span>Loopback http://127.0.0.1:5050</span>
        </div>
      </div>

      {/* Live Application Window Mockup */}
      <div className="w-full max-w-5xl rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden">
        {/* Mockup Titlebar */}
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-2 font-mono text-xs font-semibold text-slate-700">Agent-D {SITE_CONFIG.version} · Sovereign Clinical Vault</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Deterministic Workstation · 127.0.0.1:5050
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="px-4 py-2.5 bg-white border-b border-slate-100 flex items-center gap-2 overflow-x-auto">
          {previewTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activePreview === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePreview(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mockup Content Panels */}
        <div className="p-6 bg-slate-50 min-h-[380px] flex flex-col justify-center">
          {activePreview === "dashboard" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
                <span className="font-semibold">Practice Census: 28 Active Patients · AES-256-GCM Vault Locked</span>
                <span className="font-mono text-blue-700 font-medium">Sub-50ms Local REST</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Today's Visits</div>
                  <div className="text-xl font-bold text-slate-900 mt-1">4 Consultations</div>
                  <div className="text-[11px] text-emerald-600 font-medium mt-0.5">1 Completed · 1 In Progress</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Unreviewed Charts</div>
                  <div className="text-xl font-bold text-slate-900 mt-1">2 Artifacts</div>
                  <div className="text-[11px] text-blue-600 font-medium mt-0.5">Staged changes pending review</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Follow-up Board</div>
                  <div className="text-xl font-bold text-slate-900 mt-1">3 Open Tickets</div>
                  <div className="text-[11px] text-amber-600 font-medium mt-0.5">1 Urgent lab follow-up</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2 border-l-4 border-l-[#2563EB]">
                <div className="text-xs font-semibold text-[#2563EB] flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Next Patient Encounter Pointer</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">Scheduled: 10:00 AM</span>
                </div>
                <div className="text-xs text-slate-700 leading-relaxed flex items-center justify-between pt-1">
                  <div>
                    <span className="font-bold text-slate-900">Patient PT-1042</span> · Essential Hypertension &amp; Type 2 Diabetes follow-up (3-month review).
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-semibold shadow-xs hover:bg-[#1D4ED8]">
                    Start Encounter
                  </button>
                </div>
              </div>
            </div>
          )}

          {activePreview === "calendar" && (
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">7-Column Clinical Calendar &amp; Agenda</h4>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  PranshulOS Agenda Engine
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center font-mono text-[11px] text-slate-500 py-1 border-b border-slate-100">
                <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                <span className="py-2 text-slate-300">28</span>
                <span className="py-2 text-slate-300">29</span>
                <span className="py-2 text-slate-300">30</span>
                <span className="py-2 text-slate-700 font-medium">1</span>
                <span className="py-2 rounded-lg bg-[#2563EB] text-white font-bold ring-2 ring-blue-300">22</span>
                <span className="py-2 text-slate-700 font-medium">23</span>
                <span className="py-2 text-slate-700 font-medium">24</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600" /> 4 Consultations</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> 2 Follow-up Tickets</span>
              </div>
            </div>
          )}

          {activePreview === "consultations" && (
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Active Consultations Management</span>
                <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  1 In Progress · 3 Scheduled
                </span>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">Encounter: PT-1042</div>
                  <div className="text-[11px] text-slate-500">Hypertension quarterly review · 10:00 AM</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">In Progress</span>
                  <button className="px-2.5 py-1 rounded bg-[#2563EB] text-white text-[11px] font-semibold">📝 Dictate Notes</button>
                </div>
              </div>
            </div>
          )}

          {activePreview === "artifacts" && (
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Patient Artifact: PT-1042 (Version 3)</span>
                <span className="text-[11px] font-mono text-slate-500">Immutable Snapshot</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 font-mono text-xs text-slate-800 space-y-1">
                <div><strong>Medications:</strong> Metformin 1000mg BID, Lisinopril 20mg daily</div>
                <div><strong>Active Issues:</strong> Essential Hypertension, Type 2 Diabetes</div>
                <div><strong>Baseline Observations:</strong> BP 124/80 mmHg, Fasting Glucose 106 mg/dL</div>
              </div>
            </div>
          )}

          {activePreview === "proposals" && (
            <div className="p-4 rounded-xl bg-white border border-amber-200 bg-amber-50/40 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Doctor Approval Safety Gate Required</span>
                </div>
                <span className="text-[10px] font-mono uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">
                  Pending Signature
                </span>
              </div>
              <div className="p-2.5 rounded bg-white border border-amber-200 text-xs font-mono text-slate-800">
                + Titrate Lisinopril from 10mg to 20mg daily (BP elevated last 2 visits)
              </div>
              <div className="flex items-center justify-end gap-2 pt-1">
                <button className="px-3 py-1 rounded border border-slate-300 text-slate-700 text-xs font-medium bg-white">Reject</button>
                <button className="px-3 py-1 rounded bg-[#2563EB] text-white text-xs font-semibold shadow-sm">✓ Approve &amp; Commit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
