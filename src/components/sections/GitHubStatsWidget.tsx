
import { useState, useEffect } from "react";
import { Github, Code, GitBranch, Star } from "lucide-react";

const GitHubStatsWidget = () => {
  const [stats, setStats] = useState({
    totalCommits: 0,
    currentStreak: 0,
    languagesUsed: 0,
    starsEarned: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate fetching GitHub stats (in real implementation, use GitHub API)
    const fetchStats = () => {
      setStats({
        totalCommits: Math.floor(Math.random() * 1000) + 500,
        currentStreak: Math.floor(Math.random() * 30) + 1,
        languagesUsed: Math.floor(Math.random() * 10) + 5,
        starsEarned: Math.floor(Math.random() * 100) + 20
      });
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-40 right-8 z-30 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 border border-slate-700 shadow-xl">
      <div className="flex items-center gap-2 mb-3">
        <Github size={20} className="text-slate-300" />
        <span className="text-sm font-medium text-slate-200">Live Coding Stats</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Code size={14} className="text-blue-400" />
          <div>
            <div className="text-slate-400">Commits</div>
            <div className="text-slate-200 font-medium">{stats.totalCommits}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <GitBranch size={14} className="text-green-400" />
          <div>
            <div className="text-slate-400">Streak</div>
            <div className="text-slate-200 font-medium">{stats.currentStreak}d</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Star size={14} className="text-yellow-400" />
          <div>
            <div className="text-slate-400">Stars</div>
            <div className="text-slate-200 font-medium">{stats.starsEarned}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Code size={14} className="text-purple-400" />
          <div>
            <div className="text-slate-400">Languages</div>
            <div className="text-slate-200 font-medium">{stats.languagesUsed}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStatsWidget;
