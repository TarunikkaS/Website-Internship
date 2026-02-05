import React from 'react';

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {children}
    </div>
  );
};

const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

const Section = ({ children, className = '', dark = false }) => {
  return (
    <section 
      className={`py-16 md:py-24 ${dark ? 'bg-foreground text-white' : ''} ${className}`}
    >
      {children}
    </section>
  );
};

export { Layout, Container, Section };