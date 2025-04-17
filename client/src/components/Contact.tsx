import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
        </div>

        <motion.div
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-0.5 shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:thejonathangodwin@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      thejonathangodwin@gmail.com
                    </a>
                    <br />
                    <a
                      href="mailto:jonathan@theafricainiative.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      jonathan@theafricainiative.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-0.5 shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Kigali, Rwanda<br />Frequent travel across Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">Connect on Social Media</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/jonathan-godwin-43aa011b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </a>
                <a
                  href="https://www.instagram.com/thejonathangodwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
