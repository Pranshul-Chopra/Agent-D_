import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Agent-D — Privacy-First Deterministic Clinical Workstation for Physicians",
  description:
    "100% local deterministic clinical workstation powered by hardware-bound AES-256-GCM vault storage, patient context artifacts, doctor-in-the-loop proposals, and zero cloud network egress.",
  keywords: [
    "clinical workstation",
    "physician workspace",
    "doctor desktop",
    "local-first EHR",
    "AES-256 vault",
    "deterministic clinical software",
    "zero cloud egress",
    "patient context artifacts",
    "Agent-D",
  ],
  authors: [{ name: SITE_CONFIG.creator }],
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
