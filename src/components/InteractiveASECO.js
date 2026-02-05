import React, { useState, useEffect, useCallback } from 'react';
import TextPressure from './TextPressure';
import SpotlightCard from './SpotlightCard';
import StarBorder from './StarBorder';
import { Shield, Leaf, Users, HeartHandshake, Target } from 'lucide-react';

// Definitions mapping with unique icons
const definitions = {
  A: { 
    fullWord: 'ADHERENCE', 
    restOfText: 'to Health, Safety, Environment & Quality',
    icon: Shield
  },
  S: { 
    fullWord: 'SUSTAINABILITY', 
    restOfText: '',
    icon: Leaf
  },
  E: { 
    fullWord: 'EMPLOYEE', 
    restOfText: 'Engagement, Education & Empowerment',
    icon: Users
  },
  C: { 
    fullWord: 'COLLABORATION', 
    restOfText: 'with Customers & Suppliers',
    icon: HeartHandshake
  },
  O: { 
    fullWord: 'OPERATIONAL', 
    restOfText: 'Excellence',
    icon: Target
  },
};

const InteractiveASECO = () => {
  const [activeLetter, setActiveLetter] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  const handleActiveCharChange = useCallback((char, index) => {
    setActiveLetter(char);
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      {/* ASECO with TextPressure */}
      <div className="mb-3">
        <TextPressure 
          text="ASECO"
          flex={false}
          onActiveCharChange={handleActiveCharChange}
        />
      </div>

      {/* Helper text */}
      <p 
        className="text-sm font-semibold mb-6"
        style={{ 
          fontFamily: "'DM Sans', sans-serif",
          color: 'rgba(30, 58, 138, 0.6)',
          fontSize: '0.875rem',
        }}
      >
        Click a letter to explore our values
      </p>

      {/* Content box - accordion style expansion */}
      <div 
        className="w-full max-w-2xl overflow-hidden"
        style={{
          maxHeight: activeLetter ? '400px' : '0',
          opacity: activeLetter ? 1 : 0,
          transition: prefersReducedMotion 
            ? 'none' 
            : 'max-height 280ms ease-out, opacity 280ms ease-out',
        }}
        role="region"
        aria-live="polite"
      >
        {activeLetter && definitions[activeLetter] && (
          <StarBorder
            color="rgba(30, 58, 138, 0.7)"
            thickness={3}
            speed={5500}
          >
            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.15)"
              spotlightSize={250}
              className="p-6 mx-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.25) 0%, rgba(37, 99, 235, 0.30) 100%)',
                border: '2px solid rgba(30, 58, 138, 0.8)',
                boxShadow: '0 8px 24px rgba(30, 58, 138, 0.2)',
                backdropFilter: 'blur(8px)',
                borderRadius: '0',
              }}
            >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 mt-2">
                {React.createElement(definitions[activeLetter].icon, {
                  className: "w-7 h-7",
                  style: { color: '#1E3A8A' },
                  strokeWidth: 2.5
                })}
              </div>
              
              {/* Content */}
              <div className="flex-1 text-left">
                {/* First word - large and bold */}
                <div 
                  className="font-bold leading-tight mb-2"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                    color: '#1E3A8A',
                  }}
                >
                  {definitions[activeLetter].fullWord}
                </div>
                
                {/* Rest of text - smaller, below */}
                {definitions[activeLetter].restOfText && (
                  <div 
                    className="font-semibold"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                      color: 'rgba(15, 23, 42, 0.7)',
                      lineHeight: '1.6',
                    }}
                  >
                    {definitions[activeLetter].restOfText}
                  </div>
                )}
              </div>
            </div>
            </SpotlightCard>
          </StarBorder>
        )}
      </div>
    </div>
  );
};

export default InteractiveASECO;
