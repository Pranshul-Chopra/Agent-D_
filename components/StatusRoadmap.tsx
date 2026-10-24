import React from "react";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

export function StatusRoadmap() {
  const shipped = [
    "Practice dashboard and calendar",
    "Consultations and encounters",
    "Versioned patient context with diffs",
    "Follow-ups board",
    "Rule-based suggestions with approval",
    "Encrypted local storage",
  ];

  const inProgress = [
    "Encrypted backup and restore",
    "Pre-visit briefing from templates",
    "Audit export",
    "Tests for the suggestion rules",
  ];

  const waitingOn = [
    "Legal review",
    "Supervised pilot with consenting patients",
    "Patient notice and consent flow",
  ];

  return (
    <section id="status" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Status and roadmap
          </h2>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Shipped (v0.5.0) */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              <h3 className="text-lg font-bold text-slate-900">
                Shipped (v0.5.0)
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-700 font-normal">
              {shipped.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* In progress */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
              <Clock className="w-5 h-5 text-[#2563EB]" aria-hidden="true" />
              <h3 className="text-lg font-bold text-slate-900">
                In progress
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-700 font-normal">
              {inProgress.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-blue-500 font-bold select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Waiting on */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
              <AlertCircle className="w-5 h-5 text-amber-600" aria-hidden="true" />
              <h3 className="text-lg font-bold text-slate-900">
                Waiting on
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-700 font-normal">
              {waitingOn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-bold select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
