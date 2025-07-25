import InternshipTimeline from "@/components/sections/InternshipTimeline";
import { Button } from "@/components/ui/button";
import { Download, Eye, Palmtree, FileText } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

const Experience = () => {
  const handleResumePreview = () => {
    window.open(
      "https://drive.google.com/file/d/1ZZ9UDeunxboXbwUptCNN6J-fLU0iqdbe/view",
      "_blank"
    );
  };

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1ZZ9UDeunxboXbwUptCNN6J-fLU0iqdbe/view",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-ivory-white text-driftwood-brown">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#d2f4f4] to-[#fff0db]">
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-deep-teal">
              🌊 Milestones Along My Journey
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-2xl md:text-3xl text-driftwood-brown mb-8 font-body">
              Explore my professional voyage, from island roots to tech adventures.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleResumePreview}
                size="lg"
                className="group relative overflow-hidden transition-all duration-300 hover:bg-orange-100 hover:scale-105"
              >
                <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-golden-sand/20 group-hover:scale-150 transition-all duration-500"></div>
                <FileText className="mr-2 relative z-10" />
                <span className="relative z-10">Preview Resume</span>
                <Palmtree className="ml-2 h-4 w-4 relative z-10" />
              </Button>
              <Button
                onClick={handleResumeDownload}
                variant="secondary"
                size="lg"
                className="group relative overflow-hidden transition-all duration-300 hover:bg-orange-100 hover:scale-105"
              >
                <div className="absolute -left-12 -top-12 h-24 w-24 rounded-full bg-golden-sand/20 group-hover:scale-150 transition-all duration-500"></div>
                <Download className="mr-2 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
                <span className="ml-2 relative z-10">🏝️</span>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection animation="fade-up" delay={200}>
            <InternshipTimeline />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Experience;
