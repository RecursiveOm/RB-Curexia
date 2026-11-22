import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_NAV_ITEMS, SPECIALIZED_PRODUCTS } from '../../data/ecosystemData.js';
import { subscribeToNewsletter } from '../../firebase/services.js';

// Platform metadata for Ecosystem Signal Ribbon & Column 3 Sync
const PLATFORM_THEMES = {
  panacea:   { name: 'PANACEA CLINICAL OS', color: '#A855F7', rgbA: '168, 85, 247', rgbB: '234, 225, 206', glow: 'rgba(168, 85, 247, 0.5)' },
  curenest:  { name: 'CURENEST WARD OS',    color: '#38BDF8', rgbA: '56, 189, 248', rgbB: '168, 85, 247', glow: 'rgba(56, 189, 248, 0.5)' },
  labonix:   { name: 'LABONIX GATEWAY',     color: '#10B981', rgbA: '16, 185, 129', rgbB: '56, 189, 248', glow: 'rgba(16, 185, 129, 0.5)' },
  pharmixo:  { name: 'PHARMIXO PORTAL',     color: '#EAE1C8', rgbA: '234, 225, 206', rgbB: '168, 85, 247', glow: 'rgba(234, 225, 206, 0.45)' },
  pulseport: { name: 'PULSEPORT TELEMETRY', color: '#38BDF8', rgbA: '56, 189, 248', rgbB: '16, 185, 129', glow: 'rgba(56, 189, 248, 0.55)' },
  plugins:   { name: 'PLUGINS SOCIAL',      color: '#C084FC', rgbA: '192, 132, 252', rgbB: '168, 85, 247', glow: 'rgba(168, 85, 247, 0.55)' },
};

const RIBBON_NODES = [
  { key: 'panacea',   label: 'Panacea' },
  { key: 'curenest',  label: 'CureNEST' },
  { key: 'labonix',   label: 'Labonix' },
  { key: 'pharmixo',  label: 'Pharmixo' },
  { key: 'pulseport', label: 'PulsePort' },
  { key: 'plugins',   label: 'Plugins Social' },
];

export default function GlobalFooter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dispatchStatus, setDispatchStatus] = useState(null); // { type: 'success' | 'error' | 'warning', message: '' }
  const [toastMessage, setToastMessage] = useState(null);
  const [activePlatform, setActivePlatform] = useState(null);
  const [activeVault, setActiveVault] = useState(null); // 'nabh' | 'aes' | 'iso' | null
  const [istTime, setIstTime] = useState('IST · --:--');
  const [railStyle, setRailStyle] = useState({ opacity: 0, top: 4, height: 28 });

  const footerRef = useRef(null);
  const dirContainerRef = useRef(null);
  const joinBtnRef = useRef(null);
  const toastTimerRef = useRef(null);

  // Floating Toast helper
  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  }, []);

  // Safe clipboard copy
  const handleCopyText = useCallback(async (text, label) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      showToast(`${label} copied to clipboard!`);
    } catch {
      showToast(`Copied ${label}`);
    }
  }, [showToast]);

  // Live Mumbai IST Clock (Asia/Kolkata)
  useEffect(() => {
    const updateIst = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setIstTime(`IST · ${formatted.toUpperCase()}`);
      } catch {
        setIstTime('IST · 04:43:29 PM');
      }
    };
    updateIst();
    const timer = setInterval(updateIst, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close compliance vault popover when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.compliance-vault-item')) {
        setActiveVault(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Cursor movements on footer for ambient aura & reactive card illumination
  const handleFooterMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    const aura = footerRef.current.querySelector('#footerCursorAura');
    if (aura) {
      aura.style.opacity = '1';
      aura.style.background = `radial-gradient(560px circle at ${relX}px ${relY}px, rgba(var(--aurora-primary), 0.12), rgba(234, 225, 206, 0.035) 45%, transparent 72%)`;
    }
  };

  const handleFooterMouseLeave = () => {
    if (!footerRef.current) return;
    const aura = footerRef.current.querySelector('#footerCursorAura');
    if (aura) aura.style.opacity = '0';
  };

  // Card cursor border glow
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--card-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--card-y', `${e.clientY - rect.top}px`);
  };

  // Monumental Wordmark cursor spotlight (Purple & Champagne, strictly NO blue)
  const handleWordmarkMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / Math.max(1, rect.width)) * 100;
    const yPct = ((e.clientY - rect.top) / Math.max(1, rect.height)) * 100;
    if (footerRef.current) {
      footerRef.current.style.setProperty('--wm-x', `${xPct}%`);
      footerRef.current.style.setProperty('--wm-y', `${yPct}%`);
      footerRef.current.style.setProperty('--wm-opacity', '1');
    }
  };

  const handleWordmarkMouseLeave = () => {
    if (footerRef.current) {
      footerRef.current.style.setProperty('--wm-opacity', '0');
    }
  };

  // Magnetic button animation
  const handleMagneticMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.22;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
    e.currentTarget.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMagneticLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  // Sliding directory rail
  const handleDirItemEnter = (e) => {
    if (!dirContainerRef.current) return;
    const cRect = dirContainerRef.current.getBoundingClientRect();
    const iRect = e.currentTarget.getBoundingClientRect();
    setRailStyle({
      opacity: 1,
      top: iRect.top - cRect.top + 4,
      height: iRect.height - 8,
    });
  };

  const handleDirContainerLeave = () => {
    setRailStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  // Micro-spark confetti on dispatch join
  const launchMicroSparks = (originEl) => {
    if (!originEl) return;
    const rect = originEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const colors = ['#A855F7', '#EAE1C8', '#C084FC', '#F5F0E1', '#E879F9', '#10B981'];

    for (let i = 0; i < 24; i++) {
      const dot = document.createElement('span');
      dot.className = 'spark-dot';
      dot.style.position = 'fixed';
      dot.style.width = '6px';
      dot.style.height = '6px';
      dot.style.borderRadius = '9999px';
      dot.style.pointerEvents = 'none';
      dot.style.zIndex = '90';
      dot.style.left = `${cx}px`;
      dot.style.top = `${cy}px`;
      dot.style.backgroundColor = colors[i % colors.length];
      dot.style.boxShadow = `0 0 8px ${colors[i % colors.length]}`;
      document.body.appendChild(dot);

      const angle = (Math.PI * 2 * i) / 24 + (Math.random() - 0.5) * 0.4;
      const dist = 36 + Math.random() * 64;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist - 18;

      dot.animate(
        [
          { transform: 'translate(0, 0) scale(1)', opacity: 1 },
          { transform: `translate(${tx}px, ${ty}px) scale(0.15)`, opacity: 0 },
        ],
        {
          duration: 650 + Math.random() * 300,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          fill: 'forwards',
        }
      );

      setTimeout(() => dot.remove(), 1000);
    }
  };

  // Clinical Dispatch Form submission
  const handleClinicalDispatchSubmit = async (e) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

    if (!valid) {
      setDispatchStatus({
        type: 'error',
        message: 'Enter a valid institutional email address.',
      });
      return;
    }

    if (!consent) {
      setDispatchStatus({
        type: 'warning',
        message: 'Please check the RBCurexia communications consent box.',
      });
      return;
    }

    setSubmitting(true);
    setDispatchStatus(null);

    try {
      const res = await subscribeToNewsletter({ email: cleanEmail, source: 'global_footer' });
      if (res?.success !== false) {
        setDispatchStatus({
          type: 'success',
          message: `Confirmed: ${cleanEmail} enrolled in Clinical Dispatch.`,
        });
        launchMicroSparks(joinBtnRef.current);
        showToast('Welcome to RBCurexia Clinical Dispatch!');
        setEmail('');
        setConsent(false);
      } else {
        setDispatchStatus({
          type: 'error',
          message: res?.message || 'Subscription could not be processed. Please try again.',
        });
      }
    } catch {
      setDispatchStatus({
        type: 'error',
        message: 'Network error. Please try again shortly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Back to top click handler
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Returned to top of RBCurexia.');
  };

  const currentTheme = activePlatform ? PLATFORM_THEMES[activePlatform] : null;
  const auroraPrimary = currentTheme ? currentTheme.rgbA : '168, 85, 247';
  const auroraSecondary = currentTheme ? currentTheme.rgbB : '56, 189, 248';

  return (
    <footer
      id="rbcurexiaCreativeFooter"
      ref={footerRef}
      onMouseMove={handleFooterMouseMove}
      onMouseLeave={handleFooterMouseLeave}
      className="relative w-full bg-[#06050A] text-slate-300 overflow-hidden border-t border-white/[0.06] select-none"
      style={{
        '--aurora-primary': auroraPrimary,
        '--aurora-secondary': auroraSecondary,
        '--wm-x': '50%',
        '--wm-y': '50%',
        '--wm-opacity': '0',
      }}
    >
      <style>{`
        /* Architectural grid texture */
        .obsidian-grid {
          background-image:
            linear-gradient(to right, rgba(168, 85, 247, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* Cursor-reactive glass card radial border glow */
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
          background: radial-gradient(
            240px circle at var(--card-x, 50%) var(--card-y, 50%),
            rgba(234, 225, 206, 0.55),
            rgba(168, 85, 247, 0.45) 45%,
            transparent 75%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .reactive-card:hover::before {
          opacity: 1;
        }

        .reactive-card:hover {
          background: rgba(20, 17, 32, 0.78);
          transform: translateY(-2px);
        }

        /* Animated rotating border beam for Clinical Dispatch Glass Cockpit */
        @property --beam-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes rotateBeam {
          to {
            --beam-angle: 360deg;
          }
        }

        .cockpit-shell {
          position: relative;
          border-radius: 1.25rem;
          padding: 1px;
          background: conic-gradient(
            from var(--beam-angle),
            rgba(168, 85, 247, 0.08) 0deg,
            rgba(168, 85, 247, 0.08) 220deg,
            rgba(168, 85, 247, 0.75) 280deg,
            rgba(234, 225, 206, 0.95) 315deg,
            rgba(192, 132, 252, 0.7) 340deg,
            rgba(168, 85, 247, 0.08) 360deg
          );
          animation: rotateBeam 7s linear infinite;
        }

        .cockpit-inner {
          background: linear-gradient(155deg, rgba(16, 13, 27, 0.94) 0%, rgba(8, 7, 14, 0.97) 100%);
          border-radius: calc(1.25rem - 1px);
        }

        /* Liquid champagne shimmer button */
        @keyframes liquidShimmer {
          0% { background-position: -180% center; }
          100% { background-position: 180% center; }
        }

        .champagne-btn {
          background: linear-gradient(115deg, #EAE1C8 25%, #FFFFFF 48%, #F4EBD3 62%, #EAE1C8 80%);
          background-size: 240% auto;
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
        }

        .champagne-btn:hover {
          animation: liquidShimmer 1.5s linear infinite;
          box-shadow: 0 0 28px rgba(234, 225, 206, 0.42), 0 0 12px rgba(168, 85, 247, 0.25);
        }

        /* Custom sleek checkbox */
        .rb-checkbox {
          appearance: none;
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 5px;
          border: 1px solid rgba(168, 85, 247, 0.45);
          background: rgba(15, 12, 26, 0.9);
          cursor: pointer;
          display: inline-grid;
          place-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .rb-checkbox:hover {
          border-color: #EAE1C8;
          box-shadow: 0 0 12px rgba(168, 85, 247, 0.35);
        }

        .rb-checkbox:checked {
          background: linear-gradient(135deg, #A855F7, #EAE1C8);
          border-color: #EAE1C8;
        }

        .rb-checkbox:checked::before {
          content: "";
          width: 9px;
          height: 9px;
          clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
          background-color: #06050A;
        }

        /* Flowing light packets on signal wire */
        @keyframes packetFlow {
          0% { stroke-dashoffset: 48; }
          100% { stroke-dashoffset: 0; }
        }

        .signal-wire {
          stroke-dasharray: 4 8;
          animation: packetFlow 1.8s linear infinite;
        }

        .ribbon-node {
          transition: all 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ribbon-node.is-active {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 22px var(--node-glow, rgba(168, 85, 247, 0.45));
        }

        /* Platform card active spotlight */
        .platform-item {
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .platform-item.is-spotlight {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--plat-border, rgba(168, 85, 247, 0.55));
          transform: translateX(4px);
          box-shadow: 0 8px 28px -12px var(--plat-glow, rgba(168, 85, 247, 0.4));
        }

        /* Animated Mumbai coordinate pin */
        @keyframes pinRipple {
          0% { transform: scale(0.8); opacity: 0.85; }
          100% { transform: scale(2.3); opacity: 0; }
        }

        .pin-ring {
          animation: pinRipple 2.2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }

        /* =================================================================== */
        /* MONUMENTAL WORDMARK: PURPLE SHARD FLASHING FROM RIGHT TO LEFT       */
        /* (STRICTLY NO BLUE - ULTRA PREMIUM VIOLET/FUCHSIA/CHAMPAGNE SHARD)   */
        /* =================================================================== */
        .monumental-wrap {
          position: relative;
          user-select: none;
        }

        .wordmark-outline {
          font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.09);
          line-height: 0.88;
        }

        @keyframes purpleShardFlashRTL {
          0% {
            background-position: 240% 50%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          85% {
            background-position: -140% 50%;
            opacity: 0.15;
          }
          100% {
            background-position: -140% 50%;
            opacity: 0;
          }
        }

        .wordmark-purple-shard {
          font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
          font-weight: 700;
          letter-spacing: 0.14em;
          line-height: 0.88;
          background: linear-gradient(
            270deg,
            transparent 0%,
            rgba(147, 51, 234, 0.2) 15%,
            rgba(168, 85, 247, 0.75) 30%,
            rgba(192, 132, 252, 0.95) 45%,
            #ffffff 50%,
            rgba(232, 121, 249, 0.95) 55%,
            rgba(168, 85, 247, 0.75) 70%,
            rgba(147, 51, 234, 0.2) 85%,
            transparent 100%
          );
          background-size: 260% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: purpleShardFlashRTL 4.2s cubic-bezier(0.25, 1, 0.35, 1) infinite;
          filter: drop-shadow(0 0 24px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 8px rgba(234, 225, 206, 0.5));
          pointer-events: none;
        }

        /* Secondary slanted crystalline beam sweeping from right to left */
        @keyframes crystalBeamRTL {
          0% {
            transform: translateX(140%) skewX(-25deg);
            opacity: 0;
          }
          15% {
            opacity: 0.75;
          }
          65% {
            opacity: 0.75;
          }
          85% {
            transform: translateX(-140%) skewX(-25deg);
            opacity: 0.1;
          }
          100% {
            transform: translateX(-140%) skewX(-25deg);
            opacity: 0;
          }
        }

        .crystal-beam-rtl {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 25%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(168, 85, 247, 0.2) 30%,
            rgba(232, 121, 249, 0.5) 48%,
            rgba(255, 255, 255, 0.85) 50%,
            rgba(192, 132, 252, 0.5) 52%,
            rgba(168, 85, 247, 0.2) 70%,
            transparent 100%
          );
          animation: crystalBeamRTL 4.2s cubic-bezier(0.25, 1, 0.35, 1) infinite;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        /* Cursor-following purple/violet/champagne spotlight glow (ZERO BLUE) */
        .wordmark-glow {
          font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
          font-weight: 700;
          letter-spacing: 0.14em;
          line-height: 0.88;
          background: linear-gradient(270deg, #9333EA 0%, #A855F7 25%, #C084FC 50%, #EAE1C8 75%, #9333EA 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-mask-image: radial-gradient(
            280px circle at var(--wm-x, 50%) var(--wm-y, 50%),
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.6) 45%,
            rgba(0, 0, 0, 0) 80%
          );
          mask-image: radial-gradient(
            280px circle at var(--wm-x, 50%) var(--wm-y, 50%),
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.6) 45%,
            rgba(0, 0, 0, 0) 80%
          );
          opacity: var(--wm-opacity, 0);
          transition: opacity 0.35s ease;
          filter: drop-shadow(0 0 28px rgba(168, 85, 247, 0.7)) drop-shadow(0 0 8px rgba(234, 225, 206, 0.4));
        }

        /* Orbital Back-to-Top Ring */
        @keyframes spinOrbit {
          to { transform: rotate(360deg); }
        }

        .orbit-ring-spin {
          animation: spinOrbit 11s linear infinite;
        }

        /* Compliance Popover entrance */
        .vault-popover {
          transform-origin: bottom center;
          transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>

      {/* Dynamic Ambient Aurora Background (Reacts to hovered platform or default royal violet) */}
      <div
        id="ambientAuroraLeft"
        className="pointer-events-none absolute -top-28 left-[10%] w-[560px] h-[380px] rounded-full blur-[110px] opacity-30 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, rgba(var(--aurora-primary), 0.55) 0%, transparent 72%)`,
        }}
      />
      <div
        id="ambientAuroraRight"
        className="pointer-events-none absolute top-1/3 right-[5%] w-[520px] h-[360px] rounded-full blur-[110px] opacity-25 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, rgba(var(--aurora-secondary), 0.45) 0%, transparent 72%)`,
        }}
      />

      {/* Cursor-Following Subtle Footer Spotlight */}
      <div
        id="footerCursorAura"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500"
      />

      {/* ======================================================================= */}
      {/* SIGNATURE ELEMENT 1: INTERACTIVE ECOSYSTEM SIGNAL RIBBON (6 NODES)      */}
      {/* ======================================================================= */}
      <div className="relative z-20 border-b border-white/[0.06] bg-white/[0.015] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3.5">
          <div className="relative flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-1">
            {/* Flowing SVG Signal Wires Behind Nodes (Desktop) */}
            <svg
              aria-hidden="true"
              className="pointer-events-none hidden lg:block absolute inset-x-10 top-1/2 -translate-y-1/2 w-[calc(100%-5rem)] h-6 z-0"
              preserveAspectRatio="none"
              viewBox="0 0 1000 24"
            >
              <defs>
                <linearGradient id="ribbonWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A855F7" stopOpacity="0.55" />
                  <stop offset="25%" stopColor="#38BDF8" stopOpacity="0.55" />
                  <stop offset="50%" stopColor="#10B981" stopOpacity="0.55" />
                  <stop offset="75%" stopColor="#EAE1C8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.55" />
                </linearGradient>
              </defs>
              <line x1="0" y1="12" x2="1000" y2="12" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="0" y1="12" x2="1000" y2="12" stroke="url(#ribbonWireGrad)" strokeWidth="1.6" className="signal-wire" />
            </svg>

            {/* 6 Interactive Ecosystem Micro-Nodes */}
            {RIBBON_NODES.map((node) => {
              const theme = PLATFORM_THEMES[node.key];
              const isActive = activePlatform === node.key;
              return (
                <button
                  key={node.key}
                  type="button"
                  data-platform={node.key}
                  style={{ '--node-glow': theme.glow }}
                  onMouseEnter={() => setActivePlatform(node.key)}
                  onMouseLeave={() => setActivePlatform(null)}
                  onClick={() => {
                    setActivePlatform(node.key);
                    showToast(`Spotlighted ${theme.name} on RBCurexia Ecosystem Bus`);
                  }}
                  className={`ribbon-node relative z-10 shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C0A15] border ${
                    isActive ? 'border-purple-400/80 is-active' : 'border-purple-400/25 hover:border-purple-400/70'
                  } text-left cursor-pointer transition-all duration-300`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: theme.color,
                      boxShadow: `0 0 8px ${theme.color}`,
                    }}
                  />
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-200">
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* MAIN 4-COLUMN FOOTER ARCHITECTURE                                       */}
      {/* ======================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* =================================================================== */}
          {/* COLUMN 1: BRAND IDENTITY & MUMBAI REGISTERED OFFICE & HQ (4 cols)   */}
          {/* =================================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              {/* Stylized RB Monogram Badge + CUREXIA Wordmark */}
              <Link to="/overview" className="group inline-flex items-center gap-3.5 mb-5 focus:outline-none">
                <div className="relative w-12 h-10 rounded-xl bg-gradient-to-br from-[#191529] to-[#0B0914] border border-[#EAE1C8]/25 group-hover:border-[#EAE1C8]/60 flex items-center justify-center shadow-[0_0_24px_rgba(168,85,247,0.18)] transition-all duration-300">
                  <div className="absolute inset-0 rounded-xl bg-[#EAE1C8]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg viewBox="0 0 64 48" className="relative w-9 h-7 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="rbMonogramGrad" x1="0" y1="0" x2="64" y2="48" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FAF6EA" />
                        <stop offset="55%" stopColor="#EAE1C8" />
                        <stop offset="100%" stopColor="#C6B893" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="10" width="2.5" height="2.5" fill="#EAE1C8" opacity="0.4" />
                    <rect x="6" y="16" width="3" height="3" fill="#EAE1C8" opacity="0.6" />
                    <rect x="3" y="24" width="2.5" height="2.5" fill="#EAE1C8" opacity="0.45" />
                    <rect x="7" y="31" width="3" height="3" fill="#EAE1C8" opacity="0.65" />
                    <path
                      d="M12 8H27C31.5 8 34.5 10.6 34.5 14.8C34.5 18.2 32.4 20.6 29.1 21.4L35.2 38H28.8L23.4 22.2H18V38H12V8ZM18 13.2V17.4H26.2C27.9 17.4 29 16.4 29 15.3C29 14.1 27.9 13.2 26.2 13.2H18Z"
                      fill="url(#rbMonogramGrad)"
                    />
                    <path
                      d="M37.5 8H51.5C55.8 8 58.6 10.2 58.6 13.8C58.6 16.4 57.1 18.3 54.7 19.2C57.8 20.1 59.6 22.4 59.6 25.6C59.6 30.1 56.3 33 51.3 33H43.5V38H37.5V8ZM43.5 13V17.4H50.3C51.9 17.4 52.9 16.5 52.9 15.2C52.9 13.9 51.9 13 50.3 13H43.5ZM43.5 22.1V27.8H50.8C52.7 27.8 53.9 26.8 53.9 25C53.9 23.2 52.7 22.1 50.8 22.1H43.5Z"
                      fill="url(#rbMonogramGrad)"
                    />
                  </svg>
                </div>
                <span className="font-display text-base sm:text-[17px] font-semibold tracking-[0.28em] text-[#EAE1C8] group-hover:text-white transition-colors">
                  CUREXIA
                </span>
              </Link>

              {/* Exact Description */}
              <p className="text-[13.5px] leading-[1.72] text-[#9A96AE] font-light max-w-sm">
                An integrated healthcare ecosystem connecting clinical intelligence, hospital operations, pathology diagnostics, pharmacy fulfillment, and continuous patient telemetry.
              </p>
            </div>

            <div className="h-[1px] w-full bg-gradient-to-r from-purple-400/30 via-white/10 to-transparent" />

            {/* Mumbai Registered Office & HQ */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  {/* Live Glowing Emerald Beacon */}
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="pin-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_10px_#10B981]" />
                  </span>
                  <span className="font-mono text-[10.5px] font-semibold tracking-[0.15em] uppercase text-[#C4B5FD]">
                    MUMBAI REGISTERED OFFICE &amp; HQ
                  </span>
                </div>

                {/* Live Mumbai IST Clock */}
                <span className="font-mono text-[10px] tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-emerald-300">
                  {istTime}
                </span>
              </div>

              {/* Tactile Glass Card: Campus I */}
              <div
                role="button"
                tabIndex={0}
                onMouseMove={handleCardMouseMove}
                onClick={() =>
                  handleCopyText(
                    'Campus I: Unit No. 5, Sarita Apt, Rustomjee Irani Marg, Jaywant Sawant Marg, Dahisar West, Mumbai, Maharashtra 400068, India',
                    'Campus I Address'
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCopyText(
                      'Campus I: Unit No. 5, Sarita Apt, Rustomjee Irani Marg, Jaywant Sawant Marg, Dahisar West, Mumbai, Maharashtra 400068, India',
                      'Campus I Address'
                    );
                  }
                }}
                className="reactive-card group rounded-xl p-3.5 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2.5">
                  <p className="text-[12px] leading-[1.6] text-[#A29EB6] group-hover:text-slate-100 transition-colors">
                    <span className="font-semibold text-[#EAE1C8]">Campus I:</span> Unit No. 5, Sarita Apt, Rustomjee Irani Marg, Jaywant Sawant Marg, Dahisar West, Mumbai, Maharashtra 400068, India
                  </p>
                  <div className="shrink-0 flex flex-col items-center gap-1.5 pt-0.5">
                    <span className="relative flex h-2 w-2" title="Dahisar West Pin">
                      <span className="pin-ring absolute inline-flex h-full w-full rounded-full bg-purple-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" />
                    </span>
                    <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#EAE1C8] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Tactile Glass Card: Campus II */}
              <div
                role="button"
                tabIndex={0}
                onMouseMove={handleCardMouseMove}
                onClick={() =>
                  handleCopyText(
                    'Campus II: 803/A Wing, Jayram Heights, New Link Road, Dahisar West, Mumbai, Maharashtra 400068, India',
                    'Campus II Address'
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCopyText(
                      'Campus II: 803/A Wing, Jayram Heights, New Link Road, Dahisar West, Mumbai, Maharashtra 400068, India',
                      'Campus II Address'
                    );
                  }
                }}
                className="reactive-card group rounded-xl p-3.5 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2.5">
                  <p className="text-[12px] leading-[1.6] text-[#A29EB6] group-hover:text-slate-100 transition-colors">
                    <span className="font-semibold text-[#EAE1C8]">Campus II:</span> 803/A Wing, Jayram Heights, New Link Road, Dahisar West, Mumbai, Maharashtra 400068, India
                  </p>
                  <div className="shrink-0 flex flex-col items-center gap-1.5 pt-0.5">
                    <span className="relative flex h-2 w-2" title="New Link Road Pin">
                      <span className="pin-ring absolute inline-flex h-full w-full rounded-full bg-cyan-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                    </span>
                    <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#EAE1C8] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Sub-tag + Dahisar Coordinates */}
              <div className="pt-1 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-[#827C9A]">
                <span>MUMBAI &middot; MAHARASHTRA &middot; INDIA</span>
                <span className="text-purple-400/75 hidden sm:inline">19.2502° N · 72.8591° E</span>
              </div>
            </div>
          </div>

          {/* =================================================================== */}
          {/* COLUMN 2: PRIMARY DIRECTORY WITH SLIDING GLOWING RAIL (2 cols)      */}
          {/* =================================================================== */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-100 mb-6">
              PRIMARY DIRECTORY
            </h3>

            <div
              ref={dirContainerRef}
              onMouseLeave={handleDirContainerLeave}
              className="relative pl-3"
            >
              {/* Base Vertical Track */}
              <div className="absolute left-0 top-1 bottom-1 w-[1.5px] bg-white/[0.08] rounded-full" />
              {/* Smoothly Sliding Glowing Indicator Rail */}
              <div
                className="absolute left-0 w-[2.5px] rounded-full bg-gradient-to-b from-[#EAE1C8] via-[#A855F7] to-[#38BDF8] shadow-[0_0_12px_#A855F7] transition-all duration-300 ease-out pointer-events-none"
                style={{
                  opacity: railStyle.opacity,
                  top: `${railStyle.top}px`,
                  height: `${railStyle.height}px`,
                }}
              />

              <ul className="space-y-1.5">
                {PRIMARY_NAV_ITEMS.map((item) => (
                  <li key={item.num}>
                    <Link
                      to={item.path}
                      onMouseEnter={handleDirItemEnter}
                      className="dir-item group flex items-center justify-between py-1.5 px-2.5 rounded-lg hover:bg-white/[0.04] transition-all duration-200"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] text-[#A855F7] group-hover:text-[#EAE1C8] transition-colors">
                          {item.num}
                        </span>
                        <span className="text-[13.5px] text-[#A8A4BC] group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                          {item.label}
                        </span>
                      </span>
                      <span className="font-mono text-xs text-[#EAE1C8] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* =================================================================== */}
          {/* COLUMN 3: PRODUCT PLATFORMS (SYNCED WITH RIBBON & AURORA)           */}
          {/* =================================================================== */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-100">
                PRODUCT PLATFORMS
              </h3>
              <span className="font-mono text-[9.5px] text-emerald-400/90 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>

            <div className="space-y-2">
              {/* 1. Panacea Clinical OS */}
              <Link
                to="/panacea"
                data-platform="panacea"
                onMouseEnter={() => setActivePlatform('panacea')}
                onMouseLeave={() => setActivePlatform(null)}
                style={{
                  '--plat-border': 'rgba(168, 85, 247, 0.55)',
                  '--plat-glow': 'rgba(168, 85, 247, 0.35)',
                }}
                className={`platform-item group flex items-center justify-between gap-2 p-2.5 -mx-2 rounded-xl border ${
                  activePlatform === 'panacea'
                    ? 'is-spotlight border-purple-400/50 bg-purple-500/[0.08]'
                    : 'border-transparent hover:border-purple-400/40 hover:bg-purple-500/[0.06]'
                } cursor-pointer transition-all`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] group-hover:shadow-[0_0_8px_#A855F7]" />
                    <p className="text-[13.5px] font-medium text-slate-200 group-hover:text-white">Panacea Clinical OS</p>
                  </div>
                  <p className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-[#78748F] pl-3.5 mt-0.5">OUTPATIENT &amp; CLINICS</p>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-purple-300/60 group-hover:text-purple-200 transition-colors">OS</span>
              </Link>

              {/* 2. CureNEST Ward OS */}
              <Link
                to="/curenest"
                data-platform="curenest"
                onMouseEnter={() => setActivePlatform('curenest')}
                onMouseLeave={() => setActivePlatform(null)}
                style={{
                  '--plat-border': 'rgba(56, 189, 248, 0.55)',
                  '--plat-glow': 'rgba(56, 189, 248, 0.35)',
                }}
                className={`platform-item group flex items-center justify-between gap-2 p-2.5 -mx-2 rounded-xl border ${
                  activePlatform === 'curenest'
                    ? 'is-spotlight border-sky-400/50 bg-sky-500/[0.08]'
                    : 'border-transparent hover:border-sky-400/40 hover:bg-sky-500/[0.06]'
                } cursor-pointer transition-all`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] group-hover:shadow-[0_0_8px_#38BDF8]" />
                    <p className="text-[13.5px] font-medium text-slate-200 group-hover:text-white">CureNEST Ward OS</p>
                  </div>
                  <p className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-[#78748F] pl-3.5 mt-0.5">INPATIENT &amp; ICU</p>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-sky-300/60 group-hover:text-sky-200 transition-colors">WARD</span>
              </Link>

              {/* 3. Labonix Gateway */}
              <a
                href="https://labonix.in"
                target="_blank"
                rel="noopener noreferrer"
                data-platform="labonix"
                onMouseEnter={() => setActivePlatform('labonix')}
                onMouseLeave={() => setActivePlatform(null)}
                style={{
                  '--plat-border': 'rgba(16, 185, 129, 0.55)',
                  '--plat-glow': 'rgba(16, 185, 129, 0.35)',
                }}
                className={`platform-item group flex items-center justify-between gap-2 p-2.5 -mx-2 rounded-xl border ${
                  activePlatform === 'labonix'
                    ? 'is-spotlight border-emerald-400/50 bg-emerald-500/[0.08]'
                    : 'border-transparent hover:border-emerald-400/40 hover:bg-emerald-500/[0.06]'
                } transition-all`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] group-hover:shadow-[0_0_8px_#10B981]" />
                    <p className="text-[13.5px] font-medium text-slate-200 group-hover:text-white">Labonix Gateway</p>
                  </div>
                  <p className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-[#78748F] pl-3.5 mt-0.5">DIAGNOSTIC LABS</p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#131020] group-hover:bg-emerald-500/20 border border-purple-400/30 group-hover:border-emerald-400/60 font-mono text-[10px] text-[#C4B5FD] group-hover:text-emerald-200 transition-all shrink-0">
                  <span>labonix.in</span>
                  <span className="text-[9px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">&#8599;</span>
                </span>
              </a>

              {/* 4. Pharmixo Portal */}
              <Link
                to="/pharmixo"
                data-platform="pharmixo"
                onMouseEnter={() => setActivePlatform('pharmixo')}
                onMouseLeave={() => setActivePlatform(null)}
                style={{
                  '--plat-border': 'rgba(234, 225, 206, 0.55)',
                  '--plat-glow': 'rgba(234, 225, 206, 0.28)',
                }}
                className={`platform-item group flex items-center justify-between gap-2 p-2.5 -mx-2 rounded-xl border ${
                  activePlatform === 'pharmixo'
                    ? 'is-spotlight border-[#EAE1C8]/50 bg-[#EAE1C8]/[0.08]'
                    : 'border-transparent hover:border-[#EAE1C8]/40 hover:bg-[#EAE1C8]/[0.05]'
                } cursor-pointer transition-all`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EAE1C8] group-hover:shadow-[0_0_8px_#EAE1C8]" />
                    <p className="text-[13.5px] font-medium text-slate-200 group-hover:text-white">Pharmixo Portal</p>
                  </div>
                  <p className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-[#78748F] pl-3.5 mt-0.5">PHARMACY NETWORK</p>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#EAE1C8]/60 group-hover:text-[#EAE1C8] transition-colors">RX</span>
              </Link>

              {/* 5. PulsePort Telemetry */}
              <a
                href="https://pulseport.in"
                target="_blank"
                rel="noopener noreferrer"
                data-platform="pulseport"
                onMouseEnter={() => setActivePlatform('pulseport')}
                onMouseLeave={() => setActivePlatform(null)}
                style={{
                  '--plat-border': 'rgba(56, 189, 248, 0.55)',
                  '--plat-glow': 'rgba(56, 189, 248, 0.35)',
                }}
                className={`platform-item group flex items-center justify-between gap-2 p-2.5 -mx-2 rounded-xl border ${
                  activePlatform === 'pulseport'
                    ? 'is-spotlight border-cyan-400/50 bg-cyan-500/[0.08]'
                    : 'border-transparent hover:border-cyan-400/40 hover:bg-cyan-500/[0.06]'
                } transition-all`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] group-hover:shadow-[0_0_8px_#38BDF8]" />
                    <p className="text-[13.5px] font-medium text-slate-200 group-hover:text-white">PulsePort Telemetry</p>
                  </div>
                  <p className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-[#78748F] pl-3.5 mt-0.5">WEARABLES &amp; VITALS</p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#131020] group-hover:bg-cyan-500/20 border border-purple-400/30 group-hover:border-cyan-400/60 font-mono text-[10px] text-[#C4B5FD] group-hover:text-cyan-200 transition-all shrink-0">
                  <span>pulseport.in</span>
                  <span className="text-[9px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">&#8599;</span>
                </span>
              </a>

              {/* 6. Plugins Social */}
              <a
                href="https://plugins.social"
                target="_blank"
                rel="noopener noreferrer"
                data-platform="plugins"
                onMouseEnter={() => setActivePlatform('plugins')}
                onMouseLeave={() => setActivePlatform(null)}
                style={{
                  '--plat-border': 'rgba(168, 85, 247, 0.6)',
                  '--plat-glow': 'rgba(168, 85, 247, 0.4)',
                }}
                className={`platform-item group flex items-center justify-between gap-2 p-2.5 -mx-2 rounded-xl border ${
                  activePlatform === 'plugins'
                    ? 'is-spotlight border-purple-400/55 bg-purple-500/[0.09]'
                    : 'border-transparent hover:border-purple-400/45 hover:bg-purple-500/[0.07]'
                } transition-all`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC] group-hover:shadow-[0_0_8px_#C084FC]" />
                    <p className="text-[13.5px] font-medium text-slate-200 group-hover:text-white">Plugins Social</p>
                  </div>
                  <p className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-[#78748F] pl-3.5 mt-0.5">PLUGINS.SOCIAL</p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#131020] group-hover:bg-purple-500/25 border border-purple-400/30 group-hover:border-purple-300/70 font-mono text-[10px] text-[#C4B5FD] group-hover:text-white transition-all shrink-0">
                  <span>plugins.social</span>
                  <span className="text-[9px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">&#8599;</span>
                </span>
              </a>
            </div>
          </div>

          {/* =================================================================== */}
          {/* COLUMN 4: CLINICAL DISPATCH GLASS COCKPIT & CONTACT CHIPS (3 cols)  */}
          {/* =================================================================== */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-5">
            {/* Animated Rotating Border-Beam Glass Cockpit Card */}
            <div className="cockpit-shell shadow-[0_16px_44px_rgba(0,0,0,0.55)]">
              <div className="cockpit-inner p-5">
                <div className="flex items-center justify-between mb-3.5">
                  <h3 className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-100">
                    CLINICAL DISPATCH
                  </h3>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300">
                    ENCRYPTED
                  </span>
                </div>

                <p className="text-[13px] leading-[1.65] text-[#9A96AE] font-light mb-4">
                  Receive peer-reviewed clinical articles, healthcare tech updates, and deployment releases.
                </p>

                {/* Interactive Subscription Form */}
                <form onSubmit={handleClinicalDispatchSubmit} className="space-y-3" noValidate>
                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter institutional email"
                      aria-label="Enter institutional email"
                      className="w-full min-w-0 px-3.5 py-2.5 rounded-full bg-[#090810] border border-white/15 focus:border-purple-400/75 focus:ring-2 focus:ring-purple-500/20 text-[12.5px] text-slate-100 placeholder-[#6A6582] outline-none transition-all"
                    />
                    <button
                      ref={joinBtnRef}
                      type="submit"
                      disabled={submitting}
                      onMouseMove={handleMagneticMove}
                      onMouseLeave={handleMagneticLeave}
                      className="champagne-btn shrink-0 px-4 py-2.5 rounded-full text-[#08070D] font-mono text-[11px] font-bold tracking-[0.14em] uppercase cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? '...' : 'JOIN'}
                    </button>
                  </div>

                  <label className="flex items-start gap-2.5 cursor-pointer group pt-0.5">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="rb-checkbox mt-0.5"
                    />
                    <span className="text-[11.5px] leading-[1.45] text-[#86819D] group-hover:text-slate-300 transition-colors">
                      I agree to receive communications from RBCurexia.
                    </span>
                  </label>

                  {dispatchStatus && (
                    <div
                      className={`font-mono text-[10.5px] leading-relaxed px-3 py-2 rounded-lg border ${
                        dispatchStatus.type === 'success'
                          ? 'text-emerald-300 border-emerald-400/35 bg-emerald-500/10'
                          : dispatchStatus.type === 'warning'
                          ? 'text-amber-200 border-amber-400/35 bg-amber-500/10'
                          : 'text-rose-300 border-rose-400/35 bg-rose-500/10'
                      }`}
                    >
                      {dispatchStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Chips with Click-to-Copy */}
            <div className="space-y-2.5">
              {/* Phone Contact Chip */}
              <div
                onMouseMove={handleCardMouseMove}
                className="reactive-card flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <a
                    href="tel:+919987976863"
                    title="Call RBCurexia Support"
                    className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-center text-emerald-300 hover:bg-emerald-500/25 transition-colors shrink-0"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </a>
                  <a href="tel:+919987976863" className="font-mono text-[12.5px] text-slate-200 hover:text-[#EAE1C8] truncate transition-colors">
                    +91 9987976863
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyText('+91 9987976863', 'Phone number')}
                  className="shrink-0 px-2 py-1 rounded-md bg-white/[0.04] hover:bg-purple-500/20 border border-white/10 font-mono text-[9.5px] uppercase tracking-wider text-purple-300 cursor-pointer transition-colors"
                >
                  COPY
                </button>
              </div>

              {/* Email Contact Chip */}
              <div
                onMouseMove={handleCardMouseMove}
                className="reactive-card flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <a
                    href="mailto:support@rbcurexia.com"
                    title="Email RBCurexia Support"
                    className="w-7 h-7 rounded-lg bg-purple-500/15 border border-purple-400/25 flex items-center justify-center text-purple-300 hover:bg-purple-500/30 transition-colors shrink-0"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                  <a href="mailto:support@rbcurexia.com" className="font-mono text-[12px] text-[#C4B5FD] hover:text-white truncate transition-colors">
                    support@rbcurexia.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyText('support@rbcurexia.com', 'Support email')}
                  className="shrink-0 px-2 py-1 rounded-md bg-white/[0.04] hover:bg-purple-500/20 border border-white/10 font-mono text-[9.5px] uppercase tracking-wider text-purple-300 cursor-pointer transition-colors"
                >
                  COPY
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* INTERACTIVE COMPLIANCE VAULT & LEGAL BAR                              */}
        {/* ===================================================================== */}
        <div className="mt-14 pt-7 border-t border-white/[0.08] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-[#7B7692]">
            &copy; 2026 RBCUREXIA HEALTHCARE TECHNOLOGIES PVT. LTD. ALL RIGHTS RESERVED.
          </p>

          {/* Compliance Vault Pills with Floating Glass Verification Popovers */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Badge 1: NABH & HIPAA ALIGNED */}
            <div className="relative compliance-vault-item">
              {activeVault === 'nabh' && (
                <div className="vault-popover absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3.5 rounded-xl bg-[#100D1B]/95 backdrop-blur-xl border border-emerald-400/35 shadow-[0_14px_40px_rgba(0,0,0,0.75)] z-40">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[9.5px] font-semibold uppercase tracking-wider text-emerald-300">CLINICAL AUDIT · VERIFIED</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
                  </div>
                  <p className="text-[11.5px] leading-relaxed text-slate-300 mb-2">
                    Hospital &amp; clinic workflows structured around NABH 5th Ed. quality protocols and HIPAA PHI safeguards.
                  </p>
                  <div className="font-mono text-[9.5px] text-slate-400 border-t border-white/10 pt-1.5 flex justify-between">
                    <span>ID: RB-CLN-9942</span>
                    <span className="text-emerald-400">PASS</span>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVault((prev) => (prev === 'nabh' ? null : 'nabh'));
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.025] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-400/45 font-mono text-[10px] tracking-[0.13em] uppercase text-[#9A95B0] hover:text-emerald-200 transition-all cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>NABH &amp; HIPAA ALIGNED</span>
              </button>
            </div>

            {/* Badge 2: AES-256 ENCRYPTED EHR */}
            <div className="relative compliance-vault-item">
              {activeVault === 'aes' && (
                <div className="vault-popover absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3.5 rounded-xl bg-[#100D1B]/95 backdrop-blur-xl border border-purple-400/35 shadow-[0_14px_40px_rgba(0,0,0,0.75)] z-40">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[9.5px] font-semibold uppercase tracking-wider text-purple-300">CRYPTO VAULT · ACTIVE</span>
                    <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#A855F7]" />
                  </div>
                  <p className="text-[11.5px] leading-relaxed text-slate-300 mb-2">
                    End-to-end AES-256-GCM encryption at rest and TLS 1.3 in transit for patient EHR, diagnostics, and telemetry.
                  </p>
                  <div className="font-mono text-[9.5px] text-slate-400 border-t border-white/10 pt-1.5 flex justify-between">
                    <span>KEY: 256-BIT HSM</span>
                    <span className="text-purple-300">LOCKED</span>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVault((prev) => (prev === 'aes' ? null : 'aes'));
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.025] hover:bg-purple-500/10 border border-white/10 hover:border-purple-400/45 font-mono text-[10px] tracking-[0.13em] uppercase text-[#9A95B0] hover:text-purple-200 transition-all cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>AES-256 ENCRYPTED EHR</span>
              </button>
            </div>

            {/* Badge 3: ISO 27001 COMPLIANT */}
            <div className="relative compliance-vault-item">
              {activeVault === 'iso' && (
                <div className="vault-popover absolute bottom-full right-0 sm:left-1/2 sm:-translate-x-1/2 mb-3 w-64 p-3.5 rounded-xl bg-[#100D1B]/95 backdrop-blur-xl border border-sky-400/35 shadow-[0_14px_40px_rgba(0,0,0,0.75)] z-40">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[9.5px] font-semibold uppercase tracking-wider text-sky-300">ISMS CONTROLS · 2026</span>
                    <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38BDF8]" />
                  </div>
                  <p className="text-[11.5px] leading-relaxed text-slate-300 mb-2">
                    Continuous zero-trust access monitoring, immutable audit logs, and automated regional failover across India.
                  </p>
                  <div className="font-mono text-[9.5px] text-slate-400 border-t border-white/10 pt-1.5 flex justify-between">
                    <span>STD: ISO/IEC 27001</span>
                    <span className="text-sky-300">ALIGNED</span>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVault((prev) => (prev === 'iso' ? null : 'iso'));
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.025] hover:bg-sky-500/10 border border-white/10 hover:border-sky-400/45 font-mono text-[10px] tracking-[0.13em] uppercase text-[#9A95B0] hover:text-sky-200 transition-all cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>ISO 27001 COMPLIANT</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* SIGNATURE ELEMENT 3: MONUMENTAL PURPLE SHARD WORDMARK + BACK-TO-TOP     */}
      {/* ======================================================================= */}
      <div
        id="monumentalZone"
        onMouseMove={handleWordmarkMouseMove}
        onMouseLeave={handleWordmarkMouseLeave}
        className="relative w-full pt-4 pb-8 px-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative flex items-end justify-center">
          <div className="monumental-wrap w-full text-center relative overflow-hidden">
            {/* Outline Layer */}
            <div
              aria-hidden="true"
              className="wordmark-outline text-[13vw] sm:text-[11.5vw] lg:text-[138px] whitespace-nowrap"
            >
              RBCUREXIA
            </div>

            {/* Dynamic Radiant Purple Shard Flashing in from Right to Left (Zero Blue) */}
            <div
              aria-hidden="true"
              className="wordmark-purple-shard absolute inset-0 text-[13vw] sm:text-[11.5vw] lg:text-[138px] whitespace-nowrap pointer-events-none"
            >
              RBCUREXIA
            </div>

            {/* Slanted Physical Crystal Glare Sweeping Right-To-Left */}
            <div className="crystal-beam-rtl" />

            {/* Cursor-Illuminated Purple & Champagne Spotlight Layer (Strictly NO Blue) */}
            <div
              aria-hidden="true"
              className="wordmark-glow absolute inset-0 text-[13vw] sm:text-[11.5vw] lg:text-[138px] whitespace-nowrap pointer-events-none"
            >
              RBCUREXIA
            </div>
          </div>

          {/* Magnetic Circular Orbital "Back to Top ↑" Button */}
          <button
            type="button"
            onClick={handleBackToTop}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            title="Back to Top"
            aria-label="Back to Top"
            className="magnetic-el group absolute right-2 sm:right-6 bottom-2 sm:bottom-5 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0E0C18]/90 backdrop-blur-md border border-white/15 hover:border-[#EAE1C8]/65 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.65)] cursor-pointer transition-colors"
          >
            {/* Spinning Orbital SVG Ring (Purple & Champagne, no blue) */}
            <svg className="orbit-ring-spin absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 60 60">
              <circle
                cx="30"
                cy="30"
                r="26"
                fill="none"
                stroke="url(#topBtnOrbit)"
                strokeWidth="1.2"
                strokeDasharray="10 8"
                opacity="0.7"
              />
              <defs>
                <linearGradient id="topBtnOrbit" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EAE1C8" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-mono text-base text-[#EAE1C8] group-hover:-translate-y-0.5 transition-transform duration-200">
              &uarr;
            </span>
          </button>
        </div>
      </div>

      {/* Floating Toast Feedback Pill */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 z-50 max-w-sm px-4 py-2.5 rounded-xl bg-[#120F1F]/95 backdrop-blur-xl border border-purple-400/40 text-slate-100 font-mono text-xs shadow-[0_14px_40px_rgba(0,0,0,0.7)] animate-in fade-in slide-in-from-bottom-2 pointer-events-none"
        >
          {toastMessage}
        </div>
      )}
    </footer>
  );
}
