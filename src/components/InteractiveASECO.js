import React, { useState, useEffect, useCallback } from 'react';

// Definitions - full words displayed when letter is clicked
const definitions = {
  A: { fullWord: 'ADHERENCE', secondLine: 'to Health, Safety, Environment & Quality' },
  S: { fullWord: 'SUSTAINABILITY', secondLine: '' },
  E: { fullWord: 'EMPLOYEE', secondLine: 'Engagement, Education & Empowerment' },
  C: { fullWord: 'COLLABORATION', secondLine: 'with Customers & Suppliers' },
  O: { fullWord: 'OPERATIONAL', secondLine: 'Excellence' },
};

const InteractiveASECO = () => {
  const [activeLetter, setActiveLetter] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  const handleLetterClick = useCallback((letter) => {
    if (isAnimating) return;
    
    if (activeLetter === letter) {
      setActiveLetter(null);
    } else {
      setIsAnimating(true);
      setActiveLetter(letter);
      setTimeout(() => setIsAnimating(false), 250);
    }
  }, [activeLetter, isAnimating]);

  const handleKeyDown = useCallback((event, letter) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLetterClick(letter);
    }
  }, [handleLetterClick]);

  const letters = ['A', 'S', 'E', 'C', 'O'];

  return (
    <div className="relative">
      {/* Show ASECO when no letter is active */}
      {!activeLetter && (
        <div 
          className="flex items-baseline justify-center"
          role="group"
          aria-label="ASECO acronym - select a letter to view its meaning"
        >
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              onKeyDown={(e) => handleKeyDown(e, letter)}
              aria-expanded={false}
              aria-label={letter}
              className={`
                font-headline font-bold leading-none
                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                cursor-pointer select-none
                ${prefersReducedMotion ? '' : 'transition-all duration-[220ms] ease-out'}
                hover:scale-105
              `}
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                background: 'linear-gradient(90deg, #1E3A8A 0%, #2563EB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      {/* Show expanded word when a letter is active */}
      {activeLetter && (
        <div
          role="region"
          aria-live="polite"
          className="flex flex-col items-center text-center cursor-pointer"
          onClick={() => setActiveLetter(null)}
        >
          {/* Full word (large, centered) */}
          <span 
            className="font-headline font-bold leading-none"
            style={{ 
              fontFamily: "'League Spartan', sans-serif",
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              background: 'linear-gradient(90deg, #1E3A8A 0%, #2563EB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
            }}
          >
            {definitions[activeLetter].fullWord}
          </span>
          
          {/* Second line: centered below, single line */}
          {definitions[activeLetter].secondLine && (
            <p 
              className="font-body text-xl md:text-2xl lg:text-3xl font-semibold mt-2 whitespace-nowrap"
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                color: 'rgba(15, 23, 42, 0.7)',
              }}
            >
              {definitions[activeLetter].secondLine}
            </p>
          )}
        </div>
      )}

      {/* Subtle hint text */}
      <p 
        className={`
          text-base md:text-lg font-semibold mt-4 text-center
          ${prefersReducedMotion ? '' : 'transition-opacity duration-200'}
        `}
        style={{ 
          fontFamily: "'DM Sans', sans-serif",
          color: 'rgba(15, 23, 42, 0.7)',
          opacity: activeLetter ? 0 : 1,
        }}
      >
        Click a letter to explore
      </p>
    </div>
  );
};

export default InteractiveASECO;
