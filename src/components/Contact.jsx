import React from 'react';
import { cvData } from '../data/content';
import Reveal from './common/Reveal';

const Contact = () => {
  const { email, linkedin } = cvData.personalInfo;

  return (
    <section id="contact" className="min-h-[70dvh] flex flex-col justify-center py-20 bg-muted">
      <div className="section-container py-0 w-full">
        <Reveal>
          <div className="rounded-2xl bg-card border border-border p-8 sm:p-12 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-10 shadow-sm">
            <div className="max-w-md">
              <p className="eyebrow mb-3">Get In Touch</p>
              <h2 className="heading-md !mb-3">Let&apos;s work together.</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I&apos;m currently looking for new professional opportunities in Data Analysis and Automation. Reach out directly via email or LinkedIn:
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:min-w-max">
              <a
                href={`mailto:${email}`}
                aria-label={`Send an email to ${email}`}
                className="btn-primary gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">{email}</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Facundo on LinkedIn (opens in new tab)"
                className="btn-secondary gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
                <span>LinkedIn Profile</span>
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
