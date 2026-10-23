import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { Philosophy } from "@/components/Philosophy";
import { CoreFeatures } from "@/components/CoreFeatures";
import { UnifiedWorkspace } from "@/components/UnifiedWorkspace";
import { ArchitectureVisual } from "@/components/ArchitectureVisual";
import { PrivacyCompare } from "@/components/PrivacyCompare";
import { DesignPhilosophy } from "@/components/DesignPhilosophy";
import { CurrentState } from "@/components/CurrentState";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      {/* Top Clinical Frosted Navigation Bar */}
      <Navbar />

      {/* Hero Section with Interactive Live App Preview */}
      <Hero />

      {/* Infinite Architecture & Tech Primitives Marquee */}
      <TechMarquee />

      {/* The 3 Non-Negotiable Clinical Pillars */}
      <Philosophy />

      {/* Verified Shipped Capabilities (All 8 Core Modules) */}
      <CoreFeatures />

      {/* End-to-End Clinical Continuity Pipeline */}
      <UnifiedWorkspace />

      {/* Workstation Topology & Loopback Architecture Inspector */}
      <ArchitectureVisual />

      {/* Machine Sovereignty vs Cloud SaaS Matrix */}
      <PrivacyCompare />

      {/* Clinical Design System & Ergonomics */}
      <DesignPhilosophy />

      {/* Current Shipped Capabilities (v0.4.0) vs Next Roadmap */}
      <CurrentState />

      {/* Closing Download CTA Banner */}
      <FinalCTA />

      {/* Comprehensive Medical & Legal Footer */}
      <Footer />
    </main>
  );
}
