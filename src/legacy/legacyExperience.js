import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initializeRbcurexiaExperience({ submitContact, subscribeNewsletter }) {
  if (window.__RBCUREXIA_EXPERIENCE_INITIALIZED__) return;
  window.__RBCUREXIA_EXPERIENCE_INITIALIZED__ = true;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const HEART_ALBEDO_URI = "/assets/embedded-d0777971a3aa.webp";
    const HEART_MAPS_URI   = "/assets/embedded-938de1fa9c5f.webp";
    const APP_SCREENS      = ["/assets/embedded-23185802ea52.webp", "/assets/embedded-af032b3e1ffb.webp", "/assets/embedded-12be7c2af358.webp"];

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
      if (prefersReducedMotion) {
        gsap.set('#opening-curtain', { display: 'none' });
        gsap.set(['#hero-eyebrow', '#hero-main-headline', '#hero-subcopy', '#hero-ctas'], { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline();
      tl.to('#curtain-glow', { opacity: 1, scale: 1.25, duration: 0.7, ease: 'power2.out' })
        .to('#curtain-logo', { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .to('#curtain-wordmark', { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.4')
        .to('#opening-curtain', { opacity: 0, duration: 0.9, ease: 'power3.inOut', delay: 0.25, onComplete: () => {
          document.getElementById('opening-curtain').style.display = 'none';
        }})
        .to('#hero-eyebrow', { opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.4')
        .to('#hero-main-headline', { y: 0, opacity: 1, duration: 1.0, ease: 'power4.out' }, '-=0.5')
        .to('#hero-subcopy', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to('#hero-ctas', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6');
    }

    function initScrollMotionSystem() {
      // Floating Header Solidification on Scroll
      const header = document.getElementById('main-header');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }, { passive: true });

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
        document.querySelectorAll('.manifesto-highlight').forEach(el => el.classList.add('illuminated'));
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

      // Mission Manifesto — Selective Key-Phrase Illumination on Scroll
      document.querySelectorAll('.manifesto-highlight').forEach((phrase) => {
        ScrollTrigger.create({
          trigger: phrase,
          start: 'top 80%',
          end: 'bottom 25%',
          onEnter: () => phrase.classList.add('illuminated'),
          onLeaveBack: () => phrase.classList.remove('illuminated')
        });
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
          yPercent: 10,
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
          { y: 35, opacity: 0 },
          {
            y: -10,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: badge.parentElement,
              start: 'top 75%',
              end: 'bottom 40%',
              scrub: 0.8
            }
          }
        );
      });

      // Staggered Capability Pillars Reveal
      gsap.fromTo('.stagger-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.stagger-grid',
            start: 'top 82%'
          }
        }
      );

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
    let currentCategory   = 'all';
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
        grid.innerHTML = `<div class="service-empty-state"><span>⌕</span><strong>No modules found</strong><p>Try another term, or clear the active category filter.</p><button type="button" class="service-reset-search" data-reset-services>Show all 24 modules</button></div>`;
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

      grid.innerHTML = categoryGroups.map((category) => `
        <article class="service-cluster service-cluster-${category.id}">
          <div class="service-cluster-head">
            <div class="service-cluster-symbol" aria-hidden="true">${category.icon}</div>
            <div class="service-cluster-heading-copy">
              <span class="service-cluster-index">PILLAR ${category.index}</span>
              <h4>${category.title}</h4>
            </div>
            <span class="service-cluster-count">${String(category.items.length).padStart(2, '0')} <small>/${String(category.id === 'support' ? 8 : category.id === 'analytics' ? 10 : 6).padStart(2, '0')}</small></span>
          </div>
          <p class="service-cluster-description">${category.descriptor}</p>
          <div class="service-module-list">
            ${category.items.map((service) => `
              <button type="button" class="service-module-link ${service.id === currentFeaturedId ? 'is-selected' : ''}" data-srv-id="${service.id}" aria-pressed="${service.id === currentFeaturedId}">
                <span class="service-module-icon">${service.svg}</span>
                <span class="service-module-copy"><strong>${service.title}</strong><small>${service.sub}</small></span>
                <span class="service-module-arrow" aria-hidden="true">↗</span>
              </button>
            `).join('')}
          </div>
        </article>
      `).join('');

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
      const done  = vectorQueue.filter(x => x.status === 'DONE').length;
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

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x040208);

      camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 50);
      camera.position.set(0, -0.06, 2.52);

      const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: !isSmallScreen, powerPreference: isSmallScreen ? 'low-power' : 'high-performance' });
      } catch (error) {
        console.warn('RBCurexia 3D scene unavailable; keeping the static visual fallback.', error);
        container.classList.add('webgl-unavailable');
        return;
      }
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isSmallScreen ? 1.35 : 2));
      container.appendChild(renderer.domElement);

      const maxAniso = renderer.capabilities.getMaxAnisotropy();
      const loader = new THREE.TextureLoader();
      const albedoTex = loader.load(HEART_ALBEDO_URI);
      const mapsTex   = loader.load(HEART_MAPS_URI);
      albedoTex.anisotropy = maxAniso;
      albedoTex.minFilter = THREE.LinearFilter;
      albedoTex.magFilter = THREE.LinearFilter;

      const heartGeo = new THREE.PlaneGeometry(1.52, 1.52, isSmallScreen ? 76 : 112, isSmallScreen ? 76 : 112);
      heartMaterial = new THREE.ShaderMaterial({
        vertexShader: heartVertexShader,
        fragmentShader: heartFragmentShader,
        transparent: true,
        uniforms: {
          uAlbedo: { value: albedoTex },
          uMaps: { value: mapsTex },
          uTime: { value: 0.0 },
          uIntroLight: { value: 0.0 },
          uAtrialKick: { value: 0.0 },
          uVentricularSystole: { value: 0.0 },
          uAorticPulse: { value: 0.0 },
          uImpactWaveTime: { value: -1.0 },
          uTrailProgress: { value: 0.0 },
          uVesselGlow: { value: 0.0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uImpactUV: { value: new THREE.Vector2(0.535, 0.725) }
        }
      });

      heartMesh = new THREE.Mesh(heartGeo, heartMaterial);
      heartMesh.position.y = 0.12;
      scene.add(heartMesh);

      // Subtle Atmospheric Medical Depth Particles Around the Heart
      const particleCount = 65;
      const pGeo = new THREE.BufferGeometry();
      const pPositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        pPositions[i * 3]     = (Math.random() - 0.5) * 2.8;
        pPositions[i * 3 + 1] = (Math.random() - 0.5) * 1.9;
        pPositions[i * 3 + 2] = (Math.random() - 0.5) * 1.2 - 0.2;
      }
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
      const pMat = new THREE.PointsMaterial({
        color: 0xede8d0,
        size: 0.012,
        transparent: true,
        opacity: 0.35
      });
      particleSystem = new THREE.Points(pGeo, pMat);
      scene.add(particleSystem);

      const dropletGeo = new THREE.SphereGeometry(0.032, 36, 36);
      dropletMaterial = new THREE.ShaderMaterial({
        vertexShader: dropletVertexShader,
        fragmentShader: dropletFragmentShader,
        transparent: true,
        depthWrite: false,
        uniforms: { uDeform: { value: 0.0 }, uStretch: { value: 0.0 }, uOpacity: { value: 0.0 } }
      });
      dropletMesh = new THREE.Mesh(dropletGeo, dropletMaterial);
      scene.add(dropletMesh);

      sequenceStart = performance.now() * 0.001;
      animateHeroLoop();
    }

    function animateHeroLoop() {
      requestAnimationFrame(animateHeroLoop);
      /* Pause heavy WebGL rendering when Hero section is not visible in viewport */
      if (!heroVisible || !renderer) return;

      const now = performance.now() * 0.001;
      const elapsed = now - sequenceStart;
      const dropTime = (elapsed > 1.2) ? ((elapsed - 1.2) % 8.5) : -1.0;

      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.05;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.05;

      const introLight = Math.min(1.0, Math.pow(Math.max(0.0, elapsed / 2.0), 1.2));

      const period = 0.92;
      const phase = (now % period) / period;
      const amp = (prefersReducedMotion ? 0.2 : (dropTime > 2.45 ? 0.95 : 0.72)) * introLight;

      const atrialKick = Math.exp(-Math.pow((phase - 0.08) / 0.035, 2.0)) * amp;
      const ventricularSystole = (Math.exp(-Math.pow((phase - 0.19) / 0.055, 2.0)) + 0.42 * Math.exp(-Math.pow((phase - 0.32) / 0.045, 2.0))) * amp;
      const aorticPulse = Math.exp(-Math.pow((phase - 0.27) / 0.065, 2.0)) * amp;

      const startY = 0.92, slowMoY = 0.54, impactY = 0.44;

      if (dropTime < 0.0 || prefersReducedMotion) {
        dropletMaterial.uniforms.uOpacity.value = 0.0;
      } else if (dropTime < 0.75) {
        const f = dropTime / 0.75;
        dropletMaterial.uniforms.uOpacity.value = Math.min(1.0, f * 1.4);
        dropletMaterial.uniforms.uStretch.value = Math.sin(f * Math.PI) * 0.35;
        dropletMaterial.uniforms.uDeform.value = 0.0;
        dropletMesh.scale.setScalar(0.35 + 0.65 * Math.pow(f, 0.75));
        dropletMesh.position.set(0.048, startY - 0.02 * f * f, 0.25);
      } else if (dropTime < 1.70) {
        const f = (dropTime - 0.75) / 0.95;
        dropletMesh.position.set(0.048, startY - 0.02 - (startY - 0.02 - slowMoY) * (f * f), 0.25);
        dropletMesh.scale.setScalar(1.0);
        dropletMaterial.uniforms.uOpacity.value = 1.0;
        dropletMaterial.uniforms.uStretch.value = 0.25 + 0.65 * f;
      } else if (dropTime < 2.45) {
        const f = (dropTime - 1.70) / 0.75;
        dropletMesh.position.set(0.048, slowMoY - (slowMoY - impactY) * (0.72 * f + 0.28 * f * f), 0.25);
        dropletMaterial.uniforms.uOpacity.value = 1.0;
        dropletMaterial.uniforms.uStretch.value = 0.85 - 0.35 * f;
      } else {
        const postImpact = dropTime - 2.45;
        if (postImpact < 0.22) {
          const c = postImpact / 0.22;
          dropletMesh.position.set(0.048, impactY - c * 0.016, 0.25);
          dropletMaterial.uniforms.uDeform.value = c;
          dropletMaterial.uniforms.uOpacity.value = 1.0 - c * c;
        } else {
          dropletMaterial.uniforms.uOpacity.value = 0.0;
        }
        heartMaterial.uniforms.uImpactWaveTime.value = postImpact;
        heartMaterial.uniforms.uVesselGlow.value = Math.min(1.0, Math.max(0.0, (postImpact - 0.15) / 1.8));
      }

      /* Slow camera movement closer to the heart as the user scrolls */
      const introDolly = Math.min(0.14, elapsed * 0.025);
      const targetZ = 2.52 - introDolly - heroScrollDolly * 0.55;
      camera.position.z += (targetZ - camera.position.z) * 0.08;
      camera.position.x += (mouseCurrent.x * 0.09 - camera.position.x) * 0.06;
      camera.position.y += (-0.06 + mouseCurrent.y * 0.06 - camera.position.y) * 0.06;
      camera.lookAt(0, 0.04, 0);

      heartMesh.rotation.y = mouseCurrent.x * 0.12 - heroScrollDolly * 0.15 + Math.sin(now * 0.3) * 0.018;
      heartMesh.rotation.x = -mouseCurrent.y * 0.08 + heroScrollDolly * 0.06;

      if (particleSystem) {
        particleSystem.rotation.y = now * 0.018;
      }

      heartMaterial.uniforms.uTime.value = now;
      heartMaterial.uniforms.uIntroLight.value = introLight;
      heartMaterial.uniforms.uAtrialKick.value = atrialKick;
      heartMaterial.uniforms.uVentricularSystole.value = ventricularSystole;
      heartMaterial.uniforms.uAorticPulse.value = aorticPulse;
      heartMaterial.uniforms.uMouse.value.set(mouseCurrent.x, mouseCurrent.y);

      renderer.render(scene, camera);
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
        { from: 5, to: 0,  p: 0.3, speed: 0.004 }
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
            const ePt = pk.to === -1   ? { x: 0.5, y: 0.5 } : nodes[pk.to];
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

    function initViewportObservers() {
      if (!('IntersectionObserver' in window)) {
        networkVisible = true;
        return;
      }
      const heroEl = document.getElementById('act-hero');
      const netEl  = document.getElementById('act-network');

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
      if (netEl)  obs.observe(netEl);
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
      renderVectorQueue();
      render24Architecture();
      initSynapseConstellation();
      runOpeningChoreography();
      initScrollMotionSystem();

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
