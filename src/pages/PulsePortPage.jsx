import PageHero from '../components/ui/PageHero.jsx';
import NextPageCta from '../components/ui/NextPageCta.jsx';

export default function PulsePortPage() {
  return (
    <div className="w-full relative z-10 flex flex-col">
      <PageHero
        eyebrowNum="04.D"
        eyebrowText="BIOMETRICS &amp; WEARABLES"
        title="PulsePort: Biometric Identity &"
        highlight="Continuous Telemetry."
        description="Patient biometric identification kiosks paired with Medicore smartwatch biosensor integration for 24/7 post-discharge ambulatory monitoring, physiological anomaly alarms, and touchless clinic check-in."
        primaryCtaText="Inspect Architecture"
        primaryCtaLink="/architecture"
        secondaryCtaText="Deploy Biometric Terminals"
        secondaryCtaLink="/concierge"
        pageId="pulseport"
      />

      <section className="relative z-10 w-full py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#06030e]/80">
        <div className="w-full max-w-[1520px] mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-purple-400 block font-semibold">
              CONTINUOUS PHYSIOLOGICAL SENSING
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              Hospital-Grade Awareness Beyond the <span className="satin-champagne font-normal">Clinic Walls.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              PulsePort creates an ongoing clinical umbilical cord between high-acuity patients and their treating specialists. High-risk cardiac and post-surgical patients wear paired biosensors that stream live telemetry directly to the doctor's Panacea dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#090416] border border-purple-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-purple-400 uppercase font-semibold">
                SYSTEM 01 · TOUCHLESS CHECK-IN
              </span>
              <h3 className="text-xl font-semibold text-white">
                Facial Biometric Terminal
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Privacy-preserving facial vector mapping instantly verifies returning patients in under 0.8 seconds, retrieving their encrypted EHR file without manual reception paperwork.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090416] border border-purple-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-purple-400 uppercase font-semibold">
                SYSTEM 02 · AMBULATORY VITALS
              </span>
              <h3 className="text-xl font-semibold text-white">
                Medicore Biosensor Stream
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Continuous PPG optical heart rate, single-lead ECG rhythm monitoring, peripheral SpO2, and skin temperature streaming via secure cellular gateways.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090416] border border-purple-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-purple-400 uppercase font-semibold">
                SYSTEM 03 · EARLY WARNING ESCALATION
              </span>
              <h3 className="text-xl font-semibold text-white">
                Algorithmic Arrhythmia Alarm
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Machine-learning edge filters detect atrial fibrillation, sudden tachyarrhythmias, or oxygen desaturation and automatically alert the cardiology clan on-call.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NextPageCta
        nextNum="05"
        nextLabel="Network"
        title="Plugins Social · Clinician Network"
        description="Discover how doctors and hospitals collaborate on multi-specialty clinical boards."
        link="/network"
      />
    </div>
  );
}
