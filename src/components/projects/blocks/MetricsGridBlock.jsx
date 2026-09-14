import React from 'react';
import { IconTarget, IconSparkles, IconLayers, IconGauge } from './Icons';

const ICON_MAP = {
  target: IconTarget,
  sparkles: IconSparkles,
  layers: IconLayers,
  gauge: IconGauge,
};

const DEFAULT_METRICS = [
  {
    label: 'Lecturabilidad',
    value: '98.4%',
    context: 'Cumplimiento WCAG 2.1 en pantallas',
    status: 'success',
    icon: 'target',
  },
  {
    label: 'Acento Activo',
    value: '4.8 / 5.0',
    context: 'Jerarquía visual balanceada',
    status: 'active',
    icon: 'sparkles',
  },
  {
    label: 'Superficie Activa',
    value: '12 Tokens',
    context: 'Variables integradas y editables',
    status: 'active',
    icon: 'layers',
  },
  {
    label: 'Radio de Esquinas',
    value: '8px',
    context: 'Ajustado en --radius',
    status: 'active',
    icon: 'gauge',
  },
];

const MetricsGridBlock = ({
  metrics,
  items,
  columns = 4,
  title,
  subtitle,
  className = '',
}) => {
  const metricList = items || metrics || DEFAULT_METRICS;
  const getColClass = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4:
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-2">
          {title && (
            <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground tracking-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className={`grid ${getColClass()} gap-4`}>
        {metricList.map((item, index) => {
          const IconComp =
            typeof item.icon === 'string'
              ? ICON_MAP[item.icon] || IconGauge
              : item.icon || IconGauge;

          return (
            <div
              key={item.id || item.label || index}
              className="group relative rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-all duration-200 shadow-xs flex flex-col justify-between"
            >
              {/* Top Row: Label & Status Icon */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-medium">
                  {item.label}
                </span>
                <span className="w-7 h-7 rounded-lg bg-secondary/60 text-secondary-foreground flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <IconComp width={14} height={14} aria-hidden="true" />
                </span>
              </div>

              {/* Value */}
              <div className="my-3">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
                  {item.value}
                </div>
              </div>

              {/* Context / Change / Subtext */}
              {(item.context || item.change || item.description) && (
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-2.5">
                  <span className="leading-snug">
                    {item.context || item.description}
                  </span>
                  {item.change && (
                    <span className="font-mono font-medium text-primary shrink-0 ml-2">
                      {item.change}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MetricsGridBlock;
