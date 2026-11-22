export default function PageThemedVisual({ pageId = 'pulseport' }) {
  return (
    <div className="relative w-full max-w-[560px] h-[390px] sm:h-[450px] flex items-center justify-center select-none overflow-visible">
      {/* 
        Keyframe Animations for Rotations, Sweeps, ECG Waves & Glowing Pulses
        All coordinate translations use SVG <animateTransform> to guarantee 
        parent transform="translate(X,Y)" is NEVER overridden by CSS!
      */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.85); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 0.15; }
          100% { transform: scale(0.85); opacity: 0.8; }
        }
        @keyframes laser-sweep {
          0% { transform: translateY(0px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(120px); opacity: 0; }
        }
        @keyframes ecg-flow {
          0% { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drip-fall {
          0% { transform: translateY(0px); opacity: 1; }
          70% { transform: translateY(28px); opacity: 0.9; }
          100% { transform: translateY(40px); opacity: 0; }
        }
        @keyframes radar-sweep-beam {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes beacon-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.4)) drop-shadow(0 0 20px rgba(168, 85, 247, 0.3)); }
          50% { filter: drop-shadow(0 0 22px rgba(56, 189, 248, 0.8)) drop-shadow(0 0 35px rgba(168, 85, 247, 0.6)); }
        }
        @keyframes conduit-pulse-v {
          0% { transform: translateY(-24px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(24px); opacity: 0; }
        }
        @keyframes conduit-pulse-h {
          0% { transform: translateX(-30px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(30px); opacity: 0; }
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. MISSION: Vertical Double Helix DNA Constellation                       */}
      {/* Exact Match to Reference Screenshot (media_1795203774875_631adae9.jpg)    */}
      {/* Features: Vertical twisting DNA with rungs, central glowing Cross badge,  */}
      {/* 3D orbiting particle ellipses, and 5 Connected Node Badges:              */}
      {/* Clinicians, Hospitals, Diagnostics, Pharmacies, Patients                  */}
      {/* Uses SVG <animateTransform> so coordinates NEVER collapse to (0,0)!       */}
      {/* ========================================================================= */}
      {pageId === 'mission' && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Ambient Lighting Layers */}
          <div className="absolute w-[380px] h-[380px] bg-purple-600/25 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute w-[320px] h-[320px] bg-cyan-500/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute w-[220px] h-[220px] bg-indigo-500/30 rounded-full blur-[70px] pointer-events-none" />

          <svg viewBox="0 0 540 440" className="w-full h-full max-w-[540px] overflow-visible drop-shadow-2xl">
            <defs>
              <linearGradient id="dna-ribbon-cyan" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#818cf8" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="dna-ribbon-purple" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#e879f9" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="center-cross-rim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#ede8d0" />
              </linearGradient>

              <filter id="dna-glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="dna-glow-purple" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 1. Orbiting 3D Planetary Ellipses with Starlight Particles */}
            <g transform="translate(270, 220)">
              {/* Ellipse 1 (Tilted -16deg) */}
              <g className="animate-[spin-slow_36s_linear_infinite]" style={{ transformOrigin: '0px 0px' }}>
                <ellipse cx="0" cy="0" rx="215" ry="70" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" strokeDasharray="4 8" transform="rotate(-16)" />
                <circle cx="-185" cy="-35" r="2.5" fill="#38bdf8" filter="url(#dna-glow-cyan)" />
                <circle cx="180" cy="35" r="3" fill="#ffffff" filter="url(#dna-glow-cyan)" />
                <circle cx="90" cy="-60" r="2" fill="#c084fc" />
                <circle cx="-90" cy="60" r="2" fill="#38bdf8" />
              </g>

              {/* Ellipse 2 (Tilted +16deg) */}
              <g className="animate-[spin-reverse_42s_linear_infinite]" style={{ transformOrigin: '0px 0px' }}>
                <ellipse cx="0" cy="0" rx="210" ry="66" fill="none" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="1.5" strokeDasharray="5 9" transform="rotate(16)" />
                <circle cx="170" cy="-38" r="2.5" fill="#c084fc" filter="url(#dna-glow-purple)" />
                <circle cx="-170" cy="38" r="3" fill="#ffffff" filter="url(#dna-glow-cyan)" />
                <circle cx="80" cy="58" r="2" fill="#38bdf8" />
                <circle cx="-80" cy="-58" r="2" fill="#ede8d0" />
              </g>

              {/* Horizontal Central Equatorial Ring */}
              <ellipse cx="0" cy="0" rx="225" ry="40" fill="none" stroke="rgba(237, 232, 208, 0.22)" strokeWidth="1" strokeDasharray="3 7" />
            </g>

            {/* 2. Dotted Rays Connecting Center Cross to All 5 Nodes */}
            <g stroke="rgba(192, 132, 252, 0.3)" strokeWidth="1.2" strokeDasharray="3 4">
              <line x1="270" y1="220" x2="135" y2="95" />
              <line x1="270" y1="220" x2="410" y2="120" />
              <line x1="270" y1="220" x2="125" y2="280" />
              <line x1="270" y1="220" x2="415" y2="290" />
              <line x1="270" y1="220" x2="270" y2="365" />
            </g>

            {/* 3. Central Vertical DNA Double Helix Ladder */}
            <g id="mission-dna-helix">
              {/* Base-Pair Rungs */}
              {[
                { y: 35, phase: -0.9 },
                { y: 55, phase: -0.7 },
                { y: 75, phase: -0.4 },
                { y: 95, phase: 0 },
                { y: 115, phase: 0.4 },
                { y: 135, phase: 0.7 },
                { y: 155, phase: 0.9 },
                { y: 175, phase: 0.7 },
                { y: 195, phase: 0.4 },
                { y: 245, phase: -0.4 },
                { y: 265, phase: -0.7 },
                { y: 285, phase: -0.9 },
                { y: 305, phase: -0.7 },
                { y: 325, phase: -0.4 },
                { y: 345, phase: 0 },
                { y: 385, phase: 0.6 },
                { y: 405, phase: 0.8 },
                { y: 425, phase: 0.9 }
              ].map((rung, idx) => {
                const spread = Math.sin(rung.phase * Math.PI) * 48;
                const x1 = 270 - spread;
                const x2 = 270 + spread;
                if (Math.abs(spread) < 6) return null;
                return (
                  <g key={idx}>
                    <line
                      x1={x1}
                      y1={rung.y}
                      x2={x2}
                      y2={rung.y}
                      stroke="rgba(255, 255, 255, 0.35)"
                      strokeWidth="1.4"
                      strokeDasharray="2 2"
                    />
                    <circle cx={x1} cy={rung.y} r="3" fill="#38bdf8" filter="url(#dna-glow-cyan)" />
                    <circle cx={x2} cy={rung.y} r="3" fill="#c084fc" filter="url(#dna-glow-purple)" />
                  </g>
                );
              })}

              {/* DNA Strand 1: Cyan/Purple */}
              <path
                d="M 270,18 C 215,65 215,135 270,185 C 325,235 325,305 270,355 C 215,405 215,435 270,440"
                fill="none"
                stroke="url(#dna-ribbon-cyan)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#dna-glow-cyan)"
              />
              <path
                d="M 270,18 C 218,65 218,135 270,185 C 322,235 322,305 270,355 C 218,405 218,435 270,440"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.2"
                opacity="0.85"
              />

              {/* DNA Strand 2: Purple/Pink */}
              <path
                d="M 270,18 C 325,65 325,135 270,185 C 215,235 215,305 270,355 C 325,405 325,435 270,440"
                fill="none"
                stroke="url(#dna-ribbon-purple)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#dna-glow-purple)"
              />
              <path
                d="M 270,18 C 322,65 322,135 270,185 C 218,235 218,305 270,355 C 322,405 322,435 270,440"
                fill="none"
                stroke="#ede8d0"
                strokeWidth="1.2"
                opacity="0.85"
              />
            </g>

            {/* 4. Central Glowing Cross Emblem (Axis of Healing) */}
            <g transform="translate(270, 220)" className="animate-[beacon-glow_3.5s_ease-in-out_infinite]">
              {/* Expanding Pulse Halo Rings */}
              <circle cx="0" cy="0" r="38" fill="none" stroke="#38bdf8" strokeWidth="1.5" className="animate-[pulse-ring_3s_ease-out_infinite]" />
              <circle cx="0" cy="0" r="50" fill="none" stroke="#c084fc" strokeWidth="1" className="animate-[pulse-ring_3s_ease-out_infinite]" style={{ animationDelay: '1s' }} />

              {/* Radiant Ambient Core Disc */}
              <circle cx="0" cy="0" r="32" fill="rgba(168, 85, 247, 0.25)" filter="url(#dna-glow-purple)" />
              <circle cx="0" cy="0" r="26" fill="#0d061f" stroke="url(#center-cross-rim)" strokeWidth="2.5" filter="url(#dna-glow-cyan)" />
              <circle cx="0" cy="0" r="21" fill="#14082c" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1" />

              {/* Bold White/Champagne Clinical Cross */}
              <g filter="url(#dna-glow-cyan)">
                <rect x="-4" y="-12" width="8" height="24" rx="2" fill="#ffffff" />
                <rect x="-12" y="-4" width="24" height="8" rx="2" fill="#ffffff" />
              </g>
            </g>

            {/* ========================================================================= */}
            {/* 5. THE 5 CONNECTED ECOSYSTEM NODE BADGES (Matching User Reference Image)  */}
            {/* Each node has SVG <animateTransform> for smooth relative floating motion  */}
            {/* Parent transform="translate(X,Y)" stays rock-solid, NEVER collapses!     */}
            {/* ========================================================================= */}

            {/* NODE 1: CLINICIANS (Top Left) */}
            <g transform="translate(135, 95)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="29" fill="rgba(168, 85, 247, 0.2)" filter="url(#dna-glow-purple)" />
                <circle cx="0" cy="0" r="24" fill="#0b0416" stroke="#c084fc" strokeWidth="2" filter="url(#dna-glow-purple)" />
                <circle cx="0" cy="0" r="20" fill="#110724" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                
                {/* Doctor Icon */}
                <g transform="translate(0, -1)">
                  <circle cx="0" cy="-6" r="4.5" fill="#ffffff" />
                  <path d="M -9 7 C -9 0, 9 0, 9 7 Z" fill="#ffffff" />
                  <path d="M -5 1.5 C -5 6, 5 6, 5 1.5" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="0" cy="5" r="1.5" fill="#38bdf8" />
                </g>

                <text x="0" y="38" fill="#ede8d0" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" fontWeight="500" letterSpacing="0.3">
                  Clinicians
                </text>
              </g>
            </g>

            {/* NODE 2: HOSPITALS (Top Right) */}
            <g transform="translate(410, 120)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6.5s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="29" fill="rgba(56, 189, 248, 0.2)" filter="url(#dna-glow-cyan)" />
                <circle cx="0" cy="0" r="24" fill="#0b0416" stroke="#38bdf8" strokeWidth="2" filter="url(#dna-glow-cyan)" />
                <circle cx="0" cy="0" r="20" fill="#071328" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                
                {/* Hospital Building Icon */}
                <g transform="translate(0, -1)">
                  <rect x="-8" y="-9" width="16" height="17" rx="1.5" fill="none" stroke="#ffffff" strokeWidth="1.4" />
                  <path d="M -2.5 -5 H 2.5 M 0 -7.5 V -2.5" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="-5" y="0" width="3" height="3" fill="#ffffff" />
                  <rect x="2" y="0" width="3" height="3" fill="#ffffff" />
                  <rect x="-5" y="4" width="3" height="3" fill="#ffffff" />
                  <rect x="2" y="4" width="3" height="3" fill="#ffffff" />
                </g>

                <text x="0" y="38" fill="#ede8d0" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" fontWeight="500" letterSpacing="0.3">
                  Hospitals
                </text>
              </g>
            </g>

            {/* NODE 3: DIAGNOSTICS (Mid Left) */}
            <g transform="translate(125, 280)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="7s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="29" fill="rgba(56, 189, 248, 0.2)" filter="url(#dna-glow-cyan)" />
                <circle cx="0" cy="0" r="24" fill="#0b0416" stroke="#38bdf8" strokeWidth="2" filter="url(#dna-glow-cyan)" />
                <circle cx="0" cy="0" r="20" fill="#071526" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                
                {/* Microscope Icon */}
                <g transform="translate(0, -1)">
                  <line x1="-3" y1="-8" x2="3" y2="-2" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="0" y1="-5" x2="-5" y2="0" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="-8" y1="2" x2="2" y2="2" stroke="#ffffff" strokeWidth="1.5" />
                  <path d="M 3 -2 C 6 2, 6 6, 2 7" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="-7" y1="7" x2="6" y2="7" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
                </g>

                <text x="0" y="38" fill="#ede8d0" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" fontWeight="500" letterSpacing="0.3">
                  Diagnostics
                </text>
              </g>
            </g>

            {/* NODE 4: PHARMACIES (Mid Right) */}
            <g transform="translate(415, 290)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="29" fill="rgba(56, 189, 248, 0.2)" filter="url(#dna-glow-cyan)" />
                <circle cx="0" cy="0" r="24" fill="#0b0416" stroke="#38bdf8" strokeWidth="2" filter="url(#dna-glow-cyan)" />
                <circle cx="0" cy="0" r="20" fill="#0b1728" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                
                {/* Medicine Jar Icon */}
                <g transform="translate(0, -1)">
                  <rect x="-4" y="-8" width="8" height="3" rx="1" fill="#38bdf8" />
                  <rect x="-6.5" y="-5" width="13" height="13" rx="2" fill="none" stroke="#ffffff" strokeWidth="1.4" />
                  <path d="M -2.5 1.5 H 2.5 M 0 -1 V 4" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                </g>

                <text x="0" y="38" fill="#ede8d0" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" fontWeight="500" letterSpacing="0.3">
                  Pharmacies
                </text>
              </g>
            </g>

            {/* NODE 5: PATIENTS (Bottom Center) */}
            <g transform="translate(270, 365)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6.5s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="29" fill="rgba(192, 132, 252, 0.25)" filter="url(#dna-glow-purple)" />
                <circle cx="0" cy="0" r="24" fill="#0b0416" stroke="#c084fc" strokeWidth="2" filter="url(#dna-glow-purple)" />
                <circle cx="0" cy="0" r="20" fill="#140826" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                
                {/* Patients Icon */}
                <g transform="translate(0, -1)">
                  <circle cx="-4" cy="-5" r="3.5" fill="#ffffff" />
                  <path d="M -9 6 C -9 1, 1 1, 1 6 Z" fill="#ffffff" />
                  <circle cx="4" cy="-3" r="3" fill="#38bdf8" />
                  <path d="M 0 6 C 0 2, 8 2, 8 6 Z" fill="#38bdf8" />
                </g>

                <text x="0" y="38" fill="#ede8d0" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" fontWeight="500" letterSpacing="0.3">
                  Patients
                </text>
              </g>
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. PANACEA: 3D Holographic Clinical Cockpit & Stylus Tablet               */}
      {/* Exact Match to Reference Screenshot (media_1795210324416_b79a5421.jpg)    */}
      {/* Features: 3D Perspective Digital Tablet with Stylus Handwriting,          */}
      {/* 3 Floating Glass Cards (Longitudinal EHR Dossiers, Smart OPD Queues,      */}
      {/* Adverse Drug Interaction Warning), Callout Pills and Tip Beacon           */}
      {/* Pure SVG <animateTransform> prevents any coordinate collapse!             */}
      {/* ========================================================================= */}
            {pageId === 'panacea' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg id="panacea-cockpit-svg" viewBox="0 0 540 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '560px', overflow: 'visible' }}>
            <defs>
              <pattern id="pan-dot-grid" width="18" height="18" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="0.85" fill="#94A3B8" opacity="0.16" />
              </pattern>
              <radialGradient id="pan-aura" cx="46%" cy="50%" r="54%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#07060B" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="pan-panel-bg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#131020" stopOpacity="0.96" />
                <stop offset="100%" stopColor="#0B0914" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="pan-cyan-card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D1726" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#090D18" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="pan-rose-card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1C0E17" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0E0810" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="pan-main-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.85" />
                <stop offset="52%" stopColor="#38BDF8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#EAE1C8" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="pan-cyan-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="pan-rose-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB7185" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#9F1239" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="pan-rx-ink" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EAE1C8" />
                <stop offset="55%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
              <linearGradient id="pan-stylus-body" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#1E1B2E" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
              <filter id="pan-soft-glow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.55" />
              </filter>
              <filter id="pan-cyan-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#38BDF8" floodOpacity="0.85" />
              </filter>
              <filter id="pan-rose-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#FB7185" floodOpacity="0.85" />
              </filter>
              <path id="pan-wire-opd" d="M 332 114 C 346 114, 344 102, 358 102" fill="none" />
              <path id="pan-wire-drug" d="M 332 272 C 346 272, 344 278, 358 278" fill="none" />
              <style>{`
                .pan-mono { font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; letter-spacing: 0.08em; }
                .pan-sans { font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif; }
                @keyframes panFloatTop { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-4px); } }
                @keyframes panFloatBot { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(4px); } }
                @keyframes panPulseDot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.42; transform: scale(0.75); } }
                @keyframes panDashFlow { to { stroke-dashoffset: -24; } }
                @keyframes panDrawRx { 0% { stroke-dashoffset: 310; opacity: 0.35; } 10% { opacity: 1; } 68%, 88% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0.2; } }
                @keyframes panNibHalo { 0%, 100% { opacity: 0.85; transform: scale(1); } 50% { opacity: 0.25; transform: scale(1.65); } }
                @keyframes panStylusHover { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(1.8px, -2px); } }
                .pan-float-a { animation: panFloatTop 5.4s ease-in-out infinite; }
                .pan-float-b { animation: panFloatBot 6.0s ease-in-out infinite; }
                .pan-pulse { transform-box: fill-box; transform-origin: center; animation: panPulseDot 1.8s ease-in-out infinite; }
                .pan-wire { stroke-dasharray: 4 4; animation: panDashFlow 1.5s linear infinite; }
                .pan-rx-stroke { stroke-dasharray: 310; stroke-dashoffset: 310; animation: panDrawRx 4.6s cubic-bezier(0.35, 0, 0.2, 1) infinite; }
                .pan-nib-ring { transform-box: fill-box; transform-origin: center; animation: panNibHalo 2.1s ease-in-out infinite; }
                .pan-stylus-g { animation: panStylusHover 3.4s ease-in-out infinite; }
              `}</style>
            </defs>
            <rect x="6" y="10" width="528" height="360" rx="20" fill="url(#pan-dot-grid)" />
            <ellipse cx="260" cy="190" rx="250" ry="170" fill="url(#pan-aura)" />
            <g fill="none" strokeWidth="1.4" strokeOpacity="0.72">
              <use href="#pan-wire-opd" stroke="#38BDF8" className="pan-wire" />
              <use href="#pan-wire-drug" stroke="#FB7185" className="pan-wire" />
            </g>
            <circle r="2.8" fill="#38BDF8" filter="url(#pan-cyan-glow)">
              <animateMotion dur="2.1s" repeatCount="indefinite">
                <mpath href="#pan-wire-opd" />
              </animateMotion>
            </circle>
            <circle r="2.8" fill="#FB7185" filter="url(#pan-rose-glow)">
              <animateMotion dur="2.4s" begin="0.5s" repeatCount="indefinite">
                <mpath href="#pan-wire-drug" />
              </animateMotion>
            </circle>
            <g filter="url(#pan-soft-glow)">
              <rect x="16" y="22" width="316" height="336" rx="16" fill="url(#pan-panel-bg)" stroke="url(#pan-main-stroke)" strokeWidth="1.35" />
              <circle cx="33" cy="40" r="2.8" fill="#FB7185" opacity="0.75" />
              <circle cx="43" cy="40" r="2.8" fill="#FBBF24" opacity="0.75" />
              <circle cx="53" cy="40" r="2.8" fill="#34D399" opacity="0.75" />
              <text x="67" y="43" fill="#CBD5E1" fontSize="8.5" fontWeight="600" className="pan-mono">PANACEA CLINICAL OS</text>
              <rect x="246" y="31" width="74" height="18" rx="9" fill="#064E3B" fillOpacity="0.45" stroke="#34D399" strokeWidth="0.85" strokeOpacity="0.75" />
              <circle cx="257" cy="40" r="2.6" fill="#34D399" className="pan-pulse" />
              <text x="265" y="42.8" fill="#6EE7B7" fontSize="7.2" fontWeight="700" className="pan-mono">EHR SYNC</text>
              <line x1="16" y1="57" x2="332" y2="57" stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="1" />
              <rect x="30" y="69" width="34" height="34" rx="10" fill="#18132B" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.55" />
              <circle cx="47" cy="81" r="4.5" fill="none" stroke="#EAE1C8" strokeWidth="1.3" />
              <path d="M 39.5 94 C 40.5 89.2, 53.5 89.2, 54.5 94" fill="none" stroke="#C084FC" strokeWidth="1.3" strokeLinecap="round" />
              <text x="74" y="82" fill="#F8FAFC" fontSize="11.5" fontWeight="700" className="pan-mono">PATIENT #4729</text>
              <text x="74" y="97" fill="#94A3B8" fontSize="8.8" className="pan-sans">68 yrs · Female · Longitudinal Dossier</text>
              <g>
                <rect x="30" y="113" width="88" height="25" rx="7" fill="#0E1525" stroke="#1E293B" strokeWidth="1" />
                <circle cx="41" cy="125.5" r="2.4" fill="#34D399" />
                <text x="49" y="128.5" fill="#94A3B8" fontSize="7.5" className="pan-mono">HR</text>
                <text x="67" y="128.5" fill="#F8FAFC" fontSize="8.8" fontWeight="700" className="pan-mono">76</text>
                <rect x="125" y="113" width="98" height="25" rx="7" fill="#0E1525" stroke="#1E293B" strokeWidth="1" />
                <circle cx="136" cy="125.5" r="2.4" fill="#38BDF8" />
                <text x="144" y="128.5" fill="#94A3B8" fontSize="7.5" className="pan-mono">BP</text>
                <text x="160" y="128.5" fill="#F8FAFC" fontSize="8.8" fontWeight="700" className="pan-mono">124/80</text>
                <rect x="230" y="113" width="88" height="25" rx="7" fill="#0E1525" stroke="#1E293B" strokeWidth="1" />
                <circle cx="241" cy="125.5" r="2.4" fill="#A855F7" />
                <text x="249" y="128.5" fill="#94A3B8" fontSize="7.5" className="pan-mono">SpO2</text>
                <text x="280" y="128.5" fill="#F8FAFC" fontSize="8.8" fontWeight="700" className="pan-mono">99%</text>
              </g>
              <g>
                <text x="30" y="157" fill="#CBD5E1" fontSize="8.4" fontWeight="500" className="pan-sans">Longitudinal EHR</text>
                <rect x="132" y="151" width="124" height="5" rx="2.5" fill="#1A172B" />
                <rect x="132" y="151" width="106" height="5" rx="2.5" fill="#A855F7" />
                <text x="318" y="156.5" textAnchor="end" fill="#C4B5FD" fontSize="7.2" className="pan-mono">14 VISITS</text>
                <text x="30" y="176" fill="#CBD5E1" fontSize="8.4" fontWeight="500" className="pan-sans">Investigations</text>
                <rect x="132" y="170" width="124" height="5" rx="2.5" fill="#1A172B" />
                <rect x="132" y="170" width="88" height="5" rx="2.5" fill="#38BDF8" />
                <text x="318" y="175.5" textAnchor="end" fill="#7DD3FC" fontSize="7.2" className="pan-mono">LAB SYNC</text>
                <text x="30" y="195" fill="#CBD5E1" fontSize="8.4" fontWeight="500" className="pan-sans">Allergies</text>
                <rect x="132" y="189" width="124" height="5" rx="2.5" fill="#1A172B" />
                <rect x="132" y="189" width="44" height="5" rx="2.5" fill="#FB7185" />
                <text x="318" y="194.5" textAnchor="end" fill="#FDA4AF" fontSize="7.2" className="pan-mono">2 FLAGGED</text>
              </g>
              <rect x="30" y="211" width="288" height="132" rx="12" fill="#08070F" stroke="#25213B" strokeWidth="1.1" />
              <circle cx="43" cy="227" r="2.4" fill="#38BDF8" />
              <text x="51" y="229.8" fill="#7DD3FC" fontSize="7.6" fontWeight="700" className="pan-mono">STYLUS DIGITAL PAD</text>
              <text x="306" y="229.8" textAnchor="end" fill="#64748B" fontSize="7.2" className="pan-mono">NATURAL INK AI</text>
              <line x1="42" y1="248" x2="306" y2="248" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="42" y1="274" x2="306" y2="274" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="42" y1="300" x2="306" y2="300" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="42" y1="324" x2="306" y2="324" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1" />
              <text x="45" y="270" fill="#EAE1C8" opacity="0.22" fontSize="18" fontWeight="700" className="pan-sans">Rx</text>
              <path d="M 68 294 C 82 260, 98 256, 108 286 C 116 308, 134 258, 148 278 C 160 296, 174 264, 190 278 C 202 288, 212 272, 224 276" fill="none" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.16" className="pan-rx-stroke" />
              <path d="M 68 294 C 82 260, 98 256, 108 286 C 116 308, 134 258, 148 278 C 160 296, 174 264, 190 278 C 202 288, 212 272, 224 276" fill="none" stroke="url(#pan-rx-ink)" strokeWidth="2.2" strokeLinecap="round" className="pan-rx-stroke" />
              <path d="M 74 312 C 118 308, 168 310, 214 306" fill="none" stroke="#A855F7" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.55" className="pan-rx-stroke" />
              <g className="pan-stylus-g">
                <circle cx="224" cy="276" r="6" fill="none" stroke="#38BDF8" strokeWidth="1.2" className="pan-nib-ring" />
                <circle cx="224" cy="276" r="2.6" fill="#38BDF8" filter="url(#pan-cyan-glow)" />
                <g transform="translate(224, 276) rotate(-42)">
                  <polygon points="0,0 13,-3.2 13,3.2" fill="#94A3B8" />
                  <polygon points="0,0 5,-1.2 5,1.2" fill="#38BDF8" />
                  <rect x="13" y="-3.6" width="58" height="7.2" rx="2" fill="url(#pan-stylus-body)" stroke="#64748B" strokeWidth="0.7" />
                  <rect x="21" y="-3.6" width="3.5" height="7.2" fill="#EAE1C8" />
                  <rect x="44" y="-1.2" width="14" height="2.4" rx="1.2" fill="#A855F7" opacity="0.85" />
                  <rect x="70" y="-3.2" width="8" height="6.4" rx="3" fill="#475569" />
                </g>
              </g>
            </g>
            <g className="pan-float-a" filter="url(#pan-soft-glow)">
              <rect x="358" y="34" width="168" height="146" rx="14" fill="url(#pan-cyan-card-bg)" stroke="url(#pan-cyan-stroke)" strokeWidth="1.3" />
              <text x="372" y="54" fill="#7DD3FC" fontSize="8" fontWeight="700" className="pan-mono">SMART OPD QUEUE</text>
              <circle cx="511" cy="51" r="3" fill="#38BDF8" className="pan-pulse" />
              <line x1="370" y1="64" x2="514" y2="64" stroke="#38BDF8" strokeOpacity="0.16" strokeWidth="1" />
              <rect x="368" y="73" width="148" height="28" rx="7" fill="#0F172A" fillOpacity="0.7" stroke="#1E293B" strokeWidth="0.8" />
              <text x="376" y="90" fill="#64748B" fontSize="7.8" className="pan-mono">01</text>
              <text x="392" y="90" fill="#F8FAFC" fontSize="8.6" fontWeight="500" className="pan-sans">Mr. Sharma</text>
              <rect x="462" y="79" width="48" height="16" rx="8" fill="#064E3B" fillOpacity="0.6" stroke="#34D399" strokeWidth="0.7" />
              <text x="486" y="89.5" textAnchor="middle" fill="#6EE7B7" fontSize="6.6" fontWeight="700" className="pan-mono">IN ROOM</text>
              <rect x="368" y="107" width="148" height="28" rx="7" fill="#0F172A" fillOpacity="0.55" stroke="#1E293B" strokeWidth="0.8" />
              <text x="376" y="124" fill="#64748B" fontSize="7.8" className="pan-mono">02</text>
              <text x="392" y="124" fill="#E2E8F0" fontSize="8.6" fontWeight="500" className="pan-sans">Ms. Kapoor</text>
              <rect x="470" y="113" width="40" height="16" rx="8" fill="#082F49" fillOpacity="0.7" stroke="#38BDF8" strokeWidth="0.7" />
              <text x="490" y="123.5" textAnchor="middle" fill="#7DD3FC" fontSize="6.6" fontWeight="700" className="pan-mono">NEXT</text>
              <rect x="368" y="141" width="148" height="28" rx="7" fill="#0F172A" fillOpacity="0.45" stroke="#1E293B" strokeWidth="0.8" />
              <text x="376" y="158" fill="#64748B" fontSize="7.8" className="pan-mono">03</text>
              <text x="392" y="158" fill="#CBD5E1" fontSize="8.6" fontWeight="500" className="pan-sans">Dr. Mehta</text>
              <rect x="462" y="147" width="48" height="16" rx="8" fill="#2E1065" fillOpacity="0.65" stroke="#A855F7" strokeWidth="0.7" />
              <text x="486" y="157.5" textAnchor="middle" fill="#D8B4FE" fontSize="6.6" fontWeight="700" className="pan-mono">WAIT 4m</text>
            </g>
            <g className="pan-float-b" filter="url(#pan-soft-glow)">
              <rect x="358" y="212" width="168" height="134" rx="14" fill="url(#pan-rose-card-bg)" stroke="url(#pan-rose-stroke)" strokeWidth="1.3" />
              <g transform="translate(370, 226)">
                <path d="M 8 1.5 L 15 13.5 L 1 13.5 Z" fill="#FB7185" fillOpacity="0.18" stroke="#FB7185" strokeWidth="1.25" strokeLinejoin="round" />
                <line x1="8" y1="5.8" x2="8" y2="9.4" stroke="#FECDD3" strokeWidth="1.3" strokeLinecap="round" />
                <circle cx="8" cy="11.5" r="0.8" fill="#FECDD3" />
              </g>
              <text x="392" y="237" fill="#FDA4AF" fontSize="7.8" fontWeight="700" className="pan-mono">INTERACTION GUARD</text>
              <line x1="370" y1="248" x2="514" y2="248" stroke="#FB7185" strokeOpacity="0.2" strokeWidth="1" />
              <text x="371" y="270" fill="#FFF1F2" fontSize="10.4" fontWeight="700" className="pan-sans">Amoxicillin + Warfarin</text>
              <text x="371" y="286" fill="#94A3B8" fontSize="8.2" className="pan-sans">Adverse Drug Screening · Auto</text>
              <rect x="369" y="300" width="146" height="30" rx="8" fill="#4C0519" fillOpacity="0.58" stroke="#FB7185" strokeWidth="0.85" strokeOpacity="0.7" />
              <circle cx="379" cy="315" r="2.5" fill="#FB7185" className="pan-pulse" />
              <text x="387" y="317.8" fill="#FECDD3" fontSize="6.3" fontWeight="700" className="pan-mono">INR ELEVATION RISK · ALT READY</text>
            </g>
          </svg>
        </div>
      )}

{pageId === 'architecture' && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Ambient Lighting */}
          <div className="absolute w-[400px] h-[400px] bg-purple-600/25 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute w-[320px] h-[320px] bg-cyan-600/20 rounded-full blur-[90px] pointer-events-none" />

          <svg viewBox="0 0 540 440" className="w-full h-full max-w-[540px] overflow-visible drop-shadow-2xl">
            <defs>
              <linearGradient id="arch-hub-rim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>

              <filter id="hub-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing Conduits with Animated Flow Pulses */}
            {/* Top Conduit */}
            <g>
              <line x1="270" y1="172" x2="270" y2="120" stroke="#8b5cf6" strokeWidth="3" />
              <circle cx="270" cy="146" r="3.5" fill="#ffffff" filter="url(#hub-glow)" className="animate-[conduit-pulse-v_2s_ease-in-out_infinite]" />
              <circle cx="270" cy="120" r="4" fill="#38bdf8" />
            </g>
            {/* Bottom Conduit */}
            <g>
              <line x1="270" y1="268" x2="270" y2="305" stroke="#38bdf8" strokeWidth="3" />
              <circle cx="270" cy="286" r="3.5" fill="#ffffff" filter="url(#hub-glow)" className="animate-[conduit-pulse-v_2s_ease-in-out_infinite]" />
              <circle cx="270" cy="305" r="4" fill="#8b5cf6" />
            </g>
            {/* Left Conduit */}
            <g>
              <line x1="222" y1="220" x2="155" y2="220" stroke="#a855f7" strokeWidth="3" />
              <circle cx="188" cy="220" r="3.5" fill="#ffffff" filter="url(#hub-glow)" className="animate-[conduit-pulse-h_2s_ease-in-out_infinite]" />
              <circle cx="155" cy="220" r="4" fill="#a855f7" />
            </g>
            {/* Right Conduit */}
            <g>
              <line x1="318" y1="220" x2="385" y2="220" stroke="#38bdf8" strokeWidth="3" />
              <circle cx="352" cy="220" r="3.5" fill="#ffffff" filter="url(#hub-glow)" className="animate-[conduit-pulse-h_2s_ease-in-out_infinite]" />
              <circle cx="385" cy="220" r="4" fill="#38bdf8" />
            </g>

            {/* CENTRAL RBCUREXIA HUB */}
            <g transform="translate(270, 220)" className="animate-[beacon-glow_4s_ease-in-out_infinite]">
              <circle cx="0" cy="0" r="56" fill="none" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="1" strokeDasharray="4 6" className="animate-[spin-slow_30s_linear_infinite]" />
              <circle cx="0" cy="0" r="48" fill="#090318" stroke="url(#arch-hub-rim)" strokeWidth="2.8" filter="url(#hub-glow)" />
              <circle cx="0" cy="0" r="42" fill="#120626" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
              <image href="/assets/rbcurexia-logo-4k.webp" x="-26" y="-22" width="52" height="44" preserveAspectRatio="xMidYMid meet" />
            </g>

            {/* NODE 1: TOP - CURENEST (IPD) */}
            <g transform="translate(215, 35)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6s" repeatCount="indefinite" />
                <rect x="0" y="0" width="110" height="88" rx="14" fill="#0c051e" stroke="#8b5cf6" strokeWidth="2" filter="url(#hub-glow)" />
                <image href="/assets/rbcurexia-logo-4k.webp" x="25" y="10" width="60" height="48" preserveAspectRatio="xMidYMid meet" />
                <text x="55" y="66" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">CureNEST</text>
                <text x="55" y="78" fill="#818cf8" fontSize="8" textAnchor="middle">for hospitals</text>
              </g>
              <text x="55" y="112" fill="#c084fc" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CURENEST (IPD)</text>
            </g>

            {/* NODE 2: LEFT - PANACEA (OPD) - Real Brand Logo from User */}
            <g transform="translate(45, 175)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6.5s" repeatCount="indefinite" />
                <rect x="0" y="0" width="110" height="88" rx="14" fill="#0d0624" stroke="#a855f7" strokeWidth="2" filter="url(#hub-glow)" />
                <image href="/assets/brand-panacea.png" x="25" y="10" width="60" height="48" preserveAspectRatio="xMidYMid meet" />
                <text x="55" y="66" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Panacea</text>
                <text x="55" y="78" fill="#c084fc" fontSize="8" textAnchor="middle">for clinics</text>
              </g>
              <text x="55" y="112" fill="#c084fc" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PANACEA (OPD)</text>
            </g>

            {/* NODE 3: RIGHT - PHARMIXO (SUPPLY) - Real Brand Logo from User */}
            <g transform="translate(385, 175)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="7s" repeatCount="indefinite" />
                <rect x="0" y="0" width="110" height="88" rx="14" fill="#081028" stroke="#38bdf8" strokeWidth="2" filter="url(#hub-glow)" />
                <image href="/assets/brand-pharmixo.png" x="25" y="10" width="60" height="48" preserveAspectRatio="xMidYMid meet" />
                <text x="55" y="66" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">PharmixO</text>
                <text x="55" y="78" fill="#38bdf8" fontSize="8" textAnchor="middle">for pharmacies</text>
              </g>
              <text x="55" y="112" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PHARMIXO (SUPPLY)</text>
            </g>

            {/* NODE 4: BOTTOM - LABONIX (LABS) - Real Brand Logo from User */}
            <g transform="translate(215, 305)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6s" repeatCount="indefinite" />
                <rect x="0" y="0" width="110" height="88" rx="14" fill="#07122a" stroke="#38bdf8" strokeWidth="2" filter="url(#hub-glow)" />
                <image href="/assets/brand-labonix.png" x="25" y="8" width="60" height="50" preserveAspectRatio="xMidYMid meet" />
                <text x="55" y="66" fill="#ffffff" fontSize="9.5" fontWeight="bold" textAnchor="middle">LABONIX</text>
                <text x="55" y="78" fill="#38bdf8" fontSize="8" textAnchor="middle">for labs</text>
              </g>
              <text x="55" y="112" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">LABONIX (LABS)</text>
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. NETWORK: Clinician Constellation & Specialist Radar (KEPT AS REQUESTED)*/}
      {/* User instructed: "only keep for network rest all change"                   */}
      {/* ========================================================================= */}
            {pageId === 'network' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 480 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '480px', overflow: 'visible' }}>
            <defs>
              <radialGradient id="psDeepAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.2" />
                <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#09080E" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="psCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="55%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
              <filter id="psHubGlow" x="-35%" y="-35%" width="170%" height="170%">
                <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#A855F7" floodOpacity="0.45" />
              </filter>
              <filter id="psPacketGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#38BDF8" floodOpacity="0.9" />
              </filter>
              <path id="path-top-right" d="M 240 52 L 336 108 L 274 144" fill="none" />
              <path id="path-bot-right" d="M 336 232 L 240 288 L 240 206" fill="none" />
              <path id="path-left-loop" d="M 144 232 L 144 108 L 206 144" fill="none" />
              <style>{`
                .ps-m { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; letter-spacing: 0.09em; }
                .ps-s { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
                @keyframes psOrbitCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes psOrbitCCW { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
                @keyframes psDashMove { to { stroke-dashoffset: -32; } }
                @keyframes psCoreBreath { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
                .ring-cw { transform-box: fill-box; transform-origin: center; animation: psOrbitCW 36s linear infinite; }
                .ring-ccw { transform-box: fill-box; transform-origin: center; animation: psOrbitCCW 26s linear infinite; }
                .mesh-line { stroke-dasharray: 4 4; animation: psDashMove 1.6s linear infinite; }
                .core-pulse { transform-box: fill-box; transform-origin: center; animation: psCoreBreath 3.8s ease-in-out infinite; }
              `}</style>
            </defs>
            <circle cx="240" cy="170" r="154" fill="url(#psDeepAura)" />
            <circle cx="240" cy="170" r="118" fill="none" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.25" />
            <circle cx="240" cy="170" r="118" fill="none" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="5 9" className="ring-cw" />
            <circle cx="240" cy="170" r="76" fill="none" stroke="#C084FC" strokeWidth="1" strokeOpacity="0.32" strokeDasharray="3 6" className="ring-ccw" />
            <g strokeOpacity="0.35" strokeWidth="1" fill="none">
              <polygon points="240,52 336,108 336,232 240,288 144,232 144,108" stroke="#A855F7" />
              <line x1="240" y1="52" x2="240" y2="288" stroke="#38BDF8" strokeDasharray="2 5" />
              <line x1="336" y1="108" x2="144" y2="232" stroke="#C084FC" strokeDasharray="2 5" />
              <line x1="336" y1="232" x2="144" y2="108" stroke="#34D399" strokeDasharray="2 5" />
            </g>
            <g className="mesh-line" fill="none" strokeWidth="1.35" strokeOpacity="0.7">
              <line x1="240" y1="52" x2="240" y2="134" stroke="#C084FC" />
              <line x1="336" y1="108" x2="274" y2="148" stroke="#38BDF8" />
              <line x1="336" y1="232" x2="274" y2="192" stroke="#34D399" />
              <line x1="240" y1="288" x2="240" y2="206" stroke="#38BDF8" />
              <line x1="144" y1="232" x2="206" y2="192" stroke="#C084FC" />
              <line x1="144" y1="108" x2="206" y2="148" stroke="#FBBF24" />
            </g>
            <g className="ps-m" fontSize="7" fontWeight="600">
              <rect x="204" y="88" width="72" height="15" rx="4" fill="#140F24" stroke="#A855F7" strokeWidth="0.8" />
              <text x="240" y="98" textAnchor="middle" fill="#E9D5FF">CASE THREADS</text>
              <rect x="275" y="198" width="76" height="15" rx="4" fill="#0B1E1A" stroke="#34D399" strokeWidth="0.8" />
              <text x="313" y="208" textAnchor="middle" fill="#A7F3D0">DEPT REFERRAL</text>
              <rect x="129" y="198" width="76" height="15" rx="4" fill="#0C1929" stroke="#38BDF8" strokeWidth="0.8" />
              <text x="167" y="208" textAnchor="middle" fill="#BAE6FD">CLINICAL NOTES</text>
            </g>
            <circle r="3.2" fill="#38BDF8" filter="url(#psPacketGlow)">
              <animateMotion dur="4.5s" repeatCount="indefinite">
                <mpath href="#path-top-right" />
              </animateMotion>
            </circle>
            <circle r="3.2" fill="#34D399" filter="url(#psPacketGlow)">
              <animateMotion dur="5.2s" repeatCount="indefinite">
                <mpath href="#path-bot-right" />
              </animateMotion>
            </circle>
            <circle r="3.2" fill="#C084FC" filter="url(#psPacketGlow)">
              <animateMotion dur="4.8s" repeatCount="indefinite">
                <mpath href="#path-left-loop" />
              </animateMotion>
            </circle>
            <g className="core-pulse" filter="url(#psHubGlow)">
              <circle cx="240" cy="170" r="39" fill="#0C0915" stroke="url(#psCoreGrad)" strokeWidth="2.2" />
              <circle cx="240" cy="170" r="33" fill="none" stroke="#A855F7" strokeWidth="0.7" strokeOpacity="0.45" />
              <text x="240" y="165" textAnchor="middle" fill="#F8FAFC" fontSize="8.5" fontWeight="700" className="ps-m">PLUGINS</text>
              <text x="240" y="177" textAnchor="middle" fill="#C084FC" fontSize="8.5" fontWeight="700" className="ps-m">SOCIAL</text>
              <text x="240" y="188" textAnchor="middle" fill="#94A3B8" fontSize="6.5" className="ps-m">MD MESH</text>
            </g>
            <g>
              <circle cx="240" cy="52" r="14" fill="#141022" stroke="#C084FC" strokeWidth="1.8" />
              <text x="240" y="55" textAnchor="middle" fill="#F8FAFC" fontSize="8" fontWeight="700" className="ps-m">MD</text>
              <text x="240" y="31" textAnchor="middle" fill="#E9D5FF" fontSize="8.5" fontWeight="600" className="ps-m">CARDIOLOGY</text>
              <text x="240" y="21" textAnchor="middle" fill="#94A3B8" fontSize="7" className="ps-s">Complex Case Consult</text>
            </g>
            <g>
              <circle cx="336" cy="108" r="14" fill="#0C1726" stroke="#38BDF8" strokeWidth="1.8" />
              <text x="336" y="111" textAnchor="middle" fill="#F8FAFC" fontSize="8" fontWeight="700" className="ps-m">MD</text>
              <text x="356" y="105" textAnchor="start" fill="#BAE6FD" fontSize="8.5" fontWeight="600" className="ps-m">NEUROLOGY</text>
              <text x="356" y="116" textAnchor="start" fill="#94A3B8" fontSize="7" className="ps-s">Peer Review &amp; Articles</text>
            </g>
            <g>
              <circle cx="336" cy="232" r="14" fill="#0B1E1A" stroke="#34D399" strokeWidth="1.8" />
              <text x="336" y="235" textAnchor="middle" fill="#F8FAFC" fontSize="8" fontWeight="700" className="ps-m">HP</text>
              <text x="356" y="229" textAnchor="start" fill="#A7F3D0" fontSize="8.5" fontWeight="600" className="ps-m">PARTNER HOSPITALS</text>
              <text x="356" y="240" textAnchor="start" fill="#94A3B8" fontSize="7" className="ps-s">Inter-Dept Referrals</text>
            </g>
            <g>
              <circle cx="240" cy="288" r="14" fill="#0C1726" stroke="#38BDF8" strokeWidth="1.8" />
              <text x="240" y="291" textAnchor="middle" fill="#F8FAFC" fontSize="8" fontWeight="700" className="ps-m">MS</text>
              <text x="240" y="314" textAnchor="middle" fill="#BAE6FD" fontSize="8.5" fontWeight="600" className="ps-m">SURGEONS</text>
              <text x="240" y="325" textAnchor="middle" fill="#94A3B8" fontSize="7" className="ps-s">Pre/Post-Op Alignment</text>
            </g>
            <g>
              <circle cx="144" cy="232" r="14" fill="#141022" stroke="#C084FC" strokeWidth="1.8" />
              <text x="144" y="235" textAnchor="middle" fill="#F8FAFC" fontSize="8" fontWeight="700" className="ps-m">MS</text>
              <text x="124" y="229" textAnchor="end" fill="#E9D5FF" fontSize="8.5" fontWeight="600" className="ps-m">ORTHOPEDICS</text>
              <text x="124" y="240" textAnchor="end" fill="#94A3B8" fontSize="7" className="ps-s">Shared Care Plans</text>
            </g>
            <g>
              <circle cx="144" cy="108" r="14" fill="#1E180B" stroke="#FBBF24" strokeWidth="1.8" />
              <text x="144" y="111" textAnchor="middle" fill="#F8FAFC" fontSize="8" fontWeight="700" className="ps-m">DM</text>
              <text x="124" y="105" textAnchor="end" fill="#FEF3C7" fontSize="8.5" fontWeight="600" className="ps-m">SPECIALISTS</text>
              <text x="124" y="116" textAnchor="end" fill="#94A3B8" fontSize="7" className="ps-s">Published Insights</text>
            </g>
          </svg>
        </div>
      )}

      {pageId === 'concierge' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg id="concierge-hub-svg" viewBox="0 0 540 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '560px', overflow: 'visible' }}>
            <defs>
              <radialGradient id="con-aura" cx="50%" cy="50%" r="52%">
                <stop offset="0%" stopColor="#EAE1C8" stopOpacity="0.15" />
                <stop offset="42%" stopColor="#A855F7" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#07060B" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="con-card-bg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#141122" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0A0812" stopOpacity="0.98" />
              </linearGradient>
              <radialGradient id="con-core-bg" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#1C1730" />
                <stop offset="100%" stopColor="#09080F" />
              </radialGradient>
              <linearGradient id="con-violet-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#7E22CE" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="con-cyan-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="con-champagne-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EAE1C8" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#A6936B" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="con-emerald-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="con-core-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EAE1C8" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
              <filter id="con-hub-glow" x="-35%" y="-35%" width="170%" height="170%">
                <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#A855F7" floodOpacity="0.35" />
              </filter>
              <filter id="con-card-shadow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.52" />
              </filter>
              <filter id="con-packet-glow" x="-80%" y="-80%" width="260%" height="260%">
                <feDropShadow dx="0" dy="0" stdDeviation="3.2" floodColor="#EAE1C8" floodOpacity="0.95" />
              </filter>
              <path id="con-path-tl" d="M 236 164 C 210 144, 214 62, 186 62" fill="none" />
              <path id="con-path-tr" d="M 304 164 C 330 144, 326 62, 354 62" fill="none" />
              <path id="con-path-bl" d="M 236 216 C 210 236, 214 318, 186 318" fill="none" />
              <path id="con-path-br" d="M 304 216 C 330 236, 326 318, 354 318" fill="none" />
              <style>{`
                .con-mono { font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; letter-spacing: 0.09em; }
                .con-sans { font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif; }
                @keyframes conSpinCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes conSpinCCW { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
                @keyframes conFloatUp { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-4px); } }
                @keyframes conFloatDown { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(4px); } }
                @keyframes conDashFlow { to { stroke-dashoffset: -28; } }
                @keyframes conPulseLive { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.75); } }
                .con-orbit-cw { transform-box: fill-box; transform-origin: center; animation: conSpinCW 42s linear infinite; }
                .con-orbit-ccw { transform-box: fill-box; transform-origin: center; animation: conSpinCCW 22s linear infinite; }
                .con-card-tl { animation: conFloatUp 5.4s ease-in-out infinite; }
                .con-card-tr { animation: conFloatDown 5.8s ease-in-out infinite; }
                .con-card-bl { animation: conFloatDown 6.2s ease-in-out infinite; }
                .con-card-br { animation: conFloatUp 5.6s ease-in-out infinite; }
                .con-wire-dash { stroke-dasharray: 4 6; animation: conDashFlow 1.7s linear infinite; }
                .con-live-dot { transform-box: fill-box; transform-origin: center; animation: conPulseLive 1.8s ease-in-out infinite; }
              `}</style>
            </defs>
            <ellipse cx="270" cy="190" rx="235" ry="175" fill="url(#con-aura)" />
            <circle cx="270" cy="190" r="154" fill="none" stroke="#EAE1C8" strokeWidth="0.9" strokeOpacity="0.13" strokeDasharray="3 9" className="con-orbit-cw" />
            <circle cx="270" cy="190" r="114" fill="none" stroke="#A855F7" strokeWidth="0.9" strokeOpacity="0.16" />
            <circle cx="270" cy="190" r="78" fill="none" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.14" strokeDasharray="2 6" />
            <g fill="none" strokeWidth="2.4" strokeOpacity="0.16">
              <use href="#con-path-tl" stroke="#C084FC" />
              <use href="#con-path-tr" stroke="#38BDF8" />
              <use href="#con-path-bl" stroke="#EAE1C8" />
              <use href="#con-path-br" stroke="#34D399" />
            </g>
            <g fill="none" strokeWidth="1.35" strokeOpacity="0.72">
              <use href="#con-path-tl" stroke="#C084FC" className="con-wire-dash" />
              <use href="#con-path-tr" stroke="#38BDF8" className="con-wire-dash" />
              <use href="#con-path-bl" stroke="#EAE1C8" className="con-wire-dash" />
              <use href="#con-path-br" stroke="#34D399" className="con-wire-dash" />
            </g>
            <circle r="3" fill="#C084FC" filter="url(#con-packet-glow)">
              <animateMotion dur="2.6s" repeatCount="indefinite">
                <mpath href="#con-path-tl" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#38BDF8" filter="url(#con-packet-glow)">
              <animateMotion dur="2.9s" begin="0.4s" repeatCount="indefinite">
                <mpath href="#con-path-tr" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#EAE1C8" filter="url(#con-packet-glow)">
              <animateMotion dur="2.8s" begin="0.8s" repeatCount="indefinite">
                <mpath href="#con-path-bl" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#34D399" filter="url(#con-packet-glow)">
              <animateMotion dur="2.5s" begin="1.2s" repeatCount="indefinite">
                <mpath href="#con-path-br" />
              </animateMotion>
            </circle>
            <g filter="url(#con-hub-glow)">
              <g className="con-orbit-ccw">
                <circle cx="270" cy="190" r="56" fill="none" stroke="#EAE1C8" strokeWidth="1.6" strokeDasharray="36 52 24 64" strokeLinecap="round" opacity="0.82" />
                <circle cx="270" cy="190" r="49" fill="none" stroke="#A855F7" strokeWidth="1.2" strokeDasharray="28 48" strokeLinecap="round" opacity="0.72" />
              </g>
              <circle cx="270" cy="190" r="41" fill="url(#con-core-bg)" stroke="url(#con-core-stroke)" strokeWidth="1.7" />
              <circle cx="270" cy="190" r="35" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="0.9" />
              <g transform="translate(270, 184)">
                <polygon points="0,-18 18,0 0,18 -18,0" fill="#161228" stroke="#EAE1C8" strokeWidth="1.35" />
                <polygon points="0,-11 11,0 0,11 -11,0" fill="none" stroke="#A855F7" strokeWidth="0.95" opacity="0.85" />
                <rect x="-2" y="-6.5" width="4" height="13" rx="1" fill="#EAE1C8" />
                <rect x="-6.5" y="-2" width="13" height="4" rx="1" fill="#EAE1C8" />
              </g>
              <rect x="190" y="218" width="160" height="24" rx="12" fill="#0D0B16" stroke="url(#con-champagne-stroke)" strokeWidth="1.1" />
              <circle cx="204" cy="230" r="2.8" fill="#34D399" className="con-live-dot" />
              <text x="213" y="232.8" fill="#EAE1C8" fontSize="7.4" fontWeight="700" className="con-mono">MUMBAI CONCIERGE · LIVE</text>
            </g>
            <g className="con-card-tl" filter="url(#con-card-shadow)">
              <rect x="12" y="28" width="174" height="68" rx="14" fill="url(#con-card-bg)" stroke="url(#con-violet-stroke)" strokeWidth="1.35" />
              <rect x="24" y="45" width="34" height="34" rx="9" fill="#2E1065" fillOpacity="0.55" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.65" />
              <g transform="translate(32, 53)" fill="none" stroke="#E9D5FF" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="4" r="2.5" />
                <circle cx="3" cy="14" r="2" />
                <circle cx="15" cy="14" r="2" />
                <path d="M 7.8 6.2 L 4.2 12.2 M 10.2 6.2 L 13.8 12.2 M 5 14 L 13 14" />
              </g>
              <text x="67" y="58" fill="#E9D5FF" fontSize="8.4" fontWeight="700" className="con-mono">CLINICIAN NETWORK</text>
              <text x="67" y="73" fill="#94A3B8" fontSize="9.2" className="con-sans">Doctors &amp; Specialists</text>
            </g>
            <g className="con-card-tr" filter="url(#con-card-shadow)">
              <rect x="354" y="28" width="174" height="68" rx="14" fill="url(#con-card-bg)" stroke="url(#con-cyan-stroke)" strokeWidth="1.35" />
              <rect x="366" y="45" width="34" height="34" rx="9" fill="#082F49" fillOpacity="0.6" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.65" />
              <g transform="translate(374, 53)" fill="none" stroke="#BAE6FD" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="14" height="13" rx="2" />
                <path d="M 9 6.5 V 12.5 M 6 9.5 H 12" />
                <line x1="0.5" y1="16" x2="17.5" y2="16" />
              </g>
              <text x="409" y="58" fill="#BAE6FD" fontSize="8.4" fontWeight="700" className="con-mono">PARTNER HOSPITALS</text>
              <text x="409" y="73" fill="#94A3B8" fontSize="9.2" className="con-sans">Panacea &amp; CureNEST</text>
            </g>
            <g className="con-card-bl" filter="url(#con-card-shadow)">
              <rect x="12" y="284" width="174" height="68" rx="14" fill="url(#con-card-bg)" stroke="url(#con-champagne-stroke)" strokeWidth="1.35" />
              <rect x="24" y="301" width="34" height="34" rx="9" fill="#2A2417" fillOpacity="0.7" stroke="#EAE1C8" strokeWidth="0.9" strokeOpacity="0.65" />
              <g transform="translate(32, 309)" fill="none" stroke="#F5EFE0" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1.5" y="2.5" width="15" height="10.5" rx="2" />
                <path d="M 4.5 9.5 L 7.2 6.8 L 10 9.2 L 13.5 5.5" />
                <path d="M 9 13 V 16 M 6 16 H 12" />
              </g>
              <text x="67" y="314" fill="#F5EFE0" fontSize="8.4" fontWeight="700" className="con-mono">SEMINARS &amp; EVENTS</text>
              <text x="67" y="329" fill="#94A3B8" fontSize="9.2" className="con-sans">Free Tech Sessions</text>
            </g>
            <g className="con-card-br" filter="url(#con-card-shadow)">
              <rect x="354" y="284" width="174" height="68" rx="14" fill="url(#con-card-bg)" stroke="url(#con-emerald-stroke)" strokeWidth="1.35" />
              <rect x="366" y="301" width="34" height="34" rx="9" fill="#064E3B" fillOpacity="0.55" stroke="#34D399" strokeWidth="0.9" strokeOpacity="0.65" />
              <g transform="translate(374, 309)" fill="none" stroke="#A7F3D0" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="9,2.5 17,6.5 9,10.5 1,6.5" />
                <path d="M 4.5 8.5 V 13 C 6.8 14.8, 11.2 14.8, 13.5 13 V 8.5" />
                <line x1="17" y1="6.5" x2="17" y2="12" />
              </g>
              <text x="409" y="314" fill="#A7F3D0" fontSize="8.4" fontWeight="700" className="con-mono">FELLOWSHIPS</text>
              <text x="409" y="329" fill="#94A3B8" fontSize="9.2" className="con-sans">Clinical Internships</text>
            </g>
          </svg>
        </div>
      )}

      {pageId === 'labonix' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg id="labonix-summary-svg" viewBox="0 0 500 350" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '520px', overflow: 'visible' }}>
            <defs>
              <radialGradient id="lbxAura" cx="50%" cy="50%" r="52%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.14" />
                <stop offset="48%" stopColor="#A855F7" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#07060B" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lbxConsoleBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#131020" stopOpacity="0.96" />
                <stop offset="100%" stopColor="#0B0912" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="lbxPillBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#141122" stopOpacity="0.94" />
                <stop offset="100%" stopColor="#0B0913" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="lbxCoreStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
                <stop offset="52%" stopColor="#A855F7" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#34D399" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="lbxVioletStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#7E22CE" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="lbxCyanStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="lbxChampagneStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EAE1C8" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#B49F73" stopOpacity="0.38" />
              </linearGradient>
              <linearGradient id="lbxEmeraldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="lbxStageGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
              <linearGradient id="lbxLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
              <filter id="lbxConsoleGlow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#38BDF8" floodOpacity="0.24" />
              </filter>
              <filter id="lbxDotGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#38BDF8" floodOpacity="0.9" />
              </filter>
              <path id="lbx-in-left" d="M 90 60 C 90 85, 175 78, 175 104" fill="none" />
              <path id="lbx-in-mid" d="M 250 60 L 250 104" fill="none" />
              <path id="lbx-in-right" d="M 410 60 C 410 85, 325 78, 325 104" fill="none" />
              <path id="lbx-out-left" d="M 185 246 C 185 268, 138 266, 138 290" fill="none" />
              <path id="lbx-out-right" d="M 315 246 C 315 268, 362 266, 362 290" fill="none" />
              <style>{`
                .lbx-mono { font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; letter-spacing: 0.1em; }
                .lbx-sans { font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif; }
                @keyframes lbxFlowDown { to { stroke-dashoffset: -27; } }
                @keyframes lbxPulseLive { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.75); } }
                @keyframes lbxHaloPing { 0% { opacity: 0.75; transform: scale(1); } 100% { opacity: 0; transform: scale(2.15); } }
                @keyframes lbxLaserSweep { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(62px); } }
                @keyframes lbxStageFill { 0% { stroke-dashoffset: 284; } 45%, 78% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 284; } }
                @keyframes lbxFloatSubtle { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-2.5px); } }
                .lbx-wire { stroke-dasharray: 4 5; animation: lbxFlowDown 1.45s linear infinite; }
                .lbx-live-dot { transform-box: fill-box; transform-origin: center; animation: lbxPulseLive 1.8s ease-in-out infinite; }
                .lbx-cyan-halo { transform-box: fill-box; transform-origin: center; animation: lbxHaloPing 2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
                .lbx-laser { animation: lbxLaserSweep 2.6s ease-in-out infinite; }
                .lbx-progress-bar { stroke-dasharray: 284; stroke-dashoffset: 284; animation: lbxStageFill 4.8s ease-in-out infinite; }
                .lbx-pill-float { animation: lbxFloatSubtle 5.5s ease-in-out infinite; }
              `}</style>
            </defs>
            <ellipse cx="250" cy="175" rx="220" ry="155" fill="url(#lbxAura)" />
            <g fill="none" strokeWidth="1.4" strokeOpacity="0.65">
              <use href="#lbx-in-left" stroke="#C084FC" className="lbx-wire" />
              <use href="#lbx-in-mid" stroke="#38BDF8" className="lbx-wire" />
              <use href="#lbx-in-right" stroke="#EAE1C8" className="lbx-wire" />
            </g>
            <circle r="3" fill="#C084FC" filter="url(#lbxDotGlow)">
              <animateMotion dur="2.4s" repeatCount="indefinite">
                <mpath href="#lbx-in-left" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#38BDF8" filter="url(#lbxDotGlow)">
              <animateMotion dur="2.0s" begin="0.4s" repeatCount="indefinite">
                <mpath href="#lbx-in-mid" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#EAE1C8" filter="url(#lbxDotGlow)">
              <animateMotion dur="2.5s" begin="0.8s" repeatCount="indefinite">
                <mpath href="#lbx-in-right" />
              </animateMotion>
            </circle>
            <g className="lbx-pill-float">
              <rect x="22" y="14" width="136" height="46" rx="11" fill="url(#lbxPillBg)" stroke="url(#lbxVioletStroke)" strokeWidth="1.35" />
              <text x="90" y="33" textAnchor="middle" fill="#E9D5FF" fontSize="9" fontWeight="700" className="lbx-mono">PANACEA MD</text>
              <text x="90" y="48" textAnchor="middle" fill="#94A3B8" fontSize="8.5" className="lbx-sans">Doctor Referral</text>
            </g>
            <g className="lbx-pill-float" style={{ animationDelay: '0.6s' }}>
              <rect x="182" y="14" width="136" height="46" rx="11" fill="url(#lbxPillBg)" stroke="url(#lbxCyanStroke)" strokeWidth="1.35" />
              <text x="250" y="33" textAnchor="middle" fill="#BAE6FD" fontSize="9" fontWeight="700" className="lbx-mono">PULSEPORT APP</text>
              <text x="250" y="48" textAnchor="middle" fill="#94A3B8" fontSize="8.5" className="lbx-sans">Home Booking</text>
            </g>
            <g className="lbx-pill-float" style={{ animationDelay: '1.2s' }}>
              <rect x="342" y="14" width="136" height="46" rx="11" fill="url(#lbxPillBg)" stroke="url(#lbxChampagneStroke)" strokeWidth="1.35" />
              <text x="410" y="33" textAnchor="middle" fill="#F5EFE0" fontSize="9" fontWeight="700" className="lbx-mono">WALK-IN / LAB</text>
              <text x="410" y="48" textAnchor="middle" fill="#94A3B8" fontSize="8.5" className="lbx-sans">Partner Labs</text>
            </g>
            <g fill="none" strokeWidth="1.4" strokeOpacity="0.68">
              <use href="#lbx-out-left" stroke="#34D399" className="lbx-wire" />
              <use href="#lbx-out-right" stroke="#38BDF8" className="lbx-wire" />
            </g>
            <circle r="3" fill="#34D399" filter="url(#lbxDotGlow)">
              <animateMotion dur="2.1s" begin="0.3s" repeatCount="indefinite">
                <mpath href="#lbx-out-left" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#38BDF8" filter="url(#lbxDotGlow)">
              <animateMotion dur="2.1s" begin="1.0s" repeatCount="indefinite">
                <mpath href="#lbx-out-right" />
              </animateMotion>
            </circle>
            <g filter="url(#lbxConsoleGlow)">
              <rect x="56" y="104" width="388" height="142" rx="16" fill="url(#lbxConsoleBg)" stroke="url(#lbxCoreStroke)" strokeWidth="1.6" />
              <rect x="72" y="116" width="6" height="6" rx="1.5" fill="#38BDF8" />
              <text x="84" y="122.5" fill="#38BDF8" fontSize="9.5" fontWeight="700" className="lbx-mono">LABONIX LAB OS</text>
              <circle cx="342" cy="119" r="3.2" fill="#34D399" className="lbx-live-dot" />
              <text x="351" y="122.5" fill="#6EE7B7" fontSize="8.2" fontWeight="600" className="lbx-mono">LIVE PIPELINE</text>
              <line x1="72" y1="132" x2="428" y2="132" stroke="#1E1B2E" strokeWidth="1" />
              <rect x="72" y="140" width="356" height="44" rx="10" fill="#090810" stroke="#1E2538" strokeWidth="1" />
              <text x="86" y="158.5" fill="#F8FAFC" fontSize="12.5" fontWeight="700" className="lbx-mono">LB-482-917</text>
              <text x="86" y="174.5" fill="#94A3B8" fontSize="8.2" fontWeight="500" className="lbx-mono">CBC · THYROID · HbA1c</text>
              <g>
                <rect x="328" y="147" width="86" height="30" rx="6" fill="#0E121E" stroke="#1E293B" strokeWidth="1" />
                <g fill="#CBD5E1" opacity="0.82">
                  <rect x="338" y="152" width="2" height="20" rx="0.5" /><rect x="342" y="152" width="1" height="20" rx="0.5" />
                  <rect x="345" y="152" width="3" height="20" rx="0.5" /><rect x="351" y="152" width="1.5" height="20" rx="0.5" />
                  <rect x="355" y="152" width="2.5" height="20" rx="0.5" /><rect x="360" y="152" width="1" height="20" rx="0.5" />
                  <rect x="363" y="152" width="3.5" height="20" rx="0.5" /><rect x="369" y="152" width="1.5" height="20" rx="0.5" />
                  <rect x="373" y="152" width="2" height="20" rx="0.5" /><rect x="377" y="152" width="1" height="20" rx="0.5" />
                  <rect x="380" y="152" width="3" height="20" rx="0.5" /><rect x="386" y="152" width="1.5" height="20" rx="0.5" />
                  <rect x="390" y="152" width="2.5" height="20" rx="0.5" /><rect x="395" y="152" width="1" height="20" rx="0.5" />
                  <rect x="398" y="152" width="2.5" height="20" rx="0.5" /><rect x="403" y="152" width="1.5" height="20" rx="0.5" />
                </g>
                <g className="lbx-laser">
                  <rect x="334" y="149" width="10" height="26" fill="url(#lbxLaserGrad)" opacity="0.55" />
                  <line x1="339" y1="149" x2="339" y2="175" stroke="#38BDF8" strokeWidth="1.6" />
                </g>
              </g>
              <rect x="197" y="191" width="106" height="14" rx="7" fill="#082F49" fillOpacity="0.85" stroke="#38BDF8" strokeWidth="0.75" strokeOpacity="0.65" />
              <text x="250" y="200.5" textAnchor="middle" fill="#7DD3FC" fontSize="7.2" fontWeight="600" className="lbx-sans">Phlebotomist · Live</text>
              <line x1="108" y1="215" x2="392" y2="215" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="108" y1="215" x2="392" y2="215" stroke="url(#lbxStageGrad)" strokeWidth="2.5" strokeLinecap="round" className="lbx-progress-bar" />
              <circle cx="108" cy="215" r="7" fill="#131020" stroke="#C084FC" strokeWidth="1.4" />
              <circle cx="108" cy="215" r="3.5" fill="#C084FC" />
              <text x="108" y="235" textAnchor="middle" fill="#D8B4FE" fontSize="8" fontWeight="600" className="lbx-mono">ORDERED</text>
              <circle cx="250" cy="215" r="6.5" fill="none" stroke="#38BDF8" strokeWidth="1.4" className="lbx-cyan-halo" />
              <circle cx="250" cy="215" r="7.5" fill="#0B1929" stroke="#38BDF8" strokeWidth="1.6" />
              <circle cx="250" cy="215" r="3.8" fill="#38BDF8" className="lbx-live-dot" />
              <text x="250" y="235" textAnchor="middle" fill="#7DD3FC" fontSize="8" fontWeight="700" className="lbx-mono">COLLECTED</text>
              <circle cx="392" cy="215" r="7" fill="#0A1F1B" stroke="#34D399" strokeWidth="1.4" />
              <circle cx="392" cy="215" r="3.5" fill="#34D399" />
              <text x="392" y="235" textAnchor="middle" fill="#6EE7B7" fontSize="8" fontWeight="600" className="lbx-mono">REPORTED</text>
            </g>
            <g className="lbx-pill-float" style={{ animationDelay: '0.4s' }}>
              <rect x="50" y="290" width="176" height="48" rx="12" fill="url(#lbxPillBg)" stroke="url(#lbxEmeraldStroke)" strokeWidth="1.4" />
              <text x="138" y="310" textAnchor="middle" fill="#6EE7B7" fontSize="9.2" fontWeight="700" className="lbx-mono">DESIGN STUDIO</text>
              <text x="138" y="325.5" textAnchor="middle" fill="#94A3B8" fontSize="8.5" className="lbx-sans">Auto Report · Bill · Rx</text>
            </g>
            <g className="lbx-pill-float" style={{ animationDelay: '1s' }}>
              <rect x="274" y="290" width="176" height="48" rx="12" fill="url(#lbxPillBg)" stroke="url(#lbxCyanStroke)" strokeWidth="1.4" />
              <text x="362" y="310" textAnchor="middle" fill="#7DD3FC" fontSize="9.2" fontWeight="700" className="lbx-mono">LEDGER &amp; SYNC</text>
              <text x="362" y="325.5" textAnchor="middle" fill="#94A3B8" fontSize="8.5" className="lbx-sans">Doctor + Patient Alert</text>
            </g>
          </svg>
        </div>
      )}

      {pageId === 'pulseport' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 460 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '470px', overflow: 'visible' }}>
            <defs>
              <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="violetGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#7E22CE" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="emeraldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="cardSurface" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#13111C" stopOpacity="0.94" />
                <stop offset="100%" stopColor="#09080E" stopOpacity="0.98" />
              </linearGradient>
              <filter id="neonBlue" x="-25%" y="-25%" width="150%" height="150%">
                <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor="#38BDF8" floodOpacity="0.32" />
              </filter>
              <filter id="neonPurple" x="-25%" y="-25%" width="150%" height="150%">
                <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor="#A855F7" floodOpacity="0.32" />
              </filter>
              <style>{`
                .mono-label { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; letter-spacing: 0.12em; }
                .sans-title { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
                @keyframes floatSlow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
                @keyframes floatDelayed { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(5px); } }
                @keyframes pulseDot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.75); } }
                @keyframes flowDash { to { stroke-dashoffset: -24; } }
                @keyframes progressFill { 0%, 15% { width: 42px; } 50%, 85% { width: 96px; } 100% { width: 42px; } }
                .card-left { animation: floatSlow 5s ease-in-out infinite; }
                .card-right-top { animation: floatDelayed 5.5s ease-in-out infinite; }
                .card-right-bot { animation: floatSlow 6s ease-in-out infinite; }
                .live-dot { transform-box: fill-box; transform-origin: center; animation: pulseDot 1.8s ease-in-out infinite; }
                .data-wire { stroke-dasharray: 4 4; animation: flowDash 1.4s linear infinite; }
                .queue-bar { animation: progressFill 6s ease-in-out infinite; }
              `}</style>
            </defs>
            <circle cx="145" cy="160" r="95" fill="#38BDF8" opacity="0.06" />
            <circle cx="330" cy="160" r="95" fill="#A855F7" opacity="0.07" />
            <path d="M 218 122 C 245 122, 248 92, 272 92" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.6" className="data-wire" />
            <path d="M 218 205 C 245 205, 248 225, 272 225" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeOpacity="0.6" className="data-wire" />
            <g className="card-left" filter="url(#neonBlue)">
              <rect x="34" y="36" width="184" height="248" rx="22" fill="url(#cardSurface)" stroke="url(#cyanGlow)" strokeWidth="1.75" />
              <text x="52" y="64" fill="#7DD3FC" fontSize="8.5" fontWeight="600" className="mono-label">PULSEPORT APP</text>
              <circle cx="194" cy="61" r="3.5" fill="#10B981" className="live-dot" />
              <text x="52" y="88" fill="#F8FAFC" fontSize="13" fontWeight="600" className="sans-title">Dr. A. Mehta</text>
              <text x="52" y="103" fill="#94A3B8" fontSize="9.5" className="sans-title">Live Queue · Panacea Sync</text>
              <rect x="50" y="116" width="152" height="66" rx="12" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
              <text x="64" y="135" fill="#64748B" fontSize="8" className="mono-label">TOKEN</text>
              <text x="64" y="157" fill="#38BDF8" fontSize="20" fontWeight="700" className="sans-title">#14</text>
              <line x1="118" y1="126" x2="118" y2="170" stroke="#1E293B" strokeWidth="1" />
              <text x="130" y="135" fill="#64748B" fontSize="8" className="mono-label">AHEAD</text>
              <text x="130" y="157" fill="#F8FAFC" fontSize="20" fontWeight="700" className="sans-title">02</text>
              <rect x="64" y="168" width="124" height="4" rx="2" fill="#1E293B" />
              <rect x="64" y="168" width="68" height="4" rx="2" fill="#38BDF8" className="queue-bar" />
              <rect x="50" y="194" width="152" height="32" rx="9" fill="#064E3B" fillOpacity="0.35" stroke="url(#emeraldGlow)" strokeWidth="1" />
              <circle cx="64" cy="210" r="3" fill="#34D399" />
              <text x="74" y="213" fill="#6EE7B7" fontSize="8.5" fontWeight="600" className="mono-label">FAMILY: MUM · READY</text>
              <text x="52" y="252" fill="#64748B" fontSize="8" className="mono-label">EN · हिं · म · ગુ · اُردُو</text>
              <text x="52" y="266" fill="#94A3B8" fontSize="8" className="mono-label">ZERO WAITING ROOM</text>
            </g>
            <g className="card-right-top" filter="url(#neonPurple)">
              <rect x="272" y="42" width="156" height="106" rx="18" fill="url(#cardSurface)" stroke="url(#violetGlow)" strokeWidth="1.75" />
              <text x="288" y="66" fill="#D8B4FE" fontSize="8.5" fontWeight="600" className="mono-label">LABONIX HOME LAB</text>
              <text x="288" y="96" fill="#F8FAFC" fontSize="22" fontWeight="700" className="sans-title">12 <tspan fontSize="11" fill="#A855F7" fontWeight="500">MIN AWAY</tspan></text>
              <circle cx="293" cy="116" r="3" fill="#A855F7" />
              <line x1="296" y1="116" x2="322" y2="116" stroke="#A855F7" strokeWidth="1.5" />
              <circle cx="325" cy="116" r="3.5" fill="#38BDF8" className="live-dot" />
              <line x1="329" y1="116" x2="355" y2="116" stroke="#334155" strokeWidth="1.5" />
              <circle cx="358" cy="116" r="3" fill="#334155" />
              <text x="288" y="133" fill="#94A3B8" fontSize="8" className="mono-label">SAMPLE ON THE WAY</text>
            </g>
            <g className="card-right-bot">
              <rect x="272" y="168" width="156" height="106" rx="18" fill="url(#cardSurface)" stroke="url(#cyanGlow)" strokeWidth="1.5" />
              <text x="288" y="192" fill="#7DD3FC" fontSize="8.5" fontWeight="600" className="mono-label">PHARMIXO · RX</text>
              <text x="288" y="218" fill="#F8FAFC" fontSize="14" fontWeight="600" className="sans-title">Digital Rx Sync</text>
              <text x="288" y="234" fill="#94A3B8" fontSize="9.5" className="sans-title">1-Tap Chemist Order</text>
              <rect x="288" y="245" width="114" height="18" rx="6" fill="#1E1B4B" stroke="#6366F1" strokeWidth="0.8" />
              <text x="297" y="257" fill="#A5B4FC" fontSize="7.5" fontWeight="600" className="mono-label">ECOSYSTEM LINKED</text>
            </g>
          </svg>
        </div>
      )}

{pageId === 'curenest' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[360px] h-[360px] bg-cyan-600/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />

          <svg viewBox="0 0 500 420" className="w-full h-full max-w-[500px] overflow-visible drop-shadow-2xl">
            {/* Hospital Bed */}
            <g transform="translate(60, 160)">
              <rect x="0" y="20" width="16" height="70" rx="3" fill="#1b0e35" stroke="#a855f7" strokeWidth="1.5" />
              <polygon points="16,40 180,60 180,95 16,75" fill="#100722" stroke="#ede8d0" strokeWidth="1.8" />
              <ellipse cx="38" cy="48" rx="14" ry="8" fill="#ede8d0" />
              <polygon points="50,48 178,62 178,92 50,78" fill="#1c0f38" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            </g>

            {/* Inpatient Monitor */}
            <g transform="translate(230, 95)">
              <rect x="0" y="0" width="195" height="150" rx="14" fill="#090316" stroke="#38bdf8" strokeWidth="2" />
              <text x="16" y="22" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">BED 04 · ICU WARD A</text>
              <circle cx="175" cy="18" r="3.5" fill="#10b981" className="animate-ping" />

              <g transform="translate(16, 45)">
                <text x="0" y="0" fill="#10b981" fontSize="8" fontFamily="monospace">LEAD II (HR 72)</text>
                <path
                  d="M 0 16 L 25 16 L 30 8 L 35 24 L 40 2 L 45 20 L 50 16 L 75 16 L 80 8 L 85 24 L 90 2 L 95 20 L 100 16 L 150 16"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="220"
                  className="animate-[ecg-flow_2.5s_linear_infinite]"
                />
              </g>

              <g transform="translate(16, 95)">
                <text x="0" y="0" fill="#38bdf8" fontSize="8" fontFamily="monospace">SpO2 99% · NIBP 118/76</text>
                <path d="M 0 14 Q 15 2 30 14 T 60 14 T 90 14 T 120 14 T 150 14" fill="none" stroke="#38bdf8" strokeWidth="1.8" />
              </g>
            </g>

            {/* Infusion Stand */}
            <g transform="translate(200, 100)">
              <line x1="0" y1="0" x2="0" y2="150" stroke="#ede8d0" strokeWidth="2" />
              <rect x="-14" y="20" width="28" height="42" rx="6" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="0" y="44" fill="#ede8d0" fontSize="7" fontFamily="monospace" textAnchor="middle">0.9% NaCl</text>
              <circle cx="0" cy="74" r="2" fill="#38bdf8" className="animate-[drip-fall_1.2s_linear_infinite]" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
