"use client";

import React, { useState } from "react";

// Types
export interface SocialBoxProps {
  href: string;
  icon: React.ReactNode;
  label?: string;
  delay?: string;
}

export interface SocialCardProps {
  title?: string;
  backgroundImage?: string;
  isSquare?: boolean;
  socialLinks?: Array<{
    href: string;
    icon: React.ReactNode;
    label?: string;
    delay?: string;
  }>;
}

// Components
export const SocialBox = ({ href, icon, label, delay }: SocialBoxProps) => (
  <a href={href} className="group/box relative block" style={{ transitionDelay: delay }}>
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg">
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
    </div>
    {label && (
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white opacity-0 group-hover/box:opacity-100 transition-opacity whitespace-nowrap bg-black/60 px-2 py-0.5 rounded">
        {label}
      </span>
    )}
  </a>
);

export const SocialCard = ({
  title = "Socials",
  backgroundImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  isSquare = false,
  socialLinks = [],
}: SocialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-full ${isSquare ? 'aspect-square' : 'aspect-[4/5]'} rounded-2xl overflow-hidden group cursor-pointer shadow-2xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Content Layer */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
        <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-tight transform transition-transform duration-500 group-hover:-translate-y-14 relative z-20">
          {title}
        </h3>
        
        {/* Animated Feature Boxes */}
        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 flex gap-3 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          {socialLinks.map((link, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-500 translate-y-4 opacity-0 ${isHovered ? 'translate-y-0 opacity-100' : ''}`}
              style={{ transitionDelay: link.delay || `${index * 0.1}s` }}
            >
              <a href={link.href} className="group/box relative block">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg">
                  <span className="w-5 h-5 flex items-center justify-center">{link.icon}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
