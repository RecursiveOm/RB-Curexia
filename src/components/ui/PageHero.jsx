import { Link } from 'react-router-dom';
import PageThemedVisual from '../animations/PageThemedVisual.jsx';

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
  pageId = '',
  children
}) {
  return (
    <section className="relative z-10 w-full pt-32 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
      {/* Ambient Aurora Glows */}
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1520px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (7 cols): Eyebrow, Headline, Description & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
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
            <h1 className="satin-headline font-light text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] text-white tracking-tight">
              {title}{' '}
              {highlight && (
                <span className="satin-champagne font-normal block sm:inline">
                  {highlight}
                </span>
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#b8accd] font-light max-w-xl leading-relaxed">
              {description}
            </p>

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
          </div>

          {/* Right Column (5 cols): Themed Animation Displaying What the Page Is */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            {pageId ? <PageThemedVisual pageId={pageId} /> : children}
          </div>
        </div>
      </div>
    </section>
  );
}
