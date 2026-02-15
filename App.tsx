
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />

      <main className="relative z-10 overflow-hidden">
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <ExperienceTimeline />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {showBackToTop && <BackToTop />}
      </AnimatePresence>
    </div>
  );
};

export default App;
