"use client";

import { Download, Lock, ShieldCheck, Stethoscope } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-xl shadow-blue-500/20">
        {/* Subtle decorative circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-blue-100 border border-white/20">
            <Stethoscope className="w-3.5 h-3.5 text-blue-200" />
            <span>Agent-D {SITE_CONFIG.version} Production Release</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Take Full Command of Your Clinic Practice Today.
          </h2>

          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
            Experience deterministic clinical productivity with zero cloud telemetry, hardware-bound AES-256-GCM vault security, and doctor-in-the-loop safety.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={SITE_CONFIG.setupDownloadUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#2563EB] font-bold text-sm transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download One-Click Setup ({SITE_CONFIG.version})</span>
            </a>

            <a
              href={SITE_CONFIG.portableDownloadUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all backdrop-blur-md"
            >
              <Lock className="w-4 h-4 text-blue-200" />
              <span>Standalone Portable Executable</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200 font-medium">
            <span>✓ Windows 10 &amp; 11 (64-bit)</span>
            <span>✓ Zero Cloud PII</span>
            <span>✓ Local SQLite Vault</span>
            <span>✓ Auto-Updater Feed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
