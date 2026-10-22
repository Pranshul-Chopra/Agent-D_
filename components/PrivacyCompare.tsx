"use client";

import { ShieldCheck, Check, X, Lock } from "lucide-react";

export function PrivacyCompare() {
  const comparison = [
    {
      feature: "Patient Records Storage",
      agentD: "100% on-device NVMe inside %LOCALAPPDATA%\\AgentD\\context.db",
      cloud: "Remote multi-tenant cloud servers and shared databases",
    },
    {
      feature: "Cryptographic Protection",
      agentD: "Hardware-bound AES-256-GCM encryption with machine PBKDF2 salt",
      cloud: "Vendor-managed keys with cloud provider insider access",
    },
    {
      feature: "AI Inference & PII Privacy",
      agentD: "Zero Cloud PII. Legal names replaced with tokens (PT-1042)",
      cloud: "Cleartext clinical records transmitted to model APIs",
    },
    {
      feature: "Record Modification Safety",
      agentD: "Doctor-in-the-Loop Proposal Gate with visual before/after diffs",
      cloud: "Autonomous writes or unstructured copy-paste note dumps",
    },
    {
      feature: "Network Surface Area",
      agentD: "Loopback http://127.0.0.1:5050 with 32-byte per-launch token",
      cloud: "Public web interfaces vulnerable to credential stuffing and leaks",
    },
    {
      feature: "Data Portability & Ownership",
      agentD: "Single portable SQLite database with immutable version snapshots",
      cloud: "Proprietary exports, vendor lock-in, monthly per-seat fees",
    },
  ];

  return (
    <section id="privacy" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Sovereignty Matrix
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
          Local Machine Sovereignty vs Cloud EHR SaaS
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          Why attending physicians are moving sensitive clinical intelligence off remote servers and onto their local workstations.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700">
              <th className="py-4 px-6 w-1/4">Evaluation Vector</th>
              <th className="py-4 px-6 w-3/8 text-[#2563EB] bg-blue-50/50 border-x border-blue-100">
                <div className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  <span>Agent-D (Local Workstation)</span>
                </div>
              </th>
              <th className="py-4 px-6 w-3/8 text-slate-500">Commercial Cloud SaaS EHR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {comparison.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-4 px-6 font-semibold text-slate-900">{row.feature}</td>
                <td className="py-4 px-6 bg-blue-50/30 border-x border-blue-100 text-slate-900 font-medium">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.agentD}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-500">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.cloud}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
