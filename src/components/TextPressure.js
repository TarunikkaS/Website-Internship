import React, { useState, useRef, useCallback } from 'react';

/**
 * TextPressure - Interactive text component that responds to cursor proximity
 * Letters deform and scale based on distance to cursor
 */
const TextPressure = ({ 
  text = 'ASECO',
  flex = false,
  onActiveCharChange = null,
  className = '',
  style = {}
}) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const charsRef = useRef([]);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCursorPos({ x, y });

    // Find closest character
    let closestChar = null;
    let minDistance = Infinity;
    
    charsRef.current.forEach((charEl, index) => {
      if (!charEl) return;
      
      const charRect = charEl.getBoundingClientRect();
      const charCenterX = charRect.left + charRect.width / 2 - rect.left;
      const charCenterY = charRect.top + charRect.height / 2 - rect.top;
      
      const distance = Math.sqrt(
        Math.pow(x - charCenterX, 2) + Math.pow(y - charCenterY, 2)
      );
      
      if (distance < minDistance) {
        minDistance = distance;
        closestChar = { char: text[index], index };
      }
    });
    
    if (closestChar && minDistance < 150) {
      if (onActiveCharChange) {
        onActiveCharChange(closestChar.char, closestChar.index);
      }
    } else {
      if (onActiveCharChange) {
        onActiveCharChange(null, null);
      }
    }
  }, [text, onActiveCharChange]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    if (onActiveCharChange) {
      onActiveCharChange(null, null);
    }
  }, [onActiveCharChange]);

  const getCharStyle = useCallback((index) => {
    if (!isHovering) return {};
    
    const charEl = charsRef.current[index];
    if (!charEl || !containerRef.current) return {};
    
    const rect = containerRef.current.getBoundingClientRect();
    const charRect = charEl.getBoundingClientRect();
    
    const charCenterX = charRect.left + charRect.width / 2 - rect.left;
    const charCenterY = charRect.top + charRect.height / 2 - rect.top;
    
    const distance = Math.sqrt(
      Math.pow(cursorPos.x - charCenterX, 2) + 
      Math.pow(cursorPos.y - charCenterY, 2)
    );
    
    const maxDistance = 150;
    const influence = Math.max(0, 1 - distance / maxDistance);
    
    const scale = 1 + influence * 0.15;
    const translateY = -influence * 8;
    
    return {
      transform: `scale(${scale}) translateY(${translateY}px)`,
      filter: `drop-shadow(0 0 ${influence * 12}px rgba(37, 99, 235, ${influence * 0.5}))`,
    };
  }, [isHovering, cursorPos]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        display: flex ? 'flex' : 'inline-block',
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        style={{ 
          display: flex ? 'flex' : 'inline',
          gap: flex ? '0.5rem' : '0',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {text.split('').map((char, index) => (
          <span
            key={index}
            ref={(el) => (charsRef.current[index] = el)}
            style={{
              display: 'inline-block',
              fontFamily: "'League Spartan', sans-serif",
              fontWeight: 'bold',
              fontSize: 'clamp(5.5rem, 12vw, 10rem)',
              background: 'linear-gradient(90deg, #1E3A8A 0%, #2563EB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer',
              transition: 'all 200ms ease-out',
              letterSpacing: '-0.02em',
              ...getCharStyle(index)
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextPressure;
