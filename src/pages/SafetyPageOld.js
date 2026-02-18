import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '../components/Layout';
import MasonryBackground from '../components/MasonryBackground';
import SafetyHero from '../components/SafetyHero';
import InfinityAnimation from '../components/InfinityAnimation';
import ScrollStack from '../components/ScrollStack';
import CardSwap from '../components/CardSwap';
import {
  IncidentTrendChart,
  HazardWasteChart,
  IrrigationWaterChart,
  AEDChart,
  SolarPanelWaterChart
} from '../components/SafetyCharts';

const SafetyPage = () => {
  const [showInfinity, setShowInfinity] = useState(true);

  // Golden Rules of Safety Data
  const goldenRulesCards = [
    { title: 'Groundwork – Dig safely', description: 'Always verify underground utilities before excavation. Use proper shoring and protective systems for deep excavations.' },
    { title: 'Confined Spaces – Be sure that confined spaces can be entered safely', description: 'Test atmosphere, ensure proper ventilation, maintain constant communication, and have rescue procedures in place.' },
    { title: 'Working at Height – Work safely at height (>2.5 metres)', description: 'Use appropriate fall protection equipment, ensure secure platforms, and maintain three points of contact.' },
    { title: 'Hoisting and Lifting – Never walk under a suspended load', description: 'Establish exclusion zones, use certified equipment, and ensure proper load securing before lifting.' },
    { title: 'Road Safety – Drive safely', description: 'Observe speed limits, wear seatbelts, avoid distractions, and follow all traffic regulations in work zones.' },
    { title: 'Work Permit – Make sure you have a valid and complete work permit', description: 'Verify all safety requirements are met, obtain necessary approvals, and keep permits accessible during work.' },
    { title: 'Making Equipment Safe – Only work on equipment which has been isolated and rendered inoperative', description: 'Follow lockout/tagout procedures, verify energy isolation, and test equipment before starting work.' },
    { title: 'Personal Protection Equipment – Use the prescribed personal protection equipment (PPE)', description: 'Wear appropriate PPE for the task, ensure proper fit, and inspect equipment before each use.' },
    { title: 'Alcohol and Drugs – It is prohibited to work under influence of alcohol and drugs', description: 'Maintain a substance-free workplace to ensure safety and optimal performance.' },
    { title: 'Smoking – Do not smoke outside designated smoking areas', description: 'Prevent fire hazards by smoking only in designated areas away from flammable materials.' }
  ];

  // Employee Safety CardSwap Data
  const employeeSafetyCards = [
    { title: 'Basic Fire Fighting Training', images: [1, 2, 3] },
    { title: 'First Aid and Forklift Training', images: [1, 2] },
    { title: 'Knowledge Sharing Session - Lead / Lithium battery storage', images: [1, 2, 3] },
    { title: 'Safe Hydro Testing Area', images: [1] },
    { title: 'Periodic Mock Drills', images: [1, 2] }
  ];

  // Training Card Data
  const trainingCards = [
    {
      title: 'Internal Training',
      items: ['Induction training', 'Half-yearly HSEQ awareness', 'Emergency evacuation mock drills']
    },
    {
      title: 'External Training',
      items: ['EOT & Forklift training', 'Fire fighting', 'Basic First Aid', 'OHC medicals']
    },
    {
      title: 'Fitness Certificates',
      items: ['Lifting equipment certification', 'Dangerous goods permits', '24×7 fire system', 'AMC & LPG compliance']
    }
  ];

  return (
    <>
      {/* 1. Infinity Symbol Opening Animation */}
      {showInfinity && (
        <InfinityAnimation onComplete={() => setShowInfinity(false)} />
      )}

      {!showInfinity && (
        <>
          {/* Masonry Background */}
          <MasonryBackground images={[
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
            '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.53.05 AM.png',
          ]} />

          {/* 2. Hero / Home Section */}
          <Section className="relative z-10 min-h-screen flex items-center justify-center pt-32 pb-16">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-7xl md:text-8xl font-bold text-gray-800 mb-4">
                  SAFETY
                </h1>
                <h2 className="text-3xl md:text-4xl text-blue-600 mb-8">
                  Health, Safety & Environment
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Safety is the cornerstone of our operations, ensuring the well-being of every team member and the sustainability of our environment.
                </p>
                <div className="text-6xl md:text-8xl font-black text-gray-900 leading-tight" style={{ fontFamily: 'League Spartan, sans-serif' }}>
                  ADHERENCE TO SAFETY:<br />
                  <span className="gradient-text">DISCIPLINE</span>
                </div>
              </motion.div>
            </Container>
          </Section>

          {/* 3. PPE Interactive Construction Worker */}
          <SafetyHero />

          {/* 4. Compliance & Regulation Section */}
          <Section className="relative z-10 bg-white/90 backdrop-blur-sm py-20">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-12 text-center">
                  Compliance and Regulation
                </h2>
                <div className="max-w-4xl mx-auto">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-8 flex items-center justify-center border-2 border-blue-200">
                    <span className="text-blue-400 text-lg font-medium">Compliance Framework Image</span>
                  </div>
                  <p className="text-xl text-gray-700 text-center leading-relaxed">
                    Our Grade A Safety compliance framework ensures adherence to international regulations, proactive risk management, and continuous improvement across all operations.
                  </p>
                </div>
              </motion.div>
            </Container>
          </Section>

          {/* 5. Golden Rules of Safety - ScrollStack */}
          <Section className="relative z-10 py-20">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                  Golden Rules of Safety
                </h2>
                <p className="text-xl text-gray-600">
                  Scroll the stack to explore each rule
                </p>
              </div>
            </Container>
            <ScrollStack cards={goldenRulesCards} />
          </Section>

          {/* 6. Near Miss & Incident Tracking */}
          <Section className="relative z-10 bg-white/90 backdrop-blur-sm py-20">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
              >
                <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-2xl mb-8 flex items-center justify-center border-2 border-green-200">
                  <span className="text-green-600 text-lg font-medium">Excel-style Tracking Dashboard</span>
                </div>
                <p className="text-xl text-gray-700 text-center mb-8 leading-relaxed">
                  Tracking near misses and incidents enables early hazard identification, reduces risk exposure, and ensures a safer working environment for all employees.
                </p>
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                  <p className="text-2xl text-gray-800 text-center font-semibold">
                    (Number of injuries and illnesses × 200,000) ÷ Employee hours worked = <span className="text-blue-600">Incidence Rate</span>
                  </p>
                </div>
              </motion.div>
            </Container>
          </Section>

          {/* 7. Data Visualization Section */}
          <Section className="relative z-10 py-20">
            <Container>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-16 text-center">
                Safety Performance Metrics
              </h2>

              {/* Row 1: Incident Trend (Right) & Hazard Waste (Left) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <HazardWasteChart />
                <IncidentTrendChart />
              </div>

              {/* Row 2: Irrigation Water (Left) & AED (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <IrrigationWaterChart />
                <AEDChart />
              </div>

              {/* Row 3: Solar Panel Water (Full Width) */}
              <div className="mb-8">
                <SolarPanelWaterChart />
              </div>
            </Container>
          </Section>

          {/* 8. Training, Awareness & Competence */}
          <Section className="relative z-10 bg-white/90 backdrop-blur-sm py-20">
            <Container>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-16 text-center">
                Training, Awareness and Competence
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {trainingCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl p-8 border-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">{card.title}</h3>
                    <ul className="space-y-3">
                      {card.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </Container>
          </Section>

          {/* Alternative ScrollStack for Training Cards */}
          <div className="relative z-10">
            <ScrollStack cards={trainingCards.map(card => ({
              title: card.title,
              description: card.items.join(' • ')
            }))} />
          </div>

          {/* 9. Employee Safety - CardSwap */}
          <Section className="relative z-10 py-20">
            <Container>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-16 text-center">
                Employee Safety Programs
              </h2>
              <CardSwap cards={employeeSafetyCards} />
            </Container>
          </Section>

          {/* Final Section - Call to Action */}
          <Section className="relative z-10 bg-gradient-to-br from-blue-900 to-blue-950 py-24">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  Safety First, Always
                </h2>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                  Every team member plays a vital role in maintaining our safety culture. Together, we create an environment where everyone returns home safely.
                </p>
              </motion.div>
            </Container>
          </Section>
        </>
      )}
    </>
  );
};

export default SafetyPage;
