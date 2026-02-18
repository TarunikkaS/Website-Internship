import React, { useRef, useEffect, useState } from 'react';
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
  ShieldCheck
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
  'fitness certificates': ShieldCheck
};

const RadialCard = ({ card, index, total, delay, isCenter = false }) => {
  const Icon = card.icon ? iconMap[card.icon.toLowerCase()] : null;

  if (isCenter) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        style={{ perspective: '1200px' }}
      >
        <div 
          className="card-center"
          style={{
            width: '360px',
            height: '280px',
            backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)',
            borderRadius: '20px',
            transition: 'all .3s'
          }}
        >
          <div 
            className="card2-center"
            style={{
              width: '360px',
              height: '280px',
              backgroundColor: '#1a1a1a',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white'
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-3 uppercase">
              {card.title}
            </h3>
            <p className="text-sm md:text-base text-gray-300 text-center">
              {card.subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Calculate position in circle
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
  const radius = 420; // Distance from center
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        transformStyle: 'preserve-3d',
        perspective: '1200px'
      }}
    >
      <div 
        className="card hover:shadow-glow transition-all duration-300"
        style={{
          width: '190px',
          height: '254px',
          backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)',
          borderRadius: '20px',
          transition: 'all .3s'
        }}
      >
        <div 
          className="card2 hover:scale-98 transition-all duration-200"
          style={{
            width: '190px',
            height: '254px',
            backgroundColor: '#1a1a1a',
            borderRadius: '20px',
            padding: '16px',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Icon */}
          {Icon && (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
          )}

          {/* Title */}
          <h4 className="text-base font-bold text-center text-white leading-tight">
            {card.title}
          </h4>

          {/* Description or bullets */}
          {card.description ? (
            <p className="text-xs text-gray-300 text-center leading-relaxed">
              {card.description}
            </p>
          ) : card.bullets ? (
            <ul className="space-y-1 text-xs text-gray-300 w-full">
              {card.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-400 mr-1.5 text-xs">•</span>
                  <span className="leading-tight">{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

const RadialCardSection = ({ titleCard, cards, sectionTitle }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <div className="py-24 px-4">
      {/* Section Title */}
      {sectionTitle && (
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900">
            {sectionTitle}
          </h2>
        </div>
      )}

      {/* Radial Layout Container */}
      <div 
        ref={containerRef}
        className="relative mx-auto"
        style={{
          width: '100%',
          maxWidth: '1400px',
          height: '1100px',
          perspective: '1200px'
        }}
      >
        {/* Center Card */}
        <RadialCard card={titleCard} isCenter={true} />

        {/* Surrounding Cards */}
        {cards.map((card, index) => (
          <RadialCard
            key={index}
            card={card}
            index={index}
            total={cards.length}
            delay={0.3 + index * 0.1}
          />
        ))}
      </div>

      <style jsx>{`
        .card:hover {
          box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
        }
        .hover\\:scale-98:hover {
          transform: scale(0.98);
        }
        @media (max-width: 1024px) {
          /* Tablet: 2 rows layout */
        }
        @media (max-width: 640px) {
          /* Mobile: grid layout */
        }
      `}</style>
    </div>
  );
};

export default RadialCardSection;
