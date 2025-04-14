import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  const achievements = [
    "5000+ students impacted through education projects",
    "80+ teachers trained on changemaking frameworks",
    "Founded The Africa Initiative, building systems for African startups",
    "Currently developing Atlas Africa, a smart investment platform"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Godwin Jonathan</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            From grassroots initiatives to continental partnerships, I've dedicated my career to creating sustainable solutions for Africa's future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
              alt="Working with community members in Africa" 
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              My Story
            </h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              I'm a Nigerian-born changemaker currently based in Kigali, Rwanda. My work is driven by one simple belief: opportunity should not be a privilege. I founded The Africa Initiative to bridge gaps in capital and competency for African startups, and I'm currently building Atlas Africa, a smart investment platform that reimagines how early-stage founders access funding, coaching, and community.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              From my early work leading community education programs to representing African youth on global stages, every step has been about solving real problems and building structures that last. I bring clarity, strategy, and soul into everything I build.
            </p>
            
            <h4 className="font-semibold text-xl mb-3">Impact Highlights</h4>
            <ul className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2">{achievement}</span>
                </motion.li>
              ))}
            </ul>
            
            <a 
              href="#experience" 
              className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
            >
              View my full experience
              <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
