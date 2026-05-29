import React from "react";
import { SocialCard } from "./ui/social-card";
import { TrendingUp, Flame, Activity, Zap } from "lucide-react";

export default function Transformations() {
  const transformationsData = [
    {
      title: "Hypertrophy Phase",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      links: [
        { href: "#", icon: <TrendingUp />, label: "+12% Mass", delay: "0s" },
        { href: "#", icon: <Activity />, label: "Strength", delay: "0.1s" },
      ]
    },
    {
      title: "Metabolic Shred",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
      links: [
        { href: "#", icon: <Flame />, label: "-8% Body Fat", delay: "0s" },
        { href: "#", icon: <Zap />, label: "Endurance", delay: "0.1s" },
      ]
    },
    {
      title: "Core Conditioning",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
      links: [
        { href: "#", icon: <TrendingUp />, label: "Stability", delay: "0s" },
        { href: "#", icon: <Activity />, label: "Power", delay: "0.1s" },
      ]
    },
    {
      title: "Peak Performance",
      image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop",
      links: [
        { href: "#", icon: <Zap />, label: "Agility", delay: "0s" },
        { href: "#", icon: <TrendingUp />, label: "Speed", delay: "0.1s" },
      ]
    }
  ];

  return (
    <section id="transformations" className="w-full bg-white py-24 border-t border-black/5 relative overflow-hidden">
      {/* Visual Ambient Glow for light mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-black/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Quote Block */}
        <div className="mb-16 md:mb-24 flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[9px] tracking-[0.3em] text-cyber font-semibold uppercase block mb-6">
            System Validations
          </span>
          <blockquote className="font-display font-extrabold text-black text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-4xl">
            "TRANSFORMATION IS NOT A FUTURE EVENT, IT IS A PRESENT ACTIVITY."
          </blockquote>
          <p className="mt-6 text-zinc-500 font-mono tracking-widest text-sm uppercase">
            // Jillian Michaels
          </p>
        </div>

        {/* Master Content Workspace Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformationsData.map((trans, index) => (
            <div key={index}>
              <SocialCard
                title={trans.title}
                backgroundImage={trans.image}
                socialLinks={trans.links}
                isSquare={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
