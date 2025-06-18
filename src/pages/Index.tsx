/**
 * Main landing page component for the portfolio website.
 * Features:
 * - Hero section with personal introduction
 * - Skills and expertise overview
 * - Quick links to other sections
 * - Social media and contact links
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail, Phone, Code, Database, Palette, Trophy, Users, Lightbulb, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable applications with modern tech stacks including React, TypeScript, Node.js, and Go.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transforming raw data into insights using Python, Pandas, and machine learning techniques.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, responsive interfaces with Tailwind CSS and modern design principles.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Trophy,
      title: "Problem Solving",
      description: "Tackling complex challenges with clean architecture and innovative solutions.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "8", label: "Technologies Mastered" },
    { number: "2+", label: "Years Coding" },
    { number: "100%", label: "Passion for Tech" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section with Parallax */}
      <ParallaxSection speed={0.3}>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <AnimatedSection animation="scale-in">
              <div className="mb-8">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-pulse">
                  AR
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.1] py-2">
                Ashvin Ramgoolam
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-2xl md:text-3xl text-slate-200 mb-6 font-light">
                Computer Science Student & Software Developer
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={600}>
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                From Trinidad and Tobago 🇹🇹 to the University of Waterloo 🍁 - 
                Passionate about building innovative solutions that make a real-world impact.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="scale-in" delay={800}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl text-lg"
                  >
                    View My Work <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-lg backdrop-blur-sm"
                  >
                    Let's Connect <Users className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={1000}>
              <div className="flex justify-center space-x-8">
                {[
                  { icon: Github, href: "https://github.com/AshvinRamgo", label: "GitHub", color: "hover:text-gray-400" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ashvin-ramgoolam/", label: "LinkedIn", color: "hover:text-blue-400" },
                  { icon: Mail, href: "mailto:a2ramgoo@uwaterloo.ca", label: "Email", color: "hover:text-green-400" },
                  { icon: Phone, href: "tel:+14376677759", label: "Phone", color: "hover:text-purple-400" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "GitHub" || label === "LinkedIn" ? "_blank" : undefined}
                    rel={label === "GitHub" || label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className={`p-4 rounded-full bg-slate-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-slate-300 ${color}`}
                    aria-label={label}
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </ParallaxSection>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-300 text-lg">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What I Do Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                What I Do
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                I specialize in creating innovative software solutions that bridge the gap between complex problems and elegant user experiences.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-slate-200 text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <AnimatedSection>
        <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Explore My World
                </h2>
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { to: "/about", icon: Users, title: "About Me", description: "Learn about my journey from Trinidad and Tobago to the University of Waterloo.", color: "cyan" },
                { to: "/experience", icon: Briefcase, title: "Experience & Resume", description: "Explore my internships, leadership roles, and professional growth timeline.", color: "orange" },
                { to: "/projects", icon: Code, title: "My Projects", description: "Explore my portfolio of full-stack applications and innovative solutions.", color: "purple" },
                { to: "/contact", icon: Mail, title: "Get In Touch", description: "Ready to collaborate? Let's discuss opportunities together.", color: "green" }
              ].map((item, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                  <Link to={item.to} className="group">
                    <Card className={`bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-${item.color}-500/50 transition-all duration-300 hover:scale-105 cursor-pointer h-full`}>
                      <CardHeader className="text-center">
                        <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color === 'orange' ? 'red' : item.color === 'cyan' ? 'blue' : item.color === 'purple' ? 'pink' : 'emerald'}-500 flex items-center justify-center mb-4`}>
                          <item.icon size={40} className="text-white" />
                        </div>
                        <CardTitle className="text-slate-200 text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-300 text-center text-sm">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30">
              <AnimatedSection animation="scale-in">
                <Lightbulb size={60} className="text-cyan-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-6">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with fellow innovators. 
                  Whether you have an idea or an opportunity, let's make it happen!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/projects">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      See My Work
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
                    >
                      Start a Conversation
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Index;
