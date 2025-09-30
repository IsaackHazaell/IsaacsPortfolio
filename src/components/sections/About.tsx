import React from 'react';
import { Code, Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '100+', label: 'Clients Managed', color: 'text-cyan-400' },
    { icon: Code, value: '6+', label: 'Years Experience', color: 'text-green-400' },
    { icon: Award, value: '190K+', label: 'Documents Published', color: 'text-purple-400' },
    { icon: Zap, value: '24/7', label: 'System Uptime', color: 'text-blue-400' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ABOUT.EXE
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Character Avatar */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-80 h-80 mx-auto">
              {/* Holographic Frame */}
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-pulse">
                <div className="absolute inset-4 border border-cyan-400/50 rounded-full"></div>
                <div className="absolute inset-8 border border-cyan-400/30 rounded-full"></div>
              </div>
              
              {/* Avatar Placeholder */}
              <div className="absolute inset-4 bg-gradient-to-b from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-black font-orbitron">IHV</span>
                </div>
              </div>
              
              {/* Scanning Lines */}
              <div className="absolute inset-0 scan-line rounded-full"></div>
              
              {/* Status Indicators */}
              <div className="absolute -top-4 -right-4 bg-green-400 w-6 h-6 rounded-full animate-ping"></div>
              <div className="absolute -top-4 -right-4 bg-green-400 w-6 h-6 rounded-full"></div>
              
              {/* Data Streams */}
              <div className="absolute top-1/4 -left-12 text-cyan-400 text-xs font-mono opacity-70">
                <div>STATUS: ONLINE</div>
                <div>LEVEL: EXPERT</div>
                <div>EXP: 9999+</div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="cyber-card p-6 bg-black/40 border border-cyan-400/30 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-orbitron">PROFILE.DAT</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  <span className="text-cyan-400">&gt;</span> Initializing biography...
                </p>
                <p className="leading-relaxed">
                  CEO and Founder of <span className="text-cyan-400 font-semibold">BlackFor</span>, 
                  a cutting-edge software and cloud solutions company. With over 6 years of experience 
                  in the tech industry, I've successfully managed 100+ clients across diverse sectors.
                </p>
                <p className="leading-relaxed">
                  Former IT Director at <span className="text-green-400 font-semibold">Poder Judicial de Jalisco</span>, 
                  where I led the digital transformation initiative, publishing over 190,000 official documents 
                  and modernizing legacy systems.
                </p>
                <p className="leading-relaxed">
                  Specialized in <span className="text-blue-400 font-semibold">AWS cloud architecture</span> 
                  (Lambda, Aurora, S3, EventBridge), <span className="text-purple-400 font-semibold">Node.js</span> 
                  development, and <span className="text-cyan-400 font-semibold">Agile methodologies</span> 
                  (SCRUM, Project Management).
                </p>
                <div className="pt-4">
                  <div className="text-cyan-400 font-semibold mb-2">CORE_EXPERTISE.JSON:</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• Cloud Architecture</div>
                    <div>• Team Leadership</div>
                    <div>• System Integration</div>
                    <div>• Business Strategy</div>
                    <div>• Process Automation</div>
                    <div>• Client Relations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="cyber-card p-4 bg-black/60 border border-cyan-400/20 rounded-lg text-center hover:border-cyan-400/50 transition-all duration-300">
                    <Icon className={`${stat.color} w-8 h-8 mx-auto mb-2`} />
                    <div className={`text-2xl font-bold ${stat.color} font-orbitron`}>{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;