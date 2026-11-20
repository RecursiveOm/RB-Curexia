export default function PageThemedVisual({ pageId = 'pulseport' }) {
  return (
    <div className="relative w-full max-w-[560px] h-[390px] sm:h-[450px] flex items-center justify-center select-none overflow-visible">
      {/* 
        Keyframe Animations for Free-Floating Visuals
        Self-contained CSS to ensure smooth, hardware-accelerated animations 
      */}
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes float-delay-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
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
        @keyframes stylus-draw {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -4px); }
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. MISSION: Vertical Double Helix DNA Constellation                       */}
      {/* Exact Match to Reference Screenshot (media_1795203774875_631adae9.jpg)    */}
      {/* Features: Vertical twisting DNA with rungs, central glowing Cross badge,  */}
      {/* 3D orbiting particle ellipses, and 5 Connected Node Badges:              */}
      {/* Clinicians, Hospitals, Diagnostics, Pharmacies, Patients                  */}
      {/* Parent <g transform="..."> + Child local animation to prevent collapse!   */}
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
                // Gap for center cross at y=220
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
            {/* Wrapped in parent <g transform="translate(X,Y)"> so CSS animation        */}
            {/* on child NEVER overrides position coordinates!                           */}
            {/* ========================================================================= */}

            {/* NODE 1: CLINICIANS (Top Left) */}
            <g transform="translate(135, 95)" className="cursor-pointer">
              <g className="animate-[float-gentle_6s_ease-in-out_infinite]">
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
              <g className="animate-[float-delay-1_6.5s_ease-in-out_infinite]">
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
              <g className="animate-[float-delay-2_7s_ease-in-out_infinite]">
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
              <g className="animate-[float-gentle_6s_ease-in-out_infinite]">
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
              <g className="animate-[float-delay-1_6.5s_ease-in-out_infinite]">
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
      {/* Exact Match to Reference Screenshot (media_1795203769157_3d2f62e7.jpg)    */}
      {/* Features: Angled digital tablet with stylus handwriting, Longitudinal EHR */}
      {/* Dossier card with anatomy body, Smart OPD Queue card, Drug Warning card   */}
      {/* ========================================================================= */}
      {pageId === 'panacea' && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Ambient Glows */}
          <div className="absolute w-[380px] h-[380px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[90px] pointer-events-none" />

          <svg viewBox="0 0 540 440" className="w-full h-full max-w-[540px] overflow-visible drop-shadow-2xl">
            <defs>
              <linearGradient id="pad-rim-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>

              <filter id="card-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* CARD 1: Longitudinal EHR Dossiers (Top Left) */}
            <g transform="translate(30, 45)" className="animate-[float-gentle_6s_ease-in-out_infinite]">
              {/* Callout Pill at Top */}
              <g transform="translate(15, -14)">
                <rect x="0" y="0" width="130" height="20" rx="10" fill="#14092b" stroke="#a855f7" strokeWidth="1" />
                <circle cx="12" cy="10" r="3" fill="#a855f7" />
                <text x="22" y="13" fill="#ede8d0" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Longitudinal EHR Dossiers</text>
                <line x1="65" y1="20" x2="65" y2="28" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />
              </g>

              {/* Dossier Card Chassis */}
              <rect x="0" y="28" width="175" height="135" rx="12" fill="#0a0518" stroke="#8b5cf6" strokeWidth="1.8" filter="url(#card-glow)" />
              
              {/* Patient Header */}
              <circle cx="22" cy="48" r="8" fill="#1d0d38" stroke="#38bdf8" strokeWidth="1" />
              <path d="M 18 53 C 18 49, 26 49, 26 53" fill="#38bdf8" />
              <text x="36" y="47" fill="#ffffff" fontSize="9" fontWeight="bold">Patient #4729</text>
              <text x="36" y="56" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">68 yrs · F</text>

              {/* Summary Checklist */}
              <g transform="translate(14, 68)">
                <rect x="0" y="0" width="90" height="14" rx="4" fill="#170c30" />
                <text x="6" y="10" fill="#ede8d0" fontSize="7.5" fontWeight="bold">+ Clinical Summary</text>

                <g transform="translate(6, 22)">
                  <text x="0" y="0" fill="#c084fc" fontSize="7">■ Investigations</text>
                  <text x="0" y="11" fill="#c084fc" fontSize="7">■ Medications</text>
                  <text x="0" y="22" fill="#c084fc" fontSize="7">■ Allergies</text>
                  <text x="0" y="33" fill="#c084fc" fontSize="7">■ History</text>
                </g>
              </g>

              {/* Holographic 3D Human Anatomy Wireframe Body */}
              <g transform="translate(135, 95)">
                <ellipse cx="0" cy="-28" rx="5" ry="6" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
                <path d="M -8 -20 L 8 -20 L 6 0 L -6 0 Z" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
                <line x1="-8" y1="-18" x2="-14" y2="4" stroke="#38bdf8" strokeWidth="1.2" />
                <line x1="8" y1="-18" x2="14" y2="4" stroke="#38bdf8" strokeWidth="1.2" />
                <line x1="-4" y1="0" x2="-5" y2="24" stroke="#38bdf8" strokeWidth="1.2" />
                <line x1="4" y1="0" x2="5" y2="24" stroke="#38bdf8" strokeWidth="1.2" />
                {/* Glowing Heart Marker */}
                <circle cx="1" cy="-14" r="3.5" fill="#f43f5e" filter="url(#card-glow)" className="animate-ping" />
                <circle cx="1" cy="-14" r="2.5" fill="#ffffff" />
              </g>
            </g>

            {/* CARD 2: Smart OPD Queues (Top Right) */}
            <g transform="translate(290, 30)" className="animate-[float-delay-1_6.5s_ease-in-out_infinite]">
              {/* Callout Pill at Top */}
              <g transform="translate(25, -14)">
                <rect x="0" y="0" width="105" height="20" rx="10" fill="#08142c" stroke="#38bdf8" strokeWidth="1" />
                <circle cx="10" cy="10" r="3" fill="#38bdf8" />
                <text x="18" y="13" fill="#ede8d0" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Smart OPD Queues</text>
                <line x1="50" y1="20" x2="50" y2="28" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              </g>

              {/* Queue Card Chassis */}
              <rect x="0" y="28" width="150" height="95" rx="12" fill="#060e22" stroke="#38bdf8" strokeWidth="1.6" filter="url(#card-glow)" />
              <text x="14" y="44" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">OPD QUEUE</text>

              {/* Patient List */}
              <g transform="translate(14, 52)">
                <text x="0" y="10" fill="#ffffff" fontSize="8">01 Mr. Sharma</text>
                <rect x="80" y="1" width="44" height="12" rx="3" fill="#06281e" stroke="#10b981" strokeWidth="0.8" />
                <text x="102" y="9" fill="#10b981" fontSize="6.5" textAnchor="middle" fontWeight="bold">In Room</text>

                <text x="0" y="24" fill="#ffffff" fontSize="8">02 Ms. Kapoor</text>
                <rect x="80" y="15" width="44" height="12" rx="3" fill="#081c3a" stroke="#38bdf8" strokeWidth="0.8" />
                <text x="102" y="23" fill="#38bdf8" fontSize="6.5" textAnchor="middle" fontWeight="bold">Next</text>

                <text x="0" y="38" fill="#ffffff" fontSize="8">03 Dr. Mehta</text>
                <rect x="80" y="29" width="44" height="12" rx="3" fill="#1b0f33" stroke="#a855f7" strokeWidth="0.8" />
                <text x="102" y="37" fill="#c084fc" fontSize="6.5" textAnchor="middle" fontWeight="bold">Waiting</text>
              </g>
            </g>

            {/* CARD 3: Adverse Drug Interaction Screening (Right) */}
            <g transform="translate(360, 140)" className="animate-[float-delay-2_7s_ease-in-out_infinite]">
              {/* Callout Pill */}
              <g transform="translate(10, -14)">
                <rect x="0" y="0" width="135" height="18" rx="9" fill="#081e22" stroke="#10b981" strokeWidth="1" />
                <circle cx="10" cy="9" r="3" fill="#10b981" />
                <text x="18" y="12" fill="#ede8d0" fontSize="7" fontFamily="sans-serif" fontWeight="bold">Adverse Drug Screening</text>
                <line x1="50" y1="18" x2="50" y2="26" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
              </g>

              {/* Warning Box */}
              <rect x="0" y="26" width="165" height="52" rx="10" fill="#16081e" stroke="#f43f5e" strokeWidth="1.5" filter="url(#card-glow)" />
              <g transform="translate(12, 42)">
                <polygon points="10,-6 18,10 2,10" fill="#f59e0b" />
                <text x="10" y="7" fill="#000000" fontSize="8" fontWeight="bold" textAnchor="middle">!</text>
                <text x="26" y="2" fill="#ffffff" fontSize="8" fontWeight="bold">Potential Drug Interaction</text>
                <text x="26" y="14" fill="#f43f5e" fontSize="7.5" fontFamily="monospace">Amoxicillin + Warfarin</text>
              </g>
            </g>

            {/* 3D PERSPECTIVE DIGITAL DRAWING TABLET (Bottom Center/Right) */}
            <g transform="translate(195, 220)">
              {/* Perspective Glass Plinth */}
              <polygon points="0,45 220,15 285,100 65,130" fill="#090418" stroke="url(#pad-rim-grad)" strokeWidth="3" filter="url(#card-glow)" />
              <polygon points="8,47 215,19 275,98 68,126" fill="#03010a" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

              {/* Stylus Digital Handwriting Waveform */}
              <path
                d="M 50,85 Q 90,60 120,80 T 170,70 T 225,82"
                fill="none"
                stroke="#ede8d0"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#card-glow)"
              />
              <path
                d="M 70,105 Q 110,95 150,105 T 210,98"
                fill="none"
                stroke="rgba(192, 132, 252, 0.7)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Quick Action Dock Buttons on Tablet Rim */}
              <g transform="translate(180, 102)">
                <rect x="0" y="0" width="16" height="12" rx="3" fill="#160a2c" stroke="#8b5cf6" strokeWidth="0.8" />
                <rect x="20" y="0" width="16" height="12" rx="3" fill="#160a2c" stroke="#8b5cf6" strokeWidth="0.8" />
                <rect x="40" y="0" width="16" height="12" rx="3" fill="#160a2c" stroke="#8b5cf6" strokeWidth="0.8" />
                <circle cx="8" cy="6" r="2" fill="#38bdf8" />
                <circle cx="28" cy="6" r="2" fill="#ede8d0" />
                <circle cx="48" cy="6" r="2" fill="#f43f5e" />
              </g>

              {/* FLOATING STYLUS PEN */}
              <g transform="translate(115, 25)" className="animate-[stylus-draw_3s_ease-in-out_infinite]">
                <line x1="42" y1="-55" x2="0" y2="40" stroke="#ede8d0" strokeWidth="6" strokeLinecap="round" />
                <line x1="42" y1="-55" x2="0" y2="40" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
                {/* Glowing Pen Tip Touching Screen */}
                <circle cx="0" cy="40" r="4" fill="#38bdf8" filter="url(#card-glow)" />
                <circle cx="0" cy="40" r="12" fill="none" stroke="#38bdf8" strokeWidth="1" className="animate-ping" />
              </g>
            </g>

            {/* Bottom Callout Tags */}
            <g transform="translate(80, 375)">
              <rect x="0" y="0" width="140" height="24" rx="12" fill="#0b0416" stroke="#8b5cf6" strokeWidth="1" />
              <text x="70" y="15" fill="#ede8d0" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Digital Pad (Handwriting)</text>
              <line x1="140" y1="12" x2="195" y2="300" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" />
            </g>

            <g transform="translate(340, 375)">
              <rect x="0" y="0" width="170" height="24" rx="12" fill="#09051c" stroke="#38bdf8" strokeWidth="1" />
              <text x="85" y="15" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Clinician Cockpit (Fluid 3D)</text>
              <line x1="340" y1="12" x2="310" y2="340" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. ARCHITECTURE: 4-Node Connected Matrix with Central Hub                  */}
      {/* Exact Match to Reference Screenshot (media_1795203758038_4fcdf280.jpg)    */}
      {/* Features: Center RBCurexia Hub, Top CURENEST, Left PANACEA,               */}
      {/* Right PHARMIXO, Bottom LABONIX, connected with glowing data fibers        */}
      {/* ========================================================================= */}
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
              
              {/* Central RB Logo Image / Monogram */}
              <image href="/assets/rbcurexia-logo-4k.webp" x="-26" y="-22" width="52" height="44" preserveAspectRatio="xMidYMid meet" />
            </g>

            {/* NODE 1: TOP - CURENEST (IPD) */}
            <g transform="translate(215, 35)" className="cursor-pointer">
              <g className="animate-[float-gentle_6s_ease-in-out_infinite]">
                <rect x="0" y="0" width="110" height="78" rx="14" fill="#0c051e" stroke="#8b5cf6" strokeWidth="2" filter="url(#hub-glow)" />
                {/* Logo Inside Card */}
                <image href="/assets/rbcurexia-logo-4k.webp" x="25" y="14" width="60" height="50" preserveAspectRatio="xMidYMid meet" />
              </g>
              <text x="55" y="98" fill="#c084fc" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CURENEST (IPD)</text>
            </g>

            {/* NODE 2: LEFT - PANACEA (OPD) */}
            <g transform="translate(45, 175)" className="cursor-pointer">
              <g className="animate-[float-delay-1_6.5s_ease-in-out_infinite]">
                <rect x="0" y="0" width="110" height="88" rx="14" fill="#0d0624" stroke="#a855f7" strokeWidth="2" filter="url(#hub-glow)" />
                {/* Stylized Panacea P Icon */}
                <g transform="translate(55, 30)">
                  <path d="M -8 -12 H 4 C 10 -12, 10 0, 4 0 H -8 Z" fill="#c084fc" />
                  <path d="M -8 -12 V 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                </g>
                <text x="55" y="58" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Panacea</text>
                <text x="55" y="70" fill="#9ca3af" fontSize="8" textAnchor="middle">for clinics</text>
              </g>
              <text x="55" y="112" fill="#c084fc" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PANACEA (OPD)</text>
            </g>

            {/* NODE 3: RIGHT - PHARMIXO (SUPPLY) */}
            <g transform="translate(385, 175)" className="cursor-pointer">
              <g className="animate-[float-delay-2_7s_ease-in-out_infinite]">
                <rect x="0" y="0" width="110" height="88" rx="14" fill="#081028" stroke="#38bdf8" strokeWidth="2" filter="url(#hub-glow)" />
                {/* Stylized Rx Icon */}
                <g transform="translate(55, 30)">
                  <path d="M -9 -10 H 2 C 7 -10, 7 0, 2 0 H -9 Z" fill="#38bdf8" />
                  <path d="M -9 -10 V 10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="2" y1="0" x2="10" y2="10" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                </g>
                <text x="55" y="58" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">PharmixO</text>
                <text x="55" y="70" fill="#9ca3af" fontSize="8" textAnchor="middle">for pharmacies</text>
              </g>
              <text x="55" y="112" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PHARMIXO (SUPPLY)</text>
            </g>

            {/* NODE 4: BOTTOM - LABONIX (LABS) */}
            <g transform="translate(215, 305)" className="cursor-pointer">
              <g className="animate-[float-gentle_6s_ease-in-out_infinite]">
                <rect x="0" y="0" width="110" height="78" rx="14" fill="#07122a" stroke="#38bdf8" strokeWidth="2" filter="url(#hub-glow)" />
                {/* DNA Wave Spectrum Icon */}
                <g transform="translate(55, 26)">
                  <path d="M -22 0 Q -11 -10 0 0 T 22 0" fill="none" stroke="#38bdf8" strokeWidth="2.2" />
                  <path d="M -22 0 Q -11 10 0 0 T 22 0" fill="none" stroke="#f472b6" strokeWidth="2.2" />
                </g>
                <text x="55" y="50" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">LABONIX</text>
                <text x="55" y="62" fill="#9ca3af" fontSize="8" textAnchor="middle">for labs</text>
              </g>
              <text x="55" y="104" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">LABONIX (LABS)</text>
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. NETWORK: Clinician Constellation & Specialist Radar (KEPT AS REQUESTED)*/}
      {/* User instructed: "only keep for network rest all change"                   */}
      {/* ========================================================================= */}
      {pageId === 'network' && (
        <div className="relative w-full h-full flex items-center justify-center animate-[float-gentle_6s_ease-in-out_infinite]">
          {/* Edge-to-Edge Atmospheric Aura */}
          <div className="absolute w-[360px] h-[360px] bg-purple-600/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />

          <svg viewBox="0 0 500 420" className="w-full h-full max-w-[500px] overflow-visible drop-shadow-2xl">
            <defs>
              <linearGradient id="radar-beam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="80%" stopColor="#c084fc" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ede8d0" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Circular Radar Background Sweeps */}
            <g transform="translate(250, 210)">
              <circle cx="0" cy="0" r="160" fill="none" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="120" fill="none" stroke="rgba(237, 232, 208, 0.12)" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="0" cy="0" r="75" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
              <circle cx="0" cy="0" r="30" fill="rgba(168, 85, 247, 0.15)" stroke="#c084fc" strokeWidth="1.5" />

              {/* Radar Axis Crosshairs */}
              <line x1="-170" y1="0" x2="170" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
              <line x1="0" y1="-170" x2="0" y2="170" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />

              {/* Sweeping Rotating Radar Beam */}
              <g className="animate-[radar-sweep-beam_8s_linear_infinite]" style={{ transformOrigin: '0px 0px' }}>
                <path d="M 0 0 L 160 0 A 160 160 0 0 0 113 -113 Z" fill="url(#radar-beam)" opacity="0.4" />
                <line x1="0" y1="0" x2="160" y2="0" stroke="#ede8d0" strokeWidth="1.8" />
              </g>

              {/* Constellation Star Links between Clinicians */}
              <line x1="-90" y1="-60" x2="0" y2="0" stroke="rgba(237, 232, 208, 0.3)" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="80" y1="-70" x2="0" y2="0" stroke="rgba(237, 232, 208, 0.3)" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="100" y1="60" x2="0" y2="0" stroke="rgba(237, 232, 208, 0.3)" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="-70" y1="85" x2="0" y2="0" stroke="rgba(237, 232, 208, 0.3)" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="-90" y1="-60" x2="80" y2="-70" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
              <line x1="80" y1="-70" x2="100" y2="60" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
              <line x1="100" y1="60" x2="-70" y2="85" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />

              {/* Clinician Node Stars with Glowing Badges */}
              <circle cx="0" cy="0" r="8" fill="#ede8d0" />
              <circle cx="0" cy="0" r="16" fill="none" stroke="#ede8d0" strokeWidth="1" className="animate-ping" />

              <g transform="translate(-90, -60)">
                <circle cx="0" cy="0" r="6" fill="#f43f5e" />
                <circle cx="0" cy="0" r="12" fill="none" stroke="#f43f5e" strokeWidth="1" opacity="0.6" />
                <text x="0" y="-12" fill="#ede8d0" fontSize="8" fontFamily="monospace" textAnchor="middle">CARDIOLOGY</text>
              </g>

              <g transform="translate(80, -70)">
                <circle cx="0" cy="0" r="6" fill="#38bdf8" />
                <circle cx="0" cy="0" r="12" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
                <text x="0" y="-12" fill="#ede8d0" fontSize="8" fontFamily="monospace" textAnchor="middle">NEUROLOGY</text>
              </g>

              <g transform="translate(100, 60)">
                <circle cx="0" cy="0" r="6" fill="#a855f7" />
                <circle cx="0" cy="0" r="12" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
                <text x="0" y="18" fill="#ede8d0" fontSize="8" fontFamily="monospace" textAnchor="middle">ONCOLOGY</text>
              </g>

              <g transform="translate(-70, 85)">
                <circle cx="0" cy="0" r="6" fill="#10b981" />
                <circle cx="0" cy="0" r="12" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.6" />
                <text x="0" y="18" fill="#ede8d0" fontSize="8" fontFamily="monospace" textAnchor="middle">ORTHOPEDICS</text>
              </g>
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. CONCIERGE: Enterprise Hospital Deployment Briefing & Executive Terminal*/}
      {/* ========================================================================= */}
      {pageId === 'concierge' && (
        <div className="relative w-full h-full flex items-center justify-center animate-[float-gentle_6s_ease-in-out_infinite]">
          {/* Champagne Aura */}
          <div className="absolute w-[360px] h-[360px] bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] bg-purple-600/20 rounded-full blur-[90px] pointer-events-none" />

          <svg viewBox="0 0 500 420" className="w-full h-full max-w-[500px] overflow-visible drop-shadow-2xl">
            {/* VIP Deployment Terminal Glass Plinth */}
            <g transform="translate(140, 95)">
              <rect x="0" y="0" width="220" height="175" rx="16" fill="#13082a" stroke="#ede8d0" strokeWidth="2" />
              
              <g transform="translate(20, 24)">
                <polygon points="12,-4 22,4 18,18 6,18 2,4" fill="#ede8d0" />
                <text x="32" y="12" fill="#ede8d0" fontSize="10" fontFamily="monospace" fontWeight="bold">INSTITUTIONAL BRIEFING</text>
              </g>
              <line x1="20" y1="44" x2="200" y2="44" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

              <g transform="translate(20, 65)">
                <text x="0" y="0" fill="#c084fc" fontSize="9" fontFamily="monospace">01 · Panacea Cockpit Walkthrough</text>
                <text x="0" y="22" fill="#38bdf8" fontSize="9" fontFamily="monospace">02 · CureNEST Inpatient OS Integration</text>
                <text x="0" y="44" fill="#10b981" fontSize="9" fontFamily="monospace">03 · Cryptographic HL7 FHIR Security</text>
              </g>

              <g transform="translate(20, 132)">
                <rect x="0" y="0" width="180" height="26" rx="6" fill="#08231c" stroke="#10b981" strokeWidth="1" />
                <circle cx="15" cy="13" r="4" fill="#10b981" />
                <text x="26" y="17" fill="#10b981" fontSize="8" fontFamily="monospace" fontWeight="bold">PRIVATE CLINICAL DEMO · ACTIVE</text>
              </g>
            </g>

            {/* Encrypted Broadcast Uplink Waves */}
            <g transform="translate(250, 70)">
              <circle cx="0" cy="0" r="16" fill="none" stroke="#ede8d0" strokeWidth="1.5" className="animate-[pulse-ring_3s_infinite]" />
              <circle cx="0" cy="0" r="32" fill="none" stroke="#a855f7" strokeWidth="1" className="animate-[pulse-ring_3s_infinite]" style={{ animationDelay: '0.8s' }} />
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. PULSEPORT: Biometric Identity Kiosk & Continuous Wearable Telemetry    */}
      {/* ========================================================================= */}
      {pageId === 'pulseport' && (
        <div className="relative w-full h-full flex items-center justify-center animate-[float-gentle_6s_ease-in-out_infinite]">
          <div className="absolute w-[340px] h-[340px] bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />

          <svg viewBox="0 0 500 420" className="w-full h-full max-w-[500px] overflow-visible drop-shadow-2xl">
            {/* 1. Kiosk */}
            <g transform="translate(80, 80)">
              <rect x="0" y="0" width="140" height="200" rx="14" fill="#090418" stroke="#38bdf8" strokeWidth="2" />
              <text x="14" y="24" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">PULSEPORT KIOSK</text>
              
              <rect x="14" y="34" width="112" height="100" rx="8" fill="#04020a" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
              <ellipse cx="70" cy="78" rx="26" ry="34" fill="none" stroke="#ede8d0" strokeWidth="1.4" />
              <circle cx="60" cy="72" r="2.5" fill="#38bdf8" />
              <circle cx="80" cy="72" r="2.5" fill="#38bdf8" />
              <path d="M 64 94 Q 70 98 76 94" fill="none" stroke="#ede8d0" strokeWidth="1.2" />

              <g className="animate-[laser-sweep_2.5s_ease-in-out_infinite]">
                <line x1="16" y1="36" x2="124" y2="36" stroke="#38bdf8" strokeWidth="2.5" />
              </g>

              <g transform="translate(14, 146)">
                <rect x="0" y="0" width="112" height="22" rx="4" fill="#062218" stroke="#10b981" strokeWidth="1" />
                <text x="56" y="14" fill="#10b981" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">VERIFIED: AARAV (0.8s)</text>
              </g>
              <text x="14" y="184" fill="#9ca3af" fontSize="7.5" fontFamily="monospace">QUEUE: #OPD-101 READY</text>
            </g>

            {/* 2. Smartwatch */}
            <g transform="translate(265, 100)">
              <rect x="0" y="0" width="155" height="175" rx="30" fill="#0e061e" stroke="#c084fc" strokeWidth="2.5" />
              <rect x="10" y="10" width="135" height="155" rx="22" fill="#05020c" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              <text x="22" y="32" fill="#c084fc" fontSize="9" fontFamily="monospace" fontWeight="bold">MEDICORE WATCH</text>
              <circle cx="130" cy="28" r="3" fill="#10b981" className="animate-ping" />

              <text x="22" y="64" fill="#ffffff" fontSize="26" fontWeight="300">74</text>
              <text x="60" y="56" fill="#f43f5e" fontSize="9" fontFamily="monospace">BPM</text>

              <path
                d="M 18 100 L 36 100 L 42 90 L 48 112 L 54 80 L 60 108 L 66 100 L 86 100 L 92 90 L 98 112 L 104 80 L 110 108 L 116 100 L 136 100"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="240"
                className="animate-[ecg-flow_2s_linear_infinite]"
              />

              <text x="22" y="146" fill="#38bdf8" fontSize="8" fontFamily="monospace">SpO2: 99% · AMBULATORY</text>
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. CURENEST: Hospital Inpatient Bed & Ward Telemetry Monitor              */}
      {/* ========================================================================= */}
      {pageId === 'curenest' && (
        <div className="relative w-full h-full flex items-center justify-center animate-[float-gentle_6.5s_ease-in-out_infinite]">
          <div className="absolute w-[360px] h-[360px] bg-cyan-600/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />

          <svg viewBox="0 0 500 420" className="w-full h-full max-w-[500px] overflow-visible drop-shadow-2xl">
            <g transform="translate(60, 160)">
              <rect x="0" y="20" width="16" height="70" rx="3" fill="#1b0e35" stroke="#a855f7" strokeWidth="1.5" />
              <polygon points="16,40 180,60 180,95 16,75" fill="#100722" stroke="#ede8d0" strokeWidth="1.8" />
              <ellipse cx="38" cy="48" rx="14" ry="8" fill="#ede8d0" />
              <polygon points="50,48 178,62 178,92 50,78" fill="#1c0f38" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            </g>

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

            <g transform="translate(200, 100)">
              <line x1="0" y1="0" x2="0" y2="150" stroke="#ede8d0" strokeWidth="2" />
              <rect x="-14" y="20" width="28" height="42" rx="6" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="0" y="44" fill="#ede8d0" fontSize="7" fontFamily="monospace" textAnchor="middle">0.9% NaCl</text>
              
              <rect x="-5" y="68" width="10" height="22" rx="2" fill="rgba(255,255,255,0.1)" stroke="#ede8d0" strokeWidth="1" />
              <circle cx="0" cy="74" r="2" fill="#38bdf8" className="animate-[drip-fall_1.2s_linear_infinite]" />
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. LABONIX: Pathology Diagnostics Laboratory, Centrifuge & Test Tubes     */}
      {/* ========================================================================= */}
      {pageId === 'labonix' && (
        <div className="relative w-full h-full flex items-center justify-center animate-[float-gentle_6.5s_ease-in-out_infinite]">
          <div className="absolute w-[360px] h-[360px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />

          <svg viewBox="0 0 500 420" className="w-full h-full max-w-[500px] overflow-visible drop-shadow-2xl">
            <g transform="translate(60, 270)">
              <polygon points="0,0 380,0 420,60 -40,60" fill="#071324" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1.5" />
            </g>

            <g transform="translate(160, 180)">
              <circle cx="0" cy="0" r="85" fill="#061222" stroke="#22d3ee" strokeWidth="2" />
              <g className="animate-[spin-slow_16s_linear_infinite]">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => {
                  const rad = (ang * Math.PI) / 180;
                  const x = Math.cos(rad) * 55;
                  const y = Math.sin(rad) * 55;
                  const c = ['#a855f7', '#38bdf8', '#f43f5e', '#10b981'][i % 4];
                  return (
                    <g key={i} transform={`translate(${x}, ${y})`}>
                      <circle cx="0" cy="0" r="9" fill="#13082a" stroke={c} strokeWidth="1.8" />
                      <circle cx="0" cy="0" r="3.5" fill={c} />
                    </g>
                  );
                })}
              </g>
              <circle cx="0" cy="0" r="18" fill="#ede8d0" />
            </g>

            <g transform="translate(290, 130)">
              <rect x="0" y="40" width="130" height="40" rx="4" fill="#0d1f38" stroke="#22d3ee" strokeWidth="1.5" />
              {[
                { x: 15, cap: '#a855f7' },
                { x: 42, cap: '#f43f5e' },
                { x: 70, cap: '#38bdf8' },
                { x: 98, cap: '#10b981' }
              ].map((t, idx) => (
                <g key={idx} transform={`translate(${t.x}, 0)`}>
                  <rect x="0" y="0" width="18" height="65" rx="8" fill="rgba(255,255,255,0.12)" stroke="#ede8d0" strokeWidth="1.2" />
                  <rect x="2" y="25" width="14" height="35" rx="5" fill="#f43f5e" opacity="0.8" />
                  <rect x="0" y="0" width="18" height="14" rx="3" fill={t.cap} />
                </g>
              ))}
            </g>

            <g transform="translate(150, 315)">
              <rect x="0" y="0" width="200" height="28" rx="8" fill="#061928" stroke="#22d3ee" strokeWidth="1.2" />
              <text x="100" y="18" fill="#22d3ee" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                LIS 2-WAY SYNC · 42ms TELEMETRY
              </text>
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 9. PHARMIXÓ: Autonomous Pharmacy Dispensary, Shelving & Pill Counting    */}
      {/* ========================================================================= */}
      {pageId === 'pharmixo' && (
        <div className="relative w-full h-full flex items-center justify-center animate-[float-gentle_6s_ease-in-out_infinite]">
          <div className="absolute w-[360px] h-[360px] bg-pink-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] bg-emerald-500/15 rounded-full blur-[80px] pointer-events-none" />

          <svg viewBox="0 0 500 420" className="w-full h-full max-w-[500px] overflow-visible drop-shadow-2xl">
            <g transform="translate(80, 80)">
              <rect x="0" y="0" width="340" height="140" rx="10" fill="#100720" stroke="#f472b6" strokeWidth="1.5" />
              <line x1="0" y1="45" x2="340" y2="45" stroke="rgba(244, 114, 182, 0.3)" strokeWidth="1.5" />
              <line x1="0" y1="90" x2="340" y2="90" stroke="rgba(244, 114, 182, 0.3)" strokeWidth="1.5" />

              {[20, 60, 100, 150, 190, 240, 280].map((x, i) => (
                <g key={i} transform={`translate(${x}, 12)`}>
                  <rect x="0" y="0" width="18" height="28" rx="3" fill="#2d1038" stroke="#f472b6" strokeWidth="1" />
                  <rect x="2" y="-4" width="14" height="6" rx="1" fill="#ede8d0" />
                </g>
              ))}
              {[30, 80, 130, 170, 220, 270, 310].map((x, i) => (
                <g key={i} transform={`translate(${x}, 57)`}>
                  <rect x="0" y="0" width="22" height="26" rx="4" fill="#143026" stroke="#10b981" strokeWidth="1" />
                  <rect x="4" y="-3" width="14" height="5" rx="1" fill="#ede8d0" />
                </g>
              ))}
            </g>

            <g transform="translate(170, 195)">
              <rect x="0" y="0" width="160" height="90" rx="12" fill="#170828" stroke="#ede8d0" strokeWidth="2" />
              <g transform="translate(80, 45)">
                <path d="M -8 -22 H 8 V -8 H 22 V 8 H 8 V 22 H -8 V 8 H -22 V -8 H -8 Z" fill="#10b981" />
              </g>
            </g>

            <g transform="translate(100, 240) rotate(-25)">
              <rect x="0" y="0" width="45" height="24" rx="12" fill="#8b5cf6" stroke="#c084fc" strokeWidth="1.5" />
              <rect x="45" y="0" width="45" height="24" rx="12" fill="#ede8d0" stroke="#ffffff" strokeWidth="1.5" />
              <line x1="45" y1="0" x2="45" y2="24" stroke="#ffffff" strokeWidth="2" />
            </g>

            <g transform="translate(150, 315)">
              <rect x="0" y="0" width="200" height="28" rx="8" fill="#120622" stroke="#f472b6" strokeWidth="1.2" />
              <text x="100" y="18" fill="#f472b6" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                COLD-CHAIN 4.0°C · ZERO DISPENSE ERROR
              </text>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
