import React, { useState } from 'react';
import { IconCheck, IconCopy } from './Icons';
import FullImageBlock from './FullImageBlock';

const SplitBlock = ({
  mediaPosition = 'right',
  eyebrow,
  title,
  description,
  bullets = [],
  metrics = [],
  media,
  className = '',
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = (codeText) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeText);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const isMediaLeft = mediaPosition === 'left';

  // Render media side (Image, Code preview, or custom block)
  const renderMedia = () => {
    if (!media) return null;

    // Code preview
    if (media.type === 'code' || media.code) {
      const codeText = media.code || '';
      const filename = media.filename || media.title || 'snippet.py';
      const language = media.language || 'python';

      return (
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs">
          {/* Window Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/20">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="font-mono text-xs text-muted-foreground ml-2">
                {filename}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
                {language}
              </span>
              <button
                type="button"
                onClick={() => handleCopyCode(codeText)}
                className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                title="Copy code"
                aria-label="Copy code to clipboard"
              >
                {copiedCode ? (
                  <IconCheck width={14} height={14} className="text-emerald-500" />
                ) : (
                  <IconCopy width={14} height={14} />
                )}
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed bg-background/50">
            <pre className="text-foreground">
              <code>{codeText}</code>
            </pre>
          </div>

          {media.caption && (
            <div className="p-3 border-t border-border/60 bg-card/60 text-xs text-muted-foreground">
              {media.caption}
            </div>
          )}
        </div>
      );
    }

    // Image preview
    if (media.type === 'image' || media.url || media.src) {
      return (
        <FullImageBlock
          src={media.url || media.src}
          alt={media.alt || title}
          title={media.title}
          caption={media.caption}
          legend={media.legend}
          tag={media.tag || 'DIAGRAMA'}
          aspectRatio={media.aspectRatio}
        />
      );
    }

    // Direct element or custom render
    if (media.type === 'custom' && media.component) {
      return media.component;
    }

    return null;
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${className}`}>
      {/* Media Column */}
      <div className={`w-full ${isMediaLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        {renderMedia()}
      </div>

      {/* Text Column */}
      <div className={`space-y-5 ${isMediaLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        {eyebrow && (
          <span className="eyebrow block">
            {eyebrow}
          </span>
        )}

        {title && (
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground tracking-tight">
            {title}
          </h3>
        )}

        {/* Paragraphs */}
        {Array.isArray(description) ? (
          description.map((p, idx) => (
            <p key={idx} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))
        ) : description ? (
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        ) : null}

        {/* Feature Bullets */}
        {bullets.length > 0 && (
          <ul className="space-y-2.5 pt-1">
            {bullets.map((bullet, idx) => {
              const isObj = typeof bullet === 'object' && bullet !== null;
              const bulletTitle = isObj ? bullet.title : null;
              const bulletText = isObj ? bullet.text : bullet;

              return (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck width={12} height={12} aria-hidden="true" />
                  </span>
                  <span className="leading-snug">
                    {bulletTitle && (
                      <strong className="text-foreground font-medium mr-1.5">
                        {bulletTitle}:
                      </strong>
                    )}
                    {bulletText}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {/* Optional Mini Metrics Pills */}
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-3 border-t border-border/60">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="px-3 py-2 rounded-xl bg-card border border-border flex flex-col shadow-2xs"
              >
                <span className="text-[10px] font-mono uppercase text-muted-foreground">
                  {m.label}
                </span>
                <span className="text-base font-serif font-bold text-foreground">
                  {m.value}
                </span>
                {m.context && (
                  <span className="text-[10px] text-primary mt-0.5">
                    {m.context}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SplitBlock;
