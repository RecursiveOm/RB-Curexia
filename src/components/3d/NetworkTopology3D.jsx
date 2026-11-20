import { useEffect, useRef, useState } from 'react';
import { CLINICIAN_NETWORK_NODES } from '../../data/ecosystemData.js';

export default function NetworkTopology3D() {
  const [selectedNode, setSelectedNode] = useState(CLINICIAN_NETWORK_NODES[0]);
  const [activeClanFilter, setActiveClanFilter] = useState('All');
  const canvasRef = useRef(null);

  const clans = ['All', 'Clinical Operations', 'Cardiology Clan', 'Research Clan', 'Hospital Network', 'Surgical Clan', 'Critical Care Clan'];

  const filteredNodes = activeClanFilter === 'All'
    ? CLINICIAN_NETWORK_NODES
    : CLINICIAN_NETWORK_NODES.filter(n => n.clan === activeClanFilter);

  // Position angles around circle
  const nodePositions = [
    { left: '50%', top: '8%' },
    { left: '88%', top: '28%' },
    { left: '86%', top: '74%' },
    { left: '50%', top: '92%' },
    { left: '14%', top: '74%' },
    { left: '12%', top: '28%' }
  ];

  // Draw animated synapse pulses between nodes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = canvas.width = 440;
    let height = canvas.height = 440;

    let pulseOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      pulseOffset += 0.02;

      // Draw lines from center hub to each active node
      nodePositions.forEach((pos, idx) => {
        const angle = (idx / nodePositions.length) * Math.PI * 2 - Math.PI / 2;
        const targetX = centerX + Math.cos(angle) * 165;
        const targetY = centerY + Math.sin(angle) * 165;

        // Base line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(targetX, targetY);
        ctx.strokeStyle = selectedNode.id === idx ? 'rgba(237, 232, 208, 0.45)' : 'rgba(147, 51, 234, 0.2)';
        ctx.lineWidth = selectedNode.id === idx ? 2 : 1;
        ctx.stroke();

        // Traveling pulse particle
        const t = (pulseOffset + idx * 0.25) % 1;
        const px = centerX + (targetX - centerX) * t;
        const py = centerY + (targetY - centerY) * t;

        ctx.beginPath();
        ctx.arc(px, py, selectedNode.id === idx ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fillStyle = selectedNode.id === idx ? '#ede8d0' : '#c084fc';
        ctx.shadowColor = '#a855f7';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [selectedNode]);

  return (
    <div className="w-full space-y-8 select-none">
      {/* Specialty Clan Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {clans.map((clan) => (
          <button
            key={clan}
            onClick={() => setActiveClanFilter(clan)}
            type="button"
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase transition-all ${
              activeClanFilter === clan
                ? 'bg-purple-600/30 border border-purple-400 text-white shadow-md shadow-purple-500/20'
                : 'bg-white/[0.03] border border-white/10 text-stonewarm hover:text-white hover:border-white/20'
            }`}
          >
            {clan}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive Radar Topology */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
            {/* Synapse Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

            {/* Orbit concentric circles */}
            <div className="absolute inset-4 rounded-full border border-white/[0.08] pointer-events-none" />
            <div className="absolute inset-16 rounded-full border border-dashed border-purple-500/20 pointer-events-none animate-spin" style={{ animationDuration: '60s' }} />
            <div className="absolute inset-32 rounded-full border border-champagne/15 pointer-events-none" />

            {/* Center RBCurexia Hub */}
            <div className="relative z-20 w-24 h-24 rounded-full bg-[#0a0418] border border-champagne/40 shadow-[0_0_50px_rgba(139,92,246,0.35)] flex flex-col items-center justify-center p-3 text-center">
              <img
                src="/assets/embedded-90b24ba6af66.webp"
                alt="RBCurexia Hub"
                className="w-10 h-auto object-contain"
              />
              <span className="text-[8px] font-mono tracking-widest text-champagne uppercase mt-1">
                CORE HUB
              </span>
            </div>

            {/* 6 Clinician Nodes positioned on perimeter */}
            {CLINICIAN_NETWORK_NODES.map((node) => {
              const pos = nodePositions[node.id];
              const isSelected = selectedNode.id === node.id;
              const isFilteredIn = activeClanFilter === 'All' || node.clan === activeClanFilter;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  type="button"
                  style={{ left: pos.left, top: pos.top }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 px-3 py-2 rounded-2xl flex items-center gap-2.5 transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#1b0c36] border-2 border-champagne shadow-[0_0_24px_rgba(237,232,208,0.35)] scale-110 z-40'
                      : isFilteredIn
                      ? 'bg-[#0b051c]/90 border border-white/15 hover:border-purple-400/60 hover:scale-105'
                      : 'bg-[#0b051c]/40 border border-white/5 opacity-40'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full font-display font-semibold text-[10px] flex items-center justify-center ${
                      isSelected
                        ? 'bg-champagne text-obsidian'
                        : 'bg-purple-900/80 text-bone'
                    }`}
                  >
                    {node.initials}
                  </span>
                  <div className="text-left hidden sm:block">
                    <span className="block text-[10px] font-semibold text-bone leading-tight">
                      {node.name}
                    </span>
                    <span className="block text-[9px] text-champagne/80 font-mono">
                      {node.role.split('·')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Clinician Node Dossier */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-7 rounded-3xl bg-[#0b051c] border border-white/15 shadow-2xl relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-champagne">
                  {selectedNode.rank}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[9px] font-mono text-emerald-300">
                  VERIFIED CLINICIAN
                </span>
              </div>

              <div>
                <h3 className="satin-headline text-2xl sm:text-3xl font-light text-white">
                  {selectedNode.fullName}
                </h3>
                <p className="text-xs text-purple-300 font-mono mt-1">
                  Clan: {selectedNode.clan} · Location: {selectedNode.location}
                </p>
              </div>

              <p className="text-sm text-stonewarm leading-relaxed text-[#c4b8d7] pt-2">
                {selectedNode.bio}
              </p>

              {/* Verified Clinical Capabilities */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-[9px] font-mono uppercase text-champagne block">
                    TELEMETRY HIGHWAY
                  </span>
                  <span className="text-xs text-bone font-medium">
                    Continuous EHR Case Synced
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-[9px] font-mono uppercase text-purple-300 block">
                    COLLABORATION STATUS
                  </span>
                  <span className="text-xs text-bone font-medium">
                    Active Multi-Center Board
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
