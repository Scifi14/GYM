"use client";

import React, { useState } from 'react';

export interface CardData {
  id: string | number;
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface CardStackProps {
  items: CardData[];
}

const AccordionCard = ({ item, isActive, onActivate }: { key?: string | number, item: CardData, isActive: boolean, onActivate: () => void }) => {
  return (
    <div
      onMouseEnter={onActivate}
      className={`relative overflow-hidden rounded-[24px] sm:rounded-[32px] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl min-w-[50px] sm:min-w-[80px] bg-zinc-950 ${
        isActive ? 'flex-[6] lg:flex-[8]' : 'flex-[1]'
      }`}
    >
      {/* Base Grayscale Image */}
      <img
        src={item.src}
        alt={item.alt}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none filter grayscale brightness-75 contrast-125 ${
          isActive ? 'scale-100' : 'scale-[1.15] brightness-50'
        }`}
        draggable={false}
      />
      
      {/* Full Colored Image */}
      <img
        src={item.src}
        alt={item.alt}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none display-block transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        draggable={false}
      />
      
      {/* Hover / Inactive Tint */}
      <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-60'}`} />

      {/* Active Content Overlay */}
      <div 
        className={`absolute inset-0 flex flex-col justify-end p-6 sm:p-10 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent transition-all duration-700 delay-100 pointer-events-none ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col max-w-2xl">
          {item.subtitle && <span className="text-cyber font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-2">{item.subtitle}</span>}
          {item.title && <span className="text-white font-display font-extrabold text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight whitespace-nowrap">{item.title}</span>}
        </div>
      </div>

      {/* Inactive Vertical Title */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none ${
          isActive ? 'opacity-0' : 'opacity-100 delay-200'
        }`}
      >
        <h3 className="text-white/80 font-display text-lg sm:text-xl lg:text-3xl font-bold uppercase tracking-[0.2em] whitespace-nowrap -rotate-90">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default function CardStack({ items }: CardStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full relative px-4">
      {/* Container for the Accordion */}
      <div className="w-full flex h-[500px] sm:h-[600px] lg:h-[700px] gap-2 sm:gap-4">
        {items.map((item, index) => (
          <AccordionCard 
            key={item.id} 
            item={item} 
            isActive={activeIndex === index} 
            onActivate={() => setActiveIndex(index)} 
          />
        ))}
      </div>
    </div>
  );
}
