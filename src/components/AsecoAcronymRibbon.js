import React, { useState, useEffect, useRef } from 'react';
import { Shield, Leaf, Users, HeartHandshake, Target } from 'lucide-react';

const acronymData = [
  {
    letter: 'A',
    title: 'Adherence to HSEQ',
    fullText: 'Adherence to Health, Safety, Environment & Quality',
    icon: Shield,
    href: '#values'
  },
  {
    letter: 'S',
    title: 'Sustainability',
    fullText: 'Sustainability',
    icon: Leaf,
    href: '/sustainability'
  },
  {
    letter: 'E',
    title: 'Employee Excellence',
    fullText: 'Employee Engagement, Education & Empowerment',
    icon: Users,
    href: '#values'
  },
  {
    letter: 'C',
    title: 'Collaboration',
    fullText: 'Collaboration with Customers & Suppliers',
    icon: HeartHandshake,
    href: '#values'
  },
  {
    letter: 'O',
    title: 'Operational Excellence',
    fullText: 'Operational Excellence',
    icon: Target,
    href: '/operational-excellence'
  }
];

const AsecoAcronymRibbon = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const ribbonRef = useRef(null);
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ribbonRef.current && !ribbonRef.current.contains(event.target)) {
        setExpandedIndex(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setExpandedIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle(index);
    }
  };

  return (
    <div 
      ref={ribbonRef}
      className="flex flex-wrap justify-center gap-3 md:gap-4"
      role="group"
      aria-label="ASECO acronym - click each letter to learn more"
    >
      {acronymData.map((item, index) => {
        const isExpanded = expandedIndex === index;
        const Icon = item.icon;

        return (
          <button
            key={item.letter}
            type="button"
            onClick={() => handleToggle(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-expanded={isExpanded}
            aria-label={`${item.letter} - ${item.fullText}`}
            className={`
              relative cursor-pointer select-none
              rounded-2xl border-2 border-accent/20
              bg-white/80 backdrop-blur-sm shadow-lg
              flex items-center gap-3
              transition-all
              ${prefersReducedMotion ? '' : 'duration-300 ease-out'}
              focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
              hover:border-accent/40 hover:shadow-xl
              ${isExpanded 
                ? 'px-5 py-4 min-w-[280px] md:min-w-[320px]' 
                : 'px-4 py-3 min-w-[56px] justify-center'
              }
            `}
            style={{
              transform: isExpanded ? 'translateY(-4px)' : 'translateY(0)',
            }}
          >
            {/* Letter Badge */}
            <div className={`
              flex-shrink-0 rounded-xl bg-gradient-accent 
              flex items-center justify-center shadow-md
              transition-all ${prefersReducedMotion ? '' : 'duration-300'}
              ${isExpanded ? 'w-12 h-12' : 'w-10 h-10'}
            `}>
              <span className="text-white font-headline text-lg font-bold">
                {item.letter}
              </span>
            </div>

            {/* Expanded Content */}
            <div 
              className={`
                flex flex-col overflow-hidden
                transition-all ${prefersReducedMotion ? '' : 'duration-300'}
                ${isExpanded ? 'opacity-100 max-w-[250px]' : 'opacity-0 max-w-0'}
              `}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground truncate">
                  {item.title}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-snug mb-2">
                {item.fullText}
              </p>
              <a 
                href={item.href}
                className="text-xs font-medium text-accent hover:text-accent-secondary transition-colors inline-flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                Explore
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default AsecoAcronymRibbon;
