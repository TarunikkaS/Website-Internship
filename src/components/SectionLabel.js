import React from 'react';

const SectionLabel = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 mb-6 ${className}`}>
      {/* Pulsing accent dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
      </span>
      
      {/* Label text */}
      <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {children}
      </span>
    </div>
  );
};

export default SectionLabel;