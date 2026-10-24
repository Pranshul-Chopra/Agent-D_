import React from "react";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Navigation / External Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-600 mb-8">
          <a
            href={SITE_CONFIG.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1 px-2"
          >
            GitHub
          </a>
          <span className="text-slate-300 select-none" aria-hidden="true">·</span>
          <a
            href={SITE_CONFIG.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1 px-2"
          >
            LinkedIn
          </a>
          <span className="text-slate-300 select-none" aria-hidden="true">·</span>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="hover:text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-sm py-1 px-2"
          >
            Contact email
          </a>
        </div>

        {/* Disclaimer Text */}
        <p className="max-w-3xl text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-6">
          Agent-D is a documentation and organization tool. It does not diagnose or recommend treatment. This build uses invented data and has not been reviewed for use with real patient records.
        </p>

        {/* Copyright Line */}
        <div className="text-xs text-slate-400 font-medium">
          © 2026 Pranshul Chopra
        </div>
      </div>
    </footer>
  );
}
