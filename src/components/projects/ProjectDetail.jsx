import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TechIcon from '../common/TechIcon';
import Carousel from './Carousel';
import FlowDiagram from './FlowDiagram';

const ChevronLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ProjectDetail = ({ project }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 mb-10 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
      >
        <ChevronLeft width={16} height={16} aria-hidden="true" />
        Back to projects
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground tracking-tight">
          {project.title}
        </h1>
        {project.status && <span className="tag-item">{project.status}</span>}
      </div>

      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
        {project.description}
      </p>

      {project.highlights?.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-6">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="tag-item">
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mb-10">
        {project.tech.map((t) => (
          <TechIcon key={t} label={t} size={32} />
        ))}
      </div>

      <Carousel images={project.images} />

      {project.flow && (
        <div className="mt-10">
          <FlowDiagram nodes={project.flow.nodes} edges={project.flow.edges} />
        </div>
      )}

      <div className="flex gap-4 flex-wrap pt-8 mt-10 border-t border-border">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View Code on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
