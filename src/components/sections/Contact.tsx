import React, { useState } from 'react';
import { Send, Terminal, Github, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    '> System initialized...',
    '> Type "help" for available commands',
    '> Ready for input...'
  ]);
  const [showTerminal, setShowTerminal] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleTerminalCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = terminalInput.toLowerCase().trim();
      let response = '';

      switch (command) {
        case 'help':
          response = `Available commands:
> skills - View technical skills
> experience - Career summary
> projects - List major projects
> contact - Contact information
> whoami - About Isaac
> clear - Clear terminal`;
          break;
        case 'skills':
          response = 'Skills: AWS, Node.js, React, Next.js, Python, R, Docker, Kubernetes, MongoDB, PostgreSQL';
          break;
        case 'experience':
          response = 'CEO at BlackFor | Former IT Director at Poder Judicial de Jalisco | 6+ years experience';
          break;
        case 'projects':
          response = 'BlackFor, Azap, Batora, Judicial System, Koinonia & Ineleco';
          break;
        case 'contact':
          response = 'Email: contact@blackfor.com | LinkedIn: Isaac Hazael | GitHub: @isaac-hazael';
          break;
        case 'whoami':
          response = 'Isaac Hazael Villaseñor Cohen - Software Engineer, CEO, Project Manager, Entrepreneur';
          break;
        case 'clear':
          setTerminalOutput(['> Terminal cleared', '> Ready for input...']);
          setTerminalInput('');
          return;
        default:
          response = `Command not found: ${command}. Type "help" for available commands.`;
      }

      setTerminalOutput(prev => [...prev, `> ${terminalInput}`, response]);
      setTerminalInput('');
    }
  };

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@isaac-hazael',
      link: '#',
      color: 'text-gray-300 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Isaac Hazael',
      link: '#',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: 'Azap Channel',
      link: '#',
      color: 'text-red-400 hover:text-red-300'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@blackfor.com',
      link: 'mailto:contact@blackfor.com',
      color: 'text-cyan-400 hover:text-cyan-300'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              CONNECT.SYS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Initiate contact protocol - Ready to establish secure connection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="cyber-card p-8 bg-black/60 border border-cyan-400/30 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold font-orbitron mb-6 text-cyan-400">
                PRESS START TO CONNECT
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    PLAYER NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="your.email@domain.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    MISSION BRIEFING
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Describe your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Send size={20} />
                    <span>TRANSMIT MESSAGE</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Terminal */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Info */}
            <div className="cyber-card p-6 bg-black/60 border border-gray-600/30 rounded-lg">
              <h3 className="text-xl font-bold font-orbitron mb-6 text-green-400">
                CONNECTION ENDPOINTS
              </h3>
              
              <div className="space-y-4">
                {contactLinks.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      className={`flex items-center space-x-4 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 group ${contact.color}`}
                    >
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="font-semibold">{contact.label}</div>
                        <div className="text-sm opacity-75">{contact.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600/30">
                <div className="flex items-center space-x-2 text-gray-400 mb-2">
                  <MapPin size={16} />
                  <span>Remote / Global</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone size={16} />
                  <span>Available by appointment</span>
                </div>
              </div>
            </div>

            {/* Terminal Easter Egg */}
            <div className="cyber-card p-6 bg-black/80 border border-green-400/30 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold font-orbitron text-green-400 flex items-center space-x-2">
                  <Terminal size={20} />
                  <span>TERMINAL.EXE</span>
                </h3>
                <button
                  onClick={() => setShowTerminal(!showTerminal)}
                  className="px-3 py-1 text-xs bg-green-400/20 text-green-400 rounded border border-green-400/50 hover:bg-green-400/30 transition-colors"
                >
                  {showTerminal ? 'MINIMIZE' : 'MAXIMIZE'}
                </button>
              </div>

              {showTerminal && (
                <div className="bg-black rounded-lg p-4 font-mono text-sm">
                  <div className="h-48 overflow-y-auto mb-4 space-y-1">
                    {terminalOutput.map((line, index) => (
                      <div key={index} className="text-green-400">
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">isaac@portfolio:~$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={handleTerminalCommand}
                      className="flex-1 bg-transparent text-green-400 focus:outline-none"
                      placeholder="Type 'help' for commands"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/50 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-green-400 font-semibold font-orbitron">STATUS: ONLINE</span>
            </div>
            <div className="text-gray-400">|</div>
            <span className="text-cyan-400 font-semibold">Response Time: &lt; 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;