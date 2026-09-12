import React, { useState } from 'react';
import { cvData } from '../data/content';
import Reveal from './common/Reveal';
import TechIcon from './common/TechIcon';

const SkillBadge = ({ tech }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-2xl flex flex-col items-center justify-center gap-3 py-6 px-4 transition-all duration-200 border ${
        hovered ? 'bg-secondary border-accent -translate-y-[3px] shadow-lg' : 'bg-card border-border'
      }`}
    >
      <TechIcon label={tech} size={42} />
      <span className="text-xs font-mono text-center text-muted-foreground">{tech}</span>
    </div>
  );
};

const allTechnologies = cvData.stack.flatMap((group) => group.technologies);

const Stack = () => {
  return (
    <section id="stack" className="bg-muted">
      <div className="section-container">
        <Reveal>
          <div className="mb-12">
            <p className="eyebrow mb-3">Technical stack</p>
            <h2 className="heading-md !mb-0">Skills &amp; Tools</h2>
          </div>
        </Reveal>


    <Reveal>
      <p className="text-sm sm:text-base leading-7 mb-10 text-muted-foreground">
        I focus on <strong className="text-foreground">data and automation</strong>, with{' '}
        <strong className="text-foreground">Python</strong> as my main tool for data processing, backend development,
        and automated workflows. I use <strong className="text-foreground">SQL</strong> and{' '}
        <strong className="text-foreground">PostgreSQL</strong> to work with relational data, and{' '}
        <strong className="text-foreground">Power BI</strong> to build dashboards and communicate insights. My{' '}
        <strong className="text-foreground">Django</strong> experience also gives me a strong backend foundation,
        allowing me to build applications that connect data, business logic, and automation.
      </p>
    </Reveal>
    
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {allTechnologies.map((tech, i) => (
            <Reveal key={tech} delay={i * 30}>
              <SkillBadge tech={tech} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
