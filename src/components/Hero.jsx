import React from 'react';

export default function Hero() {
  return (
    <header className="relative min-h-[65vh] flex flex-col justify-center items-center px-6 border-b border-slate-900 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none"></div>
      
      <div className="relative max-w-3xl mx-auto z-10">
        <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-blue-400 bg-blue-950/50 border border-blue-900/50 rounded-full uppercase mb-4">
          Available for Internships
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
          ATHARVA SAWANT
        </h1>
        <p className="mt-3 text-lg sm:text-xl font-semibold text-blue-400 tracking-wide">
          Computer Engineering Student | AI Integration & Full-Stack Developer
        </p>
        <p className="mt-6 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Detail-oriented undergraduate at <strong className="text-slate-200">KJ Somaiya College of Engineering</strong>. I enjoy architecting intelligent applications, building responsive interfaces, and resolving complex technical issues through creative engineering solutions.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="https://github.com/Atharva9627" target="_blank" rel="noreferrer" 
             className="flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg border border-slate-800 transition-all shadow-xl">
            GitHub Portfolio
          </a>
          <a href="https://www.linkedin.com/in/atharva-sawant-3548a031a" target="_blank" rel="noreferrer"
             className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-lg transition-all shadow-lg shadow-blue-900/20">
            LinkedIn Profile
          </a>
          <a href="/resume.pdf" download
             className="flex items-center gap-2 px-5 py-3 bg-slate-950 hover:bg-slate-900 text-slate-300 font-medium text-sm rounded-lg border border-slate-850 transition-all">
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}