import React from 'react';
import { cvData } from '../data/content';

const Hero = () => {
  const { personalInfo, hero } = cvData;

  return (
    <section id="home" className="section-container min-h-[90vh] sm:min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Typography and Call to Action */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-charcoal-850 border border-border-color shadow-sm mb-6 self-start">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-azure-300 uppercase">
              {personalInfo.title}
            </span>
          </div>

          <h1 className="heading-lg leading-[1.15]">
            {hero.headline}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-charcoal-300 leading-relaxed md:leading-[1.8] max-w-2xl mb-8 sm:mb-10">
            {hero.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              <span>Explore Work</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {personalInfo.cvPdfUrl && (
              <a 
                href={personalInfo.cvPdfUrl} 
                download 
                className="btn-secondary"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Visual Data / Code Component (Balanced composition) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-azure-500/10 blur-3xl rounded-full pointer-events-none transform scale-90"></div>

          {/* Code & Analytics Card */}
          <div className="relative w-full max-w-md bg-charcoal-900 border border-border-color rounded-lg shadow-2xl shadow-black/50 overflow-hidden select-none">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-charcoal-950 border-b border-border-color">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[11px] font-mono text-charcoal-400">query_analytics.sql</span>
              <span className="w-8"></span>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-xs text-charcoal-200 leading-relaxed bg-charcoal-950/95 space-y-1 overflow-x-auto">
              <p className="text-charcoal-400 italic">-- Automated Data Pipeline & KPIs</p>
              <p><span className="text-azure-400 font-bold">SELECT</span></p>
              <p className="pl-4">timestamp,</p>
              <p className="pl-4">metric_name,</p>
              <p className="pl-4"><span className="text-emerald-400">AVG</span>(latency_ms) <span className="text-azure-400 font-bold">AS</span> avg_latency,</p>
              <p className="pl-4"><span className="text-emerald-400">COUNT</span>(*) <span className="text-azure-400 font-bold">AS</span> total_records</p>
              <p><span className="text-azure-400 font-bold">FROM</span> telemetry_stream</p>
              <p><span className="text-azure-400 font-bold">WHERE</span> status = <span className="text-amber-300">'ACTIVE'</span></p>
              <p><span className="text-azure-400 font-bold">GROUP BY</span> timestamp, metric_name;</p>
            </div>

            {/* Terminal Telemetry Status Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-charcoal-900 border-t border-border-color text-[11px] font-mono text-charcoal-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Pipeline: <strong className="text-white font-semibold">Active</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-azure-400"></span>
                <span>Latency: <strong className="text-white font-semibold">&lt;12ms</strong></span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
