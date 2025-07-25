
import { useState } from "react";
import { Code, Database, Server, Cpu, GitBranch, BarChart } from "lucide-react";

const SkillsSection = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const skillCategories = [
    {
      name: "Languages",
      icon: <Code size={18} />,
      color: "text-coral-red",
      skills: [
        { name: "C++", type: "Language" },
        { name: "Python", type: "Language" },
        { name: "JavaScript", type: "Language" },
        { name: "TypeScript", type: "Language" },
        { name: "Go", type: "Language" }
      ]
    },
    {
      name: "Frameworks",
      icon: <Server size={18} />,
      color: "text-deep-teal",
      skills: [
        { name: "React", type: "Frontend Framework" },
        { name: "Node.js", type: "Backend Runtime" },
        { name: "FastAPI", type: "API Framework" },
        { name: "Discord.js", type: "Bot Framework" },
        { name: "Tailwind CSS", type: "CSS Framework" }
      ]
    },
    {
      name: "Tools & Data",
      icon: <Database size={18} />,
      color: "text-golden-sand",
      skills: [
        { name: "MongoDB", type: "Database" },
        { name: "Pandas", type: "Data Analysis" },
        { name: "NumPy", type: "Scientific Computing" },
        { name: "Git", type: "Version Control" },
        { name: "OAuth2", type: "Authentication" }
      ]
    },
    {
      name: "Concepts",
      icon: <Cpu size={18} />,
      color: "text-seafoam-mint",
      skills: [
        { name: "REST APIs", type: "Architecture" },
        { name: "Machine Learning", type: "AI/ML" },
        { name: "Data Visualization", type: "Analytics" }
      ]
    }
  ];

  const handleMouseEnter = (skillName: string) => {
    setActiveTooltip(skillName);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="bg-ivory-white p-8 rounded-2xl border border-golden-sand/20 shadow-lg">
      <h3 className="text-2xl font-display font-bold text-deep-teal mb-6">Skills & Technologies</h3>
      
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.name} className="mb-4">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-golden-sand/30">
              <span className={`${category.color}`}>{category.icon}</span>
              <h4 className={`font-semibold ${category.color}`}>{category.name}</h4>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="relative">
                  <span
                    onMouseEnter={() => handleMouseEnter(skill.name)}
                    onMouseLeave={handleMouseLeave}
                    className="px-4 py-2 bg-seafoam-mint/50 text-deep-teal rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-seafoam-mint hover:border-deep-teal/50 cursor-pointer hover:bg-seafoam-mint/70 flex items-center gap-1"
                  >
                    {skill.name}
                    <span className="w-1.5 h-1.5 rounded-full bg-deep-teal/70"></span>
                  </span>
                  
                  {activeTooltip === skill.name && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-deep-teal text-white text-xs py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap">
                      {skill.type}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-xs text-driftwood-brown/60 italic text-center">
        Hover over skills for more details
      </div>
    </div>
  );
};

export default SkillsSection;
