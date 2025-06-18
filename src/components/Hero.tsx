import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              AR
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ashvin Ramgoolam
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Full-Stack Developer • Problem Solver • Tech Innovator
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about crafting elegant solutions to complex problems. Currently pursuing Computer Science at the University of Waterloo, 
            where I combine academic excellence with practical software development experience. Seeking opportunities to create impactful 
            technology solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View My Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/AshvinRamgo", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ashvin-ramgoolam/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:a2ramgoo@uwaterloo.ca", label: "Email" },
              { icon: Phone, href: "tel:+14376677759", label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label === "GitHub" || label === "LinkedIn" ? "_blank" : undefined}
                rel={label === "GitHub" || label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-cyan-400 transition-colors duration-300"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
