import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Agent-D — A local-first practice workspace for physicians",
  description:
    "Schedule, consultations, versioned patient context, and follow-ups in one app that runs on your computer. Demo build for evaluation with synthetic data.",
  keywords: [
    "practice workspace",
    "physician workspace",
    "patient context",
    "consultations",
    "follow-ups board",
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
