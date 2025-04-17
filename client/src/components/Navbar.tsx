import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTheme } from "../components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "projects", "experience", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "py-2 bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-md" 
        : "py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo/Name with animation */}
        <motion.a 
          href="#hero" 
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gray-900 dark:text-gray-50 relative">
            Jonathan
            <motion.span 
              className="absolute text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              .
            </motion.span>
          </span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="relative group py-2"
              onClick={() => setActiveSection(item.href.substring(1))}
            >
              <span className={`transition-all font-medium ${
                activeSection === item.href.substring(1)
                  ? "text-orange-500 dark:text-orange-400"
                  : "text-gray-700 dark:text-gray-300 group-hover:text-orange-500 dark:group-hover:text-orange-400"
              }`}>
                {item.name}
              </span>
              
              {/* Animated underline indicator */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-full" />
              
              {/* Active indicator */}
              {activeSection === item.href.substring(1) && (
                <motion.span 
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle with animation */}
          <motion.div whileTap={{ rotate: 180 }} transition={{ duration: 0.3 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-900" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
          
          {/* Mobile menu button with animation */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-orange-500 dark:text-orange-400" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation with enhanced animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800"
          >
            <motion.div 
              className="container mx-auto px-4 py-4 flex flex-col space-y-1"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              initial="closed"
              animate="open"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`py-3 px-4 rounded-lg flex items-center justify-between ${
                    activeSection === item.href.substring(1)
                      ? "bg-orange-50 dark:bg-gray-800/50 text-orange-500 dark:text-orange-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800/80 text-gray-700 dark:text-gray-300"
                  } transition-all font-medium`}
                  onClick={closeMobileMenu}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -20 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span>{item.name}</span>
                  <ChevronRight className={`h-4 w-4 ${
                    activeSection === item.href.substring(1)
                      ? "text-orange-500 dark:text-orange-400"
                      : "text-gray-400"
                  }`} />
                </motion.a>
              ))}
              
              {/* Contact button in mobile menu */}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -20 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="pt-4"
              >
                <a 
                  href="#contact"
                  className="w-full block text-center py-3 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
                  onClick={closeMobileMenu}
                >
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}