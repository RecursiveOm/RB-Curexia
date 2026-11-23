import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Comprehensive route metadata for dynamic incoming page identity
function getDestinationInfo(pathname) {
  const clean = (pathname || '/').toLowerCase().split('?')[0].split('#')[0];

  if (clean === '/' || clean === '/overview') {
    return {
      num: '01',
      name: 'Overview',
      label: 'OVERVIEW',
      tagline: 'PLATFORM TOPOLOGY & CLINICAL CONTINUITY',
    };
  }
  if (clean === '/mission') {
    return {
      num: '02',
      name: 'Our Mission',
      label: 'OUR MISSION',
      tagline: 'PHILOSOPHY OF HEALING & SYSTEMIC REFORMATION',
    };
  }
  if (clean === '/panacea') {
    return {
      num: '03',
      name: 'Panacea Clinical OS',
      label: 'PANACEA CLINICAL OS',
      tagline: 'CLINICIAN COCKPIT & EHR INTELLIGENCE',
    };
  }
  if (clean === '/labonix') {
    return {
      num: '04',
      name: 'Labonix Gateway',
      label: 'LABONIX GATEWAY',
      tagline: 'AUTOMATED PATHOLOGY & DIAGNOSTIC LIMS',
    };
  }
  if (clean === '/pulseport') {
    return {
      num: '05',
      name: 'PulsePort Telemetry',
      label: 'PULSEPORT TELEMETRY',
      tagline: 'BIOMETRIC IDENTITY & CONTINUOUS VITALS',
    };
  }
  if (clean === '/architecture') {
    return {
      num: '06',
      name: 'System Architecture',
      label: 'SYSTEM ARCHITECTURE',
      tagline: '24 CLINICAL SERVICES & CRYPTOGRAPHIC VAULT',
    };
  }
  if (clean === '/network') {
    return {
      num: '07',
      name: 'Clinician Network',
      label: 'PLUGINS SOCIAL',
      tagline: 'VERIFIED SPECIALIST PEER COLLABORATION',
    };
  }
  if (clean === '/concierge') {
    return {
      num: '08',
      name: 'Executive Concierge',
      label: 'EXECUTIVE CONCIERGE',
      tagline: 'DEPLOYMENT BRIEFINGS & HOSPITAL VISITS',
    };
  }
  if (clean === '/curenest') {
    return {
      num: '04.A',
      name: 'CureNEST Ward OS',
      label: 'CURENEST WARD OS',
      tagline: 'INPATIENT & CRITICAL CARE TELEMETRY',
    };
  }
  if (clean === '/pharmixo') {
    return {
      num: '04.C',
      name: 'Pharmixo Portal',
      label: 'PHARMIXO PORTAL',
      tagline: 'PHARMACY FULFILLMENT & INVENTORY AI',
    };
  }

  const raw = clean.replace('/', '').toUpperCase() || 'PORTAL';
  return {
    num: '00',
    name: raw,
    label: raw,
    tagline: 'CLINICAL INTELLIGENCE PROTOCOL ACTIVE',
  };
}

// Particle constructor for the dissolve -> orbital gathering -> outward reconstruction
class TransitionParticle {
  constructor(w, h, cx, cy) {
    this.reset(w, h, cx, cy);
  }

  reset(w, h, cx, cy) {
    const fromEdge = Math.random() < 0.65;
    if (fromEdge) {
      const side = Math.floor(Math.random() * 4);
      if (side === 0) {
        this.x = Math.random() * w;
        this.y = Math.random() * h * 0.25;
      } else if (side === 1) {
        this.x = w - Math.random() * w * 0.25;
        this.y = Math.random() * h;
      } else if (side === 2) {
        this.x = Math.random() * w;
        this.y = h - Math.random() * h * 0.25;
      } else {
        this.x = Math.random() * w * 0.25;
        this.y = Math.random() * h;
      }
    } else {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
    }

    this.startX = this.x;
    this.startY = this.y;
    this.currentX = this.x;
    this.currentY = this.y;

    this.radius = 1 + Math.random() * 2.2;
    this.baseAlpha = 0.45 + Math.random() * 0.5;
    this.alpha = this.baseAlpha;

    // Orbital positioning around center
    this.orbitRadius = 32 + Math.random() * 115;
    this.orbitSpeed = (0.024 + Math.random() * 0.04) * (Math.random() < 0.5 ? 1 : -1);
    this.orbitAngle = Math.random() * Math.PI * 2;

    // Swirl factor during phase 1 collapse
    this.swirlFactor = (Math.random() - 0.5) * 1.8;

    // RBCurexia particle identity colors (Electric Blue, Cobalt, Violet, subtle Magenta/Cyan)
    const palette = [
      '#38BDF8', // Electric Cyan Blue
      '#2563EB', // Cobalt Blue
      '#1D4ED8', // Deep Royal Blue
      '#60A5FA', // Ice Blue
      '#A855F7', // Soft Violet
      '#C084FC', // Lavender Violet
      '#06B6D4', // Cyan
      '#EC4899', // Subtle Magenta Accent
      '#FFFFFF', // Pure White Starlight
    ];
    this.color = palette[Math.floor(Math.random() * palette.length)];

    // Outward explosion vector for Phase 4 reconstruction
    const outAngle = Math.atan2(this.y - cy, this.x - cx) + (Math.random() - 0.5) * 0.6;
    const speed = 8 + Math.random() * 15;
    this.vxOut = Math.cos(outAngle) * speed;
    this.vyOut = Math.sin(outAngle) * speed;
  }
}

export default function PageTransitionCurtain() {
  const location = useLocation();
  const [phase, setPhase] = useState('idle'); // 'idle' | 'dissolving' | 'forming' | 'revealing' | 'reconstructing'
  const [destinationInfo, setDestinationInfo] = useState({
    num: '01',
    name: 'Overview',
    label: 'OVERVIEW',
    tagline: 'PLATFORM TOPOLOGY & CLINICAL CONTINUITY',
  });

  const prevPathRef = useRef(location.pathname);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const hudRef = useRef(null);
  const animFrameRef = useRef(null);
  const safetyTimerRef = useRef(null);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    // Only animate on actual path change
    if (prevPathRef.current === location.pathname) return;

    const dest = getDestinationInfo(location.pathname);
    setDestinationInfo(dest);
    prevPathRef.current = location.pathname;

    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReduced) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    // Cancel any ongoing animation or safety timer
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }

    // Set transition active
    isTransitioningRef.current = true;
    setPhase('dissolving');

    // Make container visible immediately with direct DOM manipulation for maximum responsiveness
    if (containerRef.current) {
      containerRef.current.style.opacity = '1';
      containerRef.current.style.visibility = 'visible';
    }

    // Absolute guaranteed fallback: force reset after 1200ms so screen CAN NEVER get stuck black
    safetyTimerRef.current = setTimeout(() => {
      endTransition();
    }, 1200);

    const canvas = canvasRef.current;
    if (!canvas) {
      // Immediate fallback if canvas not available
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      endTransition();
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      endTransition();
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth || 1200;
    const height = window.innerHeight || 800;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = width / 2;
    const cy = height / 2;

    // Instantiate particles (320 on desktop, 130 on mobile)
    const isMobile = width < 768;
    const count = isMobile ? 130 : 320;
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new TransitionParticle(width, height, cx, cy));
    }

    const DURATION = 980; // Total transition duration in milliseconds
    let startTime = null;
    let hasScrolled = false;
    let currentPhase = 'dissolving';

    const endTransition = () => {
      isTransitioningRef.current = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
        safetyTimerRef.current = null;
      }
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
        containerRef.current.style.visibility = 'hidden';
      }
      setPhase('idle');
      if (canvasRef.current) {
        const c = canvasRef.current;
        const cCtx = c.getContext('2d');
        if (cCtx) cCtx.clearRect(0, 0, c.width, c.height);
      }
    };

    const render = (now) => {
      if (!isTransitioningRef.current) return;
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);

      // Phase state synchronization only when phase changes (avoids 60fps React render thrashing)
      let nextPhase = currentPhase;
      if (progress < 0.25) {
        nextPhase = 'dissolving';
      } else if (progress < 0.52) {
        nextPhase = 'forming';
      } else if (progress < 0.74) {
        nextPhase = 'revealing';
      } else {
        nextPhase = 'reconstructing';
      }

      if (nextPhase !== currentPhase) {
        currentPhase = nextPhase;
        setPhase(nextPhase);
      }

      // Midpoint instant scroll to top (around ~340ms when central vortex & HUD obscure the page)
      if (progress >= 0.34 && !hasScrolled) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        hasScrolled = true;
      }

      // Dynamic backdrop & HUD opacity during Phase 4 outward reconstruction
      if (progress >= 0.74) {
        const outFactor = (progress - 0.74) / 0.26;
        const fade = Math.max(0, 1 - outFactor * 1.15);
        if (containerRef.current) {
          containerRef.current.style.opacity = String(fade);
        }
        if (hudRef.current) {
          hudRef.current.style.opacity = String(Math.max(0, 1 - outFactor * 1.4));
          hudRef.current.style.transform = `scale(${1 + outFactor * 0.08})`;
        }
      } else {
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
        if (hudRef.current) {
          if (progress < 0.25) {
            hudRef.current.style.opacity = '0';
            hudRef.current.style.transform = 'scale(0.92)';
          } else {
            hudRef.current.style.opacity = '1';
            hudRef.current.style.transform = 'scale(1)';
          }
        }
      }

      // Canvas clearing with deep translucent cosmic trail
      if (progress < 0.74) {
        ctx.fillStyle = 'rgba(4, 2, 10, 0.28)';
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      // Render & update particles with luminous additive blending
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (progress < 0.25) {
          // PHASE 1: Dissolution towards center vortex with swirling spiral motion
          const t1 = progress / 0.25;
          const directX = p.startX + (cx - p.startX) * (t1 * t1);
          const directY = p.startY + (cy - p.startY) * (t1 * t1);
          const angle = Math.atan2(cy - p.startY, cx - p.startX);
          const perpX = -Math.sin(angle) * (1 - t1) * 75 * p.swirlFactor;
          const perpY = Math.cos(angle) * (1 - t1) * 75 * p.swirlFactor;

          p.currentX = directX + perpX;
          p.currentY = directY + perpY;
          p.alpha = p.baseAlpha;
        } else if (progress < 0.74) {
          // PHASE 2 & 3: Central orbital energy formation around the R monogram
          p.orbitAngle += p.orbitSpeed;
          const breath = 1 + Math.sin(progress * 16 + i) * 0.07;
          const r = p.orbitRadius * breath;
          p.currentX = cx + Math.cos(p.orbitAngle) * r;
          p.currentY = cy + Math.sin(p.orbitAngle) * r;
          p.alpha = Math.min(1, p.baseAlpha * 1.3);
        } else {
          // PHASE 4: Radial cosmic expansion & dissolution to unveil new page
          const t4 = (progress - 0.74) / 0.26;
          p.currentX += p.vxOut * (1 + t4 * 3.4);
          p.currentY += p.vyOut * (1 + t4 * 3.4);
          p.alpha = Math.max(0, p.baseAlpha * (1 - t4));
        }

        // Draw particle with subtle radiant glow
        ctx.beginPath();
        ctx.arc(p.currentX, p.currentY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      // Subtle molecular web connection threads during central formation (Phase 2 & 3)
      if (progress >= 0.25 && progress < 0.74) {
        ctx.shadowBlur = 0;
        ctx.lineWidth = 0.6;
        for (let i = 0; i < particles.length; i += 3) {
          for (let j = i + 1; j < particles.length; j += 4) {
            const p1 = particles[i];
            const p2 = particles[j];
            const distSq = (p1.currentX - p2.currentX) ** 2 + (p1.currentY - p2.currentY) ** 2;
            if (distSq < 1700) {
              const alphaLine = (1 - Math.sqrt(distSq) / 41.2) * 0.16;
              ctx.strokeStyle = `rgba(56, 189, 248, ${alphaLine})`;
              ctx.beginPath();
              ctx.moveTo(p1.currentX, p1.currentY);
              ctx.lineTo(p2.currentX, p2.currentY);
              ctx.stroke();
            }
          }
        }
      }

      ctx.restore();

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(render);
      } else {
        endTransition();
      }
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    };
  }, [location.pathname]);

  const isVisible = phase !== 'idle';

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] pointer-events-none select-none overflow-hidden transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
      }}
    >
      <style>{`
        @keyframes ecgFlowTrans {
          0% { stroke-dashoffset: 320; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes spinSlowTrans {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Deep Obsidian / Cosmic Background Backdrop with Soft Aurora Waves */}
      <div className="absolute inset-0 bg-[#04020a]" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      {/* High-Performance 60FPS Particles Canvas - ALWAYS Mounted */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-10 pointer-events-none"
      />

      {/* Central Identity HUD (Appears in Phase 2 & 3, Disperses in Phase 4) */}
      <div
        ref={hudRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none transition-all duration-300 opacity-0 scale-95"
      >
        <div className="relative flex flex-col items-center text-center px-6 py-4 max-w-lg mx-auto">
          {/* Glowing R Monogram with Tilted Orbit Ring matching reference media_1795431437522_e79f733e.jpg */}
          <div className="relative w-28 h-24 flex items-center justify-center mb-2.5">
            <svg
              viewBox="0 0 120 100"
              className="w-24 h-20 overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="transRGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#E879F9" />
                </linearGradient>
                <linearGradient id="transOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#A855F7" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
                </linearGradient>
                <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Elliptical tilted orbit ring */}
              <ellipse
                cx="60"
                cy="50"
                rx="54"
                ry="20"
                transform="rotate(-18 60 50)"
                stroke="url(#transOrbitGrad)"
                strokeWidth="1.2"
                fill="none"
                strokeDasharray="4 3"
                opacity="0.85"
              />

              {/* Glowing orbital star point */}
              <g transform="translate(98, 30)">
                <circle cx="0" cy="0" r="3" fill="#E879F9" filter="url(#starGlow)" />
                <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
              </g>

              {/* Iconic Stylized R letterform */}
              <path
                d="M 40 30 L 72 30 C 82 30 88 35 88 42 C 88 48 83 53 74 54 L 88 72 L 76 72 L 64 55 L 52 55 L 52 72 L 40 72 Z M 52 39 L 52 47 L 70 47 C 74 47 77 45 77 43 C 77 40 74 39 70 39 Z"
                fill="url(#transRGrad)"
                filter="drop-shadow(0 0 16px rgba(56, 189, 248, 0.65))"
              />
            </svg>
          </div>

          {/* Monumental Clean Typography */}
          <div className="font-display text-base sm:text-lg font-semibold tracking-[0.38em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-200 to-purple-400">
            R B C U R E X I A
          </div>
          <div className="font-mono text-[9px] sm:text-[9.5px] tracking-[0.24em] uppercase text-cyan-200/70 pt-0.5">
            INNOVATING HEALTHCARE. EMPOWERING LIVES.
          </div>

          {/* Dynamic Destination HUD Box */}
          <div className="pt-4 flex flex-col items-center space-y-2">
            {/* Rotating Orbital Pulse Ring */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-purple-500/40 animate-[spin_3s_linear_infinite]" />
              <div className="absolute inset-1 rounded-full border border-cyan-400/60 border-t-transparent animate-[spin_1.5s_linear_infinite]" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38BDF8]" />
            </div>

            {/* Destination Page Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-cyan-400/35 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.25)]">
              <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-cyan-300 uppercase">
                OPENING {destinationInfo.label}
              </span>
            </div>

            {/* Animated Mini ECG Line */}
            <div className="w-52 h-5 pt-1">
              <svg viewBox="0 0 160 20" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="ecgGradTrans" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 10 L 50 10 L 55 4 L 60 16 L 65 2 L 70 14 L 75 10 L 160 10"
                  fill="none"
                  stroke="url(#ecgGradTrans)"
                  strokeWidth="1.8"
                  strokeDasharray="160"
                  className="animate-[ecgFlowTrans_1.2s_linear_infinite]"
                />
              </svg>
            </div>

            <div className="font-mono text-[8.5px] tracking-[0.28em] uppercase text-slate-400/80">
              ENTERING THE FUTURE...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
