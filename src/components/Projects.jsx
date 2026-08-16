import React, { useState, useEffect } from 'react';
import { cvData } from '../data/content';

const ProjectImageCarousel = ({ images, title }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Reset image index whenever images list changes
  useEffect(() => {
    setCurrentImgIndex(0);
  }, [images]);

  if (!images || images.length === 0) return null;

  const nextImg = (e) => {
    e?.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = (e) => {
    e?.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full min-h-[240px] sm:min-h-[300px] lg:min-h-[380px] max-h-[440px] bg-[#07090d] rounded-t-xl lg:rounded-t-none lg:rounded-l-xl overflow-hidden group flex items-center justify-center select-none">
      {/* Slider Container */}
      <div 
        className="w-full h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="w-full h-full shrink-0 flex items-center justify-center p-2 sm:p-4 bg-[#0a0d14]"
          >
            <img 
              src={img} 
              alt={`${title} snapshot ${idx + 1}`}
              className="w-full h-full object-contain max-h-[340px] lg:max-h-[390px] rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Floating Image Counter Badge */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-200 z-10">
          {currentImgIndex + 1} / {images.length}
        </div>
      )}

      {/* Navigation Arrows for Images (Visible on Hover/Touch) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImg}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/90 cursor-pointer z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextImg}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/90 cursor-pointer z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Puntos de paginación interactivos (Control exclusivo sin scroll) */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImgIndex(idx);
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentImgIndex
                  ? 'w-6 h-2 bg-azure-400 shadow-sm shadow-azure-400/50'
                  : 'w-2 h-2 bg-slate-500 hover:bg-slate-300'
              }`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);
  const projects = cvData.projects;

  const nextProject = () => {
    setCurrentProjectIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProjectIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  if (!projects || projects.length === 0) return null;

  const currentProject = projects[currentProjectIdx];

  return (
    <section id="projects" className="py-14 sm:py-20 bg-charcoal-900 border-y border-border-color/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header with Title & Project Counter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-10 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-azure-400 uppercase">Portfolio Showcase</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Featured Projects
            </h2>
          </div>

          {/* Project Progress & Controls */}
          <div className="flex items-center gap-4 self-end sm:self-auto">
            <div className="text-xs sm:text-sm font-semibold text-charcoal-400">
              <span className="text-white text-base font-bold">
                {String(currentProjectIdx + 1).padStart(2, '0')}
              </span>
              <span className="mx-1">/</span>
              <span>{String(projects.length).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevProject}
                className="w-10 h-10 rounded-lg bg-charcoal-850 border border-border-color text-slate-200 hover:text-white hover:bg-charcoal-800 hover:border-azure-500/50 transition-all flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
                aria-label="Previous project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextProject}
                className="w-10 h-10 rounded-lg bg-charcoal-850 border border-border-color text-slate-200 hover:text-white hover:bg-charcoal-800 hover:border-azure-500/50 transition-all flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
                aria-label="Next project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Project Card Showcase Container */}
        <div className="relative w-full">
          <div className="w-full bg-charcoal-850 border border-border-color rounded-2xl overflow-hidden shadow-2xl shadow-black/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[420px]">
              
              {/* Left Column: Visual Carousel (58% on Desktop) */}
              <div className="lg:col-span-7 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-color bg-[#07090e]">
                {currentProject.embeddedHtml ? (
                  <div 
                    className="w-full h-full min-h-[300px] lg:min-h-[400px]"
                    dangerouslySetInnerHTML={{ __html: currentProject.embeddedHtml }}
                  />
                ) : (
                  <ProjectImageCarousel 
                    images={currentProject.images} 
                    title={currentProject.title} 
                  />
                )}
              </div>

              {/* Right Column: Project Details (42% on Desktop) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-charcoal-850">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-azure-400"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                      Project {currentProjectIdx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                    {currentProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProject.tech.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2.5 py-1 bg-charcoal-900 text-azure-400 text-xs font-medium rounded-md border border-border-color/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="pt-5 border-t border-border-color/80 flex items-center gap-4">
                  {currentProject.liveUrl && currentProject.liveUrl !== "#" && (
                    <a 
                      href={currentProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-sm font-semibold text-white bg-azure-600 hover:bg-azure-500 px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
                    >
                      Live Preview
                      <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {currentProject.repoUrl && currentProject.repoUrl !== "#" && (
                    <a 
                      href={currentProject.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-sm font-semibold text-charcoal-300 hover:text-white px-3 py-2 rounded-lg hover:bg-charcoal-800 transition-colors"
                    >
                      Source Code
                      <svg className="w-4 h-4 ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Quick Project Dots Selector */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setCurrentProjectIdx(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentProjectIdx
                    ? 'w-8 h-2.5 bg-azure-500 shadow-sm shadow-azure-500/50'
                    : 'w-2.5 h-2.5 bg-charcoal-700 hover:bg-charcoal-500'
                }`}
                aria-label={`Go to project ${idx + 1}: ${proj.title}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
