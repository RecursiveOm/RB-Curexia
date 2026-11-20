import { useState } from 'react';

const INITIAL_PATIENTS = [
  {
    id: 'p1',
    token: '#OPD-01',
    name: 'Mr. Aarav Sharma',
    ageSex: '44 yrs · M',
    intake: 'Biometric Kiosk ID Verified',
    department: 'Cardiology · Clinical Mode e-Rx',
    vitals: 'BP 120/80 · HR 72 bpm',
    status: 'In Room',
    waitTime: '0m'
  },
  {
    id: 'p2',
    token: '#OPD-02',
    name: 'Ms. Priya Kapoor',
    ageSex: '31 yrs · F',
    intake: 'WhatsApp QR Chairside Check-in',
    department: 'General OPD · EHR Dossier Active',
    vitals: 'SpO2 99% · Temp 98.6°F',
    status: 'Next',
    waitTime: '4m'
  },
  {
    id: 'p3',
    token: '#OPD-03',
    name: 'Dr. Rajesh Mehta',
    ageSex: '52 yrs · M',
    intake: 'Digital Stylus Prescription Refill',
    department: 'Diabetology · Longitudinal Trends',
    vitals: 'HbA1c 6.8% · Fasting 112',
    status: 'Waiting',
    waitTime: '12m'
  },
  {
    id: 'p4',
    token: '#OPD-04',
    name: 'Mrs. Sneha Joshi',
    ageSex: '28 yrs · F',
    intake: 'Labonix Gateway Rapid Blood Panel',
    department: 'Antenatal Check · Safe Drug Locker',
    vitals: 'BP 110/70 · Safe Rxs Only',
    status: 'Waiting',
    waitTime: '18m'
  }
];

const INFLUX_NAMES = [
  { name: 'Vikram Malhotra', ageSex: '38 yrs · M', dept: 'Orthopedics · Fracture Review', intake: 'Facial Biometric Touchless' },
  { name: 'Ananya Rao', ageSex: '24 yrs · F', dept: 'Dermatology · Skin Lesion AI Scan', intake: 'WhatsApp QR Pre-booked' },
  { name: 'Rohan Deshmukh', ageSex: '61 yrs · M', dept: 'Neurology · Post-Stroke Ambulatory', intake: 'Medicore Wearable Vitals Alert' },
  { name: 'Kavita Patel', ageSex: '49 yrs · F', dept: 'Endocrinology · Thyroid Follow-up', intake: 'Labonix LIS Fast Track' }
];

export default function LivePatientQueueDemo() {
  const [queue, setQueue] = useState(INITIAL_PATIENTS);
  const [influxCount, setInfluxCount] = useState(4);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleSimulateInflux = () => {
    const nextIdx = influxCount % INFLUX_NAMES.length;
    const template = INFLUX_NAMES[nextIdx];
    const newTokenNum = String(queue.length + 1).padStart(2, '0');
    const newPatient = {
      id: `p-${Date.now()}`,
      token: `#OPD-${newTokenNum}`,
      name: template.name,
      ageSex: template.ageSex,
      intake: template.intake,
      department: template.dept,
      vitals: 'Vitals Triaged · Auto-synced',
      status: 'Waiting',
      waitTime: '15m'
    };

    setQueue((prev) => [newPatient, ...prev]);
    setInfluxCount((c) => c + 1);
    showToast(`Simulation: Influx event added ${template.name} via ${template.intake}`);
  };

  const cycleStatus = (id) => {
    const STATUS_FLOW = {
      Waiting: 'Next',
      Next: 'In Room',
      'In Room': 'Completed',
      Completed: 'Waiting'
    };

    setQueue((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const next = STATUS_FLOW[item.status] || 'Waiting';
          showToast(`Updated ${item.name} status to: ${next}`);
          return { ...item, status: next };
        }
        return item;
      })
    );
  };

  const activePatients = queue.filter((p) => p.status !== 'Completed').length;

  return (
    <div className="w-full rounded-3xl bg-[#090416] border border-purple-500/25 p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header matching user reference Image 2 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08] relative z-10">
        <div>
          <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-purple-400 font-semibold block mb-1">
            INTERACTIVE CLINICAL DEMO
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-light text-white tracking-tight">
            Live OPD Patient Queue Simulator
          </h3>
        </div>

        <div className="flex items-center gap-3.5 flex-wrap">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{activePatients} patients in queue · Auto-sync active</span>
          </div>

          <button
            onClick={handleSimulateInflux}
            type="button"
            className="px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-400/40 hover:border-purple-300 hover:bg-purple-800/60 text-xs font-medium text-purple-200 transition-all shadow-lg shadow-purple-950/50 flex items-center gap-1.5 active:scale-95 cursor-pointer"
          >
            <span>+ Sim Influx</span>
          </button>
        </div>
      </div>

      {/* Queue Cards List Container (Populated & Interactive!) */}
      <div className="space-y-3 relative z-10">
        {queue.map((patient) => {
          let badgeStyle = 'bg-amber-500/15 border-amber-400/40 text-amber-300';
          if (patient.status === 'In Room') {
            badgeStyle = 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]';
          } else if (patient.status === 'Next') {
            badgeStyle = 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.3)]';
          } else if (patient.status === 'Completed') {
            badgeStyle = 'bg-white/[0.05] border-white/20 text-white/50 line-through';
          }

          return (
            <div
              key={patient.id}
              onClick={() => cycleStatus(patient.id)}
              className="p-4 sm:p-4.5 rounded-2xl bg-[#0d071f]/80 hover:bg-[#140b30] border border-white/10 hover:border-purple-400/40 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
              title="Click to advance status"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 font-mono text-xs font-semibold text-champagne shrink-0">
                  {patient.token}
                </span>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm sm:text-base font-medium text-white group-hover:text-champagne transition-colors">
                      {patient.name}
                    </span>
                    <span className="text-[11px] font-mono text-stonewarm/80">
                      ({patient.ageSex})
                    </span>
                  </div>
                  <p className="text-xs text-stonewarm/90 font-light">
                    {patient.department} &nbsp;·&nbsp;{' '}
                    <span className="text-purple-300">{patient.intake}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 shrink-0 self-end sm:self-center">
                <span className="text-[11px] font-mono text-cyan-300/80 hidden md:inline">
                  {patient.vitals}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    cycleStatus(patient.id);
                  }}
                  className={`px-3 py-1 rounded-full border text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${badgeStyle}`}
                >
                  {patient.status}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Real-time Toast Feedback */}
      {toastMessage && (
        <div className="px-4 py-2.5 rounded-xl bg-purple-950/80 border border-purple-400/30 text-xs font-mono text-purple-200 shadow-xl transition-all animate-fade-in flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer Instructions */}
      <div className="flex items-center justify-between text-[11px] font-mono text-stonewarm/70 pt-2 border-t border-white/[0.05]">
        <span>Click any row or status badge to advance patient consultation stage</span>
        <span>AES-256 Encrypted Telemetry</span>
      </div>
    </div>
  );
}
