import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function initializeRbcurexiaExperience({ submitContact, subscribeNewsletter }) {
  if (window.__RBCUREXIA_EXPERIENCE_INITIALIZED__) return;
  window.__RBCUREXIA_EXPERIENCE_INITIALIZED__ = true;

  gsap.registerPlugin(ScrollTrigger);
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.THREE = THREE;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HEART_ALBEDO_URI = "/assets/embedded-d0777971a3aa.webp";
  const HEART_MAPS_URI = "/assets/embedded-938de1fa9c5f.webp";
  const APP_SCREENS = ["/assets/embedded-23185802ea52.webp", "/assets/embedded-af032b3e1ffb.webp", "/assets/embedded-12be7c2af358.webp"];

  const SVG_ICONS = {
    book: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
    vault: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>',
    pill: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/></svg>',
    pen: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>',
    flask: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 3h6m-5 0v5.5L5.5 16A2 2 0 007.2 19h9.6a2 2 0 001.7-3L14 8.5V3"/></svg>',
    history: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/></svg>',
    ocr: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
    trial: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 8v8m-4-4h8"/></svg>',
    deals: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>',
    calendar: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    rx: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 4h6a4 4 0 010 8H6V4zm0 8l12 8M18 12l-6 8"/></svg>',
    course: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.5 8.5l7 7"/></svg>',
    pathway: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 7v4m-6 5v-4h12v4"/></svg>',
    rota: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    stock: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>',
    edu: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    sparkle: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"/></svg>',
    library: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>',
    steth: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6v0a6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3"/><path d="M8 15v1a6 6 0 006 6v0a6 6 0 006-6v-4"/><circle cx="20" cy="10" r="2"/></svg>',
    nest: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 00-9-9z"/><path d="M12 6v6l4 2"/></svg>',
    video: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
    network: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    bio: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7V5a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2m0 10v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/><circle cx="12" cy="12" r="3"/></svg>',
    gear: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9"/></svg>'
  };

  const ALL_24_SERVICES = [
    { id: 'doc-essentials', cat: 'support', catName: 'Clinical Support Tool', svg: SVG_ICONS.book, badge: 'REF', title: 'Doc Essentials', sub: 'Guidelines & references', desc: 'Instant chairside clinical protocols, drug dosage calculators, and specialty treatment guidelines.' },
    { id: 'report-vault', cat: 'support', catName: 'Clinical Support Tool', svg: SVG_ICONS.vault, badge: 'AI', title: 'Medical report vault', sub: 'AI report summaries', desc: 'Cryptographic EHR vault that parses pathology PDFs, X-rays, and scans into structured AI clinical summaries.' },
    { id: 'drug-locker', cat: 'support', catName: 'Clinical Support Tool', svg: SVG_ICONS.pill, badge: 'SAFETY', title: 'Drug Locker', sub: 'Meds & interactions', desc: 'Real-time adverse drug interaction screening, allergy contraindications, and approved generic substitutes.' },
    { id: 'digital-pad', cat: 'support', catName: 'Clinical Support Tool', svg: SVG_ICONS.pen, badge: 'PEN', title: 'Digital Pad', sub: 'Handwritten eRx, synced', desc: 'Write naturally with stylus or tablet pen while Panacea syncs and structures your handwritten e-Rx live.' },
    { id: 'labonix', cat: 'support', catName: 'Clinical Support Tool', svg: SVG_ICONS.flask, badge: 'LABS', title: 'Labonix Gateway', sub: 'Order, track & restock', desc: 'Order diagnostic pathology panels directly from the patient chart, monitor sample processing status, and automate laboratory reagent restocking.' },
    { id: 'issued-erx', cat: 'support', catName: 'Clinical Support Tool', svg: SVG_ICONS.history, badge: 'HISTORY', title: 'Issued Prescriptions', sub: 'Full eRx history', desc: 'Complete cryptographic audit trail of all verified prescriptions, dispensations, and patient refills.' },
    { id: 'handwriting-ai', cat: 'support', catName: 'Clinical Support Tool', svg: SVG_ICONS.ocr, badge: 'AI', title: 'Handwriting Recognition', sub: 'Notes to structured data', desc: 'Clinical OCR engine converting handwritten bedside notes into structured Electronic Health Record fields.' },
    { id: 'trial-desk', cat: 'support', catName: 'Clinical Support Tool', svg: SVG_ICONS.trial, badge: 'TRIALS', title: 'Trial Desk', sub: 'Sponsor studies & CRFs', desc: 'Manage multi-center clinical trials, patient cohorts, and electronic Case Report Forms (CRFs).' },

    { id: 'panacea-exclusive', cat: 'analytics', catName: 'Analytics, Risk & Ops', svg: SVG_ICONS.deals, badge: 'SUPPLY', title: 'Panacea Exclusive', sub: 'Doctor-only deals & supplies', desc: 'Curated B2B surgical equipment, diagnostic devices, and clinic consumables for verified practitioners.' },
    { id: 'appointments', cat: 'analytics', catName: 'Analytics, Risk & Ops', svg: SVG_ICONS.calendar, badge: 'QUEUE', title: 'Appointments & Follow-ups', sub: 'Bookings, walk-ins & reminders', desc: 'Smart OPD queue scheduling with WhatsApp QR check-in and multilingual AI voice follow-ups.' },
    { id: 'pharmixo', cat: 'analytics', catName: 'Analytics, Risk & Ops', svg: SVG_ICONS.rx, badge: 'PHARMACY', title: 'Pharmixo Portal', sub: 'Your in-house pharmacy', desc: 'Connects in-house and partner pharmacies to GPS-coordinated verified medicine dispatch.' },
    { id: 'course-planner', cat: 'analytics', catName: 'Analytics, Risk & Ops', svg: SVG_ICONS.course, badge: 'PLANNER', title: 'Course Planner', sub: 'Biometric follow-up plans', desc: 'Multi-visit treatment schedules verified via facial biometric terminals and wearable vitals.' },
    { id: 'treatment-planner', cat: 'analytics', catName: 'Analytics, Risk & Ops', svg: SVG_ICONS.pathway, badge: 'PATHWAYS', title: 'Advanced Treatment Planner', sub: 'Multi-phase care pathways', desc: 'Architect complex surgical, cardiac, and chronic care pathways across multidisciplinary teams.' },
    { id: 'staff-rota', cat: 'analytics', catName: 'Analytics, Risk & Ops', svg: SVG_ICONS.rota, badge: 'ROSTER', title: 'Staff Rota Scheduler', sub: 'Shifts, attendance & leave', desc: 'Automated hospital duty rosters for doctors, nurses, and ward staff synced with biometric attendance.' },
    { id: 'inventory', cat: 'analytics', catName: 'Analytics, Risk & Ops', svg: SVG_ICONS.stock, badge: 'STOCK', title: 'Inventory Management', sub: 'Supplies & restock alerts', desc: 'Predictive pharmacy and ward inventory monitoring with automated low-stock and expiry alerts.' },
    { id: 'patient-edu', cat: 'analytics', catName: 'Analytics, Risk & Ops', svg: SVG_ICONS.edu, badge: 'AI EDU', title: 'Personalized Patient Education', sub: 'AI handouts for patients', desc: 'Generates custom post-consultation care handouts in regional Indian languages.' },
    { id: 'research-copilot', cat: 'analytics', catName: 'Analytics, Risk & Ops', svg: SVG_ICONS.sparkle, badge: 'AI LIT', title: 'Research Copilot', sub: 'Summarise medical literature', desc: 'AI medical literature synthesizer that distills peer-reviewed journals and clinical studies.' },
    { id: 'scriptorium', cat: 'analytics', catName: 'Analytics, Risk & Ops', svg: SVG_ICONS.library, badge: 'LIBRARY', title: 'Scriptorium', sub: 'Your mini medical library', desc: 'Personal digital medical library of saved protocols, research papers, and teaching cases.' },

    { id: 'clinical-mode', cat: 'core', catName: 'Core Platform Hub', svg: SVG_ICONS.steth, badge: 'PRIMARY', title: 'Clinical Mode', sub: 'AI-powered safety checks & prescriptions.', desc: 'Primary consultation cockpit with prescription cross-checking and real-time EHR charting.' },
    { id: 'curenest', cat: 'core', catName: 'Core Platform Hub', svg: SVG_ICONS.nest, badge: 'WARD OS', title: 'CureNEST', sub: 'Every bed, every ward, one nest of care.', desc: 'Enterprise IPD, ICU, and hospital ward operating system unifying bed telemetry and nursing handoffs.' },
    { id: 'horizon', cat: 'core', catName: 'Core Platform Hub', svg: SVG_ICONS.video, badge: 'VIRTUAL', title: 'Horizon', sub: 'Your virtual clinic video consults & teams.', desc: 'HD telemedicine video consultations with synced Digital Pad e-Rx and multi-doctor case rooms.' },
    { id: 'plugins-social', cat: 'core', catName: 'Core Platform Hub', svg: SVG_ICONS.network, badge: 'NETWORK', title: 'Plugins Social', sub: "Doctors' network posts, chat & clans.", desc: 'Verified peer network for clinicians with case publishing, specialty clans, and hospital referrals.' },
    { id: 'biometric-id', cat: 'core', catName: 'Core Platform Hub', svg: SVG_ICONS.bio, badge: 'IDENTITY', title: 'Biometric ID', sub: 'Enroll new or verify returning patients.', desc: 'Facial recognition scanners and biometric wristbands for streamlined patient verification.' },
    { id: 'settings', cat: 'core', catName: 'Core Platform Hub', svg: SVG_ICONS.gear, badge: 'SYSTEM', title: 'Settings', sub: 'Configure application preferences.', desc: 'Configure clinic branches, prescription headers, WhatsApp QR rules, and security permissions.' }
  ];

  const CLINICIAN_NODES = [
    { rank: 'VERIFIED CLINICIAN PROFILE · MIRA ROAD NETWORK', metric: 'Demonstration Profile · Clinical Lead', name: 'Dr. Ayush — Clinical Operations & Case Publishing', bio: 'Shares peer-reviewed clinical case notes, treatment pathways, and surgical outcomes across the Plugins Social clinician network in Mira Road and Mumbai.' },
    { rank: 'VERIFIED SPECIALIST · CARDIOLOGY CLAN', metric: 'Demonstration Profile · Interventional Cardiology', name: 'Dr. Farrukh — Senior Cardiologist', bio: 'Active contributor in the Mumbai Cardiac Clan—sharing ECG telemetry protocols and interventional case notes with peer specialists.' },
    { rank: 'VERIFIED FELLOW · CLINICAL RESEARCH', metric: 'Demonstration Profile · 9 Published Protocols', name: 'Dr. Nina Tripathi — Clinical Research Lead', bio: 'Collaborates via Research Copilot and Scriptorium to author and review multi-disciplinary treatment guidelines across partner clinics.' },
    { rank: 'INSTITUTIONAL PARTNER · CURENEST HUB', metric: 'Demonstration Profile · Multi-Specialty Hospital', name: 'Evershine Hospital — Connected Ward Hub', bio: 'Synchronizes IPD ward bed telemetry, Labonix pathology diagnostics, and inter-hospital specialist referrals in real time.' },
    { rank: 'VERIFIED SURGEON · SURGICAL CLAN', metric: 'Demonstration Profile · General & Laparoscopic Surgery', name: 'Dr. Abdul K. — Chief of Surgery', bio: 'Utilizes Advanced Treatment Planner and Horizon virtual consults for pre-operative and post-operative multidisciplinary surgical boards.' },
    { rank: 'VERIFIED INTENSIVIST · CRITICAL CARE', metric: 'Demonstration Profile · ICU & Wearable Telemetry', name: 'Dr. Shakeel — Critical Care & ICU Specialist', bio: 'Integrates continuous Medicore wearable biosensor streams into post-discharge follow-up plans for high-acuity patients.' }
  ];

  // =========================================================================
  // 1. CINEMATIC OPENING & SCROLL-DRIVEN MOTION DESIGN SYSTEM
  // =========================================================================
  let heroScrollDolly = 0.0;
  let heroVisible = true;
  let networkVisible = false;

  function runOpeningChoreography() {
    const curtain = document.getElementById('opening-curtain');
    const heroHead = document.getElementById('hero-main-headline');
    const heroEye = document.getElementById('hero-eyebrow');
    const heroSub = document.getElementById('hero-subcopy');
    const heroCtas = document.getElementById('hero-ctas');

    const revealHero = () => {
      if (curtain) {
        curtain.style.opacity = '0';
        setTimeout(() => { if (curtain) curtain.style.display = 'none'; }, 400);
      }
      if (heroEye) heroEye.style.opacity = '1';
      if (heroHead) { heroHead.style.opacity = '1'; heroHead.style.transform = 'none'; }
      if (heroSub) { heroSub.style.opacity = '1'; heroSub.style.transform = 'none'; }
      if (heroCtas) { heroCtas.style.opacity = '1'; heroCtas.style.transform = 'none'; }

      // Start hero background video as soon as curtain lifts + auto-pause when out of view (saves massive CPU/GPU)
      const bgVideo = document.getElementById('hero-bg-video');
      const heroSection = document.getElementById('act-hero');
      if (bgVideo) {
        bgVideo.muted = true;
        if (bgVideo.paused) bgVideo.play().catch(() => { });

        if (heroSection && 'IntersectionObserver' in window && !window.__HERO_VIDEO_OBS_ATTACHED__) {
          window.__HERO_VIDEO_OBS_ATTACHED__ = true;
          const heroVideoObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (bgVideo.paused) bgVideo.play().catch(() => { });
              } else {
                if (!bgVideo.paused) bgVideo.pause();
              }
            });
          }, { threshold: 0.05 });
          heroVideoObserver.observe(heroSection);
        }
      }
    };

    if (prefersReducedMotion) {
      revealHero();
      return;
    }

    // Hard safety timer: curtain NEVER blocks for more than 1.1s under any circumstance
    const safetyTimer = setTimeout(revealHero, 1100);

    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(safetyTimer);
        revealHero();
      }
    });

    tl.to('#curtain-glow', { opacity: 1, scale: 1.25, duration: 0.35, ease: 'power2.out' })
      .to('#curtain-logo', { opacity: 1, scale: 1, duration: 0.35, ease: 'power3.out' }, '-=0.2')
      .to('#curtain-wordmark', { opacity: 1, duration: 0.3, ease: 'power2.out' }, '-=0.15')
      .to('#opening-curtain', {
        opacity: 0, duration: 0.45, ease: 'power2.inOut', delay: 0.1, onComplete: () => {
          if (curtain) curtain.style.display = 'none';
        }
      })
      .to('#hero-eyebrow', { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .to('#hero-main-headline', { y: 0, opacity: 1, duration: 0.6, ease: 'power4.out' }, '-=0.4')
      .to('#hero-subcopy', { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.4')
      .to('#hero-ctas', { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.4');
  }

  function initScrollMotionSystem() {
    // Lenis Inertial Smooth Scrolling (Calibrated for desktop fluid glide + mobile 120Hz responsiveness)
    let lenis = null;
    if (!prefersReducedMotion) {
      try {
        const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
        lenis = new Lenis({
          duration: isMobileDevice ? 1.05 : 1.18,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 0.95,
          syncTouch: false, // Allows native mobile hardware momentum without input lag
          touchMultiplier: isMobileDevice ? 1.0 : 1.2,
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(500, 33);
        window.__LENIS__ = lenis;

        // Buttery smooth anchor link scrolling
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#' || href === '#!') return;
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              lenis.scrollTo(target, { offset: -60, duration: 1.15 });
            }
          });
        });
      } catch (lenisErr) {
        console.warn('Lenis smooth scroll fallback:', lenisErr);
      }
    }

    // Floating Header Solidification on Scroll — Throttled & State-Cached (Zero Layout Lag)
    const header = document.getElementById('main-header');
    if (header) {
      let isHeaderScrolled = false;
      const updateHeaderScroll = (yVal) => {
        const y = typeof yVal === 'number' ? yVal : (window.scrollY || window.pageYOffset || 0);
        const shouldBeScrolled = y > 28;
        if (shouldBeScrolled !== isHeaderScrolled) {
          isHeaderScrolled = shouldBeScrolled;
          header.classList.toggle('header-scrolled', isHeaderScrolled);
        }
      };

      if (lenis) {
        lenis.on('scroll', (e) => updateHeaderScroll(e.scroll));
      } else {
        window.addEventListener('scroll', () => updateHeaderScroll(), { passive: true });
      }
      updateHeaderScroll();
    }

    // Active Section Highlighting in Header & Overlay
    const sections = ['act-hero', 'act-mission', 'act-panacea', 'act-services', 'act-network', 'act-concierge'];
    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: 'top 45%',
        end: 'bottom 45%',
        onToggle: (self) => {
          if (self.isActive) {
            document.querySelectorAll('.header-nav-link').forEach((link) => {
              link.classList.toggle('active-sec', link.getAttribute('data-nav-sec') === secId);
            });
            document.querySelectorAll('.menu-nav-link').forEach((link) => {
              link.classList.toggle('active-overlay-link', link.getAttribute('data-overlay-sec') === secId);
            });
          }
        }
      });
    });

    if (prefersReducedMotion) {
      document.querySelectorAll('.manifesto-word').forEach(el => { el.style.color = '#FFFFFF'; el.style.opacity = '1'; el.style.fontWeight = '500'; });
      return;
    }

    // Hero Camera Dolly & Subtle Fade on Scroll
    ScrollTrigger.create({
      trigger: '#act-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        heroScrollDolly = self.progress;
      }
    });

    gsap.to('#hero-copy-container', {
      y: -55,
      opacity: 0.12,
      ease: 'none',
      scrollTrigger: {
        trigger: '#act-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6
      }
    });

    // Mission Manifesto — Smooth, Elegant Sequential Editorial Illumination on Scroll
    const manifestoPhrases = document.querySelectorAll('#mission-manifesto .manifesto-phrase');
    const manifestoEl = document.getElementById('mission-manifesto');
    if (manifestoEl && manifestoPhrases.length) {
      gsap.set(manifestoPhrases, {
        color: 'rgba(235, 230, 248, 0.22)',
        fontWeight: '300',
        opacity: 0.35,
        textShadow: 'none'
      });

      const manifestoTl = gsap.timeline({
        scrollTrigger: {
          trigger: manifestoEl,
          start: 'top 92%',
          end: 'bottom 45%',
          scrub: 0.35
        }
      });

      manifestoPhrases.forEach((phrase, idx) => {
        const isHighlight = phrase.classList.contains('manifesto-highlight');
        manifestoTl.to(phrase, {
          color: isHighlight ? '#FFFFFF' : 'rgba(242, 238, 228, 0.85)',
          fontWeight: '300',
          opacity: 1,
          textShadow: isHighlight
            ? '0 0 16px rgba(255, 255, 255, 0.24)'
            : 'none',
          duration: 0.55,
          ease: 'power2.out'
        }, idx * 0.45);
      });
    }

    // Center Image Sweep from Left to Right
    document.querySelectorAll('.center-image-sweep').forEach((mask) => {
      gsap.fromTo(mask,
        { clipPath: 'inset(0% 100% 0% 0% round 24px)', x: -35, opacity: 0.15 },
        {
          clipPath: 'inset(0% 0% 0% 0% round 24px)',
          x: 0,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mask,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 0.8
          }
        }
      );
    });

    // Mission 3 Scenes — Smooth Clip-Path Mask Reveals & Layered Image Parallax
    document.querySelectorAll('.clip-reveal-mask').forEach((mask) => {
      gsap.fromTo(mask,
        { clipPath: 'inset(12% 8% 12% 8% round 24px)', opacity: 0.25 },
        {
          clipPath: 'inset(0% 0% 0% 0% round 24px)',
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mask,
            start: 'top 86%',
            end: 'top 35%',
            scrub: 0.8
          }
        }
      );
    });

    document.querySelectorAll('.parallax-img').forEach((img) => {
      gsap.to(img, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    document.querySelectorAll('.parallax-badge').forEach((badge) => {
      gsap.fromTo(badge,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: badge.parentElement,
            start: 'top 78%',
            end: 'bottom 45%',
            scrub: 0.8
          }
        }
      );
    });

    // Staggered Capability Pillars Reveal
    const staggerGrid = document.querySelector('.stagger-grid');
    const staggerItems = document.querySelectorAll('.stagger-item');
    if (staggerGrid && staggerItems.length) {
      gsap.fromTo(staggerItems,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: staggerGrid,
            start: 'top 82%'
          }
        }
      );
    }

    // Panacea Dashboard — 3D Perspective Product Reveal + Progressive Callout Panels
    gsap.fromTo('#panacea-3d-monolith',
      { rotateX: 18, y: 70, scale: 0.94, opacity: 0.25 },
      {
        rotateX: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#act-panacea',
          start: 'top 82%',
          end: 'top 25%',
          scrub: 0.9
        }
      }
    );

    gsap.fromTo('.ui-callout-panel',
      { y: 30, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.18,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#panacea-3d-monolith',
          start: 'top 55%'
        }
      }
    );

    // Plugins Social 3D Mockup Reveal
    gsap.fromTo('#social-3d-mockup',
      { rotateY: -10, rotateX: 8, y: 45, opacity: 0.3 },
      {
        rotateY: 0,
        rotateX: 0,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#act-network',
          start: 'top 78%',
          end: 'top 28%',
          scrub: 0.9
        }
      }
    );
  }

  // =========================================================================
  // 2. COMPLETE 24-SERVICE ARCHITECTURE (No Duplicate Spotlight + Search + Filter)
  // =========================================================================
  let currentFeaturedId = 'labonix';
  let currentCategory = 'all';
  let currentSearchTerm = '';

  function updateFeaturedPanel(srv) {
    if (!srv) return;
    currentFeaturedId = srv.id;
    document.getElementById('spot-icon').innerHTML = srv.svg;
    document.getElementById('spot-title').textContent = srv.title;
    document.getElementById('spot-sub').textContent = srv.sub;
    document.getElementById('spot-badge').textContent = srv.badge;
    document.getElementById('spot-cat-label').textContent = `· ${srv.catName}`;
    document.getElementById('spot-desc').textContent = srv.desc;
  }

  function render24Architecture() {
    const grid = document.getElementById('services-24-grid');
    const countLabel = document.getElementById('services-count-label');
    if (!grid) return;

    const query = currentSearchTerm.trim().toLowerCase();
    const matching = ALL_24_SERVICES.filter((s) => {
      const catMatch = currentCategory === 'all' || s.cat === currentCategory;
      const qMatch = !query || [s.title, s.sub, s.desc, s.badge, s.catName]
        .some((value) => value.toLowerCase().includes(query));
      return catMatch && qMatch;
    });

    const selected = matching.find((s) => s.id === currentFeaturedId) || matching[0] || null;
    if (selected) {
      updateFeaturedPanel(selected);
    } else {
      currentFeaturedId = '';
    }

    const categories = [
      { id: 'support', index: '01', title: 'Clinical support', descriptor: 'Tools for the consultation room, diagnostics and clinical knowledge.', icon: '✳' },
      { id: 'analytics', index: '02', title: 'Analytics & operations', descriptor: 'The workflows that coordinate people, supplies and follow-up.', icon: '⌁' },
      { id: 'core', index: '03', title: 'Core platforms', descriptor: 'The connected operating layer for care delivery and clinician networks.', icon: '◈' }
    ];

    if (countLabel) {
      countLabel.textContent = query || currentCategory !== 'all'
        ? `${matching.length} of 24 modules shown`
        : '24 modules · 3 connected pillars';
    }

    if (!matching.length) {
      grid.innerHTML = `<div class="service-empty-state col-span-full w-full py-12 text-center"><span>⌕</span><strong>No modules found</strong><p>Try another term, or clear the active category filter.</p><button type="button" class="service-reset-search mt-4 px-6 py-2 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs" data-reset-services>Show all 24 modules</button></div>`;
      grid.querySelector('[data-reset-services]')?.addEventListener('click', () => {
        currentSearchTerm = '';
        currentCategory = 'all';
        const search = document.getElementById('service-search-input');
        if (search) search.value = '';
        document.querySelectorAll('.srv-cat-btn').forEach((button) => {
          const active = button.dataset.srvCat === 'all';
          button.classList.toggle('is-active', active);
          button.setAttribute('aria-selected', String(active));
        });
        render24Architecture();
      });
      return;
    }

    const categoryGroups = categories
      .map((category) => ({ ...category, items: matching.filter((service) => service.cat === category.id) }))
      .filter((category) => category.items.length > 0);

    grid.innerHTML = categoryGroups.map((category) => {
      const gridColsClass = category.id === 'support'
        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        : category.id === 'analytics'
          ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

      return `
        <article class="service-cluster service-cluster-${category.id} is-pillar-shelf w-full col-span-full mb-8 last:mb-0">
          <div class="service-cluster-head flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
            <div class="flex items-center gap-3">
              <div class="service-cluster-symbol" aria-hidden="true">${category.icon}</div>
              <div class="service-cluster-heading-copy">
                <span class="service-cluster-index">PILLAR ${category.index}</span>
                <h4>${category.title}</h4>
              </div>
            </div>
            <span class="service-cluster-count font-mono text-sm px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/90">
              ${String(category.items.length).padStart(2, '0')} <small class="text-white/40">/${String(category.id === 'support' ? 8 : category.id === 'analytics' ? 10 : 6).padStart(2, '0')}</small>
            </span>
          </div>
          <p class="service-cluster-description py-2 text-xs text-[#b8accd] max-w-2xl">${category.descriptor}</p>
          <div class="grid ${gridColsClass} gap-3.5 pt-2">
            ${category.items.map((service) => `
              <button type="button" class="service-module-link symmetrical-card p-4 rounded-xl flex flex-col justify-between items-start gap-3 bg-[#0a0518]/90 border border-white/10 hover:border-purple-400/50 hover:bg-[#150a2b] transition-all text-left group min-h-[114px] ${service.id === currentFeaturedId ? 'is-selected border-purple-400/70 bg-[#160c33] shadow-[0_0_20px_rgba(168,85,247,0.3)]' : ''}" data-srv-id="${service.id}" aria-pressed="${service.id === currentFeaturedId}">
                <div class="w-full flex items-center justify-between">
                  <span class="service-module-icon w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-400/25 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">${service.svg}</span>
                  <span class="service-module-arrow text-xs text-white/40 group-hover:text-purple-300 transition-colors" aria-hidden="true">↗</span>
                </div>
                <div class="service-module-copy space-y-0.5 w-full">
                  <strong class="font-display font-medium text-white text-sm block leading-snug">${service.title}</strong>
                  <small class="text-[11px] text-[#9b8eb6] block leading-snug">${service.sub}</small>
                </div>
              </button>
            `).join('')}
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('[data-srv-id]').forEach((button) => {
      button.addEventListener('click', () => {
        const service = ALL_24_SERVICES.find((item) => item.id === button.dataset.srvId);
        if (!service) return;
        currentFeaturedId = service.id;
        updateFeaturedPanel(service);
        grid.querySelectorAll('[data-srv-id]').forEach((item) => {
          const active = item.dataset.srvId === service.id;
          item.classList.toggle('is-selected', active);
          item.setAttribute('aria-pressed', String(active));
        });
        const detail = document.getElementById('featured-service-panel');
        if (!prefersReducedMotion && detail) {
          gsap.fromTo(detail, { opacity: 0.72, y: 10 }, { opacity: 1, y: 0, duration: 0.42, ease: 'power3.out' });
        }
      });
    });

    if (!prefersReducedMotion) {
      gsap.fromTo(grid.querySelectorAll('.service-cluster'),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.09, ease: 'power3.out', overwrite: true }
      );
    }
  }

  // =========================================================================
  // 3. INTERACTIVE LIVE PATIENT QUEUE DEMONSTRATION
  // =========================================================================
  let vectorQueue = [
    { token: '#OPD-101', name: 'Aarav Mehta, 44M', mode: 'Biometric ID Verified', dept: 'Clinical Mode · e-Rx', status: 'DONE' },
    { token: '#OPD-102', name: 'Priya Nair, 31F', mode: 'WhatsApp QR Check-In', dept: 'Horizon Video Consult', status: 'DONE' },
    { token: '#IPD-204', name: 'Ramesh Deshmukh, 62M', mode: 'Medicore Wearable Alert', dept: 'CureNEST Ward 3B', status: 'URGENT' },
    { token: '#OPD-103', name: 'Sneha Joshi, 28F', mode: 'Labonix Gateway Sync', dept: 'Medical Report Vault', status: 'PENDING' }
  ];
  let queuePaused = false;

  function renderVectorQueue() {
    const container = document.getElementById('vector-queue-cards');
    if (!container) return;

    const total = vectorQueue.length;
    const done = vectorQueue.filter(x => x.status === 'DONE').length;
    const urgent = vectorQueue.filter(x => x.status === 'URGENT').length;
    const pending = total - done;
    const pct = Math.min(100, Math.round((done / Math.max(1, total)) * 100));

    document.getElementById('vq-total').textContent = String(total);
    document.getElementById('vq-done').textContent = String(done);
    document.getElementById('vq-pending').textContent = String(pending);
    document.getElementById('vq-urgent').textContent = String(urgent);
    document.getElementById('vector-clinic-bar').style.width = `${pct}%`;
    document.getElementById('vector-clinic-pct').textContent = `${pct}%`;

    container.innerHTML = vectorQueue.map((p, idx) => {
      let badgeCls = 'bg-amber-500/15 text-amber-300 border-amber-400/35';
      if (p.status === 'DONE') badgeCls = 'bg-emerald-500/15 text-emerald-300 border-emerald-400/35';
      if (p.status === 'URGENT') badgeCls = 'bg-rose-500/20 text-rose-300 border-rose-400/45';

      return `
          <div data-vq-idx="${idx}" tabindex="0" role="button" aria-label="Toggle status for ${p.name}"
            class="cursor-pointer p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all flex items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2.5">
                <span class="font-display text-xs font-semibold text-champagne">${p.token}</span>
                <span class="font-display text-base font-medium text-white">${p.name}</span>
              </div>
              <p class="text-xs text-stonewarm mt-1">${p.mode} &nbsp;·&nbsp; ${p.dept}</p>
            </div>
            <span class="px-3 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-wider ${badgeCls}">
              ${p.status}
            </span>
          </div>
        `;
    }).join('');

    container.querySelectorAll('[data-vq-idx]').forEach((card) => {
      const toggle = () => {
        const i = parseInt(card.getAttribute('data-vq-idx') || '0', 10);
        vectorQueue[i].status = vectorQueue[i].status === 'DONE' ? 'PENDING' : 'DONE';
        renderVectorQueue();
      };
      card.addEventListener('click', toggle);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  // =========================================================================
  // 4. 3D WEBGL ANATOMICAL HEART & SUBTLE ATMOSPHERIC DEPTH PARTICLES
  //    (Viewport-Gated via IntersectionObserver for Optimal Performance!)
  // =========================================================================
  let scene, camera, renderer, heartMesh, heartMaterial, dropletMesh, dropletMaterial, particleSystem;
  let orbitRing1, orbitRing2, orbitP1, orbitP2;
  let sequenceStart = 0;
  let mouseTarget = { x: 0, y: 0 }, mouseCurrent = { x: 0, y: 0 };

  const heartVertexShader = `
      uniform sampler2D uMaps;
      uniform float uAtrialKick;
      uniform float uVentricularSystole;
      uniform float uAorticPulse;
      varying vec2 vUv;
      varying vec3 vViewPos;

      void main() {
        vUv = uv;
        vec4 m = texture2D(uMaps, uv);
        float smoothDome = m.r;
        float innerMask = m.a;

        vec3 pos = position;
        float zVolume = smoothDome * 0.26;

        float atrialZone = exp(-pow((uv.y - 0.60) / 0.11, 2.0)) * innerMask;
        float ventricularZone = smoothstep(0.56, 0.22, uv.y) * smoothstep(0.06, 0.18, uv.y) * innerMask;
        float aorticZone = smoothstep(0.60, 0.80, uv.y) * innerMask;

        vec2 dVent = uv - vec2(0.51, 0.36);
        pos.x -= dVent.x * uVentricularSystole * ventricularZone * 0.075;
        pos.y += (0.42 - uv.y) * uVentricularSystole * ventricularZone * 0.038;
        float twist = uVentricularSystole * ventricularZone * 0.035;
        pos.x += -dVent.y * twist;
        pos.y +=  dVent.x * twist;

        vec2 dAtria = uv - vec2(0.50, 0.60);
        pos.xy -= dAtria * uAtrialKick * atrialZone * 0.045;

        vec2 dAorta = uv - vec2(0.53, 0.72);
        pos.xy += dAorta * uAorticPulse * aorticZone * 0.065;

        pos.z += zVolume + (uVentricularSystole * ventricularZone * 0.068 + uAorticPulse * aorticZone * 0.045);

        vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
        vViewPos = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `;

  const heartFragmentShader = `
      uniform sampler2D uAlbedo;
      uniform sampler2D uMaps;
      uniform float uTime;
      uniform float uIntroLight;
      uniform float uVentricularSystole;
      uniform float uAorticPulse;
      uniform float uImpactWaveTime;
      uniform float uTrailProgress;
      uniform float uVesselGlow;
      uniform vec2 uMouse;
      uniform vec2 uImpactUV;

      varying vec2 vUv;
      varying vec3 vViewPos;

      vec4 sampleSharpened4K(sampler2D tex, vec2 uv) {
        vec2 s = vec2(1.0 / 1200.0);
        vec4 c = texture2D(tex, uv);
        vec3 avg = 0.25 * (
          texture2D(tex, uv + vec2(0.0, s.y)).rgb +
          texture2D(tex, uv - vec2(0.0, s.y)).rgb +
          texture2D(tex, uv + vec2(s.x, 0.0)).rgb +
          texture2D(tex, uv - vec2(s.x, 0.0)).rgb
        );
        return vec4(clamp(c.rgb + (c.rgb - avg) * 0.42, 0.0, 1.0), c.a);
      }

      vec4 computeLiquidWave(vec2 uv, vec2 center, float t) {
        if (t <= 0.0 || t > 5.2) return vec4(0.0);
        vec2 delta = (uv - center) * vec2(1.0, 1.25);
        float r = length(delta);
        float front = t * 0.21;
        float env = smoothstep(front + 0.025, front - 0.015, r) * exp(-r * 5.0) * exp(-t * 0.75);
        float p1 = (r - front) * 58.0;
        float p2 = (r - front * 1.18) * 115.0;
        float h = (sin(p1) * 0.75 + sin(p2) * 0.25) * env;
        float slope = (cos(p1) * 58.0 * 0.75 + cos(p2) * 115.0 * 0.25) * env;
        float crater = exp(-r * 24.0) * exp(-t * 2.4);
        h += cos(r * 42.0 - t * 14.0) * crater * 0.65;
        float ringSpec = clamp(pow(max(0.0, sin(p1)), 6.0) * env * 1.6 + pow(max(0.0, cos(p2)), 8.0) * env * 0.5, 0.0, 1.4);
        return vec4(h, slope, ringSpec, crater);
      }

      void main() {
        vec4 wave = computeLiquidWave(vUv, uImpactUV, uImpactWaveTime);
        vec2 waveDir = normalize(vUv - uImpactUV + vec2(1e-5));
        vec2 refractedUV = vUv + waveDir * wave.y * 0.00038;

        vec4 sharpAlbedo = sampleSharpened4K(uAlbedo, refractedUV);
        if (sharpAlbedo.a < 0.02) discard;

        vec4 maps = texture2D(uMaps, refractedUV);
        float vesselMask = maps.g;
        float specMask = maps.b;
        float innerMask = maps.a;

        vec2 centered = refractedUV - vec2(0.5, 0.5);
        vec3 domeNormal = normalize(vec3(-centered.x * 1.1 + waveDir.x * wave.y * 0.016, -centered.y * 1.1 + waveDir.y * wave.y * 0.016, 1.0));
        vec3 V = normalize(vViewPos);
        vec3 L_key = normalize(vec3(-0.65 + uMouse.x * 0.35, 0.85 + uMouse.y * 0.25, 1.0));
        float dynamicGlint = pow(max(dot(domeNormal, normalize(L_key + V)), 0.0), 44.0) * specMask * (0.26 + 0.42 * uVentricularSystole);

        float distFromImpact = distance(refractedUV, uImpactUV);
        float pulseWaveFront = fract(uTime * 0.34);
        float pulseBand = exp(-pow((distFromImpact - pulseWaveFront * 0.78) * 8.5, 2.0));
        float coronaryRidges = smoothstep(0.26, 0.74, vesselMask) * innerMask;

        vec3 warmVesselGlow = vec3(0.88, 0.12, 0.18) * coronaryRidges * (0.22 + 0.72 * pulseBand + 0.45 * uAorticPulse) * uVesselGlow;
        vec3 causticRing = vec3(0.96, 0.88, 0.84) * pow(wave.z, 1.5) * 0.85 * innerMask;

        vec3 finalColor = sharpAlbedo.rgb * (1.0 + uVentricularSystole * 0.08 + uAorticPulse * 0.04);
        finalColor += vec3(1.0, 0.94, 0.90) * dynamicGlint + warmVesselGlow + causticRing;
        finalColor *= smoothstep(0.0, 1.0, uIntroLight);

        gl_FragColor = vec4(finalColor, sharpAlbedo.a);
      }
    `;

  const dropletVertexShader = `
      uniform float uDeform;
      uniform float uStretch;
      varying vec3 vNormal;
      varying vec3 vViewPos;
      varying vec3 vLocalPos;
      void main() {
        vec3 p = position;
        if (p.y > 0.0) {
          float t = p.y;
          p.xz *= max(0.06, 1.0 - 0.64 * t - 0.24 * t * t);
          p.y *= (1.38 + uStretch * 0.28);
        } else {
          p.xz *= (1.06 - 0.08 * uStretch);
          p.y *= (0.92 + 0.08 * uStretch);
        }
        if (uDeform > 0.0) {
          p.y *= max(0.12, 1.0 - uDeform * 0.82);
          p.xz *= (1.0 + uDeform * 0.78);
        }
        vLocalPos = p;
        vNormal = normalize(normalMatrix * normalize(normal * vec3(1.0, 0.82, 1.0)));
        vec4 mvPos = modelViewMatrix * vec4(p, 1.0);
        vViewPos = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `;

  const dropletFragmentShader = `
      uniform float uOpacity;
      varying vec3 vNormal;
      varying vec3 vViewPos;
      varying vec3 vLocalPos;
      void main() {
        vec3 N = normalize(vNormal);
        vec3 V = normalize(vViewPos);
        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.4);
        vec3 L1 = normalize(vec3(-0.55, 0.9, 1.0));
        float spec1 = pow(max(dot(N, normalize(L1 + V)), 0.0), 130.0);
        float lowerMeniscus = smoothstep(-0.05, -0.82, vLocalPos.y);
        vec3 col = mix(vec3(0.84, 0.05, 0.09), vec3(0.18, 0.008, 0.015), pow(max(0.0, dot(N, V)), 0.8));
        col += vec3(1.0, 0.72, 0.75) * lowerMeniscus * 0.82 + vec3(0.95, 0.16, 0.22) * fresnel + vec3(1.0) * spec1 * 1.5;
        gl_FragColor = vec4(col, uOpacity * 0.95);
      }
    `;

  function initHeroWebGL() {
    const container = document.getElementById('hero-canvas-stage');
    if (!container) return;
    // Performance guard: Since the ambient hero video is active, skip creating the hidden WebGL context
    // This frees 100% of GPU compute and memory for butter-smooth video playback and navigation
    if (container.style.display === 'none' || window.getComputedStyle(container).display === 'none') {
      return;
    }

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 50);
    camera.position.set(0, 0, 3.2);

    const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isSmallScreen,
        powerPreference: isSmallScreen ? 'low-power' : 'high-performance'
      });
    } catch (error) {
      console.warn('RBCurexia 3D hero overlay unavailable.', error);
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isSmallScreen ? 1.25 : 1.75));
    renderer.setClearColor(0x000000, 0); // Completely transparent over video
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 1. Floating 3D Holographic Gyro Ring 1 (Cyan/Ice)
    const orbitRingGroup = new THREE.Group();
    scene.add(orbitRingGroup);

    const r1Geo = new THREE.TorusGeometry(1.35, 0.0055, 16, 120);
    const r1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45 });
    orbitRing1 = new THREE.Mesh(r1Geo, r1Mat);
    orbitRing1.rotation.x = Math.PI * 0.35;
    orbitRing1.rotation.y = Math.PI * 0.15;
    orbitRingGroup.add(orbitRing1);

    // 2. Floating 3D Holographic Gyro Ring 2 (Purple/Neon)
    const r2Geo = new THREE.TorusGeometry(1.6, 0.006, 16, 120);
    const r2Mat = new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.42 });
    orbitRing2 = new THREE.Mesh(r2Geo, r2Mat);
    orbitRing2.rotation.x = -Math.PI * 0.3;
    orbitRing2.rotation.y = -Math.PI * 0.25;
    orbitRingGroup.add(orbitRing2);

    // 3. Orbiting Data Beacon Spheres
    const pSphereGeo = new THREE.SphereGeometry(0.035, 16, 16);
    orbitP1 = new THREE.Mesh(pSphereGeo, new THREE.MeshBasicMaterial({ color: 0xede8d0, transparent: true, opacity: 0.95 }));
    orbitP2 = new THREE.Mesh(pSphereGeo, new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.95 }));
    orbitRing1.add(orbitP1);
    orbitRing2.add(orbitP2);

    // 4. Center Holographic Bio-Icosahedron (Wireframe)
    const icoGeo = new THREE.IcosahedronGeometry(0.48, 1);
    const icoMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.32 });
    const centerIco = new THREE.Mesh(icoGeo, icoMat);
    orbitRingGroup.add(centerIco);

    // 5. Bioluminescent Floating Stardust Particles over Video
    const particleCount = isSmallScreen ? 70 : 160;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 5.5;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 2.5;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.024,
      transparent: true,
      opacity: 0.55
    });
    particleSystem = new THREE.Points(pGeo, pMat);
    scene.add(particleSystem);

    sequenceStart = performance.now() * 0.001;

    window.addEventListener('resize', () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, { passive: true });
  }

  function animateHeroLoop() {
    if (!renderer || !scene || !camera) return;
    requestAnimationFrame(animateHeroLoop);
    const now = performance.now() * 0.001;
    const elapsed = now - sequenceStart;

    if (orbitRing1 && orbitRing2) {
      orbitRing1.rotation.z = elapsed * 0.18;
      orbitRing2.rotation.z = -elapsed * 0.14;
      orbitRing1.rotation.y = Math.PI * 0.15 + Math.sin(elapsed * 0.4) * 0.12;
      orbitRing2.rotation.x = -Math.PI * 0.3 + Math.cos(elapsed * 0.35) * 0.12;
      orbitP1.position.set(Math.cos(elapsed * 1.5) * 1.35, Math.sin(elapsed * 1.5) * 1.35, 0);
      orbitP2.position.set(Math.cos(-elapsed * 1.25) * 1.6, Math.sin(-elapsed * 1.25) * 1.6, 0);
    }

    if (particleSystem) {
      particleSystem.rotation.y = elapsed * 0.03;
      particleSystem.rotation.x = Math.sin(elapsed * 0.02) * 0.05;
    }

    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }

  // =========================================================================
  // 4.5 3D INTERACTIVE GENOMIC DNA HELIX (Inspired by Labonix Diagnostic Biotech)
  // =========================================================================
  function initMissionDnaScene() {
    const canvas = document.getElementById('mission-3d-dna-stage');
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const width = parent.clientWidth || 600;
    const height = parent.clientHeight || 420;

    const dnaScene = new THREE.Scene();
    const dnaCamera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    dnaCamera.position.set(0, 0, 4.4);

    let dnaRenderer;
    try {
      dnaRenderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch (err) {
      return;
    }

    dnaRenderer.setSize(width, height);
    dnaRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const dnaGroup = new THREE.Group();
    dnaScene.add(dnaGroup);

    // Generate 3D DNA Double Helix (2 intertwining strands + 24 connecting rungs)
    const NUM_RUNGS = 24;
    const RADIUS = 0.82;
    const HEIGHT = 3.4;
    const TURNS = 2.2;
    const rungGroup = new THREE.Group();
    dnaGroup.add(rungGroup);

    const sphereGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const matCyan = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.95 });
    const matMagenta = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.95 });
    const matChampagne = new THREE.MeshBasicMaterial({ color: 0xede8d0, transparent: true, opacity: 0.85 });

    for (let i = 0; i < NUM_RUNGS; i++) {
      const t = (i / (NUM_RUNGS - 1));
      const angle = t * Math.PI * 2 * TURNS;
      const y = (t - 0.5) * HEIGHT;

      const x1 = Math.cos(angle) * RADIUS;
      const z1 = Math.sin(angle) * RADIUS;
      const node1 = new THREE.Mesh(sphereGeo, matCyan);
      node1.position.set(x1, y, z1);
      rungGroup.add(node1);

      const x2 = Math.cos(angle + Math.PI) * RADIUS;
      const z2 = Math.sin(angle + Math.PI) * RADIUS;
      const node2 = new THREE.Mesh(sphereGeo, matMagenta);
      node2.position.set(x2, y, z2);
      rungGroup.add(node2);

      // Connecting Base-Pair Rung
      const rungPts = [new THREE.Vector3(x1, y, z1), new THREE.Vector3(x2, y, z2)];
      const rungGeo = new THREE.BufferGeometry().setFromPoints(rungPts);
      const rungMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0x00f2fe : 0xa855f7,
        transparent: true,
        opacity: 0.5
      });
      const rungLine = new THREE.Line(rungGeo, rungMat);
      rungGroup.add(rungLine);

      // Center base-pair node
      const centerNode = new THREE.Mesh(new THREE.SphereGeometry(0.026, 8, 8), matChampagne);
      centerNode.position.set((x1 + x2) * 0.5, y, (z1 + z2) * 0.5);
      rungGroup.add(centerNode);
    }

    // 90 Ambient floating genomic particles
    const pCount = 90;
    const pPositions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 4.6;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 4.0;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 2.2;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const pCloud = new THREE.Points(pGeo, pMat);
    dnaGroup.add(pCloud);

    dnaGroup.rotation.z = -0.32;
    dnaGroup.rotation.x = 0.22;

    let dnaMouseX = 0, dnaMouseY = 0;
    parent.addEventListener('mousemove', (e) => {
      const r = parent.getBoundingClientRect();
      dnaMouseX = ((e.clientX - r.left) / r.width) * 2 - 1;
      dnaMouseY = -(((e.clientY - r.top) / r.height) * 2 - 1);
    }, { passive: true });

    let dnaVisible = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { dnaVisible = e.isIntersecting; });
    }, { rootMargin: '100px 0px' });
    obs.observe(parent);

    let dnaClock = new THREE.Clock();
    function animateDna() {
      requestAnimationFrame(animateDna);
      if (!dnaVisible) return;
      const time = dnaClock.getElapsedTime();
      dnaGroup.rotation.y = time * 0.45 + dnaMouseX * 0.35;
      dnaGroup.rotation.x = 0.22 - dnaMouseY * 0.25;
      pCloud.rotation.y = -time * 0.18;
      dnaRenderer.render(dnaScene, dnaCamera);
    }
    animateDna();

    window.addEventListener('resize', () => {
      if (!parent || !dnaRenderer) return;
      const w = parent.clientWidth || 600;
      const h = parent.clientHeight || 420;
      dnaCamera.aspect = w / h;
      dnaCamera.updateProjectionMatrix();
      dnaRenderer.setSize(w, h);
    }, { passive: true });
  }

  // =========================================================================
  // 5. CLINICIAN NETWORK CONSTELLATION (Viewport-Gated via IntersectionObserver)
  // =========================================================================
  function initSynapseConstellation() {
    const canvas = document.getElementById('synapse-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const nodes = [
      { x: 0.50, y: 0.07 }, { x: 0.88, y: 0.28 }, { x: 0.86, y: 0.74 },
      { x: 0.50, y: 0.93 }, { x: 0.14, y: 0.74 }, { x: 0.12, y: 0.28 }
    ];
    const packets = [
      { from: -1, to: 0, p: 0.1, speed: 0.005 },
      { from: 1, to: -1, p: 0.4, speed: 0.004 },
      { from: -1, to: 2, p: 0.7, speed: 0.006 },
      { from: 3, to: -1, p: 0.2, speed: 0.005 },
      { from: -1, to: 4, p: 0.5, speed: 0.005 },
      { from: 5, to: 0, p: 0.3, speed: 0.004 }
    ];

    function resizeCanvas() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = (rect.width || 430) * dpr;
      canvas.height = (rect.height || 430) * dpr;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function renderSynapses() {
      requestAnimationFrame(renderSynapses);
      /* Pause Canvas 2D loop when Clinician Network section is off-screen */
      if (!networkVisible) return;

      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.5, cy = h * 0.5;

      ctx.lineWidth = 1;
      nodes.forEach((n, idx) => {
        const nx = n.x * w, ny = n.y * h;
        const grad = ctx.createLinearGradient(cx, cy, nx, ny);
        grad.addColorStop(0, 'rgba(237, 232, 208, 0.26)');
        grad.addColorStop(1, 'rgba(168, 85, 247, 0.22)');
        ctx.strokeStyle = grad;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(nx, ny); ctx.stroke();

        const next = nodes[(idx + 1) % nodes.length];
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
        ctx.beginPath(); ctx.moveTo(nx, ny); ctx.lineTo(next.x * w, next.y * h); ctx.stroke();
      });

      if (!prefersReducedMotion) {
        packets.forEach((pk) => {
          pk.p += pk.speed;
          if (pk.p > 1.0) pk.p = 0.0;
          const sPt = pk.from === -1 ? { x: 0.5, y: 0.5 } : nodes[pk.from];
          const ePt = pk.to === -1 ? { x: 0.5, y: 0.5 } : nodes[pk.to];
          const px = (sPt.x + (ePt.x - sPt.x) * pk.p) * w;
          const py = (sPt.y + (ePt.y - sPt.y) * pk.p) * h;

          const rad = ctx.createRadialGradient(px, py, 0, px, py, 7);
          rad.addColorStop(0, 'rgba(237, 232, 208, 0.9)');
          rad.addColorStop(0.5, 'rgba(168, 85, 247, 0.5)');
          rad.addColorStop(1, 'rgba(168, 85, 247, 0)');
          ctx.fillStyle = rad;
          ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();
        });
      }
    }
    renderSynapses();
  }


  function initGlobalAmbientThreeScene() {
    const canvas = document.getElementById('global-ambient-canvas');
    if (!canvas) return;

    const isMobile = window.innerWidth < 640;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 60;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: 'low-power'
      });
    } catch {
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

    // Circular Glow Particle Texture (Soft Bioluminescent Stardust)
    function createGlowSprite() {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.25, 'rgba(192, 132, 252, 0.85)');
      grad.addColorStop(0.55, 'rgba(56, 189, 248, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(c);
    }

    // 1. Floating Bioluminescent Healthcare Telemetry Particles
    const particleCount = isMobile ? 300 : 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0xa855f7),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0x818cf8),
      new THREE.Color(0xede8d0)
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 180;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 180;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 90;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 1.6 : 2.4,
      map: createGlowSprite(),
      vertexColors: true,
      transparent: true,
      opacity: 0.52,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 2. Floating 3D Wireframe Cyber-Biotech Structures in Outer Margins
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    // Object A: Icosahedron Cyber Node (Far Left)
    const icoGeo = new THREE.IcosahedronGeometry(8, 1);
    const wireMatPurple = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.16
    });
    const icoMesh = new THREE.Mesh(icoGeo, wireMatPurple);
    icoMesh.position.set(-52, 28, -25);
    objectsGroup.add(icoMesh);

    // Object B: Octahedron Telemetry Crystal (Far Right)
    const octGeo = new THREE.OctahedronGeometry(7, 0);
    const wireMatCyan = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const octMesh = new THREE.Mesh(octGeo, wireMatCyan);
    octMesh.position.set(54, 18, -30);
    objectsGroup.add(octMesh);

    // Object C: Torus Gyro Ring (Lower Left Margin)
    const torGeo = new THREE.TorusGeometry(10, 0.45, 16, 64);
    const wireMatChampagne = new THREE.MeshBasicMaterial({
      color: 0xede8d0,
      wireframe: true,
      transparent: true,
      opacity: 0.14
    });
    const torMesh = new THREE.Mesh(torGeo, wireMatChampagne);
    torMesh.position.set(-48, -38, -20);
    torMesh.rotation.x = Math.PI / 3;
    objectsGroup.add(torMesh);

    // Object D: Second Icosahedron (Lower Right Margin)
    const ico2Geo = new THREE.IcosahedronGeometry(10, 1);
    const ico2Mesh = new THREE.Mesh(ico2Geo, wireMatCyan);
    ico2Mesh.position.set(50, -48, -25);
    objectsGroup.add(ico2Mesh);

    // Smooth Scroll & Cursor Interpolation
    let scrollY = window.scrollY;
    let targetScrollY = scrollY;
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('scroll', () => {
      targetScrollY = window.scrollY;
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, { passive: true });

    let clock = new THREE.Clock();
    let isEcosystemVisible = false;
    const ecoTarget = document.getElementById('act-services') || canvas;
    if (ecoTarget && 'IntersectionObserver' in window) {
      const ecoObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => { isEcosystemVisible = e.isIntersecting; });
      }, { rootMargin: '120px 0px' });
      ecoObserver.observe(ecoTarget);
    } else {
      isEcosystemVisible = true;
    }

    function animate() {
      requestAnimationFrame(animate);
      if (!isEcosystemVisible) return;
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      scrollY += (targetScrollY - scrollY) * 0.05;

      particles.rotation.y = time * 0.02 + mouseX * 0.03;
      particles.rotation.x = time * 0.01 + mouseY * 0.03;
      particles.position.y = (scrollY * 0.025) % 40;

      icoMesh.rotation.x += delta * 0.2;
      icoMesh.rotation.y += delta * 0.28;
      icoMesh.position.y = 28 + Math.sin(time * 0.7) * 2.5 - (scrollY * 0.015);

      octMesh.rotation.y += delta * 0.24;
      octMesh.rotation.z += delta * 0.18;
      octMesh.position.y = 18 + Math.cos(time * 0.6) * 2 - (scrollY * 0.015);

      torMesh.rotation.z += delta * 0.18;
      torMesh.position.y = -38 + Math.sin(time * 0.55) * 2.5 - (scrollY * 0.015);

      ico2Mesh.rotation.x += delta * 0.18;
      ico2Mesh.rotation.y += delta * 0.22;
      ico2Mesh.position.y = -48 + Math.cos(time * 0.65) * 2.5 - (scrollY * 0.015);

      renderer.render(scene, camera);
    }

    animate();
  }
  function initEcosystemThreeScene() {
    const canvas = document.getElementById('ecosystem-3d-stage');
    const container = document.getElementById('ecosystem-isometric-container');
    if (!canvas || !container) return;

    const isMobile = window.innerWidth < 640;
    const ecoScene = new THREE.Scene();

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 440;

    const ecoCamera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    ecoCamera.position.set(0, 0, 7.5);

    let ecoRenderer;
    try {
      ecoRenderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: isMobile ? 'low-power' : 'high-performance'
      });
    } catch (err) {
      console.warn('Ecosystem 3D canvas unavailable', err);
      return;
    }

    ecoRenderer.setSize(width, height);
    ecoRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2));

    const ecoGroup = new THREE.Group();
    ecoScene.add(ecoGroup);

    // Central Energy Nexus Rings
    const innerRingGeo = new THREE.RingGeometry(0.5, 0.58, 48);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    ecoGroup.add(innerRing);

    const outerRingGeo = new THREE.RingGeometry(0.75, 0.82, 48);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    ecoGroup.add(outerRing);

    const coreGlowGeo = new THREE.CircleGeometry(0.3, 32);
    const coreGlowMat = new THREE.MeshBasicMaterial({
      color: 0xede8d0,
      transparent: true,
      opacity: 0.85
    });
    const coreGlow = new THREE.Mesh(coreGlowGeo, coreGlowMat);
    ecoGroup.add(coreGlow);

    // 4 Optical Fiber Curves to 4 isometric rooms
    const nodeCoords = {
      curenest: new THREE.Vector3(0, 2.1, 0.3),
      panacea: new THREE.Vector3(-2.6, 0.3, 0.2),
      labonix: new THREE.Vector3(2.6, 0.3, 0.2),
      pharmixo: new THREE.Vector3(0, -2.1, 0.25)
    };

    const cableCurves = [];
    const packetObjects = [];

    Object.entries(nodeCoords).forEach(([key, endPt]) => {
      const midPt = new THREE.Vector3(
        endPt.x * 0.5 + (key === 'curenest' ? 0.3 : key === 'pharmixo' ? -0.2 : 0),
        endPt.y * 0.5 + 0.2,
        0.15
      );
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        midPt,
        endPt
      );
      cableCurves.push({ key, curve });

      const pts = curve.getPoints(32);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.5,
        linewidth: 1.5
      });
      const line = new THREE.Line(lineGeo, lineMat);
      ecoGroup.add(line);

      for (let p = 0; p < 2; p++) {
        const packetGeo = new THREE.SphereGeometry(0.08, 12, 12);
        const packetMat = new THREE.MeshBasicMaterial({
          color: p === 0 ? 0x00f2fe : 0xede8d0,
          transparent: true,
          opacity: 0.95
        });
        const packet = new THREE.Mesh(packetGeo, packetMat);
        ecoGroup.add(packet);
        packetObjects.push({
          mesh: packet,
          curve,
          offset: p * 0.5,
          speed: 0.007 + Math.random() * 0.005,
          key
        });
      }
    });

    // 120 Floating 3D Bio-Data Particles
    const particleCount = 120;
    const partGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 8.0;
      posArray[i + 1] = (Math.random() - 0.5) * 6.0;
      posArray[i + 2] = (Math.random() - 0.5) * 2.5;
    }
    partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const partMat = new THREE.PointsMaterial({
      size: 0.055,
      color: 0xa855f7,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particleField = new THREE.Points(partGeo, partMat);
    ecoGroup.add(particleField);

    // Interactive Mouse Tilt Parallax
    let mouseX = 0, mouseY = 0;
    let targetRotX = 0, targetRotY = 0;
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = mouseX * 0.2;
      targetRotX = -mouseY * 0.15;
    }, { passive: true });

    container.addEventListener('mouseleave', () => {
      targetRotX = 0;
      targetRotY = 0;
    });

    let ecoVisible = false;
    const ecoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        ecoVisible = entry.isIntersecting;
      });
    }, { rootMargin: '100px 0px' });
    ecoObserver.observe(container);

    let clock = new THREE.Clock();
    function animateEcosystem() {
      requestAnimationFrame(animateEcosystem);
      if (!ecoVisible) return;

      const time = clock.getElapsedTime();

      innerRing.rotation.z += 0.015;
      outerRing.rotation.z -= 0.01;

      const coreScale = 1.0 + Math.sin(time * 3.5) * 0.15;
      coreGlow.scale.set(coreScale, coreScale, 1);

      packetObjects.forEach(item => {
        item.offset += item.speed;
        if (item.offset > 1.0) item.offset = 0.0;
        const pt = item.curve.getPoint(item.offset);
        item.mesh.position.copy(pt);
        const edgeFade = Math.sin(item.offset * Math.PI);
        item.mesh.scale.setScalar(0.7 + edgeFade * 0.5);
      });

      particleField.rotation.y = time * 0.025;
      particleField.rotation.x = Math.sin(time * 0.02) * 0.04;

      ecoGroup.rotation.y += (targetRotY - ecoGroup.rotation.y) * 0.08;
      ecoGroup.rotation.x += (targetRotX - ecoGroup.rotation.x) * 0.08;

      ecoRenderer.render(ecoScene, ecoCamera);
    }
    animateEcosystem();

    window.addEventListener('resize', () => {
      if (!container || !ecoCamera || !ecoRenderer) return;
      const w = container.clientWidth || 640;
      const h = container.clientHeight || 440;
      ecoCamera.aspect = w / h;
      ecoCamera.updateProjectionMatrix();
      ecoRenderer.setSize(w, h);
    });
  }

  function initArchitectureInteractions() {
    // Platform Cards (bottom row of architecture showcase)
    const platformCards = document.querySelectorAll('.ecosystem-platform-card');
    platformCards.forEach(card => {
      card.addEventListener('click', () => {
        const filterTarget = card.getAttribute('data-filter-target') || 'all';
        const moduleId = card.getAttribute('data-module-id');

        platformCards.forEach(c => c.classList.remove('is-active'));
        card.classList.add('is-active');

        currentCategory = filterTarget;
        document.querySelectorAll('.srv-cat-btn').forEach(b => {
          const active = b.getAttribute('data-srv-cat') === filterTarget;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-selected', String(active));
        });
        render24Architecture();

        if (moduleId) {
          const found = ALL_24_SERVICES.find(s => s.id === moduleId);
          if (found) {
            const spotBadge = document.getElementById('spot-badge');
            const spotIcon = document.getElementById('spot-icon');
            const spotCat = document.getElementById('spot-cat-label');
            const spotTitle = document.getElementById('spot-title');
            const spotSub = document.getElementById('spot-sub');
            const spotDesc = document.getElementById('spot-desc');

            if (spotBadge) spotBadge.textContent = found.badge;
            if (spotIcon) spotIcon.innerHTML = found.svg;
            if (spotCat) spotCat.textContent = '· ' + found.catName;
            if (spotTitle) spotTitle.textContent = found.title;
            if (spotSub) spotSub.textContent = found.sub;
            if (spotDesc) spotDesc.textContent = found.desc;
          }
        }

        document.getElementById('services-24-matrix-anchor')?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Isometric Node Badges on Diagram
    const nodeBadges = document.querySelectorAll('.architecture-node-badge');
    nodeBadges.forEach(badge => {
      badge.addEventListener('click', () => {
        const target = badge.getAttribute('data-ecosystem-target');
        let cardTarget;
        if (target === 'panacea') cardTarget = document.querySelector('.ecosystem-platform-card[data-module-id="clinical-mode"]');
        else if (target === 'labonix') cardTarget = document.querySelector('.ecosystem-platform-card[data-module-id="labonix"]');
        else if (target === 'pharmixo') cardTarget = document.querySelector('.ecosystem-platform-card[data-module-id="pharmixo"]');
        else if (target === 'curenest') cardTarget = document.querySelector('.ecosystem-platform-card[data-module-id="curenest"]');

        if (cardTarget) cardTarget.click();
      });
    });
  }

  function initViewportObservers() {
    if (!('IntersectionObserver' in window)) {
      networkVisible = true;
      return;
    }
    const heroEl = document.getElementById('act-hero');
    const netEl = document.getElementById('act-network');

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === 'act-hero') {
          heroVisible = entry.isIntersecting;
        } else if (entry.target.id === 'act-network') {
          networkVisible = entry.isIntersecting;
        }
      });
    }, { rootMargin: '150px 0px' });

    if (heroEl) obs.observe(heroEl);
    if (netEl) obs.observe(netEl);
  }

  // =========================================================================
  // 5.9 COSMIC SKY STARFIELD (Delicate Twinkling Starlight & Nocturnal Stardust)
  // =========================================================================
  function initCosmicSkyStarfield() {
    const canvas = document.getElementById('cosmic-starfield-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Controlled star count: elegant, delicate, non-distracting
    const starCount = Math.floor(Math.min(160, Math.max(80, (width * height) / 12000)));
    const stars = [];

    const starPalettes = [
      { r: 255, g: 255, b: 255 },       // Crisp pure starlight
      { r: 237, g: 232, b: 208 },       // Warm champagne
      { r: 216, g: 180, b: 254 },       // Soft lavender/purple
      { r: 147, g: 197, b: 253 },       // Subtle cyan
      { r: 192, g: 132, b: 252 },       // Gentle violet
    ];

    for (let i = 0; i < starCount; i++) {
      const palette = starPalettes[Math.floor(Math.random() * starPalettes.length)];
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius: Math.random() < 0.78 ? Math.random() * 0.65 + 0.35 : Math.random() * 0.75 + 0.85,
        baseAlpha: Math.random() * 0.42 + 0.22,
        twinkleSpeed: Math.random() * 0.0022 + 0.001,
        twinklePhase: Math.random() * Math.PI * 2,
        driftY: (Math.random() * 0.06 + 0.02) * (Math.random() < 0.5 ? 1 : -1),
        driftX: (Math.random() * 0.03 + 0.01) * (Math.random() < 0.5 ? 1 : -1),
        color: palette,
        hasHalo: Math.random() < 0.16
      });
    }

    let animationId = null;
    let isRunning = false;
    let lastTime = performance.now();

    function renderStarfield(currentTime) {
      // If starfield is hidden on hero video, pause the rAF loop completely to save 100% GPU/CPU for video playback
      const opacity = parseFloat(canvas.style.opacity || '0');
      if (opacity <= 0.005) {
        ctx.clearRect(0, 0, width, height);
        isRunning = false;
        animationId = null;
        return;
      }

      isRunning = true;
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Extremely slow, peaceful cosmic drift
        star.y += star.driftY * (delta * 0.05);
        star.x += star.driftX * (delta * 0.05);

        if (star.y < 0) star.y = height;
        else if (star.y > height) star.y = 0;
        if (star.x < 0) star.x = width;
        else if (star.x > width) star.x = 0;

        // Subtle twinkling shimmer
        const twinkle = Math.sin(currentTime * star.twinkleSpeed + star.twinklePhase);
        const currentAlpha = Math.max(0.08, Math.min(0.92, star.baseAlpha + twinkle * 0.28));
        const currentRadius = Math.max(0.3, star.baseRadius + twinkle * 0.12);

        // Soft atmospheric starlight glow
        if (star.hasHalo && currentAlpha > 0.35) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, currentRadius * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentAlpha * 0.16})`;
          ctx.fill();
        }

        // Crisp starlight core
        ctx.beginPath();
        ctx.arc(star.x, star.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${currentAlpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(renderStarfield);
    }

    function wakeStarfield() {
      const opacity = parseFloat(canvas.style.opacity || '0');
      if (opacity > 0.005 && !isRunning) {
        isRunning = true;
        lastTime = performance.now();
        animationId = requestAnimationFrame(renderStarfield);
      }
    }

    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', onResize, { passive: true });

    // Fade starfield in only when scrolling past the hero header video.
    // Keeps the hero header video completely clean and star-free,
    // then smoothly reveals the twinkling cosmic sky as the user transitions into Section 02 (Our Mission)
    // and keeps it active across all subsequent sections.
    function updateStarfieldVisibility() {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const heroEl = document.getElementById('act-hero');
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;

      if (scrollY <= 24) {
        canvas.style.opacity = '0';
        return;
      }

      if (scrollY >= heroHeight * 0.72) {
        canvas.style.opacity = '0.82';
        wakeStarfield();
        return;
      }

      const factor = Math.max(0, Math.min(1, (scrollY - heroHeight * 0.15) / (heroHeight * 0.55)));
      canvas.style.opacity = (factor * 0.82).toFixed(3);
      if (factor > 0.01) wakeStarfield();
    }

    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: '#act-hero',
        start: 'top top',
        end: 'bottom 20%',
        scrub: true,
        onUpdate: (self) => {
          const progress = Math.max(0, Math.min(1, (self.progress - 0.2) / 0.55));
          canvas.style.opacity = (progress * 0.82).toFixed(3);
          if (progress > 0.01) wakeStarfield();
        }
      });
    }

    window.addEventListener('scroll', updateStarfieldVisibility, { passive: true });
    updateStarfieldVisibility();
  }

  // =========================================================================
  // 6. INITIALIZE ALL LISTENERS & INTERACTIONS
  // =========================================================================

  // Use the selected free-to-use Unsplash photography where available; preserve local project imagery as an offline fallback.
  document.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
      if (image.dataset.fallbackUsed === 'true') return;
      image.dataset.fallbackUsed = 'true';
      image.src = image.dataset.fallback;
    }, { once: true });
  });

  initViewportObservers();
  initHeroWebGL();
  initMissionDnaScene();
  initGlobalAmbientThreeScene();
  initEcosystemThreeScene();
  initArchitectureInteractions();
  renderVectorQueue();
  render24Architecture();
  initSynapseConstellation();
  runOpeningChoreography();
  initScrollMotionSystem();
  initCosmicSkyStarfield();

  // Full-Screen Navigation Overlay with Smooth Masking & Staggered Entrance
  const menuOverlay = document.getElementById('editorial-menu-overlay');
  const menuTrigger = document.getElementById('btn-menu-trigger');
  const openMenu = () => {
    menuOverlay.style.pointerEvents = 'auto';
    menuOverlay.style.clipPath = 'inset(0 0 0% 0)';
    menuOverlay.setAttribute('aria-hidden', 'false');
    menuTrigger?.setAttribute('aria-expanded', 'true');
    if (!prefersReducedMotion) {
      gsap.fromTo('.menu-nav-link', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out', delay: 0.15 });
    }
  };
  const closeMenu = () => {
    menuOverlay.style.pointerEvents = 'none';
    menuOverlay.style.clipPath = 'inset(0 0 100% 0)';
    menuOverlay.setAttribute('aria-hidden', 'true');
    menuTrigger?.setAttribute('aria-expanded', 'false');
  };

  menuTrigger?.addEventListener('click', openMenu);
  document.getElementById('btn-close-menu')?.addEventListener('click', closeMenu);
  document.querySelectorAll('.menu-nav-link').forEach(a => a.addEventListener('click', closeMenu));

  // Interactive Live Patient Queue Controls
  const sampleNames = ['Vikram Singhania, 51M', 'Ananya Deshpande, 36F', 'Farhan Shaikh, 47M', 'Meera Krishnan, 29F'];
  let walkCount = 104;
  const showQueueToast = (msg) => {
    const t = document.getElementById('vq-toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.remove('hidden');
  };

  document.getElementById('btn-vq-pause')?.addEventListener('click', (e) => {
    queuePaused = !queuePaused;
    const pill = document.getElementById('vq-status-pill');
    e.currentTarget.textContent = queuePaused ? 'Resume Queue' : 'Pause Queue';
    if (pill) {
      pill.textContent = queuePaused ? '⏸ Queue Paused' : '● Simulation Active';
      pill.className = queuePaused
        ? 'px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/35 text-[10px] font-semibold text-amber-300'
        : 'px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/35 text-[10px] font-semibold text-emerald-300';
    }
    showQueueToast(queuePaused ? 'Demonstration: Live Patient Queue paused for ward rounds.' : 'Demonstration: Live Patient Queue resumed.');
  });

  document.getElementById('btn-vq-add')?.addEventListener('click', () => {
    const name = sampleNames[walkCount % sampleNames.length];
    vectorQueue.unshift({
      token: `#OPD-${walkCount++}`,
      name,
      mode: 'Biometric ID Check-In',
      dept: 'Clinical Mode · e-Rx',
      status: 'PENDING'
    });
    if (vectorQueue.length > 6) vectorQueue.pop();
    renderVectorQueue();
    showQueueToast(`Demonstration: Added ${name} via Biometric ID walk-in check-in.`);
  });

  document.getElementById('btn-vq-wa')?.addEventListener('click', () => {
    const name = sampleNames[(walkCount + 1) % sampleNames.length];
    vectorQueue.unshift({
      token: `#WA-${walkCount++}`,
      name,
      mode: 'WhatsApp QR Verified',
      dept: 'Appointments & Follow-ups',
      status: 'PENDING'
    });
    if (vectorQueue.length > 6) vectorQueue.pop();
    renderVectorQueue();
    showQueueToast(`Demonstration: Verified WhatsApp QR check-in token for ${name}.`);
  });

  document.getElementById('btn-vq-msg')?.addEventListener('click', () => {
    showQueueToast('Demonstration: Multilingual voice & WhatsApp queue update sent to waiting patients.');
  });

  // 24-Service Search Input & Category Filter Buttons
  document.getElementById('service-search-input')?.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value || '';
    render24Architecture();
  });

  document.querySelectorAll('.srv-cat-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentCategory = btn.getAttribute('data-srv-cat') || 'all';
      document.querySelectorAll('.srv-cat-btn').forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      render24Architecture();
    });
  });

  // Clinician Constellation Nodes
  document.querySelectorAll('[data-doc-node]').forEach((btn) => {
    const selectNode = () => {
      const idx = parseInt(btn.getAttribute('data-doc-node') || '0', 10);
      const d = CLINICIAN_NODES[idx];
      document.querySelectorAll('[data-doc-node]').forEach(b => b.classList.remove('active-node'));
      btn.classList.add('active-node');
      document.getElementById('dossier-rank').textContent = d.rank;
      document.getElementById('dossier-metric').textContent = d.metric;
      document.getElementById('dossier-name').textContent = d.name;
      document.getElementById('dossier-bio').textContent = d.bio;
    };
    btn.addEventListener('mouseenter', selectNode);
    btn.addEventListener('click', selectNode);
  });

  // Full-Screen Interface Lightbox
  const lightbox = document.getElementById('modal-lightbox');
  const openLightbox = (src, cap) => {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-caption').textContent = cap;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
  };
  const closeLightbox = () => { lightbox.classList.add('hidden'); lightbox.classList.remove('flex'); };

  document.getElementById('btn-inspect-hd-dash')?.addEventListener('click', () => openLightbox(APP_SCREENS[0], 'PANACEA CLINICAL WORKSPACE — FULL INTERFACE PREVIEW'));
  document.getElementById('hd-dash-trigger')?.addEventListener('click', () => openLightbox(APP_SCREENS[0], 'PANACEA CLINICAL WORKSPACE — FULL INTERFACE PREVIEW'));
  document.getElementById('btn-inspect-hd-tools')?.addEventListener('click', () => openLightbox(APP_SCREENS[1], 'CLINICAL SUPPORT TOOLS & ANALYTICS — FULL INTERFACE PREVIEW'));
  document.getElementById('spot-preview-btn')?.addEventListener('click', () => openLightbox(APP_SCREENS[1], 'CLINICAL SUPPORT TOOLS & ANALYTICS — FULL INTERFACE PREVIEW'));
  document.getElementById('btn-inspect-hd-social')?.addEventListener('click', () => openLightbox(APP_SCREENS[2], 'PLUGINS SOCIAL — VERIFIED CLINICIAN NETWORK PREVIEW'));
  document.getElementById('social-img-trigger')?.addEventListener('click', () => openLightbox(APP_SCREENS[2], 'PLUGINS SOCIAL — VERIFIED CLINICIAN NETWORK PREVIEW'));
  document.getElementById('btn-close-lightbox')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeMenu();
    }
  });

  // Subtle Mouse Parallax for 3D Heart & Localized Surface Illumination
  window.addEventListener('mousemove', (e) => {
    mouseTarget.x = (e.clientX / window.innerWidth) * 2.0 - 1.0;
    mouseTarget.y = -((e.clientY / window.innerHeight) * 2.0 - 1.0);
  }, { passive: true });

  document.querySelectorAll('.cinema-surface').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
    }, { passive: true });
  });

  // Real newsletter subscription through a Firebase callable function.
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('nl-email');
    const consentInput = document.getElementById('nl-consent');
    const feedback = document.getElementById('nl-feedback');
    const submitButton = newsletterForm.querySelector('button[type="submit"]');
    const email = emailInput?.value.trim() || '';
    if (!feedback) return;
    feedback.className = 'text-xs pt-1';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.classList.add('text-rose-300');
      feedback.classList.remove('hidden');
      return;
    }
    if (!consentInput?.checked) {
      feedback.textContent = 'Please confirm your consent before subscribing.';
      feedback.classList.add('text-rose-300');
      feedback.classList.remove('hidden');
      return;
    }
    if (submitButton) { submitButton.disabled = true; submitButton.dataset.originalText = submitButton.textContent; submitButton.textContent = 'Submitting…'; }
    try {
      const result = await subscribeNewsletter({
        email,
        consent: true,
        website: newsletterForm.querySelector('[name="website"]')?.value || ''
      });
      feedback.textContent = result?.alreadySubscribed
        ? '✓ This email address is already subscribed to RBCurexia updates.'
        : '✓ Your subscription has been saved. Thank you for joining RBCurexia updates.';
      feedback.classList.add('text-emerald-300');
      feedback.classList.remove('hidden');
      newsletterForm.reset();
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      feedback.textContent = error?.message?.includes('Firebase')
        ? 'Newsletter service is not configured yet. Please contact RBCurexia directly.'
        : 'We could not complete your subscription. Please try again shortly.';
      feedback.classList.add('text-rose-300');
      feedback.classList.remove('hidden');
    } finally {
      if (submitButton) { submitButton.disabled = false; submitButton.textContent = submitButton.dataset.originalText || 'Join'; }
    }
  });

  // =========================================================================
  // 5.10 EXECUTIVE CONCIERGE PATHWAY SWITCHER (Demo / Seminars / Internships)
  // =========================================================================
  const CONCIERGE_PATHWAYS = {
    demo: {
      mode: 'Hospital & Clinic Demo',
      title: 'Hospital & Clinic Deployment Briefing',
      desc: 'Schedule a private architectural walkthrough of Panacea’s Dashboard, CureNEST Ward OS, Digital Pad e-Rx, and cryptographic EHR integration.',
      orgLabel: 'Hospital / Institution / University',
      orgPlaceholder: 'Evershine Multi-Specialty Hospital, Mumbai',
      selectLabel: 'Select Clinical Architecture / Program *',
      options: [
        'Full Panacea OS + CureNEST Hospital & Ward Suite',
        'Clinical Mode, Digital Pad e-Rx & Labonix Gateway',
        'Biometric ID Scanners, Wristbands & 24/7 Medicore Wearables',
        'Pharmixo GPS Pharmacy Dispatch & Plugins Social Network'
      ],
      submitText: 'Request Private Briefing'
    },
    seminar: {
      mode: 'Healthcare Seminars',
      title: 'Healthcare Technology & AI Seminars (Free Registration)',
      desc: 'Register for upcoming expert-led sessions on AI in clinical workflows, cryptographic EHR standards, smart ward IoT monitors, and modern hospital management.',
      orgLabel: 'Hospital / Medical College / Healthcare Institute',
      orgPlaceholder: 'e.g., KEM Hospital, Grant Medical College, Mumbai',
      selectLabel: 'Select Seminar Session / Topic Focus *',
      options: [
        'AI-Driven Clinical Decision Support & EHR Modernization (Free Seminar)',
        'Smart Ward Automation: CureNEST & Wearable Telemetry Deployment',
        'Cryptographic Health Data Security & DISHA/HIPAA Compliance',
        'Virtual Clinic Integration & Remote Specialist Consultation'
      ],
      submitText: 'Reserve Free Seminar Seat'
    },
    intern: {
      mode: 'Internship Applications',
      title: 'RBCurexia Healthcare Innovation Internship Program',
      desc: 'Apply for structured research and engineering internships across our four core segments: Clinical Software, Biotech Diagnostics, Biomedical Hardware, and Healthcare Operations.',
      orgLabel: 'College / University / Degree & Year',
      orgPlaceholder: 'e.g., VIT, IIT Bombay, K.J. Somaiya — Final Year B.Tech / MBBS',
      selectLabel: 'Select Internship Track / Segment *',
      options: [
        'Track 1: Full-Stack Clinical Web & Mobile Engineering (Panacea OS)',
        'Track 2: AI & Clinical Intelligence Algorithms (Diagnostic ML)',
        'Track 3: Biomedical IoT Firmware & Wearable Sensor Integration',
        'Track 4: Hospital Operations, Clinical Outreach & Field Deployment'
      ],
      submitText: 'Submit Internship Application'
    }
  };

  function initConciergeTabs() {
    const tabBtns = document.querySelectorAll('.concierge-tab-btn');
    if (!tabBtns.length) return;

    const modeInput = document.getElementById('concierge-mode');
    const titleEl = document.getElementById('concierge-mode-title');
    const descEl = document.getElementById('concierge-desc');
    const orgLabel = document.getElementById('c-org-label');
    const orgInput = document.getElementById('c-org');
    const selectLabel = document.getElementById('c-select-label');
    const selectEl = document.getElementById('c-select');
    const submitLabel = document.getElementById('c-submit-text');
    const feedbackEl = document.getElementById('concierge-feedback');

    function switchPathway(key) {
      const pathway = CONCIERGE_PATHWAYS[key] || CONCIERGE_PATHWAYS.demo;

      tabBtns.forEach((btn) => {
        const isMatch = btn.getAttribute('data-concierge-tab') === key;
        if (isMatch) {
          btn.className = 'concierge-tab-btn py-2.5 px-4 rounded-xl text-[11px] font-semibold tracking-[0.1em] uppercase bg-champagne text-obsidian shadow transition-all';
          btn.setAttribute('aria-selected', 'true');
        } else {
          btn.className = 'concierge-tab-btn py-2.5 px-4 rounded-xl text-[11px] font-medium tracking-[0.1em] uppercase text-stonewarm hover:text-white transition-all';
          btn.setAttribute('aria-selected', 'false');
        }
      });

      if (modeInput) modeInput.value = pathway.mode;
      if (titleEl) titleEl.textContent = pathway.title;
      if (descEl) descEl.textContent = pathway.desc;
      if (orgLabel) orgLabel.textContent = pathway.orgLabel;
      if (orgInput) orgInput.placeholder = pathway.orgPlaceholder;
      if (selectLabel) selectLabel.textContent = pathway.selectLabel;
      if (submitLabel) submitLabel.textContent = pathway.submitText;

      if (selectEl) {
        selectEl.innerHTML = '';
        pathway.options.forEach((optText) => {
          const opt = document.createElement('option');
          opt.value = optText;
          opt.textContent = optText;
          selectEl.appendChild(opt);
        });
      }

      if (feedbackEl) {
        feedbackEl.classList.add('hidden');
      }
    }

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-concierge-tab');
        if (key) switchPathway(key);
      });
    });
  }

  initConciergeTabs();

  // Executive Concierge submission: save first, then report the actual email-delivery state.
  const conciergeForm = document.getElementById('concierge-form');
  conciergeForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mode = document.getElementById('concierge-mode')?.value || '';
    const name = document.getElementById('c-name')?.value.trim() || '';
    const contact = document.getElementById('c-contact')?.value.trim() || '';
    const organization = document.getElementById('c-org')?.value.trim() || '';
    const choice = document.getElementById('c-select')?.value || '';
    const notes = document.getElementById('c-notes')?.value.trim() || '';
    const website = conciergeForm.querySelector('[name="website"]')?.value || '';
    const feedback = document.getElementById('concierge-feedback');
    const submitButton = conciergeForm.querySelector('button[type="submit"]');
    const submitLabel = document.getElementById('c-submit-text');
    if (!feedback) return;
    feedback.className = 'p-4 rounded-2xl border text-xs leading-relaxed';
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const looksLikePhone = /^[+()\d\s.-]{7,20}$/.test(contact);
    if (name.length < 2 || (!looksLikeEmail && !looksLikePhone) || !choice) {
      feedback.classList.add('bg-rose-950/60', 'border-rose-400/40', 'text-rose-200');
      feedback.textContent = 'Please provide your name, a valid phone number or email address, and select an inquiry option.';
      feedback.classList.remove('hidden');
      return;
    }
    if (submitButton) submitButton.disabled = true;
    if (submitLabel) submitLabel.textContent = 'Sending securely…';
    try {
      const result = await submitContact({
        mode,
        name,
        contact,
        organization,
        selection: choice,
        notes,
        website,
        pageUrl: window.location.href
      });
      feedback.classList.add('bg-emerald-950/50', 'border-emerald-400/40', 'text-emerald-200');
      if (result?.emailStatus === 'sent') {
        feedback.textContent = `✓ Thank you, ${name}. Your inquiry has been saved and the RBCurexia notification email has been sent. Reference: ${result.referenceId}.`;
      } else if (result?.emailStatus === 'failed') {
        feedback.textContent = `✓ Thank you, ${name}. Your inquiry is securely saved, but the notification email could not be delivered. Our team can retrieve it using reference ${result?.referenceId || 'provided by the system'}.`;
      } else {
        feedback.textContent = `✓ Thank you, ${name}. Your inquiry has been securely saved. Email notification delivery is not configured yet; our team can retrieve your inquiry using reference ${result?.referenceId || 'provided by the system'}.`;
      }
      feedback.classList.remove('hidden');
      conciergeForm.reset();
      const modeField = document.getElementById('concierge-mode');
      if (modeField) modeField.value = mode;
    } catch (error) {
      console.error('Contact inquiry submission failed:', error);
      feedback.classList.add('bg-rose-950/60', 'border-rose-400/40', 'text-rose-200');
      feedback.textContent = error?.message?.includes('Firebase')
        ? 'The contact service is not configured yet. Please contact RBCurexia directly.'
        : 'We could not submit your inquiry. Please try again or contact RBCurexia directly.';
      feedback.classList.remove('hidden');
    } finally {
      if (submitButton) submitButton.disabled = false;
      const activeTab = document.querySelector('.concierge-tab-btn.bg-champagne');
      const activeKey = activeTab?.getAttribute('data-concierge-tab') || 'demo';
      if (submitLabel) submitLabel.textContent = ({ demo: 'Request Private Briefing', seminar: 'Reserve Free Seminar Seat', intern: 'Submit Internship Application' })[activeKey];
    }
  });

  window.addEventListener('resize', () => {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
