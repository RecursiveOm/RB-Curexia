import { useState } from 'react';
import PageHero from '../components/ui/PageHero.jsx';
import { MUMBAI_HQ_INFO } from '../data/ecosystemData.js';
import { submitContactInquiry, subscribeToNewsletter } from '../firebase/services.js';

const ENGAGEMENT_PATHWAYS = [
  {
    id: 'demo',
    label: 'Hospital & Clinic Demo',
    badge: 'ENTERPRISE & OPD',
    headline: 'Hospital & Clinic Deployment Briefing',
    desc: 'Schedule a private architectural walkthrough of Panacea’s Dashboard, CureNEST Ward OS, Digital Pad e-Rx, and cryptographic EHR integration.',
    programs: [
      'Full Panacea OS + CureNEST Hospital & Ward Deployment',
      'Panacea Clinic & Outpatient Cockpit (Stand-Alone)',
      'Labonix Laboratory Gateway & LIMS Bridge',
      'Pharmixo Pharmacy Dispensation Network'
    ],
    placeholderName: 'Dr. Ayush Sharma / Medical Superintendent',
    placeholderContact: '+91 99879 XXXXX / doctor@hospital.in',
    placeholderInst: 'Evershine Multi-Specialty Hospital, Mumbai',
    placeholderNotes: 'Share your ward bed capacity, specialty focus, or current EHR infrastructure...'
  },
  {
    id: 'seminar',
    label: 'Healthcare Seminars',
    badge: 'EDUCATIONAL WORKSHOPS',
    headline: 'Complimentary Healthcare Tech Seminars',
    desc: 'Invite our engineering and clinical teams to conduct free hands-on technology workshops on AI diagnostics, electronic prescription standards, and cybersecurity in modern medicine.',
    programs: [
      'Digital Health Transformation & NABH EHR Compliance (90 mins)',
      'AI in Chairside Diagnosis: Safety, Ethics & Limitations (2 hours)',
      'Modern Hospital Ward Telemetry & Nursing Automation (Half-Day)',
      'Medical Student & Resident Orientation to Health-Tech (Custom)'
    ],
    placeholderName: 'Dean / Academic Coordinator / HOD',
    placeholderContact: '+91 98200 XXXXX / academics@medicalcollege.edu',
    placeholderInst: 'Government / Private Medical College & Hospital',
    placeholderNotes: 'Proposed seminar dates, estimated attendee count, and desired clinical focus areas...'
  },
  {
    id: 'internship',
    label: 'Internship Applications',
    badge: 'ACADEMIC & R&D FELLOWSHIPS',
    headline: 'RBCurexia Healthcare Technology Fellowships',
    desc: 'Join our research, engineering, and medical informatics teams in Mumbai. Open to medical students, biomedical engineering graduates, and full-stack software engineers.',
    programs: [
      'Clinical Informatics & Medical Ontologies Track',
      'Full-Stack Healthcare Software Engineering Track',
      'Biomedical Wearable Telemetry & Firmware Track',
      'Hospital Operations & Clinical Workflow Research Track'
    ],
    placeholderName: 'Candidate Full Name / Degree Specialization',
    placeholderContact: '+91 98190 XXXXX / candidate@university.edu',
    placeholderInst: 'Current College, University or Hospital Residency',
    placeholderNotes: 'Share your academic background, GitHub/portfolio links, and term availability...'
  }
];

export default function ConciergePage() {
  const [activePathway, setActivePathway] = useState(ENGAGEMENT_PATHWAYS[0]);
  
  // Concierge Form State
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    institution: '',
    program: ENGAGEMENT_PATHWAYS[0].programs[0],
    notes: '',
    honeypot: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState(null);

  // Newsletter Form State
  const [nlEmail, setNlEmail] = useState('');
  const [nlConsent, setNlConsent] = useState(false);
  const [nlSubmitting, setNlSubmitting] = useState(false);
  const [nlFeedback, setNlFeedback] = useState(null);

  const handlePathwayChange = (pathway) => {
    setActivePathway(pathway);
    setFormData((prev) => ({
      ...prev,
      program: pathway.programs[0]
    }));
  };

  const handleConciergeSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard bots
    if (!formData.name || !formData.contact) return;

    setSubmitting(true);
    setSubmitFeedback(null);

    try {
      const res = await submitContactInquiry({
        name: formData.name,
        contact: formData.contact,
        institution: formData.institution,
        program: formData.program,
        notes: formData.notes,
        category: activePathway.id
      });

      if (res?.success) {
        setSubmitFeedback({
          success: true,
          message: `✓ Thank you, ${formData.name}. Your inquiry has been securely saved to our database (ID: ${res.inquiryId || 'CONFIRMED'}). Our Mumbai clinical team will contact you shortly.`
        });
        setFormData({
          name: '',
          contact: '',
          institution: '',
          program: activePathway.programs[0],
          notes: '',
          honeypot: ''
        });
      } else {
        setSubmitFeedback({
          success: false,
          message: res?.message || 'Inquiry submission failed. Please try again or email us directly.'
        });
      }
    } catch {
      setSubmitFeedback({
        success: false,
        message: 'Network connection error. Please try again shortly.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!nlEmail || !nlConsent) return;
    setNlSubmitting(true);
    setNlFeedback(null);

    try {
      const res = await subscribeToNewsletter({ email: nlEmail, source: 'concierge_page' });
      if (res?.success) {
        setNlFeedback({
          success: true,
          message: '✓ Subscribed to the RBCurexia Clinical Dispatch.'
        });
        setNlEmail('');
        setNlConsent(false);
      } else {
        setNlFeedback({
          success: false,
          message: res?.message || 'Subscription failed.'
        });
      }
    } catch {
      setNlFeedback({
        success: false,
        message: 'Network error. Please try again.'
      });
    } finally {
      setNlSubmitting(false);
    }
  };

  return (
    <div className="w-full relative z-10 flex flex-col" id="act-concierge">
      {/* 1. Hero */}
      <PageHero
        eyebrowNum="06"
        eyebrowText="EXECUTIVE CONCIERGE"
        title="Let's Build the Future of"
        highlight="Healthcare Together."
        description="Whether you are deploying Panacea & CureNEST across a hospital network, inquiring about our free expert-led healthcare technology seminars, or applying to our internship fellowships, our team in Mumbai is ready to collaborate."
        primaryCtaText="Select Engagement Pathway"
        primaryCtaLink="#concierge-form-section"
        secondaryCtaText="Contact Clinical Desk"
        secondaryCtaLink="#mumbai-hq-section"
        pageId="concierge"
      />

      {/* 2. Main Concierge & Contact Interface */}
      <section className="relative z-10 w-full py-16 px-6 sm:px-12 lg:px-16 border-t border-white/[0.08]" id="concierge-form-section">
        <div className="w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info, Mumbai HQ & Newsletter (5 cols) */}
          <div className="lg:col-span-5 space-y-8" id="mumbai-hq-section">
            {/* Direct Clinical Desk Banner */}
            <div className="p-7 rounded-3xl bg-[#090416] border border-champagne/30 flex items-center gap-5 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-[#0e0720] border border-champagne/40 flex items-center justify-center shrink-0">
                <img
                  src="/assets/rbcurexia-logo-4k.webp"
                  alt="RBCurexia Official Crest"
                  className="w-12 h-auto object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block">
                  DIRECT CLINICAL &amp; ENTERPRISE DESK
                </span>
                <p className="font-display text-2xl text-white font-medium mt-0.5">
                  {MUMBAI_HQ_INFO.phone}
                </p>
                <p className="text-xs text-purple-300 font-mono">
                  {MUMBAI_HQ_INFO.email}
                </p>
              </div>
            </div>

            {/* Mumbai HQ Addresses */}
            <div className="p-7 rounded-3xl bg-[#090416] border border-white/10 space-y-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stonewarm block font-semibold">
                MUMBAI HEADQUARTERS (DAHISAR WEST 400068)
              </span>
              <div className="space-y-3 text-xs text-bone/85 leading-relaxed font-light">
                <p>
                  <strong className="text-champagne font-medium">Campus I:</strong> {MUMBAI_HQ_INFO.campus1}
                </p>
                <p>
                  <strong className="text-champagne font-medium">Campus II:</strong> {MUMBAI_HQ_INFO.campus2}
                </p>
                <p className="text-[11px] text-purple-300 font-mono pt-1">
                  {MUMBAI_HQ_INFO.workingHours}
                </p>
              </div>
            </div>

            {/* Newsletter Dispatch Box */}
            <div className="p-7 rounded-3xl bg-[#090416] border border-white/10 space-y-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-purple-300 block font-semibold">
                NEWSLETTER DISPATCH
              </span>
              <h3 className="text-lg font-semibold text-white">
                Subscribe to our newsletter · Don’t miss out
              </h3>
              <form onSubmit={handleNewsletterSubmit} id="newsletter-form" className="space-y-3">
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}
                  aria-hidden="true"
                />
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    id="nl-email"
                    type="email"
                    value={nlEmail}
                    onChange={(e) => setNlEmail(e.target.value)}
                    placeholder="Enter your email address*"
                    required
                    className="flex-1 px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-xs text-bone placeholder-stonewarm/50 focus:outline-none focus:border-champagne"
                  />
                  <button
                    type="submit"
                    disabled={nlSubmitting}
                    className="btn-primary-cinema py-2.5 px-6 text-[11px]"
                  >
                    {nlSubmitting ? '...' : 'Join'}
                  </button>
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-[11px] text-stonewarm">
                  <input
                    id="nl-consent"
                    type="checkbox"
                    checked={nlConsent}
                    onChange={(e) => setNlConsent(e.target.checked)}
                    required
                    className="rounded border-white/20 bg-black/60 text-purple-600"
                  />
                  <span>I want to subscribe to your mailing list.</span>
                </label>
                {nlFeedback && (
                  <div id="nl-feedback" className={`text-xs pt-1 ${nlFeedback.success ? 'text-emerald-300' : 'text-rose-400'}`}>
                    {nlFeedback.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Premium Form with 3 Engagement Pathways (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-11 rounded-3xl bg-[#090416] border border-white/15 shadow-2xl space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block mb-2 font-semibold">
                SELECT ENGAGEMENT PATHWAY
              </span>
              
              {/* 3 Pathway Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-1.5 rounded-2xl bg-black/50 border border-white/10" role="tablist">
                {ENGAGEMENT_PATHWAYS.map((pathway) => {
                  const isSelected = activePathway.id === pathway.id;
                  return (
                    <button
                      key={pathway.id}
                      type="button"
                      onClick={() => handlePathwayChange(pathway)}
                      className={`concierge-tab-btn py-3 sm:py-2.5 px-3 rounded-xl text-[11px] font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-champagne text-obsidian shadow-lg'
                          : 'text-stonewarm hover:text-white'
                      }`}
                    >
                      {pathway.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pathway Description Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
              <span className="text-[9px] font-mono tracking-widest uppercase text-purple-300">
                {activePathway.badge}
              </span>
              <h3 className="text-base font-semibold text-white">
                {activePathway.headline}
              </h3>
              <p className="text-xs text-stonewarm leading-relaxed text-[#b4a9c6]">
                {activePathway.desc}
              </p>
            </div>

            {/* Preserved Form */}
            <form onSubmit={handleConciergeSubmit} id="concierge-form" className="space-y-4">
              {/* Bot Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex="-1"
                autoComplete="off"
                style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-stonewarm/90">
                    Full Name / Clinician Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={activePathway.placeholderName}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-bone placeholder-stonewarm/40 focus:outline-none focus:border-champagne"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-stonewarm/90">
                    Phone (+91) or Official Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder={activePathway.placeholderContact}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-bone placeholder-stonewarm/40 focus:outline-none focus:border-champagne"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-stonewarm/90">
                    Hospital / Institution / University
                  </label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder={activePathway.placeholderInst}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-bone placeholder-stonewarm/40 focus:outline-none focus:border-champagne"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-stonewarm/90">
                    Select Program / Architecture *
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0d071c] border border-white/15 text-xs text-bone focus:outline-none focus:border-champagne"
                  >
                    {activePathway.programs.map((prog, idx) => (
                      <option key={idx} value={prog} className="bg-[#0d071c] text-bone">
                        {prog}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-stonewarm/90">
                  Inquiry Notes / Clinical Requirements
                </label>
                <textarea
                  rows="4"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={activePathway.placeholderNotes}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-bone placeholder-stonewarm/40 focus:outline-none focus:border-champagne"
                />
              </div>

              {submitFeedback && (
                <div className={`p-4 rounded-xl text-xs ${submitFeedback.success ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-200' : 'bg-rose-950/60 border border-rose-500/40 text-rose-200'}`}>
                  {submitFeedback.message}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-champagne text-obsidian font-display font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all disabled:opacity-50 cursor-pointer shadow-lg"
              >
                {submitting ? 'Transmitting Securely to Firestore...' : 'Submit Inquiry to Clinical Concierge →'}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
