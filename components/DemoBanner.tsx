"use client";

import { DEMO_BANNER, SITE_CONFIG } from "@/config/site";
import { AlertTriangle } from "lucide-react";

export function DemoBanner() {
  if (!DEMO_BANNER) return null;

  return (
    <aside
      aria-label="Demo Status Banner"
      className="sticky top-0 z-50 bg-[#FEF3C7] border-b border-[#FDE68A] text-[#92400E] px-4 py-2.5 text-center text-xs sm:text-sm font-medium tracking-tight shadow-xs select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 text-[#B45309] shrink-0" aria-hidden="true" />
        <span>{SITE_CONFIG.demoBannerText}</span>
      </div>
    </aside>
  );
}
