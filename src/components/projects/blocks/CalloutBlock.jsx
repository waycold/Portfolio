import React from 'react';
import { IconAlertTriangle, IconInfo, IconLayers, IconSparkles } from './Icons';

const TYPE_CONFIGS = {
  architecture: {
    icon: IconLayers,
    eyebrow: 'ARQUITECTURA DE SISTEMAS',
    borderClass: 'border-l-4 border-l-primary border-primary/30',
    bgClass: 'bg-primary/6 dark:bg-primary/10',
    tagClass: 'bg-primary/15 text-primary-foreground dark:text-foreground',
    accentColor: 'var(--primary)',
  },
  tradeoff: {
    icon: IconAlertTriangle,
    eyebrow: 'TRADE-OFF TÉCNICO',
    borderClass: 'border-l-4 border-l-accent border-accent/30',
    bgClass: 'bg-accent/6 dark:bg-accent/10',
    tagClass: 'bg-accent/15 text-accent-foreground dark:text-foreground',
    accentColor: 'var(--accent)',
  },
  insight: {
    icon: IconSparkles,
    eyebrow: 'ENGINEERING INSIGHT',
    borderClass: 'border-l-4 border-l-primary border-primary/30',
    bgClass: 'bg-primary/6 dark:bg-primary/10',
    tagClass: 'bg-primary/15 text-primary-foreground dark:text-foreground',
    accentColor: 'var(--primary)',
  },
  warning: {
    icon: IconAlertTriangle,
    eyebrow: 'CONSIDERACIÓN TÉCNICA',
    borderClass: 'border-l-4 border-l-warning border-warning/30',
    bgClass: 'bg-amber-500/6 dark:bg-amber-500/10',
    tagClass: 'bg-amber-500/15 text-amber-800 dark:text-amber-200',
    accentColor: 'var(--warning)',
  },
  note: {
    icon: IconInfo,
    eyebrow: 'NOTA DE INGENIERÍA',
    borderClass: 'border-l-4 border-l-border border-border',
    bgClass: 'bg-card',
    tagClass: 'bg-muted text-muted-foreground',
    accentColor: 'var(--muted)',
  },
};

const CalloutBlock = ({
  type = 'architecture',
  title,
  eyebrow,
  content,
  children,
  points = [],
  bullets = [],
  tags = [],
  className = '',
}) => {
  const config = TYPE_CONFIGS[type] || TYPE_CONFIGS.architecture;
  const IconComponent = config.icon;
  const pointList = points && points.length > 0 ? points : bullets;

  return (
    <div
      className={`rounded-2xl border ${config.borderClass} ${config.bgClass} p-5 sm:p-7 transition-all duration-200 shadow-2xs ${className}`}
      role="region"
      aria-label={title || eyebrow || config.eyebrow}
    >
      {/* Header with Icon and Eyebrow */}
      <div className="flex items-center gap-2.5 mb-3">
        <span
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `color-mix(in srgb, ${config.accentColor} 18%, transparent)` }}
        >
          <IconComponent width={15} height={15} style={{ color: config.accentColor }} aria-hidden="true" />
        </span>
        <span className="font-mono text-xs uppercase tracking-wider font-semibold" style={{ color: config.accentColor }}>
          {eyebrow || config.eyebrow}
        </span>
      </div>

      {/* Main Title */}
      {title && (
        <h4 className="text-lg sm:text-xl font-serif font-semibold text-foreground tracking-tight mb-2.5">
          {title}
        </h4>
      )}

      {/* Content description */}
      <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-2">
        {content && <p>{content}</p>}
        {children}
      </div>

      {/* Bullet points if provided */}
      {pointList.length > 0 && (
        <ul className="mt-4 space-y-2 border-t border-border/50 pt-3">
          {pointList.map((pt, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: config.accentColor }}
                aria-hidden="true"
              />
              <span className="leading-normal">{pt}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tags / Keywords */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/40">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-card/80 border border-border text-foreground"
            >
              #{t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalloutBlock;
