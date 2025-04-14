import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Founder & CEO",
      company: "The Africa Initiative",
      period: "2023 - Present",
      description: "Building Africa's first startup infrastructure company focused on systemic solutions for funding and growth.",
      achievements: [
        "Spearheading the design and launch of Atlas Africa, a flagship investment platform",
        "Secured partnerships and developed pilot frameworks for founder support",
        "Designed tiered service models and monetization pathways",
        "Led team recruitment, onboarding, and strategic planning"
      ]
    },
    {
      id: 2,
      title: "People Operations & Strategy Lead",
      company: "Tech+Trust",
      period: "Jan 2024 - Present",
      description: "Leading internal strategy, people ops, and team systems across projects supporting global clients in the AI space.",
      achievements: [
        "Developed performance frameworks and streamlined workflows",
        "Implemented hiring and onboarding structures across teams",
        "Advised on strategy for customer outreach programs",
        "Supported cross-functional collaboration and feedback systems"
      ]
    },
    {
      id: 3,
      title: "Project Associate & Consultant",
      company: "Routine Chaos",
      period: "2023 - Mar 2025",
      description: "Provided project-based consulting and implementation for innovation teams in strategy, product, and process design.",
      achievements: [
        "Performed financial reporting, data collection, and internal analysis",
        "Built and supported projects aimed at strengthening education systems",
        "Created customized toolkits for agile and systems-led operations",
        "Presented insights to guide operations for innovation teams"
      ]
    },
    {
      id: 4,
      title: "Project Lead",
      company: "Ashoka Africa",
      period: "2022 - 2024",
      description: "Designed and led educator training and youth-led innovation programs across Nigeria.",
      achievements: [
        "Trained 80+ educators on changemaking frameworks",
        "Managed Changemaker Squads impacting 300+ students",
        "Launched 10+ local impact projects through student teams",
        "Coordinated multi-partner rollouts across schools"
      ]
    }
  ];

  const education = [
    {
      degree: "BSc. in Entrepreneurial Leadership",
      institution: "African Leadership University",
      note: "Mastercard Foundation Scholar"
    }
  ];

  const certifications = [
    "Google Project Management (Coursera - 10 Courses)",
    "IBM Data Analyst (Coursera - 11 Courses)",
    "IBM Data Science (Coursera - 8 Courses)",
    "Preparatory Certificate in Finance & Financial Markets (Coursera – 10 courses)"
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A timeline of my career journey and key roles in driving change across Africa.
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div 
              key={experience.id}
              className="relative pl-8 pb-12 border-l-2 border-indigo-600 dark:border-indigo-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-[-8px] bg-white dark:bg-gray-900 p-1">
                <div className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <span className="text-orange-500 font-medium">{experience.period}</span>
                </div>
                <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-4">{experience.company}</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {experience.description}
                </p>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
          {/* Education & Certifications */}
          <motion.div 
            className="relative pl-8 pb-12 border-l-2 border-indigo-600 dark:border-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-[-8px] bg-white dark:bg-gray-900 p-1">
              <div className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Education & Certifications</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Education</h4>
                <ul className="space-y-2">
                  {education.map((item, index) => (
                    <li key={index}>
                      <div className="font-medium">{item.degree}</div>
                      <div className="text-gray-600 dark:text-gray-400">{item.institution} ({item.note})</div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Certifications</h4>
                <ul className="space-y-1">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Skills */}
          <motion.div 
            className="relative pl-8 pb-12 border-l-2 border-indigo-600 dark:border-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-[-8px] bg-white dark:bg-gray-900 p-1">
              <div className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Skills & Tools</h3>
              
              <div className="flex flex-wrap gap-2">
                {["Project Management", "Stakeholder Engagement", "Business Strategy", "Data Analysis (Excel, SQL)", 
                  "Presentation Design", "Digital Tools (Asana, Notion)", "Process Optimization", 
                  "Systems Thinking", "User Research"].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Last point on timeline */}
          <motion.div 
            className="relative pl-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-[-8px] bg-white dark:bg-gray-900 p-1">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            </div>
            <div className="text-center">
              <a 
                href="#" 
                className="inline-block px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow transition-all"
              >
                Download Full Resume (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
