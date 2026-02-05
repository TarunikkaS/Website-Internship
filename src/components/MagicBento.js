import React, { useState, useRef, useCallback, useEffect } from 'react';

/**
 * MagicBento - Premium enterprise-grade hover effect for cards
 * Subtle spotlight, glowing border, and light particle effects
 */
const MagicBento = ({ 
  children,
  className = '',
  enableSpotlight = true,
  enableBorderGlow = true,
  enableStars = true,
  enableTilt = false,
  enableMagnetism = false,
  glowColor = "96, 140, 255", // Soft corporate blue
  spotlightSize = 300,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [stars, setStars] = useState([]);
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate subtle stars on hover
  useEffect(() => {
    if (isHovering && enableStars && !isMobile) {
      const newStars = Array.from({ length: 20 }, () => ({
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 3,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 0.5,
        direction: Math.random() > 0.5 ? 1 : -1,
      }));
      setStars(newStars);
    } else {
      setStars([]);
    }
  }, [isHovering, enableStars, isMobile]);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || isMobile) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  }, [isMobile]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setStars([]);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`magic-bento-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        isolation: 'isolate',
      }}
    >
      {/* Spotlight Effect */}
      {enableSpotlight && isHovering && !isMobile && (
        <div
          className="magic-bento-spotlight"
          style={{
            position: 'absolute',
            width: `${spotlightSize}px`,
            height: `${spotlightSize}px`,
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(${glowColor}, 0.08) 0%, rgba(${glowColor}, 0.04) 40%, transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 1,
            transition: 'opacity 300ms ease-out',
            opacity: isHovering ? 1 : 0,
          }}
        />
      )}

      {/* Border Glow */}
      {enableBorderGlow && (
        <div
          className="magic-bento-border-glow"
          style={{
            position: 'absolute',
            inset: '-2px',
            borderRadius: 'inherit',
            background: `linear-gradient(135deg, rgba(${glowColor}, 0.5), rgba(${glowColor}, 0.3))`,
            filter: 'blur(15px)',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: isHovering ? 1 : 0,
            transition: 'opacity 300ms ease-out',
          }}
        />
      )}

      {/* Subtle Stars/Particles */}
      {enableStars && stars.length > 0 && !isMobile && (
        <div className="magic-bento-stars" style={{ position: 'absolute', inset: '-10px', pointerEvents: 'none', zIndex: 0, overflow: 'visible', borderRadius: 'inherit' }}>
          {stars.map((star) => (
            <div
              key={star.id}
              style={{
                position: 'absolute',
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                borderRadius: '50%',
                background: `rgba(${glowColor}, ${star.opacity})`,
                animation: `magicBentoStarFloat${star.direction > 0 ? 'Right' : 'Left'} ${star.duration}s ease-in-out infinite`,
                animationDelay: `${star.delay}s`,
                boxShadow: `0 0 ${star.size * 6}px rgba(${glowColor}, ${star.opacity}), 0 0 ${star.size * 12}px rgba(${glowColor}, ${star.opacity * 0.5})`,
                filter: 'blur(0.3px)',
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>

      <style>{`
        @keyframes magicBentoStarFloatRight {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translate(25px, -15px) scale(1.2);
            opacity: 0.7;
          }
          50% {
            transform: translate(35px, -25px) scale(1.3);
            opacity: 0.9;
          }
          75% {
            transform: translate(20px, -12px) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes magicBentoStarFloatLeft {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translate(-25px, -15px) scale(1.2);
            opacity: 0.7;
          }
          50% {
            transform: translate(-35px, -25px) scale(1.3);
            opacity: 0.9;
          }
          75% {
            transform: translate(-20px, -12px) scale(1.1);
            opacity: 0.6;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .magic-bento-wrapper,
          .magic-bento-spotlight,
          .magic-bento-border-glow,
          .magic-bento-stars > div {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MagicBento;
