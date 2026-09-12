import React from 'react';
import { cvData } from '../data/content';
import Reveal from './common/Reveal';
import ProjectCard from './projects/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <Reveal>
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-3">Portfolio</p>
          <h2 className="heading-md mx-auto">Selected Work</h2>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {cvData.projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
