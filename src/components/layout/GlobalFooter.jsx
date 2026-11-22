import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_NAV_ITEMS, SPECIALIZED_PRODUCTS, MUMBAI_HQ_INFO } from '../../data/ecosystemData.js';
import { subscribeToNewsletter } from '../../firebase/services.js';

export default function GlobalFooter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const footerRef = useRef(null);

  // Mouse move handler for reactive cards & wordmark glow
  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    footerRef.current.style.setProperty('--wm-x', `${x}px`);
    footerRef.current.style.setProperty('--wm-y', `${y}px`);
    footerRef.current.style.setProperty('--wm-opacity', '1');

    // Update individual reactive cards
    const cards = footerRef.current.querySelectorAll('.reactive-card');
    cards.forEach((card) => {
      const cRect = card.getBoundingClientRect();
      const cx = e.clientX - cRect.left;
      const cy = e.clientY - cRect.top;
      card.style.setProperty('--card-x', `${cx}px`);
      card.style.setProperty('--card-y', `${cy}px`);
    });
  };

  const handleMouseLeave = () => {
    if (!footerRef.current) return;
    footerRef.current.style.setProperty('--wm-opacity', '0');
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !consent) return;
    setSubmitting(true);
    setMessage('');

    try {
      const res = await subscribeToNewsletter({ email, source: 'global_footer' });
      if (res?.success) {
        setIsSuccess(true);
        setMessage('Thank you for subscribing to the RBCurexia Clinical Dispatch.');
        setEmail('');
        setConsent(false);
      } else {
        setIsSuccess(false);
        setMessage(res?.message || 'Subscription could not be processed. Please try again.');
      }
    } catch {
      setIsSuccess(false);
      setMessage('Network error. Please try again shortly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-20 w-full bg-[#05020c] border-t border-white/[0.08] text-stonewarm pt-20 pb-12 px-6 sm:px-12 lg:px-16 overflow-hidden obsidian-grid"
      style={{
        '--aurora-primary': '168, 85, 247',
        '--aurora-secondary': '56, 189, 248',
        '--wm-x': '50%',
        '--wm-y': '50%',
        '--wm-opacity': '0'
      }}
    >
      <style>{`
        .obsidian-grid {
          background-image:
            linear-gradient(to right, rgba(168, 85, 247, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .reactive-card {
          position: relative;
          background: rgba(14, 12, 22, 0.62);
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.28s ease, background-color 0.28s ease;
        }
        .reactive-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: radial-gradient(240px circle at var(--card-x, 50%) var(--card-y, 50%), rgba(234, 225, 206, 0.55), rgba(168, 85, 247, 0.45) 45%, transparent 75%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .reactive-card:hover::before { opacity: 1; }
        .reactive-card:hover { background: rgba(20, 17, 32, 0.78); transform: translateY(-2px); }
        @property --beam-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
        @keyframes rotateBeam { to { --beam-angle: 360deg; } }
        .cockpit-shell {
          position: relative;
          border-radius: 1.25rem;
          padding: 1px;
          background: conic-gradient(from var(--beam-angle, 0deg), rgba(168, 85, 247, 0.08) 0deg, rgba(168, 85, 247, 0.08) 220deg, rgba(168, 85, 247, 0.75) 280deg, rgba(234, 225, 206, 0.95) 315deg, rgba(56, 189, 248, 0.7) 340deg, rgba(168, 85, 247, 0.08) 360deg);
          animation: rotateBeam 7s linear infinite;
        }
        .cockpit-inner { background: linear-gradient(155deg, rgba(16, 13, 27, 0.94) 0%, rgba(8, 7, 14, 0.97) 100%); border-radius: calc(1.25rem - 1px); }
        @keyframes liquidShimmer { 0% { background-position: -180% center; } 100% { background-position: 180% center; } }
        .champagne-btn { background: linear-gradient(115deg, #EAE1C8 25%, #FFFFFF 48%, #F4EBD3 62%, #EAE1C8 80%); background-size: 240% auto; transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease; }
        .champagne-btn:hover { animation: liquidShimmer 1.5s linear infinite; box-shadow: 0 0 28px rgba(234, 225, 206, 0.42), 0 0 12px rgba(168, 85, 247, 0.25); }
        .rb-checkbox { appearance: none; -webkit-appearance: none; width: 16px; height: 16px; border-radius: 5px; border: 1px solid rgba(168, 85, 247, 0.45); background: rgba(15, 12, 26, 0.9); cursor: pointer; display: inline-grid; place-content: center; transition: all 0.2s ease; flex-shrink: 0; }
        .rb-checkbox:hover { border-color: #EAE1C8; box-shadow: 0 0 12px rgba(168, 85, 247, 0.35); }
        .rb-checkbox:checked { background: linear-gradient(135deg, #A855F7, #EAE1C8); border-color: #EAE1C8; }
        .rb-checkbox:checked::before { content: ""; width: 9px; height: 9px; clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%); background-color: #06050A; }
        @keyframes packetFlow { 0% { stroke-dashoffset: 48; } 100% { stroke-dashoffset: 0; } }
        .signal-wire { stroke-dasharray: 4 8; animation: packetFlow 1.8s linear infinite; }
        .ribbon-node { transition: all 0.28s cubic-bezier(0.22, 1, 0.36, 1); }
        .ribbon-node.is-active { transform: translateY(-2px); background: rgba(255, 255, 255, 0.06); box-shadow: 0 0 22px var(--node-glow, rgba(168, 85, 247, 0.45)); }
        .platform-item { transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1); }
        .platform-item.is-spotlight { background: rgba(255, 255, 255, 0.05); border-color: var(--plat-border, rgba(168, 85, 247, 0.55)); transform: translateX(4px); box-shadow: 0 8px 28px -12px var(--plat-glow, rgba(168, 85, 247, 0.4)); }
        @keyframes pinRipple { 0% { transform: scale(0.8); opacity: 0.85; } 100% { transform: scale(2.3); opacity: 0; } }
        .pin-ring { animation: pinRipple 2.2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
        .monumental-wrap { position: relative; user-select: none; }
        .wordmark-outline { font-family: 'Space Grotesk', system-ui, sans-serif; font-weight: 700; letter-spacing: 0.14em; color: transparent; -webkit-text-stroke: 1px rgba(255, 255, 255, 0.09); line-height: 0.88; }
        .wordmark-glow {
          font-family: 'Space Grotesk', system-ui, sans-serif; font-weight: 700; letter-spacing: 0.14em; line-height: 0.88;
          background: linear-gradient(90deg, #A855F7 0%, #38BDF8 35%, #EAE1C8 68%, #10B981 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          -webkit-mask-image: radial-gradient(260px circle at var(--wm-x, 50%) var(--wm-y, 50%), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0) 78%);
          mask-image: radial-gradient(260px circle at var(--wm-x, 50%) var(--wm-y, 50%), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0) 78%);
          opacity: var(--wm-opacity, 0); transition: opacity 0.35s ease; filter: drop-shadow(0 0 24px rgba(168, 85, 247, 0.45));
        }
        @keyframes spinOrbit { to { transform: rotate(360deg); } }
        .orbit-ring-spin { animation: spinOrbit 11s linear infinite; }
        .vault-popover { transform-origin: bottom center; transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.22, 1, 0.36, 1); }
        .vault-popover.is-hidden { opacity: 0; transform: translateY(8px) scale(0.96); pointer-events: none; }
      `}</style>

      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1520px] mx-auto space-y-16 relative z-10">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Column 1: Brand & Purpose & Corporate Address (4 cols) */}
          <div className="lg:col-span-4 reactive-card p-6 sm:p-7 rounded-2xl space-y-5">
            <Link to="/overview" className="flex items-center gap-2.5">
              <img
                src="/assets/rbcurexia-monogram-4k.webp"
                alt="RB"
                className="h-8 w-auto object-contain"
              />
              <span className="font-display text-sm font-semibold tracking-[0.32em] text-champagne uppercase">
                CUREXIA
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#a89cb8] leading-relaxed max-w-sm">
              An integrated healthcare ecosystem connecting clinical intelligence, hospital operations, pathology diagnostics, pharmacy fulfillment, and continuous patient telemetry.
            </p>

            {/* Registered Corporate Office Address */}
            <div className="pt-3 border-t border-white/[0.08] space-y-2 text-xs text-[#a89cb8]">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-[11px] tracking-wider uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <span>MUMBAI REGISTERED OFFICE &amp; HQ</span>
              </div>
              <div className="space-y-1.5 leading-relaxed text-[11px] text-bone/85">
                <p>
                  <strong className="text-champagne font-medium">Campus I:</strong> Unit No. 5, Sarita Apt, Rustomjee Irani Marg, Jaywant Sawant Marg, Dahisar West, Mumbai, Maharashtra 400068, India
                </p>
                <p>
                  <strong className="text-champagne font-medium">Campus II:</strong> 803/A Wing, Jayram Heights, New Link Road, Dahisar West, Mumbai, Maharashtra 400068, India
                </p>
              </div>
              <div className="pt-1 text-[10px] font-mono text-purple-300/80">
                MUMBAI · MAHARASHTRA · INDIA
              </div>
            </div>
          </div>

          {/* Column 2: Primary Directory (2 cols) */}
          <div className="lg:col-span-2 reactive-card p-6 sm:p-7 rounded-2xl space-y-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block font-semibold">
              PRIMARY DIRECTORY
            </span>
            <ul className="space-y-2.5 text-xs">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <li key={item.num}>
                  <Link
                    to={item.path}
                    className="hover:text-champagne transition-colors flex items-center gap-2 text-bone/80 hover:translate-x-1 duration-200 ribbon-node"
                  >
                    <span className="text-purple-400 font-mono text-[10px]">{item.num}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Platforms (3 cols) */}
          <div className="lg:col-span-3 reactive-card p-6 sm:p-7 rounded-2xl space-y-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block font-semibold">
              PRODUCT PLATFORMS
            </span>
            <ul className="space-y-2.5 text-xs">
              {SPECIALIZED_PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <div className="flex flex-col text-bone/80 group platform-item">
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        to={prod.path}
                        className="group-hover:text-champagne transition-colors font-medium"
                      >
                        {prod.name}
                      </Link>
                      {prod.liveUrl && (
                        <a
                          href={prod.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[9px] font-mono text-purple-300 hover:text-champagne bg-purple-900/30 px-1.5 py-0.5 rounded border border-purple-500/30 inline-flex items-center gap-0.5 hover:border-champagne transition-all shrink-0"
                          title={`Open ${prod.liveUrl}`}
                        >
                          <span>{prod.liveUrl.replace('https://', '').replace('/', '')}</span>
                          <span className="text-[8px]">↗</span>
                        </a>
                      )}
                    </div>
                    <span className="text-[10px] text-stonewarm/60 font-mono">
                      {prod.badge}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Contact inside Animated Cockpit Shell (3 cols) */}
          <div className="lg:col-span-3 cockpit-shell">
            <div className="cockpit-inner p-6 sm:p-7 h-full space-y-5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block font-semibold">
                CLINICAL DISPATCH
              </span>
              <p className="text-xs text-[#a89cb8] leading-relaxed">
                Receive peer-reviewed clinical articles, healthcare tech updates, and deployment releases.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter institutional email"
                    required
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/15 text-xs text-bone placeholder-stonewarm/50 focus:outline-none focus:border-champagne"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="champagne-btn px-4 py-2 rounded-xl text-obsidian text-[11px] font-bold tracking-wider uppercase disabled:opacity-50 cursor-pointer"
                  >
                    {submitting ? '...' : 'Join'}
                  </button>
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer text-[10px] text-stonewarm/80">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="rb-checkbox mt-0.5"
                  />
                  <span>I agree to receive communications from RBCurexia.</span>
                </label>

                {message && (
                  <p className={`text-xs pt-1 ${isSuccess ? 'text-emerald-300' : 'text-rose-400'}`}>
                    {message}
                  </p>
                )}
              </form>

              <div className="pt-2 text-xs font-mono space-y-1">
                <p className="text-white font-medium">{MUMBAI_HQ_INFO.phone}</p>
                <p className="text-purple-300">{MUMBAI_HQ_INFO.email}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Monumental Interactive Typography Wordmark */}
        <div className="monumental-wrap pt-6 text-center select-none overflow-hidden">
          <div className="wordmark-outline text-4xl sm:text-7xl lg:text-9xl tracking-[0.16em] uppercase">
            RBCUREXIA
          </div>
          <div className="wordmark-glow text-4xl sm:text-7xl lg:text-9xl tracking-[0.16em] uppercase absolute inset-0 pt-6 pointer-events-none">
            RBCUREXIA
          </div>
        </div>

        {/* Bottom Metadata & Legal Compliance */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-wider text-stonewarm/70">
          <div>
            © {new Date().getFullYear()} RBCurexia Healthcare Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>NABH &amp; HIPAA ALIGNED</span>
            <span>AES 256 ENCRYPTED EHR</span>
            <span>ISO 27001 COMPLIANT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
