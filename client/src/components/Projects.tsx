import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "The Africa Initiative",
      description: "A pan-African venture dedicated to building systems that support startup growth through access to capital, mentorship, and data. We're creating a sustainable entrepreneurial ecosystem, starting with pilots like Atlas Africa.",
      image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Startups", "Venture Building", "Pan-African"]
    },
    {
      id: 2,
      title: "Atlas Africa",
      description: "Our flagship platform—a digital investment matchmaking ecosystem connecting African founders with capital, coaching, and collaboration. This smart investment platform reimagines how early-stage founders access funding and support.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Investment", "Technology", "Startup Support"]
    },
    {
      id: 3,
      title: "Green Box Project",
      description: "A sustainability-focused initiative that provided recycling bins made from upcycled materials to 20 schools in Lagos, Nigeria—reaching over 5,000 students and fostering environmental awareness from an early age.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Sustainability", "Education", "Environmental"]
    },
    {
      id: 4,
      title: "STEM Club",
      description: "A grassroots education initiative that covered STEM Education, Leadership, Entrepreneurship, SDGs, and Financial Literacy. It reached over 2,000 students across 4 states in Nigeria, nurturing curiosity and capacity in underserved communities.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Education", "STEM", "Youth Development"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore some of the initiatives I've led to drive positive change across Africa.
          </p>
        </div>
        
        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:underline"
                >
                  Learn More
                  <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold mb-4">Technical Projects</h3>
          <div className="max-w-3xl mx-auto mb-8">
            <ul className="space-y-4 text-left">
              <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg">Smart Local AI Assistant <span className="text-orange-500 text-sm">(WIP)</span></h4>
                <p className="text-gray-700 dark:text-gray-300">A locally hosted AI-powered application with multi-modal capabilities, allowing users to process text, documents, images, voice, and video using custom LLMs. Built with PySide6 for a responsive, modern UI with animations.</p>
              </li>
              <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg">Data Visualization: Innovation Hubs in Africa</h4>
                <p className="text-gray-700 dark:text-gray-300">An interactive dashboard visualizing the distribution and impact of innovation hubs across the continent. Built using publicly available datasets, with Google Data Studio and Python.</p>
              </li>
            </ul>
          </div>
          
          <Button 
            variant="outline" 
            className="inline-flex items-center px-6 py-3 border border-gray-900 dark:border-gray-50 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-medium"
            asChild
          >
            <a href="#">
              View All Projects
              <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
