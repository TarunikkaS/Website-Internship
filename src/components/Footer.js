import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white/90 text-sm font-medium">
            AL SHIRAWI EQUIPMENT (ASECO) – Values & Culture
          </p>
          <p className="text-white/60 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;