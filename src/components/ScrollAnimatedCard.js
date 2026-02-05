import React, { useState, useEffect, useRef } from 'react';

const ScrollAnimatedCard = ({ children, index, featured, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Determine slide direction based on index
  const getSlideDirection = () => {
    if (featured) return 'translateY(60px)'; // Featured slides up
    if (index % 3 === 0) return 'translateX(-60px)'; // Left column slides from left
    if (index % 3 === 2) return 'translateX(60px)'; // Right column slides from right
    return 'translateY(60px)'; // Middle slides up
  };

  return (
    <div
      ref={ref}
      className={`${featured ? 'md:col-span-2 lg:col-span-2' : ''} ${className}`}
      style={{
        position: 'relative',
        zIndex: featured ? 100 : 10 - index,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getSlideDirection(),
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedCard;
