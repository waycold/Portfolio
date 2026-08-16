import React from 'react';
import { cvData } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="section-container py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center bg-charcoal-850 border border-border-color rounded-2xl p-8 sm:p-12 shadow-xl shadow-black/30">
        <span className="text-xs font-bold tracking-widest text-azure-400 uppercase">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
          Let's Work Together
        </h2>
        <p className="text-sm sm:text-base text-charcoal-300 mb-8 max-w-xl mx-auto leading-relaxed">
          I'm currently looking for new opportunities in Data Analysis and Automation. Whether you have a project in mind, a question, or just want to connect, feel free to reach out!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href={`mailto:${cvData.personalInfo.email}`} 
            className="btn-primary w-full sm:w-auto"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>
          <a 
            href={cvData.personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary w-full sm:w-auto"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
