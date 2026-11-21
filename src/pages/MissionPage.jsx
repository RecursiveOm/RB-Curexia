import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '../components/ui/PageHero.jsx';
import NextPageCta from '../components/ui/NextPageCta.jsx';
import { MISSION_PILLARS } from '../data/ecosystemData.js';

export default function MissionPage() {
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

    // Scroll listener fallback for smooth progressive bolding
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
    // Trigger initial check
    handleScrollCheck();
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('scroll', handleScrollCheck);
      manifestoTl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === manifestoEl || st.trigger === containerEl) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <div className="w-full relative z-10 flex flex-col" id="act-mission">
      {/* 1. Cinematic Hero */}
      <PageHero
        eyebrowNum="02"
        eyebrowText="OUR MISSION"
        title="Empowering Healthcare Innovation Through"
        highlight="Digital Continuity."
        description="We believe technology in medicine should never add administrative burdens. Our mission is to restore clinical intuition, eliminate paper fragmentation, and empower doctors and patients with continuous, secure medical intelligence."
        primaryCtaText="Discover Panacea OS"
        primaryCtaLink="/panacea"
        secondaryCtaText="Explore System Architecture"
        secondaryCtaLink="/architecture"
        pageId="mission"
      />

      {/* 2. The Fragmentation Problem Section */}
      <section className="relative z-10 w-full py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#070312]/60">
        <div className="w-full max-w-[1520px] mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-rose-400 block font-semibold">
              THE HEALTHCARE FRAGMENTATION DILEMMA
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              Why Healthcare Needs an <span className="satin-champagne font-normal">Architectural Reset.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              Every single day, medical practitioners make life-critical clinical decisions with fragmented data. Paper discharge summaries get misplaced, pathology records are delayed, and doctors are forced to stare at clunky software screens instead of looking into the eyes of their patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0e071e] border border-rose-500/20 space-y-3">
              <span className="text-xs font-mono text-rose-400 font-semibold uppercase">Challenge 01</span>
              <h3 className="text-lg font-semibold text-white">Lost Medical History</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Patients arrive at new clinics without their past prescriptions, leading to duplicate testing and delayed interventions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e071e] border border-amber-500/20 space-y-3">
              <span className="text-xs font-mono text-amber-400 font-semibold uppercase">Challenge 02</span>
              <h3 className="text-lg font-semibold text-white">Administrative Burnout</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Physicians spend more than 40% of consultation time manually typing billing codes and EHR entries rather than examining patients.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e071e] border border-purple-500/20 space-y-3">
              <span className="text-xs font-mono text-purple-400 font-semibold uppercase">Challenge 03</span>
              <h3 className="text-lg font-semibold text-white">Silent Drug Interactions</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Cross-specialty prescription collisions go undetected due to siloed pharmacy counters without algorithmic contraindication screening.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e071e] border border-cyan-500/20 space-y-3">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">Challenge 04</span>
              <h3 className="text-lg font-semibold text-white">Inpatient Telemetry Gaps</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Ward telemetry often relies on periodic manual nurse clipboard checks rather than continuous wireless biosensor telemetry streams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Core Manifesto Statement with Scroll-Driven Sequential Bolding */}
      <section className="relative z-10 w-full py-28 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]" id="manifesto-scroll-pin">
        <div className="w-full max-w-5xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <span className="font-display text-xs font-semibold tracking-[0.28em] uppercase text-purple-400">
              02.B · OUR MANIFESTO
            </span>
            <span className="w-8 h-[1px] bg-white/15" />
            <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-champagne/80">
              PHILOSOPHY OF HEALING
            </span>
          </div>

          <h2 className="font-display font-light text-2xl sm:text-4xl lg:text-[46px] leading-[1.4] tracking-[-0.015em] text-white" id="mission-manifesto">
            <span className="manifesto-phrase inline-block transition-all duration-500">RBCurexia is dedicated to </span>{' '}
            <span className="manifesto-phrase manifesto-highlight inline-block transition-all duration-500">revolutionizing healthcare by making it entirely digital. </span>{' '}
            <span className="manifesto-phrase inline-block transition-all duration-500">Our mission is to achieve a landmark transformation in patient care </span>{' '}
            <span className="manifesto-phrase manifesto-highlight inline-block transition-all duration-500">by providing seamless, secure access to medical records </span>{' '}
            <span className="manifesto-phrase manifesto-highlight inline-block transition-all duration-500">and AI-driven health assessments </span>{' '}
            <span className="manifesto-phrase inline-block transition-all duration-500">for patients, medical practitioners, and pharmacists—</span>{' '}
            <span className="manifesto-phrase manifesto-highlight inline-block transition-all duration-500">building a fully digitized healthcare ecosystem </span>{' '}
            <span className="manifesto-phrase inline-block transition-all duration-500">that enhances accessibility, clinical precision, and well-being.</span>
          </h2>
        </div>
      </section>

      {/* 4. The 5 Core Mission Pillars */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#06030e]/80">
        <div className="w-full max-w-[1520px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-champagne block font-semibold">
              ARCHITECTURAL FOUNDATION
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              The Five Pillars of <span className="satin-champagne font-normal">Clinical Dignity.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              Our technology is engineered around five inviolable principles that protect both the clinical practice and the patient experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MISSION_PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="p-8 rounded-3xl bg-[#090416] border border-white/10 hover:border-purple-400/40 transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-purple-400 font-semibold">
                    PILLAR {pillar.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-champagne group-hover:scale-125 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-champagne transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-purple-300 uppercase">
                  {pillar.headline}
                </p>
                <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b6a9c8]">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Photographic Split-Screen Visual Storytelling */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]">
        <div className="w-full max-w-[1520px] mx-auto space-y-32">
          
          {/* Scene 01: Point-of-Care Intelligence */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <div className="relative w-full max-w-[620px]">
              <div className="mission-photo-frame rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] w-full relative group bg-[#090514]">
                <img
                  src="/assets/doctor-consultation-blonde.webp"
                  alt="Doctor with digital consultation tools"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06020f]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/90 bg-obsidian/70 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                    OPD CONSULTATION · CHAIRSIDE AI
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase text-purple-400 font-semibold">
                SCENE 01 · CLINICAL EYE-CONTACT
              </span>
              <h3 className="satin-headline text-2xl sm:text-4xl font-light text-white leading-tight">
                Restoring the Sacred Bond Between <span className="satin-champagne font-normal">Doctor and Patient.</span>
              </h3>
              <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b6a9c8]">
                Traditional Electronic Health Records forced clinicians to face glowing desktop monitors, typing billing metadata while patients spoke of their vulnerabilities. RBCurexia redesigns the interface with intelligent natural stylus input and real-time audio parsing, returning eye-contact to the medical examination room.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <span className="text-3xl font-display text-champagne font-light">68%</span>
                <span className="text-xs text-stonewarm max-w-xs leading-tight">
                  Reduction in clinical keyboard typing time reported by practicing general physicians.
                </span>
              </div>
            </div>
          </div>

          {/* Scene 02: Inpatient Critical Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <div className="order-2 lg:order-1 space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
                SCENE 02 · REAL-TIME BIOSENSORS
              </span>
              <h3 className="satin-headline text-2xl sm:text-4xl font-light text-white leading-tight">
                Continuous Telemetry Beyond <span className="satin-champagne font-normal">Ward Checkpoints.</span>
              </h3>
              <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b6a9c8]">
                Inpatient recovery should never depend on periodic manual vital chart checks every four hours. Through CureNEST integration, pulse oximetry, cardiac rhythm, and physiological trends stream wirelessly to duty station consoles, warning of clinical deterioration hours before emergency intervention is required.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <span className="text-3xl font-display text-cyan-300 font-light">&lt; 0.8s</span>
                <span className="text-xs text-stonewarm max-w-xs leading-tight">
                  Wireless telemetry propagation delay from patient biosensor to central nursing console.
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative w-full max-w-[620px]">
              <div className="mission-photo-frame rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] w-full relative group bg-[#090514]">
                <img
                  src="/assets/doctors-collaboration-specialists.webp"
                  alt="Nurse station with wireless tablet telemetry"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06020f]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-200 bg-obsidian/70 px-3 py-1.5 rounded-lg border border-cyan-400/20 backdrop-blur-md">
                    CURENEST WARD OS · REAL-TIME TELEMETRY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scene 03: Unified Pharmacy & Diagnostic Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <div className="relative w-full max-w-[620px]">
              <div className="mission-photo-frame rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] w-full relative group bg-[#090514]">
                <img
                  src="/assets/doctors-hospital-hallway-scrubs.webp"
                  alt="Doctor with elderly patient discussing continuous care"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06020f]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-xs font-mono text-champagne bg-obsidian/70 px-3 py-1.5 rounded-lg border border-champagne/20 backdrop-blur-md">
                    CONTINUOUS CARE · ZERO PAPER LOSS
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase text-champagne font-semibold">
                SCENE 03 · LIFELONG MEDICAL MEMORY
              </span>
              <h3 className="satin-headline text-2xl sm:text-4xl font-light text-white leading-tight">
                No Record Forgotten. <span className="satin-champagne font-normal">No Prescription Misplaced.</span>
              </h3>
              <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b6a9c8]">
                From childhood immunizations to chronic geriatric management, RBCurexia secures a patient&apos;s complete clinical journey within an encrypted, tamper-evident repository. When visiting a specialist across town, clinical history precedes the consultation, eliminating dangerous prescription amnesia.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <span className="text-3xl font-display text-champagne font-light">100%</span>
                <span className="text-xs text-stonewarm max-w-xs leading-tight">
                  Cryptographically verified e-Prescription audit trail connecting clinics to dispensing counters.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Next Page CTA */}
      <NextPageCta
        nextNum="03"
        nextLabel="Panacea"
        title="Panacea OS · Clinical Workstation"
        description="Experience the next-generation operating system engineered for outpatient consultation, digital pen prescriptions, and algorithmic patient queues."
        link="/panacea"
      />
    </div>
  );
}
