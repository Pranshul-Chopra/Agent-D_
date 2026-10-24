import React from "react";

export function TheProblem() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Context gets lost between visits.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          In a busy practice, patient information is spread across files, folders, and memory. Before each consultation the doctor has to rebuild the picture. Agent-D keeps one organized, versioned record per patient, together with the schedule and the follow-ups that come out of each visit.
        </p>
      </div>
    </section>
  );
}
