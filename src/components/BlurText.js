import React, { useState, useEffect } from 'react';

/**
 * BlurText - Text that animates in with blur and fade effect
 */
const BlurText = ({ 
  text, 
  className = '', 
  style = {},
  delay = 0,
  duration = 400
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={className}
      style={{
        ...style,
        display: 'inline-block',
        filter: isVisible ? 'blur(0px)' : 'blur(8px)',
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms ease-out`,
      }}
    >
      {text}
    </span>
  );
};

export default BlurText;
