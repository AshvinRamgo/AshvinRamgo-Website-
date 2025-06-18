
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        My Experience Journey
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
        
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-8`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
              
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all duration-300 ml-12 md:ml-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                        <Briefcase size={18} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400">{internship.position}</h4>
                        <p className="text-slate-300 font-medium">{internship.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-slate-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {internship.description}
                    </p>
                    
                    <div>
                      <h5 className="text-slate-200 font-medium mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {internship.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-slate-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipTimeline;
