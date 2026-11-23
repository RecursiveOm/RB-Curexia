import PageHero from '../components/ui/PageHero.jsx';
import NextPageCta from '../components/ui/NextPageCta.jsx';
import NetworkTopology3D from '../components/3d/NetworkTopology3D.jsx';

export default function NetworkPage() {
  return (
    <div className="w-full relative z-10 flex flex-col" id="act-network">
      {/* 1. Network Hero */}
      <PageHero
        eyebrowNum="07"
        eyebrowText="CLINICIAN ECOSYSTEM"
        title="A Connected Ecosystem of"
        highlight="Doctors & Hospitals."
        description="RBCurexia goes beyond standalone clinic software—connecting verified specialists, surgeons, and partner hospitals on Plugins Social to collaborate on complex cases, publish clinical articles, and coordinate inter-departmental referrals."
        primaryCtaText="Explore plugins.social"
        primaryCtaLink="https://plugins.social/"
        secondaryCtaText="Inspect Network Radar"
        secondaryCtaLink="#network-topology"
        liveUrl="https://plugins.social/"
        liveUrlLabel="Visit Plugins Social · plugins.social"
        pageId="network"
      />

      {/* 2. Interactive Network Topology */}
      <section className="relative z-10 w-full py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]" id="network-topology">
        <div className="w-full max-w-[1520px] mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-champagne block font-semibold">
              PLUGINS SOCIAL · VERIFIED MEDICAL NETWORK
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              Interactive Specialist <span className="satin-champagne font-normal">Constellation.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              Filter by medical specialty clan or click any physician node to inspect their verified credentials, published protocols, and active tele-referral streams.
            </p>
          </div>

          <NetworkTopology3D />
        </div>
      </section>

      {/* 3. Specialty Clans Section */}
      <section className="relative z-10 w-full py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] bg-[#070312]/60">
        <div className="w-full max-w-[1520px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-purple-400 block font-semibold">
              SPECIALTY CLANS
            </span>
            <h2 className="satin-headline text-3xl sm:text-5xl font-light text-white">
              Peer-to-Peer Clinical <span className="satin-champagne font-normal">Wisdom Sharing.</span>
            </h2>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
              Doctors across Mumbai collaborate through dedicated specialty channels to review rare pathology, evaluate surgical interventions, and debate treatment pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#090416] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-pink-400 font-semibold uppercase">CARDIO CLAN</span>
              <h3 className="text-xl font-semibold text-white">ECG &amp; Interventional Cardiology</h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Share real-time ambulatory ECG telemetry, cardiac catheterization videos, and stent post-procedure protocols with verified cardiologists.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090416] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">SURGICAL CLAN</span>
              <h3 className="text-xl font-semibold text-white">Multidisciplinary Surgical Boards</h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Coordinate pre-op planning, laparoscopic surgical videos, and post-discharge wound recovery telemetry across multi-center surgical teams.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090416] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-purple-400 font-semibold uppercase">RESEARCH CLAN</span>
              <h3 className="text-xl font-semibold text-white">Clinical Trials &amp; AI Synthesizer</h3>
              <p className="text-xs sm:text-sm text-stonewarm leading-relaxed text-[#b4a8c9]">
                Publish case studies, collaborate on multi-centric trial protocols, and summarize the latest international peer-reviewed medical journals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Next Page CTA */}
      <NextPageCta
        nextNum="08"
        nextLabel="Concierge"
        title="Executive Concierge & Mumbai HQ"
        description="Schedule a private hospital deployment walkthrough, apply for internships, or sign up for free institutional healthcare tech seminars."
        link="/concierge"
      />
    </div>
  );
}
