import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import MagicBento from './MagicBento';

const ValueCard = ({ 
  letter, 
  title, 
  description, 
  icon: Icon,
  dropdownItems,
  href,
  featured = false,
  className = '' 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    if (dropdownItems) {
      setIsDropdownOpen(!isDropdownOpen);
    } else if (href) {
      window.location.href = href;
    }
  };

  const cardContent = (
    <MagicBento
      enableSpotlight={true}
      enableBorderGlow={true}
      enableStars={true}
      enableTilt={false}
      enableMagnetism={false}
      glowColor="37, 99, 235"
      spotlightSize={280}
    >
      <div
        onClick={!dropdownItems ? handleClick : undefined}
        className={`
          group relative bg-card rounded-2xl border border-border p-6 cursor-pointer
          shadow-card card-hover gradient-overlay overflow-visible
          ${featured ? 'md:col-span-2' : ''}
          ${className}
        `}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
      {/* Gradient Icon Badge */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
            {Icon && <Icon className="w-6 h-6 text-white" />}
          </div>
          {/* Letter Badge */}
          <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-foreground text-white text-xs font-bold flex items-center justify-center shadow-md">
            {letter}
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-body font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Arrow indicator for dropdowns */}
      {dropdownItems && (
        <div className="mt-4 flex items-center text-accent text-sm font-medium">
          <span>Explore</span>
          <svg 
            className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}

      {/* Direct link arrow */}
      {href && !dropdownItems && (
        <div className="mt-4 flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      )}
      </div>
    </MagicBento>
  );

  if (dropdownItems) {
    return (
      <div style={{ position: 'relative', zIndex: isDropdownOpen ? 999 : 1 }}>
        <DropdownMenu
          trigger={cardContent}
          items={dropdownItems}
          isOpen={isDropdownOpen}
          onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
          onClose={() => setIsDropdownOpen(false)}
        />
      </div>
    );
  }

  return cardContent;
};

export default ValueCard;