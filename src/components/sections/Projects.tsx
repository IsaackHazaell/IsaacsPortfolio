import React, { useState } from 'react';
import { ExternalLink, Github, Play, Shield, Zap, Target } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<number | null>(null);

  const projects = [
    {
      name: 'BlackFor',
      subtitle: 'Software & Cloud Solutions',
      type: 'Company',
      status: 'Active',
      difficulty: 'Expert',
      description: 'Full-service software development and cloud solutions company providing scalable technology solutions for businesses.',
      longDescription: 'As CEO and founder, I built BlackFor from the ground up to provide comprehensive software and cloud solutions. We specialize in AWS cloud architecture, custom software development, and digital transformation services for businesses of all sizes.',
      technologies: ['AWS', 'Node.js', 'React', 'Lambda', 'Aurora', 'S3'],
      achievements: ['100+ clients served', 'Zero downtime deployments', '24/7 monitoring'],
      links: {
        demo: '#',
        github: '#'
      },
      stats: {
        clients: '100+',
        uptime: '99.9%',
        projects: '50+'
      }
    },
    {
      name: 'Azap',
      subtitle: 'Digital Directory Platform',
      type: 'SaaS',
      status: 'Completed',
      difficulty: 'Advanced',
      description: 'Registered trademark digital directory platform connecting businesses with customers through intelligent categorization.',
      longDescription: 'Azap is a comprehensive digital directory platform that I conceptualized, developed, and registered as a trademark. The platform features intelligent business categorization, user reviews, and advanced search capabilities.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Google Maps API'],
      achievements: ['Registered trademark', 'YouTube channel launched', 'Mobile responsive'],
      links: {
        demo: '#',
        youtube: '#'
      },
      stats: {
        businesses: '500+',
        users: '2K+',
        categories: '50+'
      }
    },
    {
      name: 'Batora',
      subtitle: 'POS/KDS for Cafés',
      type: 'Application',
      status: 'Deployed',
      difficulty: 'Advanced',
      description: 'Point of Sale and Kitchen Display System specifically designed for coffee shops and restaurants.',
      longDescription: 'Batora is a complete POS solution tailored for the food service industry. It includes order management, kitchen display systems, inventory tracking, and real-time analytics to help café owners optimize their operations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Thermal Printing API'],
      achievements: ['Real-time order sync', 'Offline capability', 'Multi-location support'],
      links: {
        demo: '#'
      },
      stats: {
        orders: '10K+',
        locations: '15',
        uptime: '99.8%'
      }
    },
    {
      name: 'Koinonia & Ineleco',
      subtitle: 'Business Restructuring',
      type: 'Consulting',
      status: 'Completed',
      difficulty: 'Expert',
      description: 'Complete business restructuring and technology adoption for established companies.',
      longDescription: 'Led comprehensive digital transformation initiatives for Koinonia and Ineleco, involving business process optimization, technology stack modernization, and team training on new systems.',
      technologies: ['Zoho CRM', 'Google Workspace', 'Process Automation', 'Training'],
      achievements: ['40% efficiency increase', 'Full digital transformation', 'Team training completed'],
      links: {},
      stats: {
        efficiency: '+40%',
        users: '50+',
        processes: '20+'
      }
    },
    {
      name: 'Judicial System',
      subtitle: 'Document Management',
      type: 'Government',
      status: 'Completed',
      difficulty: 'Expert',
      description: 'Modernization of document management system for Poder Judicial de Jalisco.',
      longDescription: 'As IT Director, I led the complete digitalization of the judicial document system, implementing modern workflows and publishing over 190,000 official documents while ensuring compliance and security.',
      technologies: ['Document Management', 'Workflow Automation', 'Security Protocols', 'Compliance'],
      achievements: ['190K+ documents published', 'Zero security incidents', 'Full compliance'],
      links: {},
      stats: {
        documents: '190K+',
        users: '1K+',
        uptime: '99.9%'
      }
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': 'text-green-400 border-green-400/50',
      'Advanced': 'text-blue-400 border-blue-400/50',
      'Expert': 'text-purple-400 border-purple-400/50',
      'Master': 'text-yellow-400 border-yellow-400/50'
    };
    return colors[difficulty as keyof typeof colors] || colors.Advanced;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'Active': 'text-green-400 bg-green-400/20',
      'Completed': 'text-blue-400 bg-blue-400/20',
      'Deployed': 'text-cyan-400 bg-cyan-400/20',
      'In Progress': 'text-yellow-400 bg-yellow-400/20'
    };
    return colors[status as keyof typeof colors] || colors.Active;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              MISSIONS.LOG
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Completed quests and ongoing adventures in the digital realm
          </p>
        </div>

        {/* Mission Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="cyber-card p-4 bg-black/60 border border-green-400/30 rounded-lg text-center">
            <Shield className="text-green-400 w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400 font-orbitron">4</div>
            <div className="text-sm text-gray-400">Completed</div>
          </div>
          <div className="cyber-card p-4 bg-black/60 border border-cyan-400/30 rounded-lg text-center">
            <Zap className="text-cyan-400 w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold text-cyan-400 font-orbitron">1</div>
            <div className="text-sm text-gray-400">Active</div>
          </div>
          <div className="cyber-card p-4 bg-black/60 border border-purple-400/30 rounded-lg text-center">
            <Target className="text-purple-400 w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400 font-orbitron">100K+</div>
            <div className="text-sm text-gray-400">Impact</div>
          </div>
          <div className="cyber-card p-4 bg-black/60 border border-blue-400/30 rounded-lg text-center">
            <Play className="text-blue-400 w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-400 font-orbitron">Expert</div>
            <div className="text-sm text-gray-400">Level</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const difficultyColors = getDifficultyColor(project.difficulty);
            const statusColors = getStatusColor(project.status);
            const isSelected = selectedMission === index;
            
            return (
              <div
                key={index}
                className={`mission-card cyber-card p-6 bg-black/60 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'border-cyan-400/80 scale-105 shadow-2xl shadow-cyan-400/20' 
                    : 'border-gray-600/30 hover:border-cyan-400/50'
                }`}
                onClick={() => setSelectedMission(isSelected ? null : index)}
              >
                {/* Mission Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-orbitron mb-1">{project.name}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{project.subtitle}</p>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors}`}>
                        {project.status}
                      </span>
                      <span className={`px-2 py-1 rounded border text-xs font-semibold ${difficultyColors}`}>
                        {project.difficulty}
                      </span>
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs font-semibold">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mission Description */}
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">TECH STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mission Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-cyan-400 font-orbitron">{value}</div>
                      <div className="text-xs text-gray-400 uppercase">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                {Object.keys(project.links).length > 0 && (
                  <div className="flex space-x-4 mb-4">
                    {project.links.demo && (
                      <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded hover:bg-cyan-400/30 transition-colors">
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </button>
                    )}
                    {project.links.github && (
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded hover:bg-gray-700 transition-colors">
                        <Github size={16} />
                        <span>Code</span>
                      </button>
                    )}
                    {project.links.youtube && (
                      <button className="flex items-center space-x-2 px-4 py-2 bg-red-400/20 text-red-400 rounded hover:bg-red-400/30 transition-colors">
                        <Play size={16} />
                        <span>Video</span>
                      </button>
                    )}
                  </div>
                )}

                {/* Expanded Details */}
                {isSelected && (
                  <div className="mt-6 pt-6 border-t border-gray-600/30 animate-fadeIn">
                    <h4 className="font-semibold text-cyan-400 mb-3 font-orbitron">MISSION BRIEFING:</h4>
                    <p className="text-gray-300 mb-4">{project.longDescription}</p>
                    
                    <h4 className="font-semibold text-green-400 mb-2 font-orbitron">ACHIEVEMENTS UNLOCKED:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center space-x-2 text-green-300 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Mission Progress Bar */}
                <div className="mt-4">
                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      style={{ width: project.status === 'Completed' ? '100%' : project.status === 'Active' ? '75%' : '100%' }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-400/20 to-purple-400/20 border border-blue-400/50 rounded-lg">
            <Target className="text-blue-400 w-5 h-5" />
            <span className="text-blue-400 font-semibold font-orbitron">
              Ready for the next mission? Let's build something amazing together.
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-card:hover {
          transform: translateY(-5px);
        }
        
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

export default Projects;