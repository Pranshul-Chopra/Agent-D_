import React from "react";
import { ArrowUpRight } from "lucide-react";

export function DesignDecisions() {
  const timeline = [
    {
      num: "01",
      title: "Cloud AI",
      body: "Fast to build and capable, but it meant sending health-related text to an outside provider. Free-tier terms allow providers to use submitted content, and paid terms still require consent, a processor agreement, and a view on cross-border transfer.",
    },
    {
      num: "02",
      title: "Local AI",
      body: "This removed the outside provider, but small models make more mistakes, need capable hardware, and raise questions about clinical suggestions.",
    },
    {
      num: "03",
      title: "Rule-based suggestions",
      body: "Fixed rules, shown to the doctor as a before-and-after comparison. They are predictable, explainable, and fast, and they cannot invent facts, though they can miss things.",
    },
    {
      num: "04",
      title: "What comes next",
      body: "A legal review, a supervised pilot, and measuring where AI might genuinely help before adding it back.",
    },
  ];

  return (
    <section id="design-decisions" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
            Portfolio Notes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Why there is no AI.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Agent-D started as an AI assistant for a doctor. While building it, the legal and safety questions became clear, so the design changed.
          </p>
        </div>

        {/* Timeline (four short blocks) */}
        <div className="space-y-6 mb-12">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
            >
              <span className="text-sm font-mono font-bold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-1 rounded-lg shrink-0">
                {item.num}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Links placeholders */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-semibold">
          <a
            href="#design-decisions"
            className="inline-flex items-center gap-1.5 text-[#2563EB] hover:text-[#1D4ED8] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1 px-2"
          >
            <span>Read the AI vs non-AI tradeoff analysis</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
          <a
            href="#design-decisions"
            className="inline-flex items-center gap-1.5 text-[#2563EB] hover:text-[#1D4ED8] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1 px-2"
          >
            <span>Read the case study</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
