
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Watopoly",
      description: "A C++ implementation of a Monopoly-style board game themed around the University of Waterloo experience. Features dynamic 40-square board, text-based display, and gameplay mechanics faithful to the original Monopoly with UW-specific themes.",
      image: `https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=800&q=80`,
      technologies: ["C++", "Object-Oriented Design", "Observer Pattern", "Factory Pattern"],
      github: "https://github.com/AshvinRamgo/Watoploy",
      demo: "#"
    },
    {
      title: "NBA League Analysis",
      description: "Comprehensive analysis and visualization of NBA team and player data from 2000 to 2023. Includes data cleaning, exploration, and visualization using advanced statistical methods and machine learning techniques.",
      image: `https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80`,
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
      github: "https://github.com/AshvinRamgo/NBA_League_Analysis",
      demo: "#"
    },
    {
      title: "Chess Engine",
      description: "Advanced chess engine developed in C++ with both human and AI players. Features sophisticated AI opponent using layered difficulty strategies (Minimax) and provides both textual and graphical interfaces.",
      image: `https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80`,
      technologies: ["C++", "AI/Minimax", "Game Development", "GUI Programming"],
      github: "https://github.com/AshvinRamgo/chess",
      demo: "#"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            design, and problem-solving.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group overflow-hidden border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? `animate-fade-in` : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-cyan-300 text-sm rounded-full font-medium border border-blue-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 flex items-center gap-2 bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-3 rounded-full bg-transparent"
              asChild
            >
              <a href="https://github.com/AshvinRamgo" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
