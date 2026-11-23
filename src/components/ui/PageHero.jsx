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
  liveUrl = '',
  liveUrlLabel = '',
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
            {/* Live External Application Launch Beacon */}
            {liveUrl && (
              <div className="pb-1">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/15 via-cyan-500/15 to-purple-500/15 border border-purple-400/40 hover:border-cyan-300 shadow-[0_0_24px_rgba(168,85,247,0.2)] hover:shadow-[0_0_32px_rgba(56,189,248,0.4)] transition-all duration-300"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#10B981]" />
                  </span>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#EAE1C8] group-hover:text-white uppercase">
                    {liveUrlLabel || `Visit Live Application · ${liveUrl.replace('https://', '').replace(/\/$/, '')}`}
                  </span>
                  <span className="text-cyan-300 font-mono text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            )}

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
                primaryCtaLink.startsWith('http') ? (
                  <a
                    href={primaryCtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-cinema group"
                  >
                    <span>{primaryCtaText}</span>
                    <svg className="w-3.5 h-3.5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                  </a>
                ) : (
                  <Link to={primaryCtaLink} className="btn-primary-cinema group">
                    <span>{primaryCtaText}</span>
                    <svg className="w-3.5 h-3.5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                  </Link>
                )
              )}
              {secondaryCtaText && secondaryCtaLink && (
                secondaryCtaLink.startsWith('http') ? (
                  <a
                    href={secondaryCtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-cinema"
                  >
                    <span>{secondaryCtaText}</span>
                  </a>
                ) : (
                  <Link to={secondaryCtaLink} className="btn-secondary-cinema">
                    <span>{secondaryCtaText}</span>
                  </Link>
                )
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
