import React, { useState, useRef, useCallback } from 'react';

/**
 * SpotlightCard - Card with cursor-following spotlight effect
 */
const SpotlightCard = ({ 
  children,
  className = '',
  style = {},
  spotlightColor = 'rgba(0, 229, 255, 0.15)',
  spotlightSize = 200
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute transition-opacity duration-300"
          style={{
            width: `${spotlightSize}px`,
            height: `${spotlightSize}px`,
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 70%)`,
            opacity: isHovering ? 1 : 0,
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
