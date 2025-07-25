import AboutHero from "@/components/sections/AboutHero";
import PassionSection from "@/components/sections/PassionSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CurrentStatusSection from "@/components/sections/CurrentStatusSection";
import HonorsSection from "@/components/sections/HonorsSection";
import AnimatedSection from "@/components/sections/AnimatedSection";
import FlyingBirdsAnimation from "@/components/sections/FlyingBirdsAnimation";

const About = () => {
  return (
    <div className="min-h-screen bg-ivory-white text-driftwood-brown">
      {/* Caribbean Hero Banner */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full bg-gradient-to-br from-yellow-200 to-teal-100 p-10 relative">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedSection animation="fade-up">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-teal-900">
                  Rooted in Islands. Reaching in Tech.
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 font-body">
                  Discover my journey, skills, and passions through a Caribbean lens.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
        
        {/* Wave Divider - now part of the hero section */}
        <div className="w-full overflow-hidden">
          <svg className="w-full h-8 text-yellow-200" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-0 pb-10 relative -mt-2">
        {/* Flying Birds Animation */}
        <FlyingBirdsAnimation count={6} />
        
        {/* Background pattern - simple white background */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-8">
              <AnimatedSection animation="fade-up" delay={200}>
                <AboutHero />
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={400}>
                <PassionSection />
              </AnimatedSection>
            </div>
            <div className="space-y-8">
              <AnimatedSection animation="fade-up" delay={600}>
                <SkillsSection />
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={800}>
                <CurrentStatusSection />
              </AnimatedSection>
            </div>
          </div>
          <AnimatedSection animation="fade-up" delay={1000}>
            <HonorsSection />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
