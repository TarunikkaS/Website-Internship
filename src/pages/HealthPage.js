import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '../components/Layout';
import MasonryBackground from '../components/MasonryBackground';
import { CheckCircle } from 'lucide-react';

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
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center"
              style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}
            >
              Medical Camps & Screenings
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left side: Content */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
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
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-lg text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right side: 2x2 Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  '/ASSETS/Health webpage/medicalcamp1.png',
                  '/ASSETS/Health webpage/medicalcamp2.png',
                  '/ASSETS/Health webpage/medicalcamp3.png',
                  '/ASSETS/Health webpage/medicalcamp4.png'
                ].map((imageSrc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotateY: -15 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="health-image-wrapper"
                    style={{ height: '260px', perspective: '1000px' }}
                  >
                    <img
                      src={imageSrc}
                      alt={`Medical Camp ${index + 1}`}
                      className="health-image"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.log(`Image not found: ${imageSrc}`);
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* SECTION 3 - Dubai Run / Employee Participation */}
        <Section className="py-24 reveal-section reveal">
          <Container>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center"
              style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}
            >
              Dubai Run & Employee Participation
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
              {/* Left: Large Dubai Run image - elongated */}
              <motion.div
                initial={{ opacity: 0, rotateY: -15 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
                style={{ perspective: '1000px' }}
              >
                <img
                  src="/ASSETS/Health webpage/dubairun.png"
                  alt="Dubai Run 2025 - Team ASECO"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '450px', maxHeight: '550px' }}
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `
                      <div class="aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                        <div class="text-center p-8">
                          <svg class="w-24 h-24 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span class="text-blue-700 text-2xl font-bold block">Dubai Run 2025</span>
                          <p class="text-blue-600 mt-2">Team ASECO in Action</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </motion.div>

              {/* Right: Stacked info cards */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: 'Dubai Run 2025', desc: 'ASECO employees proudly participated in Dubai Run 2025, celebrating health, unity, and community spirit.' },
                  { label: '30x30 Challenge', desc: 'Encouraging 30 minutes of activity for 30 days to build a culture of daily movement.' },
                  { label: 'Wellness Goals', desc: 'Driving sustainable healthy habits that strengthen both individual and organizational performance.' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotateX: -15 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-blue-100"
                    style={{ perspective: '1000px' }}
                  >
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h4>
                      <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center"
              style={{ color: '#1E4ED8', fontWeight: 700, letterSpacing: '0.5px' }}
            >
              Fitness Challenge Gallery
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                '/ASSETS/Health webpage/fitnesschallege1.png',
                '/ASSETS/Health webpage/fitnesschallege2.png',
                '/ASSETS/Health webpage/fitnesschallege3.png',
                '/ASSETS/Health webpage/fitnesschallege4.png',
                '/ASSETS/Health webpage/fitnesschallege5.png',
                '/ASSETS/Health webpage/fitnesschallege6.png'
              ].map((imageSrc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateY: -15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="fitness-gallery-item"
                  style={{ height: '280px', perspective: '1000px' }}
                >
                  <img
                    src={imageSrc}
                    alt={`Fitness Challenge ${index + 1}`}
                    className="fitness-gallery-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      console.log(`Fitness image not found: ${imageSrc}`);
                    }}
                  />
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
