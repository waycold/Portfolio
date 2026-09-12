import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { cvData } from '../data/content';
import ProjectDetail from '../components/projects/ProjectDetail';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = cvData.projects.find((p) => String(p.id) === projectId);

  if (!project) return <Navigate to="/#projects" replace />;

  return <ProjectDetail project={project} />;
};

export default ProjectPage;
