import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  Code2,
  Database,
  Bot,
  BarChart3,
  Calendar,
  Palette,
  Brain,
  Heart,
  Search,
  X,
  Palmtree,
} from "lucide-react";
import WhatILearnedModal from "@/components/sections/WhatILearnedModal";
import AnimatedSection from "@/components/sections/AnimatedSection";
import FlyingBirdsAnimation from "@/components/sections/FlyingBirdsAnimation";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showWhatILearned, setShowWhatILearned] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      title: "Watopoly",
      description:
        "A C++ implementation of a Monopoly-style board game themed around the University of Waterloo experience.",
      technologies: [
        "C++",
        "Object-Oriented Design",
        "Observer Pattern",
        "Factory Pattern",
      ],
      github: "https://github.com/AshvinRamgo/Watoploy",
      date: "March 2025",
      category: "game-dev",
      icon: Code2,
    },
    {
      title: "NBA League Analysis",
      description:
        "Comprehensive analysis and visualization of NBA team and player data from 2000 to 2023.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-Learn",
      ],
      github: "https://github.com/AshvinRamgo/NBA_League_Analysis",
      date: "January 2025",
      category: "data-science",
      icon: BarChart3,
    },
    {
      title: "Assignment Tracker",
      description:
        "A Go command-line application for efficient assignment management with MongoDB integration.",
      technologies: ["Go", "MongoDB", "CLI", "Database Design"],
      github: "https://github.com/AshvinRamgo/Assignments_Tracker_Go",
      date: "April 2024",
      category: "backend",
      icon: Database,
    },
    {
      title: "Google Drive Backup API",
      description:
        "FastAPI-based web API that integrates with Google Drive API to automatically backup local files.",
      technologies: ["Python", "FastAPI", "Google Drive API", "OAuth2"],
      github: "https://github.com/AshvinRamgo/Google_Drive_Automatic_Backup_API",
      date: "March 2024",
      category: "backend",
      icon: Database,
    },
    {
      title: "UEFA Discord Bot",
      description:
        "JavaScript Discord bot for staying updated on the 2023-2024 UEFA League.",
      technologies: ["JavaScript", "Discord.js", "REST APIs", "Node.js"],
      github: "https://github.com/AshvinRamgo/UEFA-Discord-Bot",
      date: "January 2025",
      category: "bot",
      icon: Bot,
    },
    {
      title: "Chess Engine",
      description:
        "Advanced chess engine developed in C++ with both human and AI players.",
      technologies: ["C++", "AI/Minimax", "Game Development", "GUI Programming"],
      github: "https://github.com/AshvinRamgo/chess",
      date: "August 2024",
      category: "game-dev",
      icon: Brain,
    },
    {
      title: "NailsByTiff",
      description:
        "A modern, responsive website for a local nail salon built with React and Tailwind CSS.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Instagram API",
        "Vercel",
        "Responsive Design",
      ],
      github: "https://github.com/AshvinRamgo/n",
      date: "2024",
      category: "web-dev",
      icon: Palette,
    },
    {
      title: "Discord Bot (Mental Health)",
      description:
        "A supportive Discord bot designed to promote mental wellness in online communities.",
      technologies: [
        "JavaScript",
        "Discord.js",
        "REST APIs",
        "Community Management",
      ],
      github: "https://github.com/AshvinRamgo/Discord-Bot_MentalHealth",
      date: "2024",
      category: "bot",
      icon: Heart,
    },
    {
      title: "UWConnect",
      description:
        "A comprehensive platform for University of Waterloo students to connect, collaborate, and manage their academic journey. (Under Construction)",
      technologies: [
        "React",
        "Node.js",
        "WebSocket",
        "MongoDB",
        "Authentication",
      ],
      github: "#",
      date: "Coming Soon",
      category: "web-dev",
      icon: Code2,
      status: "under-construction",
    },
    {
      title: "TableLink",
      description:
        "A modern restaurant booking platform inspired by OpenTable. (Under Construction)",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
      ],
      github: "#",
      date: "Coming Soon",
      category: "web-dev",
      icon: Calendar,
      status: "under-construction",
    },
  ];

  const categories = [
    { id: "all", name: "All", icon: Palmtree },
    { id: "web-dev", name: "Web Dev", icon: Code2 },
    { id: "game-dev", name: "Game Dev", icon: Brain },
    { id: "data-science", name: "Data Science", icon: BarChart3 },
    { id: "backend", name: "Backend", icon: Database },
    { id: "bot", name: "Bots", icon: Bot },
  ];
  
  // Map category IDs to display names
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      selectedFilter === "all" || project.category === selectedFilter;
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const handleWhatILearnedClick = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setShowWhatILearned(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-ivory-white to-white text-driftwood-brown">
        {/* Hero Section with Gradient Background */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#d2f4f4] to-[#fff0db]">
          {/* SVG Wave Overlay */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 text-ivory-white"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                className="fill-current opacity-25"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                className="fill-current opacity-50"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="fill-current"
              ></path>
            </svg>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <AnimatedSection animation="fade-up">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-deep-teal flex items-center justify-center gap-2">
                <Palmtree className="h-8 w-8 md:h-12 md:w-12 text-golden-sand" />
                <span>My Projects</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-driftwood-brown mb-8 max-w-3xl mx-auto">
                A collection of my work, from web applications to game
                development and data analysis.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Main Content Section */}
        <section className="py-16 px-6 relative">
          {/* Flying Birds Animation */}
          <FlyingBirdsAnimation count={3} />
          
          <div className="max-w-6xl mx-auto">

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mb-12 space-y-6">
                <div className="relative max-w-md mx-auto group">
                  <Search
                    size={20}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-driftwood-brown/60 group-hover:text-deep-teal transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Search for projects like 'NBA' or 'FastAPI'..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 rounded-full border-2 border-deep-teal/50 bg-ivory-white text-driftwood-brown shadow-md focus:shadow-lg focus:border-golden-sand transition-all duration-300"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-driftwood-brown/60 hover:text-sunset-coral transition-colors duration-300"
                    >
                      <X size={16} />
                    </button>
                  )}
                  
                  {/* Subtle wave animation under search */}
                  <div className="absolute -bottom-3 left-0 w-full h-1 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-seafoam-mint via-golden-sand to-seafoam-mint bg-[length:200%_100%] animate-gradient-x"></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedFilter(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                          selectedFilter === category.id
                            ? "bg-deep-teal text-white shadow-md scale-105"
                            : "bg-seafoam-mint/30 text-deep-teal hover:bg-seafoam-mint hover:scale-105"
                        }`}
                      >
                        <Icon size={16} />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <AnimatedSection
                    key={project.title}
                    animation="scale-in"
                    delay={index * 100}
                  >
                    <Card className="overflow-hidden border-2 border-seafoam-mint/20 hover:border-seafoam-mint/50 transition-all duration-300 hover:shadow-xl group hover:-translate-y-1">
                      <CardHeader className="bg-gradient-to-r from-seafoam-mint/10 to-golden-sand/10 pb-3">
                        <div className="flex justify-between items-start mb-1">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-golden-sand rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-sm">
                              <IconComponent
                                size={20}
                                className="text-deep-teal"
                              />
                            </div>
                            <div>
                              <CardTitle className="text-deep-teal">{project.title}</CardTitle>
                              <p className="text-xs text-driftwood-brown/70 mt-1 font-medium">
                                {getCategoryName(project.category)} Project
                              </p>
                            </div>
                          </div>
                          <span className="text-sm text-driftwood-brown/80 font-medium px-2 py-1 bg-golden-sand/20 rounded-full shadow-sm">
                            {project.date}
                          </span>
                        </div>
                        <CardDescription className="text-driftwood-brown/90 mt-3">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-seafoam-mint/30 text-deep-teal text-xs rounded-full font-medium hover:bg-seafoam-mint/50 transition-colors duration-200 shadow-sm hover:shadow"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3 pt-3">
                          <Button
                            variant="secondary"
                            size="sm"
                            asChild
                            className="group relative overflow-hidden transition-all duration-300 hover:bg-deep-teal hover:text-white shadow-sm"
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-golden-sand/20 group-hover:scale-150 transition-all duration-500"></div>
                              <Github size={16} className="mr-2 relative z-10 group-hover:animate-pulse" />
                              <span className="relative z-10">Code</span>
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleWhatILearnedClick(project.title)}
                            className="group relative overflow-hidden transition-all duration-300 hover:bg-[#ff9a8b] hover:text-white shadow-sm"
                          >
                            <div className="absolute -left-12 -top-12 h-24 w-24 rounded-full bg-seafoam-mint/20 group-hover:scale-150 transition-all duration-500"></div>
                            <span className="relative z-10">What I Learned</span>
                            <Palmtree className="ml-2 h-4 w-4 relative z-10" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Wave Divider at Bottom */}
        <div className="w-full overflow-hidden">
          <svg className="w-full h-8 text-deep-teal/5" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  fill="currentColor"></path>
          </svg>
        </div>
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
