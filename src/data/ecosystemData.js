// ============================================================================
// RBCUREXIA ECOSYSTEM DATA ARCHITECTURE
// Comprehensive data definitions for all primary routes, specialized products,
// 24 clinical services, clinician network nodes, and platform capabilities.
// ============================================================================

export const PRIMARY_NAV_ITEMS = [
  {
    num: '01',
    label: 'Overview',
    display: '01 Overview',
    path: '/overview',
    title: 'The Living Heart · Overview',
    desc: 'Cinematic platform introduction, connected healthcare ecosystem, and interactive 3D topology.'
  },
  {
    num: '02',
    label: 'Mission',
    display: '02 Mission',
    path: '/mission',
    title: 'Our Mission & Visual Story',
    desc: 'Editorial manifesto, overcoming healthcare fragmentation, and human-centered clinical intuition.'
  },
  {
    num: '03',
    label: 'Panacea',
    display: '03 Panacea',
    path: '/panacea',
    title: 'Panacea Clinical OS & Workstation',
    desc: 'The next-generation clinician cockpit: e-Rx handwriting AI, adverse drug screening, and smart OPD queues.'
  },
  {
    num: '04',
    label: 'Labonix',
    display: '04 Labonix',
    path: '/labonix',
    title: 'Labonix Pathology Diagnostic Gateway',
    desc: 'Autonomous pathology laboratory telemetry, analyzer connectivity, and 42ms specimen tracking.'
  },
  {
    num: '05',
    label: 'PulsePort',
    display: '05 PulsePort',
    path: '/pulseport',
    title: 'PulsePort Biometric & Wearables',
    desc: 'Facial biometric check-in kiosks and 24/7 continuous Medicore wearable ambulatory vital monitoring.'
  },
  {
    num: '06',
    label: 'Architecture',
    display: '06 Architecture',
    path: '/architecture',
    title: 'Complete 24-Service Architecture',
    desc: 'The 4 healthcare nodes (Clinics, Hospital, Labs, Pharmacies) and cryptographic data vault.'
  },
  {
    num: '07',
    label: 'Network',
    display: '07 Network',
    path: '/network',
    title: 'Plugins Social · Clinician Network',
    desc: 'Verified specialist community, inter-departmental referrals, and clinical clan knowledge exchange.'
  },
  {
    num: '08',
    label: 'Concierge',
    display: '08 Concierge',
    path: '/concierge',
    title: 'Executive Concierge & Mumbai HQ',
    desc: 'Hospital deployment briefings, healthcare tech seminars, and clinical technology internships.'
  }
];

export const SPECIALIZED_PRODUCTS = [
  {
    id: 'panacea',
    num: '03',
    name: 'Panacea Clinical OS',
    tagline: 'Chairside Consultation Cockpit & Real-Time EHR',
    badge: 'OUTPATIENT & CLINICS',
    path: '/panacea',
    liveUrl: 'https://panaceadashboard.in/',
    accent: '#8b5cf6',
    icon: 'steth',
    description: 'Unified electronic health record workstation featuring natural stylus digital pad handwriting recognition, adverse drug interaction screening, and WhatsApp QR queue check-ins.'
  },
  {
    id: 'curenest',
    num: '04.A',
    name: 'CureNEST Ward OS',
    tagline: 'Every Bed, Every Ward, One Nest of Care',
    badge: 'INPATIENT & ICU',
    path: '/curenest',
    accent: '#06b6d4',
    icon: 'nest',
    description: 'Enterprise hospital inpatient and critical care operating system. Unifies real-time bed telemetry, nurse shift handover boards, and automated infusion rate monitoring.'
  },
  {
    id: 'labonix',
    num: '04',
    name: 'Labonix Gateway',
    tagline: 'Pathology Diagnostics & Automated Reagent Ops',
    badge: 'DIAGNOSTIC LABS',
    path: '/labonix',
    liveUrl: 'https://labonix.in',
    accent: '#38bdf8',
    icon: 'flask',
    description: 'High-throughput laboratory information gateway connecting hospital doctors directly to automated analyzers, barcode specimen tracking, and critical value alerting.'
  },
  {
    id: 'pharmixo',
    num: '04.C',
    name: 'Pharmixo Portal',
    tagline: 'GPS-Verified Medication Dispatch & Stock AI',
    badge: 'PHARMACY NETWORK',
    path: '/pharmixo',
    accent: '#ec4899',
    icon: 'rx',
    description: 'Intelligent hospital and retail pharmacy management portal. Coordinates cryptographic e-prescription fulfillment, predictive stock re-ordering, and expiry tracking.'
  },
  {
    id: 'pulseport',
    num: '05',
    name: 'PulsePort Telemetry',
    tagline: 'Biometric Identity & Continuous Wearable Streams',
    badge: 'WEARABLES & VITALS',
    path: '/pulseport',
    liveUrl: 'https://pulseport.in',
    accent: '#a855f7',
    icon: 'bio',
    description: 'Patient biometric identification terminals paired with Medicore wearable biosensor integration for 24/7 post-discharge ambulatory monitoring and vital anomaly alarms.'
  },
  {
    id: 'network',
    num: '07',
    name: 'Plugins Social',
    tagline: 'Verified Specialist Social & Clinical Network',
    badge: 'PLUGINS.SOCIAL',
    path: '/network',
    liveUrl: 'https://plugins.social/',
    accent: '#c084fc',
    icon: 'network',
    description: 'Verified clinical knowledge-sharing community connecting medical practitioners, inter-departmental referrals, and clinical clan exchanges.'
  }
];

export const ALL_24_SERVICES_DATA = [
  { id: 'doc-essentials', cat: 'support', catName: 'Clinical Support Tool', badge: 'REF', title: 'Doc Essentials', sub: 'Guidelines & references', desc: 'Instant chairside clinical protocols, drug dosage calculators, and specialty treatment guidelines.' },
  { id: 'report-vault', cat: 'support', catName: 'Clinical Support Tool', badge: 'AI', title: 'Medical report vault', sub: 'AI report summaries', desc: 'Cryptographic EHR vault that parses pathology PDFs, X-rays, and scans into structured AI clinical summaries.' },
  { id: 'drug-locker', cat: 'support', catName: 'Clinical Support Tool', badge: 'SAFETY', title: 'Drug Locker', sub: 'Meds & interactions', desc: 'Real-time adverse drug interaction screening, allergy contraindications, and approved generic substitutes.' },
  { id: 'digital-pad', cat: 'support', catName: 'Clinical Support Tool', badge: 'PEN', title: 'Digital Pad', sub: 'Handwritten eRx, synced', desc: 'Write naturally with stylus or tablet pen while Panacea syncs and structures your handwritten e-Rx live.' },
  { id: 'labonix', cat: 'support', catName: 'Clinical Support Tool', badge: 'LABS', title: 'Labonix Gateway', sub: 'Order, track & restock', desc: 'Order diagnostic pathology panels directly from the patient chart, monitor sample processing status, and automate laboratory reagent restocking.' },
  { id: 'issued-erx', cat: 'support', catName: 'Clinical Support Tool', badge: 'HISTORY', title: 'Issued Prescriptions', sub: 'Full eRx history', desc: 'Complete cryptographic audit trail of all verified prescriptions, dispensations, and patient refills.' },
  { id: 'handwriting-ai', cat: 'support', catName: 'Clinical Support Tool', badge: 'AI', title: 'Handwriting Recognition', sub: 'Notes to structured data', desc: 'Clinical OCR engine converting handwritten bedside notes into structured Electronic Health Record fields.' },
  { id: 'trial-desk', cat: 'support', catName: 'Clinical Support Tool', badge: 'TRIALS', title: 'Trial Desk', sub: 'Sponsor studies & CRFs', desc: 'Manage multi-center clinical trials, patient cohorts, and electronic Case Report Forms (CRFs).' },

  { id: 'panacea-exclusive', cat: 'analytics', catName: 'Analytics, Risk & Ops', badge: 'SUPPLY', title: 'Panacea Exclusive', sub: 'Doctor-only deals & supplies', desc: 'Curated B2B surgical equipment, diagnostic devices, and clinic consumables for verified practitioners.' },
  { id: 'appointments', cat: 'analytics', catName: 'Analytics, Risk & Ops', badge: 'QUEUE', title: 'Appointments & Follow-ups', sub: 'Bookings, walk-ins & reminders', desc: 'Smart OPD queue scheduling with WhatsApp QR check-in and multilingual AI voice follow-ups.' },
  { id: 'pharmixo', cat: 'analytics', catName: 'Analytics, Risk & Ops', badge: 'PHARMACY', title: 'Pharmixo Portal', sub: 'Your in-house pharmacy', desc: 'Connects in-house and partner pharmacies to GPS-coordinated verified medicine dispatch.' },
  { id: 'course-planner', cat: 'analytics', catName: 'Analytics, Risk & Ops', badge: 'PLANNER', title: 'Course Planner', sub: 'Biometric follow-up plans', desc: 'Multi-visit treatment schedules verified via facial biometric terminals and wearable vitals.' },
  { id: 'treatment-planner', cat: 'analytics', catName: 'Analytics, Risk & Ops', badge: 'PATHWAYS', title: 'Advanced Treatment Planner', sub: 'Multi-phase care pathways', desc: 'Architect complex surgical, cardiac, and chronic care pathways across multidisciplinary teams.' },
  { id: 'staff-rota', cat: 'analytics', catName: 'Analytics, Risk & Ops', badge: 'ROSTER', title: 'Staff Rota Scheduler', sub: 'Shifts, attendance & leave', desc: 'Automated hospital duty rosters for doctors, nurses, and ward staff synced with biometric attendance.' },
  { id: 'inventory', cat: 'analytics', catName: 'Analytics, Risk & Ops', badge: 'STOCK', title: 'Inventory Management', sub: 'Supplies & restock alerts', desc: 'Predictive pharmacy and ward inventory monitoring with automated low-stock and expiry alerts.' },
  { id: 'patient-edu', cat: 'analytics', catName: 'Analytics, Risk & Ops', badge: 'AI EDU', title: 'Personalized Patient Education', sub: 'AI handouts for patients', desc: 'Generates custom post-consultation care handouts in regional Indian languages.' },
  { id: 'research-copilot', cat: 'analytics', catName: 'Analytics, Risk & Ops', badge: 'AI LIT', title: 'Research Copilot', sub: 'Summarise medical literature', desc: 'AI medical literature synthesizer that distills peer-reviewed journals and clinical studies.' },
  { id: 'scriptorium', cat: 'analytics', catName: 'Analytics, Risk & Ops', badge: 'LIBRARY', title: 'Scriptorium', sub: 'Your mini medical library', desc: 'Personal digital medical library of saved protocols, research papers, and teaching cases.' },

  { id: 'clinical-mode', cat: 'core', catName: 'Core Platform Hub', badge: 'PRIMARY', title: 'Clinical Mode', sub: 'AI-powered safety checks & prescriptions.', desc: 'Primary consultation cockpit with prescription cross-checking and real-time EHR charting.' },
  { id: 'curenest', cat: 'core', catName: 'Core Platform Hub', badge: 'WARD OS', title: 'CureNEST', sub: 'Every bed, every ward, one nest of care.', desc: 'Enterprise IPD, ICU, and hospital ward operating system unifying bed telemetry and nursing handoffs.' },
  { id: 'horizon', cat: 'core', catName: 'Core Platform Hub', badge: 'VIRTUAL', title: 'Horizon', sub: 'Your virtual clinic video consults & teams.', desc: 'HD telemedicine video consultations with synced Digital Pad e-Rx and multi-doctor case rooms.' },
  { id: 'plugins-social', cat: 'core', catName: 'Core Platform Hub', badge: 'NETWORK', title: 'Plugins Social', sub: "Doctors' network posts, chat & clans.", desc: 'Verified peer network for clinicians with case publishing, specialty clans, and hospital referrals.' },
  { id: 'biometric-id', cat: 'core', catName: 'Core Platform Hub', badge: 'IDENTITY', title: 'Biometric ID', sub: 'Enroll new or verify returning patients.', desc: 'Facial recognition scanners and biometric wristbands for streamlined patient verification.' },
  { id: 'settings', cat: 'core', catName: 'Core Platform Hub', badge: 'SYSTEM', title: 'Settings', sub: 'Configure application preferences.', desc: 'Configure clinic branches, prescription headers, WhatsApp QR rules, and security permissions.' }
];

export const CLINICIAN_NETWORK_NODES = [
  {
    id: 0,
    initials: 'DA',
    name: 'Dr. Ayush',
    role: 'Clinical Lead · Verified',
    rank: 'VERIFIED CLINICIAN PROFILE · MIRA ROAD NETWORK',
    metric: 'Demonstration Profile · Clinical Lead',
    fullName: 'Dr. Ayush — Clinical Operations & Case Publishing',
    clan: 'Clinical Operations',
    bio: 'Shares peer-reviewed clinical case notes, treatment pathways, and surgical outcomes across the Plugins Social clinician network in Mira Road and Mumbai.',
    location: 'Mira Road, Mumbai'
  },
  {
    id: 1,
    initials: 'DF',
    name: 'Dr. Farrukh',
    role: 'Cardiology',
    rank: 'VERIFIED SPECIALIST · CARDIOLOGY CLAN',
    metric: 'Demonstration Profile · Interventional Cardiology',
    fullName: 'Dr. Farrukh — Senior Cardiologist',
    clan: 'Cardiology Clan',
    bio: 'Active contributor in the Mumbai Cardiac Clan—sharing ECG telemetry protocols and interventional case notes with peer specialists.',
    location: 'South Mumbai'
  },
  {
    id: 2,
    initials: 'DN',
    name: 'Dr. Nina T.',
    role: 'Clinical Research',
    rank: 'VERIFIED FELLOW · CLINICAL RESEARCH',
    metric: 'Demonstration Profile · 9 Published Protocols',
    fullName: 'Dr. Nina Tripathi — Clinical Research Lead',
    clan: 'Research Clan',
    bio: 'Collaborates via Research Copilot and Scriptorium to author and review multi-disciplinary treatment guidelines across partner clinics.',
    location: 'Bandra Kurla Complex'
  },
  {
    id: 3,
    initials: 'EH',
    name: 'Evershine Hub',
    role: 'Partner Hospital',
    rank: 'INSTITUTIONAL PARTNER · CURENEST HUB',
    metric: 'Demonstration Profile · Multi-Specialty Hospital',
    fullName: 'Evershine Hospital — Connected Ward Hub',
    clan: 'Hospital Network',
    bio: 'Synchronizes IPD ward bed telemetry, Labonix pathology diagnostics, and inter-hospital specialist referrals in real time.',
    location: 'Dahisar West, Mumbai'
  },
  {
    id: 4,
    initials: 'AK',
    name: 'Dr. Abdul K.',
    role: 'Surgery Lead',
    rank: 'VERIFIED SURGEON · SURGICAL CLAN',
    metric: 'Demonstration Profile · General & Laparoscopic Surgery',
    fullName: 'Dr. Abdul K. — Chief of Surgery',
    clan: 'Surgical Clan',
    bio: 'Utilizes Advanced Treatment Planner and Horizon virtual consults for pre-operative and post-operative multidisciplinary surgical boards.',
    location: 'Andheri West, Mumbai'
  },
  {
    id: 5,
    initials: 'DS',
    name: 'Dr. Shakeel',
    role: 'Critical Care / ICU',
    rank: 'VERIFIED INTENSIVIST · CRITICAL CARE',
    metric: 'Demonstration Profile · ICU & Wearable Telemetry',
    fullName: 'Dr. Shakeel — Critical Care & ICU Specialist',
    clan: 'Critical Care Clan',
    bio: 'Integrates continuous Medicore wearable biosensor streams into post-discharge follow-up plans for high-acuity patients.',
    location: 'Borivali West, Mumbai'
  }
];

export const MISSION_PILLARS = [
  {
    num: '01',
    title: 'Connected Clinical Workflows',
    headline: 'Zero Paper Fragmentations Between Departments',
    desc: 'Eliminating manual transcription errors and handwritten illegibility through natural stylus capture, digital pad OCR, and unified electronic record dossiers.'
  },
  {
    num: '02',
    title: 'Real-Time Telemetry & Safety',
    headline: 'Continuous Physiological Awareness at Bedside & Home',
    desc: 'Streaming patient biosensors, ICU bed vitals, and ambulatory wearables directly into decision-support cockpits with automatic adverse drug interaction triggers.'
  },
  {
    num: '03',
    title: 'Human-Centered Clinical Intuition',
    headline: 'Technology that Disappears into the Consultation',
    desc: 'Designing interfaces that preserve doctor-patient eye contact, removing screen friction so clinicians spend their energy listening, assessing, and healing.'
  },
  {
    num: '04',
    title: 'Cryptographic Sovereignty & Auditability',
    headline: 'Patient-Owned Longitudinal Health Records',
    desc: 'End-to-end cryptographic hashing, verified digital signatures on prescriptions, and tamper-evident audit trails preserving patient privacy and medical dignity.'
  },
  {
    num: '05',
    title: 'Inter-Institutional Specialist Synergy',
    headline: 'Collaborative Clinical Wisdom Across Maharashtra',
    desc: 'Breaking down institutional silos through verified specialist clan channels, instant tele-radiology reviews, and seamless inter-hospital referrals.'
  }
];

export const MUMBAI_HQ_INFO = {
  name: 'RBCUREXIA HEALTHCARE TECHNOLOGIES',
  campus1: 'Unit No. 5, Sarita Apt, Rustomjee Irani Marg, Jaywant Sawant Marg, Dahisar West, Mumbai, Maharashtra 400068',
  campus2: '803/A Wing, Jayram Heights, New Link Road, Dahisar West, Mumbai, Maharashtra 400068',
  puneOffice: 'Office no 215, 2nd floor, Onyx Bizmark 52, Tilekar Nagar, Kondhwa Budruk, Pune, Maharashtra 411048',
  phone: '+91 9987976863',
  email: 'support@rbcurexia.com',
  workingHours: 'Monday – Saturday: 08:00 – 20:00 IST · Emergency Desk 24/7'
};
