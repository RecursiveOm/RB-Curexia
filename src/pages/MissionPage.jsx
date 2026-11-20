import PageHero from '../components/ui/PageHero.jsx';
import NextPageCta from '../components/ui/NextPageCta.jsx';
import { MISSION_PILLARS } from '../data/ecosystemData.js';

export default function MissionPage() {
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

      {/* 3. The Core Manifesto Statement */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]" id="manifesto-scroll-pin">
        <div className="w-full max-w-5xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-xs font-semibold tracking-[0.28em] uppercase text-purple-400">
              02.B · OUR MANIFESTO
            </span>
            <span className="w-8 h-[1px] bg-white/15" />
            <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-champagne/80">
              PHILOSOPHY OF HEALING
            </span>
          </div>

          <h2 className="font-display font-light text-2xl sm:text-4xl lg:text-[44px] leading-[1.35] tracking-[-0.015em] text-white" id="mission-manifesto">
            <span className="manifesto-phrase text-white/70">RBCurexia is dedicated to </span>
            <span className="manifesto-phrase text-purple-300 font-normal">revolutionizing healthcare by making it entirely digital. </span>
            <span className="manifesto-phrase text-white/70">Our mission is to achieve a landmark transformation in patient care </span>
            <span className="manifesto-phrase text-champagne font-normal">by providing seamless, secure access to medical records </span>
            <span className="manifesto-phrase text-purple-200 font-normal">and AI-driven health assessments </span>
            <span className="manifesto-phrase text-white/70">for patients, medical practitioners, and pharmacists—</span>
            <span className="manifesto-phrase text-cyan-300 font-normal">building a fully digitized healthcare ecosystem </span>
            <span className="manifesto-phrase text-white/80">that enhances accessibility, clinical precision, and well-being.</span>
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
                  alt="Physician examining real-time patient diagnostics"
                  className="photo-replacement w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06030e]/85 via-transparent to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0c071a]/90 backdrop-blur-md rounded-2xl p-4 border border-purple-500/25 shadow-xl z-20">
                  <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-purple-300 block mb-1">
                    BIOSENSOR TELEMETRY
                  </span>
                  <p className="font-display text-xs sm:text-sm font-medium text-white leading-snug">
                    Continuous Smartwatch &amp; Medicore Wearable Vital Streams
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="font-display text-xs tracking-[0.26em] uppercase text-purple-400 block font-medium">
                SCENE I · POINT-OF-CARE INTELLIGENCE
              </span>
              <h3 className="satin-headline font-light text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white">
                Clinical Clarity at Every Consultation.
              </h3>
              <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a9c6] max-w-xl">
                When a physician sits across from a patient, technology should disappear into intuition. Our Electronic Health Record (EHR) framework unifies medical history, pathology test results, treatment logs, and live biosensor vitals into a single chairside view.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90 font-medium">
                  Smartwatch Biosensor Sync
                </span>
                <span className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90 font-medium">
                  AI-Assisted Prescription Checks
                </span>
              </div>
            </div>
          </div>

          {/* Scene 02: Multidisciplinary Collaboration (Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="font-display text-xs tracking-[0.26em] uppercase text-champagne block font-medium">
                SCENE II · MULTIDISCIPLINARY COLLABORATION
              </span>
              <h3 className="satin-headline font-light text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white">
                Coordinated Care Across Specialists &amp; Wards.
              </h3>
              <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a9c6] max-w-xl">
                Complex diagnoses require seamless teamwork across departments. From AI-integrated diagnostic imaging review to multi-phase surgical treatment planning, clinical teams share structured case records and real-time observations without fragmented paperwork.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90 font-medium">
                  AI-Integrated Diagnostics
                </span>
                <span className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90 font-medium">
                  Multi-Phase Care Pathways
                </span>
              </div>
            </div>

            <div className="relative w-full max-w-[620px] order-1 lg:order-2">
              <div className="mission-photo-frame rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] w-full relative group bg-[#090514]">
                <img
                  src="/assets/doctors-hospital-hallway-scrubs.webp"
                  alt="Multidisciplinary surgical and hospital medical team collaborating in hallway"
                  className="photo-replacement w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06030e]/85 via-transparent to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0c071a]/90 backdrop-blur-md rounded-2xl p-4 border border-purple-500/25 shadow-xl z-20">
                  <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-purple-300 block mb-1">
                    SHARED CLINICAL BOARDS
                  </span>
                  <p className="font-display text-xs sm:text-sm font-medium text-white leading-snug">
                    Synchronized Pathology, Radiology &amp; Case Histories
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scene 03: Longitudinal Records & Patient Dignity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <div className="relative w-full max-w-[620px]">
              <div className="mission-photo-frame rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] w-full relative group bg-[#090514]">
                <img
                  src="/assets/doctors-collaboration-specialists.webp"
                  alt="Medical practitioners reviewing patient treatment trajectory"
                  className="photo-replacement w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06030e]/85 via-transparent to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0c071a]/90 backdrop-blur-md rounded-2xl p-4 border border-purple-500/25 shadow-xl z-20">
                  <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-purple-300 block mb-1">
                    LONGITUDINAL EHR
                  </span>
                  <p className="font-display text-xs sm:text-sm font-medium text-white leading-snug">
                    Complete Patient Lifetime Records &amp; Diagnostic Context
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="font-display text-xs tracking-[0.26em] uppercase text-purple-400 block font-medium">
                SCENE III · LIFELONG CONTINUITY
              </span>
              <h3 className="satin-headline font-light text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white">
                Dignity Through Continuous Understanding.
              </h3>
              <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a9c6] max-w-xl">
                A patient is not a collection of isolated billing episodes. They are human beings whose past treatments, chronic conditions, and allergic reactions must be respected across every clinic door they open. RBCurexia ensures their story is never lost.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90 font-medium">
                  Lifelong Cryptographic Patient ID
                </span>
                <span className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90 font-medium">
                  Patient Consent Governed Access
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
        title="Panacea Clinical Operating System"
        description="Inspect the flagship chairside cockpit with natural handwriting OCR, live queue coordination, and adverse drug screening."
        link="/panacea"
      />
    </div>
  );
}
