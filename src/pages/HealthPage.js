import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '../components/Layout';
import MasonryBackground from '../components/MasonryBackground';
import { Heart, Activity, Users, Award, CheckCircle } from 'lucide-react';

const HealthPage = () => {
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

  return (
    <>
      {/* SECTION 0 - Background Layer */}
      <div className="fixed inset-0 z-0">
        <MasonryBackground images={masonryImages} />
        <div className="absolute inset-0 bg-white/55" />
      </div>

      <div className="relative z-10 page">
        {/* SECTION 1 - Hero Section */}
        <Section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 reveal-section">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 mt-8"
            >
              <div className="text-6xl md:text-7xl font-black text-gray-900 leading-tight uppercase tracking-tight mb-6" style={{ fontFamily: 'League Spartan, system-ui, sans-serif' }}>
                EMPLOYEE HEALTH
              </div>
              <div className="text-5xl md:text-6xl font-black leading-tight uppercase tracking-tight mb-8" style={{ fontFamily: 'League Spartan, system-ui, sans-serif', color: '#1E4ED8' }}>
                WELLNESS INITIATIVES
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl text-gray-700 font-medium tracking-wide max-w-4xl mx-auto"
              >
                Supporting the physical and mental well-being of our workforce through comprehensive health programs and preventive care initiatives.
              </motion.p>
            </motion.div>
          </Container>
        </Section>

        {/* SECTION 2 - Medical Camps & Screenings */}
        <Section className="py-24 bg-white/90 backdrop-blur-sm reveal-section reveal">
          <Container>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center"
              style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}
            >
              Medical Camps & Screenings
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side: Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Comprehensive on-site health services ensuring proactive wellness management and early detection for all employees and their families.
                </p>
                
                <div className="space-y-4">
                  {[
                    'General health screenings',
                    'Vision & optical checks',
                    'Nutrition consultation',
                    'Preventive medical checkups'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-lg text-gray-800 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right side: 2x2 Image Grid */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Heart, label: 'Health Checkup' },
                  { icon: Activity, label: 'Vital Signs' },
                  { icon: Users, label: 'Consultation' },
                  { icon: Award, label: 'Preventive Care' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                      <div className="text-center p-6">
                        <item.icon className="w-16 h-16 text-blue-600 mx-auto mb-3" />
                        <span className="text-blue-800 font-semibold text-sm">{item.label}</span>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* SECTION 3 - Dubai Run / Employee Participation */}
        <Section className="py-24 reveal-section reveal">
          <Container>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center"
              style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}
            >
              Dubai Run & Employee Participation
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Large hero image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Activity className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                    <span className="text-blue-700 text-2xl font-bold">Dubai Run 2025</span>
                    <p className="text-blue-600 mt-2">Team ASECO in Action</p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Stacked smaller images */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Users, label: 'Team Spirit', desc: 'United in fitness' },
                  { icon: Award, label: '30x30 Challenge', desc: '30 minutes, 30 days' },
                  { icon: Heart, label: 'Wellness Goals', desc: 'Building healthy habits' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-blue-100"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{item.label}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-blue-100 mt-8"
            >
              <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Our team embraced city-wide fitness initiatives like Dubai Run 2025 and the 30x30 Challenge, promoting teamwork, community spirit, and daily wellness activities that build healthier habits and stronger bonds.
              </p>
            </motion.div>
          </Container>
        </Section>

        {/* SECTION 4 - Fitness Challenge Gallery */}
        <Section className="py-24 bg-white/90 backdrop-blur-sm reveal-section reveal">
          <Container>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center"
              style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}
            >
              Fitness Challenge Gallery
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Stretching Session',
                'Consultation Booth',
                'Fitness Demo',
                'Team Exercise',
                'Wellness Workshop',
                'Health Assessment'
              ].map((label, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                    <span className="text-blue-700 font-semibold text-lg">{label}</span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* SECTION 5 - Closing Wellness Statement */}
        <Section className="py-32 relative overflow-hidden reveal-section reveal">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center text-white max-w-5xl mx-auto"
            >
              <h2 className="text-6xl md:text-7xl font-bold mb-8">
                Health is a Family Affair
              </h2>
              <p className="text-2xl md:text-3xl leading-relaxed">
                Our wellness programs welcome employees and their loved ones, building stronger, healthier communities together through comprehensive care and preventive initiatives.
              </p>
            </motion.div>
          </Container>
        </Section>
      </div>
    </>
  );
};

export default HealthPage;
