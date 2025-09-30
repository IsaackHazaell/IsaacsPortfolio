import React from 'react';
import { ChevronDown, Play } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-grid-pattern"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
            {/* Holographic Frame */}
            <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-pulse">
              <div className="absolute inset-2 border border-cyan-400/50 rounded-full"></div>
              <div className="absolute inset-4 border border-cyan-400/30 rounded-full"></div>
            </div>
            
            {/* Profile Image */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-b from-cyan-400/20 to-blue-500/20">
              <img 
                src="/isaac.jpeg" 
                alt="Isaac Hazael Villaseñor Cohen"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Scanning Lines */}
            <div className="absolute inset-0 scan-line rounded-full"></div>
            
            {/* Status Indicators */}
            <div className="absolute -top-2 -right-2 bg-green-400 w-4 h-4 rounded-full animate-ping"></div>
            <div className="absolute -top-2 -right-2 bg-green-400 w-4 h-4 rounded-full"></div>
            
            {/* Glitch Effect Overlay */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              ISAAC HAZAEL
            </span>
            <br />
            <span className="text-white glitch-text">
              VILLASEÑOR COHEN
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6">
            <span className="text-cyan-400">&gt;</span> Software Engineer 
            <span className="text-gray-500 mx-2">|</span> 
            Project Manager 
            <span className="text-gray-500 mx-2">|</span> 
            <span className="text-green-400">Entrepreneur</span>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 typewriter">
            Building scalable cloud solutions, empowering businesses with technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="cyber-card p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-gray-300">Clients Managed</div>
          </div>
          <div className="cyber-card p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">6+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="cyber-card p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">190K+</div>
            <div className="text-gray-300">Documents Published</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate('about')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Play size={20} />
              <span>START GAME</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
          >
            VIEW MISSIONS
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={32} />
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .glitch-text {
          position: relative;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          animation: glitch-1 0.5s infinite;
          color: #ff00ff;
          z-index: -1;
        }

        .glitch-text::after {
          animation: glitch-2 0.5s infinite;
          color: #00ffff;
          z-index: -2;
        }

        @keyframes glitch-1 {
          0%, 14%, 15%, 49%, 50%, 99%, 100% { transform: translate(0, 0); }
          15%, 49% { transform: translate(-2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 20%, 21%, 62%, 63%, 99%, 100% { transform: translate(0, 0); }
          21%, 62% { transform: translate(2px, 2px); }
        }

        .typewriter {
          animation: typing 3.5s steps(60, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        .cyber-card {
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 8px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .cyber-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 255, 255, 0.2);
          border-color: rgba(0, 255, 255, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Hero;