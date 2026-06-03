import React from 'react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-2 w-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
        <h2 className="text-xs font-black tracking-widest text-slate-400 uppercase">Competitive Record</h2>
      </div>

      <div className="relative p-6 bg-gradient-to-r from-blue-950/20 to-slate-900/40 border border-blue-900/30 rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <div>
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest bg-blue-950 px-2 py-0.5 rounded border border-blue-900">
              Competitive Merit
            </span>
            <h3 className="text-lg font-bold text-white mt-2">Top 8 Finalist — Sinhgad Hackathon 2026</h3>
          </div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Pune, India</span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Selected in the upper tier of competing squads out of a diverse field[cite: 1]. Managed rapid engineering sprints to conceptualize, program, and present a functioning prototype stack within an intensive competition schedule[cite: 1].
        </p>
      </div>
    </section>
  );
}