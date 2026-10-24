import React from "react";
import { Check, AlertCircle } from "lucide-react";

export function DataHandling() {
  const bullets = [
    "Runs on your computer. Records are stored in an encrypted local database.",
    "No AI models and no cloud services are used for patient data.",
    "The app talks to a local service on your own machine, protected by a token generated at each launch.",
    "The app contacts the internet only to check for software updates. Patient information is never part of that request.",
  ];

  const doesNotDo = [
    "It is not certified or reviewed for legal compliance.",
    "Backup and restore are still in progress.",
    "It has not been approved for use with real patient records.",
  ];

  return (
    <section id="data-handling" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
            Privacy &amp; Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Data handling, stated plainly.
          </h2>
        </div>

        {/* Bullets List */}
        <div className="space-y-4 mb-12">
          {bullets.map((bullet, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-slate-200"
            >
              <div className="w-6 h-6 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {/* "What this does not do" box */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-4 text-amber-900 font-bold text-lg">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" aria-hidden="true" />
            <h3>What this does not do</h3>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-base text-amber-900/90 font-normal">
            {doesNotDo.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-amber-500 font-bold select-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
