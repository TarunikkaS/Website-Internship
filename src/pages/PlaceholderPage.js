import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '../components/Layout';
import { ArrowLeft } from 'lucide-react';

const PlaceholderPage = ({ title, description = 'Content coming soon...' }) => {
  return (
    <Section className="pt-24 md:pt-32 min-h-screen">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Back Link */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Homepage</span>
          </Link>

          {/* Page Title */}
          <h1 className="font-headline text-4xl md:text-5xl text-foreground mb-4">
            {title}
          </h1>
          
          {/* Gradient underline */}
          <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto mb-6"></div>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-8">
            {description}
          </p>

          {/* Placeholder Card */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="w-16 h-16 rounded-xl bg-gradient-accent mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-headline text-2xl">
                {title.charAt(0)}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              This page is under development. Check back soon for updates.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PlaceholderPage;