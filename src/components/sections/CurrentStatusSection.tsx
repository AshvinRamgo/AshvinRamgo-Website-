
const CurrentStatusSection = () => {
  return (
    <div className="bg-ivory-white p-8 rounded-2xl border border-golden-sand/20 shadow-lg">
      <h3 className="text-2xl font-display font-bold text-deep-teal mb-4">Currently</h3>
      <div className="space-y-3 text-driftwood-brown/90">
        <p className="flex items-center gap-3"><span>🎓</span> Studying Computer Science at University of Waterloo</p>
        <p className="flex items-center gap-3"><span>💻</span> Building full-stack applications and game engines</p>
        <p className="flex items-center gap-3"><span>📊</span> Exploring data science and machine learning</p>
        <p className="flex items-center gap-3"><span>🚀</span> Seeking co-op opportunities in tech</p>
      </div>
    </div>
  );
};

export default CurrentStatusSection;
