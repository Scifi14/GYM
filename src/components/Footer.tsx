import { Linkedin, Github, Twitter, Layers } from "lucide-react";

interface FooterProps {
  onSectionNavigate: (target: string) => void;
}

export default function Footer({ onSectionNavigate }: FooterProps) {
  const links = [
    { label: "STANCE ARCS", target: "hero" },
    { label: "TRAINING VECTORS", target: "programs" },
    { label: "METABOLIC DATA", target: "transformations" },
    { label: "ACCREDITATIONS", target: "membership" },
    { label: "COMMAND LABS", target: "trainers" },
  ];

  return (
    <footer id="site-footer" className="w-full bg-[#000000] border-t border-white/5 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start text-left">
          
          {/* Left Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <button
              onClick={() => onSectionNavigate("hero")}
              className="font-display font-black text-xl tracking-widest text-left select-none mb-4 cursor-pointer text-white uppercase"
            >
              AURA FITNESS <span className="text-cyber text-xs tracking-normal block mt-1">EST. 2026</span>
            </button>
            <p className="font-sans text-[#555] text-xs font-light max-w-xs leading-relaxed tracking-wide">
              Transforming ordinary people into stronger, healthier, and more confident versions of themselves through expert coaching, structured training, and a results-driven environment.
            </p>
          </div>

          {/* Center Column - Training */}
          <div className="md:col-span-2 flex flex-col items-start">
            <span className="font-mono text-[10px] text-[#444] tracking-widest block mb-4 uppercase">
              TRAINING
            </span>
            <ul className="space-y-2.5">
              {["Strength Training", "Fat Loss Programs", "Muscle Building", "Personal Coaching", "Functional Fitness"].map((link, idx) => (
                <li key={idx}>
                  <button
                    className="font-mono text-[11px] text-zinc-500 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Column - Membership */}
          <div className="md:col-span-3 flex flex-col items-start">
            <span className="font-mono text-[10px] text-[#444] tracking-widest block mb-4 uppercase">
              MEMBERSHIP
            </span>
            <ul className="space-y-2.5">
              {["Monthly Plan", "Quarterly Plan", "Annual Plan", "Corporate Membership"].map((link, idx) => (
                <li key={idx}>
                  <button
                    className="font-mono text-[11px] text-zinc-500 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Location & Contact */}
          <div className="md:col-span-3 flex flex-col items-start">
            <div className="mb-8">
              <span className="font-mono text-[10px] text-[#444] tracking-widest block mb-4 uppercase">
                VISIT US
              </span>
              <span className="font-sans text-[12px] text-white block mb-1">
                Aura Fitness Center
              </span>
              <span className="font-sans text-[11px] text-[#555] font-light">
                Open 5:00 AM – 11:00 PM
              </span>
            </div>
            
            <div>
              <span className="font-mono text-[10px] text-[#444] tracking-widest block mb-4 uppercase">
                CONTACT
              </span>
              <span className="font-sans text-[12px] text-white block mb-1">
                +91 XXXXX XXXXX
              </span>
              <span className="font-sans text-[11px] text-[#555] font-light">
                hello@aurafitness.com
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Socials & Disclaimer Credits */}
        <div className="border-t border-white/5 pt-10 flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-mono text-xs tracking-widest text-cyber uppercase">
            BUILD STRENGTH • BUILD DISCIPLINE • BUILD YOURSELF
          </span>
          <span className="text-[10px] font-mono text-zinc-600">
            AURA FITNESS © 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
