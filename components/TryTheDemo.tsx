import React from "react";
import { Download, Check, AlertTriangle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function TryTheDemo() {
  const checklist = [
    "Windows 10 or 11, 64-bit",
    "Use the sample patients that come with the app",
    "Do not enter real patient information",
  ];

  return (
    <section id="demo" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800 mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
            <span>Evaluation Only</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Try the demo build.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            This build is for evaluation with invented patients only. Do not enter real patient information.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Checklist */}
          <ul className="space-y-3">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Download Demo Build (Windows) button */}
          <div className="w-full md:w-auto shrink-0">
            <a
              href={SITE_CONFIG.demoDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-base font-semibold transition-all shadow-md shadow-blue-500/20 hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              <span>Download demo build (Windows)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
