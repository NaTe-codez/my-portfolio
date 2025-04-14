import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-emerald-600 dark:text-emerald-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Interested in collaborating or learning more about my work? Reach out through the form below.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your@email.com" 
                          type="email" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Collaboration Opportunity" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project or inquiry..." 
                          rows={5} 
                          {...field} 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-opacity-90 transition-all font-medium"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:thejonathangodwin@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">
                      thejonathangodwin@gmail.com
                    </a>
                    <br />
                    <a href="mailto:jonathan@theafricainiative.com" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">
                      jonathan@theafricainiative.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Kigali, Rwanda with frequent travel across Africa
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/jonathan-godwin-43aa011b4/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/thejonathangodwin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Stay updated with my latest projects and initiatives across Africa.
              </p>
              <form 
                className="flex space-x-2"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
                  
                  if (emailInput && emailInput.value) {
                    try {
                      await apiRequest("POST", "/api/newsletter", { email: emailInput.value });
                      
                      toast({
                        title: "Success!",
                        description: "You've been subscribed to the newsletter.",
                        variant: "default",
                      });
                      
                      emailInput.value = '';
                    } catch (error) {
                      toast({
                        title: "Subscription failed",
                        description: "Please try again later.",
                        variant: "destructive",
                      });
                    }
                  }
                }}
              >
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 transition-all"
                  required
                />
                <Button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 text-white dark:bg-emerald-400 dark:text-gray-900 rounded-md hover:bg-opacity-90 transition-all font-medium"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
