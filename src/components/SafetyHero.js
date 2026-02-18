import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Ear, 
  AlertTriangle, 
  Hand, 
  Footprints,
  Link2,
  Scissors
} from 'lucide-react';

/**
 * SafetyHero - Interactive PPE education with hover highlighting
 * Hovering over info cards highlights the corresponding PPE on the worker
 */
const SafetyHero = () => {
  const [hoveredPPE, setHoveredPPE] = useState(null);

  // PPE items with exact content and positions
  const ppeItems = [
    // LEFT SIDE
    {
      id: 'helmet',
      icon: Shield,
      title: 'Head protection',
      description: 'Falling or flying objects, overhead objects',
      side: 'left',
      color: '#991B1B',
      cardPosition: { top: '2%', left: '1%' },
      highlightZone: { top: '5%', left: '45%', width: '12%', height: '10%' },
    },
    {
      id: 'ear',
      icon: Ear,
      title: 'Hearing protection',
      description: 'Loud tools and machinery, poorly maintained equipment',
      side: 'left',
      color: '#991B1B',
      cardPosition: { top: '22%', left: '1%' },
      highlightZone: { top: '12%', left: '44%', width: '5%', height: '6%' },
    },
    {
      id: 'chaps',
      icon: Scissors,
      title: 'Chaps pants',
      description: 'Chainsaws',
      side: 'left',
      color: '#991B1B',
      cardPosition: { top: '42%', left: '1%' },
      highlightZone: { top: '60%', left: '47%', width: '8%', height: '15%' },
    },
    {
      id: 'boots',
      icon: Footprints,
      title: 'Foot protection',
      description: 'Falling or rolling objects, sharp or hot objects, wet and slippery surfaces, uneven surfaces, hot surfaces, electrical hazards',
      side: 'left',
      color: '#991B1B',
      cardPosition: { bottom: '5%', left: '1%' },
      highlightZone: { bottom: '5%', left: '47%', width: '10%', height: '10%' },
    },
    // RIGHT SIDE
    {
      id: 'goggles',
      icon: Eye,
      title: 'Eye protection',
      description: 'Blowing dust or particles, metal shavings, acids or caustic liquids, welding light',
      side: 'right',
      color: '#1E40AF',
      cardPosition: { top: '2%', right: '1%' },
      highlightZone: { top: '11%', left: '46%', width: '8%', height: '4%' },
    },
    {
      id: 'vest',
      icon: AlertTriangle,
      title: 'High-visibility hat, vest, pants',
      description: 'Errant vehicles, distracted drivers',
      side: 'right',
      color: '#1E40AF',
      cardPosition: { top: '24%', right: '1%' },
      highlightZone: { top: '25%', left: '46%', width: '14%', height: '25%' },
    },
    {
      id: 'gloves',
      icon: Hand,
      title: 'Hand protection',
      description: 'Sharp or hot objects, chemicals, biological or electrical hazards',
      side: 'right',
      color: '#1E40AF',
      cardPosition: { top: '46%', right: '1%' },
      highlightZone: { top: '50%', left: '56%', width: '8%', height: '10%' },
    },
    {
      id: 'harness',
      icon: Link2,
      title: 'Harness lanyard',
      description: 'Working more than 6 feet or more above a lower level',
      side: 'right',
      color: '#1E40AF',
      cardPosition: { bottom: '5%', right: '1%' },
      highlightZone: { top: '35%', left: '48%', width: '10%', height: '20%' },
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-12 pb-16 overflow-hidden">
      
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Instruction Text in Soft-Edged Box */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8 shadow-lg border border-gray-200/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-700 text-base text-center max-w-2xl">
            Hover over the information boxes to identify the corresponding personal protective equipment on the worker
          </p>
        </motion.div>
        
        {/* Worker + Info Cards + Arrows */}
        <div className="relative w-full h-[75vh] md:h-[80vh] flex items-center justify-center">
          
          {/* Hidden on mobile - Desktop only interaction */}
          <div className="hidden md:block relative w-full h-full">
            
            {/* Construction Worker - Center Layer */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            >
              <img
                src="/ASSETS/asset/constructio_worker.png"
                alt="Construction Worker with Full PPE"
                className="h-[75vh] w-auto object-contain pointer-events-none"
              />
            </motion.div>

            {/* Highlight overlays on the worker */}
            {hoveredPPE && ppeItems.filter(item => item.id === hoveredPPE).map((item) => (
              <motion.div
                key={`highlight-${item.id}`}
                className="absolute rounded-full pointer-events-none"
                style={{
                  ...item.highlightZone,
                  zIndex: 11,
                  backgroundColor: item.color,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            ))}

            {/* PPE Info Cards - Larger with Hover Effects */}
            {ppeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`card-${item.id}`}
                  className="absolute cursor-pointer"
                  style={{
                    ...item.cardPosition,
                    zIndex: 20,
                    minWidth: '360px',
                    maxWidth: '380px',
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    scale: hoveredPPE === item.id ? 1.05 : 1,
                    y: 0,
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: 'easeOut',
                    delay: hoveredPPE === item.id ? 0 : 0.8 + (index * 0.1)
                  }}
                  onMouseEnter={() => setHoveredPPE(item.id)}
                  onMouseLeave={() => setHoveredPPE(null)}
                >
                  <div 
                    className="bg-white/98 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 transition-all duration-300"
                    style={{ 
                      borderColor: hoveredPPE === item.id ? item.color : '#E5E7EB',
                      boxShadow: hoveredPPE === item.id ? `0 20px 25px -5px ${item.color}33, 0 10px 10px -5px ${item.color}1a` : undefined
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="rounded-full p-3 flex-shrink-0 transition-all duration-300" 
                        style={{ 
                          backgroundColor: item.side === 'left' ? (hoveredPPE === item.id ? '#FEE2E2' : '#FEF2F2') : (hoveredPPE === item.id ? '#DBEAFE' : '#EFF6FF'),
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile View - Static Worker + Cards Below */}
          <div className="md:hidden flex flex-col items-center w-full">
            <motion.img
              src="/ASSETS/asset/constructio_worker.png"
              alt="Construction Worker with Full PPE"
              className="h-[50vh] w-auto object-contain mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />

            <div className="w-full space-y-5 px-4">
              {ppeItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={`mobile-${item.id}`}
                    className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-md border border-blue-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-3 h-3 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>
    </section>
  );
};

export default SafetyHero;
