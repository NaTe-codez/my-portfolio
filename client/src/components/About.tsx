import { motion } from "framer-motion";
import { Check, MapPin, Bookmark, Users, Globe, Award } from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "5,000+ Students Impacted",
      description: "Designed education programs reaching thousands across Nigeria, with 40% improvement in digital literacy outcomes"
    },
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: "80+ Teachers Trained",
      description: "Developed and delivered changemaking frameworks used in classrooms nationwide"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Global Leadership",
      description: "Selected for Silicon Valley immersion program, collaborating with founders and VCs"
    },
    {
      icon: <Bookmark className="h-6 w-6 text-blue-500" />,
      title: "Atlas Africa",
      description: "Building Africa's first startup infrastructure platform connecting founders to capital and competency"
    }
  ];

  const values = [
    "Opportunity for All",
    "Systemic Solutions",
    "African Innovation",
    "Sustainable Impact"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Godwin Jonathan</span>
          </motion.h2>
          
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MapPin className="h-5 w-5 text-orange-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400 font-medium">Nigerian-born, Currently in Kigali, Rwanda</span>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            From Silicon Valley to African classrooms, I'm dedicated to creating systems that make opportunity accessible to all. My work spans education, leadership development, and startup infrastructure.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="images/story.jpg" 
              alt="Godwin Jonathan working with community members in Africa" 
              className="rounded-xl shadow-lg w-full object-cover h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 rounded-b-xl">
              <span className="font-medium">Leading a workshop with students in Lagos, 2022</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              My Journey
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              My path began in Nigeria's public schools, where I witnessed firsthand how unequal access to opportunity shapes futures. This sparked my mission: creating systems that level the playing field for African talent.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              From training hundreds of teachers with Ashoka Africa to supporting global leaders at African Leadership University, I've consistently focused on building bridges between potential and opportunity. In 2023, I founded The Africa Initiative to tackle systemic barriers facing African startups.
            </p>
            
            <div className="p-5 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-6 border-l-4 border-blue-500">
              <p className="italic text-gray-700 dark:text-gray-300">
                "Jonathan brings a rare combination of strategic thinking and execution excellence. He was really impactful leading the volunteer team for an unforgettable orientation."
                <span className="block mt-2 font-medium text-gray-900 dark:text-white">— Melody Abia, Community Associate at ALU</span>
              </p>
            </div>
            
            <a 
              href="#experience" 
              className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
            >
              View my full experience
              <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
        
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Impact Highlights
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  {achievement.icon}
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Core Values
            </h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              These principles guide everything I build and how I show up in my work:
            </p>
            
            <ul className="space-y-3">
              {values.map((value, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Current Focus: The Africa Initiative
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              As Founder & CEO, I'm building Africa's first startup infrastructure company focused on systemic solutions for funding and growth. Our flagship project, Atlas Africa, is a smart investment platform reimagining how early-stage founders access capital, coaching, and community.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              After years of working across education, leadership development, and operations at organizations like Routine Chaos and Ashoka Africa, I'm now focused on creating sustainable systems that will power the next generation of African innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://drive.google.com/file/d/1ZFIi_WO7h0R061Dq-WP-GQCeG_g5qDr_/view?usp=sharing" 
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors duration-200 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about The Africa Initiative
              </a>
              <a 
                href="mailto:jonathan@theafricainitiative.com" 
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium transition-colors duration-200 text-center"
                onClick={(e) => {
                  window.location.href = "mailto:jonathan@theafricainitiative.com";
                  e.preventDefault();
                }}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}