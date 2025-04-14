import { useState } from "react";
import { Link } from "wouter";
import { useTheme } from "../components/ThemeProvider";
import { motion } from "framer-motion";
import { Sun, Moon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 transition-all">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#hero" className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          Jonathan<span className="text-orange-500">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#about" 
            className="hover:text-orange-500 transition-all font-medium text-gray-700 dark:text-gray-300"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="hover:text-orange-500 transition-all font-medium text-gray-700 dark:text-gray-300"
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className="hover:text-orange-500 transition-all font-medium text-gray-700 dark:text-gray-300"
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className="hover:text-orange-500 transition-all font-medium text-gray-700 dark:text-gray-300"
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? (
              <Sun className="h-6 w-6 text-gray-50" />
            ) : (
              <Moon className="h-6 w-6 text-gray-900" />
            )}
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="py-2 hover:text-orange-500 transition-all font-medium text-gray-700 dark:text-gray-300"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="py-2 hover:text-orange-500 transition-all font-medium text-gray-700 dark:text-gray-300"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="py-2 hover:text-orange-500 transition-all font-medium text-gray-700 dark:text-gray-300"
              onClick={closeMobileMenu}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="py-2 hover:text-orange-500 transition-all font-medium text-gray-700 dark:text-gray-300"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
