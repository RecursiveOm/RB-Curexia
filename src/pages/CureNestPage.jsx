import PageHero from '../components/ui/PageHero.jsx';
import NextPageCta from '../components/ui/NextPageCta.jsx';

export default function CureNestPage() {
  return (
    <div className="w-full relative z-10 flex flex-col">
      <PageHero
        eyebrowNum="04.A"
        eyebrowText="INPATIENT WARD OS"
        title="CureNEST: Every Bed, Every Ward,"
        highlight="One Nest of Care."
        description="Enterprise inpatient, ICU, and surgical recovery ward operating system. Unifying multi-parameter bed telemetry, automated nurse shift handover logs, and saline infusion monitoring into a single synchronized hospital cockpit."
        primaryCtaText="Inspect Architecture"
        primaryCtaLink="/architecture"
        secondaryCtaText="Book a Hospital Walkthrough"
        secondaryCtaLink="/concierge"
        pageId="curenest"
      />

      {/* Inpatient Capabilities Breakdown */}
      <section className="relative z-10 w-full py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#06030e]/80">
        <div className="w-full max-w-[1520px] mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block font-semibold">
              CRITICAL CARE &amp; INPATIENT SYNCHRONIZATION
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              Continuous Telemetry from <span className="satin-champagne font-normal">Admissions to Discharge.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              CureNEST eliminates clipboard telemetry handoffs. Ward bedside monitors stream ECG, SpO2, arterial pressure, and infusion pump flow rates directly into nursing station dashboards with automated Early Warning Score (EWS) triggers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#090416] border border-cyan-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                MODULE 01 · BEDSIDE TELEMETRY
              </span>
              <h3 className="text-xl font-semibold text-white">
                Multi-Parameter Bed HUD
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Continuous Bluetooth and Wi-Fi streaming from wall-mounted ICU monitors and ambulatory telemetry transmitters. Instant alerts when vitals exceed customized clinical thresholds.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090416] border border-cyan-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                MODULE 02 · SHIFT HANDOVER
              </span>
              <h3 className="text-xl font-semibold text-white">
                Biometric Nurse Handover OS
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Digital shift logs with biometric nurse verification. Eliminates lost verbal handovers between morning and night shifts with structured medication timelines and pending orders.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090416] border border-cyan-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                MODULE 03 · INFUSION CONTROL
              </span>
              <h3 className="text-xl font-semibold text-white">
                Smart IV Drip Rate Monitoring
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Optical drop sensors detect saline bag exhaustion and flow rate abnormalities, preventing air embolisms and alerting the ward staff 15 minutes before replacement is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ward Telemetry Visual Diagram */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]">
        <div className="w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-widest uppercase text-champagne block font-semibold">
              HOSPITAL OPERATIONAL EFFICIENCY
            </span>
            <h2 className="satin-headline text-3xl sm:text-4xl font-light text-white leading-tight">
              Real-Time Bed Occupancy &amp; Emergency Escalation.
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              Hospital administrators view live floor plans across ICU, Step-Down, General Ward, and Isolation wings. Color-coded bed states indicate sanitization status, attending physician, and expected discharge timelines.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90">
                Automated Code Blue Alerts
              </span>
              <span className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90">
                NABH Ward Compliance Audit
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0b051c] border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/brand-curenest.png"
                  alt="CureNEST"
                  className="h-8 w-auto object-contain"
                />
                <span className="text-xs font-mono text-cyan-400">WARD TELEMETRY METRICS</span>
              </div>
              <span className="text-xs font-mono text-emerald-400">ALL NODES ONLINE</span>
            </div>
            <div className="space-y-4 font-mono text-xs text-white/80">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex justify-between items-center">
                <span>ICU BED 04 (VENTILATOR SYNCED)</span>
                <span className="text-cyan-300">SpO2: 98% · HR: 74 BPM</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex justify-between items-center">
                <span>WARD 2B (POST-OP CARDIAC)</span>
                <span className="text-emerald-300">STABLE · IV SALINE 80ML/HR</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex justify-between items-center">
                <span>RECOVERY 01 (PEDIATRIC)</span>
                <span className="text-champagne">NURSE CHECK DUE IN 12 MINS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NextPageCta
        nextNum="04.B"
        nextLabel="Labonix"
        title="Labonix Diagnostic Laboratory Gateway"
        description="Inspect the automated high-throughput pathology bridge connecting ward charts to automated chemical analyzers."
        link="/labonix"
      />
    </div>
  );
}
