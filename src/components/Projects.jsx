import React from 'react';

export default function Projects() {
  const customProjects = [
    {
      title: "LearnFlow — Intelligent Testing Platform",
      tech: "PHP · MySQL · AI Models",
      link: "https://github.com/Atharva9627/LearnFlow.git",
      bullets: [
        "Engineered an automated quiz generation module mapping text topics into structured curriculum diagnostics using targeted AI execution layers[cite: 1].",
        "Enforced systematic evaluation bounds through an explicit 'Hard Block' checking mechanism, disabling integrity exploits across the stateful assessment pipeline[cite: 1]."
      ]
    },
    {
      title: "FinancialGuard AI — Personal Portfolio Advisor",
      tech: "Flutter · Dart · Google Gemini API · Real-Time Data",
      link: "https://github.com/Atharva9627/FinancialguardAI.git",
      bullets: [
        "Architected a cross-platform pipeline evaluating active securities streams against historical datasets to stream real-time analytics to users[cite: 1].",
        "Integrated Google Gemini API LLM layers to map context-aware advisory text vectors across a secure user interface thread[cite: 1]."
      ]
    }
  ];

  return (
    <section id="projects" className="py-4">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-2 w-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
        <h2 className="text-xs font-black tracking-widest text-slate-400 uppercase">Featured Applications</h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {customProjects.map((project, idx) => (
          <div key={idx} className="group relative p-6 sm:p-8 bg-gradient-to-br from-slate-900/60 to-slate-950 border border-slate-900 rounded-xl hover:border-slate-800 transition-all shadow-xl">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-xs font-bold text-blue-500/80 uppercase mt-1 tracking-wider">{project.tech}</p>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 text-slate-400 hover:text-white text-xs font-bold rounded border border-slate-850 transition-colors w-fit">
                Repository
              </a>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <span className="text-blue-500 mt-1.5 min-w-[5px] h-[5px] bg-blue-500 rounded-full"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}