import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_NAV_ITEMS, SPECIALIZED_PRODUCTS, MUMBAI_HQ_INFO } from '../../data/ecosystemData.js';
import { subscribeToNewsletter } from '../../firebase/services.js';

export default function GlobalFooter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

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
    <footer className="relative z-20 w-full bg-[#05020c] border-t border-white/[0.08] text-stonewarm pt-20 pb-12 px-6 sm:px-12 lg:px-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1520px] mx-auto space-y-16 relative z-10">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Purpose & Corporate Address (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
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

          {/* Column 2: Primary Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block font-semibold">
              PRIMARY DIRECTORY
            </span>
            <ul className="space-y-2.5 text-xs">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <li key={item.num}>
                  <Link
                    to={item.path}
                    className="hover:text-champagne transition-colors flex items-center gap-2 text-bone/80 hover:translate-x-1 duration-200"
                  >
                    <span className="text-purple-400 font-mono text-[10px]">{item.num}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Platforms (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block font-semibold">
              PRODUCT PLATFORMS
            </span>
            <ul className="space-y-2.5 text-xs">
              {SPECIALIZED_PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <div className="flex flex-col text-bone/80 group">
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

          {/* Column 4: Newsletter & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block font-semibold">
              CLINICAL DISPATCH
            </span>
            <p className="text-xs text-[#a89cb8] leading-relaxed">
              Receive peer-reviewed clinical articles, healthcare tech updates, and deployment releases.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
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
                  className="px-4 py-2 rounded-xl bg-champagne text-obsidian text-[11px] font-semibold tracking-wider uppercase hover:bg-white transition-all disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? '...' : 'Join'}
                </button>
              </div>

              <label className="flex items-start gap-2 cursor-pointer text-[10px] text-stonewarm/80">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-0.5 rounded border-white/20 bg-black/60 text-purple-600"
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

        {/* Bottom Metadata & Legal Compliance */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-wider text-stonewarm/70">
          <div>
            © {new Date().getFullYear()} RBCurexia Healthcare Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>NABH &amp; HIPAA ALIGNED</span>
            <span>AES-256 ENCRYPTED EHR</span>
            <span>ISO 27001 COMPLIANT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
