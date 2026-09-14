import React from 'react';
import { cvData } from '../data/content';
import Reveal from './common/Reveal';
import TechIcon from './common/TechIcon';

const SkillBadge = ({ tech }) => {
  return (
    <div
      className="group rounded-2xl flex flex-col items-center justify-center gap-3 py-6 px-4 bg-card border border-border hover:bg-card-hover hover:border-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out cursor-default"
    >
      <TechIcon label={tech} size={42} />
      <span className="text-xs font-mono text-center text-card-foreground font-medium transition-colors duration-300">
        {tech}
      </span>
    </div>
  );
};

const allTechnologies = cvData.stack.flatMap((group) => group.technologies);

const Stack = () => {
  return (
    <section id="stack" className="min-h-dvh flex flex-col justify-center py-20 bg-muted">
      <div className="section-container py-0 w-full">
        <Reveal>
          <div className="mb-12">
            <p className="eyebrow mb-3 !text-muted-subtext">Technical stack</p>
            <h2 className="heading-md !mb-0 !text-muted-subtext">Skills &amp; Tools</h2>
          </div>
        </Reveal>


    <Reveal>
      <p className="text-sm sm:text-base leading-7 mb-10 text-muted-subtext">
        I focus on <strong>data and automation</strong>, with{' '}
        <strong>Python</strong> as my main tool for data processing, backend development,
        and automated workflows. I use <strong>SQL</strong> and{' '}
        <strong>PostgreSQL</strong> to work with relational data, and{' '}
        <strong>Power BI</strong> to build dashboards and communicate insights. My{' '}
        <strong>Django</strong> experience also gives me a strong backend foundation,
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
