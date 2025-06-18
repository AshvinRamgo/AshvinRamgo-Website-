
import { useEffect, useRef, useState } from "react";
import AboutHero from "@/components/AboutHero";
import PassionSection from "@/components/PassionSection";
import SkillsSection from "@/components/SkillsSection";
import CurrentStatusSection from "@/components/CurrentStatusSection";
import HonorsSection from "@/components/HonorsSection";

const About = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <section ref={sectionRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div className="space-y-6">
                <AboutHero />
                <PassionSection />
              </div>
              
              <div className="space-y-6">
                <SkillsSection />
                <CurrentStatusSection />
              </div>
            </div>

            <HonorsSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
