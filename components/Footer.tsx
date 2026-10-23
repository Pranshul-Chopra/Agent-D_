"use client";

import Link from "next/link";
import { Stethoscope, Github, Linkedin, Mail, ShieldCheck, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB]">
                <Stethoscope className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-base">
                Agent<span className="text-[#2563EB]">-D</span>
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 border border-slate-200">
                {SITE_CONFIG.version}
              </span>
            </div>
            <p className="text-slate-500 max-w-sm">
              Deterministic Clinical Desktop Workstation for Attending Physicians. 100% local machine sovereignty.
            </p>
          </div>

          {/* Social / Repo Links */}
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
              aria-label="Contact Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Local Security Architecture Footnote */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-600 font-mono">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Vault Path: {SITE_CONFIG.localVaultPath}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Loopback: {SITE_CONFIG.loopbackHost} · Zero Cloud PII</span>
          </div>
        </div>

        {/* Clinical Disclaimer */}
        <div className="pt-6 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong>Medical Device &amp; Clinical Governance Disclaimer:</strong> Agent-D is an intelligent decision support assistant and clinical practice productivity tool intended for attending physicians and medical staff. It does not provide autonomous clinical diagnoses, nor does it independently modify medical treatment plans without physician sign-off. All clinical judgments, diagnostic decisions, and prescribing actions remain the sole professional responsibility of the attending physician.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 text-slate-500">
            <span>© {new Date().getFullYear()} Agent-D. Developed by {SITE_CONFIG.creator}.</span>
            <span className="font-mono text-[10px]">Built with Electron 44 · Flask 3 · SQLite WAL · React 19</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
