'use client';
import { Tab } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Clock } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  comingSoon?: boolean;
}

interface CategoryMap {
  [key: string]: Project[];
}

// Define projects by category
const ventureProjects: Project[] = [
  {
    id: 1,
    title: "The Africa Initiative",
    description: "A pan-African venture dedicated to building systems that support startup growth through access to capital, mentorship, and data. We're creating a sustainable entrepreneurial ecosystem, starting with pilots like Atlas Africa.",
    image: "images/tailogo.png",
    tags: ["Startups", "Venture Building", "Pan-African"],
    link: "https://drive.google.com/file/d/1ZFIi_WO7h0R061Dq-WP-GQCeG_g5qDr_/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Atlas Africa",
    description: "A digital investment matchmaking ecosystem connecting African founders with capital, coaching, and collaboration.",
    image: "images/startup.png",
    tags: ["Investment", "Technology", "Startup Support"],
    comingSoon: true,
  },
  {
    id: 3,
    title: "STEM Club",
    description: "A grassroots education initiative that covered STEM Education, Leadership, Entrepreneurship, SDGs, and Financial Literacy for over 2,000 students across Nigeria.",
    image: "images/stem.jpg",
    tags: ["Education", "STEM", "Youth Development"],
    link: "https://www.ashoka.org/en-ke/story/driving-stem-and-social-innovation-nigeria%E2%80%99s-education-system-%E2%80%93-jonathans-changemaker-journey",
  },
  {
    id: 4,
    title: "Green Box Project",
    description: "A sustainability-focused initiative providing upcycled recycling bins to 20 Lagos schools, reaching 5,000+ students.",
    image: "images/greenbox.png",
    tags: ["Sustainability", "Education", "Environmental"],
    link: "https://www.instagram.com/gtbank/p/BmBqaXmlB41/?utm_source=ig_share_sheet",
  }
];

const technicalProjects: Project[] = [
  {
    id: 5,
    title: "Project Management Pathfinder",
    description: "A simulation-based game that teaches project management using real-world case studies and scenarios.",
    image: "images/projectmf.png",
    tags: ["Simulation", "Project Management", "Learning"],
    link: "https://project-pathfinder-africa.vercel.app/",
  },
  {
    id: 6,
    title: "Prompt Generator",
    description: "A sleek web app for generating prompts across creative, technical, academic, and professional domains.",
    image: "images/Prompts.png",
    tags: ["AI", "Tools", "Productivity"],
    link: "https://quick-gen-studio.vercel.app/",
  },
  {
    id: 7,
    title: "What-to-Watch",
    description: "An anime/movie/series recommender with filters for mood, genre, platform, and more.",
    image: "images/What-to-watch.png",
    tags: ["Entertainment", "Recommendation", "AI"],
    link: "https://what-to-watchz.vercel.app/",
  },
  {
    id: 8,
    title: "Career Help AI",
    description: "A local-first AI assistant providing tailored career advice, resumes, cover letters, and job suggestions.",
    image: "images/career.png",
    tags: ["Career", "AI", "Assistant"],
    comingSoon: true,
  }
];

const dataProjects: Project[] = [
  {
    id: 9,
    title: "Migration Patterns",
    description: "Interactive dashboard of regional and global migration flows using World Bank and UN data.",
    image: "images/migrate.png",
    tags: ["Data Visualization", "Migration", "Global Trends"],
    link: "https://global-migration-explorer-insights.lovable.app/",
  },
  {
    id: 10,
    title: "Climate Change Impact",
    description: "Visualization of global climate change trends using NASA and World Bank datasets.",
    image: "images/climate.png",
    tags: ["Climate", "Analytics", "Sustainability"],
    link: "https://v0-climate-impact-dashboard.vercel.app/",
  },
  {
    id: 11,
    title: "Defence Deck",
    description: "My Capstone defence deck",
    image: "images/capstone.png",
    tags: ["Research", "Design", "Presentation"],
    link: "https://drive.google.com/file/d/1CscVt3yvz0CcMQX3QWNrTObq62uhOMYm/view?usp=sharing",
  },
  {
    id: 12,
    title: "Brand Guideline Design",
    description: "Brand assets redesign for a startup, including logos, color palettes, typography, and templates.",
    image: "images/gyf.png",
    tags: ["Design", "Branding"],
    link: "https://drive.google.com/file/d/1zoFhT1ZIJp4hk303ikHdnrJV-REGMGCX/view?usp=sharing",
  }
];

const writingProjects: Project[] = [
  {
    id: 13,
    title: "What People Want",
    description: "Reflective essay on the hidden threads behind human desires.",
    image: "images/want.png",
    tags: ["Essay", "Reflection", "Philosophy"],
    link: "https://drive.google.com/file/d/1HvEARvmoPSyZ_1qfqh62q9VEpVJQXeHt/view?usp=drive_link",
  },
  {
    id: 14,
    title: "Project Management for Developing Countries",
    description: "Beginner-to-intermediate guide on PM methodologies and challenges in developing economies.",
    image: "images/project.png",
    tags: ["Project Management", "Development", "Education"],
    link: "https://drive.google.com/file/d/1548mm4ydluQ-Kb5TEWG4NrVn3qaz73Px/view?usp=drive_link",
  },
  {
    id: 15,
    title: "Global Economics for Dummies",
    description: "Simplified exploration of economic systems using case studies and everyday language.",
    image: "images/economics.png",
    tags: ["Economics", "Education", "Book"],
    link: "https://drive.google.com/file/d/1kF4S49TuDwtg8okqZHV1W2nIaF2J9ouL/view?usp=drive_link",
  },
  {
    id: 16,
    title: "My Dissertation",
    description: "Undergraduate research paper formatted for publication with actionable insights.",
    image: "images/dissertation.png",
    tags: ["Research", "Economics", "Academic"],
    link: "https://drive.google.com/file/d/1dM52Wn0duaL1XQenbUxiQto_zf4djZJC/view?usp=sharing",
  }
];

const categories: CategoryMap = {
  'Venture Projects': ventureProjects,
  'Technical Projects': technicalProjects,
  'Data & Design Projects': dataProjects,
  'Writing': writingProjects,
};

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

// ProjectCard component for better organization
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Content wrapper - either a div or an anchor depending on if there's a link
  const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    if (project.link) {
      return (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
          aria-label={`${project.title}: ${project.description}`}
        >
          {children}
        </a>
      );
    }
    
    return (
      <div className="flex flex-col h-full">
        {children}
      </div>
    );
  };
  
  return (
    <motion.div
      key={project.id}
      className={classNames(
        "relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all group flex flex-col h-full",
        project.link ? "hover:shadow-xl hover:ring-2 hover:ring-blue-300 dark:hover:ring-blue-600" : "hover:shadow-lg"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <ContentWrapper>
        <div className="relative h-48 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          )}
          <img
            src={project.image}
            alt={`Visual representation of ${project.title} - ${project.description}`}
            className={`w-full h-full object-cover transition-all ${project.link ? "group-hover:scale-105" : ""} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
            {project.link && (
              <div className="absolute right-3 top-3 bg-white dark:bg-gray-800 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
            )}
            {project.comingSoon && (
              <div className="absolute right-3 top-3 bg-white dark:bg-gray-800 p-1.5 rounded-full">
                <Clock className="h-4 w-4 text-amber-500 dark:text-amber-400" />
              </div>
            )}
          </div>
          <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold text-lg">
            {project.title}
            {project.comingSoon && <span className="ml-2 text-sm font-normal text-amber-300">(Coming Soon)</span>}
          </h3>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 text-sm flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const categoryNames = Object.keys(categories);
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project <span className="text-blue-600 dark:text-blue-400">Showcase</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Explore my diverse portfolio of ventures, technical solutions, data visualizations, and writing projects
          </p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className="relative">
            <Tab.List className="flex justify-center flex-wrap gap-2 mb-10 relative z-10">
              {categoryNames.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'px-5 py-2 text-sm font-medium rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                      selected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                    )
                  }
                  aria-label={`Show ${category}`}
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <Tab.Panels>
            <AnimatePresence mode="wait">
              {categoryNames.map((category, idx) => (
                <Tab.Panel
                  key={category}
                  className={classNames(
                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl'
                  )}
                  static
                >
                  {selectedIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                      {categories[category].map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                      ))}
                    </motion.div>
                  )}
                </Tab.Panel>
              ))}
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="View more projects on GitHub"
          >
            View More Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}