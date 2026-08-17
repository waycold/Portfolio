import React from 'react';
import { cvData } from '../data/content';

const Stack = () => {
  return (
    <section id="stack" className="section-container">
      <div className="mb-10">
        <span className="text-xs font-bold tracking-widest text-azure-400 uppercase">Core Competencies</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">Tech Stack & Tools</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cvData.stack.map((group, index) => (
          <div 
            key={index} 
            className="flex flex-col p-5 bg-charcoal-850 border border-border-color rounded-md hover:border-azure-500/40 transition-all duration-300 shadow-md shadow-black/20"
          >
            <h3 className="text-xs font-bold tracking-widest text-azure-300 uppercase mb-4 pb-2 border-b border-border-color flex items-center justify-between">
              <span>{group.category}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-charcoal-900 text-charcoal-400 font-mono">
                {group.technologies.length}
              </span>
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {group.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="px-2.5 py-1 bg-charcoal-900 text-slate-200 text-xs sm:text-sm font-medium rounded border border-border-color hover:border-azure-400/50 hover:text-white transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
