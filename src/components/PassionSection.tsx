
import { Zap } from "lucide-react";

const PassionSection = () => {
  const passions = [
    "Building resilient software systems with clean architecture and design patterns, especially in game development and simulations",
    "Creating data-driven insights through sports analytics using Python, Pandas, and machine learning techniques",
    "Developing tools that solve real-world problems, from CLI productivity apps to automated workflows",
    "Leading teams and mentoring others in technology and software development"
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
          <Zap size={20} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-slate-100">What I'm passionate about:</h3>
      </div>
      <ul className="space-y-3">
        {passions.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-slate-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PassionSection;
