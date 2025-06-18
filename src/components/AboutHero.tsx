
import { Globe } from "lucide-react";

const AboutHero = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
          <Globe size={20} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Background</h2>
      </div>
      <p className="text-lg text-slate-300 leading-relaxed mb-4">
        Hey! I'm Ashvin Ramgoolam, a Computer Science student at the University of Waterloo 
        originally from Trinidad and Tobago 🇹🇹. My Caribbean roots have shaped the way I approach 
        problems—with resilience, creativity, and a deep appreciation for collaboration.
      </p>
      <p className="text-lg text-slate-300 leading-relaxed">
        I'm passionate about using technology to build impactful tools, whether it's automating 
        workflows, analyzing sports stats, or creating educational platforms. From designing board 
        games in C++ to building real-time bots and collaborative platforms, I love turning ideas 
        into reality through clean, maintainable code.
      </p>
    </div>
  );
};

export default AboutHero;
