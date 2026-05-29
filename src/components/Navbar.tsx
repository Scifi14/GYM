import { useState, useEffect } from "react";
import { Menu, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "STANCE", target: "hero" },
    { label: "PROGRAMS", target: "programs" },
    { label: "TRANSFORMATION", target: "transformations" },
    { label: "MEMBERSHIP", target: "membership" },
    { label: "COACHES", target: "trainers" },
  ];

  const handleItemClick = (target: string) => {
    setIsOpen(false);
    onNavigate(target);
  };

  return (
    <header
      id="site-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-black/70 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleItemClick("hero")}
          className="flex items-center gap-2 font-display font-bold text-lg md:text-xl tracking-widest text-left select-none relative group cursor-pointer"
          id="navbar-logo-btn"
        >
          <span className="text-white group-hover:text-cyber transition-colors duration-200">
            AURA
          </span>
          <span className="text-cyber text-[9px] font-mono tracking-normal bg-cyber/10 border border-cyber/20 px-1.5 py-0.5 rounded-sm">
            APEX // V.01
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleItemClick(item.target)}
              className={`font-mono text-xs tracking-widest transition-all duration-300 relative py-1 cursor-pointer hover:text-cyber ${
                activeSection === item.target
                  ? "text-cyber font-medium"
                  : "text-zinc-400"
              }`}
            >
              {item.label}
              {activeSection === item.target && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cyber"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>



        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-cyber transition-colors cursor-pointer"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full min-h-screen bg-black/95 backdrop-blur-2xl border-b border-white/5 py-8 px-6 flex flex-col items-center gap-8 md:hidden z-40"
            id="mobile-drawer"
          >
            {navItems.map((item, idx) => (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={item.target}
                onClick={() => handleItemClick(item.target)}
                className={`font-display text-xl tracking-widest py-3 border-b border-white/5 w-full text-center cursor-pointer ${
                  activeSection === item.target
                    ? "text-cyber font-semibold"
                    : "text-zinc-400"
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05 }}
              onClick={() => handleItemClick("membership")}
              className="mt-6 w-full text-center font-mono text-xs tracking-widest border border-cyber bg-cyber/15 text-cyber py-4 rounded-lg cursor-pointer shadow-neon-strong"
            >
              SECURE ACCESS
            </motion.button>

            <div className="mt-auto pb-12 text-center">
              <span className="font-mono text-[9px] text-zinc-600 tracking-wider">
                AURA SYSTEM LABS © 2026 // ALL INTENSITY GRADES
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
