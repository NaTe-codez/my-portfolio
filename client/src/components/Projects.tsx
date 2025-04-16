import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const ventureProjects: Project[] = [
  {
    id: 1,
    title: "The Africa Initiative",
    description:
      "A pan-African venture dedicated to building systems that support startup growth through access to capital, mentorship, and data. We're creating a sustainable entrepreneurial ecosystem, starting with pilots like Atlas Africa.",
    image: "images/tailogo.png",
    tags: ["Startups", "Venture Building", "Pan-African"],
    link: "https://drive.google.com/file/d/1ZFIi_WO7h0R061Dq-WP-GQCeG_g5qDr_/view?usp=drive_link/",
  },
  {
    id: 2,
    title: "Atlas Africa (Coming soon...",
    description:
      "A digital investment matchmaking ecosystem connecting African founders with capital, coaching, and collaboration. This smart investment platform reimagines how early-stage founders access funding and support.",
    image: "images/startup.png",
    tags: ["Investment", "Technology", "Startup Support"],
  },
  {
    id: 3,
    title: "STEM Club",
    description:
      "A grassroots education initiative that covered STEM Education, Leadership, Entrepreneurship, SDGs, and Financial Literacy. It reached over 2,000 students across 4 states in Nigeria, nurturing curiosity and capacity in underserved communities.",
    image: "images/stem.jpg",
    tags: ["Education", "STEM", "Youth Development"],
    link:
      "https://www.ashoka.org/en-ke/story/driving-stem-and-social-innovation-nigeria%E2%80%99s-education-system-%E2%80%93-jonathans-changemaker-journey",
  },
  {
    id: 4,
    title: "Green Box Project",
    description:
      "A sustainability-focused initiative that provided recycling bins made from upcycled materials to 20 schools in Lagos, Nigeria—reaching over 5,000 students and fostering environmental awareness from an early age.",
    image: "images/greenbox.png",
    tags: ["Sustainability", "Education", "Environmental"],
    link:
      "https://www.instagram.com/gtbank/p/BmBqaXmlB41/?utm_source=ig_share_sheet&igshid=1oewhvamv6acx&img_index=2",
  },
];

const technicalProjects: Project[] = [
  {
    id: 5,
    title: "Project Management Pathfinder",
    description: "A simulation-based game that teaches project management using real-world case studies, popular methodologies, and scenario-based gameplay for beginners and intermediates in developing nations.",
    image: "images/projectmf.png",
    tags: ["Simulation", "Project Management", "Learning"],
    link: "https://project-pathfinder-africa.vercel.app/",
  },
  {
    id: 6,
    title: "Prompt Generator",
    description: "A sleek web app for generating prompts across creative, technical, academic, and professional domains, with advanced customization for tool type, tone, and use case.",
    link: "https://quick-gen-studio.vercel.app/",
    image: "images/Prompts.png",
    tags: ["AI", "Tools", "Productivity"],
     },
  {
    id: 7,
    title: "What-to-Watch",
    description: "A powerful anime/movie/series recommender with filters for mood, genre, streaming platform, and more. Built for discovery and entertainment curation.",
    image: "images/What-to-watch.png",
    tags: ["Entertainment", "Recommendation", "AI"],
    link: "https://what-to-watchz.vercel.app/"
  },
  {
    id: 8,
    title: "Career Help AI",
    description: "A local-first, intelligent assistant that evaluates your career needs and provides tailored advice, resumes, cover letters, and job suggestions.",
    image: "images/career.png",
    tags: ["Career", "AI", "Assistant"]
  }
];

const dataProjects: Project[] = [
  {
    id: 9,
    title: "Migration Patterns",
    description: "An interactive dashboard revealing regional and global human migration flows and trends. Data from World Bank, UN, and regional governments.",
    image: "images/migrate.png",
    tags: ["Data Visualization", "Migration", "Global Trends"],
    link: "https://global-migration-explorer-insights.lovable.app/"
  },
  {
    id: 10,
    title: "Climate Change Impact",
    description: "A visual exploration of global climate changes over time using NASA and World Bank datasets. Includes temperature anomalies, emissions, and projections.",
    image: "images/climate.png",
    tags: ["Climate", "Analytics", "Sustainability"],
    link: "https://v0-climate-impact-dashboard.vercel.app/"
  },
  {
    id: 11,
    title: "Defense Deck",
    description: "A hypothetical national defense strategy dashboard and policy data visualization platform to illustrate transparency, budgeting, and force structure.",
    image: "images/capstone.png",
    tags: ["Defense", "Policy", "Strategy"],
    link: "https://drive.google.com/file/d/1CscVt3yvz0CcMQX3QWNrTObq62uhOMYm/view?usp=sharing/"
  },
  {
    id: 12,
    title: "Brand Guideline Design",
    description: "A collection of brand assets redesigned for a startup, including logos, color palettes, typography, and templates for social media and marketing materials.",
    image: "images/gyf.png",
    tags: ["Design", "Branding"],
    link: "https://drive.google.com/file/d/1zoFhT1ZIJp4hk303ikHdnrJV-REGMGCX/view?usp=sharing/"
  }
];

const writingProjects: Project[] = [
  {
    id: 13,
    title: "What People Want",
    description: "A reflective essay exploring the hidden threads behind human desires, drawing from personal stories and systemic observations.",
    image: "images/want.png",
    tags: ["Essay", "Reflection", "Philosophy"],
    link: "https://drive.google.com/file/d/1HvEARvmoPSyZ_1qfqh62q9VEpVJQXeHt/view?usp=drive_link"
  },
  {
    id: 14,
    title: "Project Management for Developing Countries",
    description: "A detailed beginner-to-intermediate guide covering popular PM methodologies and challenges unique to developing countries.",
    image: "images/project.png",
    tags: ["Project Management", "Development", "Education"],
    link: "https://drive.google.com/file/d/1548mm4ydluQ-Kb5TEWG4NrVn3qaz73Px/view?usp=drive_link/"
  },
  {
    id: 15,
    title: "Global Economics for Dummies",
    description: "A simplified exploration of economic systems, principles, and global patterns using case studies and everyday language.",
    image: "images/economics.png",
    tags: ["Economics", "Education", "Book"],
    link: "https://drive.google.com/file/d/1kF4S49TuDwtg8okqZHV1W2nIaF2J9ouL/view?usp=drive_link/"
  },
  {
    id: 16,
    title: "My Dissertation",
    description: "A full-length academic paper based on my undergraduate research, converted for publication with structured analysis and real-world implications.",
    image: "images/dissertation.png",
    tags: ["Research", "Economics", "Academic"],
    link: "https://drive.google.com/file/d/1dM52Wn0duaL1XQenbUxiQto_zf4djZJC/view?usp=sharing/"
  }
];

export default function Projects() {
  const categories = [
    { title: "Venture Projects", projects: ventureProjects },
    { title: "Technical Projects", projects: technicalProjects },
    { title: "Data Projects and Designs", projects: dataProjects },
    { title: "Writing", projects: writingProjects },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Project <span className="text-blue-600 dark:text-blue-400">Showcase</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Click on projects to view and interact with them.
          </p>
        </div>

        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-16">
            <h3 className="text-3xl font-bold mb-10 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all group text-sm hover:shadow-xl hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
                    <div className="relative h-40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">Click to view</span>
                      </div>
                      <div className="absolute bottom-2 left-3 px-2 py-1 rounded text-black text-sm font-semibold backdrop-blur-sm bg-white/30">
  {project.title}
</div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
