import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import PlaceholderPage from './pages/PlaceholderPage';
import SafetyPage from './pages/SafetyPage';
import HealthPage from './pages/HealthPage';
import VideoIntro from './components/VideoIntro';
import './index.css';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <Router>
      {!introComplete && (
        <VideoIntro onComplete={() => setIntroComplete(true)} />
      )}
      <div className={`transition-opacity duration-500 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Layout>
          <Navigation />
          
          <main>
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Homepage />} />
            
            {/* HSEQ Routes (A) */}
            <Route 
              path="/health" 
              element={<HealthPage />} 
            />
            <Route 
              path="/safety" 
              element={<SafetyPage />} 
            />
            <Route 
              path="/environment" 
              element={<PlaceholderPage title="Environment" description="Environmental stewardship and sustainable practices." />} 
            />
            <Route 
              path="/quality" 
              element={<PlaceholderPage title="Quality" description="Uncompromising quality standards in everything we do." />} 
            />
            
            {/* Sustainability (S) */}
            <Route 
              path="/sustainability" 
              element={<PlaceholderPage title="Sustainability" description="Building a sustainable future through responsible innovation." />} 
            />
            
            {/* Employee Excellence (E) */}
            <Route 
              path="/employee-engagement" 
              element={<PlaceholderPage title="Employee Engagement" description="Creating meaningful connections and fostering team spirit." />} 
            />
            <Route 
              path="/education" 
              element={<PlaceholderPage title="Education" description="Continuous learning and professional development programs." />} 
            />
            <Route 
              path="/education/kiss-program" 
              element={<PlaceholderPage title="KISS Program" description="Knowledge, Innovation, Skills, and Success - our flagship education initiative." />} 
            />
            <Route 
              path="/empowerment" 
              element={<PlaceholderPage title="Empowerment" description="Empowering employees to lead, innovate, and excel." />} 
            />
            
            {/* Collaboration (C) */}
            <Route 
              path="/collaboration/customers" 
              element={<PlaceholderPage title="Collaboration with Customers" description="Partnership-driven approach to customer success." />} 
            />
            <Route 
              path="/collaboration/suppliers" 
              element={<PlaceholderPage title="Collaboration with Suppliers" description="Building strong supplier relationships for mutual growth." />} 
            />
            
            {/* Operational Excellence (O) */}
            <Route 
              path="/operational-excellence" 
              element={<PlaceholderPage title="Operational Excellence" description="Continuous improvement and efficiency in all operations." />} 
            />
          </Routes>
        </main>
        
        <Footer />
      </Layout>
      </div>
    </Router>
  );
}

export default App;