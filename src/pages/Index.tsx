import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/sections/AnimatedSection";
import HeroAnimation from "@/components/sections/HeroAnimation";
import RootedInStorySection from "@/components/sections/RootedInStorySection";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Check if animation has been shown in this session
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
    
    if (hasSeenAnimation) {
      // Skip animation if already seen
      setSkipAnimation(true);
      setIsNameVisible(true);
    }
  }, []);
  
  // Function to handle animation completion
  const handleAnimationComplete = () => {
    // Mark animation as seen for this session
    sessionStorage.setItem('hasSeenAnimation', 'true');
    setIsNameVisible(true);
  };

  // Mobile layout
  if (isMobile) {
    return (
      <div className="min-h-screen bg-ivory-white text-driftwood-brown">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-seafoam-mint/30 w-full m-0 p-0">
          {/* Header that appears above the animation */}
          <div className={`relative z-20 w-full pt-40 pb-8 bg-black/60 text-center transition-opacity duration-500 ${isNameVisible ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-4xl font-display font-bold mb-3 text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
              Ashvin Ramgoolam
            </h1>
            <p className="text-xl text-white font-body [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
              Software Developer & Computer Science Student
            </p>
          </div>
          
          {/* Animation in the middle - with fixed height */}
          <div className="w-full relative flex items-center justify-center" style={{ height: "30vh" }}>
            <HeroAnimation
              onComplete={handleAnimationComplete}
              skipAnimation={skipAnimation}
            />
            <div className={`absolute inset-0 bg-black/60 z-0 transition-opacity duration-500 ${isNameVisible ? "opacity-100" : "opacity-0"}`}></div>
          </div>
          
          {/* Content that appears below the animation */}
          <div className={`relative z-10 w-full bg-black/60 py-6 px-4 text-center transition-opacity duration-500 ${isNameVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="max-w-6xl mx-auto">
              <p className="text-base text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                From the vibrant shores of Trinidad and Tobago 🇹🇹 to the innovative halls of the University of Waterloo 🍁, I build impactful software with a touch of paradise.
              </p>
              <div className="flex flex-col gap-3 justify-center">
                <Link to="/projects" className="w-full">
                  <Button size="lg" className="w-full">
                    View Projects <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full">
                  <Button variant="primary" size="lg" className="w-full bg-golden-sand hover:bg-golden-sand/80 text-deep-teal font-semibold">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll Down Indicator - centered */}
          <div className="w-full flex justify-center mt-4 mb-6">
            <div
              className={`text-white animate-bounce transition-opacity duration-500 cursor-pointer z-50 ${isNameVisible ? "opacity-100" : "opacity-0"}`}
              onClick={() => document.getElementById('about-section')?.scrollIntoView()}
            >
              <div className="flex flex-col items-center bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                <span className="text-xs mb-0.5 font-semibold">Scroll Down</span>
                <ChevronDown size={24} />
              </div>
            </div>
          </div>
        </section>

        {/* Rooted in Story Section */}
        <section id="about-section" className="py-0">
          <RootedInStorySection />
        </section>
      </div>
    );
  }

  // Desktop layout (original)
  return (
    <div className="min-h-screen bg-ivory-white text-driftwood-brown">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-seafoam-mint/30 w-full m-0 p-0">
        <HeroAnimation
          onComplete={handleAnimationComplete}
          skipAnimation={skipAnimation}
        />
        <div className={`absolute inset-0 bg-black/60 z-0 transition-opacity duration-500 ${isNameVisible ? "opacity-100" : "opacity-0"}`}></div>
        <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-opacity duration-500 ${isNameVisible ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
            Ashvin Ramgoolam
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-body [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
            Software Developer & Computer Science Student
          </p>
          <p className="text-lg text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
            From the vibrant shores of Trinidad and Tobago 🇹🇹 to the innovative halls of the University of Waterloo 🍁, I build impactful software with a touch of paradise.
          </p>
          <div className="flex flex-row gap-6 justify-center">
            <Link to="/projects">
              <Button size="lg">
                View Projects <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" size="lg" className="bg-golden-sand hover:bg-golden-sand/80 text-deep-teal font-semibold">
                Contact Me
              </Button>
            </Link>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="mt-20 flex justify-center">
            <div
              className={`text-white animate-bounce transition-opacity duration-500 cursor-pointer z-50 ${isNameVisible ? "opacity-100" : "opacity-0"}`}
              onClick={() => document.getElementById('about-section')?.scrollIntoView()}
            >
              <div className="flex flex-col items-center bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-sm mb-1 font-semibold">Scroll Down</span>
                <ChevronDown size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooted in Story Section */}
      <section id="about-section" className="py-0">
        <RootedInStorySection />
      </section>
    </div>
  );
};

export default Index;
