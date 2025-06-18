
import { Award, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const HonorsSection = () => {
  const honors = [
    {
      title: "2023 Trinidad and Tobago Open Natural Science Scholarship",
      issuer: "Government of Trinidad & Tobago",
      date: "Dec 2023",
      description: "Awarded 1 of 5 Open Natural Science Scholarships out of 10,000 eligible students from the Government of T&T for a fully funded tertiary education"
    },
    {
      title: "Merit List - CAPE (A-Levels)",
      issuer: "CXC",
      date: "Nov 2023",
      description: "Ranked 1st in the Caribbean in Physics, 5th in Pure Mathematics and locally 13th in Chemistry."
    },
    {
      title: "Math Global Scholarship",
      issuer: "University of Waterloo",
      date: "Sep 2023",
      description: "Recipient of 1 of 10 UWaterloo's Math Global Scholarships"
    },
    {
      title: "President's Scholarship of Distinction",
      issuer: "University of Waterloo",
      date: "Sep 2023",
      description: "Recipient of UWaterloo's Entrance Scholarship for a grade over 95%"
    },
    {
      title: "Merit List - CSEC (O-Levels)",
      issuer: "CXC",
      date: "Feb 2022",
      description: "Ranked 1st in the Caribbean in Physics, 2nd in Chemistry, 3rd in Mathematics, 4th in Biology and 8th in Additional Mathematics"
    }
  ];

  return (
    <AnimatedSection className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
          <Trophy size={20} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Honors & Awards</h2>
      </div>

      <div className="space-y-6">
        {honors.map((honor, index) => (
          <div key={index} className="border-l-2 border-gradient-to-b from-yellow-400 to-orange-400 pl-6 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
            
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-100 leading-tight">
                  {honor.title}
                </h3>
                <Award size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>{honor.issuer}</span>
                <span>•</span>
                <span>{honor.date}</span>
              </div>
              
              <p className="text-slate-300 leading-relaxed">
                {honor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default HonorsSection;
