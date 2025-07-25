
import { Zap, Wrench, BarChart, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const PassionSection = () => {
  const passions = [
    {
      icon: <Wrench size={20} />,
      emoji: "🛠",
      title: "Building resilient systems",
      description: "Clean architecture and design patterns for game development and simulations"
    },
    {
      icon: <BarChart size={20} />,
      emoji: "📊",
      title: "Sports + data analytics",
      description: "Creating insights through Python, Pandas, and machine learning techniques"
    },
    {
      icon: <Zap size={20} />,
      emoji: "🧠",
      title: "Problem-solving with ML",
      description: "Developing tools that solve real-world problems, from CLI apps to workflows"
    },
    {
      icon: <Users size={20} />,
      emoji: "🤝",
      title: "Leading and mentoring teams",
      description: "Guiding others in technology and software development"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stones = document.querySelectorAll('.passion-stone');
            stones.forEach((stone, index) => {
              setTimeout(() => {
                stone.classList.add('animate-in');
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

  return (
    <div ref={sectionRef} className="bg-ivory-white p-8 rounded-2xl border border-golden-sand/20 shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-golden-sand/20 rounded-lg">
          <Zap size={24} className="text-deep-teal" />
        </div>
        <h3 className="text-2xl font-display font-bold text-deep-teal">My Passions</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {passions.map((passion, index) => (
          <div
            key={index}
            className="passion-stone opacity-0 transform translate-y-4 transition-all duration-500 ease-out bg-gradient-to-br from-seafoam-mint/30 to-golden-sand/20 rounded-xl p-4 shadow-sm hover:shadow-md border border-golden-sand/10 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{passion.emoji}</span>
              <h4 className="font-semibold text-deep-teal">{passion.title}</h4>
            </div>
            <p className="text-sm text-driftwood-brown/90 ml-9">{passion.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default PassionSection;
