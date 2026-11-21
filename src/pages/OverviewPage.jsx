import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/sections/HeroSection.jsx';
import MissionSection from '../components/sections/MissionSection.jsx';
import PanaceaSection from '../components/sections/PanaceaSection.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import NetworkSection from '../components/sections/NetworkSection.jsx';
import ConciergeSection from '../components/sections/ConciergeSection.jsx';

export default function OverviewPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const manifestoEl = document.getElementById('mission-manifesto');
    const containerEl = document.getElementById('manifesto-scroll-pin');
    const phrases = manifestoEl?.querySelectorAll('.manifesto-phrase');

    if (!manifestoEl || !phrases || !phrases.length) return;

    // Initial phrase state: clean subtle contrast matching original homepage
    gsap.set(phrases, {
      color: 'rgba(246, 244, 240, 0.28)',
      fontWeight: '300',
      opacity: 0.7,
      textShadow: 'none'
    });

    // Scrubbed timeline: as user scrolls down, phrases bold and illuminate sequentially without blinding blur
    const manifestoTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerEl || manifestoEl,
        start: 'top 85%',
        end: 'bottom 45%',
        scrub: 0.35
      }
    });

    phrases.forEach((phrase) => {
      const isHighlight = phrase.classList.contains('manifesto-highlight');
      manifestoTl.to(
        phrase,
        {
          color: isHighlight ? '#EDE8D0' : '#FFFFFF',
          fontWeight: isHighlight ? '600' : '500',
          opacity: 1,
          textShadow: 'none',
          duration: 0.55,
          ease: 'power2.out'
        },
        '+=0.08'
      );
    });

    // Native scroll listener fallback to guarantee bolding & illumination on overview page
    const handleScrollCheck = () => {
      const rect = manifestoEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.85) {
        const progress = Math.min(1, Math.max(0, (windowHeight * 0.85 - rect.top) / (rect.height * 0.9)));
        const phraseCount = phrases.length;
        const activeIdx = Math.floor(progress * phraseCount);

        phrases.forEach((p, idx) => {
          const isHighlight = p.classList.contains('manifesto-highlight');
          if (idx <= activeIdx) {
            p.style.color = isHighlight ? '#EDE8D0' : '#FFFFFF';
            p.style.fontWeight = isHighlight ? '600' : '500';
            p.style.opacity = '1';
            p.style.textShadow = 'none';
          } else {
            p.style.color = isHighlight ? 'rgba(237, 232, 208, 0.32)' : 'rgba(246, 244, 240, 0.28)';
            p.style.fontWeight = '300';
            p.style.opacity = '0.7';
            p.style.textShadow = 'none';
          }
        });
      }
    };

    window.addEventListener('scroll', handleScrollCheck, { passive: true });
    handleScrollCheck();
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('scroll', handleScrollCheck);
      manifestoTl.kill();
    };
  }, []);

  return (
    <div className="w-full relative z-10 flex flex-col">
      {/* 1. Complete Original Hero Header with Faststart Ambient Video */}
      <HeroSection />

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
                Inspect dedicated deep-dive architecture pages for each connected healthcare node.
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

      {/* ========================================================================= */}
      {/* 4.C DEDICATED SPOTLIGHT: LABONIX (Pathology Diagnostics Gateway)           */}
      {/* ========================================================================= */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#05020c]">
        <div className="w-full max-w-[1520px] mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
                  04.C · HIGH-THROUGHPUT PATHOLOGY
                </span>
                <span className="w-6 h-[1px] bg-white/15" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-champagne/80">
                  RBCUREXIA ECOSYSTEM
                </span>
              </div>
              <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
                Labonix: Automated Diagnostic <span className="satin-champagne font-normal">Routing &amp; Telemetry.</span>
              </h2>
              <p className="text-sm sm:text-base text-stonewarm max-w-2xl leading-relaxed text-[#b4a8c9]">
                Eliminating diagnostic turnaround delays with bidirectional LIS integration, centrifuge carousel tracking, and instant panic value escalation directly to consultation desks.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://labonix.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Launch labonix.in</span>
                <span>↗</span>
              </a>
              <Link
                to="/labonix"
                className="px-6 py-3 rounded-full bg-white/[0.06] border border-cyan-500/40 text-cyan-200 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Inspect Dedicated Labonix Page ↗
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#090518] border border-cyan-500/20 space-y-4 hover:border-cyan-400/50 transition-all group">
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">CAPABILITY 01 · 42ms SYNC</span>
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-200 transition-colors">
                Bidirectional LIS Gateway
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                High-throughput analyzer outputs populate patient charts chairsidely without manual transcription errors or paper report carriage.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#090518] border border-purple-500/20 space-y-4 hover:border-purple-400/50 transition-all group">
              <span className="text-xs font-mono text-purple-400 uppercase font-semibold">CAPABILITY 02 · MATRIX 2D</span>
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                Specimen Barcode Tracking
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Every collection vial receives a cryptographically signed 2D barcode, verifying chain-of-custody from phlebotomy chair to analyzer rack.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#090518] border border-rose-500/20 space-y-4 hover:border-rose-400/50 transition-all group">
              <span className="text-xs font-mono text-rose-400 uppercase font-semibold">CAPABILITY 03 · ZERO DELAY</span>
              <h3 className="text-xl font-semibold text-white group-hover:text-rose-200 transition-colors">
                Critical Panic Value Alerts
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Severe metabolic, cardiac, or hematologic anomalies trigger automated priority notifications across doctor mobile and nursing consoles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4.D DEDICATED SPOTLIGHT: PULSEPORT (Biometrics & Wearables)                */}
      {/* ========================================================================= */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#070312]/80">
        <div className="w-full max-w-[1520px] mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-widest uppercase text-purple-400 font-semibold">
                  04.D · BIOMETRICS &amp; WEARABLES
                </span>
                <span className="w-6 h-[1px] bg-white/15" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-champagne/80">
                  RBCUREXIA ECOSYSTEM
                </span>
              </div>
              <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
                PulsePort: Biometric Identity &amp; <span className="satin-champagne font-normal">Continuous Telemetry.</span>
              </h2>
              <p className="text-sm sm:text-base text-stonewarm max-w-2xl leading-relaxed text-[#b4a8c9]">
                Patient biometric identification kiosks paired with Medicore smartwatch biosensor integration for 24/7 post-discharge ambulatory monitoring and touchless clinic check-in.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://pulseport.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Launch pulseport.in</span>
                <span>↗</span>
              </a>
              <Link
                to="/pulseport"
                className="px-6 py-3 rounded-full bg-white/[0.06] border border-purple-500/40 text-purple-200 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Inspect Dedicated PulsePort Page ↗
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#0a051a] border border-purple-500/20 space-y-4 hover:border-purple-400/50 transition-all group">
              <span className="text-xs font-mono text-purple-400 uppercase font-semibold">TERMINAL 01 · 0.8s ID</span>
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                Touchless Biometric Check-In
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Patients look into the optical sensor at hospital entry gates. EHR records, past prescriptions, and queue slots are loaded instantly.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#0a051a] border border-cyan-500/20 space-y-4 hover:border-cyan-400/50 transition-all group">
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">AMBULATORY · MEDICORE</span>
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-200 transition-colors">
                Continuous Post-Discharge Vitals
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Medical-grade smartwatches stream resting heart rate, SpO2 levels, and arrhythmia warnings directly to attending cardiologists.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#0a051a] border border-emerald-500/20 space-y-4 hover:border-emerald-400/50 transition-all group">
              <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">RECOVERY · PROACTIVE</span>
              <h3 className="text-xl font-semibold text-white group-hover:text-emerald-200 transition-colors">
                Early Anomaly Detection
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Algorithmic baseline analysis alerts clinical teams of post-operative deterioration before acute re-admission becomes necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

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
