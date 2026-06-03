import React from 'react';

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "PHP", "Dart", "C", "R"],
      accent: "slate"
    },
    {
      title: "Web & Frameworks",
      skills: ["Flutter", "Google Gemini API", "HTML5", "CSS3", "JavaScript", "WAMP Stack"],
      accent: "blue"
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "PostgreSQL", "Firebase"],
      accent: "slate"
    }
  ];

  return (
    <section id="skills" className="py-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-2 w-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
        <h2 className="text-xs font-black tracking-widest text-slate-400 uppercase">Core Tech Stack</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="p-6 bg-slate-900/40 border border-slate-900 rounded-xl hover:border-slate-850 transition-all">
            <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span 
                  key={skill} 
                  className={`px-2.5 py-1 text-xs font-medium rounded border ${
                    group.accent === 'blue' 
                      ? 'bg-blue-950/30 text-blue-300 border-blue-900/40' 
                      : 'bg-slate-950 text-slate-300 border-slate-850'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}