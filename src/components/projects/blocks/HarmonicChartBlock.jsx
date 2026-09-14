import React, { useState, useMemo, useCallback } from 'react';
import { IconRefresh } from './Icons';

const MONTH_LABELS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

const INITIAL_SERIES = [
  { month: 'Ene', primary: 36, accent: 18, bar: 42 },
  { month: 'Feb', primary: 28, accent: 22, bar: 50 },
  { month: 'Mar', primary: 22, accent: 12, bar: 38 },
  { month: 'Abr', primary: 38, accent: 35, bar: 58 },
  { month: 'May', primary: 32, accent: 26, bar: 48 },
  { month: 'Jun', primary: 35, accent: 33, bar: 54 },
  { month: 'Jul', primary: 48, accent: 44, bar: 68 },
  { month: 'Ago', primary: 42, accent: 38, bar: 62 },
  { month: 'Sep', primary: 56, accent: 52, bar: 76 },
  { month: 'Oct', primary: 52, accent: 48, bar: 70 },
  { month: 'Nov', primary: 62, accent: 58, bar: 84 },
  { month: 'Dic', primary: 68, accent: 62, bar: 92 },
];

function generateRandomHarmonicData() {
  const baseOffset = 18 + Math.floor(Math.random() * 10);
  let pPrev = baseOffset;
  let aPrev = baseOffset - 8;

  return MONTH_LABELS.map((month) => {
    // Walk with smooth momentum
    const pNext = Math.min(88, Math.max(16, pPrev + (Math.floor(Math.random() * 22) - 8)));
    const aNext = Math.min(84, Math.max(12, aPrev + (Math.floor(Math.random() * 20) - 8)));
    const bar = Math.min(96, Math.max(25, Math.max(pNext, aNext) + 10 + Math.floor(Math.random() * 14)));

    pPrev = pNext;
    aPrev = aNext;

    return {
      month,
      primary: pNext,
      accent: aNext,
      bar,
    };
  });
}

function getSmoothPath(points) {
  if (!points || points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let d = `M ${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i < points.length - 2 ? points[i + 2] : p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d;
}

const HarmonicChartBlock = ({
  title = 'Distribución de Consonancia Visual',
  subtitle = 'Prueba de visualización gráfica con renderizado reactivo a tus colores',
  initialData = INITIAL_SERIES,
  data: propData,
  primaryLabel = 'Primario',
  accentLabel = 'Acento',
  regenerateLabel = 'Regenerar Datos',
  className = '',
}) => {
  const [data, setData] = useState(propData || initialData);
  const [showPrimary, setShowPrimary] = useState(true);
  const [showAccent, setShowAccent] = useState(true);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleRegenerate = useCallback(() => {
    setData(generateRandomHarmonicData());
  }, []);

  // SVG Coordinates setup
  const width = 800;
  const height = 260;
  const padLeft = 40;
  const padRight = 40;
  const padTop = 36;
  const padBottom = 44;

  const chartWidth = width - padLeft - padRight;
  const chartHeight = height - padTop - padBottom;

  const stepX = chartWidth / (data.length - 1);

  // Compute positions
  const { primaryPoints, accentPoints, barPositions } = useMemo(() => {
    const bw = Math.min(36, Math.max(20, stepX * 0.5));
    const pPts = [];
    const aPts = [];
    const bars = [];

    data.forEach((d, i) => {
      const cx = padLeft + i * stepX;
      // map 0..100 value to chartHeight..0
      const py = padTop + chartHeight * (1 - d.primary / 100);
      const ay = padTop + chartHeight * (1 - d.accent / 100);
      const bHeight = chartHeight * (d.bar / 100);
      const by = padTop + (chartHeight - bHeight);

      pPts.push({ x: cx, y: py, value: d.primary });
      aPts.push({ x: cx, y: ay, value: d.accent });
      bars.push({ x: cx - bw / 2, y: by, width: bw, height: bHeight, month: d.month });
    });

    return {
      barWidth: bw,
      primaryPoints: pPts,
      accentPoints: aPts,
      barPositions: bars,
    };
  }, [data, stepX, chartHeight, padLeft, padTop]);

  const primaryPath = useMemo(() => getSmoothPath(primaryPoints), [primaryPoints]);
  const accentPath = useMemo(() => getSmoothPath(accentPoints), [accentPoints]);

  const hoveredItem = hoveredIdx !== null ? data[hoveredIdx] : null;
  const hoveredPrimary = hoveredIdx !== null ? primaryPoints[hoveredIdx] : null;
  const hoveredAccent = hoveredIdx !== null ? accentPoints[hoveredIdx] : null;

  return (
    <div className={`rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs ${className}`}>
      {/* Header with Title and Interactive Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Legend & Regenerate Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          <button
            type="button"
            onClick={() => setShowPrimary(!showPrimary)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
              showPrimary
                ? 'bg-primary/10 border-primary/40 text-foreground font-medium'
                : 'bg-muted/30 border-border text-muted-foreground opacity-60'
            }`}
            aria-pressed={showPrimary}
            title="Toggle Primary Curve"
          >
            <span
              className="w-2.5 h-2.5 rounded-xs"
              style={{ backgroundColor: 'var(--primary)' }}
              aria-hidden="true"
            />
            <span>{primaryLabel}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowAccent(!showAccent)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
              showAccent
                ? 'bg-accent/10 border-accent/40 text-foreground font-medium'
                : 'bg-muted/30 border-border text-muted-foreground opacity-60'
            }`}
            aria-pressed={showAccent}
            title="Toggle Accent Curve"
          >
            <span
              className="w-2.5 h-2.5 rounded-xs"
              style={{ backgroundColor: 'var(--accent)' }}
              aria-hidden="true"
            />
            <span>{accentLabel}</span>
          </button>

          <button
            type="button"
            onClick={handleRegenerate}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary text-secondary-foreground border border-border hover:opacity-90 active:scale-95 transition-all text-xs font-medium cursor-pointer"
            title="Generar nueva muestra de datos armónicos"
          >
            <IconRefresh width={13} height={13} aria-hidden="true" />
            <span>{regenerateLabel}</span>
          </button>
        </div>
      </div>

      {/* Interactive SVG Chart Canvas */}
      <div className="relative w-full overflow-hidden select-none">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto overflow-visible"
          role="img"
          aria-label={`${title} - Gráfica de consonancia con meses y curvas de tendencia`}
        >
          {/* Subtle Grid Guidelines */}
          {[0.25, 0.5, 0.75, 1].map((ratio) => {
            const gy = padTop + chartHeight * (1 - ratio);
            return (
              <line
                key={ratio}
                x1={padLeft - 10}
                y1={gy}
                x2={width - padRight + 10}
                y2={gy}
                stroke="var(--border)"
                strokeOpacity="0.45"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
            );
          })}

          {/* Background Monthly Volume Bars */}
          {barPositions.map((bar, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <rect
                key={bar.month}
                x={bar.x}
                y={bar.y}
                width={bar.width}
                height={bar.height}
                rx={4}
                className="transition-opacity duration-200"
                style={{
                  fill: 'var(--secondary)',
                  opacity: isHovered ? 0.65 : 0.35,
                }}
              />
            );
          })}

          {/* Accent Trend Curve & Points */}
          {showAccent && (
            <g className="transition-opacity duration-300">
              <path
                d={accentPath}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {accentPoints.map((pt, i) => (
                <circle
                  key={`accent-${i}`}
                  cx={pt.x}
                  cy={pt.y}
                  r={hoveredIdx === i ? 6 : 4}
                  style={{
                    fill: 'var(--card)',
                    stroke: 'var(--accent)',
                    strokeWidth: hoveredIdx === i ? 3 : 2.25,
                  }}
                  className="transition-all duration-150"
                />
              ))}
            </g>
          )}

          {/* Primary Trend Curve & Points */}
          {showPrimary && (
            <g className="transition-opacity duration-300">
              <path
                d={primaryPath}
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {primaryPoints.map((pt, i) => (
                <circle
                  key={`primary-${i}`}
                  cx={pt.x}
                  cy={pt.y}
                  r={hoveredIdx === i ? 6 : 4}
                  style={{
                    fill: 'var(--card)',
                    stroke: 'var(--primary)',
                    strokeWidth: hoveredIdx === i ? 3 : 2.25,
                  }}
                  className="transition-all duration-150"
                />
              ))}
            </g>
          )}

          {/* Hover Column Guideline & Hit Targets */}
          {hoveredIdx !== null && (
            <line
              x1={padLeft + hoveredIdx * stepX}
              y1={padTop - 6}
              x2={padLeft + hoveredIdx * stepX}
              y2={height - padBottom + 6}
              stroke="var(--foreground)"
              strokeOpacity="0.25"
              strokeDasharray="3 3"
              strokeWidth="1.5"
            />
          )}

          {/* X Axis Month Labels */}
          {data.map((d, i) => {
            const cx = padLeft + i * stepX;
            const isHovered = hoveredIdx === i;
            return (
              <text
                key={d.month}
                x={cx}
                y={height - padBottom + 22}
                textAnchor="middle"
                className="font-mono text-[11px] select-none transition-colors duration-150"
                style={{
                  fill: isHovered ? 'var(--foreground)' : 'var(--muted-foreground)',
                  fontWeight: isHovered ? '600' : '400',
                }}
              >
                {d.month}
              </text>
            );
          })}

          {/* Invisible interactive column hitboxes for smooth hover */}
          {data.map((_, i) => {
            const cx = padLeft + i * stepX;
            const colWidth = stepX;
            return (
              <rect
                key={`hitbox-${i}`}
                x={cx - colWidth / 2}
                y={padTop - 10}
                width={colWidth}
                height={chartHeight + 30}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
            );
          })}
        </svg>

        {/* Dynamic Floating Tooltip */}
        {hoveredItem && (
          <div
            className="absolute pointer-events-none transition-all duration-150 transform -translate-x-1/2 -translate-y-full px-3 py-2 rounded-lg bg-card/95 border border-border shadow-md backdrop-blur-xs text-xs z-20"
            style={{
              left: `${((padLeft + hoveredIdx * stepX) / width) * 100}%`,
              top: `${Math.max(
                10,
                Math.min(
                  hoveredPrimary?.y ?? 60,
                  hoveredAccent?.y ?? 60
                ) - 14
              )}px`,
            }}
          >
            <div className="font-mono font-medium text-foreground pb-1 border-b border-border/60 mb-1 flex items-center justify-between gap-3">
              <span>{hoveredItem.month}</span>
              <span className="text-[10px] text-muted-foreground">Vol: {hoveredItem.bar}%</span>
            </div>
            {showPrimary && (
              <div className="flex items-center justify-between gap-4 text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                  {primaryLabel}:
                </span>
                <span className="font-mono font-medium text-foreground">{hoveredItem.primary}%</span>
              </div>
            )}
            {showAccent && (
              <div className="flex items-center justify-between gap-4 text-muted-foreground mt-0.5">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                  {accentLabel}:
                </span>
                <span className="font-mono font-medium text-foreground">{hoveredItem.accent}%</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HarmonicChartBlock;
