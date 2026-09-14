import React, { useState, useMemo } from 'react';
import { IconCheck, IconCopy, IconSearch } from './Icons';

const DEFAULT_ROWS = [
  {
    id: 'primary-btn',
    element: 'Botón Principal',
    property: '--primary',
    sample: { type: 'button-primary', text: 'Primario', style: { backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' } },
    value: '#4a6a62',
    status: 'active',
  },
  {
    id: 'secondary-badge',
    element: 'Badge Secundario',
    property: '--secondary',
    sample: { type: 'badge-secondary', text: 'Secundario', style: { backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' } },
    value: '#c8e0df',
    status: 'active',
  },
  {
    id: 'accent-badge',
    element: 'Destacado Acento',
    property: '--accent',
    sample: { type: 'badge-accent', text: 'Acento', style: { backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)' } },
    value: '#6a5a84',
    status: 'active',
  },
  {
    id: 'muted-text',
    element: 'Texto Desaturado Base',
    property: '--muted-foreground',
    sample: { type: 'text-muted', text: 'Texto Secundario en Base', style: { color: 'var(--muted-foreground)' } },
    value: '#787275',
    status: 'active',
  },
  {
    id: 'muted-subtext',
    element: 'Texto Secundario en Franja Muted',
    property: '--muted-subtext',
    sample: { type: 'pill-muted', text: 'Subtexto Legible en Franja', style: { backgroundColor: 'var(--muted)', color: 'var(--muted-subtext)' } },
    value: '#e1ebed',
    status: 'active',
  },
];

const DataTableBlock = ({
  title = 'Componentes y Tokens Activos',
  subtitle = 'Tabla de evaluación de contraste en celdas, bordes y estados',
  columns,
  rows,
  data,
  enableSearch = true,
  className = '',
}) => {
  const tableRows = data || rows || DEFAULT_ROWS;
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  const filteredRows = useMemo(() => {
    if (!searchTerm.trim()) return tableRows;
    const q = searchTerm.toLowerCase();
    return tableRows.filter((r) => {
      const matchElem = r.element?.toLowerCase().includes(q);
      const matchProp = r.property?.toLowerCase().includes(q);
      const matchVal = r.value?.toLowerCase().includes(q);
      return matchElem || matchProp || matchVal;
    });
  }, [tableRows, searchTerm]);

  // Render visual sample preview
  const renderSample = (sample) => {
    if (!sample) return null;
    if (typeof sample === 'string') {
      return <span className="text-xs font-mono">{sample}</span>;
    }

    if (sample.type === 'button-primary') {
      return (
        <span
          className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium shadow-2xs"
          style={sample.style || { backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
        >
          {sample.text || 'Primario'}
        </span>
      );
    }

    if (sample.type === 'badge-secondary') {
      return (
        <span
          className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border border-border"
          style={sample.style || { backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' }}
        >
          {sample.text || 'Secundario'}
        </span>
      );
    }

    if (sample.type === 'badge-accent') {
      return (
        <span
          className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium"
          style={sample.style || { backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)' }}
        >
          {sample.text || 'Acento'}
        </span>
      );
    }

    if (sample.type === 'pill-muted') {
      return (
        <span
          className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border border-border/50"
          style={sample.style || { backgroundColor: 'var(--muted)', color: 'var(--muted-subtext)' }}
        >
          {sample.text || 'Muted'}
        </span>
      );
    }

    if (sample.type === 'color-swatch' || sample.color) {
      return (
        <span className="inline-flex items-center gap-2">
          <span
            className="w-4 h-4 rounded-xs border border-border shadow-2xs shrink-0"
            style={{ backgroundColor: sample.color }}
          />
          <span className="text-xs text-foreground font-mono">{sample.text || sample.color}</span>
        </span>
      );
    }

    return (
      <span className="text-xs" style={sample.style}>
        {sample.text || 'Sample'}
      </span>
    );
  };

  return (
    <div className={`rounded-2xl border border-border bg-card overflow-hidden shadow-xs ${className}`}>
      {/* Header bar */}
      <div className="p-5 sm:p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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

        <div className="flex items-center gap-3">
          {enableSearch && (
            <div className="relative">
              <IconSearch
                width={14}
                height={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filtrar componentes..."
                className="w-40 sm:w-48 pl-8 pr-3 py-1.5 rounded-lg text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          )}
          <span className="text-xs font-mono text-muted-foreground shrink-0">
            Filas: {filteredRows.length} de {tableRows.length}
          </span>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse" role="table">
          <thead>
            <tr className="border-b border-border/80 bg-muted/20 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <th scope="col" className="py-3 px-5 sm:px-6 font-medium">
                {columns?.element || 'Elemento'}
              </th>
              <th scope="col" className="py-3 px-4 sm:px-6 font-medium">
                {columns?.property || 'Propiedad'}
              </th>
              <th scope="col" className="py-3 px-4 sm:px-6 font-medium">
                {columns?.sample || 'Muestra Visual'}
              </th>
              <th scope="col" className="py-3 px-4 sm:px-6 font-medium">
                {columns?.value || 'Valor Hex'}
              </th>
              <th scope="col" className="py-3 px-5 sm:px-6 text-center font-medium">
                {columns?.status || 'Estado'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 text-sm">
            {filteredRows.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-xs text-muted-foreground font-mono">
                  No se encontraron elementos coincidentes con "{searchTerm}"
                </td>
              </tr>
            ) : (
              filteredRows.map((row, index) => {
                const rowKey = row.id || `row-${index}`;
                const isCopied = copiedId === rowKey;

                return (
                  <tr
                    key={rowKey}
                    className="hover:bg-card-hover/40 transition-colors duration-150 group"
                  >
                    {/* Elemento / Metric */}
                    <td className="py-3.5 px-5 sm:px-6 font-medium text-foreground">
                      <div className="flex flex-col">
                        <span>{row.element}</span>
                        {row.subtext && (
                          <span className="text-xs text-muted-foreground mt-0.5">{row.subtext}</span>
                        )}
                      </div>
                    </td>

                    {/* Propiedad */}
                    <td className="py-3.5 px-4 sm:px-6 font-mono text-xs">
                      <span className="px-2 py-0.5 rounded bg-muted/40 text-muted-foreground border border-border/40 inline-block">
                        {row.property}
                      </span>
                    </td>

                    {/* Muestra Visual */}
                    <td className="py-3.5 px-4 sm:px-6">
                      {renderSample(row.sample)}
                    </td>

                    {/* Valor Hex */}
                    <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-foreground">
                      <button
                        type="button"
                        onClick={() => handleCopy(rowKey, row.value)}
                        className="inline-flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer group/btn"
                        title="Click to copy value"
                      >
                        <span>{row.value}</span>
                        {isCopied ? (
                          <IconCheck width={13} height={13} className="text-emerald-500 shrink-0" />
                        ) : (
                          <IconCopy
                            width={13}
                            height={13}
                            className="opacity-0 group-hover/btn:opacity-100 text-muted-foreground shrink-0 transition-opacity"
                          />
                        )}
                      </button>
                    </td>

                    {/* Estado Indicator Dot */}
                    <td className="py-3.5 px-5 sm:px-6 text-center">
                      <div className="inline-flex items-center justify-center">
                        {row.status === 'warning' ? (
                          <span
                            className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-amber-500/20"
                            title="Estado: Advertencia"
                          />
                        ) : row.status === 'error' ? (
                          <span
                            className="w-2.5 h-2.5 rounded-full bg-rose-500 ring-4 ring-rose-500/20"
                            title="Estado: Error / Pendiente"
                          />
                        ) : (
                          <span
                            className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 animate-pulse"
                            title="Estado: Activo y evaluado"
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableBlock;
