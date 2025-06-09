import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Download, FileText, ExternalLink, Mail, Phone, Linkedin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

interface SkillCategory {
  id: number;
  name: string;
  skills: string[];
}

interface Tool {
  id: number;
  name: string;
  icon: string;
  category: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Project Associate',
    company: 'Routine Chaos',
    period: 'May 2022 – Mar 2025',
    location: 'Remote, Global',
    description: 'Led systems redesign and operational excellence initiatives across global operations.',
    achievements: [
      'Led systems redesign initiative using structured problem-solving approach, reducing task latency by 55% and streamlining operations across 10+ countries while tracking $100K+ in annual project spend',
      'Conducted root cause analyses for operational inefficiencies, implementing solutions that reduced recurring issues by 65%',
      'Built and maintained relationships with 300+ community members across 10+ countries, achieving 90% satisfaction rates',
      'Managed digital platform migration project, increasing website performance by 60% and doubling user retention metrics'
    ]
  },
  {
    id: 2,
    title: 'People Operations & Strategy Lead',
    company: 'Tech+Trust',
    period: 'Jan 2024 – Dec 2024',
    location: 'Kigali, Rwanda',
    description: 'Designed performance frameworks and operational systems to drive organizational efficiency.',
    achievements: [
      'Designed and implemented performance measurement frameworks that increased team productivity by 30% and improved culture alignment metrics to 92%',
      'Developed 18 comprehensive SOPs after identifying critical process gaps, increasing operational efficiency by 75%',
      'Created onboarding structures and support systems that improved member integration and retention by 40%',
      'Created data-driven operational dashboards using Looker that reduced reporting time by 65% and executive decision-making'
    ]
  },
  {
    id: 3,
    title: 'Global Leadership Program Intern',
    company: 'African Leadership University',
    period: 'Feb 2024 – Jul 2024',
    location: 'Kigali, Rwanda',
    description: 'Coordinated logistics and networking for high-impact Silicon Valley immersion program.',
    achievements: [
      'Organized logistics for 15 site visits to top global companies including Google, Microsoft, Intel, Coursera, & Netflix, ensuring smooth travel & punctuality, improving overall program time management by 30%',
      'Led networking opportunities, creating direct channels for students to engage with senior executives, resulting in increased job placement prospects post-program',
      'Developed tracking systems and coordinated schedules to optimize city-wide logistics for 20 participants'
    ]
  },
  {
    id: 4,
    title: 'Project Lead',
    company: 'Ashoka Africa',
    period: 'Feb 2022 – Feb 2024',
    location: 'Lagos, Nigeria',
    description: 'Designed and executed educational programs across Lagos public school system.',
    achievements: [
      'Designed and executed Changemaker Teacher Activation program across 25 public schools in 4 Lagos education districts, training 200+ educators with changemaking curriculum and activating 1000+ students in changemaker squads',
      'Developed comprehensive implementation strategy with clear KPIs, exceeding post-program engagement targets by 35%'
    ]
  },
  {
    id: 5,
    title: 'Programs Intern',
    company: 'Bank of Industry',
    period: 'April 2022 – Dec 2023',
    location: 'Nigeria',
    description: 'Analyzed funding applications and optimized internal processes for financial inclusion.',
    achievements: [
      'Created Excel-based scoring model to evaluate ₦500M ($1.1M) in funding applications, optimizing viability and risk assessment',
      'Analyzed internal processes across 3 regional branches, identifying operational bottlenecks and developing solutions that reduced processing delays by 20%',
      'Co-authored strategic policy brief on financial inclusion that was integrated into the organization\'s Gender Strategy rollout'
    ]
  }
];

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: 'Leadership & Management',
    skills: ['Team Leadership', 'Project Management', 'Strategic Planning', 'Event Management', 'Change Management', 'Community Development']
  },
  {
    id: 2,
    name: 'Operational Excellence',
    skills: ['Process Optimization', 'System Design', 'Root Cause Analysis', 'Performance Measurement', 'Budget Management', 'Resource Allocation']
  },
  {
    id: 3,
    name: 'Technical Skills',
    skills: ['Data Analysis', 'CRM Management', 'Advanced Excel', 'Looker', 'Event Management Platforms', 'Digital Transformation']
  },
  {
    id: 4,
    name: 'Business Development',
    skills: ['Stakeholder Engagement', 'Relationship Management', 'Program Design', 'Financial Analysis', 'Strategic Policy Development']
  }
];

const tools: Tool[] = [
  { id: 1, name: 'Notion', icon: '📝', category: 'Productivity' },
  { id: 2, name: 'Slack', icon: '💬', category: 'Communication' },
  { id: 3, name: 'Airtable', icon: '📋', category: 'Data Management' },
  { id: 4, name: 'Google Workspace', icon: '🔄', category: 'Collaboration' },
  { id: 5, name: 'Looker', icon: '📊', category: 'Analytics' },
  { id: 6, name: 'Advanced Excel', icon: '📈', category: 'Data Analysis' },
  { id: 7, name: 'CRM Systems', icon: '🤝', category: 'Customer Management' },
  { id: 8, name: 'Event Platforms', icon: '🎯', category: 'Event Management' }
];

export default function Experience() {
  // Replace this with your actual PDF file path
  const resumePdfPath = '/Godwin_Jonathan_Resume.pdf';
  
  const handleDownloadResume = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumePdfPath;
    link.download = 'Godwin_Jonathan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Driving operational excellence and systems innovation across global organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Contact Info Bar */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>Thejonathangodwin@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+250790801277</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-blue-600" />
                <span>LinkedIn Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-blue-600" />
                <span>Portfolio</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Experiences */}
          {experiences.slice(0, 3).map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-[-8px] bg-white dark:bg-gray-900 p-1">
                <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <h4 className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</h4>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="text-orange-500 font-medium block">{exp.period}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.slice(0, 2).map((ach, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{ach}</span>
                    </li>
                  ))}
                  {exp.achievements.length > 2 && (
                    <li className="text-blue-600 dark:text-blue-400 text-sm ml-7">
                      +{exp.achievements.length - 2} more achievements in full resume
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Education Highlight */}
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-lg shadow-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">BSc (Hons) Entrepreneurial Leadership - First Class</h3>
                <h4 className="text-purple-100 font-medium mb-2">African Leadership University, Kigali</h4>
                <p className="text-purple-100 mb-2">Mastercard Foundation Scholar</p>
                <p className="text-sm text-purple-200">
                  <strong>Thesis:</strong> A Systems Approach to Startup Financing & Growth in Africa
                </p>
              </div>
              <div className="text-6xl opacity-20">🎓</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Ashoka Young Changemaker (2022)</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Silicon Valley Global Fellow (2023)</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Community & Culture Award (2024)</span>
            </div>
          </motion.div>

          {/* Resume Download Card */}
          <motion.div
            className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-lg shadow-lg text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FileText className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-2">Complete Resume</h3>
            <p className="text-orange-100 mb-6">
              Download my full resume with detailed experience, leadership roles, and quantified achievements across 5+ years of impact-driven work
            </p>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Full Resume (PDF)
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Skills and Tools Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Core <span className="text-blue-600 dark:text-blue-400">Competencies</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Skills and tools that drive operational excellence and strategic impact.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Skills Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Key Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl mb-2">{tool.icon}</span>
                  <h4 className="font-medium mb-1 text-gray-900 dark:text-white">{tool.name}</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{tool.category}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-medium">
                  IBM Data Analytics
                </span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full font-medium">
                  Google Project Management
                </span>
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-medium">
                  CFI Fundamentals of Finance
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}