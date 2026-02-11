import React, { useEffect, useState } from 'react';

/**
 * MasonryBackground - Animated background collage with horizontal marquee
 */
const MasonryBackground = ({ images = [], className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Repeat images to fill viewport generously
  const repeatedImages = [...images, ...images, ...images, ...images];

  // Generate horizontal/landscape heights for masonry effect
  const getRandomHeight = (index) => {
    const heights = [180, 200, 220, 190, 210, 230, 195, 215];
    return heights[index % heights.length];
  };

  // Render single masonry panel
  const renderMasonryPanel = (keyPrefix) => (
    <div
      key={keyPrefix}
      className="masonry-panel"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 16.666666%)',
        gridAutoRows: '200px',
        gap: 0,
        padding: 0,
        margin: 0,
        minWidth: '100vw',
        lineHeight: 0,
        fontSize: 0,
      }}
    >
      {repeatedImages.map((image, index) => (
        <div
          key={`${keyPrefix}-${index}`}
          style={{
            width: '100%',
            height: '200px',
            borderRadius: 0,
            overflow: 'hidden',
            opacity: 0.12,
            filter: 'blur(0.5px) grayscale(0.3)',
            background: 'transparent',
            display: 'block',
            margin: 0,
            padding: 0,
            border: 'none',
            lineHeight: 0,
            fontSize: 0,
          }}
        >
          <img
            src={image}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              margin: 0,
              padding: 0,
              border: 'none',
              verticalAlign: 'top',
            }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`masonry-background ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Marquee track with two panels */}
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: '200vw',
          height: '100%',
          opacity: isLoaded ? 1 : 0,
          transition: prefersReducedMotion ? 'none' : 'opacity 800ms ease-out',
          animation: prefersReducedMotion ? 'none' : 'marqueeScroll 70s linear infinite',
        }}
      >
        {renderMasonryPanel('panel-1')}
        {renderMasonryPanel('panel-2')}
      </div>

      {/* Light blue translucent overlay above masonry */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(37, 99, 235, 0.10) 100%)',
          zIndex: 1,
        }}
      />

      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100vw);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MasonryBackground;
