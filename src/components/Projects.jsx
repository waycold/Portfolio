import React, { useState, useEffect, useRef } from 'react';
import { cvData } from '../data/content';

const ImageDragCarousel = ({ images }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Actualizar índice basado en el scroll para los puntos de paginación
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const index = Math.round(scrollPosition / width);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  // Cambio automático con tiempo aumentado y transición fluida (behavior smooth)
  useEffect(() => {
    if (!images || images.length <= 1 || isDragging) return;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const width = scrollRef.current.offsetWidth;
      let nextIndex = currentIndex + 1;
      if (nextIndex >= images.length) {
        nextIndex = 0;
      }
      scrollRef.current.scrollTo({
        left: width * nextIndex,
        behavior: 'smooth'
      });
    }, 8000); // 8 segundos
    return () => clearInterval(interval);
  }, [images, currentIndex, isDragging]);

  // Lógica de Drag to Scroll con sensibilidad ajustada
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    // Alta sensibilidad al movimiento: mover poco el mouse mueve mucho el scroll (multiplicador alto)
    const walk = (x - startX) * 2.5; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollToImage = (idx) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: width * idx,
      behavior: 'smooth'
    });
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full group">
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-full h-full flex overflow-x-auto bg-bg-primary [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory scroll-smooth'
        }`}
      >
        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`Project snapshot ${idx + 1}`}
            // Tamaño fijo en altura y anchura para prevenir saltos de div
            className="w-full h-full object-cover shrink-0 snap-center pointer-events-none select-none"
          />
        ))}
      </div>
      
      {/* Puntos de paginación para las imágenes */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-auto">
          {images.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollToImage(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-brand-primary' : 'w-2 bg-text-muted/50 hover:bg-text-secondary'}`}
              aria-label={`Go to image ${idx + 1}`}
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

  const nextProject = () => setCurrentProjectIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevProject = () => setCurrentProjectIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-20 md:py-32 bg-bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="heading-md mb-16 text-center">Featured Projects</h2>
        
        <div className="relative w-full flex items-center justify-center">
          
          {/* Contenedor principal de la tarjeta de proyecto (tamaño fijo) */}
          <div className="relative w-full max-w-4xl flex items-center justify-center min-h-[650px] lg:min-h-[700px]">
            
            {projects.map((project, idx) => (
              <div 
                key={project.id} 
                className={`absolute w-full top-0 left-0 transition-all duration-700 ease-in-out ${
                  idx === currentProjectIdx 
                    ? 'opacity-100 translate-x-0 z-10 pointer-events-auto' 
                    : idx < currentProjectIdx 
                      ? 'opacity-0 -translate-x-12 z-0 pointer-events-none' 
                      : 'opacity-0 translate-x-12 z-0 pointer-events-none'
                }`}
              >
                <div className="flex flex-col h-full bg-bg-primary border border-border-color rounded-xl overflow-hidden shadow-2xl shadow-black/60">
                  {/* Contenedor de imagen (tamaño fijo, aspect-video) */}
                  <div className="w-full aspect-video relative border-b border-border-color bg-black">
                    {project.embeddedHtml ? (
                      <div 
                        className="absolute inset-0 w-full h-full"
                        dangerouslySetInnerHTML={{ __html: project.embeddedHtml }}
                      />
                    ) : (
                      <ImageDragCarousel images={project.images} />
                    )}
                  </div>
                  
                  {/* Contenedor de contenido (toma el resto del espacio) */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <h3 className="text-3xl font-bold text-text-primary mb-4">
                      {project.title}
                    </h3>
                    <p className="text-body mb-8">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tag-item">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-6 mt-auto pt-6 border-t border-border-color">
                      {project.liveUrl !== "#" && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors flex items-center">
                          Live Preview
                          <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      )}
                      {project.repoUrl !== "#" && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-text-muted hover:text-text-primary transition-colors flex items-center">
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
          
          {/* Flechas para cambiar de proyecto */}
          <button 
            onClick={prevProject}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-bg-primary border border-border-color text-text-primary p-4 rounded-full hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300 z-30 shadow-xl focus:outline-none"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-bg-primary border border-border-color text-text-primary p-4 rounded-full hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300 z-30 shadow-xl focus:outline-none"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
