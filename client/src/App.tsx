import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { AnimatePresence, motion } from "framer-motion";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  // useLocation to get current path for AnimatePresence key
  const [location] = useLocation();

  // simple fade + slide animation
  const variants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };
  const transition = { duration: 0.4, ease: "easeInOut" };

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial="initial"
          animate="in"
          exit="out"
          variants={variants}
          transition={transition}
          className="min-h-screen"
        >
          <Router />
        </motion.div>
      </AnimatePresence>
      <Toaster />
    </QueryClientProvider>
  );
}
