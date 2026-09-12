import React, { useCallback, useEffect, useRef, useState } from 'react';

const AUTOPLAY_MS = 5000;
const TRANSITION_MS = 280;

const ChevronLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const count = images?.length ?? 0;

  const goTo = useCallback(
    (next) => {
      if (animating || count <= 1) return;
      setAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setIndex((next + count) % count);
        setAnimating(false);
      }, TRANSITION_MS);
    },
    [animating, count]
  );

  useEffect(() => {
    if (count <= 1) return undefined;
    const id = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, goTo, count]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  if (!count) return null;

  const current = images[index];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden bg-muted border border-border"
      style={{ height: 'clamp(320px, 62vh, 680px)' }}
    >
      <img
        key={index}
        src={current.url}
        alt={current.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: animating ? 0 : 1 }}
      />

      <div className="absolute top-5 left-5 right-5 flex">
        <div className="inline-block rounded-lg px-3.5 py-2 bg-black/55 backdrop-blur-sm">
          <p className="text-xs font-medium text-white">{current.title}</p>
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 text-white hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            <ChevronLeft width={18} height={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 text-white hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            <ChevronRight width={18} height={18} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, i) => (
              <button
                key={`${img.url}-${i}`}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '24px' : '8px',
                  background: i === index ? '#ffffff' : 'rgba(255,255,255,0.45)',
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
