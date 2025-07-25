
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Code2, Database, Bot, BarChart3, Calendar, Palette, Brain, Heart } from "lucide-react";

interface WhatILearnedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProject: string | null;
}

const WhatILearnedModal = ({ open, onOpenChange, selectedProject }: WhatILearnedModalProps) => {
  const projectLearnings = [
    {
      title: "Watopoly",
      icon: Code2,
      learning: "Deepened knowledge of object-oriented programming and mastered design patterns like Observer and Factory. Learned to manage dynamic memory safely using smart pointers and handled complex turn-based game logic across multiple player states."
    },
    {
      title: "NBA League Analysis",
      icon: BarChart3,
      learning: "Sharpened data analysis and visualization skills using Pandas, Seaborn, and Matplotlib. Cleaned over two decades of raw NBA data, visualized patterns in team and player performance, and used regression to draw statistical insights."
    },
    {
      title: "Assignment Tracker",
      icon: Database,
      learning: "Building this CLI tool in Go taught me how to connect Go with databases like MongoDB, use environment variables securely, and build robust input validation flows. Gained deeper understanding of CRUD operations and UX design in terminal applications."
    },
    {
      title: "Google Drive Backup API",
      icon: Database,
      learning: "This FastAPI project gave me practical experience with OAuth authentication, file I/O, and integrating third-party services. Designed a RESTful API, handled secure credential storage, and built something useful for daily productivity."
    },
    {
      title: "UEFA Discord Bot",
      icon: Bot,
      learning: "Learned how to integrate real-time APIs and implement interactive features using Discord.js. Understood bot token handling, slash command registration, and how to structure bot logic cleanly. Handling expired API keys taught me about error resilience."
    },
    {
      title: "Chess Engine",
      icon: Brain,
      learning: "Developing a C++ chess engine pushed my algorithmic thinking. Implemented Minimax with AI logic, handled edge cases like castling and en passant, and designed a hybrid text/graphical interface. Learned to handle complex game state and simulate AI thinking."
    },
    {
      title: "TableLink",
      icon: Calendar,
      learning: "This React project focused on creating dynamic, performant components with TypeScript. I learned about optimization techniques, responsive design patterns, and building interfaces that prioritize user experience and real-world usability."
    },
    {
      title: "UWConnect",
      icon: Code2,
      learning: "Collaborated on building a platform with schedule matching and real-time chat. Learned about WebSocket implementation, user data modeling, and creating smart matching algorithms while designing for student productivity needs."
    },
    {
      title: "NailsByTiff",
      icon: Palette,
      learning: "This design-heavy project taught me about client collaboration, branding constraints, and modern UI principles. I learned to integrate Instagram APIs, work within aesthetic requirements, and balance client feedback with technical implementation."
    },
    {
      title: "Discord Bot (Mental Health)",
      icon: Heart,
      learning: "This ongoing project is teaching me about empathy-driven development, community management, and responsible content planning. I'm learning to design features that support mental health while fostering positive community engagement."
    }
  ];

  // If a specific project is selected, show only that project's learning
  const displayedLearnings = selectedProject 
    ? projectLearnings.filter(project => project.title === selectedProject)
    : projectLearnings;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-hidden bg-ivory-white border-golden-sand/20">
        <DialogHeader className="pb-4 border-b border-golden-sand/20">
          <DialogTitle className="text-2xl font-bold text-deep-teal">
            {selectedProject ? `What I Learned: ${selectedProject}` : "What I've Learned From Each Project"}
          </DialogTitle>
          <DialogDescription className="text-driftwood-brown/80 text-sm">
            {selectedProject
              ? "Insights and growth from this specific project"
              : "Key learnings and skills gained from my development journey"
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="overflow-y-auto pr-2" style={{ maxHeight: 'calc(85vh - 120px)' }}>
          {selectedProject ? (
            // Single project view
            displayedLearnings.length > 0 && (
              <div className="space-y-4">
                {displayedLearnings.map((project) => {
                  const IconComponent = project.icon;
                  return (
                    <div
                      key={project.title}
                      className="bg-seafoam-mint/30 p-6 rounded-xl border border-golden-sand/20"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-golden-sand/20 rounded-xl shadow-lg">
                          <IconComponent size={24} className="text-deep-teal" />
                        </div>
                        <h3 className="text-xl font-bold text-deep-teal">{project.title}</h3>
                      </div>
                      <p className="text-driftwood-brown/90 leading-relaxed text-base">{project.learning}</p>
                    </div>
                  );
                })}
              </div>
            )
          ) : (
            // All projects grid view
            <div className="grid gap-4">
              {displayedLearnings.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={project.title}
                    className="bg-seafoam-mint/20 p-5 rounded-lg border border-golden-sand/20 hover:border-golden-sand/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-golden-sand/20 rounded-lg shadow-md flex-shrink-0">
                        <IconComponent size={20} className="text-deep-teal" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-deep-teal mb-2">{project.title}</h4>
                        <p className="text-driftwood-brown/90 text-sm leading-relaxed">{project.learning}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          
          {displayedLearnings.length === 0 && selectedProject && (
            <div className="text-center py-12">
              <div className="bg-seafoam-mint/30 rounded-lg p-8 border border-golden-sand/20">
                <p className="text-driftwood-brown/80 text-lg">Learning details for "{selectedProject}" are not available yet.</p>
                <p className="text-driftwood-brown/60 text-sm mt-2">Check back later for updates!</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatILearnedModal;
