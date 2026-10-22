"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Stethoscope, Download, Github, Menu, X, Shield, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Clinical Features", href: "#features" },
    { name: "Live Workflow", href: "#workflow" },
    { name: "Architecture", href: "#architecture" },
    { name: "Zero-PII Privacy", href: "#privacy" },
    { name: "Releases", href: "#releases" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm shadow-slate-100"
            : "bg-white/60 backdrop-blur-sm py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Clinical Brand */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all shadow-sm">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold tracking-tight text-slate-900 text-lg">
                  Agent<span className="text-[#2563EB]">-D</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-[#2563EB] border border-blue-200">
                  {SITE_CONFIG.version}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                Clinical Contextual Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-[#2563EB] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SITE_CONFIG.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors shadow-sm"
            >
              <Github className="w-3.5 h-3.5 text-slate-700" />
              <span>GitHub</span>
            </a>

            <a
              href={SITE_CONFIG.setupDownloadUrl}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-all shadow-sm shadow-blue-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download {SITE_CONFIG.version}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-white/95 backdrop-blur-xl md:hidden px-6 py-8 flex flex-col justify-between border-b border-slate-200">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Navigation</span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#2563EB] py-2 border-b border-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-slate-200">
            <a
              href={SITE_CONFIG.setupDownloadUrl}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#2563EB] text-white text-sm font-semibold shadow-md shadow-blue-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Setup Installer ({SITE_CONFIG.version})</span>
            </a>
            <a
              href={SITE_CONFIG.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
