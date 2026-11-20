import { useState } from 'react';
import { Link } from 'react-router-dom';

const ROOM_NODES = [
  {
    id: 'pharmacy',
    name: 'Pharmacies (Pharmixo)',
    tag: 'OUTPATIENT & RETAIL DISPENSARY',
    accent: '#ec4899',
    route: '/pharmixo',
    equipment: [
      'Automated 4-Tier Antibiotic & Cold-Chain Shelving',
      'Barcode Medicine Dispensation & Batch Expiry Scanner',
      'Encrypted e-Rx POS Fulfillment Terminal',
      'Automated Reagent & Drug Stock Alert Beacon'
    ],
    telemetry: 'Real-time GPS Delivery Sync · Generic Substitute Engine · 100% Audit Trail',
    desc: 'Pharmixo connects inpatient and retail pharmacies directly to hospital charts. When a clinician signs an e-prescription in Panacea, Pharmixo validates dosage contraindications, checks live shelf batch counts, and coordinates automated dispensation without manual transcription.'
  },
  {
    id: 'labs',
    name: 'Labs (LABONIX)',
    tag: 'DIAGNOSTIC PATHOLOGY & GENOMICS',
    accent: '#38bdf8',
    route: '/labonix',
    equipment: [
      'High-Throughput Automated Chemistry & Hematology Analyzer',
      'Digital Fluorescent Microscope with Optical Tele-Pathology',
      'Multi-Reagent Automated Specimen Rack with RFID Tracking',
      'Real-Time Molecular & DNA Sequencer Telemetry Monitor'
    ],
    telemetry: 'Automated Critical-Value Doctor Push · LIMS Bi-Directional Bridge · Barcode Audit',
    desc: 'Labonix bridges pathology laboratories directly with hospital wards and OPD clinics. Pathology test orders placed chairside sync immediately to analyzer queues, while critical panic values automatically page the on-duty physician.'
  },
  {
    id: 'hospital',
    name: 'Hospital / IPD (CureNEST)',
    tag: 'CRITICAL CARE, WARD OS & ICU',
    accent: '#06b6d4',
    route: '/curenest',
    equipment: [
      'Dual High-Acuity ICU / Ward Inpatient Beds with Rails',
      'Wall-Mounted Multi-Parameter Vital Monitor (ECG, SpO2, NIBP)',
      'Dual Continuous Saline & Medication IV Infusion Drip Poles',
      'Biometric Bedside Nurse Handover & EHR Telemetry Console'
    ],
    telemetry: 'Continuous Ward Telemetry · Bed Telemetry Dashboard · Nurse Handover Protocols',
    desc: 'CureNEST functions as the operating system for hospital inpatient wards and ICUs. It tracks bed occupancy, continuous patient vitals, shift handover notes, and medication administration schedules in real time.'
  },
  {
    id: 'clinics',
    name: 'Clinics (Panacea)',
    tag: 'PRIMARY & SPECIALTY CONSULTATION',
    accent: '#8b5cf6',
    route: '/panacea',
    equipment: [
      'Executive Physician Desk with Dual Curved Diagnostic Screens',
      'Natural Stylus Digital Pad for Handwriting OCR e-Rx',
      'Ergonomic Swivel Consultation Chair & Examination Couch',
      'Cryptographic EHR Hologram & Longitudinal History Viewer'
    ],
    telemetry: 'Instant WhatsApp QR Queue · AI Interaction Check · Zero-Latency Local Cache',
    desc: 'Panacea is the primary consultation cockpit for modern doctors. It replaces fragmented paper files with unified longitudinal dossiers, stylus handwriting capture, and automated drug-to-drug allergy cross-referencing.'
  }
];

export default function ArchitectureRooms3D() {
  const [selectedRoom, setSelectedRoom] = useState(ROOM_NODES[0]);

  return (
    <div className="w-full space-y-8 select-none">
      {/* Node Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {ROOM_NODES.map((room) => {
          const isSelected = selectedRoom.id === room.id;
          return (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              type="button"
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 ${
                isSelected
                  ? 'bg-white text-obsidian shadow-lg shadow-purple-500/20 scale-105'
                  : 'bg-white/[0.04] text-stonewarm border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: room.accent }}
              />
              <span>{room.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive 3D Room Schematic Preview */}
        <div className="lg:col-span-7 relative rounded-3xl bg-[#090416] border border-white/10 p-6 sm:p-8 overflow-hidden shadow-2xl">
          {/* Ambient Colored Backlight matching active room */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-25 transition-all duration-700"
            style={{ backgroundColor: selectedRoom.accent }}
          />

          {/* Room Header Info */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase block" style={{ color: selectedRoom.accent }}>
                {selectedRoom.tag}
              </span>
              <h3 className="satin-headline text-2xl sm:text-3xl font-light text-white mt-1">
                {selectedRoom.name}
              </h3>
            </div>
            <Link
              to={selectedRoom.route}
              className="px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-white/20 text-champagne hover:bg-white/10 transition-colors"
            >
              Explore Node ↗
            </Link>
          </div>

          {/* Vector Isometric Room Illustration */}
          <div className="relative py-8 flex items-center justify-center">
            <svg viewBox="0 0 500 340" className="w-full max-w-[440px] h-auto drop-shadow-2xl">
              <defs>
                <linearGradient id={`grad-floor-${selectedRoom.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#160c2b" />
                  <stop offset="100%" stopColor="#0a0515" />
                </linearGradient>
                <linearGradient id={`grad-wall-${selectedRoom.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={selectedRoom.accent} stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#0c071a" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Isometric Room Floor Base */}
              <polygon points="250,90 440,190 250,290 60,190" fill={`url(#grad-floor-${selectedRoom.id})`} stroke={selectedRoom.accent} strokeWidth="1.5" strokeOpacity="0.6" />
              {/* Left Wall */}
              <polygon points="60,190 250,90 250,20 60,120" fill={`url(#grad-wall-${selectedRoom.id})`} stroke={selectedRoom.accent} strokeWidth="1" strokeOpacity="0.3" />
              {/* Right Wall */}
              <polygon points="250,90 440,190 440,120 250,20" fill={`url(#grad-wall-${selectedRoom.id})`} stroke={selectedRoom.accent} strokeWidth="1" strokeOpacity="0.3" />

              {/* Floor Isometric Grid Lines */}
              <line x1="155" y1="140" x2="345" y2="240" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="345" y1="140" x2="155" y2="240" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

              {/* Room Specific Vector Medical Fixtures */}
              {selectedRoom.id === 'pharmacy' && (
                <g>
                  {/* Medicine Shelf Unit */}
                  <polygon points="100,140 180,95 180,55 100,100" fill="#2d103b" stroke="#ec4899" strokeWidth="1" />
                  {/* Shelves & bottles */}
                  <line x1="105" y1="110" x2="175" y2="70" stroke="#f472b6" strokeWidth="2" />
                  <circle cx="120" cy="100" r="3" fill="#ec4899" />
                  <circle cx="135" cy="92" r="3" fill="#a855f7" />
                  <circle cx="150" cy="83" r="3" fill="#38bdf8" />
                  <circle cx="165" cy="75" r="3" fill="#ec4899" />
                  {/* Dispensing Counter */}
                  <polygon points="210,190 290,145 320,160 240,205" fill="#1e102f" stroke="#ec4899" strokeWidth="1.2" />
                  {/* POS Terminal */}
                  <rect x="250" y="152" width="18" height="12" rx="2" fill="#ec4899" opacity="0.85" />
                  {/* Glowing Medical Cross */}
                  <path d="M250,45 h10 v-10 h8 v10 h10 v8 h-10 v10 h-8 v-10 h-10 z" fill="#34d399" filter="drop-shadow(0 0 8px #34d399)" />
                </g>
              )}

              {selectedRoom.id === 'labs' && (
                <g>
                  {/* Automated Analyzer Bench */}
                  <polygon points="120,165 220,110 270,135 170,190" fill="#0f2638" stroke="#38bdf8" strokeWidth="1.5" />
                  {/* Glowing Cyan Analyzer Ring */}
                  <ellipse cx="195" cy="150" rx="22" ry="11" fill="none" stroke="#38bdf8" strokeWidth="2.5" filter="drop-shadow(0 0 6px #38bdf8)" />
                  {/* Microscope */}
                  <rect x="230" y="120" width="8" height="18" rx="2" fill="#bae6fd" />
                  <circle cx="234" cy="116" r="4" fill="#38bdf8" />
                  {/* Test Tube Rack */}
                  <circle cx="150" cy="160" r="3" fill="#a855f7" />
                  <circle cx="158" cy="156" r="3" fill="#38bdf8" />
                  <circle cx="166" cy="152" r="3" fill="#34d399" />
                  {/* DNA Sequencer Monitor */}
                  <polygon points="310,135 370,105 370,65 310,95" fill="#082f49" stroke="#38bdf8" strokeWidth="1" />
                  <path d="M320,85 Q340,75 360,85" stroke="#38bdf8" strokeWidth="2" fill="none" />
                </g>
              )}

              {selectedRoom.id === 'hospital' && (
                <g>
                  {/* Bed 1 */}
                  <polygon points="140,175 220,130 250,145 170,190" fill="#0d2b38" stroke="#06b6d4" strokeWidth="1.2" />
                  <polygon points="140,175 140,160 220,115 220,130" fill="#083344" stroke="#06b6d4" strokeWidth="1" />
                  <rect x="155" y="152" width="22" height="14" rx="3" fill="#e0f2fe" opacity="0.9" />
                  {/* Bed 2 */}
                  <polygon points="270,225 350,180 380,195 300,240" fill="#0d2b38" stroke="#06b6d4" strokeWidth="1.2" />
                  <rect x="285" y="202" width="22" height="14" rx="3" fill="#e0f2fe" opacity="0.9" />
                  {/* IV Drip Poles */}
                  <line x1="125" y1="190" x2="125" y2="120" stroke="#67e8f9" strokeWidth="2" />
                  <ellipse cx="125" cy="120" rx="5" ry="7" fill="#a5f3fc" />
                  <line x1="395" y1="210" x2="395" y2="140" stroke="#67e8f9" strokeWidth="2" />
                  <ellipse cx="395" cy="140" rx="5" ry="7" fill="#a5f3fc" />
                  {/* ECG Heartbeat Monitor on Wall */}
                  <polygon points="220,80 280,50 280,20 220,50" fill="#042f2e" stroke="#10b981" strokeWidth="1.5" />
                  <polyline points="228,52 238,52 243,35 248,65 253,42 258,52 272,52" fill="none" stroke="#34d399" strokeWidth="1.5" filter="drop-shadow(0 0 5px #10b981)" />
                </g>
              )}

              {selectedRoom.id === 'clinics' && (
                <g>
                  {/* Doctor Executive Desk */}
                  <polygon points="200,200 310,140 340,155 230,215" fill="#20103b" stroke="#8b5cf6" strokeWidth="1.2" />
                  {/* Dual Curved Screens on Desk */}
                  <rect x="250" y="132" width="24" height="14" rx="2" fill="#c4b5fd" opacity="0.9" />
                  <rect x="278" y="122" width="24" height="14" rx="2" fill="#c4b5fd" opacity="0.9" />
                  {/* Examination Couch */}
                  <polygon points="120,160 180,130 200,140 140,170" fill="#180d2d" stroke="#a855f7" strokeWidth="1" />
                  {/* Wall-mounted EHR Screen */}
                  <polygon points="110,120 170,90 170,60 110,90" fill="#170c2a" stroke="#8b5cf6" strokeWidth="1.2" />
                  <circle cx="140" cy="75" r="8" fill="none" stroke="#c4b5fd" strokeWidth="1.5" />
                  <line x1="140" y1="83" x2="140" y2="88" stroke="#c4b5fd" strokeWidth="1.5" />
                </g>
              )}
            </svg>
          </div>

          {/* Telemetry Status Bar */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-xs font-mono text-stonewarm/90 gap-2 relative z-10">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: selectedRoom.accent }} />
              STATUS: ONLINE &amp; CRYPTOGRAPHICALLY SYNCED
            </span>
            <span className="text-white/60">LATENCY: &lt; 14MS</span>
          </div>
        </div>

        {/* Right Column: Node In-Depth Clinical Intelligence */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-champagne block font-semibold">
              NODE ARCHITECTURAL ROLE
            </span>
            <p className="text-sm sm:text-base text-stonewarm leading-relaxed text-[#c3b7d6]">
              {selectedRoom.desc}
            </p>
          </div>

          {/* Authentic Medical Fixtures Breakdown */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono tracking-wider uppercase text-purple-300 block font-semibold">
              AUTHENTIC CLINICAL FIXTURES &amp; SYSTEMS
            </span>
            <ul className="space-y-2">
              {selectedRoom.equipment.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-bone/90 leading-snug">
                  <span className="text-champagne font-mono mt-0.5">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Telemetry Pathways */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
            <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-300 block">
              CONTINUOUS DATA HIGHWAY
            </span>
            <p className="text-xs text-white/80 font-mono">
              {selectedRoom.telemetry}
            </p>
          </div>

          {/* CTA Link to Dedicated Page */}
          <div className="pt-2">
            <Link
              to={selectedRoom.route}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] border border-purple-500/30 hover:border-champagne text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
            >
              <span>Explore Dedicated {selectedRoom.name.split(' ')[0]} Page</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
