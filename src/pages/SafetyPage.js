import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '../components/Layout';
import MasonryBackground from '../components/MasonryBackground';
import SafetyHero from '../components/SafetyHero';
import GridCardSection from '../components/GridCardSection';
import CardSwap from '../components/CardSwap';
import ImageBox from '../components/ImageBox';
import {
  IncidentTrendChart,
  HazardWasteChart,
  IrrigationWaterChart,
  AEDChart,
  SolarPanelWaterChart
} from '../components/SafetyCharts';
import { Shield } from 'lucide-react';

const SafetyPageComplete = () => {
  // Scroll reveal animation
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const masonryImages = [
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.51.19 AM.png',
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.07 AM copy.png',
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.07 AM copy 2.png',
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.07 AM copy 3.png',
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.14 AM.png',
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.14 AM copy.png',
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.19 AM.png',
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.24 AM.png',
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.24 AM copy.png',
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.53 AM.png',
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.53.05 AM.png'
  ];

  // Golden Rules Data
  const goldenRulesTitleCard = {
    title: 'Golden Rules of Safety',
    subtitle: 'Scroll to reveal each rule'
  };

  const goldenRulesCards = [
    {
      title: 'Groundwork',
      description: 'Dig safely',
      icon: 'groundwork'
    },
    {
      title: 'Confined Spaces',
      description: 'Be sure that confined spaces can be entered safely',
      icon: 'confined spaces'
    },
    {
      title: 'Working at Height',
      description: 'Work safely at height (> 2.5 metres)',
      icon: 'working at height'
    },
    {
      title: 'Hoisting and Lifting',
      description: 'Never walk under a suspended load',
      icon: 'hoisting and lifting'
    },
    {
      title: 'Road Safety',
      description: 'Drive safely',
      icon: 'road safety'
    },
    {
      title: 'Work Permit',
      description: 'Make sure you have a valid and complete work permit',
      icon: 'work permit'
    },
    {
      title: 'Making Equipment Safe',
      description: 'Only work on equipment which has been isolated',
      icon: 'making equipment safe'
    },
    {
      title: 'Personal Protection Equipment',
      description: 'Use the prescribed PPE',
      icon: 'personal protection equipment'
    }
  ];

  // Training Cards Data
  const trainingTitleCard = {
    title: 'Training, Awareness and Competence',
    subtitle: 'Building capability through structured training and compliance'
  };

  const trainingCards = [
    {
      title: 'Internal Training',
      bullets: [
        'Induction training',
        'Half-yearly HSEQ awareness',
        'Emergency evacuation mock drills'
      ],
      icon: 'internal training'
    },
    {
      title: 'External Training',
      bullets: [
        'EOT & Forklift training',
        'Fire fighting',
        'Basic First Aid',
        'OHC medicals'
      ],
      icon: 'external training'
    },
    {
      title: 'Fitness Certificates',
      bullets: [
        'Lifting equipment certification',
        'Dangerous goods permits',
        '24×7 fire system',
        'AMC & LPG compliance'
      ],
      icon: 'fitness certificates'
    },
    {
      title: 'Safety Compliance',
      description: 'Ensuring adherence to all safety regulations',
      icon: 'safety compliance'
    },
    {
      title: 'Emergency Response',
      description: 'Rapid response protocols and procedures',
      icon: 'emergency response'
    },
    {
      title: 'Equipment Safety',
      description: 'Regular maintenance and safety checks',
      icon: 'equipment safety'
    },
    {
      title: 'Risk Assessment',
      description: 'Systematic identification and mitigation',
      icon: 'risk assessment'
    },
    {
      title: 'Site Inspections',
      description: 'Regular safety audits and reviews',
      icon: 'site inspections'
    }
  ];

  // Employee Safety Cards
  const employeeSafetyCards = [
    {
      title: 'BASIC FIRE FIGHTING TRAINING',
      subtitle: 'Hands-on drills and response readiness',
      images: [
        { src: '/ASSETS/safety%20webpage/FF1.png', alt: 'Fire Fighting Training 1', orientation: 'horizontal' },
        { src: '/ASSETS/safety%20webpage/FF2.png', alt: 'Fire Fighting Training 2', orientation: 'horizontal' },
        { src: '/ASSETS/safety%20webpage/FF3.png', alt: 'Fire Fighting Training 3', orientation: 'horizontal' }
      ]
    },
    {
      title: 'FIRST AID AND FORKLIFT TRAINING',
      subtitle: 'Certified training to reduce on-site risk',
      images: [
        { src: '/ASSETS/safety%20webpage/FIRST_AID.png', alt: 'First Aid Training', orientation: 'horizontal' },
        { src: '/ASSETS/safety%20webpage/forklift.png', alt: 'Forklift Training', orientation: 'horizontal' }
      ]
    },
    {
      title: 'KNOWLEDGE SHARING SESSION',
      subtitle: 'Lead/Lithium TTE storage handling and best practices',
      images: [
        { src: '/ASSETS/safety%20webpage/knowledg1.png', alt: 'Knowledge Sharing Session 1', orientation: 'horizontal' },
        { src: '/ASSETS/safety%20webpage/knowledg2.png', alt: 'Knowledge Sharing Session 2', orientation: 'horizontal' },
        { src: '/ASSETS/safety%20webpage/knowledg3.png', alt: 'Knowledge Sharing Session 3', orientation: 'horizontal' }
      ]
    },
    {
      title: 'SAFE HYDRO TESTING AREA',
      subtitle: 'Controlled zones and clear safety procedures',
      images: [
        { src: '/ASSETS/safety%20webpage/safe_hydro.png', alt: 'Safe Hydro Testing Area', orientation: 'vertical' }
      ]
    },
    {
      title: 'PERIODIC MOCK DRILLS',
      subtitle: 'Evacuation and emergency preparedness exercises',
      images: [
        { src: '/ASSETS/safety%20webpage/mockdrill1.png', alt: 'Mock Drill 1', orientation: 'horizontal' },
        { src: '/ASSETS/safety%20webpage/mockdrill2.png', alt: 'Mock Drill 2', orientation: 'horizontal' }
      ]
    }
  ];

  return (
    <>
      {/* SECTION 0 - Background Layer */}
      <div className="fixed inset-0 z-0">
        <MasonryBackground images={masonryImages} />
        <div className="absolute inset-0 bg-white/55" />
      </div>

      <div className="relative z-10 page">
          {/* SECTION 1 - Safety Hero with proper spacing from navbar */}
          <Section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 reveal-section">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 mt-8"
              >
                <div className="text-7xl md:text-8xl font-black text-gray-900 leading-tight uppercase tracking-tight mb-6" style={{ fontFamily: 'League Spartan, system-ui, sans-serif' }}>
                  SAFETY
                </div>
                <p className="text-2xl md:text-3xl text-gray-700 font-semibold tracking-wide">
                  Health, Safety & Environment
                </p>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-8">
                  Safety is the cornerstone of our operations, ensuring the well-being of every team member and the sustainability of our environment.
                </p>
              </motion.div>
            </Container>

            {/* Construction Worker with PPE Interactive */}
            <div className="w-full">
              <SafetyHero />
            </div>
          </Section>

          {/* SECTION 3 - Compliance and Regulation */}
          <Section className="py-24 bg-white/90 backdrop-blur-sm reveal-section reveal">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto text-center"
              >
                <h2 className="text-6xl md:text-7xl font-bold mb-12" style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}>
                  Compliance and Regulation
                </h2>
                
                {/* Grade A Certificate Image */}
                <div className="max-w-2xl mx-auto mb-10">
                  <ImageBox
                    src="/ASSETS/safety%20webpage/GRADE%20A.png"
                    alt="Grade A Safety Certificate"
                    orientation="vertical"
                  />
                </div>

                <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Our Grade A Safety compliance reflects strict adherence to regulatory standards, continuous audits, and proactive risk management—ensuring every operation meets the highest safety benchmarks.
                </p>
              </motion.div>
            </Container>
          </Section>

          {/* SECTION 4 - Golden Rules of Safety (GridCardSection) */}
          <Section>
            <GridCardSection 
              titleCard={goldenRulesTitleCard}
              cards={goldenRulesCards}
              sectionTitle="Golden Rules of Safety"
            />
          </Section>

          {/* SECTION 5 - Near Miss & Accident Tracking */}
          <Section className="py-24 bg-white/90 backdrop-blur-sm reveal-section reveal">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <h2 className="text-6xl md:text-7xl font-bold mb-12 text-center" style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}>
                  Near Miss & Accident Tracking
                </h2>

                <p className="text-2xl text-gray-700 text-center mb-12 leading-relaxed max-w-4xl mx-auto">
                  Recording near-misses and incidents helps us identify hazards early, improve processes, and protect every coworker through preventive action.
                </p>

                {/* Near Miss Chart Image */}
                <div className="mb-10">
                  <ImageBox
                    src="/ASSETS/safety%20webpage/NEAR_MISS.png"
                    alt="Near Miss and Accidents Chart"
                    orientation="horizontal"
                  />
                </div>

                {/* Formula Box */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 border-4 border-blue-200 shadow-lg">
                  <p className="text-3xl text-gray-900 text-center font-semibold leading-relaxed">
                    (Number of injuries and illnesses × 200,000) / Employee hours worked = <span className="text-blue-600 font-bold">Incidence rate</span>
                  </p>
                </div>
              </motion.div>
            </Container>
          </Section>

          {/* SECTION 6 - KPI Graphs */}
          <Section className="py-24 reveal-section">
            <Container>
              <h2 className="text-6xl md:text-7xl font-bold mb-20 text-center" style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}>
                Safety Performance Metrics
              </h2>

              {/* Row 1: Hazard Waste (Left) + Incident Trend (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <HazardWasteChart />
                <IncidentTrendChart />
              </div>

              {/* Row 2: Irrigation Water (Left) + AED (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <IrrigationWaterChart />
                <AEDChart />
              </div>

              {/* Row 3: Solar Panel Water (Full Width) */}
              <div className="mb-10">
                <SolarPanelWaterChart />
              </div>
            </Container>
          </Section>

          {/* SECTION 7 - Training, Awareness and Competence (GridCardSection) */}
          <Section>
            <GridCardSection 
              titleCard={trainingTitleCard}
              cards={trainingCards}
              sectionTitle="Training, Awareness and Competence"
            />
          </Section>

          {/* SECTION 8 - Employee Safety (CardSwap) */}
          <Section className="py-24 reveal-section reveal">
            <Container>
              <h2 className="text-6xl md:text-7xl font-bold mb-8 text-center" style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}>
                Employee Safety Programs
              </h2>
              <p className="text-2xl text-gray-600 text-center mb-16">
                Hover to pause the cards
              </p>
              <CardSwap cards={employeeSafetyCards} />
            </Container>
          </Section>

          {/* Final CTA Section */}
          <Section className="py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center text-white max-w-5xl mx-auto"
              >
                <h2 className="text-6xl md:text-7xl font-bold mb-8">
                  Safety First, Always
                </h2>
                <p className="text-2xl md:text-3xl leading-relaxed">
                  Every team member plays a vital role in maintaining our safety culture. Together, we create an environment where everyone returns home safely.
                </p>
              </motion.div>
            </Container>
          </Section>
        </div>
    </>
  );
};

export default SafetyPageComplete;
