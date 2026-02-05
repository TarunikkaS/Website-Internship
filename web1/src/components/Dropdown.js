import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ 
  isOpen, 
  onClose, 
  children, 
  trigger,
  className = "" 
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') onClose();
      });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') onClose();
      });
    };
  }, [isOpen, onClose]);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {trigger}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50">
          <div className="bg-neumorphic-bg rounded-neumorphic shadow-neumorph-outset p-4 min-w-max">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ children, onClick, href, nested }) => {
  const [showNested, setShowNested] = useState(false);

  const handleClick = () => {
    if (href) {
      // Navigate to route (you would implement actual navigation here)
      console.log(`Navigate to: ${href}`);
      window.location.href = href; // Simple navigation for demo
    }
    if (onClick) onClick();
    if (nested) {
      setShowNested(!showNested);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="w-full text-left px-6 py-3 rounded-2xl bg-neumorphic-bg shadow-neumorph-inset hover:shadow-neumorph-pressed transition-all duration-300 text-gray-700 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {children}
        {nested && (
          <span className="ml-2 text-gray-500">›</span>
        )}
      </button>
      {nested && showNested && (
        <div className="absolute left-full top-0 ml-2 z-60">
          <div className="bg-neumorphic-bg rounded-neumorphic shadow-neumorph-outset p-4">
            {nested.map((item, index) => (
              <DropdownItem key={index} href={item.href}>
                {item.label}
              </DropdownItem>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { Dropdown, DropdownItem };