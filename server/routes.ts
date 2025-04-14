import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      return res.status(201).json({ success: true, data: contact });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid contact data",
          error: fromZodError(error).message 
        });
      }
      return res.status(500).json({ success: false, message: "Server error" });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(newsletterData);
      return res.status(201).json({ success: true, data: newsletter });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid newsletter data",
          error: fromZodError(error).message 
        });
      }
      return res.status(500).json({ success: false, message: "Server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
