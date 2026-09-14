import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import TechIcon from '../common/TechIcon';
import Carousel from './Carousel';
import FlowDiagram from './FlowDiagram';
import {
  SplitBlock,
  FullImageBlock,
  MetricsGridBlock,
  DataTableBlock,
  HarmonicChartBlock,
  CalloutBlock,
  IconChevronLeft,
  IconExternalLink,
} from './blocks';

const ProjectDetail = ({ project }) => {
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  // Generate Table of Contents items
  const tocItems = useMemo(() => {
    const items = [{ id: 'overview', label: 'Resumen' }];

    if (project.sections && project.sections.length > 0) {
      project.sections.forEach((section) => {
        if (section.id) {
          items.push({
            id: section.id,
            label: section.navLabel || section.title || section.heading || section.id,
          });
        }
      });
    } else {
      // Backward compatibility fallback TOC
      if (project.images?.length > 0) {
        items.push({ id: 'gallery', label: 'Galería' });
      }
      if (project.flow) {
        items.push({ id: 'architecture', label: 'Arquitectura' });
      }
    }

    items.push({ id: 'links', label: 'Enlaces' });
    return items;
  }, [project]);

  // Set up ScrollSpy with IntersectionObserver
  useEffect(() => {
    const sectionIds = tocItems.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find visible entries
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pick the first entry crossing the threshold
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [tocItems]);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  // Modular block dispatcher
  const renderModularBlock = (section) => {
    const props = { ...section, ...(section.props || {}) };

    switch (section.type) {
      case 'split':
        return <SplitBlock {...props} />;
      case 'fullImage':
        return <FullImageBlock {...props} />;
      case 'metrics':
        return <MetricsGridBlock {...props} />;
      case 'table':
        return <DataTableBlock {...props} />;
      case 'chart':
        return <HarmonicChartBlock {...props} />;
      case 'diagram':
        return (
          <FlowDiagram
            nodes={props.nodes || project.flow?.nodes}
            edges={props.edges || project.flow?.edges}
          />
        );
      case 'callout':
        return <CalloutBlock {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full relative py-10 sm:py-16">
      {/* Centered Article Container (Centered independently with mx-auto) */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <article className="w-full min-w-0">
          {/* Back link */}
          <div className="mb-6 flex justify-start">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded py-1"
            >
              <IconChevronLeft width={16} height={16} aria-hidden="true" />
              <span>Volver a proyectos</span>
            </Link>
          </div>

          {/* 1. Titulo - Alineación natural (izquierda) */}
          <header className="mb-8">
            {/* Category & Timeline Metadata */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
              <span className="text-primary font-semibold">
                {project.category || 'PROYECTO DE INGENIERÍA'}
              </span>
              {project.role && <span>• {project.role}</span>}
              {project.date && <span>• {project.date}</span>}
            </div>

            {/* Main Title & Status Badge */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground tracking-tight leading-tight">
                {project.title}
              </h1>
              {project.status && (
                <span className="tag-item text-xs font-mono py-1 px-3">
                  {project.status}
                </span>
              )}
            </div>
          </header>

          {/* 2. Tecnologias y labels - Alineación natural (izquierda) */}
          <section className="mb-10 space-y-4" aria-label="Tecnologías e información técnica">
            <div className="flex flex-wrap items-center gap-2.5">
              {project.tech?.map((t) => (
                <div
                  key={t}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border shadow-2xs hover:border-primary/40 transition-colors"
                >
                  <TechIcon label={t} size={22} />
                  <span className="text-xs font-medium text-foreground">{t}</span>
                </div>
              ))}
            </div>

            {project.highlights?.length > 0 && (
              <ul className="flex flex-wrap gap-2 pt-1" aria-label="Aspectos destacados">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="tag-item">
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* 3. Resumen - Alineación natural (izquierda) */}
          <section
            id="overview"
            className="scroll-mt-28 mb-10 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs relative overflow-hidden"
            aria-label="Resumen ejecutivo del proyecto"
          >
            <span className="eyebrow block mb-3">
              RESUMEN EJECUTIVO
            </span>
            <p className="text-base sm:text-lg text-foreground leading-relaxed font-normal">
              {project.summary || project.description}
            </p>

            {project.executiveDetails && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/70 text-xs">
                {project.executiveDetails.map((detail, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-mono text-muted-foreground uppercase tracking-wider block">
                      {detail.label}
                    </span>
                    <span className="font-medium text-foreground text-sm block">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 4. Navegación en Mobile/Tablet (Inline, no-sticky para evitar solapamiento con Navbar) */}
          <nav
            aria-label="Índice de secciones del proyecto"
            className="min-[1380px]:hidden my-6 p-4 rounded-xl border border-border bg-card shadow-xs"
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Índice de Secciones
              </span>
              <span className="text-[11px] font-mono text-muted-foreground">
                {tocItems.length} bloques
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tocItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleTocClick(e, item.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                      isActive
                        ? 'bg-primary text-primary-foreground border-primary font-semibold shadow-2xs'
                        : 'bg-card text-muted-foreground border-border hover:text-foreground hover:bg-card-hover'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* 5. Cuerpo (Iterates through project.sections OR falls back to legacy) */}
          <div className="space-y-14 sm:space-y-20 my-10">
            {project.sections && project.sections.length > 0 ? (
              project.sections.map((section, idx) => (
                <section
                  key={section.id || `section-${idx}`}
                  id={section.id}
                  className="scroll-mt-28 space-y-5"
                  aria-label={section.heading || section.title || `Sección ${idx + 1}`}
                >
                  {(section.heading || section.title || section.eyebrow) && (
                    <div className="space-y-1.5 mb-6">
                      {section.eyebrow && (
                        <span className="eyebrow block">
                          {section.eyebrow}
                        </span>
                      )}
                      <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground tracking-tight">
                        {section.heading || section.title}
                      </h2>
                      {section.description && (
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                          {section.description}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Render the block */}
                  {renderModularBlock(section)}
                </section>
              ))
            ) : (
              /* Backward compatibility fallback */
              <>
                {project.images?.length > 0 && (
                  <section id="gallery" className="scroll-mt-28 space-y-4" aria-label="Galería del proyecto">
                    <h2 className="text-2xl font-serif font-semibold text-foreground tracking-tight">
                      Galería del Proyecto
                    </h2>
                    <Carousel images={project.images} />
                  </section>
                )}

                {project.flow && (
                  <section id="architecture" className="scroll-mt-28 space-y-4" aria-label="Arquitectura del sistema">
                    <h2 className="text-2xl font-serif font-semibold text-foreground tracking-tight">
                      Arquitectura del Sistema
                    </h2>
                    <FlowDiagram nodes={project.flow.nodes} edges={project.flow.edges} />
                  </section>
                )}
              </>
            )}
          </div>

          {/* 6. Enlaces (Bottom card with GitHub, Live Demo, and Back to projects) */}
          <section
            id="links"
            className="scroll-mt-28 mt-16 sm:mt-24 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs"
            aria-label="Enlaces y repositorios"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <span className="eyebrow block">
                  REPOSITORIOS & DEMO EN VIVO
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-foreground tracking-tight">
                  Explora el código y la implementación
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Consulta la arquitectura completa, prueba el entorno interactivo en producción o revisa el repositorio fuente.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs sm:text-sm inline-flex items-center gap-2"
                  >
                    <span>Ver Código en GitHub</span>
                    <IconExternalLink width={14} height={14} aria-hidden="true" />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs sm:text-sm inline-flex items-center gap-2"
                  >
                    <span>Ver Demo en Vivo</span>
                    <IconExternalLink width={14} height={14} aria-hidden="true" />
                  </a>
                )}

                <Link
                  to="/#projects"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  Volver al Portafolio
                </Link>
              </div>
            </div>
          </section>
        </article>

        {/* Desktop Lateral TOC Sidebar - Positioned to the right without affecting article centering */}
        <aside
          className="py-25 hidden min-[1380px]:block absolute left-[calc(100%+2.5rem)] top-0 w-64 2xl:w-72 h-full pointer-events-none"
          aria-label="Tabla de contenidos lateral"
        >
          <div className="sticky top-28 w-full pointer-events-auto space-y-4 rounded-2xl border border-border bg-card/85 backdrop-blur-md p-5 shadow-xs">
            <div className="flex items-center gap-2 pb-3 border-b border-border/70">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                ÍNDICE DEL PROYECTO
              </span>
            </div>

            <nav className="space-y-1">
              {tocItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleTocClick(e, item.id)}
                    className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                      isActive
                        ? 'bg-primary/15 text-primary font-semibold border-l-2 border-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-card-hover'
                    }`}
                  >
                    <span className="truncate">{item.label}</span>
                    {isActive && (
                      <span className="text-primary text-xs font-mono ml-1.5 shrink-0">&bull;</span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Quick action buttons in sidebar */}
            <div className="pt-4 border-t border-border/70 space-y-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary text-xs py-2 px-3 justify-center gap-1.5"
                >
                  <span>Ver Demo en Vivo</span>
                  <IconExternalLink width={13} height={13} />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary text-xs py-2 px-3 justify-center gap-1.5"
                >
                  <span>Código Fuente</span>
                  <IconExternalLink width={13} height={13} />
                </a>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetail;
