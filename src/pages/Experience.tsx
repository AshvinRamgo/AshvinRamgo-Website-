/**
 * Experience and Resume page component.
 * Features:
 * - Professional experience timeline
 * - Resume preview and download functionality
 * - Detailed internship and leadership roles
 * - Skills and achievements showcase
 */

import { useEffect, useRef, useState } from "react";
import InternshipTimeline from "@/components/InternshipTimeline";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleResumePreview = () => {
    window.open('https://drive.google.com/file/d/1ZZ9UDeunxboXbwUptCNN6J-fLU0iqdbe/view', '_blank');
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1ZZ9UDeunxboXbwUptCNN6J-fLU0iqdbe/view', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <section ref={sectionRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experience & Resume
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Explore my professional journey, internships, and leadership roles that have shaped my career.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleResumePreview}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Eye className="mr-2" size={20} />
                  Preview Resume
                </Button>
                <Button
                  onClick={handleResumeDownload}
                  variant="outline"
                  className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </div>
            </div>

            <InternshipTimeline />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
