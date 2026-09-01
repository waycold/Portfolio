import React, { useState } from 'react';
import { cvData } from '../data/content';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = cvData.personalInfo.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-container py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center bg-charcoal-850 border border-border-color rounded-lg p-6 sm:p-10 md:p-12 shadow-xl shadow-black/30">
        <span className="text-xs font-bold tracking-widest text-azure-400 uppercase">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
          Let's Work Together
        </h2>
        <p className="text-sm sm:text-base text-charcoal-300 mb-8 max-w-xl mx-auto leading-relaxed">
          I'm currently looking for new professional opportunities in Data Analysis and Automation. Reach out directly via email or LinkedIn:
        </p>
        
        {/* Prominent Email Address Card */}
        <div className="max-w-md mx-auto mb-6 p-4 rounded-md bg-charcoal-900/90 border border-border-color flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-azure-500/10 text-azure-400 flex items-center justify-center shrink-0" aria-hidden="true">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a 
              href={`mailto:${email}`} 
              className="text-sm sm:text-base font-semibold text-white hover:text-azure-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-400 rounded px-1"
            >
              {email}
            </a>
          </div>

          <button
            onClick={handleCopyEmail}
            className="min-h-[44px] px-4 py-2 text-xs font-medium rounded bg-charcoal-800 hover:bg-charcoal-700 text-charcoal-200 hover:text-white transition-all cursor-pointer flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-400"
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            <span aria-live="polite" className="flex items-center gap-1.5">
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </span>
          </button>
        </div>

        {/* Direct Social / LinkedIn */}
        <div className="flex justify-center items-center gap-4">
          <a 
            href={cvData.personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Connect with Facundo on LinkedIn (opens in new tab)"
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-300 hover:text-azure-400 transition-colors min-h-[44px] px-4 py-2.5 rounded-md hover:bg-charcoal-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-400"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
            <span>Connect on LinkedIn</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
