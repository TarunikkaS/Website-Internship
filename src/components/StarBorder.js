import React, { useEffect, useRef } from 'react';

/**
 * StarBorder - Animated border with traveling stars/dots
 */
const StarBorder = ({ 
  children,
  className = '',
  style = {},
  color = 'rgba(110, 160, 255, 0.8)',
  thickness = 2,
  speed = 5000,
  as: Component = 'div'
}) => {
  const borderRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = borderRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let startTime = Date.now();

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = (elapsed % speed) / speed;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const perimeter = 2 * (w + h);
      const position = progress * perimeter;

      // Calculate star position along the border
      let x, y;
      if (position < w) {
        // Top edge
        x = position;
        y = 0;
      } else if (position < w + h) {
        // Right edge
        x = w;
        y = position - w;
      } else if (position < 2 * w + h) {
        // Bottom edge
        x = w - (position - w - h);
        y = h;
      } else {
        // Left edge
        x = 0;
        y = h - (position - 2 * w - h);
      }

      // Draw the star/glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 40);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'transparent');

      ctx.shadowBlur = 30;
      ctx.shadowColor = color;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fill();

      // Draw border
      ctx.strokeStyle = color.replace(/[\d.]+\)$/g, '0.2)'); // Make border more subtle
      ctx.lineWidth = thickness;
      ctx.strokeRect(0, 0, w, h);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [color, thickness, speed]);

  return (
    <Component
      ref={borderRef}
      className={`relative ${className}`}
      style={{
        ...style,
        position: 'relative',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
