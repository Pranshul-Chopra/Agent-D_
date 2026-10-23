# Agent-D — Official Landing Page

> The Conversational-First Clinical Workspace for Attending Physicians.  
> 100% on-device clinical intelligence powered by a hardware-bound AES-256-GCM vault, doctor-in-the-loop proposal verification, and zero cloud PII leakage.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Agent-D Clinical Light Theme: `#FFFFFF` canvas, `#2563EB` Royal Blue accents)
- **Icons:** Lucide React
- **Deployment Target:** Vercel (Native zero-config support + `vercel.json`)

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
npm run start
```

---

## Deploying to Vercel

This repository is pre-configured for Vercel deployment with [`vercel.json`](./vercel.json) (including HTTP security headers, framework configuration, and static caching).

### Option 1: Vercel Dashboard (Recommended)

1. Create a GitHub repository (e.g. `Pranshul-Chopra/Agent-D-Landing`) and push this folder:
   ```bash
   git init
   git add .
   git commit -m "feat: initial Agent-D landing page"
   git remote add origin https://github.com/Pranshul-Chopra/Agent-D-Landing.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Framework Preset will auto-detect as **Next.js**.
5. Click **Deploy**.

### Option 2: Vercel CLI

```bash
# Deploy preview build
npx vercel

# Deploy directly to production
npx vercel --prod
```

---

## Project Structure

```
Agent-D_LandingPage/
├── app/
│   ├── globals.css          # Agent-D clinical theme & custom scrollbars
│   ├── layout.tsx           # SEO metadata, title, and favicon links
│   └── page.tsx             # Assembled landing page sections
├── components/
│   ├── Navbar.tsx           # Frosted glass clinical header & download CTA
│   ├── Hero.tsx             # Value proposition & 5-tab live app mockup
│   ├── TechMarquee.tsx      # Infinite technology primitives marquee
│   ├── Philosophy.tsx       # 3 Non-Negotiable Clinical Pillars
│   ├── CoreFeatures.tsx     # 8 Verified shipped capabilities
│   ├── UnifiedWorkspace.tsx # 5-step clinical continuity pipeline
│   ├── ArchitectureVisual.tsx# Electron 44 + Flask 3 loopback topology
│   ├── PrivacyCompare.tsx   # Machine Sovereignty vs Cloud SaaS Matrix
│   ├── DesignPhilosophy.tsx # Ergonomics for 12-hour attending shifts
│   ├── CurrentState.tsx     # Shipped v0.4.0 reality vs Roadmap Horizon
│   ├── FinalCTA.tsx         # Primary download call-to-action banner
│   └── Footer.tsx           # Medical disclaimer, vault path, attribution
├── config/
│   └── site.ts              # Centralized URLs, version tags, and download links
├── data/
│   ├── features.ts          # Feature details & clinical metrics
│   ├── architecture.ts      # Architectural layer definitions
│   └── releases.ts          # Release changelog history (v0.1.0 to v0.4.0)
├── public/                  # Static images, icons, and blockmaps
├── vercel.json              # Vercel deployment & security headers config
└── tailwind.config.ts       # Clinical color palette extension
```
