import { createContext, useContext, useEffect, useState } from "react";

// Define the theme types
export type Theme = "dark" | "light";

// Define context type
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {}
});

// Props type for ThemeProvider component
type ThemeProviderProps = {
  children: React.ReactNode;
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize theme state with user preference or system preference
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme) {
        return savedTheme;
      }
      
      // Check system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    
    // Default to light theme
    return "light";
  });

  // Update document class and localStorage when theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      
      // Remove both classes and add the current theme
      root.classList.remove("dark", "light");
      root.classList.add(theme);
      
      // Save preference to localStorage
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provide theme context to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
