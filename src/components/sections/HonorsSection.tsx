
import { Award, Trophy, Medal, GraduationCap, Flag } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useEffect, useRef } from "react";

const HonorsSection = () => {
  const honors = [
    {
      title: "2023 Trinidad and Tobago Open Natural Science Scholarship",
      issuer: "Government of Trinidad & Tobago",
      date: "Dec 2023",
      description: "Awarded 1 of 5 Open Natural Science Scholarships out of 10,000 eligible students from the Government of T&T for a fully funded tertiary education",
      icon: <Trophy size={24} />,
      type: "International",
      color: "bg-gradient-to-br from-golden-sand to-amber-300"
    },
    {
      title: "Merit List - CAPE (A-Levels)",
      issuer: "CXC",
      date: "Nov 2023",
      description: "Ranked 1st in the Caribbean in Physics, 5th in Pure Mathematics and locally 13th in Chemistry.",
      icon: <Medal size={24} />,
      type: "Academic",
      color: "bg-gradient-to-br from-deep-teal to-teal-400"
    },
    {
      title: "Math Global Scholarship",
      issuer: "University of Waterloo",
      date: "Sep 2023",
      description: "Recipient of 1 of 10 UWaterloo's Math Global Scholarships",
      icon: <GraduationCap size={24} />,
      type: "Academic",
      color: "bg-gradient-to-br from-deep-teal to-teal-400"
    },
    {
      title: "President's Scholarship of Distinction",
      issuer: "University of Waterloo",
      date: "Sep 2023",
      description: "Recipient of UWaterloo's Entrance Scholarship for a grade over 95%",
      icon: <Award size={24} />,
      type: "Academic",
      color: "bg-gradient-to-br from-deep-teal to-teal-400"
    },
    {
      title: "Merit List - CSEC (O-Levels)",
      issuer: "CXC",
      date: "Feb 2022",
      description: "Ranked 1st in the Caribbean in Physics, 2nd in Chemistry, 3rd in Mathematics, 4th in Biology and 8th in Additional Mathematics",
      icon: <Flag size={24} />,
      type: "International",
      color: "bg-gradient-to-br from-golden-sand to-amber-300"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.honor-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Group honors by type
  const groupedHonors = honors.reduce((acc, honor) => {
    if (!acc[honor.type]) {
      acc[honor.type] = [];
    }
    acc[honor.type].push(honor);
    return acc;
  }, {} as Record<string, typeof honors>);

  return (
    <div ref={sectionRef}>
      <AnimatedSection className="bg-ivory-white p-8 rounded-2xl border border-golden-sand/20 shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-golden-sand/20 rounded-lg">
          <Trophy size={24} className="text-deep-teal" />
        </div>
        <h2 className="text-3xl font-display font-bold text-deep-teal">Honors & Awards</h2>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedHonors).map(([type, typeHonors]) => (
          <div key={type} className="mb-8">
            <h3 className="text-xl font-semibold text-deep-teal mb-4 border-b border-golden-sand/30 pb-2">
              {type}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {typeHonors.map((honor, index) => (
                <div
                  key={index}
                  className="honor-card opacity-0 transform translate-y-4 transition-all duration-500 ease-out rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-golden-sand/10"
                >
                  <div className={`${honor.color} p-4 flex items-center justify-between`}>
                    <h4 className="text-white font-bold text-lg truncate pr-2">{honor.title}</h4>
                    <div className="text-white bg-white/20 p-2 rounded-full">
                      {honor.icon}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white">
                    <div className="flex items-center gap-2 text-sm text-driftwood-brown/70 mb-2">
                      <span>{honor.issuer}</span>
                      <span>•</span>
                      <span>{honor.date}</span>
                    </div>
                    
                    <p className="text-driftwood-brown/90 text-sm leading-relaxed">
                      {honor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-4 overflow-hidden">
        <div className="flex space-x-2 animate-scroll">
          <span className="text-golden-sand">🏆</span>
          <span className="text-deep-teal">🎓</span>
          <span className="text-coral-red">🇹🇹</span>
          <span className="text-golden-sand">🏅</span>
          <span className="text-deep-teal">📚</span>
          <span className="text-coral-red">🔬</span>
          <span className="text-golden-sand">🏆</span>
          <span className="text-deep-teal">🎓</span>
          <span className="text-coral-red">🇹🇹</span>
        </div>
      </div>
      </AnimatedSection>
    </div>
  );
};

export default HonorsSection;
