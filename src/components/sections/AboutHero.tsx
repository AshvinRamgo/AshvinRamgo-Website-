
import { Globe, MapPin } from "lucide-react";

const AboutHero = () => {
  return (
    <div className="bg-ivory-white p-8 rounded-2xl border border-golden-sand/20 shadow-lg relative overflow-hidden">
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmNWY1ZGMiPjwvcmVjdD4KPC9zdmc+')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-golden-sand/20 rounded-lg">
            <Globe size={24} className="text-deep-teal" />
          </div>
          <h2 className="text-3xl font-display font-bold text-deep-teal">Background</h2>
        </div>
        
        <div className="relative">
          <p className="text-lg text-driftwood-brown/90 leading-relaxed mb-4">
            Hey! I'm Ashvin Ramgoolam, a Computer Science student at the University of Waterloo
            originally from <span className="relative inline-flex items-center">
              Trinidad and Tobago 🇹🇹
            </span>. My <span className="text-teal-700 font-semibold">Caribbean roots</span> have shaped the way I approach
            problems—with <span className="text-coral-red font-semibold">resilience</span>, <span className="text-deep-teal font-semibold">creativity</span>, and a deep appreciation for <span className="text-golden-sand font-semibold">collaboration</span>.
          </p>
          
          <p className="text-lg text-driftwood-brown/90 leading-relaxed mb-4">
            <span className="italic text-deep-teal font-semibold block mb-4 border-l-4 border-golden-sand pl-4 py-2 bg-seafoam-mint/10">
              "My Caribbean roots taught me to solve problems like islanders solve storms — with resourcefulness, calm, and rhythm."
            </span>
          </p>
          
          <p className="text-lg text-driftwood-brown/90 leading-relaxed">
            I'm passionate about using technology to build impactful tools, whether it's automating
            workflows, analyzing sports stats, or creating educational platforms. From designing board
            games in C++ to building real-time bots and collaborative platforms, I love turning ideas
            into reality through clean, maintainable code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
