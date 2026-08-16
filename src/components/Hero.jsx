import React from 'react';
import { cvData } from '../data/content';

const Hero = () => {
  const { personalInfo, hero } = cvData;

  return (
    <section id="home" className="section-container min-h-screen flex flex-col justify-center pt-32">
      <div className="max-w-3xl">
        <h2 className="text-sm font-semibold tracking-widest text-charcoal-500 uppercase mb-4">
          {personalInfo.title}
        </h2>
        <h1 className="heading-lg">
          {hero.headline}
        </h1>
        <p className="text-body text-xl max-w-2xl mb-10">
          {hero.description}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary">
            View Work
          </a>
          {personalInfo.cvPdfUrl && (
            <a 
              href={personalInfo.cvPdfUrl} 
              download 
              className="btn-secondary"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
