import React from 'react';
import { Link } from 'react-router-dom';
import TechIcon from '../common/TechIcon';

const ProjectCard = ({ project }) => {
  const cover = project.images?.[0];

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group text-left rounded-2xl overflow-hidden flex flex-col h-[420px] bg-card border border-border hover:bg-card-hover hover:-translate-y-1 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
    >
      <div className="relative h-52 shrink-0 overflow-hidden bg-muted">
        {cover && (
          <img
            src={cover.url}
            alt={cover.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {project.status && (
          <span className="absolute top-3 left-3 tag-item bg-card/90 backdrop-blur-sm">
            {project.status}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 min-h-0">
        <div className="flex items-center justify-end mb-3">
          <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            View project &rarr;
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-card-foreground font-serif mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1 overflow-hidden line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border-subtle">
          {project.tech.map((t) => (
            <TechIcon key={t} label={t} size={24} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
