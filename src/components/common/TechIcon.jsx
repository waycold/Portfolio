import React, { useState } from 'react';
import { getDeviconSlug } from '../../data/devicons';
import { getFallbackIconUrl } from '../../data/simpleicons';

/**
 * Renders a technology's logo inside a small square chip. Tries devicon
 * first, falls back to Iconify (Simple Icons / vscode-icons) for brands
 * devicon doesn't cover, and finally falls back to an initials chip if
 * neither has the logo (or the image fails to load).
 */
const TechIcon = ({ label, size = 28 }) => {
  const deviconSlug = getDeviconSlug(label);
  const sources = [
    deviconSlug && `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconSlug}.svg`,
    getFallbackIconUrl(label),
  ].filter(Boolean);

  const [sourceIndex, setSourceIndex] = useState(0);
  const currentSrc = sources[sourceIndex];

  return (
    <span
      title={label}
      className="inline-flex items-center justify-center rounded-md shrink-0"
      style={{ width: size, height: size }}
    >
      {currentSrc ? (
        <img
          src={currentSrc}
          alt={label}
          width={size * 0.6}
          height={size * 0.6}
          className="shrink-0"
          onError={() => setSourceIndex((i) => i + 1)}
        />
      ) : (
        <span className="text-[10px] font-mono font-semibold leading-none text-secondary-foreground">
          {label.length <= 4 ? label.toUpperCase() : label.slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  );
};

export default TechIcon;
