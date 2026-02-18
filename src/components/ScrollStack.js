import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  ShieldCheck
} from 'lucide-react';

// Icon mapping for each rule
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
  'fitness certificates': ShieldCheck
};

const StackCard = ({ card, index, totalCards, scrollYProgress, isTitleCard }) => {
  const start = index / totalCards;
  const end = (index + 1) / totalCards;
  
  // Scale animation - only active card is at full scale
  const scale = useTransform(
    scrollYProgress,
    [start - 0.15, start - 0.05, start, end, end + 0.05, end + 0.15],
    [0.88, 0.92, 1, 1, 0.92, 0.88]
  );
  
  // Depth simulation with Y translate
  const y = useTransform(
    scrollYProgress,
    [start - 0.1, start, end, end + 0.1],
    [40, 0, 0, -40]
  );
  
  // Opacity - only front card is fully opaque
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.15, start - 0.05, start, end, end + 0.05, end + 0.15],
    [0, 0.4, 1, 1, 0.4, 0]
  );

  // Get icon component
  const IconComponent = card.icon ? iconMap[card.icon.toLowerCase()] : null;

  return (
    <motion.div
      style={{
        scale,
        y,
        opacity,
        zIndex: 100 - Math.abs((scrollYProgress.get() * totalCards) - index)
      }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      <div className="bg-white rounded-[36px] shadow-2xl w-full max-w-[980px] border border-gray-200 overflow-hidden"
        style={{ 
          minHeight: isTitleCard ? '340px' : '400px',
          maxHeight: '420px'
        }}
      >
        <div className="p-12 md:p-16 flex flex-col items-center justify-center h-full">
          {/* Logo - Only for content cards */}
          {!isTitleCard && IconComponent && (
            <div className="mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                <IconComponent className="w-11 h-11 text-white" strokeWidth={2.5} />
              </div>
            </div>
          )}

          {/* Title */}
          <h3 className={`font-bold text-gray-900 text-center mb-3 ${
            isTitleCard ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'
          }`}>
            {card.title}
          </h3>

          {/* Description */}
          {card.description && (
            <p className={`text-gray-700 text-center leading-relaxed max-w-3xl ${
              isTitleCard ? 'text-xl md:text-2xl' : 'text-lg md:text-xl font-medium'
            }`}>
              {card.description}
            </p>
          )}

          {/* Bullet points for training cards */}
          {card.bullets && (
            <ul className="space-y-2 text-left max-w-2xl mx-auto mt-2">
              {card.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start text-gray-800 text-base md:text-lg">
                  <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ScrollStack = ({ cards, title, subtitle }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate height based on number of cards
  const stackHeight = `${cards.length * 120}vh`;

  return (
    <div className="py-24">
      {/* Static Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-500">
            {subtitle}
          </p>
        )}
      </div>

      {/* Scrollable Card Stack */}
      <div ref={containerRef} style={{ height: stackHeight }} className="relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden py-8">
          <div className="relative w-full h-full max-h-[500px]">
            {cards.map((card, index) => (
              <StackCard
                key={index}
                card={card}
                index={index}
                totalCards={cards.length}
                scrollYProgress={scrollYProgress}
                isTitleCard={card.isTitleCard}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
