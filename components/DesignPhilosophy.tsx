"use client";

import { Eye, Shield, Sparkles, Check } from "lucide-react";

export function DesignPhilosophy() {
  const principles = [
    {
      title: "90% Crisp White Canvas",
      description: "Clean #FFFFFF and #F8FAFC surfaces designed specifically for low eye-strain under clinical fluorescent lights.",
      tag: "#FFFFFF / #F8FAFC",
    },
    {
      title: "Hospital-Grade Royal Blue Accents",
      description: "High-visibility #2563EB interactive buttons and soft #EFF6FF fills providing unmistakable primary focus.",
      tag: "#2563EB Royal Blue",
    },
    {
      title: "High-Contrast Clinical Typography",
      description: "Sharp text-slate-900 headings and text-slate-700 body text. Zero low-contrast grey text that strains eyes.",
      tag: "Pure High Contrast",
    },
    {
      title: "High-Density Clinical Architecture",
      description: "Unified layout designed to present patient artifacts, live agenda, encounters, and follow-ups without clutter.",
      tag: "Zero-Clutter Density",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Visual Aesthetics
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
          A Clinical Design System Built for 12-Hour Attending Shifts
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          No distracting gimmicks or hard-to-read dark modes. Built like precision medical instruments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((p, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {p.tag}
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-3 mb-2">{p.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>Verified Clinical Theme</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
