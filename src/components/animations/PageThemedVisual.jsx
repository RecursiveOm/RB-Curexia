export default function PageThemedVisual({ pageId = 'pulseport' }) {
  return (
    <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] flex items-center justify-center select-none overflow-visible">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-purple-600/15 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. PULSEPORT: Biometrics & Wearable Telemetry */}
      {pageId === 'pulseport' && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Biometric Scan Frame */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-[#090416]/90 border border-purple-500/40 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* Corner crosshairs */}
            <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-champagne" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-champagne" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-champagne" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-champagne" />

            {/* Scanning Laser Line */}
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#38bdf8] animate-[scan_3s_ease-in-out_infinite] z-20 pointer-events-none" />

            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[9px] font-mono tracking-widest uppercase text-cyan-300">
                PULSEPORT · BIOMETRIC ID
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Center: Holographic Face Mesh Wireframe & Smartwatch */}
            <div className="relative my-auto flex items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-36 h-36">
                {/* Concentric biometric rings */}
                <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="1" strokeDasharray="4 4" className="animate-spin" style={{ animationDuration: '30s' }} />
                <circle cx="80" cy="80" r="54" fill="none" stroke="rgba(56,189,248,0.25)" strokeWidth="1.5" />
                
                {/* Stylized Face Contour */}
                <ellipse cx="80" cy="74" rx="32" ry="42" fill="none" stroke="#ede8d0" strokeWidth="1.2" strokeOpacity="0.8" />
                {/* Eyes & Vitals target dots */}
                <circle cx="68" cy="68" r="3" fill="#38bdf8" />
                <circle cx="92" cy="68" r="3" fill="#38bdf8" />
                <path d="M74,96 Q80,102 86,96" fill="none" stroke="#ede8d0" strokeWidth="1.5" />
                <line x1="80" y1="72" x2="80" y2="86" stroke="#c084fc" strokeWidth="1.5" />

                {/* Smartwatch Wristband Silhouette */}
                <rect x="52" y="128" width="56" height="28" rx="8" fill="#170c2a" stroke="#8b5cf6" strokeWidth="1.5" />
                {/* ECG Heartbeat inside smartwatch */}
                <path d="M58,142 L66,142 L70,134 L74,150 L78,138 L82,142 L102,142" fill="none" stroke="#34d399" strokeWidth="1.8" className="drop-shadow-[0_0_6px_#34d399]" />
              </svg>
            </div>

            {/* Bottom Live Telemetry Chips */}
            <div className="space-y-1.5 z-10 pt-2 border-t border-white/[0.08] font-mono text-[9px]">
              <div className="flex justify-between text-white/80">
                <span>HEART RATE: 74 BPM</span>
                <span className="text-emerald-300">SpO2: 99%</span>
              </div>
              <div className="flex justify-between text-purple-300">
                <span>IDENTITY: VERIFIED (0.8s)</span>
                <span className="text-cyan-300">SYNC: 24/7 LIVE</span>
              </div>
            </div>
          </div>

          {/* Floating Orbiting Badges */}
          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-purple-900/90 border border-purple-400/50 shadow-xl text-[9px] font-mono text-purple-200 animate-bounce" style={{ animationDuration: '4s' }}>
            ● MEDICORE STREAMING
          </div>
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-cyan-950/90 border border-cyan-400/50 shadow-xl text-[9px] font-mono text-cyan-200">
            ✓ TOUCHLESS CHECK-IN
          </div>
        </div>
      )}

      {/* 2. MISSION: Human-Centered Care & DNA Continuity */}
      {pageId === 'mission' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-[#090416]/90 border border-purple-500/40 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-[9px] font-mono tracking-widest uppercase text-champagne">
                MISSION · CLINICAL CONTINUITY
              </span>
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            </div>

            {/* Center Animated DNA Double Helix */}
            <div className="relative my-auto flex items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-36 h-36">
                {/* Rotating Helix Rings */}
                <g className="animate-spin" style={{ animationDuration: '24s', transformOrigin: '80px 80px' }}>
                  <ellipse cx="80" cy="80" rx="65" ry="24" fill="none" stroke="rgba(192,132,252,0.4)" strokeWidth="1.2" />
                  <ellipse cx="80" cy="80" rx="65" ry="24" fill="none" stroke="rgba(237,232,208,0.4)" strokeWidth="1.2" transform="rotate(60 80 80)" />
                  <ellipse cx="80" cy="80" rx="65" ry="24" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="1.2" transform="rotate(120 80 80)" />
                </g>
                {/* Central Healing Cross */}
                <path d="M74,55 h12 v19 h19 v12 h-19 v19 h-12 v-19 h-19 v-12 h19 z" fill="#ede8d0" className="drop-shadow-[0_0_12px_rgba(237,232,208,0.6)]" />
                {/* Heart node with ECG line */}
                <path d="M40,80 L62,80 L68,68 L74,92 L80,74 L86,80 L120,80" fill="none" stroke="#c084fc" strokeWidth="2" />
              </svg>
            </div>

            <div className="space-y-1.5 z-10 pt-2 border-t border-white/[0.08] font-mono text-[9px]">
              <div className="flex justify-between text-bone">
                <span>RECORD FRAGMENTATION: 0%</span>
                <span className="text-champagne">EHR: LIFELONG</span>
              </div>
              <div className="flex justify-between text-purple-300">
                <span>INTUITION: HUMAN-FIRST</span>
                <span className="text-emerald-300">DIGNITY: PROTECTED</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-purple-950/90 border border-purple-400/40 text-[9px] font-mono text-purple-200">
            ★ RESTORING CLINICAL INTUITION
          </div>
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-champagne/90 text-obsidian font-semibold text-[9px] font-mono shadow-xl">
            ● 5 CORE PILLARS ACTIVE
          </div>
        </div>
      )}

      {/* 3. PANACEA: Clinical Workstation & Digital Stylus */}
      {pageId === 'panacea' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-[#090416]/90 border border-purple-500/40 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-[9px] font-mono tracking-widest uppercase text-purple-300">
                PANACEA OS · CHAIRSIDE COCKPIT
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[8px]">
                99.99% UPTIME
              </span>
            </div>

            {/* Stylus Digital Pad Animation */}
            <div className="relative my-auto flex items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-36 h-36">
                {/* Tablet Screen */}
                <rect x="25" y="30" width="110" height="95" rx="8" fill="#13082a" stroke="#a855f7" strokeWidth="1.5" />
                {/* Top header on tablet */}
                <rect x="33" y="38" width="50" height="6" rx="2" fill="#c084fc" opacity="0.8" />
                <rect x="90" y="38" width="36" height="6" rx="2" fill="#38bdf8" opacity="0.6" />
                {/* Prescription Pad Lines */}
                <line x1="33" y1="56" x2="127" y2="56" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1="33" y1="72" x2="127" y2="72" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1="33" y1="88" x2="127" y2="88" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                {/* Handwritten Prescription Signature curve */}
                <path d="M38,68 Q46,60 54,68 T70,68 T84,60 T98,68" fill="none" stroke="#ede8d0" strokeWidth="2" className="drop-shadow-[0_0_5px_#ede8d0]" />
                {/* Glowing Stylus Pen */}
                <line x1="108" y1="52" x2="135" y2="20" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />
                <circle cx="108" cy="52" r="3" fill="#ec4899" className="animate-ping" />
              </svg>
            </div>

            <div className="space-y-1.5 z-10 pt-2 border-t border-white/[0.08] font-mono text-[9px]">
              <div className="flex justify-between text-bone">
                <span>DRUG SAFETY: SCREENED</span>
                <span className="text-emerald-300">OCR AI: REAL-TIME</span>
              </div>
              <div className="flex justify-between text-purple-300">
                <span>QUEUE: WHATSAPP QR</span>
                <span className="text-cyan-300">LATENCY: &lt; 14MS</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-purple-900/90 border border-purple-400/50 text-[9px] font-mono text-purple-200">
            ✍ DIGITAL PAD e-Rx
          </div>
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-black/80 border border-white/20 text-[9px] font-mono text-champagne">
            ● ADVERSE DRUG SCREEN: CLEAR
          </div>
        </div>
      )}

      {/* 4. ARCHITECTURE: 4-Node Health System Cluster */}
      {pageId === 'architecture' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-[#090416]/90 border border-purple-500/40 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-[9px] font-mono tracking-widest uppercase text-champagne">
                ARCHITECTURE · 4 NODES
              </span>
              <span className="text-[9px] font-mono text-purple-300">24 SERVICES</span>
            </div>

            {/* 4 Connected Isometric Nodes */}
            <div className="relative my-auto flex items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-36 h-36">
                {/* Connecting Cross Rays */}
                <line x1="80" y1="28" x2="80" y2="132" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="28" y1="80" x2="132" y2="80" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Center Core */}
                <circle cx="80" cy="80" r="16" fill="#1e1038" stroke="#ede8d0" strokeWidth="2" />
                <circle cx="80" cy="80" r="6" fill="#c084fc" className="animate-ping" />

                {/* Node 1: Hospital (Top) */}
                <polygon points="80,18 95,28 80,38 65,28" fill="#083344" stroke="#06b6d4" strokeWidth="1.5" />
                <text x="80" y="30" fontSize="7" fill="#67e8f9" textAnchor="middle" fontFamily="monospace">IPD</text>

                {/* Node 2: Labs (Right) */}
                <polygon points="132,70 147,80 132,90 117,80" fill="#0c2e4e" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="132" y="82" fontSize="7" fill="#7dd3fc" textAnchor="middle" fontFamily="monospace">LAB</text>

                {/* Node 3: Pharmacy (Bottom) */}
                <polygon points="80,122 95,132 80,142 65,132" fill="#3b0728" stroke="#ec4899" strokeWidth="1.5" />
                <text x="80" y="134" fontSize="7" fill="#f472b6" textAnchor="middle" fontFamily="monospace">PHR</text>

                {/* Node 4: Clinics (Left) */}
                <polygon points="28,70 43,80 28,90 13,80" fill="#240c42" stroke="#8b5cf6" strokeWidth="1.5" />
                <text x="28" y="82" fontSize="7" fill="#c084fc" textAnchor="middle" fontFamily="monospace">CLI</text>
              </svg>
            </div>

            <div className="space-y-1.5 z-10 pt-2 border-t border-white/[0.08] font-mono text-[9px]">
              <div className="flex justify-between text-bone">
                <span>ENCRYPTION: AES-256</span>
                <span className="text-cyan-300">CACHING: DEXIE</span>
              </div>
              <div className="flex justify-between text-purple-300">
                <span>SECURITY: DEFAULT DENY</span>
                <span className="text-emerald-300">NABH ALIGNED</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-purple-950/90 border border-purple-400/40 text-[9px] font-mono text-purple-200">
            ❖ ROOM-BASED ISOLATION
          </div>
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-champagne text-obsidian font-semibold text-[9px] font-mono shadow-xl">
            ● 4 NODES SYNCHRONIZED
          </div>
        </div>
      )}

      {/* 5. NETWORK: Clinician Constellation Radar */}
      {pageId === 'network' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-[#090416]/90 border border-purple-500/40 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-[9px] font-mono tracking-widest uppercase text-purple-300">
                PLUGINS SOCIAL · RADAR
              </span>
              <span className="text-[9px] font-mono text-emerald-400">VERIFIED NETWORK</span>
            </div>

            {/* Radar Animation */}
            <div className="relative my-auto flex items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-36 h-36">
                {/* Radar Rings */}
                <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <circle cx="80" cy="80" r="46" fill="none" stroke="rgba(168,85,247,0.25)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="80" cy="80" r="24" fill="none" stroke="rgba(237,232,208,0.3)" strokeWidth="1" />
                
                {/* Center Hub */}
                <circle cx="80" cy="80" r="10" fill="#230d47" stroke="#ede8d0" strokeWidth="1.5" />
                <circle cx="80" cy="80" r="3" fill="#ede8d0" />

                {/* Radar Sweep Line */}
                <line x1="80" y1="80" x2="140" y2="40" stroke="rgba(56,189,248,0.7)" strokeWidth="1.5" className="animate-spin" style={{ animationDuration: '4s', transformOrigin: '80px 80px' }} />

                {/* Clinician Target Nodes */}
                <circle cx="80" cy="24" r="5" fill="#ede8d0" stroke="#8b5cf6" strokeWidth="1.5" />
                <circle cx="126" cy="56" r="4.5" fill="#c084fc" />
                <circle cx="120" cy="116" r="4.5" fill="#38bdf8" />
                <circle cx="80" cy="136" r="5" fill="#34d399" />
                <circle cx="38" cy="116" r="4.5" fill="#ec4899" />
                <circle cx="34" cy="56" r="4.5" fill="#f59e0b" />
              </svg>
            </div>

            <div className="space-y-1.5 z-10 pt-2 border-t border-white/[0.08] font-mono text-[9px]">
              <div className="flex justify-between text-bone">
                <span>CLANS: 6 SPECIALTIES</span>
                <span className="text-champagne">REFERRALS: INSTANT</span>
              </div>
              <div className="flex justify-between text-purple-300">
                <span>LOCATION: MUMBAI HQ</span>
                <span className="text-cyan-300">PEER CASES: SYNCED</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-purple-900/90 border border-purple-400/50 text-[9px] font-mono text-purple-200">
            ● 6 SPECIALIST CLANS
          </div>
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-cyan-950/90 border border-cyan-400/50 text-[9px] font-mono text-cyan-200">
            ✓ MIRA ROAD &amp; MUMBAI
          </div>
        </div>
      )}

      {/* 6. CONCIERGE: Executive Crest & Direct Desk */}
      {pageId === 'concierge' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-[#090416]/90 border border-champagne/40 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-[9px] font-mono tracking-widest uppercase text-champagne">
                EXECUTIVE CONCIERGE · MUMBAI
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Crest Beacon Animation */}
            <div className="relative my-auto flex items-center justify-center">
              <div className="relative w-28 h-28 rounded-2xl bg-[#0e0720] border-2 border-champagne/50 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(237,232,208,0.25)] group">
                <img
                  src="/assets/embedded-90b24ba6af66.webp"
                  alt="RBCurexia Crest"
                  className="w-16 h-auto object-contain"
                />
                <span className="text-[8px] font-mono text-champagne tracking-widest uppercase mt-1">
                  MUMBAI HQ
                </span>
              </div>
            </div>

            <div className="space-y-1.5 z-10 pt-2 border-t border-white/[0.08] font-mono text-[9px]">
              <div className="flex justify-between text-bone">
                <span>DIRECT DESK: ACTIVE</span>
                <span className="text-champagne">+91 9987976863</span>
              </div>
              <div className="flex justify-between text-purple-300">
                <span>CAMPUS I &amp; II: DAHISAR W</span>
                <span className="text-emerald-300">FIRESTORE SECURED</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-champagne text-obsidian font-semibold text-[9px] font-mono shadow-xl">
            ★ HOSPITAL BRIEFINGS
          </div>
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-purple-950/90 border border-purple-400/40 text-[9px] font-mono text-purple-200">
            ● FREE TECH SEMINARS
          </div>
        </div>
      )}

      {/* 7. CURENEST: Hospital Ward OS & Bed Telemetry */}
      {pageId === 'curenest' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-[#090416]/90 border border-cyan-500/40 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-[9px] font-mono tracking-widest uppercase text-cyan-300">
                CURENEST · WARD OS &amp; ICU
              </span>
              <span className="text-[9px] font-mono text-emerald-300">BED TELEMETRY</span>
            </div>

            {/* Inpatient Bed & ICU Monitor */}
            <div className="relative my-auto flex items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-36 h-36">
                {/* Hospital Bed Base */}
                <polygon points="40,110 110,75 140,90 70,125" fill="#0d2b38" stroke="#06b6d4" strokeWidth="1.5" />
                <rect x="55" y="90" width="28" height="16" rx="3" fill="#e0f2fe" opacity="0.9" />
                {/* IV Drip Stand */}
                <line x1="30" y1="125" x2="30" y2="45" stroke="#67e8f9" strokeWidth="2" />
                <ellipse cx="30" cy="45" rx="6" ry="9" fill="#a5f3fc" />
                {/* Drip Droplet */}
                <circle cx="30" cy="65" r="2" fill="#38bdf8" className="animate-ping" />
                {/* Wall Monitor */}
                <rect x="95" y="30" width="48" height="32" rx="4" fill="#042f2e" stroke="#10b981" strokeWidth="1.5" />
                <polyline points="100,46 108,46 112,38 116,54 120,42 124,46 138,46" fill="none" stroke="#34d399" strokeWidth="1.8" className="drop-shadow-[0_0_5px_#10b981]" />
              </svg>
            </div>

            <div className="space-y-1.5 z-10 pt-2 border-t border-white/[0.08] font-mono text-[9px]">
              <div className="flex justify-between text-bone">
                <span>BED OCCUPANCY: LIVE</span>
                <span className="text-cyan-300">SpO2: 98% · HR: 74</span>
              </div>
              <div className="flex justify-between text-purple-300">
                <span>NURSE HANDOVER: VERIFIED</span>
                <span className="text-emerald-300">IV DRIP: 80ML/HR</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-cyan-950/90 border border-cyan-400/50 text-[9px] font-mono text-cyan-200">
            ● SMART IV INFUSION
          </div>
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-purple-950/90 border border-purple-400/40 text-[9px] font-mono text-purple-200">
            ✓ BIOMETRIC SHIFT LOG
          </div>
        </div>
      )}

      {/* 8. LABONIX: Diagnostic Pathology & Analyzer Gateway */}
      {pageId === 'labonix' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-[#090416]/90 border border-sky-500/40 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-[9px] font-mono tracking-widest uppercase text-sky-300">
                LABONIX · PATHOLOGY LIMS
              </span>
              <span className="text-[9px] font-mono text-emerald-300">ANALYZER BRIDGE</span>
            </div>

            {/* Automated Chemistry Analyzer & Flasks */}
            <div className="relative my-auto flex items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-36 h-36">
                {/* Analyzer Base */}
                <polygon points="35,110 105,75 135,90 65,125" fill="#0f2638" stroke="#38bdf8" strokeWidth="1.5" />
                {/* Glowing Cyan Analyzer Wheel */}
                <ellipse cx="85" cy="98" rx="26" ry="13" fill="none" stroke="#38bdf8" strokeWidth="2.5" className="drop-shadow-[0_0_8px_#38bdf8]" />
                {/* Microscope */}
                <rect x="110" y="65" width="8" height="20" rx="2" fill="#bae6fd" />
                <circle cx="114" cy="60" r="4" fill="#38bdf8" />
                {/* Chemical Flask with Glowing Liquid */}
                <path d="M48,50 L56,50 L56,62 L42,82 L62,82 L48,62 Z" fill="#0284c7" stroke="#7dd3fc" strokeWidth="1.5" />
                <circle cx="50" cy="74" r="2" fill="#bae6fd" className="animate-ping" />
              </svg>
            </div>

            <div className="space-y-1.5 z-10 pt-2 border-t border-white/[0.08] font-mono text-[9px]">
              <div className="flex justify-between text-bone">
                <span>SPECIMEN CHAIN: RFID / 2D</span>
                <span className="text-sky-300">HL7 / ASTM BRIDGE</span>
              </div>
              <div className="flex justify-between text-purple-300">
                <span>PANIC VALUE ALERTS: ON</span>
                <span className="text-emerald-300">REAGENT AI: AUTO</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-sky-950/90 border border-sky-400/50 text-[9px] font-mono text-sky-200">
            🔬 ASTM / HL7 BRIDGE
          </div>
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-purple-950/90 border border-purple-400/40 text-[9px] font-mono text-purple-200">
            ● REAGENT RESTOCK AI
          </div>
        </div>
      )}

      {/* 9. PHARMIXO: GPS Pharmacy & Closed-Loop Dispensation */}
      {pageId === 'pharmixo' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-[#090416]/90 border border-pink-500/40 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-[9px] font-mono tracking-widest uppercase text-pink-300">
                PHARMIXO · DISPENSARY &amp; GPS
              </span>
              <span className="text-[9px] font-mono text-emerald-300">LOT AUDITED</span>
            </div>

            {/* Dispensary Cross & 3D Pill Capsule */}
            <div className="relative my-auto flex items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-36 h-36">
                {/* Glowing Green Neon Pharmacy Cross */}
                <path d="M74,30 h12 v12 h12 v12 h-12 v12 h-12 v-12 h-12 v-12 h12 z" fill="#10b981" className="drop-shadow-[0_0_10px_#10b981]" />
                {/* 3D Capsule Pill */}
                <g transform="translate(80,100) rotate(-35)">
                  <rect x="-35" y="-12" width="35" height="24" rx="12" fill="#ec4899" stroke="#f472b6" strokeWidth="1.5" />
                  <rect x="0" y="-12" width="35" height="24" rx="12" fill="#ede8d0" stroke="#f472b6" strokeWidth="1.5" />
                  <line x1="0" y1="-12" x2="0" y2="12" stroke="#f472b6" strokeWidth="1.5" />
                </g>
                {/* Delivery GPS Radar Ring */}
                <circle cx="80" cy="100" r="48" fill="none" stroke="rgba(236,72,153,0.3)" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: '20s' }} />
              </svg>
            </div>

            <div className="space-y-1.5 z-10 pt-2 border-t border-white/[0.08] font-mono text-[9px]">
              <div className="flex justify-between text-bone">
                <span>GENERIC SUBSTITUTION: AI</span>
                <span className="text-pink-300">GPS DISPATCH: LIVE</span>
              </div>
              <div className="flex justify-between text-purple-300">
                <span>BATCH EXPIRY: PROTECTED</span>
                <span className="text-emerald-300">100% AUDIT TRAIL</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-pink-950/90 border border-pink-400/50 text-[9px] font-mono text-pink-200">
            💊 2D BARCODE LOT CHECK
          </div>
          <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-purple-950/90 border border-purple-400/40 text-[9px] font-mono text-purple-200">
            🚚 GPS VERIFIED DISPATCH
          </div>
        </div>
      )}
    </div>
  );
}
