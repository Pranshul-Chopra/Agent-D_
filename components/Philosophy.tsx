"use client";

import { Lock, ShieldCheck, HeartPulse, UserCheck, Stethoscope, Sparkles } from "lucide-react";

export function Philosophy() {
  const pillars = [
    {
      number: "01",
      title: "Local Machine Sovereignty & Zero Cloud PII",
      badge: "DATA PRIVACY",
      description:
        "Medical records must never be hosted on multi-tenant SaaS clouds or leaked into AI model training corpuses. Agent-D operates strictly on your local PC via 127.0.0.1:5050 with hardware-bound AES-256-GCM encryption at rest.",
      icon: Lock,
      highlight: "Local SQLite Vault: %LOCALAPPDATA%\\AgentD\\context.db",
    },
    {
      number: "02",
      title: "Physician Remains Final Authority",
      badge: "CLINICAL SAFETY",
      description:
        "Autonomous software writes in electronic health records pose severe clinical risk. Agent-D implements an approval-first proposal gate: every prescription adjustment, clinical problem change, or follow-up ticket requires explicit physician signature.",
      icon: ShieldCheck,
      highlight: "Doctor in control: System stages, Physician approves",
    },
    {
      number: "03",
      title: "Structured Living Context over Disjointed Notes",
      badge: "CONTINUITY OF CARE",
      description:
        "Clinic doctors spend 2–3 hours daily hunting through fragmented legacy charts. Agent-D curates living, structured patient artifacts (active issues, medications, watch-for items) with immutable version timelines and instant visual diffs.",
      icon: HeartPulse,
      highlight: "Single-pane-of-glass patient context",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Core Design Philosophy
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
          Built for Physicians Who Refuse to Compromise on Patient Privacy
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          Clinical software should empower diagnostic acumen without surrendering data sovereignty to commercial cloud vendors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.number}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-300">{pillar.number}</span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#2563EB] tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {pillar.badge}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{pillar.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-700 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="truncate">{pillar.highlight}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
