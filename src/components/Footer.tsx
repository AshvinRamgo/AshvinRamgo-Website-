
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Ashvin Ramgoolam
            </div>
            <p className="text-slate-400 mb-4">
              Computer Science student at the University of Waterloo, passionate about building 
              innovative software solutions and exploring new technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-200">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                About Me
              </Link>
              <Link to="/projects" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-200">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/AshvinRamgo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-colors border border-slate-700 hover:border-cyan-500"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashvin-ramgoolam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-colors border border-slate-700 hover:border-cyan-500"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:a2ramgoo@uwaterloo.ca"
                className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-colors border border-slate-700 hover:border-cyan-500"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 Ashvin Ramgoolam. Built with React, TypeScript, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
