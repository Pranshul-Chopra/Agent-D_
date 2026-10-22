"use client";

import { Terminal, Lock, ShieldCheck, Database, Cpu, Layers } from "lucide-react";
import { ARCHITECTURE_LAYERS } from "@/data/architecture";

export function ArchitectureVisual() {
  return (
    <section id="architecture" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Workstation Topology
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
          Simple on Purpose. Fully Isolated Local Architecture.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          No external docker daemons, no remote cloud relays. Everything runs natively on the physician's Windows desktop.
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {ARCHITECTURE_LAYERS.map((layer) => (
          <div
            key={layer.layer}
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <span className="font-mono text-xl font-bold text-[#2563EB] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                {layer.layer}
              </span>
              <div>
                <h4 className="text-base font-bold text-slate-900">{layer.name}</h4>
                <p className="text-xs text-slate-600 mt-1 max-w-xl">{layer.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {layer.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex md:flex-col items-start gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200 shrink-0">
              {layer.metrics.map((m, idx) => (
                <span key={idx}>✓ {m}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
