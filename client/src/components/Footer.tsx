import { Link } from "wouter";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 dark:bg-black text-gray-800 dark:text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Thejonathangodwin<span className="text-orange-500">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Building innovative solutions and partnerships that address Africa's most pressing challenges, creating sustainable impact across the continent.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/jonathan-godwin-43aa011b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/thejonathangodwin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-gray-800 dark:hover:text-white transition-all">About Me</Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-gray-800 dark:hover:text-white transition-all">Projects</Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-gray-800 dark:hover:text-white transition-all">Experience</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-800 dark:hover:text-white transition-all">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Projects</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-800 dark:hover:text-white transition-all">The Africa Initiative</Link></li>
              <li><Link href="#" className="hover:text-gray-800 dark:hover:text-white transition-all">Atlas Africa</Link></li>
              <li><Link href="#" className="hover:text-gray-800 dark:hover:text-white transition-all">Green Box Project</Link></li>
              <li><Link href="#" className="hover:text-gray-800 dark:hover:text-white transition-all">STEM Club</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Thejonathangodwin. Built with passion, powered by purpose.</p>
        </div>
      </div>
    </footer>
  );
}
