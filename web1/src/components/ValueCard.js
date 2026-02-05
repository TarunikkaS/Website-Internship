import React, { useState } from 'react';
import { Dropdown, DropdownItem } from './Dropdown';

const ValueCard = ({ 
  letter, 
  title, 
  description, 
  dropdownItems, 
  directHref,
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    if (directHref) {
      // Direct navigation
      console.log(`Navigate to: ${directHref}`);
      window.location.href = directHref;
    } else if (dropdownItems) {
      // Toggle dropdown
      setDropdownOpen(!dropdownOpen);
    }
    if (onClick) onClick();
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const cardClasses = `
    bg-neumorphic-bg rounded-neumorphic p-8 cursor-pointer transition-all duration-300
    transform select-none outline-none focus:ring-4 focus:ring-blue-300
    ${isPressed 
      ? 'shadow-neumorph-pressed scale-98' 
      : isHovered 
        ? 'shadow-neumorph-hover -translate-y-2' 
        : 'shadow-neumorph-outset'
    }
  `;

  const trigger = (
    <div
      className={cardClasses}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${letter} - ${title}`}
    >
      <div className="text-center">
        <div className="text-6xl font-bold text-gray-800 mb-4 tracking-wider">
          {letter}
        </div>
        <div className="text-sm font-semibold text-gray-600 leading-tight">
          {title}
        </div>
        {description && (
          <div className="text-xs text-gray-500 mt-2 leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </div>
  );

  if (dropdownItems) {
    return (
      <Dropdown
        isOpen={dropdownOpen}
        onClose={() => setDropdownOpen(false)}
        trigger={trigger}
        className="w-full max-w-sm"
      >
        <div className="space-y-2">
          {dropdownItems.map((item, index) => (
            <DropdownItem 
              key={index} 
              href={item.href}
              nested={item.nested}
            >
              {item.label}
            </DropdownItem>
          ))}
        </div>
      </Dropdown>
    );
  }

  return (
    <div className="w-full max-w-sm">
      {trigger}
    </div>
  );
};

export default ValueCard;