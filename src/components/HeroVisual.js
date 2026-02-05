import React from 'react';
import { Shield, Leaf, Users, HeartHandshake, Target } from 'lucide-react';

const HeroVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[480px] hidden lg:flex items-center justify-center">
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03]"></div>

      {/* Gradient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      {/* Rotating decorative ring - behind logo at reduced opacity */}
      <div className="absolute w-[28rem] h-[28rem] animate-spin-slow opacity-80">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#171d55" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#2a3a8c" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4D7CFF" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <circle 
            cx="100" 
            cy="100" 
            r="90" 
            fill="none" 
            stroke="url(#ringGradient)" 
            strokeWidth="2"
            strokeDasharray="10 5"
          />
        </svg>
      </div>

      {/* Inner static ring - behind logo at reduced opacity */}
      <div className="absolute w-80 h-80 border-2 border-accent/40 rounded-full opacity-80"></div>

      {/* Floating mini cards */}
      <div className="absolute top-4 right-12 animate-float">
        <FloatingCard icon={Shield} label="HSEQ" delay="0s" />
      </div>
      
      <div className="absolute top-20 left-4 animate-float-delayed">
        <FloatingCard icon={Leaf} label="Sustain" delay="0.5s" />
      </div>
      
      <div className="absolute bottom-24 right-4 animate-float">
        <FloatingCard icon={Users} label="Engage" delay="1s" />
      </div>
      
      <div className="absolute bottom-8 left-12 animate-float-delayed">
        <FloatingCard icon={HeartHandshake} label="Collab" delay="1.5s" />
      </div>
      
      <div className="absolute top-1/2 right-0 -translate-y-1/2 animate-float">
        <FloatingCard icon={Target} label="Excel" delay="2s" />
      </div>

      {/* Center - Al Shirawi Logo with soft bounce animation */}
      <div className="relative z-10 animate-bounce-soft">
        <img 
          src="/logo.png" 
          alt="Al Shirawi Equipment Co. Logo" 
          className="w-56 h-56 object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
};

const FloatingCard = ({ icon: Icon, label }) => {
  return (
    <div className="bg-card rounded-xl shadow-card border border-border p-3 flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <span className="text-xs font-medium text-foreground">{label}</span>
    </div>
  );
};

export default HeroVisual;