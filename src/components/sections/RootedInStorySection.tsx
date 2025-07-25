import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/sections/AnimatedSection";
import EnhancedPalmTreeAnimation from "@/components/sections/EnhancedPalmTreeAnimation";
import FASAnimation from "@/components/sections/FASAnimation";
import { Code, Users, Briefcase, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const RootedInStorySection = () => {
  const quickLinks = [
    { to: "/about", icon: Users, title: "About Me", description: "Learn about my journey and passions." },
    { to: "/experience", icon: Briefcase, title: "Experience", description: "Explore my professional and academic background." },
    { to: "/projects", icon: Code, title: "Projects", description: "View my portfolio of work." },
    { to: "/contact", icon: Mail, title: "Contact", description: "Get in touch with me." },
  ];

  return (
    <section className="py-20 rooted-section">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16 flex items-center justify-center">
            <div>
              <EnhancedPalmTreeAnimation
                position="left"
                scale={1.3}
                addBounceEffect={true}
                className="mr-4"
                hideOnMobile={true}
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-deep-teal">
                🌴 Rooted in Story, Driven by Skill
              </h2>
              <p className="text-xl text-driftwood-brown/80 max-w-3xl mx-auto">
                From my journey to my craft — here's how it all comes together.
              </p>
            </div>
            <div>
              <EnhancedPalmTreeAnimation
                position="right"
                scale={1.3}
                addBounceEffect={true}
                className="ml-4"
                hideOnMobile={true}
              />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: About Me */}
          <AnimatedSection animation="slide-right">
            <div className="bg-sand-beige/30 p-8 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmNWY1ZGMiPjwvcmVjdD4KPC9zdmc+')] opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-deep-teal">About Me</h3>
                <p className="mb-4">
                  I am a passionate developer with a love for creating elegant and efficient solutions to complex problems. My journey in tech is driven by a desire to learn, innovate, and contribute to meaningful projects.
                </p>
                <p className="mb-4">
                  From the vibrant shores of Trinidad and Tobago to the innovative halls of the University of Waterloo, I bring a unique perspective to every project I undertake.
                </p>
                <p className="text-deep-teal font-semibold italic">
                  "My roots are deep — in culture, in code, and in curiosity."
                </p>
              </div>
              <div className="flex justify-center mt-6 relative" style={{ height: "200px", overflow: "visible" }}>
                <FASAnimation />
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side: My Work */}
          <AnimatedSection animation="slide-left">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-deep-teal">Dive Deeper</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickLinks.map((item, index) => (
                  <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                    <Link to={item.to} className="group">
                      <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 mx-auto rounded-full bg-golden-sand flex items-center justify-center mb-2">
                            <item.icon size={32} className="text-deep-teal" />
                          </div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-center text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default RootedInStorySection;