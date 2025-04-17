import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
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
  // Professional Experience
  {
    id: 1,
    title: 'Founder & CEO',
    company: 'The Africa Initiative',
    period: '2023 - Present',
    description:
      "Building Africa's first startup infrastructure company focused on systemic solutions for funding and growth.",
    achievements: [
      'Spearheading the design and launch of Atlas Africa, a flagship investment platform',
      'Secured partnerships and developed pilot frameworks for founder support',
      'Designed tiered service models and monetization pathways',
      'Led team recruitment, onboarding, and strategic planning'
    ]
  },
  {
    id: 2,
    title: 'Project Associate & Consultant',
    company: 'Routine Chaos',
    period: 'May 2022 - Mar 2025',
    description:
      'Provided project-based consulting and implementation for innovation teams in strategy, product, and process design.',
    achievements: [
      'Managed administrative tasks, program operations, and internal record keeping',
      'Built and supported projects to strengthen education systems',
      'Created customized toolkits for agile and systems-led operations',
      'Performed financial reporting, data collection, and internal analysis'
    ]
  },
  {
    id: 3,
    title: 'Project Lead',
    company: 'Ashoka Africa',
    period: '2022 - 2024',
    description:
      'Designed and led educator training and youth-led innovation programs across Nigeria.',
    achievements: [
      'Trained 80+ educators on changemaking frameworks',
      'Managed Changemaker Squads impacting 300+ students',
      'Launched 10+ local impact projects through student teams',
      'Coordinated multi-partner rollouts across schools'
    ]
  },
  {
    id: 4,
    title: 'Global Leadership Program Intern',
    company: 'African Leadership University',
    period: 'Apr 2024 - Jul 2024',
    description:
      "Supported the delivery and logistics of ALU's Silicon Valley leadership immersion program.",
    achievements: [
      'Managed student experiences achieving a 90% satisfaction score',
      'Organized logistics for 15 site visits to top global companies',
      'Developed travel trackers and coordinated logistics for 20 participants',
      'Facilitated high-level networking opportunities with senior executives'
    ]
  },
  {
    id: 5,
    title: 'People Operations & Strategy Lead',
    company: 'Tech+Trust',
    period: 'Jan 2024 - Dec 2024',
    description:
      'Led internal strategy, people operations, and team systems across projects supporting global clients in the AI space.',
    achievements: [
      'Developed performance frameworks and streamlined workflows',
      'Implemented hiring and onboarding structures across teams',
      'Advised on strategy for customer outreach programs',
      'Supported cross-functional collaboration and feedback systems'
    ]
  },
  {
    id: 6,
    title: 'Programs Intern',
    company: 'Greening Youth Foundation',
    period: 'Aug 2023 - Dec 2023',
    description:
      'Supported environmental education expansion efforts across Lagos State public schools.',
    achievements: [
      'Organized and digitized learning materials for accessibility',
      'Co-developed environmental curriculum and outreach strategy',
      'Designed sponsorship tracking tools and gained ministry approval'
    ]
  },
  {
    id: 7,
    title: 'Event & Operations Manager',
    company: 'TEDx ALU Rwanda',
    period: 'Jan 2023 - May 2023',
    description:
      'Coordinated event logistics and schedules for TEDx ALU Rwanda.',
    achievements: [
      'Managed logistics for high-level guests including Reid Hastings',
      'Oversaw venue setup and team operations'
    ]
  },
  {
    id: 8,
    title: 'Residential Advisor',
    company: 'African Leadership University',
    period: 'Jan 2023 - May 2023',
    description:
      'Fostered a supportive and efficient residential experience for students.',
    achievements: [
      'Oversaw room allocation, logistics, and onboarding for 150+ students',
      'Organized engaging residential events and handled conflicts'
    ]
  },
  {
    id: 9,
    title: 'Silicon Valley Global Leadership Fellow',
    company: 'African Leadership University',
    period: 'Feb 2023 - Apr 2023',
    description:
      'Selected as one of 20 fellows for a high-impact Silicon Valley immersion program.',
    achievements: [
      'Participated in executive sessions with founders and VCs',
      'Collaborated on startup case challenges and innovation sprints'
    ]
  },
  {
    id: 10,
    title: 'Project Management & Comms Intern',
    company: 'SustyVibes',
    period: 'Sept 2022 - Dec 2022',
    description:
      'Contributed to sustainability education and community engagement initiatives.',
    achievements: [
      'Managed Susty Schools program, reaching 200+ students',
      'Planned Susty Tea Party 2023 and Climate Elders Comics'
    ]
  },
  {
    id: 11,
    title: 'Programs Intern',
    company: 'Bank of Industry',
    period: 'Jun 2022 - Jul 2022',
    description:
      'Supported customer engagement, logistics, and project coordination.',
    achievements: [
      'Facilitated info sessions with 70% lead conversion',
      'Streamlined logistics and reduced administrative burden by 30%'
    ]
  },
  {
    id: 12,
    title: 'Contracted Teacher',
    company: 'Teach for Nigeria',
    period: 'Mar 2021',
    description:
      'Conducted tech-integration training for public school teachers.',
    achievements: [
      'Trained 100 teachers on leveraging digital tools to enhance classroom learning'
    ]
  },
  // Volunteer Experience
  {
    id: 13,
    title: 'Lead Orientation Volunteer',
    company: 'African Leadership University',
    period: 'Sept 2022 - Apr 2023',
    description: '',
    achievements: [
      'Designed and executed onboarding for 300+ new students',
      'Managed 30 volunteers and partner logistics'
    ]
  },
  {
    id: 14,
    title: 'Volunteer Trainer',
    company: 'Ubuntu United Nations',
    period: 'Sep 2021 - Dec 2021',
    description: '',
    achievements: [
      'Trained 600+ youth across 190 countries',
      'Facilitated sessions with global leaders'
    ]
  },
  {
    id: 15,
    title: 'Volunteer Lead',
    company: 'Teenpreneurs Educational Foundation',
    period: 'Jan 2020 - May 2021',
    description: '',
    achievements: [
      'Designed and delivered digital skills curriculum for 50 students',
      'Handled M&E and administration, improving satisfaction by 40%'
    ]
  },
  {
    id: 16,
    title: 'Programs Officer',
    company: 'Calculus Eduaids',
    period: 'Jan 2020 - May 2021',
    description: '',
    achievements: [
      'Created 50+ visual learning aids used by 1,000+ students',
      'Co-led Google Online Safety Training for 2,000 students and 400 teachers'
    ]
  }
];

// Added Skills Data
const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: 'Leadership & Management',
    skills: ['Team Leadership', 'Project Management', 'Strategic Planning', 'Event Management', 'Change Management']
  },
  {
    id: 2,
    name: 'Business & Operations',
    skills: ['Business Development', 'Operations Management', 'Program Design', 'Process Optimization', 'Financial Reporting']
  },
  {
    id: 3,
    name: 'Communication',
    skills: ['Public Speaking', 'Content Creation', 'Curriculum Development', 'Stakeholder Engagement', 'Training & Facilitation']
  },
  {
    id: 4,
    name: 'Technical',
    skills: ['Data Analysis', 'Digital Marketing', 'Educational Technology', 'Systems Thinking', 'Digital Transformation']
  }
];

// Added Tools Data
const tools: Tool[] = [
  { id: 1, name: 'Notion', icon: '📝', category: 'Productivity' },
  { id: 2, name: 'Asana', icon: '✅', category: 'Project Management' },
  { id: 3, name: 'Google Workspace', icon: '🔄', category: 'Collaboration' },
  { id: 4, name: 'Figma', icon: '🎨', category: 'Design' },
  { id: 5, name: 'Slack', icon: '💬', category: 'Communication' },
  { id: 6, name: 'Microsoft Office', icon: '📊', category: 'Productivity' },
  { id: 7, name: 'Canva', icon: '🖌️', category: 'Design' },
  { id: 8, name: 'Airtable', icon: '📋', category: 'Data Management' },
  { id: 9, name: 'Miro', icon: '🧠', category: 'Collaboration' },
  { id: 10, name: 'Zoom', icon: '🎥', category: 'Communication' },
  { id: 11, name: 'Trello', icon: '📌', category: 'Project Management' },
  { id: 12, name: 'Mailchimp', icon: '📧', category: 'Marketing' }
];

export default function Experience() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A brief look at my career journey—tap to view the full CV.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.slice(0, 2).map((exp, index) => (
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
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-orange-500 font-medium">{exp.period}</span>
                </div>
                <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-4">{exp.company}</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.slice(0, 2).map((ach, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                      <span className="ml-2">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <div className="text-center mt-8">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              View Full CV
            </button>
          </div>

          <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-4xl bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
                <Dialog.Title className="text-2xl font-bold mb-4">Full CV</Dialog.Title>
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-red-500"
                >
                  ✕
                </button>
                
                <div className="mb-6 border-b dark:border-gray-700">
                  <div className="flex space-x-4">
                    <button 
                      className={`py-2 px-4 font-medium ${activeTab === 'experience' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
                      onClick={() => setActiveTab('experience')}
                    >
                      Experience
                    </button>
                    <button 
                      className={`py-2 px-4 font-medium ${activeTab === 'skills' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
                      onClick={() => setActiveTab('skills')}
                    >
                      Skills & Tools
                    </button>
                  </div>
                </div>
                
                {activeTab === 'experience' && (
                  <div className="space-y-8">
                    {experiences.map((exp) => (
                      <div key={exp.id}>
                        <div className="flex justify-between">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                        </div>
                        <h4 className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</h4>
                        {exp.description && <p className="mt-1 text-gray-700 dark:text-gray-300">{exp.description}</p>}
                        <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                          {exp.achievements.map((ach, idx) => (
                            <li key={idx}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'skills' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Skills</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillCategories.map((category) => (
                          <div key={category.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-3">{category.name}</h4>
                            <div className="flex flex-wrap gap-2">
                              {category.skills.map((skill, idx) => (
                                <span key={idx} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Tools</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {tools.map((tool) => (
                          <div key={tool.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
                            <span className="text-2xl mb-2">{tool.icon}</span>
                            <h4 className="font-medium">{tool.name}</h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{tool.category}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </div>
          </Dialog>
        </div>
      </div>
      
      {/* Skills and Tools Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Skills & <span className="text-blue-600 dark:text-blue-400">Tools</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Core competencies and technologies I work with.
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
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
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
            <h3 className="text-2xl font-bold mb-8 text-center">Tools I Use</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl mb-2">{tool.icon}</span>
                  <h4 className="font-medium mb-1">{tool.name}</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{tool.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}