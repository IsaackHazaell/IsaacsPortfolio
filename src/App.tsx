import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'certifications', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setCurrentSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
      
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Global Styles */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Rajdhani', sans-serif;
          background-color: #000;
          overflow-x: hidden;
        }
        
        .font-orbitron {
          font-family: 'Orbitron', monospace;
        }
        
        .cyber-glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }
        
        .cyber-glow:hover {
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
        }
        
        .neon-text {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
        }
        
        .scan-line {
          position: relative;
          overflow: hidden;
        }
        
        .scan-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ffff, transparent);
          animation: scan 2s infinite;
        }
        
        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .glitch-hover:hover {
          animation: glitch-effect 0.3s ease-in-out;
        }
        
        @keyframes glitch-effect {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(45deg, #000, #111);
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(45deg, #00ffff, #0080ff, #8000ff);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
        }
        
        .typing-animation {
          overflow: hidden;
          border-right: 3px solid #00ffff;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #00ffff; }
        }
        `}
      </style>
    </div>
  );
}

export default App;