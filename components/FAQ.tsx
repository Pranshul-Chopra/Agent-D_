import React from "react";

export function FAQ() {
  const faqs = [
    {
      q: "Can I use it with real patients?",
      a: "Not yet. It needs a legal review and a pilot first.",
    },
    {
      q: "Is it compliant with Indian data protection law?",
      a: "No claim of compliance is made. Legal review is pending.",
    },
    {
      q: "Does it use AI?",
      a: "Not in this version.",
    },
    {
      q: "Where is the data stored?",
      a: "On your computer, in an encrypted local database.",
    },
    {
      q: "Does it send anything to the internet?",
      a: "The app contacts the internet only to check for software updates. Patient information is never part of that request.",
    },
    {
      q: "Is it a medical device?",
      a: "It is designed as a documentation and organization tool. It does not diagnose or recommend treatment.",
    },
    {
      q: "Who built it?",
      a: "Pranshul Chopra, a computer science student, for a small clinic, with input from a practicing physician.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
            Questions &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {faq.q}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
