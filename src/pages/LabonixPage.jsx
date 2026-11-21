import PageHero from '../components/ui/PageHero.jsx';
import NextPageCta from '../components/ui/NextPageCta.jsx';

export default function LabonixPage() {
  return (
    <div className="w-full relative z-10 flex flex-col">
      <PageHero
        eyebrowNum="04"
        eyebrowText="DIAGNOSTIC PATHOLOGY"
        title="Labonix: Automated Pathology &"
        highlight="Reagent Intelligence."
        description="High-throughput diagnostic pathology and genomics gateway. Connecting doctor consultation desks and hospital wards directly to automated chemistry analyzers, specimen barcode tracking, and panic value escalation."
        primaryCtaText="Open Live App: labonix.in"
        primaryCtaLink="https://labonix.in"
        secondaryCtaText="Inspect Architecture"
        secondaryCtaLink="/architecture"
        pageId="labonix"
      />

      <section className="relative z-10 w-full py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#06030e]/80">
        <div className="w-full max-w-[1520px] mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-sky-400 block font-semibold">
              LABORATORY INFORMATION MANAGEMENT SYSTEM (LIMS)
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              Zero-Paper Pathology <span className="satin-champagne font-normal">Requisitions.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              When a physician orders a diagnostic panel in Panacea or CureNEST, Labonix generates a 2D matrix barcode label. Phlebotomists scan the vial at bedside, eliminating mislabeled blood samples and lost requisition slips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#090416] border border-sky-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-sky-400 uppercase font-semibold">
                FEATURE 01 · SPECIMEN TRACKING
              </span>
              <h3 className="text-xl font-semibold text-white">
                RFID &amp; Barcode Specimen Chain
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Every sample is timestamped at collection, centrifugation, analyzer insertion, and result validation, creating an unbroken medico-legal audit chain.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090416] border border-sky-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-sky-400 uppercase font-semibold">
                FEATURE 02 · ANALYZER INTEGRATION
              </span>
              <h3 className="text-xl font-semibold text-white">
                Bi-Directional Machine Interfacing
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Supports ASTM and HL7 protocol bridges for major automated biochemistry, hematology, and immunoassay analyzers. Results populate into EHR charts without manual re-typing.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090416] border border-sky-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-sky-400 uppercase font-semibold">
                FEATURE 03 · AUTOMATED RESTOCK
              </span>
              <h3 className="text-xl font-semibold text-white">
                Predictive Reagent Supply AI
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Calculates daily test volume burn rates for chemical reagents and culture media. Generates automated purchase orders before critical testing kits run out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NextPageCta
        nextNum="05"
        nextLabel="PulsePort"
        title="PulsePort Biometric & Continuous Telemetry"
        description="Explore touchless facial identification check-in kiosks paired with 24/7 continuous Medicore wearable vital monitoring."
        link="/pulseport"
      />
    </div>
  );
}
