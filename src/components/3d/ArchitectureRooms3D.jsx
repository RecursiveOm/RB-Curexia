import { useState } from 'react';
import { Link } from 'react-router-dom';

const ROOM_NODES = [
  {
    id: 'clinics',
    name: 'Clinics (Panacea)',
    tag: 'PRIMARY & SPECIALTY CONSULTATION',
    accent: '#8b5cf6',
    route: '/panacea',
    logo: '/assets/brand-panacea.png',
    liveUrl: null,
    equipment: [
      'Executive Physician Desk with Dual Curved Diagnostic Screens',
      'Natural Stylus Digital Pad for Handwriting OCR e-Rx',
      'Ergonomic Swivel Consultation Chair & Patient Visitor Seat',
      'Clinical Examination Couch with Headrest & Sanitary Roll',
      'Wall-Mounted Digital Radiograph / X-Ray Viewer Screen'
    ],
    telemetry: 'Instant WhatsApp QR Queue · AI Interaction Check · Zero-Latency Local Cache',
    desc: 'Panacea is the primary consultation cockpit for modern doctors. It replaces fragmented paper files with unified longitudinal dossiers, natural stylus handwriting capture, and automated drug-to-drug allergy cross-referencing in real time.'
  },
  {
    id: 'labs',
    name: 'Labs (LABONIX)',
    tag: 'DIAGNOSTIC PATHOLOGY & GENOMICS',
    accent: '#38bdf8',
    route: '/labonix',
    logo: '/assets/brand-labonix.png',
    liveUrl: 'https://labonix.in',
    equipment: [
      'High-Throughput Automated Chemistry & Hematology Analyzer',
      'Benchtop High-Speed Centrifuge with Spinning Specimen Rotor',
      'Precision Binocular Laboratory Microscope with Optics Stand',
      'Color-Coded Specimen Collection Tube Rack (EDTA, Serum, Citrate)',
      'Automated Pipetting Station & Reagent Supply Shelving'
    ],
    telemetry: 'Automated Critical-Value Doctor Push · LIMS Bi-Directional Bridge · 42ms Barcode Audit',
    desc: 'Labonix bridges diagnostic pathology laboratories directly with hospital wards and OPD clinics. Pathology test orders placed chairside sync immediately to automated analyzer queues, while critical panic values automatically alert attending clinicians.'
  },
  {
    id: 'hospital',
    name: 'Hospital / IPD (CureNEST)',
    tag: 'CRITICAL CARE, WARD OS & ICU',
    accent: '#06b6d4',
    route: '/curenest',
    logo: '/assets/rbcurexia-logo-4k.webp',
    liveUrl: null,
    equipment: [
      'Motorized High-Acuity ICU / Ward Bed with Safety Railings',
      'Wall-Mounted Multi-Parameter Vital Monitor (ECG, SpO2, NIBP)',
      'Mobile Dual IV Drip Infusion Pole with Saline Lines',
      'Articulated Overbed Mayo Tray Table & Bedside Cabinet',
      'Ceiling-Track Hospital Privacy Curtain System'
    ],
    telemetry: 'Continuous Ward Telemetry · Bed Telemetry Dashboard · Nurse Handover Protocols',
    desc: 'CureNEST functions as the operating system for hospital inpatient wards and ICUs. It tracks real-time bed occupancy, continuous patient vitals, shift handover notes, and medication administration schedules in real time.'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacies (PharmixO)',
    tag: 'OUTPATIENT & RETAIL DISPENSARY',
    accent: '#ec4899',
    route: '/pharmixo',
    logo: '/assets/brand-pharmixo.png',
    liveUrl: null,
    equipment: [
      'High-Density Multi-Tier Medicine Storage Shelving Matrix',
      'Dispensary Service Counter with Barcode Scanner & POS Screen',
      'Cold-Chain Biological Drug Refrigerator (+4.0°C)',
      'Automated High-Speed Tablet Counter & Blister Dispenser',
      'Wall-Mounted Illuminated Green Neon Pharmacy Cross (+)'
    ],
    telemetry: 'Real-time GPS Delivery Sync · Generic Substitute Engine · 100% Audit Trail',
    desc: 'PharmixO connects inpatient and retail pharmacies directly to hospital charts. When a clinician signs an e-prescription in Panacea, PharmixO validates dosage contraindications, checks live shelf batch counts, and coordinates automated dispensation without manual transcription.'
  }
];

export default function ArchitectureRooms3D() {
  const [selectedRoom, setSelectedRoom] = useState(ROOM_NODES[0]);

  return (
    <div className="w-full space-y-8 select-none">
      {/* Node Selector Tabs with Official Brand Logos */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {ROOM_NODES.map((room) => {
          const isSelected = selectedRoom.id === room.id;
          return (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              type="button"
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                isSelected
                  ? 'bg-white text-obsidian shadow-lg shadow-purple-500/20 scale-105'
                  : 'bg-white/[0.04] text-stonewarm border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              <img
                src={room.logo}
                alt={room.name}
                className="w-4 h-4 object-contain rounded-full"
              />
              <span>{room.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive Realistic Medical Room Illustration */}
        <div className="lg:col-span-7 relative rounded-3xl bg-[#080314] border border-white/10 p-6 sm:p-8 overflow-hidden shadow-2xl">
          {/* Ambient Colored Backlight matching active room */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[110px] pointer-events-none opacity-25 transition-all duration-700"
            style={{ backgroundColor: selectedRoom.accent }}
          />

          {/* Room Header Info with Official Brand Logo */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/15 p-2 flex items-center justify-center shadow-lg">
                <img
                  src={selectedRoom.logo}
                  alt={selectedRoom.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span
                  className="text-[10px] font-mono tracking-widest uppercase block"
                  style={{ color: selectedRoom.accent }}
                >
                  {selectedRoom.tag}
                </span>
                <h3 className="satin-headline text-2xl sm:text-3xl font-light text-white mt-0.5">
                  {selectedRoom.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {selectedRoom.liveUrl && (
                <a
                  href={selectedRoom.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-champagne text-obsidian font-semibold hover:bg-white transition-all shadow-md"
                >
                  Live App ↗
                </a>
              )}
              <Link
                to={selectedRoom.route}
                className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-white/20 text-champagne hover:bg-white/10 transition-colors"
              >
                Inspect ↗
              </Link>
            </div>
          </div>

          {/* Vector Architectural Isometric Room Illustration (Real Clinics & Labs) */}
          <div className="relative py-6 flex items-center justify-center">
            <svg
              viewBox="0 0 540 380"
              className="w-full max-w-[500px] h-auto drop-shadow-2xl overflow-visible select-none"
            >
              <defs>
                <linearGradient id={`grad-floor-${selectedRoom.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#130926" />
                  <stop offset="100%" stopColor="#070210" />
                </linearGradient>

                <linearGradient id={`grad-wall-left-${selectedRoom.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={selectedRoom.accent} stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#0a0418" stopOpacity="0.04" />
                </linearGradient>

                <linearGradient id={`grad-wall-right-${selectedRoom.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={selectedRoom.accent} stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#0a0418" stopOpacity="0.04" />
                </linearGradient>

                <filter id={`room-glow-${selectedRoom.id}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. ROOM SHELL & ARCHITECTURAL ENVELOPE */}
              {/* Floor Base (Isometric Diamond) */}
              <polygon
                points="270,75 490,185 270,295 50,185"
                fill={`url(#grad-floor-${selectedRoom.id})`}
                stroke={selectedRoom.accent}
                strokeWidth="2"
                strokeOpacity="0.7"
              />

              {/* Left Wall */}
              <polygon
                points="50,185 270,75 270,10 50,120"
                fill={`url(#grad-wall-left-${selectedRoom.id})`}
                stroke={selectedRoom.accent}
                strokeWidth="1.2"
                strokeOpacity="0.35"
              />

              {/* Right Wall */}
              <polygon
                points="270,75 490,185 490,120 270,10"
                fill={`url(#grad-wall-right-${selectedRoom.id})`}
                stroke={selectedRoom.accent}
                strokeWidth="1.2"
                strokeOpacity="0.35"
              />

              {/* Floor Isometric Grid Lines */}
              <line x1="160" y1="130" x2="380" y2="240" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
              <line x1="380" y1="130" x2="160" y2="240" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
              <line x1="215" y1="102" x2="435" y2="212" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="105" y1="157" x2="325" y2="267" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              {/* Baseboard Ambient Glow Neon Strip */}
              <polyline
                points="50,185 270,75 490,185"
                fill="none"
                stroke={selectedRoom.accent}
                strokeWidth="2.5"
                strokeOpacity="0.85"
                filter={`url(#room-glow-${selectedRoom.id})`}
              />

              {/* ========================================================================= */}
              {/* ROOM 1: REAL CLINIC (Panacea OPD Consultation Suite)                      */}
              {/* Features: Executive Doctor Desk, Dual Curved Diagnostics Screens,         */}
              {/* Stylus Digital Pad, Swivel Chair, Exam Couch, X-Ray Lightbox & Stethoscope*/}
              {/* ========================================================================= */}
              {selectedRoom.id === 'clinics' && (
                <g id="realistic-clinic-fixtures">
                  {/* WALL FIXTURE: Digital Chest X-Ray / CT Lightbox on Left Wall */}
                  <g transform="translate(100, 48)">
                    <polygon points="0,35 65,3 65,-35 0,-3" fill="#040d1e" stroke="#8b5cf6" strokeWidth="1.5" />
                    {/* Glowing radiograph screen */}
                    <polygon points="4,32 61,4 61,-30 4,-2" fill="#061834" />
                    {/* Anatomical Spine & Ribs Silhouettes */}
                    <path d="M 32,-14 V 20 M 20,-4 Q 32,-8 44,-4 M 18,3 Q 32,-2 46,3 M 20,11 Q 32,6 44,11" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.85" />
                    <circle cx="32" cy="-18" r="4.5" fill="#38bdf8" opacity="0.9" />
                  </g>

                  {/* WALL FIXTURE: Medical Glass Cabinet on Right Wall */}
                  <g transform="translate(345, 42)">
                    <polygon points="0,0 75,37 75,90 0,53" fill="#0e061e" stroke="#8b5cf6" strokeWidth="1.2" />
                    <line x1="0" y1="26" x2="75" y2="63" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.5" />
                    {/* Medicine jars inside cabinet */}
                    <rect x="20" y="32" width="6" height="10" rx="1" fill="#ede8d0" opacity="0.8" />
                    <rect x="32" y="38" width="8" height="12" rx="1" fill="#38bdf8" opacity="0.8" />
                    <rect x="46" y="45" width="7" height="11" rx="1" fill="#ec4899" opacity="0.8" />
                  </g>

                  {/* PATIENT EXAMINATION COUCH (Left Corner) */}
                  <g id="examination-couch">
                    {/* Couch Base Legs */}
                    <line x1="105" y1="195" x2="105" y2="215" stroke="#8b5cf6" strokeWidth="2.5" />
                    <line x1="165" y1="165" x2="165" y2="185" stroke="#8b5cf6" strokeWidth="2.5" />
                    <line x1="185" y1="175" x2="185" y2="195" stroke="#8b5cf6" strokeWidth="2.5" />
                    <line x1="125" y1="205" x2="125" y2="225" stroke="#8b5cf6" strokeWidth="2.5" />

                    {/* Mattress Top Surface */}
                    <polygon points="100,190 165,158 190,170 125,202" fill="#1b0c36" stroke="#c084fc" strokeWidth="1.8" />
                    {/* Elevated Ergonomic Headrest */}
                    <polygon points="155,163 175,153 190,161 170,171" fill="#2d1554" stroke="#c084fc" strokeWidth="1.5" />
                    {/* Sanitary Paper Roll */}
                    <ellipse cx="180" cy="154" rx="4" ry="6" fill="#ede8d0" />
                  </g>

                  {/* DOCTOR'S EXECUTIVE CONSULTATION DESK */}
                  <g id="doctor-executive-desk">
                    {/* Pedestal Legs */}
                    <polygon points="210,210 210,235 220,240 220,215" fill="#140728" stroke="#8b5cf6" strokeWidth="1" />
                    <polygon points="325,155 325,180 335,185 335,160" fill="#140728" stroke="#8b5cf6" strokeWidth="1" />

                    {/* Desk Surface (3D Wood/Matte Obsidian Bevel) */}
                    <polygon points="195,198 320,135 365,158 240,220" fill="#16082e" stroke="#8b5cf6" strokeWidth="2" />
                    <polygon points="195,198 240,220 240,226 195,204" fill="#0b0318" stroke="#8b5cf6" strokeWidth="1" />
                    <polygon points="240,220 365,158 365,164 240,226" fill="#100522" stroke="#8b5cf6" strokeWidth="1" />

                    {/* DUAL CURVED ULTRA-WIDE DIAGNOSTIC MONITORS */}
                    {/* Monitor 1 (Left): EHR Chart & Vitals */}
                    <g transform="translate(245, 132)">
                      {/* Stand */}
                      <line x1="12" y1="20" x2="12" y2="28" stroke="#ede8d0" strokeWidth="2.5" />
                      <ellipse cx="12" cy="28" rx="8" ry="3" fill="#8b5cf6" />
                      {/* Curved Screen Frame */}
                      <path d="M -8 18 Q 12 22 32 12 L 32 -6 Q 12 4 -8 0 Z" fill="#050a18" stroke="#38bdf8" strokeWidth="1.5" filter="drop-shadow(0 0 6px #38bdf8)" />
                      {/* EHR Graphs on Screen */}
                      <path d="M -4 10 Q 4 8 12 12 T 26 5" fill="none" stroke="#34d399" strokeWidth="1.5" />
                      <line x1="-3" y1="4" x2="15" y2="4" stroke="#38bdf8" strokeWidth="1.2" />
                    </g>

                    {/* Monitor 2 (Right): 3D Anatomy Scanner */}
                    <g transform="translate(285, 112)">
                      <line x1="12" y1="20" x2="12" y2="28" stroke="#ede8d0" strokeWidth="2.5" />
                      <ellipse cx="12" cy="28" rx="8" ry="3" fill="#8b5cf6" />
                      <path d="M -6 16 Q 14 20 34 10 L 34 -8 Q 14 2 -6 -2 Z" fill="#09051c" stroke="#c084fc" strokeWidth="1.5" filter="drop-shadow(0 0 6px #c084fc)" />
                      {/* Patient Heart Beat Graph */}
                      <polyline points="0,8 8,8 12,-2 16,14 20,4 28,4" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
                    </g>

                    {/* NATURAL STYLUS DIGITAL WRITING PAD */}
                    <g transform="translate(230, 185)">
                      <polygon points="0,8 26,-5 42,3 16,16" fill="#03010a" stroke="#38bdf8" strokeWidth="1.2" />
                      {/* Glowing Handwriting Wave on Screen */}
                      <path d="M 6 8 Q 14 4 22 7 T 34 2" fill="none" stroke="#ede8d0" strokeWidth="1.8" />
                      {/* Stylus Pen */}
                      <line x1="38" y1="-8" x2="28" y2="5" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="28" cy="5" r="2" fill="#38bdf8" />
                    </g>

                    {/* Acoustic Stethoscope on Desk */}
                    <path d="M 295 170 Q 305 180 315 172 Q 320 162 312 158" fill="none" stroke="#ede8d0" strokeWidth="1.5" />
                    <circle cx="312" cy="158" r="3.5" fill="#38bdf8" />
                  </g>

                  {/* DOCTOR'S ERGONOMIC HIGH-BACK SWIVEL CHAIR */}
                  <g transform="translate(290, 150)">
                    {/* Star Base with 5 Casters */}
                    <line x1="0" y1="40" x2="-14" y2="45" stroke="#ede8d0" strokeWidth="2" />
                    <line x1="0" y1="40" x2="14" y2="45" stroke="#ede8d0" strokeWidth="2" />
                    <line x1="0" y1="40" x2="0" y2="48" stroke="#ede8d0" strokeWidth="2" />
                    {/* Gas Lift Cylinder */}
                    <line x1="0" y1="24" x2="0" y2="40" stroke="#8b5cf6" strokeWidth="3" />
                    {/* Cushioned Seat */}
                    <ellipse cx="0" cy="22" rx="16" ry="9" fill="#2d1252" stroke="#c084fc" strokeWidth="1.5" />
                    {/* High-Back Mesh Lumbar Support */}
                    <path d="M -12 20 L -10 -8 Q 0 -14 10 -8 L 12 20 Z" fill="#1b0834" stroke="#c084fc" strokeWidth="1.8" />
                    {/* Headrest */}
                    <ellipse cx="0" cy="-14" rx="9" ry="4.5" fill="#3b186d" stroke="#ede8d0" strokeWidth="1.2" />
                  </g>

                  {/* PATIENT CONSULTATION CHAIR (Front of Desk) */}
                  <g transform="translate(225, 240)">
                    <ellipse cx="0" cy="10" rx="13" ry="7" fill="#1e0c38" stroke="#ede8d0" strokeWidth="1.2" />
                    <path d="M -10 10 L -9 -2 Q 0 -6 9 -2 L 10 10 Z" fill="#140728" stroke="#ede8d0" strokeWidth="1.2" />
                  </g>
                </g>
              )}

              {/* ========================================================================= */}
              {/* ROOM 2: REAL PATHOLOGY LAB (Labonix Diagnostics & Genomics)               */}
              {/* Features: Granite Central Island, High-Speed Centrifuge, Chemistry        */}
              {/* Analyzer with LCD, Binocular Microscope, 6 Test Tubes, Pipettes & Reagents*/}
              {/* ========================================================================= */}
              {selectedRoom.id === 'labs' && (
                <g id="realistic-lab-fixtures">
                  {/* WALL FIXTURE: Reagent Shelving Matrix on Left Wall */}
                  <g transform="translate(105, 55)">
                    <polygon points="0,30 65,0 65,-25 0,5" fill="#08182b" stroke="#38bdf8" strokeWidth="1.2" />
                    {/* Reagent bottles with dropper caps */}
                    <rect x="12" y="10" width="8" height="14" rx="1.5" fill="#f59e0b" opacity="0.9" />
                    <rect x="26" y="4" width="9" height="16" rx="1.5" fill="#38bdf8" opacity="0.9" />
                    <rect x="42" y="-2" width="8" height="15" rx="1.5" fill="#10b981" opacity="0.9" />
                  </g>

                  {/* HEAVY-DUTY GRANITE LABORATORY ISLAND BENCH */}
                  <g id="lab-island-workbench">
                    {/* Stainless Steel Base Cabinet */}
                    <polygon points="150,210 150,240 290,300 290,270" fill="#051525" stroke="#38bdf8" strokeWidth="1" />
                    <polygon points="290,270 290,300 400,245 400,215" fill="#0a1f34" stroke="#38bdf8" strokeWidth="1" />

                    {/* Black Granite Chemical-Resistant Countertop */}
                    <polygon points="140,205 285,135 410,195 265,265" fill="#0b2238" stroke="#38bdf8" strokeWidth="2" />
                    <polygon points="140,205 265,265 265,272 140,212" fill="#061626" stroke="#38bdf8" strokeWidth="1" />
                    <polygon points="265,265 410,195 410,202 265,272" fill="#091b2e" stroke="#38bdf8" strokeWidth="1" />

                    {/* AUTOMATED BIOCHEMISTRY ANALYZER UNIT (Right side of bench) */}
                    <g transform="translate(325, 155)">
                      <polygon points="0,0 45,-22 75,-8 30,14" fill="#041220" stroke="#38bdf8" strokeWidth="1.5" />
                      <polygon points="0,0 30,14 30,-32 0,-46" fill="#081e32" stroke="#38bdf8" strokeWidth="1.2" />
                      <polygon points="30,14 75,-8 75,-54 30,-32" fill="#0c2a46" stroke="#38bdf8" strokeWidth="1.2" />
                      {/* Analyzer Touchscreen Display */}
                      <polygon points="34,2 68,-15 68,-42 34,-25" fill="#032b44" stroke="#22d3ee" strokeWidth="1.5" />
                      <text x="40" y="-12" fill="#22d3ee" fontSize="6.5" fontFamily="monospace">TX-8821</text>
                      <path d="M 38 -20 Q 50 -32 64 -20" fill="none" stroke="#34d399" strokeWidth="1.2" />
                    </g>

                    {/* HIGH-SPEED AUTOMATED CENTRIFUGE (Left side of bench) */}
                    <g transform="translate(195, 195)">
                      {/* Outer Cylindrical Body */}
                      <ellipse cx="0" cy="0" rx="30" ry="16" fill="#06182c" stroke="#38bdf8" strokeWidth="2" />
                      <ellipse cx="0" cy="-6" rx="28" ry="14" fill="#09223c" stroke="#38bdf8" strokeWidth="1" />
                      {/* Transparent Dome Lid */}
                      <ellipse cx="0" cy="-10" rx="22" ry="11" fill="rgba(56, 189, 248, 0.25)" stroke="#ede8d0" strokeWidth="1.2" />
                      {/* Spinning Tube Rotor with Color Caps */}
                      <circle cx="-12" cy="-10" r="3" fill="#a855f7" />
                      <circle cx="12" cy="-10" r="3" fill="#38bdf8" />
                      <circle cx="0" cy="-16" r="3" fill="#f43f5e" />
                      <circle cx="0" cy="-4" r="3" fill="#10b981" />
                      <circle cx="0" cy="-10" r="4.5" fill="#ede8d0" />
                    </g>

                    {/* PRECISION BINOCULAR MICROSCOPE (Center of bench) */}
                    <g transform="translate(265, 175)">
                      {/* Heavy Horseshoe Base */}
                      <ellipse cx="0" cy="14" rx="14" ry="7" fill="#081e33" stroke="#ede8d0" strokeWidth="1.2" />
                      {/* Stage Plate */}
                      <polygon points="-12,4 12,-6 18,-3 -6,7" fill="#030c16" stroke="#38bdf8" strokeWidth="1" />
                      {/* Glass Slide on Stage with illuminated specimen dot */}
                      <line x1="-3" y1="0" x2="6" y2="-4" stroke="#ede8d0" strokeWidth="1.5" />
                      <circle cx="1.5" cy="-2" r="1.5" fill="#f43f5e" />
                      {/* Revolving Objective Turret */}
                      <circle cx="2" cy="-10" r="4" fill="#38bdf8" />
                      <line x1="2" y1="-6" x2="2" y2="0" stroke="#ede8d0" strokeWidth="2" />
                      {/* Dual Angled Eyepieces */}
                      <line x1="2" y1="-14" x2="-4" y2="-28" stroke="#38bdf8" strokeWidth="2.5" />
                      <line x1="2" y1="-14" x2="8" y2="-28" stroke="#38bdf8" strokeWidth="2.5" />
                      <circle cx="-4" cy="-28" r="2.5" fill="#ede8d0" />
                      <circle cx="8" cy="-28" r="2.5" fill="#ede8d0" />
                    </g>

                    {/* ACRYLIC TEST TUBE RACK WITH 6 COLOR-CODED TUBES */}
                    <g transform="translate(215, 230)">
                      <polygon points="0,0 45,-20 55,-15 10,5" fill="#0c253d" stroke="#38bdf8" strokeWidth="1" />
                      {/* 6 Tubes with real medical stopper colors */}
                      {[
                        { x: 4, y: 1, cap: '#a855f7', label: 'EDTA' },
                        { x: 12, y: -3, cap: '#f43f5e', label: 'SERUM' },
                        { x: 20, y: -7, cap: '#38bdf8', label: 'CITRATE' },
                        { x: 28, y: -11, cap: '#10b981', label: 'HEPARIN' },
                        { x: 36, y: -15, cap: '#f59e0b', label: 'GEL' },
                        { x: 44, y: -19, cap: '#9ca3af', label: 'FLUOR' }
                      ].map((t, idx) => (
                        <g key={idx} transform={`translate(${t.x}, ${t.y})`}>
                          {/* Glass tube body */}
                          <rect x="0" y="-18" width="5" height="20" rx="2.5" fill="rgba(255,255,255,0.18)" stroke="#ede8d0" strokeWidth="0.8" />
                          {/* Liquid level */}
                          <rect x="0.5" y="-10" width="4" height="11" rx="1.5" fill={t.cap} opacity="0.6" />
                          {/* Rubber Cap */}
                          <rect x="-0.5" y="-21" width="6" height="4" rx="1.5" fill={t.cap} />
                        </g>
                      ))}
                    </g>

                    {/* MICROPIPETTE ROTATING CAROUSEL */}
                    <g transform="translate(165, 220)">
                      <line x1="0" y1="0" x2="0" y2="-25" stroke="#ede8d0" strokeWidth="2" />
                      <circle cx="0" cy="0" rx="6" ry="3" fill="#38bdf8" />
                      {/* 3 Pipettes Hanging */}
                      <line x1="-5" y1="-22" x2="-8" y2="-8" stroke="#38bdf8" strokeWidth="2" />
                      <line x1="5" y1="-22" x2="8" y2="-8" stroke="#f43f5e" strokeWidth="2" />
                      <line x1="0" y1="-25" x2="0" y2="-10" stroke="#10b981" strokeWidth="2" />
                    </g>
                  </g>
                </g>
              )}

              {/* ========================================================================= */}
              {/* ROOM 3: REAL HOSPITAL INPATIENT WARD (CureNEST Critical Care / ICU)       */}
              {/* Features: Motorized ICU Bed, Dual IV Drip Pole, ICU Vitals Monitor,       */}
              {/* Rolling Mayo Overbed Table, Bedside Console & Privacy Curtain             */}
              {/* ========================================================================= */}
              {selectedRoom.id === 'hospital' && (
                <g id="realistic-hospital-fixtures">
                  {/* WALL FIXTURE: ICU Multi-Parameter Vital Monitor on Articulated Arm */}
                  <g transform="translate(180, 55)">
                    {/* Articulated Wall Mount Bracket */}
                    <line x1="-15" y1="15" x2="5" y2="8" stroke="#67e8f9" strokeWidth="2" />
                    <line x1="5" y1="8" x2="10" y2="0" stroke="#67e8f9" strokeWidth="2" />
                    {/* Monitor Chassis */}
                    <polygon points="10,0 55,-22 75,-12 30,10" fill="#061a24" stroke="#06b6d4" strokeWidth="1.5" />
                    <polygon points="10,0 30,10 30,-28 10,-38" fill="#092736" stroke="#06b6d4" strokeWidth="1.2" />
                    <polygon points="30,10 75,-12 75,-50 30,-28" fill="#0d384e" stroke="#06b6d4" strokeWidth="1.2" />
                    {/* Screen Interface with Live Vitals */}
                    <polygon points="33,6 71,-13 71,-45 33,-26" fill="#04121a" stroke="#22d3ee" strokeWidth="1.2" />
                    {/* Lead II ECG Rhythm Curve (Green) */}
                    <path d="M 36,-10 L 44,-10 L 47,-18 L 50,-2 L 53,-12 L 56,-10 L 68,-10" fill="none" stroke="#34d399" strokeWidth="1.4" filter="drop-shadow(0 0 4px #34d399)" />
                    {/* Digital Readout */}
                    <text x="36" y="-35" fill="#34d399" fontSize="6.5" fontFamily="monospace" fontWeight="bold">HR 72</text>
                    <text x="54" y="-35" fill="#38bdf8" fontSize="6.5" fontFamily="monospace" fontWeight="bold">SpO2 99%</text>
                  </g>

                  {/* CEILING TRACK & PLEATED HOSPITAL PRIVACY CURTAIN */}
                  <g transform="translate(90, 80)">
                    {/* Ceiling Track */}
                    <path d="M 0 0 Q 60 -25 120 -15" fill="none" stroke="#ede8d0" strokeWidth="1.8" strokeDasharray="3 3" />
                    {/* Semi-transparent pleated curtain fabric draped */}
                    <path d="M 0 0 L 0 110 Q 15 105 30 115 L 30 -10 Z" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="1" />
                    <line x1="10" y1="-3" x2="10" y2="108" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                    <line x1="20" y1="-6" x2="20" y2="112" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                  </g>

                  {/* MOTORIZED ICU INPATIENT HOSPITAL BED */}
                  <g id="hospital-electric-bed">
                    {/* 4 Heavy-Duty Caster Wheels */}
                    <circle cx="165" cy="225" r="4" fill="#ede8d0" stroke="#06b6d4" strokeWidth="1" />
                    <circle cx="230" cy="195" r="4" fill="#ede8d0" stroke="#06b6d4" strokeWidth="1" />
                    <circle cx="270" cy="255" r="4" fill="#ede8d0" stroke="#06b6d4" strokeWidth="1" />
                    <circle cx="335" cy="225" r="4" fill="#ede8d0" stroke="#06b6d4" strokeWidth="1" />

                    {/* Metal Chassis Frame */}
                    <polygon points="160,215 235,180 340,215 265,250" fill="#082330" stroke="#06b6d4" strokeWidth="1.5" />

                    {/* Raised Articulated Backrest (45 degrees) */}
                    <polygon points="175,200 220,178 240,195 195,217" fill="#0c3244" stroke="#22d3ee" strokeWidth="1.5" />
                    {/* Clinical Mattress (Clean Medical Linen) */}
                    <polygon points="180,195 245,165 330,195 265,225" fill="#1b455c" stroke="#ede8d0" strokeWidth="1.8" />
                    {/* Contoured Hospital Pillow */}
                    <ellipse cx="215" cy="185" rx="14" ry="8" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />

                    {/* Collapsible Side Safety Railings */}
                    <g stroke="#67e8f9" strokeWidth="1.5">
                      <line x1="220" y1="210" x2="275" y2="185" />
                      <line x1="220" y1="218" x2="275" y2="193" />
                      <line x1="230" y1="205" x2="230" y2="222" />
                      <line x1="250" y1="195" x2="250" y2="212" />
                      <line x1="270" y1="187" x2="270" y2="204" />
                    </g>

                    {/* Footboard with Patient Chart Pocket */}
                    <polygon points="325,192 342,200 342,225 325,217" fill="#07202c" stroke="#06b6d4" strokeWidth="1.5" />
                    <rect x="328" y="202" width="10" height="12" rx="1" fill="#ede8d0" opacity="0.8" />
                  </g>

                  {/* MOBILE DUAL IV DRIP INFUSION POLE */}
                  <g transform="translate(145, 175)">
                    {/* 5-Wheel Star Base */}
                    <circle cx="0" cy="45" r="3.5" fill="#67e8f9" />
                    <line x1="0" y1="45" x2="-10" y2="48" stroke="#ede8d0" strokeWidth="1.8" />
                    <line x1="0" y1="45" x2="10" y2="48" stroke="#ede8d0" strokeWidth="1.8" />
                    <line x1="0" y1="45" x2="0" y2="52" stroke="#ede8d0" strokeWidth="1.8" />

                    {/* Stainless Steel Pole */}
                    <line x1="0" y1="45" x2="0" y2="-40" stroke="#ede8d0" strokeWidth="2.2" />
                    {/* Ram Horn Hooks */}
                    <path d="M -12 -35 C -12 -42, 0 -40, 0 -40 C 0 -40, 12 -42, 12 -35" fill="none" stroke="#ede8d0" strokeWidth="1.8" />

                    {/* IV Bag 1 (0.9% Normal Saline) */}
                    <rect x="-16" y="-35" width="9" height="18" rx="3" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" strokeWidth="1" />
                    <line x1="-11.5" y1="-17" x2="-11.5" y2="15" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />

                    {/* IV Bag 2 (Medication / Dextrose) */}
                    <rect x="7" y="-35" width="9" height="18" rx="3" fill="rgba(237, 232, 208, 0.35)" stroke="#ede8d0" strokeWidth="1" />
                    <line x1="11.5" y1="-17" x2="11.5" y2="10" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
                  </g>

                  {/* OVERBED MOBILE MAYO TRAY TABLE */}
                  <g transform="translate(260, 170)">
                    {/* Cantilever Base */}
                    <line x1="30" y1="55" x2="30" y2="15" stroke="#ede8d0" strokeWidth="2.2" />
                    <polygon points="0,15 30,0 45,6 15,21" fill="#0d3142" stroke="#67e8f9" strokeWidth="1.4" />
                    {/* Medication Cup */}
                    <ellipse cx="20" cy="10" rx="3" ry="1.5" fill="#ede8d0" />
                  </g>
                </g>
              )}

              {/* ========================================================================= */}
              {/* ROOM 4: REAL PHARMACY (PharmixO Dispensary & Cold-Chain Vault)             */}
              {/* Features: Medicine Shelving Matrix, Dispensing Counter with Barcode       */}
              {/* Scanner, POS e-Rx Screen, Automated Pill Counter, Cold-Chain Refrigerator */}
              {/* ========================================================================= */}
              {selectedRoom.id === 'pharmacy' && (
                <g id="realistic-pharmacy-fixtures">
                  {/* WALL FIXTURE: Illuminated Green Pharmacy Cross (+) on Back Wall */}
                  <g transform="translate(270, 42)">
                    <rect x="-6" y="-18" width="12" height="36" rx="3" fill="#10b981" filter="drop-shadow(0 0 10px #10b981)" />
                    <rect x="-18" y="-6" width="36" height="12" rx="3" fill="#10b981" filter="drop-shadow(0 0 10px #10b981)" />
                    <rect x="-4" y="-14" width="8" height="28" rx="2" fill="#ffffff" />
                    <rect x="-14" y="-4" width="28" height="8" rx="2" fill="#ffffff" />
                  </g>

                  {/* MODULAR MEDICINE STORAGE SHELVING MATRIX (Back Wall Left) */}
                  <g transform="translate(100, 60)">
                    {/* Multi-Bay Cabinet Frame */}
                    <polygon points="0,40 85,-3 85,75 0,118" fill="#150826" stroke="#ec4899" strokeWidth="1.5" />
                    {/* 4 Shelves */}
                    <line x1="0" y1="58" x2="85" y2="15" stroke="#ec4899" strokeWidth="1.2" />
                    <line x1="0" y1="78" x2="85" y2="35" stroke="#ec4899" strokeWidth="1.2" />
                    <line x1="0" y1="98" x2="85" y2="55" stroke="#ec4899" strokeWidth="1.2" />

                    {/* Shelf 1: Antibiotics Boxes (White/Pink & White/Blue) */}
                    <rect x="15" y="42" width="7" height="10" rx="1" fill="#ede8d0" />
                    <rect x="25" y="37" width="8" height="9" rx="1" fill="#ec4899" />
                    <rect x="36" y="31" width="10" height="11" rx="1" fill="#38bdf8" />
                    <rect x="50" y="24" width="8" height="10" rx="1" fill="#ede8d0" />
                    <rect x="62" y="18" width="9" height="11" rx="1" fill="#10b981" />

                    {/* Shelf 2: Cardiac & Vitals Packaging */}
                    <rect x="12" y="62" width="10" height="9" rx="1" fill="#38bdf8" />
                    <rect x="25" y="55" width="8" height="11" rx="1" fill="#ede8d0" />
                    <rect x="36" y="50" width="9" height="9" rx="1" fill="#f43f5e" />
                    <rect x="48" y="44" width="11" height="10" rx="1" fill="#ede8d0" />

                    {/* Shelf 3: Liquid Syrups & Vials */}
                    <ellipse cx="20" cy="74" rx="3" ry="5" fill="#f59e0b" />
                    <ellipse cx="32" cy="68" rx="3" ry="5" fill="#f59e0b" />
                    <ellipse cx="44" cy="62" rx="3.5" ry="6" fill="#38bdf8" />
                    <ellipse cx="58" cy="55" rx="3.5" ry="6" fill="#ec4899" />
                  </g>

                  {/* COLD-CHAIN MEDICAL REFRIGERATOR (+4.0°C) */}
                  <g transform="translate(340, 75)">
                    {/* Fridge Housing */}
                    <polygon points="0,0 55,28 55,90 0,62" fill="#0d1b30" stroke="#38bdf8" strokeWidth="1.5" />
                    {/* Glass Door with Blue Cold-Chain LED Glow */}
                    <polygon points="4,5 50,28 50,85 4,62" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="1" />
                    {/* Digital Temperature Readout */}
                    <rect x="15" y="12" width="24" height="8" rx="1.5" fill="#040e1c" stroke="#38bdf8" strokeWidth="0.8" />
                    <text x="18" y="18" fill="#38bdf8" fontSize="5.5" fontFamily="monospace">+4.0°C</text>
                    {/* Vaccines inside */}
                    <rect x="14" y="26" width="6" height="10" fill="#ede8d0" />
                    <rect x="24" y="31" width="6" height="10" fill="#ec4899" />
                  </g>

                  {/* PROFESSIONAL DISPENSARY SERVICE COUNTER */}
                  <g id="pharmacy-dispensary-counter">
                    {/* Counter Base */}
                    <polygon points="175,205 175,235 295,295 295,265" fill="#18072c" stroke="#ec4899" strokeWidth="1" />
                    <polygon points="295,265 295,295 390,248 390,218" fill="#220b3e" stroke="#ec4899" strokeWidth="1" />

                    {/* Counter Top Surface */}
                    <polygon points="165,200 290,138 395,190 270,252" fill="#280c48" stroke="#ec4899" strokeWidth="2" />
                    <polygon points="165,200 270,252 270,258 165,206" fill="#140424" stroke="#ec4899" strokeWidth="1" />
                    <polygon points="270,252 395,190 395,196 270,258" fill="#1c0732" stroke="#ec4899" strokeWidth="1" />

                    {/* Protective Glass Hygiene Screen */}
                    <polygon points="180,192 275,145 275,105 180,152" fill="rgba(255,255,255,0.08)" stroke="rgba(237,232,208,0.4)" strokeWidth="1.2" />

                    {/* POS e-Rx VALIDATION TOUCHSCREEN */}
                    <g transform="translate(230, 168)">
                      <line x1="10" y1="18" x2="10" y2="25" stroke="#ede8d0" strokeWidth="2" />
                      <polygon points="0,18 24,6 24,-10 0,2" fill="#0c0318" stroke="#ec4899" strokeWidth="1.5" />
                      <text x="3" y="10" fill="#ec4899" fontSize="5.5" fontFamily="monospace">e-Rx #9921</text>
                      <path d="M 4 2 L 18 -5" stroke="#34d399" strokeWidth="1.5" />
                    </g>

                    {/* OMNIDIRECTIONAL 2D BARCODE SCANNER with Laser Crosshair */}
                    <g transform="translate(285, 185)">
                      <cylinder />
                      <rect x="0" y="0" width="12" height="15" rx="3" fill="#100522" stroke="#ede8d0" strokeWidth="1.2" />
                      <circle cx="6" cy="7" r="3" fill="#f43f5e" />
                      {/* Red Scanning Laser Line */}
                      <line x1="-10" y1="14" x2="22" y2="0" stroke="#f43f5e" strokeWidth="1.5" filter="drop-shadow(0 0 4px #f43f5e)" />
                    </g>

                    {/* DISPENSING TRAY & BLISTER PACKS */}
                    <g transform="translate(320, 185)">
                      <polygon points="0,0 25,-12 38,-5 13,7" fill="#0e041a" stroke="#ede8d0" strokeWidth="1" />
                      <ellipse cx="14" cy="-2" rx="4" ry="2" fill="#f59e0b" />
                      <ellipse cx="22" cy="-6" rx="4" ry="2" fill="#38bdf8" />
                    </g>
                  </g>
                </g>
              )}
            </svg>
          </div>

          {/* Telemetry Status Bar */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-xs font-mono text-stonewarm/90 gap-2 relative z-10">
            <span className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: selectedRoom.accent }}
              />
              <span>STATUS: ONLINE &amp; CRYPTOGRAPHICALLY SYNCED</span>
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

          {/* Continuous Data Highway */}
          <div className="pt-2">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 block font-semibold">
                CONTINUOUS DATA HIGHWAY
              </span>
              <p className="text-xs font-mono text-stonewarm/90">
                {selectedRoom.telemetry}
              </p>
            </div>
          </div>

          {/* Action CTAs: Direct Page + Live URL */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to={selectedRoom.route}
              className="px-6 py-3 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-lg flex items-center gap-2"
            >
              <span>Explore Dedicated {selectedRoom.name.split(' ')[0]} Page</span>
              <span>→</span>
            </Link>

            {selectedRoom.liveUrl && (
              <a
                href={selectedRoom.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/[0.06] border border-cyan-400/50 text-cyan-200 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-cyan-300 transition-all flex items-center gap-1.5"
              >
                <span>Launch {selectedRoom.liveUrl.replace('https://', '')}</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
