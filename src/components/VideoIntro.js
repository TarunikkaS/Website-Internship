import React, { useState, useRef, useEffect, useCallback } from 'react';

const VideoIntro = ({ onComplete }) => {
  const [isEnding, setIsEnding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const videoRef = useRef(null);

  const triggerTransition = useCallback(() => {
    setIsEnding(true);
    sessionStorage.setItem('aseco-intro-seen', 'true');
    
    // Wait for zoom animation to complete
    setTimeout(() => {
      setIsComplete(true);
      onComplete();
    }, 1000);
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    triggerTransition();
  }, [triggerTransition]);

  useEffect(() => {
    // Check if intro has been shown in this session
    const hasSeenIntro = sessionStorage.getItem('aseco-intro-seen');
    if (hasSeenIntro) {
      setIsComplete(true);
      onComplete();
      return;
    }

    const video = videoRef.current;
    if (video) {
      video.play().catch(err => {
        // Autoplay was blocked, skip intro
        console.log('Video autoplay blocked, skipping intro');
        handleSkip();
      });
    }
  }, [onComplete, handleSkip]);

  const handleVideoEnd = () => {
    triggerTransition();
  };

  if (isComplete) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-all duration-1000 ease-in-out ${
        isEnding ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
      }`}
    >
      {/* Video Container */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src="/intro-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        Skip Intro →
      </button>

      {/* Progress indicator - optional visual cue */}
      <div className="absolute bottom-8 left-8 text-white/60 text-sm font-mono">
        ASECO
      </div>
    </div>
  );
};

export default VideoIntro;
