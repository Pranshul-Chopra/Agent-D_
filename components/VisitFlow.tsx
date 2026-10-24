import React from "react";
import { Calendar, Stethoscope, FileEdit, CheckSquare, Save } from "lucide-react";

export function VisitFlow() {
  const steps = [
    {
      num: "1",
      title: "Agenda",
      body: "See today's consultations and open follow-ups.",
      icon: Calendar,
    },
    {
      num: "2",
      title: "Start encounter",
      body: "Open the patient's context.",
      icon: Stethoscope,
    },
    {
      num: "3",
      title: "Write notes",
      body: "Record the visit.",
      icon: FileEdit,
    },
    {
      num: "4",
      title: "Review suggestions",
      body: "Compare before and after, then approve or reject each one.",
      icon: CheckSquare,
    },
    {
      num: "5",
      title: "Saved",
      body: "The change is stored with a version history and an audit entry.",
      icon: Save,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
            Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            How a visit flows
          </h2>
        </div>

        {/* 5-step Horizontal flow (vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-xs font-mono font-bold text-[#2563EB] mb-1">
                  Step 0{step.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
