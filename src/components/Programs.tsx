import React from "react";
import { SocialCard } from "./ui/social-card";
import { Dumbbell, Users, Apple, Activity, Flame, HeartPulse, Trophy } from "lucide-react";

interface ProgramsProps {
  onJoinClick: () => void;
}

export default function Programs({ onJoinClick }: ProgramsProps) {
  const programsData = [
    {
      title: "Personal Training",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
      links: [
        { href: "#", icon: <Dumbbell />, label: "Strength", delay: "0s" },
        { href: "#", icon: <TargetIcon />, label: "Goals", delay: "0.1s" },
        { href: "#", icon: <Activity />, label: "Conditioning", delay: "0.2s" },
      ]
    },
    {
      title: "Group Classes",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
      links: [
        { href: "#", icon: <Users />, label: "Community", delay: "0s" },
        { href: "#", icon: <Flame />, label: "HIIT", delay: "0.1s" },
        { href: "#", icon: <HeartPulse />, label: "Cardio", delay: "0.2s" },
      ]
    },
    {
      title: "Nutrition Guidance",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
      links: [
        { href: "#", icon: <Apple />, label: "Diet Plan", delay: "0s" },
        { href: "#", icon: <Activity />, label: "Macros", delay: "0.1s" },
      ]
    },
    {
      title: "Body Transformation",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
      links: [
        { href: "#", icon: <Trophy />, label: "Results", delay: "0s" },
        { href: "#", icon: <Flame />, label: "Fat Loss", delay: "0.1s" },
        { href: "#", icon: <Dumbbell />, label: "Muscle", delay: "0.2s" },
      ]
    }
  ];

  return (
    <section id="programs" className="w-full bg-[#000000] py-24 border-t border-white/5 relative">
      {/* Background glow flares */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-cyber/2 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <span className="font-mono text-[9px] tracking-[0.3em] text-cyber font-semibold uppercase block mb-3">
              Elite Pathways
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
              Featured Programs
            </h2>
          </div>
          <div className="flex justify-start md:justify-end">
            <button
              onClick={onJoinClick}
              className="font-mono text-xs tracking-widest text-black bg-white hover:bg-cyber hover:shadow-neon py-3 px-8 rounded-sm transition-all duration-300 cursor-pointer"
            >
              ENROLL NOW
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsData.map((prog, index) => (
            <div key={index}>
              <SocialCard
                title={prog.title}
                backgroundImage={prog.image}
                socialLinks={prog.links}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Inline Target Icon since it wasn't imported at top
function TargetIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
