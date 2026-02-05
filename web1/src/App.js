import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import Homepage from './components/Homepage';
import './index.css';

// Placeholder components for navigation routes
const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen bg-neumorphic-bg flex items-center justify-center">
    <div className="bg-neumorphic-bg p-12 rounded-neumorphic shadow-neumorph-inset text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600">Content coming soon...</p>
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-8 py-4 bg-neumorphic-bg rounded-2xl shadow-neumorph-outset hover:shadow-neumorph-pressed transition-all duration-300 text-gray-700 font-medium"
      >
        ← Back to Homepage
      </button>
    </div>
  </div>
);

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <Router>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      <div className={`transition-opacity duration-800 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          
          {/* HSEQ Routes */}
          <Route path="/health" element={<PlaceholderPage title="Health" />} />
          <Route path="/safety" element={<PlaceholderPage title="Safety" />} />
          <Route path="/environment" element={<PlaceholderPage title="Environment" />} />
          <Route path="/quality" element={<PlaceholderPage title="Quality" />} />
          
          {/* Sustainability */}
          <Route path="/sustainability" element={<PlaceholderPage title="Sustainability" />} />
          
          {/* Employee Engagement, Education & Empowerment */}
          <Route path="/employee-engagement" element={<PlaceholderPage title="Employee Engagement" />} />
          <Route path="/education/kiss-program" element={<PlaceholderPage title="KISS Program" />} />
          <Route path="/empowerment" element={<PlaceholderPage title="Empowerment" />} />
          
          {/* Collaboration */}
          <Route path="/collaboration/customers" element={<PlaceholderPage title="Collaboration with Customers" />} />
          <Route path="/collaboration/suppliers" element={<PlaceholderPage title="Collaboration with Suppliers" />} />
          
          {/* Operational Excellence */}
          <Route path="/operational-excellence" element={<PlaceholderPage title="Operational Excellence" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;