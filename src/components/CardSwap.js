import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageBox from './ImageBox';

const CardSwap = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused && !isPressed) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isPressed, cards.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="bg-white rounded-3xl shadow-2xl p-12 cursor-pointer border-4 border-blue-500"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{cards[currentIndex].title}</h3>
          {cards[currentIndex].subtitle && (
            <p className="text-xl text-gray-600 mb-10">{cards[currentIndex].subtitle}</p>
          )}
          <div className={`grid grid-cols-1 ${cards[currentIndex].images.length === 1 ? 'md:grid-cols-1' : cards[currentIndex].images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6 items-stretch`}>
            {cards[currentIndex].images.map((img, idx) => (
              <ImageBox
                key={idx}
                src={img.src}
                alt={img.alt}
                orientation={img.orientation || "horizontal"}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-4 mt-10">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-600 w-12' : 'bg-gray-300 w-4'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSwap;
