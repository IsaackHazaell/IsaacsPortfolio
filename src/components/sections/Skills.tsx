import React, { useState } from 'react';
import { Cloud, Code2, Database, Settings, Users, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      icon: Code2,
      title: 'Technical Skills',
      color: 'cyan',
      skills: [
        { name: 'AWS (Lambda, Aurora, S3)', level: 95, category: 'Cloud' },
        { name: 'Node.js', level: 90, category: 'Backend' },
        { name: 'Next.js', level: 85, category: 'Frontend' },
        { name: 'R Programming', level: 80, category: 'Data Science' },
        { name: 'TypeScript', level: 88, category: 'Language' },
        { name: 'Python', level: 75, category: 'Language' }
      ]
    },
    tools: {
      icon: Settings,
      title: 'Tools & Platforms',
      color: 'green',
      skills: [
        { name: 'Zoho CRM', level: 95, category: 'CRM' },
        { name: 'Zoho Projects', level: 90, category: 'PM' },
        { name: 'GitHub', level: 92, category: 'Version Control' },
        { name: 'Slack', level: 88, category: 'Communication' },
        { name: 'Google Workspace', level: 90, category: 'Productivity' },
        { name: 'RStudio', level: 85, category: 'Analytics' }
      ]
    },
    soft: {
      icon: Brain,
      title: 'Soft Skills',
      color: 'purple',
      skills: [
        { name: 'Leadership', level: 95, category: 'Management' },
        { name: 'Negotiation', level: 88, category: 'Business' },
        { name: 'Communication', level: 92, category: 'Interpersonal' },
        { name: 'Problem Solving', level: 94, category: 'Analysis' },
        { name: 'Project Management', level: 90, category: 'Management' },
        { name: 'Strategic Planning', level: 87, category: 'Business' }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: { bg: 'bg-cyan-400', text: 'text-cyan-400', border: 'border-cyan-400' },
      green: { bg: 'bg-green-400', text: 'text-green-400', border: 'border-green-400' },
      purple: { bg: 'bg-purple-400', text: 'text-purple-400', border: 'border-purple-400' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              SKILL_TREE.EXE
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlock achievements and level up your understanding of my capabilities
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            const isActive = activeCategory === key;
            
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg border-2 transition-all duration-300 font-semibold ${
                  isActive 
                    ? `${colors.bg} ${colors.border} text-black` 
                    : `border-gray-600 text-gray-300 hover:${colors.border} hover:${colors.text}`
                }`}
              >
                <Icon size={20} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="relative">
          {Object.entries(skillCategories).map(([key, category]) => {
            const colors = getColorClasses(category.color);
            
            return (
              <div
                key={key}
                className={`transition-all duration-500 ${
                  activeCategory === key ? 'opacity-100 visible' : 'opacity-0 invisible absolute inset-0'
                }`}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="cyber-card p-6 bg-black/60 border border-gray-600/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                          <span className={`text-sm ${colors.text} font-mono`}>{skill.category}</span>
                        </div>
                        <div className={`text-2xl font-bold ${colors.text} font-orbitron`}>
                          {skill.level}%
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${colors.bg} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ width: activeCategory === key ? `${skill.level}%` : '0%' }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                        
                        {/* Skill Level Labels */}
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Novice</span>
                          <span>Expert</span>
                          <span>Master</span>
                        </div>
                      </div>
                      
                      {/* XP Bar */}
                      <div className="mt-3 text-xs text-gray-400 font-mono">
                        EXP: {Math.floor(skill.level * 10)}/1000
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Unlocked Animation */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/50 rounded-lg">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 font-semibold">ACHIEVEMENT UNLOCKED: Full Stack Master</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;