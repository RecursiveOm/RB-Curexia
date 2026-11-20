import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-32 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl mx-auto space-y-6 relative z-10">
        <span className="px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-mono text-xs uppercase tracking-widest inline-block">
          TELEMETRY ERROR · 404
        </span>

        <h1 className="satin-headline text-4xl sm:text-6xl font-light text-white">
          Requested Node <span className="text-purple-400 font-normal">Offline.</span>
        </h1>

        <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b8accd]">
          The architectural pathway or dossier you requested is not indexed within the active RBCurexia clinical network directory.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/overview"
            className="px-8 py-3.5 rounded-full bg-champagne text-obsidian font-display font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-lg shadow-champagne/15"
          >
            Return to 01 Overview
          </Link>
          <Link
            to="/concierge"
            className="px-8 py-3.5 rounded-full bg-white/[0.04] border border-white/15 text-white font-medium text-xs tracking-wider uppercase hover:bg-white/[0.08] transition-all"
          >
            Contact Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
