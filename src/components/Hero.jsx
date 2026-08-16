import React from 'react';
import { cvData } from '../data/content';

const Hero = () => {
  const { personalInfo, hero } = cvData;

  return (
    <section id="home" className="section-container min-h-[90vh] sm:min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-16 relative">
      <div className="max-w-3xl">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-850 border border-border-color shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wider text-azure-300 uppercase">
            {personalInfo.title}
          </span>
        </div>

        <h1 className="heading-lg">
          {hero.headline}
        </h1>

        <p className="text-body text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 text-charcoal-300">
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
    </section>
  );
};

export default Hero;
