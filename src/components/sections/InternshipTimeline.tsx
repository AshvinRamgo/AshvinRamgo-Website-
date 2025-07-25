
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// SVG Wave Separator Component
const WaveSeparator = () => (
  <div className="text-seafoam-mint/30 w-full h-12 overflow-hidden">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      className="h-full w-full"
    >
      <path
        d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        className="fill-current"
      ></path>
    </svg>
  </div>
);

const InternshipTimeline = () => {
  const internships = [
    {
      company: "Propel Holdings",
      position: "Quality Assurance Analyst Intern",
      duration: "May 2025 - Aug 2025",
      location: "Toronto, ON (Hybrid)",
      description: "Designed and executed comprehensive manual and automated test cases to validate features across financial web platforms.",
      achievements: [
        "Designed and executed comprehensive manual and automated test cases to validate features across financial web platforms",
        "Collaborated with QA engineers and developers to triage, reproduce, and resolve defects, contributing to faster release cycles",
        "Conducted exploratory and regression testing to ensure compliance with business logic and user flows",
        "Documented test plans, bug reports, and test execution results using tools like Jira, TestRail, and Confluence",
        "Participated in sprint ceremonies and cross-functional team discussions to prioritize test coverage and improve application resilience"
      ]
    },
    {
      company: "UWaterloo Blueprint",
      position: "Director Lead",
      duration: "May 2025 - Present",
      location: "Waterloo, ON, Canada",
      description: "Leading internal strategy and operations for a 60+ member student organization building real-world apps for nonprofits, supporting 5 developer teams across product, design, and engineering.",
      achievements: [
        "Lead internal strategy and operations for a 60+ member student organization",
        "Support 5 developer teams across product, design, and engineering",
        "Relaunched the Medium blog, publishing project spotlights that reached over 200 unique readers in the 1st quarter"
      ]
    },
    {
      company: "UW Blueprint",
      position: "Internal Director",
      duration: "Jan 2025 - Apr 2025",
      location: "University of Waterloo",
      description: "Led internal operations for a 30+ member student-run product team, supporting project success and team wellness across engineering, design, and product.",
      achievements: [
        "Led internal operations for a 30+ member student-run product team, supporting project success and team wellness across engineering, design, and product",
        "Organized social bonding events and weekly check-ins to build team morale and foster a strong community culture",
        "Collaborated with executive team to gather feedback, identify pain points, and implement strategic improvements across internal processes"
      ]
    },
    {
      company: "Zoocasa",
      position: "QA Automation Developer",
      duration: "Sep 2024 - Dec 2024",
      location: "Toronto, ON, Canada",
      description: "Worked on automated testing and quality assurance for real estate technology platform, focusing on performance optimization and test coverage improvements.",
      achievements: [
        "Debugged, improved & implemented 150+ previously failing automated performance tests using Playwright",
        "Executed comprehensive manual testing for 50+ feature tickets across web and mobile applications",
        "Implemented integration tests in Go for backend search feature, increasing test coverage by 16%"
      ]
    },
    {
      company: "Naparima College - Interact Club",
      position: "President",
      duration: "Sep 2021 - Jun 2023",
      location: "Trinidad and Tobago",
      description: "Led student organization focused on community service and international peace initiatives, managing large-scale programs and fundraising efforts.",
      achievements: [
        "Oversaw 150 students (ages 12-19), certifying 10% as International Peacebuilders as a Youth Peace Ambassador",
        "Orchestrated outreach programs and textbook drives distributing 150+ books",
        "Led fundraiser raising $14,500 with 48% profit margin"
      ]
    }
  ];

  // Caribbean-themed icons for each job
  const getJobIcon = (index) => {
    const icons = ["🌴", "🌞", "🐚", "🏝️", "🥥"];
    return icons[index % icons.length];
  };

  // Personality reflection quotes
  const reflectionQuotes = [
    "From island roots to urban sprints, every stop shaped my hustle.",
    "Learned to debug bugs and barbecue bad code 🌶️",
    "Bringing Caribbean sunshine to every tech challenge!",
    "Coding with island vibes and global ambitions.",
    "Where tropical creativity meets technical precision."
  ];

  // Reference to the scrollable container, section, and boat
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const boatRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  
  // State to track boat position
  const [boatPosition, setBoatPosition] = useState(0);
  
  // Set up scroll event handling for boat movement
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && boatRef.current && pathRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const pathWidth = pathRef.current.clientWidth;
        
        // Calculate boat position based on scroll percentage
        const scrollPercentage = container.scrollLeft / maxScroll;
        const newPosition = Math.min(pathWidth * scrollPercentage, pathWidth - 30); // 30px offset to keep boat visible
        
        // Update boat position
        setBoatPosition(newPosition);
      }
    };
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="mb-16 bg-gradient-to-b from-[#d2f4f4] to-[#fff0db] py-8 relative">
      {/* Full width container with negative margins */}
      <div className="absolute inset-0 w-screen left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#d2f4f4] to-[#fff0db] -z-10"></div>
      
      {/* Wave separator at top */}
      <WaveSeparator />
      
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6 text-deep-teal">
        🚤 Sailing Through My Tech Voyage
      </h2>
      
      {/* Floating boat/map route visualization */}
      <div className="relative h-8 max-w-2xl mx-auto mb-8">
        <div ref={pathRef} className="absolute w-full h-0.5 bg-deep-teal/30 top-1/2 transform -translate-y-1/2"></div>
        <div
          ref={boatRef}
          className="absolute w-6 h-6 text-xl"
          style={{
            left: `${boatPosition}px`,
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'left 0.3s ease-out'
          }}
        >
          🚢
        </div>
      </div>
      
      {/* Mobile swipe hint - only visible on mobile */}
      <div className="md:hidden text-center mb-4 text-deep-teal/80 animate-pulse">
        <div className="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-swipe-right">
            <path d="M12 8a4 4 0 0 1 4 4" />
            <path d="M16 12a4 4 0 0 1-4 4" />
            <path d="M8 17.8A6 6 0 0 1 6 12a6 6 0 0 1 6-6c1.6 0 3.2.8 4.2 2" />
            <path d="M18 2h4v4" />
            <path d="M18 6l4-4" />
          </svg>
          <span className="text-sm font-medium">Swipe left to see more experiences</span>
        </div>
      </div>
      
      {/* Scrollable timeline container - allows both horizontal and vertical scrolling */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto overflow-y-auto max-h-[600px] pb-4 w-screen left-1/2 transform -translate-x-1/2 relative"
      >
        <div className="flex space-x-8 snap-x snap-mandatory px-8 py-4 mx-auto" style={{ width: 'max-content', minWidth: '100%' }}>
          {internships.map((internship, index) => (
            <div
              key={index}
              className="min-w-[350px] md:min-w-[500px] snap-center flex-shrink-0"
              style={{ scrollSnapAlign: 'center' }}
            >
              <Card className="bg-ivory-white border-golden-sand/20 hover:border-golden-sand/50 transition-all duration-300 shadow-lg h-full">
                <CardContent className="p-6">
                  {/* Caribbean-themed icon */}
                  <div className="text-3xl mb-3">{getJobIcon(index)}</div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-golden-sand/20 rounded-lg">
                      <Briefcase size={20} className="text-deep-teal" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-deep-teal">{internship.position}</h4>
                      <p className="text-driftwood-brown font-medium">{internship.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-driftwood-brown/70 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{internship.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-driftwood-brown/90 text-sm leading-relaxed mb-4">
                    {internship.description}
                  </p>
                  
                  <div>
                    <h5 className="text-deep-teal font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-1.5">
                      {internship.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-golden-sand rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-driftwood-brown/90 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Personality reflection quote */}
                  <div className="mt-4 pt-4 border-t border-golden-sand/20 italic text-deep-teal/80 text-sm">
                    "{reflectionQuotes[index % reflectionQuotes.length]}"
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave separator at bottom */}
      <WaveSeparator />
    </div>
  );
};

export default InternshipTimeline;
