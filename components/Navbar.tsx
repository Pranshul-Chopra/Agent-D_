"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "How it works", href: "#what-it-does" },
    { label: "Data handling", href: "#data-handling" },
    { label: "Design decisions", href: "#design-decisions" },
    { label: "Status", href: "#status" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-[41px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:text-[#2563EB] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 rounded-sm"
        >
          {SITE_CONFIG.productName}
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 rounded-sm py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side: Text link "GitHub" (No download button in the header) */}
        <div className="hidden md:flex items-center">
          <a
            href={SITE_CONFIG.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 rounded-sm py-1 px-2"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={SITE_CONFIG.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            GitHub
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
