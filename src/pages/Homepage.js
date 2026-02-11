import React from 'react';
import { Shield, Leaf, Users, HeartHandshake, Target, Building2, Globe } from 'lucide-react';
import { Container, Section } from '../components/Layout';
import SectionLabel from '../components/SectionLabel';
import ValueCard from '../components/ValueCard';
import ScrollAnimatedCard from '../components/ScrollAnimatedCard';
import AnimatedCounter from '../components/AnimatedCounter';
import InteractiveASECO from '../components/InteractiveASECO';
import BlurText from '../components/BlurText';
import Antigravity from '../components/Antigravity';
import { useEffect } from 'react';

const Homepage = () => {
  // Scroll reveal animation
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const valuesData = [
    {
      letter: 'A',
      title: 'Adherence to HSEQ',
      description: 'Commitment to Health, Safety, Environment & Quality standards across all operations.',
      icon: Shield,
      featured: true,
      pills: [
        { label: 'Health', href: '/health' },
        { label: 'Safety', href: '/safety' },
        { label: 'Environment', href: '/environment' },
        { label: 'Quality', href: '/quality' },
      ],
    },
    {
      letter: 'S',
      title: 'Sustainability',
      description: 'Building a sustainable future through responsible practices and innovation.',
      icon: Leaf,
      href: '/sustainability',
    },
    {
      letter: 'E',
      title: 'Employee Excellence',
      description: 'Fostering engagement, education, and empowerment for our people.',
      icon: Users,
      pills: [
        { label: 'Education', href: '/education' },
        { label: 'Engagement', href: '/employee-engagement' },
        { label: 'Empowerment', href: '/empowerment' },
      ],
    },
    {
      letter: 'C',
      title: 'Collaboration',
      description: 'Strong partnerships with customers and suppliers driving mutual success.',
      icon: HeartHandshake,
      pills: [
        { label: 'Customers', href: '/collaboration/customers' },
        { label: 'Suppliers', href: '/collaboration/suppliers' },
      ],
    },
    {
      letter: 'O',
      title: 'Operational Excellence',
      description: 'Continuous improvement and efficiency in everything we do.',
      icon: Target,
      href: '/operational-excellence',
    },
  ];

  const stats = [
    { value: 50, label: 'Years Experience', icon: Building2, suffix: '' },
    { value: 1500, label: 'Employees', icon: Users, suffix: '+' },
    { value: 400, label: 'Clients', icon: HeartHandshake, suffix: '+' },
    { value: 6, label: 'Continents', icon: Globe, suffix: '', secondary: 'Global Reach' },
  ];

  return (
    <>
      {/* Antigravity Background */}
      <Antigravity autoAnimate={true} intensity={1} />

      {/* Background Video - Full page with transparency */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.5 }}
        >
          <source src="/bg_homepage.mp4" type="video/mp4" />
        </video>
        {/* Light blue gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(250, 250, 250, 0.75) 0%, rgba(200, 220, 255, 0.6) 50%, rgba(250, 250, 250, 0.75) 100%)' }}></div>
      </div>

      <div className="page">
      {/* Hero Section - Full viewport height */}
      <Section className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden pt-24 reveal-section">
        <Container className="flex flex-col items-center">
          
          {/* TOP: Company Name and Values */}
          <div className="text-center mb-8">
            {/* Line 1: Company Name */}
            <h1 
              className="font-headline font-bold leading-tight"
              style={{ 
                fontFamily: "'League Spartan', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#1E3A8A',
                marginBottom: '0.25rem'
              }}
            >
              <BlurText text="Al Shirawi Equipment and Co" delay={0} duration={350} />
            </h1>
            
            {/* Line 2: Values and Culture */}
            <p 
              className="font-semibold"
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                color: 'rgba(30, 58, 138, 0.85)',
              }}
            >
              <BlurText text="Values and Culture" delay={200} duration={350} />
            </p>
          </div>

          {/* CENTER: Rotating Circles with LOGO inside */}
          <div 
            className="relative mb-10"
            style={{
              animation: 'fadeIn 500ms ease-out 200ms',
              animationFillMode: 'both'
            }}
          >
            {/* Outer rotating dotted circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] animate-spin-slow"
                style={{ animationDuration: '60s' }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="95" 
                    fill="none" 
                    stroke="#1E3A8A" 
                    strokeWidth="2.5"
                    strokeDasharray="10 6"
                    opacity="0.7"
                  />
                </svg>
              </div>
            </div>

            {/* Inner rotating circle (opposite direction) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] lg:w-[330px] lg:h-[330px]"
                style={{ animation: 'spin 45s linear infinite reverse' }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="95" 
                    fill="none" 
                    stroke="#2563EB" 
                    strokeWidth="2"
                    strokeDasharray="6 10"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>

            {/* Floating Cards around the ring */}
            <div className="absolute -top-4 right-0 md:right-[-60px] lg:right-[-80px] animate-float z-20">
              <FloatingCard icon={Shield} label="HSEQ" />
            </div>
            <div className="absolute top-12 left-[-40px] md:left-[-80px] lg:left-[-100px] animate-float-delayed z-20">
              <FloatingCard icon={Leaf} label="Sustain" />
            </div>
            <div className="absolute top-1/2 right-[-50px] md:right-[-90px] lg:right-[-110px] -translate-y-1/2 animate-float z-20">
              <FloatingCard icon={Target} label="Excel" />
            </div>
            <div className="absolute bottom-20 right-[-30px] md:right-[-70px] lg:right-[-90px] animate-float-delayed z-20">
              <FloatingCard icon={Users} label="Engage" />
            </div>
            <div className="absolute bottom-4 left-[-20px] md:left-[-60px] lg:left-[-80px] animate-float z-20">
              <FloatingCard icon={HeartHandshake} label="Collab" />
            </div>

            {/* LOGO inside the rotating circles */}
            <div className="relative z-10 flex items-center justify-center w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]">
              <img 
                src="/logo.png" 
                alt="Al Shirawi Equipment Co. Logo" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
              />
            </div>
          </div>

          {/* BELOW LOGO: ASECO */}
          <div 
            className="text-center mb-6"
            style={{
              animation: 'fadeIn 600ms ease-out 400ms',
              animationFillMode: 'both'
            }}
          >
            <InteractiveASECO />
          </div>

          {/* Description under ASECO */}
          <p className="font-body text-lg md:text-xl lg:text-2xl font-semibold text-foreground/70 max-w-2xl text-center leading-relaxed">
            Discover the core principles that drive Al Shirawi Equipment forward. 
            Our commitment to ASECO values shapes every decision we make.
          </p>
        </Container>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full dot-pattern opacity-[0.02] pointer-events-none"></div>
        
        {/* Blue gradient that extends down */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(23, 29, 85, 0.03) 50%, rgba(42, 58, 140, 0.06) 100%)' }}></div>
      </Section>

      {/* Values Section */}
      <Section id="values" className="relative reveal-section" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(42, 58, 140, 0.06) 0%, rgba(23, 29, 85, 0.08) 30%, rgba(77, 124, 255, 0.06) 70%, rgba(42, 58, 140, 0.04) 100%)' }}>
        <Container className="relative" style={{ zIndex: 10 }}>
          <div className="text-center mb-12">
            <SectionLabel>Values Framework</SectionLabel>
            <h2 className="font-headline text-3xl md:text-4xl" style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}>
              Explore what <span className="gradient-text">ASECO</span> stands for
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" style={{ position: 'relative', zIndex: 20 }}>
            {valuesData.map((value, index) => (
              <ScrollAnimatedCard
                key={value.letter}
                index={index}
                featured={value.featured}
                className="flex"
              >
                <ValueCard
                  letter={value.letter}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  pills={value.pills}
                  href={value.href}
                  featured={value.featured}
                />
              </ScrollAnimatedCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Inverted Contrast Section */}
      <Section dark className="relative overflow-hidden reveal-section">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern-light opacity-[0.03] pointer-events-none"></div>
        
        {/* Gradient glow corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl"></div>

        <Container className="relative z-10">
          <div className="text-center mb-12">
            <SectionLabel className="text-white/60">
              Our Impact
            </SectionLabel>
            <h2 className="font-headline text-3xl md:text-4xl" style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}>
              Driving Excellence Every Day
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-4xl md:text-5xl font-headline gradient-text mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={800} />
                </div>
                <div className="text-white/60 text-sm font-medium">
                  {stat.label}
                </div>
                {stat.secondary && (
                  <div className="text-white/40 text-xs mt-1">
                    {stat.secondary}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section Placeholder */}
      <Section id="contact" className="bg-white relative z-10 reveal-section">
        <Container>
          <div className="text-center">
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="font-headline text-3xl md:text-4xl mb-4" style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}>
              Ready to learn more?
            </h2>
            <p className="text-foreground/70 max-w-md mx-auto mb-8">
              Discover how ASECO's values can drive success for your projects.
            </p>
            <a 
              href="mailto:info@aseco.ae" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-accent text-white font-medium shadow-glow hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Container>
      </Section>
      </div>
    </>
  );
};

// Floating Card Component
const FloatingCard = ({ icon: Icon, label }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span className="text-sm font-semibold text-gray-800">{label}</span>
    </div>
  );
};

export default Homepage;