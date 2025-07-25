import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/core/Navigation";
import Footer from "./components/core/Footer";
import ScrollToTop from "./components/core/ScrollToTop";
import ScrollProgress from "./components/core/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-deep-teal flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-golden-sand border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-golden-sand text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-ivory-white w-full m-0 p-0 overflow-x-hidden overflow-y-auto overflow-fix">
          <ScrollProgress />
          <Navigation />
          <PageRoutes />
          <Footer />
          <ScrollToTop />
          <Analytics />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
