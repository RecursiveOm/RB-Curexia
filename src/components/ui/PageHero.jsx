import { Link } from 'react-router-dom';

export default function PageHero({
  eyebrowNum = '01',
  eyebrowText = 'HEALTHCARE ECOSYSTEM',
  title = '',
  highlight = '',
  description = '',
  primaryCtaText = 'Explore The Platform',
  primaryCtaLink = '/panacea',
  secondaryCtaText = 'Book a Demo',
  secondaryCtaLink = '/concierge',
  children
}) {
  return (
    <section className="relative z-10 w-full pt-32 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
      {/* Ambient Aurora Glows */}
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1520px] mx-auto space-y-8 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="font-display text-xs font-semibold tracking-[0.28em] uppercase text-purple-400">
            {eyebrowNum} · {eyebrowText}
          </span>
          <span className="w-8 h-[1px] bg-white/15" />
          <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-champagne/80">
            RBCUREXIA ECOSYSTEM
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl space-y-6">
          <h1 className="satin-headline font-light text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] text-white tracking-tight">
            {title}{' '}
            {highlight && (
              <span className="satin-champagne font-normal block sm:inline">
                {highlight}
              </span>
            )}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#b8accd] font-light max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA Row */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {primaryCtaText && primaryCtaLink && (
            <Link to={primaryCtaLink} className="btn-primary-cinema group">
              <span>{primaryCtaText}</span>
              <svg className="w-3.5 h-3.5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </Link>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <Link to={secondaryCtaLink} className="btn-secondary-cinema">
              <span>{secondaryCtaText}</span>
            </Link>
          )}
        </div>

        {/* Optional Embedded 3D Stage or Visual Content */}
        {children && <div className="pt-6">{children}</div>}
      </div>
    </section>
  );
}
