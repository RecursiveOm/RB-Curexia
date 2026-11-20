import { Link } from 'react-router-dom';
import HeroOrbital3D from '../components/3d/HeroOrbital3D.jsx';
import NextPageCta from '../components/ui/NextPageCta.jsx';
import { SPECIALIZED_PRODUCTS } from '../data/ecosystemData.js';

export default function OverviewPage() {
  return (
    <div className="w-full relative z-10 flex flex-col">
      {/* 1. Cinematic Hero with Optimized Ambient Video */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-between px-6 sm:px-12 lg:px-16 pt-32 pb-16 overflow-hidden" id="act-hero">
        {/* Ambient Video Background */}
        <video
          id="hero-bg-video"
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/hero_video.webm" type="video/webm" />
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>

        {/* Video Vignette & Gradients */}
        <div className="hero-vignette" />

        {/* Hidden compatibility hook for verify-static / timeline */}
        <div id="hero-canvas-stage" style={{ display: 'none' }} />
        <div id="hero-eyebrow" className="hidden" aria-hidden="true" />

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center flex flex-col items-center my-auto pt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-champagne">
              NEXT-GEN HEALTHCARE OS · MUMBAI
            </span>
          </div>

          <h1 className="satin-headline font-light text-4xl sm:text-6xl lg:text-[76px] leading-[1.04] text-white tracking-tight mb-6" id="hero-main-headline">
            Transforming the Future of{' '}
            <span className="satin-champagne font-normal block sm:inline">
              Healthcare.
            </span>
          </h1>

          <p className="font-light text-base sm:text-lg lg:text-xl text-[#b8accd] max-w-2xl leading-relaxed mb-8" id="hero-subcopy">
            An integrated healthcare ecosystem connecting clinical intelligence, hospital ward operations, diagnostic pathology, and continuous patient telemetry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4" id="hero-ctas">
            <Link to="/panacea" className="btn-primary-cinema group">
              <span>Explore The Ecosystem</span>
              <svg className="w-3.5 h-3.5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </Link>
            <Link to="/concierge" className="btn-secondary-cinema">
              <span>Book a Demo</span>
            </Link>
          </div>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="relative z-20 mx-auto flex flex-col items-center gap-2 text-[9px] font-mono tracking-[0.3em] uppercase text-stonewarm/70 pt-8">
          <span>Explore Architecture</span>
          <span className="w-[1px] h-6 bg-gradient-to-b from-champagne/70 to-transparent" />
        </div>
      </section>

      {/* 2. Interactive 3D Ecosystem Showcase */}
      <section className="relative z-10 w-full py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] overflow-hidden">
        <div className="w-full max-w-[1520px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-purple-400 block font-semibold">
              INTERACTIVE 3D ORBITAL TOPOLOGY
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              The Connected <span className="satin-champagne font-normal">Living Heart</span> of Care.
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              Every department functions in real-time alignment. Explore the 4 primary planetary nodes rotating around the unified RBCurexia core database.
            </p>
          </div>

          <HeroOrbital3D />
        </div>
      </section>

      {/* 3. What is RBCurexia? */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#070312]/60 border-t border-white/[0.08]">
        <div className="w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-xs font-semibold tracking-[0.28em] uppercase text-purple-400">
                01.B · PLATFORM FOUNDATION
              </span>
              <span className="w-6 h-[1px] bg-white/20" />
            </div>
            <h2 className="satin-headline text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              A Unified Healthcare OS Designed for <span className="satin-champagne font-normal">Zero Friction.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              In most modern hospitals and outpatient centers, patient records, pathology panels, handwritten notes, and pharmacy orders live in disparate, disconnected systems. 
            </p>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              RBCurexia solves this fragmentation at the architectural level. By coupling natural stylus digital pad inputs with automated AI OCR, instant adverse drug screening, and continuous ward telemetry, clinicians never lose context.
            </p>
            <div className="pt-2">
              <Link to="/mission" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-champagne hover:underline">
                <span>Read our clinical manifesto</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Interactive Feature Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 transition-all space-y-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-mono text-sm">
                01
              </span>
              <h3 className="text-base font-semibold text-white">Instant Consultation EHR</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Longitudinal patient dossiers, natural handwriting capture, and automated ICD/SNOMED diagnostic coding.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-all space-y-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono text-sm">
                02
              </span>
              <h3 className="text-base font-semibold text-white">Continuous Ward Telemetry</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Bedside telemetry monitors streaming heart rate, SpO2, and ambulatory biosensor signals directly to nurse dashboards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-pink-400/40 transition-all space-y-3">
              <span className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-300 flex items-center justify-center font-mono text-sm">
                03
              </span>
              <h3 className="text-base font-semibold text-white">Pathology &amp; Pharmacy Link</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Laboratory analyzer results and cryptographic e-prescriptions dispatch automatically with batch expiry tracking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-all space-y-3">
              <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-mono text-sm">
                04
              </span>
              <h3 className="text-base font-semibold text-white">Cryptographic Security</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Patient-centric data encryption, tamper-proof audit trails, and NABH-aligned access controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specialized Product Portals Showcase */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]">
        <div className="w-full max-w-[1520px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-champagne block mb-2 font-semibold">
                THE RBCUREXIA PRODUCT SUITE
              </span>
              <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
                Specialized Solutions for <span className="satin-champagne font-normal">Every Care Setting.</span>
              </h2>
            </div>
            <Link
              to="/architecture"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-champagne hover:text-white"
            >
              <span>Explore Complete 24 Services</span>
              <span>↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALIZED_PRODUCTS.map((prod) => (
              <Link
                key={prod.id}
                to={prod.path}
                className="p-7 rounded-3xl bg-[#090416] border border-white/10 hover:border-purple-400/50 hover:bg-[#110729] transition-all duration-300 group flex flex-col justify-between space-y-6 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-purple-300">
                      {prod.badge}
                    </span>
                    <span className="text-xs font-mono text-champagne/80 font-semibold">
                      {prod.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="satin-headline text-2xl font-light text-white group-hover:text-champagne transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-purple-300 font-mono mt-1">
                      {prod.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b2a5c5]">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-champagne group-hover:translate-x-1 duration-200">
                  <span>Enter Product Workspace</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Next Page Call to Action */}
      <NextPageCta
        nextNum="02"
        nextLabel="Mission"
        title="Our Mission & Philosophy of Healing"
        description="Explore the human-centered clinical philosophy driving RBCurexia across hospitals and clinics."
        link="/mission"
      />
    </div>
  );
}
