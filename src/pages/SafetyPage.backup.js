import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Section } from '../components/Layout';
import { ArrowLeft, Shield, BookOpen, AlertTriangle, FileCheck, Users } from 'lucide-react';
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
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [activeChart, setActiveChart] = useState(null);

  useEffect(() => {
    // Trigger hero animation after component mounts
    setTimeout(() => setHeroAnimated(true), 300);
  }, []);

  // Masonry background images
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
    '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.53.05 AM.png',
  ];

  const trainingImages = [
    { src: '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.51.19 AM.png', alt: 'First Aid Training' },
    { src: '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.07 AM copy.png', alt: 'Fire Fighting Training' },
    { src: '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.07 AM copy 2.png', alt: 'Forklift Safety Training' }
  ];

  const operationalImages = [
    { src: '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.14 AM.png', alt: 'Safety Mock Drill' },
    { src: '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.19 AM.png', alt: 'Hydro Testing Safety' }
  ];

  const cultureImages = [
    { src: '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.24 AM.png', alt: 'Safety Awareness Session' },
    { src: '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.52.53 AM.png', alt: 'PPE Training' },
    { src: '/ASSETS/asset/safety/Screenshot 2026-02-05 at 11.53.05 AM.png', alt: 'Safety Briefing' }
  ];

  const chartData = [
    { id: 'health-rating', title: 'Health & Safety Rating', value: '4.8/5.0', description: 'Overall safety performance score' },
    { id: 'water', title: 'Water Consumption', value: '12.5%', description: 'Reduction in water usage YoY' },
    { id: 'hazard', title: 'Hazard Waste', value: '95%', description: 'Proper disposal compliance rate' },
    { id: 'incidents', title: 'Incident Trends', value: '-23%', description: 'Decrease in safety incidents' }
  ];

  const handleChartClick = (chartId) => {
    setActiveChart(activeChart === chartId ? null : chartId);
  };

  return (
    <>
      {/* New Safety Hero Section with Animated Worker */}
      <SafetyHero />

      {/* Masonry Background Layer for remaining sections */}
      <MasonryBackground images={masonryImages} />

      {/* Safety Overview Cards */}
      <Section className="relative z-10 bg-white/80 backdrop-blur-sm">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl text-foreground mb-4">
              Our Safety Framework
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive approach to maintaining excellence across all safety dimensions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Compliance & Regulations', description: 'Adherence to international and local safety standards', icon: FileCheck },
              { title: 'Training & Awareness', description: 'Continuous education to empower every team member', icon: BookOpen },
              { title: 'Emergency Preparedness', description: 'Proactive planning for rapid response protocols', icon: AlertTriangle },
              { title: 'Safe Infrastructure', description: 'Engineering excellence in workplace design and maintenance', icon: Shield },
              { title: 'Environmental Responsibility', description: 'Sustainable practices protecting our shared ecosystem', icon: Users },
            ].map((card, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                style={{
                  animation: `fadeIn 600ms ease-out ${index * 100}ms both`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-body font-semibold text-lg text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Training & Awareness Section */}
      <Section className="relative z-10">
        <Container>
          <div className="mb-8">
            <h2 className="font-headline text-3xl md:text-4xl text-foreground mb-4">
              Training & Awareness
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Continuous training programs to enhance safety awareness and preparedness across all teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainingImages.map((img, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">{img.alt}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Operational Safety Measures */}
      <Section className="relative z-10 bg-white/80 backdrop-blur-sm">
        <Container>
          <div className="mb-8">
            <h2 className="font-headline text-3xl md:text-4xl text-foreground mb-4">
              Operational Safety Measures
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Implementation of strict safety controls across high-risk operational areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operationalImages.map((img, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">{img.alt}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Compliance & Regulations with Charts */}
      <Section className="relative z-10">
        <Container>
          <div className="mb-8">
            <h2 className="font-headline text-3xl md:text-4xl text-foreground mb-4">
              Compliance & Regulations
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Monitoring and maintaining compliance with regulatory and internal safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chartData.map((chart) => (
              <div
                key={chart.id}
                onClick={() => handleChartClick(chart.id)}
                className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                style={{
                  transform: activeChart === chart.id ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <div 
                  className="text-center"
                  style={{
                    opacity: activeChart === chart.id ? 1 : 0.7,
                    transition: 'opacity 300ms ease-out',
                  }}
                >
                  <div className="text-4xl font-headline gradient-text mb-2">
                    {chart.value}
                  </div>
                  <h3 className="font-body font-semibold text-lg text-foreground mb-2">
                    {chart.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {chart.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Knowledge Sharing & Safety Culture */}
      <Section className="relative z-10 bg-white/80 backdrop-blur-sm">
        <Container>
          <div className="mb-8">
            <h2 className="font-headline text-3xl md:text-4xl text-foreground mb-4">
              Knowledge Sharing & Safety Culture
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Regular engagement sessions to reinforce safety culture and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cultureImages.map((img, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">{img.alt}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing Section */}
      <Section className="relative z-10 py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl text-foreground mb-6">
              Safety is a Shared Culture
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every decision, every action, and every day begins with safety. Together, we build an environment where everyone returns home safely, and our operations thrive sustainably.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SafetyPage;
