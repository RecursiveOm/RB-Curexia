import { useState } from 'react';
import PageHero from '../components/ui/PageHero.jsx';
import NextPageCta from '../components/ui/NextPageCta.jsx';
import LivePatientQueueDemo from '../components/interactive/LivePatientQueueDemo.jsx';

const PANACEA_MODULES = [
  {
    id: 'clinical-mode',
    name: 'Clinical Mode Cockpit',
    badge: 'PRIMARY WORKSPACE',
    headline: 'Unified Consultation & Electronic Health Records',
    desc: 'The central consultation screen presents patient vitals, active medications, allergy red flags, and previous clinical summaries on a single pane. Doctors navigate with keyboard shortcuts or touch gestures, cutting EHR documentation time by 60%.',
    features: [
      'Zero-latency chairside EHR charting with SNOMED CT coding',
      'Unified historical timeline of pathology, radiology & surgical notes',
      'One-tap previous prescription cloning and refill authorizations'
    ]
  },
  {
    id: 'digital-pad',
    name: 'Digital Pad & OCR AI',
    badge: 'STYLUS & PEN ENGINE',
    headline: 'Handwrite Naturally While AI Structures the Data',
    desc: 'Clinicians who prefer writing with a stylus on iPads or Android tablets can write freely. The clinical OCR neural engine converts bedside cursive handwriting into structured Electronic Health Record fields in real time.',
    features: [
      'Preserves original handwritten ink strokes for medico-legal verification',
      'Clinical handwriting parser specialized in Indian medical terminology',
      'Automatic dosage conversion and generic drug matching'
    ]
  },
  {
    id: 'drug-locker',
    name: 'Drug Locker & Safety',
    badge: 'SAFETY & ALERTS',
    headline: 'Real-Time Adverse Drug Interaction Screening',
    desc: 'As drugs are selected on the prescription pad, Panacea screens against known drug-drug contraindications, patient allergy profiles, hepatic/renal clearance thresholds, and pregnancy risks before cryptographic signing.',
    features: [
      'Comprehensive database of generic and branded Indian pharmaceuticals',
      'Severity-graded clinical alerts (Critical, Moderate, Advisory)',
      'Suggested generic substitutes with equivalent therapeutic bio-availability'
    ]
  },
  {
    id: 'appointments',
    name: 'OPD Queue & Appointments',
    badge: 'OPERATIONS & QUEUES',
    headline: 'WhatsApp QR Check-in & Intelligent Triage',
    desc: 'Patients scan a QR code at the clinic reception to enter the OPD queue on WhatsApp. Panacea calculates dynamic wait times based on consultation complexity and alerts patients as their turn approaches.',
    features: [
      'Multi-channel queue coordination (walk-ins, appointments, emergencies)',
      'Automated multilingual WhatsApp appointment reminders and follow-up alerts',
      'Real-time doctor room status indicators across waiting area displays'
    ]
  },
  {
    id: 'report-vault',
    name: 'Medical Report Vault',
    badge: 'AI PARSER',
    headline: 'Instant AI Synthesis of Scans & Pathology PDFs',
    desc: 'Upload multi-page pathology PDFs, blood panels, or scan reports. The report vault extracts key biomarker values, graphs longitudinal trends (e.g. HbA1c over 24 months), and flags out-of-range panic values.',
    features: [
      'Automated extraction of lab reference ranges and specimen timestamps',
      'Interactive visual biomarker trend charts across multi-year histories',
      'Instant clinical summary generation for rapid specialist referrals'
    ]
  }
];

export default function PanaceaPage() {
  const [activeModule, setActiveModule] = useState(PANACEA_MODULES[0]);

  return (
    <div className="w-full relative z-10 flex flex-col" id="act-panacea">
      {/* 1. Product Hero */}
      <PageHero
        eyebrowNum="03"
        eyebrowText="PRODUCT SHOWCASE"
        title="Panacea Clinical"
        highlight="Operating System."
        description="The next-generation clinician cockpit: unifying longitudinal EHR dossiers, natural stylus digital pad handwriting, adverse drug interaction screening, and smart OPD queues into one fluid 3D workstation interface."
        primaryCtaText="Explore System Architecture"
        primaryCtaLink="/architecture"
        secondaryCtaText="Book a Hospital Demo"
        secondaryCtaLink="/concierge"
        pageId="panacea"
      />

      {/* 2. 3D Floating Monitor Chassis with Real UI */}
      <section className="relative z-10 w-full py-12 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="w-full max-w-[1520px] mx-auto space-y-8">
          <div className="perspective-stage relative pt-4 pb-8" style={{ perspective: '1600px' }}>
            <div
              id="panacea-3d-monolith"
              className="product-frame-3d relative mx-auto max-w-[1320px] rounded-3xl bg-[#0d071d] border-2 border-purple-500/30 p-3 sm:p-5 shadow-[0_30px_90px_-20px_rgba(139,92,246,0.35)]"
            >
              {/* Glowing Purple Edge Glass Aura */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-cyan-500/20 rounded-[26px] blur-sm pointer-events-none -z-10" />

              {/* Top Monitor Bezel */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080412]/90 rounded-2xl border border-white/10 mb-3 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400/50 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/50 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/50 inline-block" />
                  <div className="h-4 w-[1px] bg-white/15 mx-2" />
                  <span className="text-[11px] font-mono tracking-wider text-purple-200/90 font-medium">
                    PANACEA CLINICAL OS · SECURE CHAIRSIDE WORKSPACE
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[10px] font-mono text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    99.99% UPTIME · ENCRYPTED
                  </div>
                </div>
              </div>

              {/* Main Product UI Image */}
              <div className="relative rounded-xl overflow-hidden bg-white shadow-inner">
                <img
                  src="/assets/embedded-23185802ea52.webp"
                  alt="Panacea Dashboard Interface Preview"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>

              {/* HUD Telemetry Bar */}
              <div className="mt-4 pt-4 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span className="text-xs font-mono text-white/80">
                    LATENCY: &lt; 14MS (ZERO-LATENCY LOCAL DEXIE CACHE)
                  </span>
                </div>
                <div className="flex items-center justify-start md:justify-end gap-3 text-xs font-mono text-purple-300">
                  <span>AES-256 ENCRYPTED · DIGITAL PAD SYNCED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Live OPD Patient Queue Simulator (Matching User Reference Image 2) */}
          <div className="pt-8 max-w-[1320px] mx-auto">
            <LivePatientQueueDemo />
          </div>
        </div>
      </section>

      {/* 3. Interactive Clinical Modules Suite */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#070312]/60">
        <div className="w-full max-w-[1520px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-champagne block font-semibold">
              CORE CAPABILITIES
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              Engineered for the Full <span className="satin-champagne font-normal">Consultation Cycle.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              Explore the five integrated software engines that power Panacea inside clinics and multi-specialty OPDs.
            </p>
          </div>

          {/* Module Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PANACEA_MODULES.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod)}
                type="button"
                className={`px-5 py-3 rounded-2xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeModule.id === mod.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                    : 'bg-white/[0.04] text-stonewarm border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {mod.name}
              </button>
            ))}
          </div>

          {/* Active Module Detail Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0518] border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-purple-950 border border-purple-500/30 text-purple-300">
                  {activeModule.badge}
                </span>
                <h3 className="satin-headline text-3xl sm:text-4xl font-light text-white">
                  {activeModule.headline}
                </h3>
                <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#c0b4d4]">
                  {activeModule.desc}
                </p>

                <div className="pt-4 space-y-3">
                  <span className="text-xs font-mono uppercase text-champagne block font-semibold">
                    KEY CAPABILITIES
                  </span>
                  <ul className="space-y-2">
                    {activeModule.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-bone">
                        <span className="text-champagne font-mono">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-4">
                <span className="text-xs font-mono text-purple-300 uppercase block">
                  WORKFLOW IMPACT
                </span>
                <div className="space-y-3 text-xs text-stonewarm/90 leading-relaxed">
                  <p>
                    <strong className="text-white block mb-0.5">Zero Transcription Delay:</strong>
                    Direct sync to pharmacy dispatch (Pharmixo) and diagnostic testing (Labonix).
                  </p>
                  <p>
                    <strong className="text-white block mb-0.5">Patient WhatsApp Sync:</strong>
                    Handouts automatically formatted in Hindi, Marathi, or English delivered to the patient’s phone.
                  </p>
                  <p>
                    <strong className="text-white block mb-0.5">Audit Security:</strong>
                    Cryptographic signature attached to every issued prescription.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bedside to Pharmacy Journey */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]">
        <div className="w-full max-w-[1520px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-champagne block font-semibold">
              END-TO-END PATIENT JOURNEY
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              How Care Moves Through <span className="satin-champagne font-normal">Panacea.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#090416] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-purple-400 font-semibold">STEP 01</span>
              <h3 className="text-base font-semibold text-white">QR Check-in &amp; Vitals</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Patient checks in via WhatsApp QR terminal. Vitals recorded at triage sync immediately to the consultation chart.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090416] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-cyan-400 font-semibold">STEP 02</span>
              <h3 className="text-base font-semibold text-white">Physician Consultation</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Doctor examines patient, reviews longitudinal report trends, writes e-Rx with stylus pen, and receives live allergy alerts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090416] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-pink-400 font-semibold">STEP 03</span>
              <h3 className="text-base font-semibold text-white">Automated Dispatch</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Medication order syncs to Pharmixo pharmacy counter; diagnostic panels dispatch to Labonix analyzer queues.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090416] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-emerald-400 font-semibold">STEP 04</span>
              <h3 className="text-base font-semibold text-white">Follow-up &amp; Telemetry</h3>
              <p className="text-xs text-stonewarm leading-relaxed">
                Patient receives personalized multilingual instructions on WhatsApp; wearable vitals continue post-discharge monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Next Page CTA */}
      <NextPageCta
        nextNum="04"
        nextLabel="Architecture"
        title="Complete 24-Service System Architecture"
        description="Explore the technical foundation, cryptographic data vault, and 4 connected healthcare nodes."
        link="/architecture"
      />
    </div>
  );
}
