import React from 'react';
import { cvData } from '../data/content';

const About = () => {
  const { about, personalInfo } = cvData;

  return (
    <section id="about" className="py-16 sm:py-24 bg-charcoal-900 border-t border-border-color">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-widest text-azure-400 uppercase">Background & Experience</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-5">
            {about.bio.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-charcoal-300 leading-relaxed md:leading-[1.8]">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Personal & Academic Details Card */}
          <div className="lg:col-span-5 bg-charcoal-850 border border-border-color rounded-lg p-6 sm:p-7 shadow-xl shadow-black/30 space-y-6">
            <div className="flex items-center gap-4 pb-5 border-b border-border-color">
              <div className="w-11 h-11 rounded-md bg-azure-600/20 border border-azure-500/40 flex items-center justify-center text-azure-400 font-bold text-lg" aria-hidden="true">
                FR
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs text-charcoal-400">{personalInfo.title}</p>
              </div>
            </div>

            {/* List of Personal and Academic Data */}
            {/* List of Personal and Academic Data */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-azure-300 uppercase mb-3">
                Profile & Details
              </h4>
              
              <dl className="divide-y divide-border-color">
                {about.details && about.details.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-2.5"
                  >
                    <dt className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider shrink-0">
                      {item.label}
                    </dt>
                    <dd className="text-xs sm:text-sm font-medium text-charcoal-200 text-left sm:text-right">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
