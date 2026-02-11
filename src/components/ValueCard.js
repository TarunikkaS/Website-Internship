import React from 'react';
import { Link } from 'react-router-dom';
import MagicBento from './MagicBento';
import { ArrowRight } from 'lucide-react';

const ValueCard = ({ 
  letter, 
  title, 
  description, 
  icon: Icon,
  pills,
  href,
  featured = false,
  className = '' 
}) => {
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
        className={`
          group relative bg-white rounded-3xl border border-border p-10 lg:p-12
          shadow-lg hover:shadow-2xl card-hover gradient-overlay overflow-visible
          transition-all duration-300 flex flex-col h-full
          ${featured ? 'md:col-span-2' : ''}
          ${className}
        `}
      >
        {/* Content with horizontal layout for icon and title */}
        <div className="flex items-start gap-5 mb-4">
          {/* Gradient Icon Badge */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow">
              {Icon && <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />}
            </div>
            {/* Letter Badge */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-foreground text-white text-sm font-bold flex items-center justify-center shadow-md">
              {letter}
            </div>
          </div>

          {/* Title next to icon */}
          <h3 
            className="font-body font-semibold text-2xl lg:text-[28px] group-hover:text-accent transition-colors duration-200 leading-tight pt-2"
            style={{ color: '#1E4ED8', fontWeight: 700 }}
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          {description}
        </p>

        {/* Action Section (pills or button) */}
        <div className="mt-auto">
          {pills && pills.length > 0 ? (
            <>
              {/* Helper text for pills */}
              <p className="text-sm text-gray-600 mb-4">Click on the values to explore more.</p>
              
              {/* Pills Grid */}
              <div className={`grid gap-3 ${pills.length === 2 ? 'grid-cols-1 md:grid-cols-2' : pills.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 md:grid-cols-4'}`}>
                {pills.map((pill, index) => (
                  <Link
                    key={index}
                    to={pill.href}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white font-medium text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full"
                    style={{ 
                      background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #1E4ED8 100%)',
                      boxShadow: '0 4px 12px rgba(30, 58, 138, 0.3)',
                      maxWidth: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 58, 138, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 138, 0.3)';
                    }}
                  >
                    {pill.icon && <pill.icon className="w-4 h-4" />}
                    <span className="truncate">{pill.label}</span>
                  </Link>
                ))}
              </div>
            </>
          ) : href ? (
            <Link
              to={href}
              className="inline-flex items-center gap-2 text-accent font-medium text-lg group/btn transition-all duration-200"
            >
              <span>Explore more</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
          ) : null}
        </div>
      </div>
    </MagicBento>
  );

  return cardContent;
};

export default ValueCard;