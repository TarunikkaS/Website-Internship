import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedWorker - SVG-based construction worker with PPE
 * Parts can be highlighted independently
 */
const AnimatedWorker = ({ highlightedPart }) => {
  const getPartStyle = (partName) => ({
    filter: highlightedPart === partName ? 'drop-shadow(0 0 12px rgba(37, 99, 235, 0.8))' : 'none',
    transition: 'filter 0.3s ease',
  });

  return (
    <motion.svg
      width="300"
      height="400"
      viewBox="0 0 300 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.95, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="worker-svg"
    >
      {/* Breathing animation */}
      <motion.g
        animate={{
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Safety Boots */}
        <g style={getPartStyle('boots')}>
          <motion.ellipse
            cx="130"
            cy="380"
            rx="18"
            ry="10"
            fill="#1E3A8A"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.rect
            x="122"
            y="360"
            width="16"
            height="20"
            fill="#1E3A8A"
            rx="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.ellipse
            cx="170"
            cy="380"
            rx="18"
            ry="10"
            fill="#1E3A8A"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.rect
            x="162"
            y="360"
            width="16"
            height="20"
            fill="#1E3A8A"
            rx="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
        </g>

        {/* Legs */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <rect x="125" y="260" width="12" height="100" fill="#4B5563" rx="6" />
          <rect x="163" y="260" width="12" height="100" fill="#4B5563" rx="6" />
        </motion.g>

        {/* High-Visibility Vest */}
        <g style={getPartStyle('vest')}>
          <motion.path
            d="M 110 160 L 105 220 L 105 260 L 195 260 L 195 220 L 190 160 L 170 140 L 130 140 Z"
            fill="#FCD34D"
            stroke="#F59E0B"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          />
          {/* Reflective stripes */}
          <motion.rect
            x="110"
            y="190"
            width="80"
            height="6"
            fill="#F3F4F6"
            opacity="0.9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.3 }}
          />
          <motion.rect
            x="110"
            y="220"
            width="80"
            height="6"
            fill="#F3F4F6"
            opacity="0.9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.35 }}
          />
        </g>

        {/* Harness */}
        <g style={getPartStyle('harness')}>
          <motion.line
            x1="150"
            y1="140"
            x2="140"
            y2="200"
            stroke="#1E3A8A"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          />
          <motion.line
            x1="150"
            y1="140"
            x2="160"
            y2="200"
            stroke="#1E3A8A"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          />
          <motion.circle
            cx="150"
            cy="200"
            r="8"
            fill="#DC2626"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
        </g>

        {/* Arms */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12 }}
        >
          <rect x="90" y="160" width="12" height="70" fill="#FCD34D" rx="6" />
          <rect x="198" y="160" width="12" height="70" fill="#FCD34D" rx="6" />
        </motion.g>

        {/* Gloves */}
        <g style={getPartStyle('gloves')}>
          <motion.ellipse
            cx="96"
            cy="235"
            rx="10"
            ry="14"
            fill="#1E3A8A"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          />
          <motion.ellipse
            cx="204"
            cy="235"
            rx="10"
            ry="14"
            fill="#1E3A8A"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          />
        </g>

        {/* Neck/Torso */}
        <motion.rect
          x="135"
          y="120"
          width="30"
          height="25"
          fill="#E5E7EB"
          rx="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08 }}
        />

        {/* Head */}
        <motion.circle
          cx="150"
          cy="100"
          r="28"
          fill="#F3D5B5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 }}
        />

        {/* Safety Goggles */}
        <g style={getPartStyle('goggles')}>
          <motion.ellipse
            cx="142"
            cy="95"
            rx="10"
            ry="8"
            fill="#60A5FA"
            opacity="0.6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3 }}
          />
          <motion.ellipse
            cx="158"
            cy="95"
            rx="10"
            ry="8"
            fill="#60A5FA"
            opacity="0.6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3 }}
          />
          <motion.path
            d="M 132 95 L 168 95"
            stroke="#1E3A8A"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.35 }}
          />
        </g>

        {/* Hard Hat */}
        <g style={getPartStyle('helmet')}>
          <motion.ellipse
            cx="150"
            cy="72"
            rx="36"
            ry="18"
            fill="#FCD34D"
            stroke="#F59E0B"
            strokeWidth="2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          />
          <motion.path
            d="M 120 72 Q 150 45 180 72"
            fill="#FCD34D"
            stroke="#F59E0B"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          {/* Visor */}
          <motion.rect
            x="130"
            y="70"
            width="40"
            height="4"
            fill="#F59E0B"
            rx="2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
          />
        </g>

        {/* Ear Protection */}
        <g style={getPartStyle('ear')}>
          <motion.ellipse
            cx="120"
            cy="95"
            rx="8"
            ry="12"
            fill="#1E3A8A"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          />
          <motion.ellipse
            cx="180"
            cy="95"
            rx="8"
            ry="12"
            fill="#1E3A8A"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          />
        </g>
      </motion.g>

      {/* Glow animations for highlighted parts */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </motion.svg>
  );
};

export default AnimatedWorker;
