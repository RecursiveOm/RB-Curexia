import { Link } from 'react-router-dom';

export default function NextPageCta({
  nextNum = '02',
  nextLabel = 'Mission',
  title = 'Explore Our Mission & Core Philosophy',
  description = 'Discover the human-centered clinical philosophy driving RBCurexia across Mumbai and Maharashtra.',
  link = '/mission'
}) {
  return (
    <section className="relative z-10 w-full py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08] overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent pointer-events-none" />

      <div className="w-full max-w-[1520px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-champagne">
              NEXT UP · {nextNum} {nextLabel.toUpperCase()}
            </span>
            <span className="w-6 h-[1px] bg-white/20" />
            <span className="text-[9px] font-mono tracking-wider uppercase text-purple-300">
              CONTINUE JOURNEY
            </span>
          </div>
          <h2 className="satin-headline text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#b4a8c9]">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to={link}
            className="px-8 py-4 rounded-full bg-champagne text-obsidian font-display font-semibold text-xs tracking-wider uppercase hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-xl shadow-champagne/15"
          >
            <span>Proceed to {nextLabel}</span>
            <span className="text-sm font-bold">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
