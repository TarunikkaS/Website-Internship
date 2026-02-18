import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container, Section } from '../components/Layout';
import { Leaf, Sun, Award, Users, TrendingUp, Target, CheckCircle, ArrowRight } from 'lucide-react';

const sustainabilityImages = {
  solar: '/ASSETS/sustainability/Solar-panel.png',
  treePlantation: [
    '/ASSETS/sustainability/tree1.png',
    '/ASSETS/sustainability/tree3.png',
    '/ASSETS/sustainability/tree2.png'
  ],
  cleanUAE: [
    '/ASSETS/sustainability/clean2.png',
    '/ASSETS/sustainability/clean1.png',
    '/ASSETS/sustainability/clean3.png'
  ],
  awards: [
    '/ASSETS/sustainability/csr award.png',
    '/ASSETS/sustainability/cdp.png'
  ],
  culture: [
    '/ASSETS/sustainability/sustaiableevent.png',
    '/ASSETS/sustainability/sustainable recog event.png',
    '/ASSETS/sustainability/art.png'
  ]
};

const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasAnimated]);

  return (
    <span ref={ref} className="text-5xl font-black" style={{ color: '#1E4ED8' }}>
      {prefix}{count}{suffix}
    </span>
  );
};

const CircularProgress = ({ percentage, label, size = 120 }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = hasAnimated ? circumference - (percentage / 100) * circumference : circumference;

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setHasAnimated(true), 100);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size/2} cy={size/2} r="45" stroke="#e5e7eb" strokeWidth="8" fill="none" />
        <circle 
          cx={size/2} 
          cy={size/2} 
          r="45" 
          stroke="#1E4ED8" 
          strokeWidth="8" 
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 2s ease-out' }}
        />
      </svg>
      <div className="absolute flex items-center justify-center" style={{ width: size, height: size }}>
        <span className="text-2xl font-bold" style={{ color: '#1E4ED8' }}>{percentage}%</span>
      </div>
      <p className="text-sm text-gray-600 mt-2 text-center font-medium">{label}</p>
    </div>
  );
};

const SustainabilityPage = () => {
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
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* SECTION 0 - Background Layer */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/ASSETS/asset/drone_shot.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="relative z-10 page">
      {/* SECTION 1 - HERO */}
      <Section className="min-h-screen flex items-center justify-center overflow-hidden">
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto pt-32 pb-16"
          >
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight text-gray-900 uppercase tracking-tight" style={{ fontFamily: 'League Spartan, system-ui, sans-serif' }}>
              SUSTAINABILITY
            </h1>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight uppercase tracking-tight" style={{ fontFamily: 'League Spartan, system-ui, sans-serif', color: '#1E4ED8' }}>
              ENGINEERING A CARBON-NEUTRAL FUTURE
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium tracking-wide">
              At Al Shirawi Equipment Co., sustainability is not an initiative — it is engineered into every process, every plant, and every product.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* SECTION 2 - OUR VISION */}
      <Section id="vision" className="py-24 bg-white/90 backdrop-blur-sm reveal-section">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E4ED8, #3B82F6)' }}>
                  <Leaf className="w-32 h-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl">
                  <Award className="w-12 h-12" style={{ color: '#1E4ED8' }} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E4ED8' }}>Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                To lead the region in carbon-neutral manufacturing by integrating renewable energy, efficient systems, and responsible governance into every operation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="text-center">
                  <AnimatedCounter end={95} suffix="%" />
                  <p className="text-gray-600 font-medium mt-2">Plant Energy from Solar</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={100} suffix="%" />
                  <p className="text-gray-600 font-medium mt-2">DIC Plant Solar Powered</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={5000} suffix=" MW/yr" />
                  <p className="text-gray-600 font-medium mt-2">Clean Energy Production</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={3000} suffix="+ Tons" />
                  <p className="text-gray-600 font-medium mt-2">CO₂ Eliminated Annually</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 - SUSTAINABILITY FRAMEWORK */}
      <Section className="py-24 reveal-section" style={{ background: 'linear-gradient(to bottom, #f9fafb, #ffffff)' }}>
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
            style={{ color: '#1E4ED8' }}
          >
            Sustainability Framework
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Environmental',
                items: [
                  'Solar-powered manufacturing',
                  'ISO 50001 implementation',
                  'Energy audits completed',
                  'CDP Climate Disclosure'
                ]
              },
              {
                icon: Users,
                title: 'Social',
                items: [
                  'Employee engagement',
                  'CSR programs',
                  'Clean UAE drives',
                  'Tree plantation campaigns'
                ]
              },
              {
                icon: Target,
                title: 'Governance',
                items: [
                  'CDP Disclosure 2024',
                  'Water Security Score B-',
                  'Transparent governance',
                  'Awards & certifications'
                ]
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ border: '2px solid #1E4ED820' }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #1E4ED8, #3B82F6)' }}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1E4ED8' }}>{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1E4ED8' }} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 4 - SOLAR & ENERGY */}
      <Section className="py-32 relative overflow-hidden reveal-section">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 opacity-90" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 text-center lg:text-left text-white max-w-4xl mx-auto lg:mx-0"
            >
              <Sun className="w-20 h-20 mx-auto lg:mx-0 mb-8" style={{ color: '#93C5FD' }} />
              <h2 className="text-6xl font-bold mb-8">Powered by the Sun</h2>
              <p className="text-2xl leading-relaxed mb-8">
                Our Al Quoz and DIC plants operate primarily on solar energy, significantly reducing carbon emissions and advancing the UAE's clean energy goals.
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <p className="text-xl font-semibold" style={{ color: '#93C5FD' }}>
                  Equivalent to planting 10,000+ trees annually
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg min-h-[320px] lg:min-h-[400px] flex items-center justify-center bg-white/5">
                <img
                  src={sustainabilityImages.solar}
                  alt="Solar rooftop and plant"
                  className="w-full h-full min-h-[320px] lg:min-h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 - ISO 50001 ROADMAP */}
      <Section className="py-24 bg-white reveal-section">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-8"
            style={{ color: '#1E4ED8' }}
          >
            Energy Efficiency & ISO 50001 Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-16"
          >
            Following a comprehensive energy audit, we are implementing ISO 50001 Energy Management Systems to continuously improve energy performance, reduce operational emissions, and enhance sustainability governance.
          </motion.p>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2" style={{ background: 'linear-gradient(to right, #1E4ED8, #3B82F6)' }} />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { icon: CheckCircle, title: 'Energy Audit Completed' },
                { icon: TrendingUp, title: 'Findings & Optimization' },
                { icon: Target, title: 'ISO 50001 Implementation' },
                { icon: Award, title: 'Continuous Monitoring' }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10" style={{ backgroundColor: '#1E4ED8' }}>
                    <step.icon className="w-10 h-10" style={{ color: '#93C5FD' }} />
                  </div>
                  <p className="font-bold text-lg" style={{ color: '#1E4ED8' }}>{step.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 - CSR & COMMUNITY IMPACT */}
      <Section className="py-24 reveal-section" style={{ background: 'linear-gradient(to bottom, #ffffff, #f9fafb)' }}>
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
            style={{ color: '#1E4ED8' }}
          >
            Community. Climate. Commitment.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
              style={{ border: '3px solid transparent', backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #1E4ED8, #3B82F6)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}
            >
              <Leaf className="w-12 h-12 mb-4" style={{ color: '#1E4ED8' }} />
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#1E4ED8' }}>Tree Plantation Drive</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Supporting Emirates Environmental Group through active plantation programs.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {sustainabilityImages.treePlantation.map((src, i) => (
                  <div key={i} className="rounded-xl aspect-square overflow-hidden border-2 border-gray-200 shadow-sm flex items-center justify-center bg-gray-50">
                    <img src={src} alt={`Tree plantation ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
              style={{ border: '3px solid transparent', backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #1E4ED8, #3B82F6)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}
            >
              <Users className="w-12 h-12 mb-4" style={{ color: '#1E4ED8' }} />
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#1E4ED8' }}>Clean UAE Campaign</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Employees volunteering to shape the environmental future of the UAE.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {sustainabilityImages.cleanUAE.map((src, i) => (
                  <div key={i} className="rounded-xl aspect-square overflow-hidden border-2 border-gray-200 shadow-sm flex items-center justify-center bg-gray-50">
                    <img src={src} alt={`Clean UAE campaign ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 - CDP & RECOGNITION */}
      <Section className="py-24 bg-white reveal-section">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
            style={{ color: '#1E4ED8' }}
          >
            Global Recognition & ESG Excellence
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'CDP Climate Score', value: 'C' },
              { label: 'Water Security Score', value: 'B-' },
              { label: 'Global ESG Gold', value: '2025' },
              { label: 'Arabia CSR Awards', value: '1st' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #1E4ED8, #3B82F6)' }}
              >
                <Award className="w-12 h-12 mx-auto mb-3 text-white" />
                <p className="text-3xl font-black text-white mb-2">{badge.value}</p>
                <p className="text-sm text-white/90 font-medium">{badge.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mt-16 mb-8 text-center"
            style={{ color: '#1E4ED8' }}
          >
            Awards Gallery
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {sustainabilityImages.awards.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-md bg-gray-50 aspect-[4/3] flex items-center justify-center"
              >
                <img src={src} alt={`Award ${i + 1}`} className="w-full h-full object-contain p-2" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 8 - IMPACT DASHBOARD */}
      <Section className="py-24 reveal-section" style={{ background: 'linear-gradient(to bottom, #f9fafb, #ffffff)' }}>
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
            style={{ color: '#1E4ED8' }}
          >
            Impact Dashboard
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 justify-items-center">
            <CircularProgress percentage={95} label="Solar Coverage" />
            <CircularProgress percentage={85} label="3000+ Tons CO₂ Reduced" />
            <CircularProgress percentage={100} label="5000 MW/Yr Energy" />
            <CircularProgress percentage={75} label="25+ Trees Planted" />
            <CircularProgress percentage={90} label="5+ ESG Awards" />
          </div>
        </Container>
      </Section>

      {/* SECTION 9 - SUSTAINABILITY CULTURE */}
      <Section className="py-24 bg-white reveal-section">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-8"
            style={{ color: '#1E4ED8' }}
          >
            Sustainability Culture in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-16"
          >
            Beyond operations, we embed environmental consciousness into our corporate culture through exhibitions, awareness programs, and innovation awards.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityImages.culture.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-md bg-gray-50 aspect-video min-h-[200px] flex items-center justify-center"
              >
                <img src={src} alt={`Sustainability culture ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 10 - FINAL CTA */}
      <Section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1E4ED8, #3B82F6)' }} />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              Building Reliable Engineering Solutions for a Sustainable Tomorrow.
            </h2>
            
            <div className="flex justify-center">
              <button className="px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 bg-transparent border-2 border-white text-white hover:bg-white/10 flex items-center gap-2">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </Container>
      </Section>
      </div>
    </>
  );
};

export default SustainabilityPage;
