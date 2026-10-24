import { DemoBanner } from "@/components/DemoBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TheProblem } from "@/components/TheProblem";
import { WhatItDoes } from "@/components/WhatItDoes";
import { VisitFlow } from "@/components/VisitFlow";
import { DataHandling } from "@/components/DataHandling";
import { DesignDecisions } from "@/components/DesignDecisions";
import { StatusRoadmap } from "@/components/StatusRoadmap";
import { TryTheDemo } from "@/components/TryTheDemo";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* 2. Global Status Banner: Controlled by DEMO_BANNER flag */}
      <DemoBanner />

      {/* 3.1 Header */}
      <Navbar />

      <main className="flex-1">
        {/* 3.2 Hero */}
        <Hero />

        {/* 3.3 The problem */}
        <TheProblem />

        {/* 3.4 What it does */}
        <WhatItDoes />

        {/* 3.5 How a visit flows */}
        <VisitFlow />

        {/* 3.6 Data handling */}
        <DataHandling />

        {/* 3.7 Design decisions */}
        <DesignDecisions />

        {/* 3.8 Status and roadmap */}
        <StatusRoadmap />

        {/* 3.9 Try the demo */}
        <TryTheDemo />

        {/* 3.10 FAQ */}
        <FAQ />
      </main>

      {/* 3.11 Footer */}
      <Footer />
    </div>
  );
}
