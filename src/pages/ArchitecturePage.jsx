import { useState } from 'react';
import PageHero from '../components/ui/PageHero.jsx';
import NextPageCta from '../components/ui/NextPageCta.jsx';
import ArchitectureRooms3D from '../components/3d/ArchitectureRooms3D.jsx';
import { ALL_24_SERVICES_DATA } from '../data/ecosystemData.js';

const MAJOR_SERVICE_IDS = [
  'panacea',
  'curenest',
  'labonix',
  'pharmixo',
  'pad',
  'locker',
  'biometric',
  'vault'
];

export default function ArchitecturePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState('all');
  const [activeService, setActiveService] = useState(ALL_24_SERVICES_DATA[0]);
  const [showAllServices, setShowAllServices] = useState(false);

  const filteredServices = ALL_24_SERVICES_DATA.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.sub.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPillar =
      selectedPillar === 'all' ||
      (selectedPillar === 'support' && s.cat === 'support') ||
      (selectedPillar === 'analytics' && s.cat === 'analytics') ||
      (selectedPillar === 'core' && s.cat === 'core');

    return matchesSearch && matchesPillar;
  });

  // If user hasn't searched or filtered, display only major flagship services unless expanded
  const displayedServices =
    !showAllServices && !searchQuery.trim() && selectedPillar === 'all'
      ? filteredServices.filter((s) => MAJOR_SERVICE_IDS.includes(s.id))
      : filteredServices;

  return (
    <div className="w-full relative z-10 flex flex-col" id="act-services">
      {/* 1. Architecture Hero */}
      <PageHero
        eyebrowNum="06"
        eyebrowText="PLATFORM ARCHITECTURE"
        title="One Connected Healthcare Ecosystem for"
        highlight="Modern Care."
        description="A synchronized clinical network unifying outpatient consultation, critical inpatient telemetry, automated pathology diagnostics, and pharmacy fulfillment into a secure, low-latency framework."
        primaryCtaText="Inspect 4 Core Nodes"
        primaryCtaLink="#interactive-nodes"
        secondaryCtaText="Book Architecture Briefing"
        secondaryCtaLink="/concierge"
        pageId="architecture"
      />

      {/* 2. Interactive 3D Room-Based Architecture */}
      <section className="relative z-10 w-full py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]" id="interactive-nodes">
        <div className="w-full max-w-[1520px] mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-champagne block font-semibold">
              THE 4 CORE HEALTHCARE NODES
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              Spatially Isolated, <span className="satin-champagne font-normal">Cryptographically Synced.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              Select any of the four architectural environments to inspect its specialized vector medical fixtures, operational protocols, and live telemetry data highways.
            </p>
          </div>

          <ArchitectureRooms3D />
        </div>
      </section>

      {/* 3. Streamlined Service Matrix Explorer (Major Services by default + Expand Option) */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#070312]/60" id="services-24-matrix-anchor">
        <div className="w-full max-w-[1520px] mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest uppercase text-purple-400 block font-semibold">
                SYSTEM CATALOG · {showAllServices ? '24 SERVICES' : 'MAJOR SERVICES'}
              </span>
              <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
                Core Platform <span className="satin-champagne font-normal">Service Matrix.</span>
              </h2>
              <p className="text-sm text-stonewarm max-w-xl leading-relaxed text-[#b4a8c9]">
                Showing major flagship engines powering clinical care, inpatient telemetry, and automated pathology. Expand below to inspect all 24 ecosystem modules.
              </p>
            </div>

            {/* Pillar Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => { setSelectedPillar('all'); setShowAllServices(true); }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedPillar === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/[0.04] text-stonewarm hover:text-white border border-white/10'
                }`}
              >
                All 24 Services
              </button>
              <button
                type="button"
                onClick={() => { setSelectedPillar('support'); setShowAllServices(true); }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedPillar === 'support'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/[0.04] text-stonewarm hover:text-white border border-white/10'
                }`}
              >
                Clinical support
              </button>
              <button
                type="button"
                onClick={() => { setSelectedPillar('analytics'); setShowAllServices(true); }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedPillar === 'analytics'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/[0.04] text-stonewarm hover:text-white border border-white/10'
                }`}
              >
                Analytics &amp; operations
              </button>
              <button
                type="button"
                onClick={() => { setSelectedPillar('core'); setShowAllServices(true); }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedPillar === 'core'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/[0.04] text-stonewarm hover:text-white border border-white/10'
                }`}
              >
                Core platforms
              </button>
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="relative max-w-md">
            <input
              id="service-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); if (e.target.value) setShowAllServices(true); }}
              placeholder="Search services (e.g. eRx, Ward, Drug Locker, OCR)..."
              className="w-full px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-sm text-bone placeholder-stonewarm/50 focus:outline-none focus:border-champagne"
            />
          </div>

          {/* Featured Spotlight Card */}
          <div id="featured-service-panel" className="p-7 rounded-3xl bg-[#0d071f] border border-purple-500/30 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest uppercase text-champagne">
                SERVICE SPOTLIGHT · {activeService.catName}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-900/60 border border-purple-400/30 text-[9px] font-mono text-purple-200">
                {activeService.badge}
              </span>
            </div>
            <h3 id="spot-title" className="text-2xl font-semibold text-white">
              {activeService.title}
            </h3>
            <p className="text-xs text-purple-300 font-mono">
              {activeService.sub}
            </p>
            <p className="text-sm text-stonewarm leading-relaxed text-[#c3b6d6]">
              {activeService.desc}
            </p>
          </div>

          {/* Services Grid (Shows 8 Major Flagships by default) */}
          <div id="services-24-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {displayedServices.map((service) => {
              const isSelected = activeService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-[#1a0c33] border-champagne shadow-lg shadow-purple-600/20 scale-[1.02]'
                      : 'bg-[#090416] border-white/10 hover:border-white/25 hover:bg-[#100726]'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono tracking-widest text-purple-400 uppercase">
                        {service.cat}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[8px] font-mono bg-white/[0.06] text-champagne border border-white/10">
                        {service.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      {service.title}
                    </h4>
                    <p className="text-[11px] text-purple-300 font-mono">
                      {service.sub}
                    </p>
                    <p className="text-xs text-stonewarm/80 line-clamp-2 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-[10px] font-mono text-champagne/80 flex items-center justify-between">
                    <span>Inspect</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show More / Show Less Toggle Button */}
          <div className="flex flex-col items-center justify-center pt-6 gap-2">
            <button
              type="button"
              onClick={() => setShowAllServices(!showAllServices)}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-900/60 to-indigo-900/60 hover:from-purple-800 hover:to-indigo-800 border border-purple-400/40 hover:border-champagne text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-3 shadow-lg shadow-purple-900/30 hover:scale-105"
            >
              <span>{showAllServices ? 'Show Major Services Only ↑' : 'View All 24 Services Matrix ↓'}</span>
              <span className="text-champagne font-mono text-sm">{showAllServices ? '▲' : '▼'}</span>
            </button>
            <span className="text-[11px] font-mono text-stonewarm/60">
              {showAllServices
                ? 'Showing all 24 connected platform services'
                : 'Showing 8 major flagship engines (click above to view all)'}
            </span>
          </div>
        </div>
      </section>

      {/* 4. Security & Cryptographic Data Vault */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]">
        <div className="w-full max-w-[1520px] mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-emerald-400 block font-semibold">
              DATA SECURITY &amp; CRYPTOGRAPHY
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              Zero-Trust Architecture for <span className="satin-champagne font-normal">Sensitive Records.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              Patient health information is guarded with end-to-end client encryption, localized database caching, and immutable audit logs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#090416] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">01 · ENCRYPTION</span>
              <h3 className="text-xl font-semibold text-white">AES-256 Client-Side Hashing</h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Clinical notes and biometric data are encrypted locally before transmission. Keys are maintained under institutional authority.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#090416] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">02 · PERSISTENCE</span>
              <h3 className="text-xl font-semibold text-white">Local-First Dexie Storage</h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Doctors never face consultation delays. All active records are cached in IndexedDB via Dexie for sub-15ms interaction latency.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#090416] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-purple-400 uppercase font-semibold">03 · AUDITABILITY</span>
              <h3 className="text-xl font-semibold text-white">Cryptographic Prescription Trail</h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Every issued prescription carries a cryptographic hash preventing unauthorized alteration and pharmacy dispensation fraud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Next Page CTA */}
      <NextPageCta
        nextNum="07"
        nextLabel="Network"
        title="Plugins Social · Clinician Network"
        description="Inspect the connected community of specialists, inter-departmental referrals, and clinical clans across Mumbai."
        link="/network"
      />
    </div>
  );
}
