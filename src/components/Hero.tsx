import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import clipVideo from "@/assets/.aistudio/clip_8_seconds.mp4";

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onJoinClick, onExploreClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const spotlightVideoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // High-performance pointer interpolation (Lerp) for smooth tracking
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Animated headline titles states and timer
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["DIFFERENT_", "HARDER_", "SMARTER_", "FASTER_", "BEYOND_"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      targetPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  // Synchronize both videos to play in exact frame alignment
  useEffect(() => {
    const v1 = videoRef.current;
    const v2 = spotlightVideoRef.current;
    if (v1 && v2) {
      v1.defaultMuted = true;
      v1.muted = true;
      v2.defaultMuted = true;
      v2.muted = true;

      const playPromise1 = v1.play();
      const playPromise2 = v2.play();

      if (playPromise1 !== undefined) {
        playPromise1.catch((error) => {
          console.log("v1 autoplay prevented:", error);
        });
      }
      if (playPromise2 !== undefined) {
        playPromise2.catch((error) => {
          console.log("v2 autoplay prevented:", error);
        });
      }

      const syncVideos = () => {
        if (Math.abs(v1.currentTime - v2.currentTime) > 0.15) {
          v2.currentTime = v1.currentTime;
        }
      };

      v1.addEventListener("timeupdate", syncVideos);
      return () => {
        v1.removeEventListener("timeupdate", syncVideos);
      };
    }
  }, []);

  // requestAnimationFrame loop to smoothly interpolate (lerp) spotlight position
  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      // Smoothly slide current coordinate towards target coordinates (15% step per frame)
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * 0.15;
      currentPos.current.y += dy * 0.15;

      setDisplayPos({
        x: currentPos.current.x,
        y: currentPos.current.y,
      });

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Stagger configurations for entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-40px)] w-full relative overflow-hidden bg-black flex items-center justify-center pt-24 cursor-default rounded-t-3xl md:rounded-t-[2.5rem]"
    >
      {/* Background Cinematic Video with Dark Fallback */}
      <div className="absolute inset-0 z-0 bg-zinc-950 pointer-events-none">
        {/* Grayscale Background Video */}
        <video
          ref={videoRef}
          src={clipVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-85 scale-[1.02] filter grayscale brightness-110 contrast-[1.1] transition-opacity duration-1000"
        />

        {/* Symmetrically Overlayed Colorful Spotlight Video using Feathered Radial Gradient Mask */}
        <video
          ref={spotlightVideoRef}
          src={clipVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
          style={{
            maskImage: isHovered
              ? `radial-gradient(circle 200px at ${displayPos.x}px ${displayPos.y}px, black 30%, transparent 100%)`
              : `radial-gradient(circle 0px at 0px 0px, black 0%, transparent 0%)`,
            WebkitMaskImage: isHovered
              ? `radial-gradient(circle 200px at ${displayPos.x}px ${displayPos.y}px, black 30%, transparent 100%)`
              : `radial-gradient(circle 0px at 0px 0px, black 0%, transparent 0%)`,
            transition: "opacity 0.4s ease-in-out",
            opacity: isHovered ? 0.95 : 0,
            filter: "brightness(1.35) contrast(1.1)",
          }}
        />

        {/* Soft Radial Ambient Monochrome Glow overlays */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[35vw] h-[35vw] rounded-full bg-white/[0.01] blur-[120px] pointer-events-none" />

        {/* Cinematic dark mask overlays - adjusted to show the background video details clearly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-black via-black/30 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center py-16 md:py-24 mt-8">
        {/* Centered Editorial Cinematic Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center justify-center"
          id="hero-copy-container"
        >
          <div
            id="hero-main-title"
            className="flex flex-col items-start w-fit mx-auto mb-6 select-none"
          >
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-white text-4xl sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] tracking-tighter leading-none uppercase text-left -mb-2 md:-mb-4 z-10 relative"
            >
              TRAIN
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="font-display font-extrabold text-white text-4xl sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] tracking-tighter leading-tight uppercase relative flex justify-start items-center overflow-hidden h-[1.2em] w-full"
            >
              <span className="invisible pr-8">DIFFERENT_</span> {/* Placeholder for width and height */}
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute left-0 top-0 w-full h-full flex justify-start items-center font-semibold text-white whitespace-nowrap"
                  initial={{ opacity: 0, y: "100%" }}
                  transition={{ type: "spring", stiffness: 50, damping: 15 }}
                  animate={
                    titleNumber === index
                      ? {
                        y: "0%",
                        opacity: 1,
                      }
                      : {
                        y: titleNumber > index ? "-100%" : "100%",
                        opacity: 0,
                      }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Subtext description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-10 tracking-wide select-none"
            id="hero-subtext"
          >
            An elite physical performance space engineered for high-intensity biological conditioning. Simple, precise, and absolute. True fitness without distractions.
          </motion.p>

          {/* CTA Buttons Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            id="hero-cta-buttons"
          >
            {/* CTA 1: Join Now */}
            <button
              onClick={onJoinClick}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-200 text-black font-mono text-xs tracking-widest font-bold py-4 px-8 rounded-sm transition-all duration-300 shadow-neon hover:shadow-none cursor-pointer"
            >
              JOIN NOW
              <ArrowRight
                size={14}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </button>

            {/* CTA 2: Explore */}
            <button
              onClick={onExploreClick}
              className="font-mono text-xs tracking-widest text-white border border-white/25 hover:border-white hover:text-white bg-white/5 backdrop-blur-sm py-4 px-8 rounded-sm transition-all duration-300 cursor-pointer"
            >
              EXPLORE PROGRAMS
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern bottom section spacer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-50 z-10 pointer-events-none">
        <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-zinc-500">
          SCROLL TO DETECT SYSTEM FLOW
        </span>
        <div className="w-[1.5px] h-8 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}
