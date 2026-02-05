import React from 'react';

const IntroAnimation = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-neumorphic-bg flex items-center justify-center z-50">
      <div className="bg-neumorphic-bg p-12 rounded-neumorphic shadow-neumorph-outset">
        <img 
          src="/logo.png" 
          alt="Al Shirawi Equipment Co." 
          className="w-64 h-auto animate-intro-zoom"
          style={{ filter: 'drop-shadow(0 4px 8px rgba(163, 177, 198, 0.3))' }}
        />
      </div>
    </div>
  );
};

export default IntroAnimation;