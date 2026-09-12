import React from 'react';
import { cvData } from '../data/content.js';
import Reveal from './common/Reveal';

const Hero = () => {
  const { personalInfo, hero } = cvData;
  const [headlineIntro, headlineRest] = hero.headline.split(' — ');

  const stats = [
    { value: String(cvData.projects.length), label: 'Projects' },
    { value: String(cvData.stack.length), label: 'Focus Areas' },
    { value: String(cvData.stack.reduce((acc, s) => acc + s.technologies.length, 0)), label: 'Technologies' },
  ];

  return (
    <section id="home" className="section-container min-h-[90vh] sm:min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow mb-6">Software Engineering Student · {personalInfo.title}</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              <span className="text-foreground">{headlineIntro}</span>
              {headlineRest && (
                <>
                  {' — '}
                  <span className="text-muted-foreground italic">{headlineRest}</span>
                </>
              )}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed md:leading-[1.8] max-w-2xl mb-8 sm:mb-10">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                <span>Explore Work</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {personalInfo.cvPdfUrl && (
                <a
                  href={`${import.meta.env.BASE_URL}${personalInfo.cvPdfUrl}`}
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
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 sm:mt-16 pt-8 flex flex-wrap gap-8 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-light text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
                  <div className="text-xs mt-1 font-mono tracking-wide uppercase text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full pointer-events-none transform scale-90"></div>

          <Reveal delay={320} className="w-full max-w-md">
            <div className="relative w-full bg-card border border-border rounded-lg shadow-2xl shadow-black/10 dark:shadow-black/50 overflow-hidden select-none">
              <div className="flex items-center justify-between px-4 py-2.5 bg-muted border-b border-border">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">query_analytics.sql</span>
                <span className="w-8"></span>
              </div>

              <div className="p-4 sm:p-5 font-mono text-xs sm:text-xs text-foreground/80 leading-relaxed bg-card space-y-1 overflow-x-auto">
                <p className="text-muted-foreground italic">-- Automated Data Pipeline & KPIs</p>
                <p><span className="text-primary font-bold">SELECT</span></p>
                <p className="pl-4">timestamp,</p>
                <p className="pl-4">metric_name,</p>
                <p className="pl-4"><span className="text-success">AVG</span>(latency_ms) <span className="text-primary font-bold">AS</span> avg_latency,</p>
                <p className="pl-4"><span className="text-success">COUNT</span>(*) <span className="text-primary font-bold">AS</span> total_records</p>
                <p><span className="text-primary font-bold">FROM</span> telemetry_stream</p>
                <p><span className="text-primary font-bold">WHERE</span> status = <span className="text-warning">'ACTIVE'</span></p>
                <p><span className="text-primary font-bold">GROUP BY</span> timestamp, metric_name;</p>
              </div>

              <div className="flex items-center justify-between px-4 py-2.5 bg-muted border-t border-border text-[11px] font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success"></span>
                  <span>Pipeline: <strong className="text-foreground font-semibold">Active</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Latency: <strong className="text-foreground font-semibold">&lt;12ms</strong></span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Hero;
