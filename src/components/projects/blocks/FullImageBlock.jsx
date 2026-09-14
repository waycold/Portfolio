import React, { useState, useEffect, useCallback } from 'react';
import { IconMaximize, IconX } from './Icons';

const FullImageBlock = ({
  src,
  url,
  alt = 'Project visual media',
  title,
  caption,
  legend,
  tag = 'FIGURA TÉCNICA',
  aspectRatio,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageUrl = src || url;

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded, handleKeyDown]);

  if (!imageUrl) return null;

  return (
    <>
      <figure
        className={`rounded-2xl border border-border bg-card overflow-hidden shadow-xs relative group transition-all duration-200 ${className}`}
      >
        {/* Visual Media Container */}
        <div
          className="relative w-full overflow-hidden bg-muted/40 cursor-zoom-in"
          style={aspectRatio ? { aspectRatio } : { maxHeight: '580px' }}
          onClick={() => setIsExpanded(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsExpanded(true);
            }
          }}
          aria-label={`Ampliar imagen: ${title || alt}`}
        >
          <img
            src={imageUrl}
            alt={alt || title || 'Project preview'}
            loading="lazy"
            className="w-full h-full object-cover sm:object-contain object-center transition-transform duration-300 group-hover:scale-[1.01]"
          />

          {/* Quick Hover Expand Overlay */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-xs shadow-md">
              <IconMaximize width={13} height={13} aria-hidden="true" />
              Ampliar vista
            </span>
          </div>
        </div>

        {/* Technical Caption & Legend Bar */}
        {(title || caption || legend || tag) && (
          <figcaption className="p-4 sm:p-5 border-t border-border bg-card/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2">
                {tag && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
                    {tag}
                  </span>
                )}
                {title && (
                  <span className="font-medium text-foreground text-sm">
                    {title}
                  </span>
                )}
              </div>
              {(caption || legend) && (
                <p className="text-muted-foreground leading-relaxed text-xs">
                  {caption || legend}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border hover:opacity-90 transition-all font-medium cursor-pointer shrink-0"
              aria-label="Expand image"
            >
              <IconMaximize width={13} height={13} aria-hidden="true" />
              <span>Expandir</span>
            </button>
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={title || 'Vista ampliada'}
          onClick={() => setIsExpanded(false)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Cerrar vista previa"
          >
            <IconX width={20} height={20} />
          </button>

          {/* Expanded Image Box */}
          <div
            className="max-w-6xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageUrl}
              alt={alt || title || 'Full project image'}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {(title || caption || legend) && (
              <div className="mt-4 text-center max-w-2xl px-4">
                {title && (
                  <h4 className="text-white font-serif font-medium text-base sm:text-lg mb-1">
                    {title}
                  </h4>
                )}
                {(caption || legend) && (
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {caption || legend}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FullImageBlock;
