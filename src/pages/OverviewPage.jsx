import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection.jsx';
import MissionSection from '../components/sections/MissionSection.jsx';
import PanaceaSection from '../components/sections/PanaceaSection.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import NetworkSection from '../components/sections/NetworkSection.jsx';
import ConciergeSection from '../components/sections/ConciergeSection.jsx';

export default function OverviewPage() {
  return (
    <div className="w-full relative z-10 flex flex-col">
      {/* 1. Complete Original Hero Header with Faststart Ambient Video */}
      <HeroSection />

      {/* Floating Dedicated Portals Quick Bar */}
      <div className="relative z-20 w-full py-4 px-6 sm:px-12 lg:px-16 bg-[#070312]/90 border-y border-white/[0.08] backdrop-blur-xl">
        <div className="w-full max-w-[1520px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-champagne">
              DEDICATED PAGE WORKSPACES
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/mission"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400 text-[11px] font-medium text-stone-300 hover:text-white transition-all"
            >
              02 Mission ↗
            </Link>
            <Link
              to="/panacea"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400 text-[11px] font-medium text-stone-300 hover:text-white transition-all"
            >
              03 Panacea OS ↗
            </Link>
            <Link
              to="/architecture"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400 text-[11px] font-medium text-stone-300 hover:text-white transition-all"
            >
              04 Architecture ↗
            </Link>
            <Link
              to="/network"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400 text-[11px] font-medium text-stone-300 hover:text-white transition-all"
            >
              05 Network ↗
            </Link>
            <Link
              to="/concierge"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400 text-[11px] font-medium text-stone-300 hover:text-white transition-all"
            >
              06 Concierge ↗
            </Link>
            <Link
              to="/pulseport"
              className="px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-[11px] font-mono text-purple-200 hover:bg-purple-900 transition-all"
            >
              PulsePort ↗
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Complete Original Mission Section */}
      <MissionSection />

      {/* Section 02 -> Dedicated Mission Page Action Banner */}
      <div className="relative z-20 w-full py-8 px-6 sm:px-12 lg:px-16 bg-gradient-to-r from-purple-950/30 via-transparent to-purple-950/30 border-y border-white/[0.08]">
        <div className="w-full max-w-[1520px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-mono tracking-widest uppercase text-purple-300">
              EXPLORE IN-DEPTH STORYTELLING
            </span>
            <p className="text-sm font-light text-white">
              Discover the 5 core mission pillars and clinical philosophy on the dedicated Mission page.
            </p>
          </div>
          <Link
            to="/mission"
            className="px-6 py-2.5 rounded-full bg-white/[0.06] border border-purple-400/40 hover:border-champagne text-xs font-semibold uppercase tracking-wider text-white transition-all hover:scale-105"
          >
            Explore Dedicated Mission Page ↗
          </Link>
        </div>
      </div>

      {/* 3. Complete Original Panacea Section */}
      <PanaceaSection />

      {/* Section 03 -> Dedicated Panacea Page Action Banner */}
      <div className="relative z-20 w-full py-8 px-6 sm:px-12 lg:px-16 bg-gradient-to-r from-indigo-950/30 via-transparent to-indigo-950/30 border-y border-white/[0.08]">
        <div className="w-full max-w-[1520px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-300">
              SPECIALIZED CLINICIAN WORKSPACE
            </span>
            <p className="text-sm font-light text-white">
              Inspect the complete Panacea module catalog, digital handwriting AI, and patient workflows.
            </p>
          </div>
          <Link
            to="/panacea"
            className="px-6 py-2.5 rounded-full bg-white/[0.06] border border-cyan-400/40 hover:border-champagne text-xs font-semibold uppercase tracking-wider text-white transition-all hover:scale-105"
          >
            Open Dedicated Panacea OS Page ↗
          </Link>
        </div>
      </div>

      {/* 4. Complete Original Services & Architecture Section with 4 Isometric Rooms */}
      <ServicesSection />

      {/* Section 04 -> Specialized Architecture & Node Portals Banner */}
      <div className="relative z-20 w-full py-10 px-6 sm:px-12 lg:px-16 bg-[#070312]/80 border-y border-white/[0.08]">
        <div className="w-full max-w-[1520px] mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block font-semibold">
                SPECIALIZED NODE WORKSPACES
              </span>
              <p className="text-sm font-light text-white">
                Inspect dedicated deep-dive architecture pages for each of the four connected healthcare nodes.
              </p>
            </div>
            <Link
              to="/architecture"
              className="px-6 py-2.5 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all shadow-lg"
            >
              Open Dedicated Architecture Page ↗
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <Link
              to="/curenest"
              className="px-4 py-2 rounded-xl bg-white/[0.04] border border-cyan-500/30 text-xs font-mono text-cyan-200 hover:border-cyan-400 transition-all"
            >
              ● CureNEST (Hospital Ward OS) ↗
            </Link>
            <Link
              to="/labonix"
              className="px-4 py-2 rounded-xl bg-white/[0.04] border border-sky-500/30 text-xs font-mono text-sky-200 hover:border-sky-400 transition-all"
            >
              ● Labonix (Pathology Gateway) ↗
            </Link>
            <Link
              to="/pharmixo"
              className="px-4 py-2 rounded-xl bg-white/[0.04] border border-pink-500/30 text-xs font-mono text-pink-200 hover:border-pink-400 transition-all"
            >
              ● Pharmixo (Pharmacy Portal) ↗
            </Link>
            <Link
              to="/pulseport"
              className="px-4 py-2 rounded-xl bg-white/[0.04] border border-purple-500/30 text-xs font-mono text-purple-200 hover:border-purple-400 transition-all"
            >
              ● PulsePort (Biometric &amp; Wearables) ↗
            </Link>
          </div>
        </div>
      </div>

      {/* 5. Complete Original Network Section */}
      <NetworkSection />

      {/* Section 05 -> Dedicated Network Page Action Banner */}
      <div className="relative z-20 w-full py-8 px-6 sm:px-12 lg:px-16 bg-gradient-to-r from-purple-950/30 via-transparent to-purple-950/30 border-y border-white/[0.08]">
        <div className="w-full max-w-[1520px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-mono tracking-widest uppercase text-purple-300">
              VERIFIED CLINICAL COMMUNITY
            </span>
            <p className="text-sm font-light text-white">
              Explore specialist clans, peer-reviewed articles, and collaborative inter-hospital boards.
            </p>
          </div>
          <Link
            to="/network"
            className="px-6 py-2.5 rounded-full bg-white/[0.06] border border-purple-400/40 hover:border-champagne text-xs font-semibold uppercase tracking-wider text-white transition-all hover:scale-105"
          >
            Explore Dedicated Network Page ↗
          </Link>
        </div>
      </div>

      {/* 6. Complete Original Concierge Section */}
      <ConciergeSection />
    </div>
  );
}
