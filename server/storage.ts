import { 
  users, type User, type InsertUser,
  contacts, type Contact, type InsertContact,
  newsletters, type Newsletter, type InsertNewsletter
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact operations
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Newsletter operations
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletters(): Promise<Newsletter[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Contact operations
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contacts).values({
      ...insertContact,
      createdAt: new Date().toISOString()
    }).returning();
    
    return contact;
  }
  
  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }
  
  // Newsletter operations
  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const [existingNewsletter] = await db
      .select()
      .from(newsletters)
      .where(eq(newsletters.email, insertNewsletter.email));
    
    if (existingNewsletter) {
      return existingNewsletter; // Return existing if already subscribed
    }
    
    const [newsletter] = await db.insert(newsletters).values({
      ...insertNewsletter,
      createdAt: new Date().toISOString()
    }).returning();
    
    return newsletter;
  }
  
  async getNewsletters(): Promise<Newsletter[]> {
    return await db.select().from(newsletters);
  }
}

export const storage = new DatabaseStorage();
