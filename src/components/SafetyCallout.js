import React from 'react';
import { motion } from 'framer-motion';

/**
 * SafetyCallout - PPE callout with icon, title, description, and connector line
 */
const SafetyCallout = ({ 
  icon: Icon, 
  title, 
  description, 
  position, 
  onHover, 
  onLeave,
  delay = 0,
  linePoints = null 
}) => {
  const positionStyles = {
    'top-left': { top: '10%', left: '5%' },
    'top-right': { top: '10%', right: '5%' },
    'middle-left': { top: '35%', left: '5%' },
    'middle-right': { top: '35%', right: '5%' },
    'bottom-left': { bottom: '15%', left: '5%' },
    'bottom-right': { bottom: '15%', right: '5%' },
    'center-left': { top: '50%', left: '5%', transform: 'translateY(-50%)' },
  };

  return (
    <>
      {/* Connector Line */}
      {linePoints && (
        <motion.svg
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{ zIndex: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.4, duration: 0.6 }}
        >
          <motion.line
            x1={linePoints.x1}
            y1={linePoints.y1}
            x2={linePoints.x2}
            y2={linePoints.y2}
            stroke="rgba(37, 99, 235, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: delay + 0.5, duration: 0.8, ease: 'easeOut' }}
          />
        </motion.svg>
      )}

      {/* Callout Card */}
      <motion.div
        className="absolute"
        style={{ ...positionStyles[position], zIndex: 2 }}
        initial={{ opacity: 0, y: 6, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: delay + 0.6, duration: 0.5, ease: 'easeOut' }}
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-blue-100 max-w-[180px] cursor-pointer hover:bg-white/95 transition-colors">
          <div className="flex items-start gap-2">
            <div className="bg-blue-50 rounded-full p-2 flex-shrink-0">
              <Icon className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-0.5">{title}</h4>
              <p className="text-xs text-gray-600 leading-tight">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SafetyCallout;
