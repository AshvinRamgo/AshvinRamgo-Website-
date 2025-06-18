
import { useState, useEffect } from "react";
import { Music, Play, Pause } from "lucide-react";

const SpotifyWidget = () => {
  const [currentTrack, setCurrentTrack] = useState({
    name: "Perfect",
    artist: "Ed Sheeran",
    isPlaying: true,
    albumArt: "/placeholder.svg"
  });

  // Simulate live updates (in real implementation, you'd connect to Spotify API)
  useEffect(() => {
    const tracks = [
      { name: "Perfect", artist: "Ed Sheeran", isPlaying: true },
      { name: "Shape of You", artist: "Ed Sheeran", isPlaying: false },
      { name: "Thinking Out Loud", artist: "Ed Sheeran", isPlaying: true }
    ];

    const interval = setInterval(() => {
      const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
      setCurrentTrack(prev => ({ ...prev, ...randomTrack }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-20 right-8 z-30 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700 shadow-xl max-w-xs">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
          <Music size={20} className="text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-200 truncate">{currentTrack.name}</p>
          <p className="text-xs text-slate-400 truncate">{currentTrack.artist}</p>
        </div>
        
        <div className="flex items-center gap-2">
          {currentTrack.isPlaying ? (
            <Play size={16} className="text-green-400" />
          ) : (
            <Pause size={16} className="text-slate-400" />
          )}
          <div className="text-xs text-green-400 font-medium">
            {currentTrack.isPlaying ? "Playing" : "Paused"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;
