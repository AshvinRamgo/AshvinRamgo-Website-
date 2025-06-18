/**
 * Projects showcase page component.
 * Features:
 * - Filterable project grid with categories
 * - Project cards with detailed information
 * - GitHub links and "What I Learned" modal
 * - Under construction status indicators
 */

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, Database, Bot, BarChart3, Calendar, Palette, Brain, Heart, Search, Filter } from "lucide-react";
import WhatILearnedModal from "@/components/WhatILearnedModal";
import AnimatedSection from "@/components/AnimatedSection";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showWhatILearned, setShowWhatILearned] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
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
      technologies: ["C++", "Object-Oriented Design", "Observer Pattern", "Factory Pattern"],
      github: "https://github.com/AshvinRamgo/Watoploy",
      date: "March 2025",
      category: "game-dev",
      icon: Code2,
      features: [
        "Supports up to 6 players with unique tokens",
        "ASCII-rendered board with live updates",
        "Property system with Academic Buildings, Residences, and Gyms",
        "Save/Load functionality and testing mode"
      ]
    },
    {
      title: "NBA League Analysis",
      description: "Comprehensive analysis and visualization of NBA team and player data from 2000 to 2023. Includes data cleaning, exploration, and visualization using advanced statistical methods and machine learning techniques.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
      github: "https://github.com/AshvinRamgo/NBA_League_Analysis",
      date: "January 2025",
      category: "data-science",
      icon: BarChart3,
      features: [
        "Analysis of 23 years of NBA data",
        "Linear regression for trend identification",
        "Team performance and player statistics visualization",
        "Comprehensive statistical insights and reporting"
      ]
    },
    {
      title: "Assignment Tracker",
      description: "A Go command-line application for efficient assignment management with MongoDB integration. Features comprehensive assignment tracking, sorting, and file export capabilities.",
      technologies: ["Go", "MongoDB", "CLI", "Database Design"],
      github: "https://github.com/AshvinRamgo/Assignments_Tracker_Go",
      date: "April 2024",
      category: "backend",
      icon: Database,
      features: [
        "Add, list, edit, and delete assignments",
        "Mark assignments as complete",
        "Sort by completion status and due date",
        "Export assignments to file"
      ]
    },
    {
      title: "Google Drive Backup API",
      description: "FastAPI-based web API that integrates with Google Drive API to automatically backup local files to specified Google Drive folders. Features authentication and file management capabilities.",
      technologies: ["Python", "FastAPI", "Google Drive API", "OAuth2"],
      github: "https://github.com/AshvinRamgo/Google_Drive_Automatic_Backup_API",
      date: "March 2024",
      category: "backend",
      icon: Database,
      features: [
        "Automatic file backup to Google Drive",
        "Google OAuth2 authentication",
        "File upload and update management",
        "RESTful API design"
      ]
    },
    {
      title: "UEFA Discord Bot",
      description: "JavaScript Discord bot for staying updated on the 2023-2024 UEFA League. Provides live match scores, upcoming fixtures, and detailed match events through intuitive slash commands.",
      technologies: ["JavaScript", "Discord.js", "REST APIs", "Node.js"],
      github: "https://github.com/AshvinRamgo/UEFA-Discord-Bot",
      date: "January 2025",
      category: "bot",
      icon: Bot,
      features: [
        "Live match score updates",
        "Upcoming fixtures display",
        "Match events tracking",
        "Slash command integration"
      ]
    },
    {
      title: "Chess Engine",
      description: "Advanced chess engine developed in C++ with both human and AI players. Features sophisticated AI opponent using layered difficulty strategies (Minimax) and provides both textual and graphical interfaces.",
      technologies: ["C++", "AI/Minimax", "Game Development", "GUI Programming"],
      github: "https://github.com/AshvinRamgo/chess",
      date: "August 2024",
      category: "game-dev",
      icon: Brain,
      features: [
        "Advanced rules like en passant & castling",
        "AI opponent with multiple difficulty levels",
        "Both textual and graphical interfaces",
        "Real-time visual feedback and testing"
      ]
    },
    {
      title: "NailsByTiff",
      description: "A modern, responsive website for a local nail salon built with React and Tailwind CSS. Features include Instagram feed integration, online booking system, and a beautiful UI that reflects the salon's brand identity. Successfully deployed on Vercel with optimized performance.",
      technologies: ["React", "Tailwind CSS", "Instagram API", "Vercel", "Responsive Design"],
      github: "https://github.com/AshvinRamgo/n",
      date: "2024",
      category: "web-dev",
      icon: Palette,
      features: [
        "Modern, responsive UI with custom animations",
        "Instagram feed integration for showcasing work",
        "Online booking system with real-time availability",
        "Performance optimized for fast loading"
      ]
    },
    {
      title: "Discord Bot (Mental Health)",
      description: "A supportive Discord bot designed to promote mental wellness in online communities. Features include daily inspirational quotes, wellness resources, and community engagement tools. Built with Discord.js and integrated with various APIs for content delivery.",
      technologies: ["JavaScript", "Discord.js", "REST APIs", "Community Management"],
      github: "https://github.com/AshvinRamgo/Discord-Bot_MentalHealth",
      date: "2024",
      category: "bot",
      icon: Heart,
      features: [
        "Daily inspirational quotes and wellness tips",
        "Community engagement and support tools",
        "Resource sharing and mental health information",
        "Custom commands for community interaction"
      ]
    },
    {
      title: "UWConnect",
      description: "A comprehensive platform for University of Waterloo students to connect, collaborate, and manage their academic journey. Features include schedule matching, real-time chat, and study group formation. (Under Construction)",
      technologies: ["React", "Node.js", "WebSocket", "MongoDB", "Authentication"],
      github: "#",
      date: "Coming Soon",
      category: "web-dev",
      icon: Code2,
      features: [
        "Smart schedule matching algorithm",
        "Real-time chat and notifications",
        "Study group formation and management",
        "Academic resource sharing"
      ],
      status: "under-construction"
    },
    {
      title: "TableLink",
      description: "A modern restaurant booking platform inspired by OpenTable. Features include real-time table availability, instant booking confirmation, and restaurant management tools. Built with React, TypeScript, and Tailwind CSS. (Under Construction)",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      github: "#",
      date: "Coming Soon",
      category: "web-dev",
      icon: Calendar,
      features: [
        "Real-time table availability tracking",
        "Instant booking and confirmation system",
        "Restaurant management dashboard",
        "User reviews and ratings"
      ],
      status: "under-construction"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", color: "bg-blue-500" },
    { id: "web-dev", name: "Web Development", color: "bg-green-500" },
    { id: "game-dev", name: "Game Development", color: "bg-purple-500" },
    { id: "data-science", name: "Data Science", color: "bg-orange-500" },
    { id: "backend", name: "Backend/API", color: "bg-red-500" },
    { id: "bot", name: "Bots", color: "bg-cyan-500" },
    { id: "under-construction", name: "Under Construction", color: "bg-yellow-500" }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === "all" || 
      (selectedFilter === "under-construction" ? project.status === "under-construction" : project.category === selectedFilter);
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const handleWhatILearnedClick = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setShowWhatILearned(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <section ref={sectionRef} className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Projects
              </h1>
              
              <p className="text-xl text-slate-300 text-center mb-8 max-w-3xl mx-auto">
                A collection of software projects showcasing my skills in various programming languages, 
                frameworks, and technologies. From game development to data analysis and web applications.
              </p>
            </AnimatedSection>

            {/* Search and Filter Controls */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mb-8 space-y-4">
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search projects or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-full text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                {/* Filter Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedFilter(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        selectedFilter === category.id
                          ? `${category.color} text-white border-transparent shadow-lg`
                          : "bg-slate-800/50 text-slate-300 border-slate-600 hover:bg-slate-700/50"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <AnimatedSection key={project.title} animation="scale-in" delay={index * 100}>
                    <Card className="group overflow-hidden border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                              <IconComponent size={20} className="text-white" />
                            </div>
                            <CardTitle className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                              {project.title}
                              {project.status === "under-construction" && (
                                <span className="ml-2 text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                                  Under Construction
                                </span>
                              )}
                            </CardTitle>
                          </div>
                          <span className="text-sm text-slate-400 font-medium">{project.date}</span>
                        </div>
                        <CardDescription className="text-slate-300 leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-200">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm text-slate-300">
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
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
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleWhatILearnedClick(project.title)}
                            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 flex items-center gap-2 bg-transparent"
                          >
                            What I Learned
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
            
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-3 rounded-full bg-transparent"
                  asChild
                >
                  <a href="https://github.com/AshvinRamgo" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={20} />
                    View All Projects on GitHub
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <WhatILearnedModal 
        open={showWhatILearned} 
        onOpenChange={setShowWhatILearned}
        selectedProject={selectedProject}
      />
    </>
  );
};

export default Projects;
