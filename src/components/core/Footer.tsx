import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-teal text-ivory-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-3xl font-accent text-ivory-white mb-4">
              Ashvin Ramgoolam
            </div>
            <p className="text-seafoam-mint mb-4">
              Computer Science student at the University of Waterloo, passionate
              about building innovative software solutions and exploring new
              technologies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-golden-sand">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-ivory-white hover:text-golden-sand transition-colors"
              >
                About Me
              </Link>
              <Link
                to="/projects"
                className="block text-ivory-white hover:text-golden-sand transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block text-ivory-white hover:text-golden-sand transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-golden-sand">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/AshvinRamgo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-seafoam-mint/20 rounded-full hover:bg-golden-sand hover:text-deep-teal transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashvin-ramgoolam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-seafoam-mint/20 rounded-full hover:bg-golden-sand hover:text-deep-teal transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:a2ramgoo@uwaterloo.ca"
                className="p-3 bg-seafoam-mint/20 rounded-full hover:bg-golden-sand hover:text-deep-teal transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-seafoam-mint/30 pt-8">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
