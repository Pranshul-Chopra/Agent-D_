"use client";

import Image from "next/image";
import { ArrowDown, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  return (
    <section className="relative pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto text-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#1E40AF] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" aria-hidden="true" />
          <span>{SITE_CONFIG.versionStatusChip}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          A local-first practice workspace for physicians.
        </h1>

        {/* Subline */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Schedule, consultations, versioned patient context, and follow-ups in one app that runs on your computer.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#what-it-does"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 shadow-xs"
          >
            <span>See how it works</span>
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href="#design-decisions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
          >
            <FileText className="w-4 h-4 text-slate-500" aria-hidden="true" />
            <span>Read the design notes</span>
          </a>
        </div>

        {/* Dashboard Screenshot with Invented Synthetic Data */}
        <div className="mt-12 sm:mt-14 relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
          <Image
            src="/screenshots/dashboard.svg"
            alt="Agent-D practice dashboard displaying today's agenda, synthetic patient schedule, and follow-up metrics"
            width={1200}
            height={750}
            priority
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
