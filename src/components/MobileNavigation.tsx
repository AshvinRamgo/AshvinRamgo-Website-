
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const navigationItems = [
    { name: "About", path: "/about", sectionId: "about" },
    { name: "Experience", path: "/experience", sectionId: "experience" },
    { name: "Projects", path: "/projects", sectionId: "projects" },
    { name: "Contact", path: "/contact", sectionId: "contact" }
  ];

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a, button');
      (firstLink as HTMLElement)?.focus();
    }
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={20} className="text-slate-300" />
        ) : (
          <Menu size={20} className="text-slate-300" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-cyan-400">Navigation</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Close menu"
            >
              <X size={20} className="text-slate-300" />
            </button>
          </div>

          <nav className="space-y-4">
            {navigationItems.map((item, index) => (
              isHomePage ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full text-left text-lg text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium p-3 rounded-lg hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  tabIndex={isOpen ? 0 : -1}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block text-lg font-medium p-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500",
                    location.pathname === item.path 
                      ? "text-cyan-400 bg-slate-800/50" 
                      : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                  )}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
