import React, { useState } from 'react';
import { Calendar, MapPin, TrendingUp, Users, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const experiences = [
    {
      title: 'CEO & Founder',
      company: 'BlackFor',
      location: 'Remote',
      period: '2021 - Present',
      type: 'Leadership',
      description: 'Founded and lead a software development and cloud solutions company, managing 100+ clients across diverse sectors.',
      achievements: [
        'Built company from 0 to 100+ active clients',
        'Achieved 99.9% system uptime across all client projects',
        'Established partnerships with major cloud providers',
        'Implemented DevOps practices reducing deployment time by 80%'
      ],
      technologies: ['AWS', 'Node.js', 'React', 'DevOps', 'Team Leadership'],
      level: 'Expert',
      xp: 2800
    },
    {
      title: 'IT Director',
      company: 'Poder Judicial de Jalisco',
      location: 'Guadalajara, México',
      period: '2019 - 2021',
      type: 'Government',
      description: 'Led digital transformation initiative for the judicial system, modernizing document management and publishing processes.',
      achievements: [
        'Published 190,000+ official judicial documents',
        'Reduced document processing time by 75%',
        'Implemented secure digital workflows',
        'Trained 200+ government employees on new systems'
      ],
      technologies: ['Document Management', 'Process Automation', 'Security', 'Training'],
      level: 'Advanced',
      xp: 2200
    },
    {
      title: 'Senior Software Engineer',
      company: 'Various Clients',
      location: 'Remote',
      period: '2018 - 2021',
      type: 'Consulting',
      description: 'Provided consulting services for software architecture, cloud migrations, and system optimizations.',
      achievements: [
        'Successfully migrated 20+ applications to cloud',
        'Reduced infrastructure costs by average 40%',
        'Implemented CI/CD pipelines for multiple clients',
        'Mentored junior developers across 5+ companies'
      ],
      technologies: ['Cloud Migration', 'System Architecture', 'Mentoring', 'CI/CD'],
      level: 'Advanced',
      xp: 1800
    },
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2017 - 2019',
      type: 'Development',
      description: 'Built web applications and mobile solutions for startups and established businesses.',
      achievements: [
        'Delivered 30+ successful projects',
        'Built e-commerce platforms handling $1M+ transactions',
        'Created mobile apps with 10K+ downloads',
        'Established reputation for quality and reliability'
      ],
      technologies: ['React', 'Node.js', 'Mobile Development', 'E-commerce'],
      level: 'Intermediate',
      xp: 1200
    }
  ];

  const getLevelColor = (level: string) => {
    const colors = {
      'Beginner': 'text-green-400',
      'Intermediate': 'text-blue-400',
      'Advanced': 'text-purple-400',
      'Expert': 'text-yellow-400'
    };
    return colors[level as keyof typeof colors] || colors.Intermediate;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Leadership': 'bg-yellow-400/20 text-yellow-400 border-yellow-400/50',
      'Government': 'bg-blue-400/20 text-blue-400 border-blue-400/50',
      'Consulting': 'bg-purple-400/20 text-purple-400 border-purple-400/50',
      'Development': 'bg-green-400/20 text-green-400 border-green-400/50'
    };
    return colors[type as keyof typeof colors] || colors.Development;
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              QUEST_LOG.EXE
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Journey through the levels of professional development and career milestones
          </p>
        </div>

        {/* Level Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="cyber-card p-4 bg-black/60 border border-yellow-400/30 rounded-lg text-center">
            <TrendingUp className="text-yellow-400 w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-400 font-orbitron">6+</div>
            <div className="text-sm text-gray-400">Years XP</div>
          </div>
          <div className="cyber-card p-4 bg-black/60 border border-cyan-400/30 rounded-lg text-center">
            <Users className="text-cyan-400 w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold text-cyan-400 font-orbitron">100+</div>
            <div className="text-sm text-gray-400">Clients</div>
          </div>
          <div className="cyber-card p-4 bg-black/60 border border-green-400/30 rounded-lg text-center">
            <Award className="text-green-400 w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400 font-orbitron">4</div>
            <div className="text-sm text-gray-400">Roles</div>
          </div>
          <div className="cyber-card p-4 bg-black/60 border border-purple-400/30 rounded-lg text-center">
            <Calendar className="text-purple-400 w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400 font-orbitron">8K+</div>
            <div className="text-sm text-gray-400">Total XP</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isActive = activeTimeline === index;
              const isEven = index % 2 === 0;
              const levelColor = getLevelColor(exp.level);
              const typeColor = getTypeColor(exp.type);
              
              return (
                <div
                  key={index}
                  className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 ${
                    isActive 
                      ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                      : 'bg-gray-800 border-gray-600'
                  } z-10 transition-all duration-300`}>
                    <div className={`absolute inset-1 rounded-full ${
                      isActive ? 'bg-white animate-pulse' : 'bg-gray-700'
                    }`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    isEven ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className={`cyber-card p-6 bg-black/60 border-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'border-cyan-400/80 scale-105 shadow-2xl shadow-cyan-400/20' 
                        : 'border-gray-600/30 hover:border-cyan-400/50'
                    }`}>
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold font-orbitron">{exp.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-semibold border ${typeColor}`}>
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-cyan-400 font-semibold mb-1">{exp.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      {/* Level & XP */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-400">Level:</span>
                          <span className={`font-semibold ${levelColor} font-orbitron`}>{exp.level}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-400">XP:</span>
                          <span className="text-cyan-400 font-bold font-orbitron">{exp.xp}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">TECH STACK:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {isActive && (
                        <div className="animate-fadeIn">
                          <h4 className="text-sm font-semibold text-green-400 mb-2 font-orbitron">ACHIEVEMENTS:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-green-300 text-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* XP Progress Bar */}
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-400">Experience Progress</span>
                          <span className="text-xs text-gray-400">{exp.xp}/3000 XP</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                            style={{ width: `${(exp.xp / 3000) * 100}%` }}
                          >
                            <div className="h-full bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Status */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/50 rounded-lg">
            <TrendingUp className="text-yellow-400 w-5 h-5" />
            <span className="text-yellow-400 font-semibold font-orbitron">
              CURRENT LEVEL: Expert - Ready for Epic Challenges
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Experience;