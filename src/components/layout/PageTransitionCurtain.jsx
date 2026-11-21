import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { PRIMARY_NAV_ITEMS } from '../../data/ecosystemData.js';

export default function PageTransitionCurtain() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'closing' | 'opening'
  const [destinationInfo, setDestinationInfo] = useState({
    num: '01',
    title: 'THE LIVING HEART',
    label: 'OVERVIEW',
    path: '/overview'
  });
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    // Only animate on actual path change
    if (prevPathRef.current === location.pathname) return;

    const matchedNav = PRIMARY_NAV_ITEMS.find((item) => item.path === location.pathname);
    const dest = matchedNav || {
      num: '00',
      title: 'SPECIALIZED PLATFORM',
      label: location.pathname.replace('/', '').toUpperCase() || 'PORTAL',
      path: location.pathname
    };

    setDestinationInfo({
      num: dest.num || '00',
      title: (dest.title || dest.label || 'SYSTEM').toUpperCase(),
      label: (dest.label || 'SYSTEM').toUpperCase(),
      path: location.pathname
    });

    prevPathRef.current = location.pathname;

    // Start transition: shutters close immediately
    setIsTransitioning(true);
    setPhase('closing');

    // At shutter apex: instantly scroll window to top (0, 0)
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 280);

    // Open shutters to reveal new page from the top
    const openTimer = setTimeout(() => {
      setPhase('opening');
    }, 360);

    // Complete transition and remove overlay from DOM
    const finishTimer = setTimeout(() => {
      setIsTransitioning(false);
      setPhase('idle');
    }, 720);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(openTimer);
      clearTimeout(finishTimer);
    };
  }, [location.pathname]);

  if (!isTransitioning && phase === 'idle') return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] pointer-events-none select-none overflow-hidden"
    >
      <style>{`
        @keyframes scanline-sweep {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes pulse-ring-rapid {
          0% { transform: scale(0.8); opacity: 0.9; }
          50% { transform: scale(1.3); opacity: 0.2; }
          100% { transform: scale(0.8); opacity: 0.9; }
        }
        @keyframes ecg-warp {
          0% { stroke-dashoffset: 400; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Top Shutter Blade */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#05020c] border-b-2 border-purple-500/80 shadow-[0_10px_40px_rgba(168,85,247,0.5)] transition-transform duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          phase === 'closing' ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#090416] via-[#05020c] to-[#0d061f] opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.25),transparent_70%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Bottom Shutter Blade */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#05020c] border-t-2 border-champagne/80 shadow-[0_-10px_40px_rgba(237,232,208,0.4)] transition-transform duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          phase === 'closing' ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#090416] via-[#05020c] to-[#0d061f] opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.2),transparent_70%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Central Quantum Hologram & Routing HUD */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-200 z-20 ${
          phase === 'closing' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Ambient Laser Beam along the Center Seam */}
        <div className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#c084fc] via-[#ede8d0] via-[#38bdf8] to-transparent shadow-[0_0_24px_rgba(192,132,252,0.9)]" />

        {/* Central Monogram Beacon */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute w-28 h-28 rounded-full border border-purple-500/50 animate-[pulse-ring-rapid_1.5s_infinite]" />
          <div className="absolute w-36 h-36 rounded-full border border-cyan-400/30 animate-[pulse-ring-rapid_1.8s_infinite]" style={{ animationDelay: '0.3s' }} />
          <div className="relative w-16 h-16 rounded-2xl bg-[#090416] border border-champagne/40 flex items-center justify-center shadow-2xl p-2.5 backdrop-blur-xl">
            <img
              src="/assets/rbcurexia-monogram-4k.webp"
              alt="RB"
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(237,232,208,0.8)]"
            />
          </div>
        </div>

        {/* Futuristic Routing HUD Box */}
        <div className="text-center space-y-2 px-6 py-3 rounded-2xl bg-[#06020f]/80 border border-white/10 backdrop-blur-md shadow-2xl max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono tracking-[0.28em] text-purple-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>QUANTUM ROUTING PROTOCOL ACTIVE</span>
          </div>

          <h2 className="font-display font-light text-xl sm:text-2xl text-white tracking-wide">
            <span className="text-purple-400 font-mono text-base mr-2">{destinationInfo.num}</span>
            <span className="satin-champagne font-normal">{destinationInfo.label}</span>
          </h2>

          <div className="text-[10px] font-mono text-stonewarm/80 tracking-wider">
            {destinationInfo.title}
          </div>

          {/* Animated Mini ECG Line */}
          <div className="w-48 h-6 mx-auto pt-1">
            <svg viewBox="0 0 160 20" className="w-full h-full overflow-visible">
              <path
                d="M 0 10 L 40 10 L 45 4 L 50 16 L 55 2 L 60 14 L 65 10 L 160 10"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.8"
                strokeDasharray="160"
                className="animate-[ecg-warp_1.2s_linear_infinite]"
              />
            </svg>
          </div>

          <div className="text-[9px] font-mono text-cyan-400/90 tracking-widest pt-0.5">
            CRYPTOGRAPHIC HANDSHAKE 100% · LATENCY &lt; 8MS
          </div>
        </div>
      </div>
    </div>
  );
}
