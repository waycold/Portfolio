import React from 'react';
import { cvData } from '../data/content';
import Reveal from './common/Reveal';

const About = () => {
  const { about } = cvData;

  return (
    <section id="about" className="section-container min-h-dvh flex flex-col justify-center py-20">
      <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-12 items-start">
        <div>
          <Reveal>
            <div className="mb-10 sm:mb-12">
              <p className="eyebrow mb-3">Background &amp; Engineering Journey</p>
              <h2 className="heading-md !mb-0">About Me</h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-6">
              {about.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base sm:text-lg leading-relaxed md:leading-8 ${
                    index === 0 ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="rounded-xl bg-card border border-border p-5 sm:p-6 shadow-sm">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Profile &amp; Details
            </p>

            <dl className="space-y-2">
              {about.details && about.details.map((item, idx) => (
                <div key={idx} className="rounded-lg bg-muted/15 p-3">
                  <dt className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-0.5">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-medium text-card-foreground leading-snug">
                    {item.value}
                    {item.subtitle && (
                      <span className="block text-xs font-normal text-muted-foreground mt-0.5">
                        {item.subtitle}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
