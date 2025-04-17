import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TechnoRippleBackground from "./TechnoRippleBackground";
import { useEffect, useState } from "react";

export default function Hero() {
  // Add state to handle animation timing
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-12 relative overflow-hidden">
      <TechnoRippleBackground />

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.h2 
              custom={1} 
              initial="hidden" 
              animate={isLoaded ? "visible" : "hidden"} 
              variants={fadeInUpVariant}
              className="text-xl md:text-2xl text-orange-500 mb-4 font-medium"
            >
              Founder • Strategist • Changemaker
            </motion.h2>

            <motion.h1 
              custom={2} 
              initial="hidden" 
              animate={isLoaded ? "visible" : "hidden"} 
              variants={fadeInUpVariant}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
            >
              Empowering Africa's <br />
              Future
              <span className="text-blue-600 dark:text-blue-400 block md:inline">
                {" "}One Bold Venture at a Time
              </span>
            </motion.h1>

            <motion.p 
              custom={3} 
              initial="hidden" 
              animate={isLoaded ? "visible" : "hidden"} 
              variants={fadeInUpVariant}
              className="text-lg md:text-xl mb-8 max-w-lg text-gray-700 dark:text-gray-300"
            >
              I build systems that bridge the gap between potential and opportunity across Africa.
            </motion.p>

            <motion.div 
              custom={4} 
              initial="hidden" 
              animate={isLoaded ? "visible" : "hidden"} 
              variants={fadeInUpVariant}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all font-medium"
                asChild
              >
                <a href="#projects">Explore My Work</a>
              </Button>

              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-medium"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-2xl"
                initial={{ rotate: 0 }}
                animate={{ rotate: -6 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              ></motion.div>
              <img 
                src="/images/godwin.jpg" 
                alt="Godwin Jonathan" 
                className="rounded-2xl shadow-lg w-full max-w-md relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}