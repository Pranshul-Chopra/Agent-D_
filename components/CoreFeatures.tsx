"use client";

import { CLINICAL_FEATURES } from "@/data/features";
import { Bot, ShieldCheck, Calendar, Stethoscope, FileText, Key, Lock, Kanban } from "lucide-react";

export function CoreFeatures() {
  const iconMap: Record<string, any> = {
    Bot,
    ShieldCheck,
    Calendar,
    Stethoscope,
    FileText,
    Key,
    Lock,
    Kanban,
  };

  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Verified Shipped Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
          Every Capability Truthfully Built. Nothing Promised, Everything Present.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          Agent-D positions as a specialized clinical contextual platform designed around real doctor workflow bottlenecks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CLINICAL_FEATURES.map((feature) => {
          const IconComponent = iconMap[feature.iconName] || FileText;
          return (
            <div
              key={feature.id}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{feature.description}</p>

                <div className="space-y-2 mb-6">
                  {feature.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#2563EB] font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-medium text-[#2563EB] bg-blue-50/50 px-3 py-2 rounded-lg border border-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span>{feature.highlight}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
