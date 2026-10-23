"use client";

import { Calendar, Stethoscope, Activity, ShieldCheck, Database, ArrowRight } from "lucide-react";

export function UnifiedWorkspace() {
  const steps = [
    {
      step: "01",
      title: "Clinic Agenda",
      icon: Calendar,
      description: "Interactive 7-column calendar surfaces scheduled consults and overdue follow-up tickets.",
    },
    {
      step: "02",
      title: "Live Encounter",
      icon: Stethoscope,
      description: "Start consultation, review pinned patient context artifact, and dictate clinical notes.",
    },
    {
      step: "03",
      title: "Rule Synthesis",
      icon: Activity,
      description: "Deterministic regex rules parse dictation to stage typed proposals (medication changes, labs, artifact diffs).",
    },
    {
      step: "04",
      title: "Safety Gate",
      icon: ShieldCheck,
      description: "Doctor reviews visual before/after diffs and clicks Approve. Zero autonomous writes.",
    },
    {
      step: "05",
      title: "Encrypted Commit",
      icon: Database,
      description: "Artifact version snapshot is sealed in AES-256 local vault and follow-up tickets dispatch to Kanban.",
    },
  ];

  return (
    <section id="workflow" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 bg-slate-50/60 rounded-3xl my-12 border">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Clinical Continuity Flow
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
          From Appointment Check-in to Encrypted Vault in One Cohesive Pipeline
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          No copy-pasting between fragmented software. Agent-D bridges schedule, encounter, notes, and safety verification seamlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between relative group hover:border-blue-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">Step {item.step}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
