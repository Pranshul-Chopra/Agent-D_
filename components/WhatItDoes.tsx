import Image from "next/image";

export function WhatItDoes() {
  const cards = [
    {
      title: "Schedule and consultations",
      body: "A practice calendar with today's agenda. Start an encounter from the schedule, record notes, and close it when the visit ends.",
      image: "/screenshots/schedule-consultations.svg",
      alt: "Agent-D practice calendar and consultation encounter note editor with synthetic patient records",
    },
    {
      title: "Patient context artifacts",
      body: "A structured summary for each patient: active issues, current medications, things to watch for, and follow-ups. Every change creates a version, and any two versions can be compared side by side.",
      image: "/screenshots/patient-artifacts.svg",
      alt: "Agent-D patient context artifact view displaying side-by-side version comparison diff",
    },
    {
      title: "Follow-ups board",
      body: "Lab orders, recalls, referrals, and chart reviews on a simple board with priorities and due dates.",
      image: "/screenshots/followups-board.svg",
      alt: "Agent-D follow-ups Kanban board tracking lab orders, recalls, and priorities",
    },
    {
      title: "Changes you approve",
      body: "After a visit, fixed rules look for medication changes, new problems, and lab or follow-up orders in the notes, and suggest entries. Nothing is saved until the doctor approves it. The suggestions are rule-based and may be incomplete, so the doctor remains the source of truth.",
      image: "/screenshots/changes-approve.svg",
      alt: "Agent-D doctor approval safety gate reviewing rule-based suggestions from encounter notes",
    },
  ];

  return (
    <section id="what-it-does" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            What it does
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="p-6 sm:p-7 flex-1">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {card.body}
                </p>
              </div>
              <div className="px-6 pb-6 pt-1">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={600}
                    height={380}
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
