import React from 'react';
import { cvData } from '../data/content';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-charcoal-900 border-t border-border-color">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest text-azure-400 uppercase">Background & Experience</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-5">
            {cvData.about.bio.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-charcoal-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Visual Highlight Card */}
          <div className="lg:col-span-5 bg-charcoal-850 border border-border-color rounded-lg p-6 sm:p-7 shadow-xl shadow-black/30 space-y-6">
            <div className="flex items-center gap-4 pb-5 border-b border-border-color">
              <div className="w-11 h-11 rounded-md bg-azure-600/20 border border-azure-500/40 flex items-center justify-center text-azure-400 font-bold text-lg">
                FR
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{cvData.personalInfo.name}</h4>
                <p className="text-xs text-charcoal-400">{cvData.personalInfo.title}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-md bg-charcoal-900 border border-border-color/80">
                <span className="block text-xl font-black text-azure-400">UNLaM</span>
                <span className="text-xs text-charcoal-400 font-medium">Informatics Eng.</span>
              </div>
              <div className="p-3.5 rounded-md bg-charcoal-900 border border-border-color/80">
                <span className="block text-xl font-black text-emerald-400">100%</span>
                <span className="text-xs text-charcoal-400 font-medium">Focus & Delivery</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs text-charcoal-300">
                <span className="font-semibold text-slate-200">Data Analytics & Modeling</span>
                <span className="text-azure-400 font-mono">SQL / Python</span>
              </div>
              <div className="w-full h-1.5 rounded-sm bg-charcoal-900 overflow-hidden">
                <div className="h-full bg-azure-500 rounded-sm" style={{ width: '92%' }}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-charcoal-300 pt-2">
                <span className="font-semibold text-slate-200">Process Automation</span>
                <span className="text-azure-400 font-mono">ETL / Pipelines</span>
              </div>
              <div className="w-full h-1.5 rounded-sm bg-charcoal-900 overflow-hidden">
                <div className="h-full bg-azure-500 rounded-sm" style={{ width: '88%' }}></div>
              </div>

              <div className="flex items-center justify-between text-xs text-charcoal-300 pt-2">
                <span className="font-semibold text-slate-200">BI & Dashboards</span>
                <span className="text-azure-400 font-mono">Power BI / DAX</span>
              </div>
              <div className="w-full h-1.5 rounded-sm bg-charcoal-900 overflow-hidden">
                <div className="h-full bg-azure-500 rounded-sm" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
