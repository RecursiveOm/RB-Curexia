import PageHero from '../components/ui/PageHero.jsx';
import NextPageCta from '../components/ui/NextPageCta.jsx';

export default function PharmixoPage() {
  return (
    <div className="w-full relative z-10 flex flex-col">
      <PageHero
        eyebrowNum="04.C"
        eyebrowText="PHARMACY NETWORK"
        title="Pharmixo: GPS-Verified Dispensation &"
        highlight="Inventory AI."
        description="Integrated hospital and retail pharmacy operations portal. Unifying cryptographic e-prescription fulfillment, generic substitution bio-equivalence checks, batch expiry tracking, and temperature-controlled delivery."
        primaryCtaText="Inspect Architecture"
        primaryCtaLink="/architecture"
        secondaryCtaText="Connect In-House Pharmacy"
        secondaryCtaLink="/concierge"
      />

      <section className="relative z-10 w-full py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#06030e]/80">
        <div className="w-full max-w-[1520px] mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-pink-400 block font-semibold">
              CLOSED-LOOP MEDICATION DISPENSATION
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              Eliminating Counter Errors &amp; <span className="satin-champagne font-normal">Prescription Fraud.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              Pharmixo bridges the clinic desk directly with the pharmacy checkout counter. Prescriptions signed by verified doctors in Panacea sync automatically to the pharmacist terminal with barcode verification before pills leave the shelf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#090416] border border-pink-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-pink-400 uppercase font-semibold">
                SYSTEM 01 · BATCH INTEGRITY
              </span>
              <h3 className="text-xl font-semibold text-white">
                Barcode Expiry &amp; Lot Control
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Scans 2D DataMatrix barcodes on medicine strips to ensure near-expiry drugs are never dispensed to patients, automatically routing them to return queues.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090416] border border-pink-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-pink-400 uppercase font-semibold">
                SYSTEM 02 · GENERIC BIO-EQUIVALENCE
              </span>
              <h3 className="text-xl font-semibold text-white">
                Generic Substitution Engine
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Offers pharmacopeia-approved affordable generic equivalents when prescribed branded medications are out of stock, lowering out-of-pocket patient costs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090416] border border-pink-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-pink-400 uppercase font-semibold">
                SYSTEM 03 · DISPATCH TELEMETRY
              </span>
              <h3 className="text-xl font-semibold text-white">
                GPS Verified Home Delivery
              </h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Coordinates hospital pharmacy couriers with real-time GPS tracking and cold-chain temperature verification for insulin and biologicals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NextPageCta
        nextNum="04.D"
        nextLabel="PulsePort"
        title="PulsePort Biometric & Continuous Wearables"
        description="Inspect facial biometric patient registration terminals and 24/7 post-discharge ambulatory monitoring."
        link="/pulseport"
      />
    </div>
  );
}
