
const SkillsSection = () => {
  const skills = [
    "C++", "Python", "JavaScript", "TypeScript", "Go", "React", "Node.js", 
    "MongoDB", "FastAPI", "Discord.js", "Pandas", "NumPy", "Tailwind CSS", 
    "Git", "OAuth2", "REST APIs", "Machine Learning", "Data Visualization"
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
      <h3 className="text-xl font-semibold text-slate-100 mb-6">Skills & Technologies</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-cyan-300 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-blue-700/30 hover:border-cyan-500/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
