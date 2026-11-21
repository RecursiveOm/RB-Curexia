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
          {/* Ambient Lighting Glows */}
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
            <g transform="translate(25, 40)">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6s" repeatCount="indefinite" />
                
                {/* Callout Pill at Top */}
                <g transform="translate(15, -14)">
                  <rect x="0" y="0" width="130" height="20" rx="10" fill="#14092b" stroke="#a855f7" strokeWidth="1" />
                  <circle cx="12" cy="10" r="3" fill="#a855f7" />
                  <text x="22" y="13" fill="#ede8d0" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Longitudinal EHR Dossiers</text>
                  <line x1="65" y1="20" x2="65" y2="28" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />
                </g>

                {/* Dossier Card Chassis */}
                <rect x="0" y="28" width="180" height="135" rx="12" fill="#0a0518" stroke="#8b5cf6" strokeWidth="1.8" filter="url(#card-glow)" />
                
                {/* Patient Header */}
                <circle cx="22" cy="48" r="8" fill="#1d0d38" stroke="#38bdf8" strokeWidth="1" />
                <path d="M 18 53 C 18 49, 26 49, 26 53" fill="#38bdf8" />
                <text x="36" y="47" fill="#ffffff" fontSize="9" fontWeight="bold">Patient #4729</text>
                <text x="36" y="56" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">68 yrs · F</text>

                {/* Summary Checklist */}
                <g transform="translate(14, 68)">
                  <rect x="0" y="0" width="92" height="14" rx="4" fill="#170c30" />
                  <text x="6" y="10" fill="#ede8d0" fontSize="7.5" fontWeight="bold">+ Clinical Summary</text>

                  <g transform="translate(6, 22)">
                    <text x="0" y="0" fill="#c084fc" fontSize="7">■ Investigations</text>
                    <text x="0" y="11" fill="#c084fc" fontSize="7">■ Medications</text>
                    <text x="0" y="22" fill="#c084fc" fontSize="7">■ Allergies</text>
                    <text x="0" y="33" fill="#c084fc" fontSize="7">■ History</text>
                  </g>
                </g>

                {/* Holographic 3D Human Anatomy Wireframe Body */}
                <g transform="translate(142, 95)">
                  <ellipse cx="0" cy="-28" rx="5" ry="6" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
                  <path d="M -8 -20 L 8 -20 L 6 0 L -6 0 Z" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
                  <line x1="-8" y1="-18" x2="-14" y2="4" stroke="#38bdf8" strokeWidth="1.2" />
                  <line x1="8" y1="-18" x2="14" y2="4" stroke="#38bdf8" strokeWidth="1.2" />
                  <line x1="-4" y1="0" x2="-5" y2="24" stroke="#38bdf8" strokeWidth="1.2" />
                  <line x1="4" y1="0" x2="5" y2="24" stroke="#38bdf8" strokeWidth="1.2" />
                  {/* Pulsing Red Heart Beacon */}
                  <circle cx="1" cy="-14" r="3.5" fill="#f43f5e" filter="url(#card-glow)" className="animate-ping" />
                  <circle cx="1" cy="-14" r="2.5" fill="#ffffff" />
                </g>
              </g>
            </g>

            {/* CARD 2: Smart OPD Queues (Top Right) */}
            <g transform="translate(295, 28)">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -7; 0 0" dur="6.5s" repeatCount="indefinite" />
                
                {/* Callout Pill at Top */}
                <g transform="translate(25, -14)">
                  <rect x="0" y="0" width="105" height="20" rx="10" fill="#08142c" stroke="#38bdf8" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3" fill="#38bdf8" />
                  <text x="18" y="13" fill="#ede8d0" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Smart OPD Queues</text>
                  <line x1="50" y1="20" x2="50" y2="28" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
                </g>

                {/* Queue Card Chassis */}
                <rect x="0" y="28" width="150" height="98" rx="12" fill="#060e22" stroke="#38bdf8" strokeWidth="1.6" filter="url(#card-glow)" />
                <text x="14" y="44" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">OPD QUEUE</text>

                {/* Patient List Rows */}
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
            </g>

            {/* CARD 3: Adverse Drug Interaction Screening (Right) */}
            <g transform="translate(360, 155)">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur="7s" repeatCount="indefinite" />
                
                {/* Callout Pill */}
                <g transform="translate(10, -14)">
                  <rect x="0" y="0" width="135" height="18" rx="9" fill="#081e22" stroke="#10b981" strokeWidth="1" />
                  <circle cx="10" cy="9" r="3" fill="#10b981" />
                  <text x="18" y="12" fill="#ede8d0" fontSize="7" fontFamily="sans-serif" fontWeight="bold">Adverse Drug Screening</text>
                  <line x1="50" y1="18" x2="50" y2="26" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
                </g>

                {/* Warning Box Chassis */}
                <rect x="0" y="26" width="165" height="52" rx="10" fill="#16081e" stroke="#f43f5e" strokeWidth="1.5" filter="url(#card-glow)" />
                <g transform="translate(12, 42)">
                  <polygon points="10,-6 18,10 2,10" fill="#f59e0b" />
                  <text x="10" y="7" fill="#000000" fontSize="8" fontWeight="bold" textAnchor="middle">!</text>
                  <text x="26" y="2" fill="#ffffff" fontSize="8" fontWeight="bold">Potential Drug Interaction</text>
                  <text x="26" y="14" fill="#f43f5e" fontSize="7.5" fontFamily="monospace">Amoxicillin + Warfarin</text>
                </g>
              </g>
            </g>

            {/* 3D PERSPECTIVE DIGITAL DRAWING TABLET (Bottom Center) */}
            <g transform="translate(185, 225)">
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

              {/* FLOATING 3D STYLUS PEN TOUCHING THE INK */}
              <g transform="translate(115, 25)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 6 -3; 0 0" dur="3s" repeatCount="indefinite" />
                <line x1="42" y1="-55" x2="0" y2="40" stroke="#ede8d0" strokeWidth="6" strokeLinecap="round" />
                <line x1="42" y1="-55" x2="0" y2="40" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
                {/* Glowing Pen Tip Touching Screen */}
                <circle cx="0" cy="40" r="4" fill="#38bdf8" filter="url(#card-glow)" />
                <circle cx="0" cy="40" r="12" fill="none" stroke="#38bdf8" strokeWidth="1" className="animate-ping" />
              </g>
            </g>

            {/* Bottom Callout Tags */}
            <g transform="translate(80, 380)">
              <rect x="0" y="0" width="140" height="24" rx="12" fill="#0b0416" stroke="#8b5cf6" strokeWidth="1" />
              <text x="70" y="15" fill="#ede8d0" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Digital Pad (Handwriting)</text>
              <line x1="140" y1="12" x2="195" y2="300" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" />
            </g>

            <g transform="translate(340, 380)">
              <rect x="0" y="0" width="170" height="24" rx="12" fill="#09051c" stroke="#38bdf8" strokeWidth="1" />
              <text x="85" y="15" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Clinician Cockpit (Fluid 3D)</text>
              <line x1="340" y1="12" x2="310" y2="340" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. ARCHITECTURE: 4-Node Connected Matrix with Central Hub                  */}
      {/* Features: Center RBCurexia Hub, Top CURENEST, Left PANACEA,               */}
      {/* Right PHARMIXO, Bottom LABONIX, connected with glowing data conduits       */}
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
      {/* 5. CONCIERGE: Executive Concierge Hub & 4 Orbiting Portals                 */}
      {/* Exact Match to Reference Screenshot (media_1795210382239_f03e563a.jpg)    */}
      {/* Features: Central Circular Hub with Executive Suit/Tie Silhouette & Label  */}
      {/* "EXECUTIVE CONCIERGE", connected via curved glowing conduits to:           */}
      {/* Clinician Network (Top-Left), Partner Hospitals (Top-Right),               */}
      {/* Seminars & Events (Bottom-Left), Internship Fellowships (Bottom-Right)     */}
      {/* ========================================================================= */}
      {pageId === 'concierge' && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Ambient Purple/Champagne Glow */}
          <div className="absolute w-[380px] h-[380px] bg-purple-600/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] bg-amber-400/15 rounded-full blur-[90px] pointer-events-none" />

          <svg viewBox="0 0 540 440" className="w-full h-full max-w-[540px] overflow-visible drop-shadow-2xl">
            <defs>
              <linearGradient id="concierge-hub-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#ede8d0" />
              </linearGradient>

              <filter id="concierge-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 4 Curved Glowing Conduits connecting Center Hub to the 4 Orbiting Spheres */}
            <g fill="none" strokeWidth="2.5" opacity="0.85">
              {/* Conduit 1: Center to Top-Left (Clinician Network) */}
              <path d="M 270 210 Q 180 200 135 115" stroke="#a855f7" filter="url(#concierge-glow)" />
              <path d="M 270 210 Q 180 200 135 115" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 5" />
              
              {/* Conduit 2: Center to Top-Right (Partner Hospitals) */}
              <path d="M 270 210 Q 360 200 405 115" stroke="#38bdf8" filter="url(#concierge-glow)" />
              <path d="M 270 210 Q 360 200 405 115" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 5" />
              
              {/* Conduit 3: Center to Bottom-Left (Seminars & Events) */}
              <path d="M 270 210 Q 180 220 135 305" stroke="#ede8d0" filter="url(#concierge-glow)" />
              <path d="M 270 210 Q 180 220 135 305" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 5" />
              
              {/* Conduit 4: Center to Bottom-Right (Internship Fellowships) */}
              <path d="M 270 210 Q 360 220 405 305" stroke="#c084fc" filter="url(#concierge-glow)" />
              <path d="M 270 210 Q 360 220 405 305" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 5" />
            </g>

            {/* Traveling Light Photons */}
            <circle cx="200" cy="165" r="3" fill="#ffffff" filter="url(#concierge-glow)" className="animate-ping" />
            <circle cx="340" cy="165" r="3" fill="#ffffff" filter="url(#concierge-glow)" className="animate-ping" style={{ animationDelay: '0.6s' }} />
            <circle cx="200" cy="255" r="3" fill="#ffffff" filter="url(#concierge-glow)" className="animate-ping" style={{ animationDelay: '1.2s' }} />
            <circle cx="340" cy="255" r="3" fill="#ffffff" filter="url(#concierge-glow)" className="animate-ping" style={{ animationDelay: '1.8s' }} />

            {/* CENTRAL EXECUTIVE CONCIERGE HUB */}
            <g transform="translate(270, 210)">
              {/* Expanding Pulse Halo Rings */}
              <circle cx="0" cy="0" r="54" fill="none" stroke="#c084fc" strokeWidth="1.5" className="animate-[pulse-ring_3.5s_ease-out_infinite]" />
              <circle cx="0" cy="0" r="68" fill="none" stroke="#ede8d0" strokeWidth="1" className="animate-[pulse-ring_3.5s_ease-out_infinite]" style={{ animationDelay: '1.2s' }} />

              {/* Hub Outer Ring */}
              <circle cx="0" cy="0" r="44" fill="#0c051e" stroke="url(#concierge-hub-grad)" strokeWidth="3" filter="url(#concierge-glow)" />
              <circle cx="0" cy="0" r="37" fill="#14082c" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />

              {/* Executive Silhouette: Suit, Collar & Tie */}
              <g transform="translate(0, -6)">
                {/* Head */}
                <circle cx="0" cy="-7" r="5.5" fill="#ede8d0" />
                {/* Suit Shoulders & Lapels */}
                <path d="M -15 15 L -10 2 L 0 6 L 10 2 L 15 15 Z" fill="#ffffff" opacity="0.9" />
                <polygon points="-5,3 0,11 5,3" fill="#14082c" />
                {/* Tie */}
                <polygon points="-2,6 2,6 1.5,15 0,17 -1.5,15" fill="#38bdf8" />
              </g>

              {/* Hub Label Badge */}
              <g transform="translate(0, 26)">
                <rect x="-65" y="0" width="130" height="18" rx="9" fill="#080314" stroke="#c084fc" strokeWidth="1" />
                <text x="0" y="12" fill="#ede8d0" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold" letterSpacing="0.5">
                  EXECUTIVE CONCIERGE
                </text>
              </g>
            </g>

            {/* ========================================================================= */}
            {/* THE 4 ORBITING SPHERES (Matching Reference Screenshot)                    */}
            {/* ========================================================================= */}

            {/* SPHERE 1: TOP-LEFT - CLINICIAN NETWORK */}
            <g transform="translate(135, 115)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="32" fill="rgba(168, 85, 247, 0.2)" filter="url(#concierge-glow)" />
                <circle cx="0" cy="0" r="26" fill="#0d051f" stroke="#c084fc" strokeWidth="2" filter="url(#concierge-glow)" />
                <circle cx="0" cy="0" r="21" fill="#15082e" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                {/* Stethoscope / Cross Icon */}
                <g transform="translate(0, -2)">
                  <path d="M -7 -6 C -7 2, 7 2, 7 -6" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 0 -1 V 7 M -3 7 H 3" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="0" cy="7" r="2" fill="#38bdf8" />
                </g>

                <text x="0" y="42" fill="#ede8d0" fontSize="9.5" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="600">
                  Clinician Network
                </text>
              </g>
            </g>

            {/* SPHERE 2: TOP-RIGHT - PARTNER HOSPITALS */}
            <g transform="translate(405, 115)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6.5s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="32" fill="rgba(56, 189, 248, 0.2)" filter="url(#concierge-glow)" />
                <circle cx="0" cy="0" r="26" fill="#050e20" stroke="#38bdf8" strokeWidth="2" filter="url(#concierge-glow)" />
                <circle cx="0" cy="0" r="21" fill="#081732" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                {/* Hospital Building Icon */}
                <g transform="translate(0, -2)">
                  <rect x="-9" y="-9" width="18" height="18" rx="2" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                  <path d="M -3 -5 H 3 M 0 -8 V -2" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
                  <rect x="-6" y="0" width="3.5" height="3.5" fill="#ffffff" />
                  <rect x="2.5" y="0" width="3.5" height="3.5" fill="#ffffff" />
                  <rect x="-6" y="5" width="3.5" height="3.5" fill="#ffffff" />
                  <rect x="2.5" y="5" width="3.5" height="3.5" fill="#ffffff" />
                </g>

                <text x="0" y="42" fill="#ede8d0" fontSize="9.5" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="600">
                  Partner Hospitals
                </text>
              </g>
            </g>

            {/* SPHERE 3: BOTTOM-LEFT - SEMINARS & EVENTS */}
            <g transform="translate(135, 305)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="7s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="32" fill="rgba(237, 232, 208, 0.2)" filter="url(#concierge-glow)" />
                <circle cx="0" cy="0" r="26" fill="#140f06" stroke="#ede8d0" strokeWidth="2" filter="url(#concierge-glow)" />
                <circle cx="0" cy="0" r="21" fill="#20180a" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                {/* Presentation Screen / Podium Icon */}
                <g transform="translate(0, -2)">
                  <rect x="-10" y="-8" width="20" height="13" rx="1.5" fill="none" stroke="#ede8d0" strokeWidth="1.5" />
                  <path d="M -6 -2 L -2 -5 L 2 -1 L 6 -6" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="0" y1="5" x2="0" y2="9" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="-5" y1="9" x2="5" y2="9" stroke="#ffffff" strokeWidth="1.5" />
                </g>

                <text x="0" y="42" fill="#ede8d0" fontSize="9.5" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="600">
                  Seminars &amp; Events
                </text>
              </g>
            </g>

            {/* SPHERE 4: BOTTOM-RIGHT - INTERNSHIP FELLOWSHIPS */}
            <g transform="translate(405, 305)" className="cursor-pointer">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6.5s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="32" fill="rgba(192, 132, 252, 0.2)" filter="url(#concierge-glow)" />
                <circle cx="0" cy="0" r="26" fill="#0d041e" stroke="#c084fc" strokeWidth="2" filter="url(#concierge-glow)" />
                <circle cx="0" cy="0" r="21" fill="#170732" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                {/* Graduation Scholar Cap Icon */}
                <g transform="translate(0, -2)">
                  <polygon points="0,-8 11,-2 0,4 -11,-2" fill="#ffffff" />
                  <path d="M -7 0 V 6 C -7 9, 7 9, 7 6 V 0" fill="none" stroke="#c084fc" strokeWidth="1.6" />
                  <line x1="8" y1="-0.5" x2="8" y2="6" stroke="#ede8d0" strokeWidth="1.2" />
                  <circle cx="8" cy="6.5" r="1" fill="#ede8d0" />
                </g>

                <text x="0" y="42" fill="#ede8d0" fontSize="9.5" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="600">
                  Internship Fellowships
                </text>
              </g>
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. LABONIX: Pathology Diagnostics Laboratory, Centrifuge & Test Tubes     */}
      {/* Features: Rotating centrifuge rotor with specimen vials, biochemistry     */}
      {/* analyzer screen with 42ms specimen tracking and automated pipetting arm   */}
      {/* ========================================================================= */}
      {pageId === 'labonix' && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Cyan/Purple Laboratory Ambient Glow */}
          <div className="absolute w-[360px] h-[360px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />

          <svg viewBox="0 0 520 420" className="w-full h-full max-w-[520px] overflow-visible drop-shadow-2xl">
            <defs>
              <linearGradient id="lab-plinth-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>

              <filter id="lab-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Workbench Laboratory Table Base */}
            <g transform="translate(60, 275)">
              <polygon points="0,0 380,0 420,60 -40,60" fill="#071324" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1.5" />
              <line x1="20" y1="20" x2="360" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </g>

            {/* ROTATING CENTRIFUGE ROTOR with Color-Coded Sample Tubes */}
            <g transform="translate(160, 180)">
              <circle cx="0" cy="0" r="85" fill="#061222" stroke="#22d3ee" strokeWidth="2" filter="url(#lab-glow)" />
              <circle cx="0" cy="0" r="72" fill="#091b30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

              <g className="animate-[spin-slow_16s_linear_infinite]" style={{ transformOrigin: '0px 0px' }}>
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

              {/* Centrifuge Spindle Core */}
              <circle cx="0" cy="0" r="18" fill="#ede8d0" />
              <circle cx="0" cy="0" r="8" fill="#061222" />
            </g>

            {/* DIAGNOSTIC TEST TUBE RACK */}
            <g transform="translate(290, 135)">
              <rect x="0" y="40" width="130" height="40" rx="4" fill="#0d1f38" stroke="#22d3ee" strokeWidth="1.5" />
              {[
                { x: 15, cap: '#a855f7' },
                { x: 42, cap: '#f43f5e' },
                { x: 70, cap: '#38bdf8' },
                { x: 98, cap: '#10b981' }
              ].map((t, idx) => (
                <g key={idx} transform={`translate(${t.x}, 0)`}>
                  <rect x="0" y="0" width="16" height="58" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="#ede8d0" strokeWidth="1.2" />
                  <rect x="-1" y="-3" width="18" height="8" rx="3" fill={t.cap} />
                  <line x1="4" y1="20" x2="12" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                  <line x1="4" y1="30" x2="12" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                  <line x1="4" y1="40" x2="12" y2="40" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                </g>
              ))}
            </g>

            {/* DIAGNOSTIC ANALYZER DIGITAL CONSOLE */}
            <g transform="translate(275, 40)">
              <rect x="0" y="0" width="160" height="80" rx="10" fill="#05101f" stroke="#22d3ee" strokeWidth="1.8" filter="url(#lab-glow)" />
              <text x="12" y="20" fill="#22d3ee" fontSize="8" fontFamily="monospace" fontWeight="bold">LABONIX SPECTRUM</text>
              <circle cx="145" cy="16" r="3" fill="#10b981" className="animate-ping" />

              {/* Chemical Spectrum Wave */}
              <path d="M 12 45 Q 30 25 50 45 T 90 45 T 130 45 T 148 45" fill="none" stroke="#22d3ee" strokeWidth="1.8" />
              <text x="12" y="65" fill="#ede8d0" fontSize="7.5" fontFamily="monospace">SPECIMEN #TX-8821: 42ms</text>
            </g>

            {/* AUTOMATED ROBOTIC PIPETTOR ARM */}
            <g transform="translate(210, 60)">
              <line x1="0" y1="0" x2="0" y2="60" stroke="#ede8d0" strokeWidth="3" />
              <rect x="-6" y="55" width="12" height="15" rx="2" fill="#22d3ee" />
              <line x1="0" y1="70" x2="0" y2="85" stroke="#22d3ee" strokeWidth="1.8" />
              {/* Falling Droplet */}
              <circle cx="0" cy="94" r="2.5" fill="#22d3ee" filter="url(#lab-glow)" className="animate-[drip-fall_1.5s_linear_infinite]" />
            </g>

            {/* Status Callout Pill */}
            <g transform="translate(80, 360)">
              <rect x="0" y="0" width="180" height="24" rx="12" fill="#071224" stroke="#22d3ee" strokeWidth="1" />
              <circle cx="14" cy="12" r="3.5" fill="#22d3ee" />
              <text x="24" y="15" fill="#ede8d0" fontSize="8" fontFamily="monospace" fontWeight="bold">Pathology Gateway (ASTM/HL7)</text>
            </g>
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. PULSEPORT: Biometric Identity Kiosk & Continuous Wearable Telemetry    */}
      {/* Features: 3D Biometric Check-In Kiosk with Laser Face Scanner, and        */}
      {/* Medicore Smartwatch with Pulsating ECG Wave & Ambulatory SpO2 Stream      */}
      {/* ========================================================================= */}
      {pageId === 'pulseport' && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Cyan/Purple Telemetry Aura */}
          <div className="absolute w-[360px] h-[360px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] bg-purple-600/20 rounded-full blur-[90px] pointer-events-none" />

          <svg viewBox="0 0 520 420" className="w-full h-full max-w-[520px] overflow-visible drop-shadow-2xl">
            <defs>
              <linearGradient id="kiosk-frame-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>

              <filter id="telemetry-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 1. TOUCHLESS BIOMETRIC CHECK-IN KIOSK (Left) */}
            <g transform="translate(65, 80)">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="6.5s" repeatCount="indefinite" />
                
                {/* Kiosk Chassis */}
                <rect x="0" y="0" width="150" height="210" rx="16" fill="#090418" stroke="url(#kiosk-frame-grad)" strokeWidth="2.5" filter="url(#telemetry-glow)" />
                <text x="16" y="24" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">PULSEPORT KIOSK</text>
                
                {/* Facial Recognition Camera Window */}
                <rect x="15" y="34" width="120" height="105" rx="10" fill="#04020a" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
                
                {/* Biometric Face Mesh Silhouette */}
                <ellipse cx="75" cy="80" rx="28" ry="36" fill="none" stroke="#ede8d0" strokeWidth="1.4" opacity="0.8" />
                <circle cx="65" cy="74" r="2.5" fill="#38bdf8" />
                <circle cx="85" cy="74" r="2.5" fill="#38bdf8" />
                <path d="M 68 96 Q 75 101 82 96" fill="none" stroke="#ede8d0" strokeWidth="1.2" />

                {/* Laser Sweep Beam Scanning the Face */}
                <g className="animate-[laser-sweep_2.5s_ease-in-out_infinite]">
                  <line x1="17" y1="36" x2="133" y2="36" stroke="#38bdf8" strokeWidth="2.5" filter="url(#telemetry-glow)" />
                </g>

                {/* Verification Badge */}
                <g transform="translate(15, 148)">
                  <rect x="0" y="0" width="120" height="24" rx="5" fill="#062218" stroke="#10b981" strokeWidth="1" />
                  <text x="60" y="16" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">VERIFIED: AARAV (0.8s)</text>
                </g>
                <text x="16" y="192" fill="#9ca3af" fontSize="7.5" fontFamily="monospace">QUEUE: #OPD-101 READY</text>
              </g>
            </g>

            {/* 2. MEDICORE SMARTWATCH CONTINUOUS VITALS (Right) */}
            <g transform="translate(265, 95)">
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -7; 0 0" dur="6s" repeatCount="indefinite" />
                
                {/* Watch Strap */}
                <rect x="35" y="-20" width="100" height="225" rx="14" fill="#080314" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                {/* Watch Chassis */}
                <rect x="0" y="0" width="170" height="185" rx="32" fill="#0e061e" stroke="#c084fc" strokeWidth="2.5" filter="url(#telemetry-glow)" />
                <rect x="10" y="10" width="150" height="165" rx="24" fill="#05020c" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                {/* Watch UI Header */}
                <text x="24" y="32" fill="#c084fc" fontSize="9" fontFamily="monospace" fontWeight="bold">MEDICORE WATCH</text>
                <circle cx="145" cy="28" r="3.5" fill="#10b981" className="animate-ping" />

                {/* Heart Rate Display */}
                <text x="24" y="68" fill="#ffffff" fontSize="28" fontWeight="300">74</text>
                <text x="68" y="58" fill="#f43f5e" fontSize="9" fontFamily="monospace" fontWeight="bold">BPM</text>

                {/* Continuous Real-Time ECG Waveform */}
                <path
                  d="M 18 105 L 36 105 L 42 95 L 48 117 L 54 85 L 60 113 L 66 105 L 86 105 L 92 95 L 98 117 L 104 85 L 110 113 L 116 105 L 152 105"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeDasharray="240"
                  className="animate-[ecg-flow_2s_linear_infinite]"
                />

                <text x="24" y="152" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">SpO2: 99% · AMBULATORY</text>
              </g>
            </g>

            {/* Wireless Cellular Telemetry Beam between Kiosk & Watch */}
            <g stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" strokeDasharray="3 5">
              <line x1="215" y1="180" x2="265" y2="180" />
            </g>
            <circle cx="240" cy="180" r="3" fill="#38bdf8" filter="url(#telemetry-glow)" className="animate-ping" />
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. CURENEST: Hospital Inpatient Bed & Ward Telemetry Monitor              */}
      {/* ========================================================================= */}
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
