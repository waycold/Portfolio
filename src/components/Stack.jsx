import React from 'react';
import { cvData } from '../data/content';

const Stack = () => {
  const [dataStack, engStack, deployStack, langStack] = cvData.stack;

  return (
    <section id="stack" className="min-h-[90vh] sm:min-h-screen py-[5vh] flex flex-col justify-center relative">
      <div className="w-[92vw] max-w-[88vw] xl:max-w-[84vw] mx-auto px-2 sm:px-4">
        
        {/* Section Header */}
        <div className="mb-[3vh]">
          <span className="text-xs font-bold tracking-widest text-azure-400 uppercase">Core Competencies</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-1">
            Tech Stack & Tools
          </h2>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5vw] items-stretch">
          
          {/* Card 1: Data & Analytics (HERO BENTO TILE - Largest) */}
          {dataStack && (
            <div className="lg:col-span-7 lg:row-span-2 p-[2.2vw] bg-charcoal-850 border border-border-color rounded-lg shadow-xl shadow-black/30 flex flex-col justify-between relative overflow-hidden group hover:border-azure-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-azure-500/5 blur-3xl rounded-full pointer-events-none"></div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-azure-400"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-azure-300">
                    Primary Focus
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3">
                  {dataStack.category}
                </h3>
                
                <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed mb-6 max-w-xl">
                  Extracting value from information through data cleaning, relational modeling, advanced SQL queries, automated ETL pipelines, and executive Power BI dashboards.
                </p>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 border-t border-border-color/80">
                {dataStack.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="p-3 bg-charcoal-900/90 border border-border-color/80 rounded hover:border-azure-400/60 hover:bg-charcoal-800 transition-all"
                  >
                    <span className="block text-sm sm:text-base font-semibold text-white">
                      {tech}
                    </span>
                    <span className="text-[11px] text-charcoal-400 font-mono">
                      {tech === 'SQL' || tech === 'PostgreSQL' ? 'Database & Queries' : tech === 'Python' || tech === 'Pandas' ? 'Analysis & ETL' : 'BI & Reports'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 2: Software Engineering */}
          {engStack && (
            <div className="lg:col-span-5 p-[1.8vw] bg-charcoal-850 border border-border-color rounded-lg shadow-md shadow-black/20 flex flex-col justify-between hover:border-azure-500/40 transition-all duration-300">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-azure-300 uppercase mb-3 pb-2 border-b border-border-color">
                  {engStack.category}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-300 mb-4 leading-relaxed">
                  Solid programming foundations, algorithms, and version control architecture.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {engStack.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1.5 bg-charcoal-900 text-slate-200 text-xs sm:text-sm font-medium rounded border border-border-color hover:border-azure-400/50 hover:text-white transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Deployment & Management */}
          {deployStack && (
            <div className="lg:col-span-5 p-[1.8vw] bg-charcoal-850 border border-border-color rounded-lg shadow-md shadow-black/20 flex flex-col justify-between hover:border-azure-500/40 transition-all duration-300">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-azure-300 uppercase mb-3 pb-2 border-b border-border-color">
                  {deployStack.category}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-300 mb-4 leading-relaxed">
                  Project tracking, agile sprint management, and continuous cloud deployment.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {deployStack.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1.5 bg-charcoal-900 text-slate-200 text-xs sm:text-sm font-medium rounded border border-border-color hover:border-azure-400/50 hover:text-white transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Card 4: Languages & Communication */}
          {langStack && (
            <div className="lg:col-span-12 p-[1.5vw] bg-charcoal-850 border border-border-color rounded-lg shadow-md shadow-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-azure-500/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-xs font-bold tracking-widest text-azure-300 uppercase">
                  {langStack.category}
                </span>
                <span className="hidden md:inline text-xs text-charcoal-400">
                  Global collaboration and technical communication
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {langStack.technologies.map((lang, langIndex) => (
                  <span 
                    key={langIndex} 
                    className="px-3 py-1 bg-charcoal-900 text-azure-300 text-xs sm:text-sm font-semibold rounded border border-border-color"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Stack;
