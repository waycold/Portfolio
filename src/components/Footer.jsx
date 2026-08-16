import React from 'react';
import { cvData } from '../data/content';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-charcoal-950 border-t border-border-color py-10 text-charcoal-300 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Branding and copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-white tracking-tight flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-azure-500 inline-block"></span>
            {cvData.personalInfo.name}
          </span>
          <span className="hidden sm:inline text-charcoal-600">•</span>
          <p className="text-xs sm:text-sm text-charcoal-400">
            © {year} All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
        
        {/* Right: Social Links & Back to top */}
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <a 
              href={cvData.personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-lg bg-charcoal-900 border border-border-color text-charcoal-300 hover:text-white hover:border-azure-500/60 hover:bg-charcoal-850 flex items-center justify-center transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href={cvData.personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-lg bg-charcoal-900 border border-border-color text-charcoal-300 hover:text-azure-400 hover:border-azure-500/60 hover:bg-charcoal-850 flex items-center justify-center transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-charcoal-900 border border-border-color text-charcoal-400 hover:text-white hover:border-azure-500/60 hover:bg-charcoal-850 flex items-center justify-center transition-all cursor-pointer shadow-sm"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
