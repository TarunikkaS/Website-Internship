import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InfinityAnimation = ({ onComplete }) => {
  const [showZoom, setShowZoom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowZoom(true);
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!showZoom ? (
        <motion.div
          key="infinity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 2.5 }}
          transition={{ exit: { duration: 1 } }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-[1400px] h-[700px]">
            {/* Perfect Infinity Symbol SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid meet">
              {/* Infinity Path - Perfect smooth curve */}
              <motion.path
                d="M 350,350 Q 350,200 250,200 Q 150,200 150,350 Q 150,500 250,500 Q 350,500 350,350 M 350,350 Q 350,200 450,200 Q 700,200 950,350 Q 1150,500 1250,500 Q 1250,350 1250,350 Q 1250,200 1150,200 Q 1050,200 1050,350 Q 1050,500 1150,500 Q 1250,500 1250,350"
                fill="none"
                stroke="#7FB3FF"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>

            {/* LEFT LOOP - SAFETY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="absolute left-[250px] top-[350px] transform -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <div className="text-white text-6xl font-bold tracking-[0.1em]">SAFETY</div>
            </motion.div>

            {/* RIGHT LOOP - CULTURE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="absolute left-[1150px] top-[350px] transform -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <div className="text-white text-6xl font-bold tracking-[0.1em]">CULTURE</div>
            </motion.div>

            {/* OWNERSHIP - Top Left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="absolute left-[220px] top-[180px] text-white text-base font-semibold tracking-[0.15em] uppercase"
            >
              OWNERSHIP
            </motion.div>

            {/* COMMUNICATION - Top Center */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.5 }}
              className="absolute left-[510px] top-[220px] text-white text-base font-semibold tracking-[0.15em] uppercase"
            >
              COMMUNICATION
            </motion.div>

            {/* RULES & REG - Left Side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.5 }}
              className="absolute left-[80px] top-[310px] text-white text-base font-semibold tracking-[0.15em] uppercase"
            >
              RULES & REG
            </motion.div>

            {/* VALUES - Bottom Left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="absolute left-[160px] bottom-[160px] text-white text-base font-semibold tracking-[0.15em] uppercase"
            >
              VALUES
            </motion.div>

            {/* SELF-VERIFICATION - Bottom Center */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.5 }}
              className="absolute left-[680px] bottom-[200px] text-white text-sm font-medium tracking-[0.15em] uppercase"
            >
              SELF-VERIFICATION
            </motion.div>

            {/* PROCEDURES - Bottom Right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.5 }}
              className="absolute right-[290px] bottom-[160px] text-white text-base font-semibold tracking-[0.15em] uppercase"
            >
              PROCEDURES
            </motion.div>

            {/* LEADERSHIP - Right Side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.5 }}
              className="absolute right-[80px] top-[310px] text-white text-base font-semibold tracking-[0.15em] uppercase"
            >
              LEADERSHIP
            </motion.div>

            {/* RECOGNITION - Bottom Far Right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.5 }}
              className="absolute right-[50px] bottom-[80px] text-white text-base font-semibold tracking-[0.15em] uppercase"
            >
              RECOGNITION
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default InfinityAnimation;
