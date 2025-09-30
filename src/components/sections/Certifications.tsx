import React, { useState } from 'react';
import { Award, Star, Lock, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      status: 'in_progress',
      progress: 75,
      issuer: 'Amazon Web Services',
      description: 'Foundational understanding of AWS cloud concepts, services, and terminology',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Pricing'],
      rarity: 'common',
      estimatedCompletion: 'Q2 2024'
    },
    {
      name: 'SCRUM Master',
      status: 'studying',
      progress: 45,
      issuer: 'Scrum Alliance',
      description: 'Agile project management methodology and team leadership',
      skills: ['Agile', 'Team Leadership', 'Project Management', 'Sprint Planning'],
      rarity: 'uncommon',
      estimatedCompletion: 'Q3 2024'
    },
    {
      name: 'Azap Trademark Owner',
      status: 'completed',
      progress: 100,
      issuer: 'IMPI Mexico',
      description: 'Registered trademark for digital directory platform',
      skills: ['Intellectual Property', 'Brand Management', 'Legal Compliance'],
      rarity: 'epic',
      completedDate: '2023'
    },
    {
      name: 'Node.js Certified Developer',
      status: 'planned',
      progress: 0,
      issuer: 'Linux Foundation',
      description: 'Advanced Node.js application development and best practices',
      skills: ['Node.js', 'JavaScript', 'API Development', 'Performance'],
      rarity: 'rare',
      estimatedCompletion: 'Q4 2024'
    },
    {
      name: 'AWS Solutions Architect',
      status: 'planned',
      progress: 0,
      issuer: 'Amazon Web Services',
      description: 'Design and deploy scalable systems on AWS',
      skills: ['System Design', 'AWS Architecture', 'Scalability', 'Security'],
      rarity: 'legendary',
      estimatedCompletion: '2025'
    }
  ];

  const getRarityColor = (rarity: string) => {
    const colors = {
      common: 'text-gray-400 border-gray-400/50',
      uncommon: 'text-green-400 border-green-400/50',
      rare: 'text-blue-400 border-blue-400/50',
      epic: 'text-purple-400 border-purple-400/50',
      legendary: 'text-yellow-400 border-yellow-400/50'
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-400" size={20} />;
      case 'in_progress':
        return <Star className="text-yellow-400 animate-spin" size={20} />;
      case 'studying':
        return <Award className="text-blue-400 animate-pulse" size={20} />;
      case 'planned':
        return <Lock className="text-gray-400" size={20} />;
      default:
        return <Lock className="text-gray-400" size={20} />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'UNLOCKED';
      case 'in_progress':
        return 'IN PROGRESS';
      case 'studying':
        return 'STUDYING';
      case 'planned':
        return 'LOCKED';
      default:
        return 'LOCKED';
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              ACHIEVEMENTS.DB
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Collectible badges and certifications unlocked through continuous learning
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="cyber-card p-4 bg-black/60 border border-green-400/30 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-400 font-orbitron">1</div>
            <div className="text-sm text-gray-400">Completed</div>
          </div>
          <div className="cyber-card p-4 bg-black/60 border border-yellow-400/30 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-400 font-orbitron">2</div>
            <div className="text-sm text-gray-400">In Progress</div>
          </div>
          <div className="cyber-card p-4 bg-black/60 border border-gray-400/30 rounded-lg text-center">
            <div className="text-2xl font-bold text-gray-400 font-orbitron">2</div>
            <div className="text-sm text-gray-400">Planned</div>
          </div>
          <div className="cyber-card p-4 bg-black/60 border border-cyan-400/30 rounded-lg text-center">
            <div className="text-2xl font-bold text-cyan-400 font-orbitron">60%</div>
            <div className="text-sm text-gray-400">Progress</div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const rarityColors = getRarityColor(cert.rarity);
            const isSelected = selectedCert === index;
            
            return (
              <div
                key={index}
                className={`cyber-card p-6 bg-black/60 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? `${rarityColors} scale-105 shadow-lg` 
                    : 'border-gray-600/30 hover:border-cyan-400/50'
                }`}
                onClick={() => setSelectedCert(isSelected ? null : index)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{cert.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    {getStatusIcon(cert.status)}
                    <span className={`text-xs mt-1 ${rarityColors.split(' ')[0]} uppercase font-mono`}>
                      {cert.rarity}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{getStatusText(cert.status)}</span>
                    <span className="text-sm font-mono">{cert.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r transition-all duration-1000 ease-out ${
                        cert.status === 'completed' 
                          ? 'from-green-400 to-green-500' 
                          : 'from-cyan-400 to-blue-500'
                      }`}
                      style={{ width: `${cert.progress}%` }}
                    >
                      <div className="h-full bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{cert.description}</p>

                {/* Completion Info */}
                <div className="text-xs text-gray-500 font-mono">
                  {cert.status === 'completed' 
                    ? `Completed: ${cert.completedDate}`
                    : `ETA: ${cert.estimatedCompletion}`
                  }
                </div>

                {/* Expanded Info */}
                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-gray-600/30 animate-fadeIn">
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">SKILLS UNLOCKED:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded border border-cyan-400/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Achievement Notification */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 border border-purple-400/50 rounded-lg">
            <Star className="text-purple-400 w-5 h-5 animate-spin" />
            <span className="text-purple-400 font-semibold font-orbitron">
              NEXT ACHIEVEMENT: AWS Cloud Practitioner - 75% Complete
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default Certifications;