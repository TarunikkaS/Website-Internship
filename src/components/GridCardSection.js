import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Construction, 
  Lock, 
  TrendingUp, 
  Anchor, 
  Car, 
  Clipboard, 
  Wrench, 
  Shield, 
  Ban, 
  Cigarette,
  BookOpen,
  Users,
  ShieldCheck,
  AlertTriangle,
  Zap,
  Search
} from 'lucide-react';

const iconMap = {
  'groundwork': Construction,
  'confined spaces': Lock,
  'working at height': TrendingUp,
  'hoisting and lifting': Anchor,
  'road safety': Car,
  'work permit': Clipboard,
  'making equipment safe': Wrench,
  'personal protection equipment': Shield,
  'alcohol and drugs': Ban,
  'smoking': Cigarette,
  'internal training': BookOpen,
  'external training': Users,
  'fitness certificates': ShieldCheck,
  'safety compliance': ShieldCheck,
  'emergency response': AlertTriangle,
  'equipment safety': Wrench,
  'risk assessment': Search,
  'site inspections': Clipboard
};

const GridCardSection = ({ titleCard, cards, sectionTitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 3x3 Grid: 8 cards + 1 center title card
  // Positions: 0,1,2 | 3,CENTER,5 | 6,7,8
  const gridCards = cards.slice(0, 8);

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 reveal"
      style={{ 
        minHeight: '100vh',
        padding: '80px 60px'
      }}
    >
      {/* Floating Blue Glow Bubbles */}
      <div className="bubble-container">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Title */}
        {sectionTitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16"
            style={{
              color: '#1E4ED8',
              fontWeight: 700,
              letterSpacing: '0.5px'
            }}
          >
            {sectionTitle}
          </motion.h2>
        )}

        {/* 3x3 Grid Container with perspective */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[40px]"
          style={{ 
            perspective: '2000px',
            perspectiveOrigin: 'center center'
          }}
        >
          {/* Top Row: Cards 0, 1, 2 */}
          {gridCards.slice(0, 3).map((card, index) => (
            <GridCard 
              key={`card-${index}`} 
              card={card} 
              index={index} 
              isInView={isInView}
              delay={index * 0.08}
            />
          ))}

          {/* Middle Row: Card 3, CENTER TITLE, Card 4 */}
          <GridCard 
            card={gridCards[3]} 
            index={3} 
            isInView={isInView}
            delay={3 * 0.08}
          />
          
          <CenterTitleCard titleCard={titleCard} isInView={isInView} />
          
          <GridCard 
            card={gridCards[4]} 
            index={4} 
            isInView={isInView}
            delay={4 * 0.08}
          />

          {/* Bottom Row: Cards 5, 6, 7 */}
          {gridCards.slice(5, 8).map((card, index) => (
            <GridCard 
              key={`card-${index + 5}`} 
              card={card} 
              index={index + 5} 
              isInView={isInView}
              delay={(index + 5) * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Card Component with Flip Animation and Blue Glow Effect
const GridCard = ({ card, index, isInView, delay }) => {
  const IconComponent = iconMap[card.icon?.toLowerCase()] || Shield;
  const [glowPosition, setGlowPosition] = React.useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
      className="group"
    >
      <div 
        className="h-full flex flex-col justify-center items-center p-7 transition-all duration-400 glow-card hover:-translate-y-2"
        onMouseMove={handleMouseMove}
        style={{
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '24px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          minHeight: '190px',
          maxWidth: '260px',
          margin: '0 auto',
          width: '100%',
          overflow: 'hidden',
          '--x': `${glowPosition.x}%`,
          '--y': `${glowPosition.y}%`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 25px 60px rgba(30, 78, 216, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.08)';
        }}
      >
        {/* Blue Glow Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(30, 78, 216, 0.4), transparent 40%)`,
            filter: 'blur(50px)',
            transform: 'scale(1.3)',
            zIndex: 0
          }}
        />
        
        {/* Icon */}
        <div 
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 flex-shrink-0 relative z-10"
          style={{
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}
        >
          <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-gray-900 mb-2 text-center leading-tight relative z-10">
          {card.title}
        </h4>

        {/* Description or Bullets */}
        {card.description && (
          <p className="text-sm text-gray-700 text-center leading-relaxed relative z-10">
            {card.description}
          </p>
        )}

        {card.bullets && (
          <ul className="space-y-1.5 w-full relative z-10">
            {card.bullets.map((bullet, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

// Center Title Card Component with larger size and glow effect
const CenterTitleCard = ({ titleCard, isInView }) => {
  const [glowPosition, setGlowPosition] = React.useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.32 }}
      className="relative z-10 flex items-center justify-center group"
    >
      <div 
        className="flex flex-col justify-center items-center p-10 transition-all duration-400 glow-card hover:-translate-y-2"
        onMouseMove={handleMouseMove}
        style={{
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '24px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)',
          border: '2px solid rgba(59, 130, 246, 0.2)',
          minHeight: '220px',
          maxWidth: '420px',
          width: '100%',
          margin: '0 auto',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 25px 60px rgba(30, 78, 216, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.12)';
        }}
      >
        {/* Blue Glow Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(30, 78, 216, 0.5), transparent 40%)`,
            filter: 'blur(50px)',
            transform: 'scale(1.3)',
            zIndex: 0
          }}
        />
        
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center uppercase leading-tight relative z-10">
          {titleCard.title}
        </h3>
        <p className="text-base text-gray-700 text-center font-medium relative z-10">
          {titleCard.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default GridCardSection;
