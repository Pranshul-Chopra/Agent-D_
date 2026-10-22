import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Agent-D — Conversational Clinical Platform for Physicians",
  description:
    "100% on-device clinical intelligence powered by hardware-bound AES-256-GCM vault storage, doctor-in-the-loop proposal verification, and zero cloud PII leakage.",
  keywords: [
    "clinical copilot",
    "physician workspace",
    "doctor desktop",
    "local-first EHR",
    "AES-256 vault",
    "clinical decision support",
    "zero cloud PII",
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
