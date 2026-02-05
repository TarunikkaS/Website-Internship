import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const DropdownMenu = ({ 
  trigger, 
  items, 
  isOpen, 
  onToggle, 
  onClose,
  className = '' 
}) => {
  const dropdownRef = useRef(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
        setActiveSubmenu(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
        setActiveSubmenu(null);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleItemClick = (item, index) => {
    if (item.nested) {
      setActiveSubmenu(activeSubmenu === index ? null : index);
    } else if (item.href) {
      window.location.href = item.href;
      onClose();
    }
  };

  return (
    <div ref={dropdownRef} className={`relative overflow-visible ${className}`}>
      {/* Trigger */}
      <div onClick={onToggle}>
        {trigger}
      </div>

      {/* Dropdown Panel */}
      {isOpen && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-[100] animate-scale-in"
          style={{ minWidth: '220px' }}
        >
          <div className="bg-card rounded-2xl shadow-card-hover border border-border p-2">
            {items.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => handleItemClick(item, index)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium text-foreground hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  <span>{item.label}</span>
                  {item.nested && (
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>

                {/* Nested Submenu */}
                {item.nested && activeSubmenu === index && (
                  <div 
                    className="absolute left-full top-0 ml-2 z-[110] animate-scale-in"
                    style={{ minWidth: '200px' }}
                  >
                    <div className="bg-card rounded-2xl shadow-card-hover border border-border p-2">
                      {item.nested.map((nestedItem, nestedIndex) => (
                        <a
                          key={nestedIndex}
                          href={nestedItem.href}
                          className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        >
                          {nestedItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;