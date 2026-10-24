# Agent-D — Practice Workspace Landing Page

> A local-first practice workspace for physicians.  
> Schedule, consultations, versioned patient context, and follow-ups in one app that runs on your computer.

---

## Overview

This repository hosts the static landing page for Agent-D.
The page states accurately what Agent-D is today: a local-first practice workspace in a demo state, pending legal review, and documents the product decisions behind the architecture.

---

## Tech Stack

- **Framework:** Next.js 14 (Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Accessible white and blue palette: `#FFFFFF`, `#F8FAFC`, `#2563EB`, `#EFF6FF`)
- **Icons:** Lucide React
- **Deployment:** Vercel (with security headers in `vercel.json`)

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

---

## Production Build

```bash
npm run build
```

This compiles a fully static export.

---

## Project Structure

```
Agent-D_LandingPage/
├── app/
│   ├── globals.css          # Theme styles, system fonts & focus outlines
│   ├── layout.tsx           # Metadata, document title, and icons
│   └── page.tsx             # Structured page sections
├── components/
│   ├── DemoBanner.tsx       # Sticky demo status banner (DEMO_BANNER flag)
│   ├── Navbar.tsx           # Header navigation & GitHub link
│   ├── Hero.tsx             # Value proposition & dashboard screenshot
│   ├── TheProblem.tsx       # Context loss between visits
│   ├── WhatItDoes.tsx       # 4 core capability cards with screenshots
│   ├── VisitFlow.tsx        # 5-step visit workflow
│   ├── DataHandling.tsx     # Local data handling & limitations
│   ├── DesignDecisions.tsx  # Product notes on why there is no AI
│   ├── StatusRoadmap.tsx    # Shipped, in progress, and waiting on
│   ├── TryTheDemo.tsx       # Demo build evaluation & download button
│   ├── FAQ.tsx              # Frequently asked questions
│   └── Footer.tsx           # Links, disclaimer, and copyright
├── config/
│   └── site.ts              # Centralized configuration and flags
├── public/
│   └── screenshots/         # Vector screenshots with synthetic data
└── vercel.json              # HTTP security headers (nosniff, frame deny, strict referrer)
```
