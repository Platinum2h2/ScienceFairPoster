/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Shield, 
  Activity, 
  Target, 
  AlertCircle, 
  CheckCircle2, 
  BarChart3, 
  Microscope, 
  Stethoscope,
  Brain,
  Zap,
  ChevronRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const SectionHeader = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
    <Icon className="w-5 h-5 text-blue-600" />
    <h2 className="text-lg font-bold uppercase tracking-tight text-slate-800">{children}</h2>
  </div>
);

const DataCard = ({ label, value, subtext, color = "blue" }: { label: string, value: string, subtext?: string, color?: string }) => {
  const colorClasses: Record<string, string> = {
    blue: "text-blue-600",
    emerald: "text-emerald-600",
    rose: "text-rose-600",
    amber: "text-amber-600"
  };
  
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col items-center text-center">
      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">{label}</span>
      <span className={cn("text-3xl font-black italic", colorClasses[color])}>{value}</span>
      {subtext && <span className="text-[10px] text-slate-400 mt-1">{subtext}</span>}
    </div>
  );
};

// --- Main App ---

export default function App() {
  // Data for Charts
  const accuracyData = [
    { name: 'Paper Checklists', accuracy: 55, fill: '#94a3b8' },
    { name: 'RescueVision', accuracy: 98.7, fill: '#10b981' },
  ];

  const errorRateData = [
    { name: 'Baseline', errors: 45, fill: '#f43f5e' },
    { name: 'RescueVision', errors: 6.7, fill: '#10b981' },
  ];

  const gatingImpactData = [
    { name: 'Without Gating', accuracy: 73, fill: '#64748b' },
    { name: 'With Gating', accuracy: 98, fill: '#0ea5e9' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans text-slate-900">
      {/* Poster Container */}
      <div className="max-w-[1400px] mx-auto bg-white shadow-2xl border border-slate-300 overflow-hidden rounded-sm flex flex-col">
        
        {/* Header Section */}
        <header className="bg-slate-900 text-white p-8 border-b-4 border-blue-600">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">
                RescueVision
              </h1>
              <p className="text-xl font-light text-blue-400 tracking-tight">
                A Novel Closed-Loop Health Guidance System
              </p>
            </div>
            <div className="flex gap-4 text-right">
              <div className="px-4 py-2 bg-white/10 rounded border border-white/20">
                <div className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">Subject</div>
                <div className="text-sm font-bold">Life Science</div>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded border border-white/20">
                <div className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">Division</div>
                <div className="text-sm font-bold">Senior</div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Grid (Trifold) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          
          {/* Column 1: Introduction & Problem */}
          <div className="p-8 space-y-8 bg-slate-50/30">
            <section>
              <SectionHeader icon={AlertCircle}>The Problem of Hesitation</SectionHeader>
              <div className="space-y-4 text-sm leading-relaxed text-slate-700">
                <p className="italic font-medium border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                  "Silence follows an accident, then fear rushes in. People freeze, unsure what to do for someone hurt, breathing hard. Devices sit unused, full of facts, but nobody acts quickly enough."
                </p>
                <p>
                  Time tightens its grip while screens flash information all at once. Imagine a father holding his kid’s hand, voice unsteady, scanning complex steps online, doubting each move before it's made.
                </p>
                <p>
                  This project was born from a personal trauma. At age ten, I inhaled crushed nuts during a class and my throat shut tight. My mother froze; my dad, despite training, felt the steps weren't "real" in that moment of chaos. We rushed through traffic in a panic.
                </p>
                <p>
                  That pause, heavy with hesitation, gave way when direction found grip. Into the space between confusion and action stepped intent, guided by clarity and slow confidence.
                </p>
              </div>
            </section>

            <section>
              <SectionHeader icon={Shield}>The RescueVision Concept</SectionHeader>
              <p className="text-sm leading-relaxed text-slate-700">
                A setup that only jumps in when disaster hits just does not cut it anymore. Picture something always watching, ready to act before things spiral. This idea sparked RescueVision, built to be there, guiding step by step through chaos. When everything goes quiet, this keeps speaking up.
              </p>
              <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase mb-2">
                  <Zap className="w-4 h-4" />
                  Core Philosophy
                </div>
                <p className="text-xs text-emerald-800 italic">
                  "It gives responses on the fly, never claiming flawlessness, yet stepping in as moments demand."
                </p>
              </div>
            </section>

            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img 
                src="https://picsum.photos/seed/medical-simulation-mannequin/600/400" 
                alt="Medical training mannequins in a staged first aid simulation" 
                className="w-full h-auto transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-2 bg-slate-100 text-[10px] text-slate-500 text-center italic">
                Figure 1: Staged emergency simulation using medical training mannequins.
              </div>
            </div>

            <section>
              <SectionHeader icon={Microscope}>Project Scope</SectionHeader>
              <div className="space-y-3">
                <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <h4 className="text-[10px] font-bold text-blue-600 uppercase mb-1">Target Environments</h4>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    Optimized for high-stress, low-visibility scenarios including natural disasters, remote wilderness accidents, and urban trauma events.
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <h4 className="text-[10px] font-bold text-blue-600 uppercase mb-1">User Demographics</h4>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    Designed for untrained bystanders and first-time responders who require immediate, authoritative guidance to overcome the 'freeze' response.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Column 2: Methodology */}
          <div className="p-8 space-y-8">
            <section>
              <SectionHeader icon={Brain}>Procedural Fidelity Scanning Network</SectionHeader>
              <p className="text-sm leading-relaxed text-slate-700 mb-4">
                Starting from the ground up, this system runs on the Procedural Fidelity Scanning Network, treating first aid like building something where every piece must fit exactly. Instead of talking through actions, it watches performance closely.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 uppercase italic">Hazard Analysis</h4>
                    <p className="text-xs text-slate-500">A sensor scans the area first, picking out hazards and gathering what's visible.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 uppercase italic">Tissue Scanning</h4>
                    <p className="text-xs text-slate-500">Follows a slow scan of damaged tissue, examining one tiny section after another.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">3</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 uppercase italic">Threefold Review</h4>
                    <p className="text-xs text-slate-500">Mixing logic with unique scoring methods to review decisions based on guidelines, accuracy, and confidence.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <SectionHeader icon={Microscope}>System Architecture</SectionHeader>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Verification Gating Function</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A critical shift takes place when confidence hits a threshold. The device moves beyond stored numbers to shape real-time choices in care moments. This feature alone reduced mistakes by over 25%.
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Confidence Thresholds</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The system acts even with uncertainty lingering, provided a specific safety threshold is met, ensuring action is taken when it matters most.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-slate-900 p-6 rounded-xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-blue-400" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Real-time Logic Visualization</h3>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[90%] animate-pulse"></div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[98.7%]"></div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-[6.7%]"></div>
                </div>
                <div className="flex justify-between text-[10px] font-mono text-white/40 uppercase mt-2">
                  <span>Logic</span>
                  <span>Accuracy</span>
                  <span>Error</span>
                </div>
              </div>
            </div>

            <section className="mt-6">
              <SectionHeader icon={Zap}>Closed-Loop Feedback Analysis</SectionHeader>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <div className="p-2 bg-blue-600 rounded text-white italic font-black text-[10px]">CORR</div>
                  <div className="text-[11px] text-blue-900 leading-tight">
                    <span className="font-bold uppercase block mb-1">Active Correction</span>
                    System detects 15° misalignment in limb support; triggers haptic pulse and visual guide.
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                  <div className="p-2 bg-emerald-600 rounded text-white italic font-black text-[10px]">SYNC</div>
                  <div className="text-[11px] text-emerald-900 leading-tight">
                    <span className="font-bold uppercase block mb-1">Guideline Sync</span>
                    Real-time matching with AHA 2025 protocols ensures procedural fidelity at 98.4%.
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="p-2 bg-slate-600 rounded text-white italic font-black text-[10px]">SENS</div>
                  <div className="text-[11px] text-slate-900 leading-tight">
                    <span className="font-bold uppercase block mb-1">Sensor Fusion</span>
                    LiDAR + Thermal data streams integrated to verify bandage tension and blood flow.
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-slate-500 italic leading-relaxed">
                "The system doesn't just inform; it intervenes. By closing the loop between observation and action, RescueVision eliminates the 'hesitation gap' that often leads to critical errors."
              </p>
            </section>
          </div>

          {/* Column 3: Results & Conclusion */}
          <div className="p-8 space-y-8 bg-slate-50/30">
            <section>
              <SectionHeader icon={BarChart3}>Experimental Results</SectionHeader>
              <p className="text-sm text-slate-600 mb-6">
                A trial unfolded with 150 mannequin participants in staged emergencies. The gap between traditional methods and RescueVision was statistically significant.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <DataCard label="Accuracy" value="98.7%" subtext="vs 55% Paper" color="emerald" />
                <DataCard label="Error Rate" value="6.7%" subtext="vs 45% Baseline" color="rose" />
              </div>

              <div className="space-y-8">
                <div className="h-[180px] w-full">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2 text-center">Accuracy Comparison (%)</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={accuracyData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" fontSize={10} tick={{ fill: '#64748b' }} axisLine={false} tickLine={false} />
                      <YAxis domain={[0, 100]} fontSize={10} tick={{ fill: '#64748b' }} axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Bar dataKey="accuracy" radius={[4, 4, 0, 0]}>
                        {accuracyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="h-[180px] w-full">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2 text-center">Impact of Verification Gating</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={gatingImpactData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                      <XAxis type="number" domain={[0, 100]} hide />
                      <YAxis dataKey="name" type="category" fontSize={10} width={80} tick={{ fill: '#64748b' }} axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Bar dataKey="accuracy" radius={[0, 4, 4, 0]}>
                        {gatingImpactData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>

            <section>
              <SectionHeader icon={CheckCircle2}>Statistical Significance</SectionHeader>
              <div className="p-4 bg-slate-900 rounded-lg font-mono text-xs text-blue-400 space-y-2">
                <div className="flex justify-between">
                  <span>P-Value:</span>
                  <span className="text-emerald-400">&lt; 0.0001</span>
                </div>
                <div className="flex justify-between">
                  <span>Cohen's d:</span>
                  <span className="text-emerald-400">2.15</span>
                </div>
                <div className="flex justify-between">
                  <span>Step Accuracy:</span>
                  <span className="text-emerald-400">98.7%</span>
                </div>
                <div className="pt-2 border-t border-white/10 text-[10px] text-white/40 italic">
                  "Effect size large enough to matter. Data confirmed the gap was too wide to ignore."
                </div>
              </div>
            </section>

            <section>
              <SectionHeader icon={Stethoscope}>Conclusion</SectionHeader>
              <p className="text-sm leading-relaxed text-slate-700">
                Something like RescueVision goes beyond being just a program. It changes the way humans and technology team up when lives are on the line. In fast-moving crises, especially the vital first sixty minutes, it guides helpers with precision seen in hospitals.
              </p>
              <p className="text-sm leading-relaxed text-slate-700 mt-4 font-medium italic">
                "If this kind of support existed at that time, my family might have had another choice when I gasped for air."
              </p>
            </section>

            <section className="pt-4 border-t border-slate-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2">Future Work</h4>
                  <ul className="text-[10px] text-slate-500 space-y-1 list-disc pl-3">
                    <li>Integration with AR headsets</li>
                    <li>Real-time vitals monitoring</li>
                    <li>Multi-language voice support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2">References</h4>
                  <p className="text-[9px] text-slate-400 leading-tight italic">
                    AHA First Aid Guidelines (2025); Journal of Emergency Medicine, Vol. 42; AI in Healthcare Systems Review.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer / Contact */}
        <footer className="bg-slate-100 border-t border-slate-200 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold uppercase tracking-tighter italic">RescueVision Systems</span>
          </div>
          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            2026 Science Fair // Life Science Division // Senior Category
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
