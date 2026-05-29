import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quotes from "./components/Quotes";
import Programs from "./components/Programs";
import Transformations from "./components/Transformations";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import InteractiveContact from "./components/InteractiveContact";
import Footer from "./components/Footer";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [activeSection, setActiveSection] = useState("hero");

  // Custom offset navigator
  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY;
      const navbarHeight = 70; // offset of our sticky bar
      
      window.scrollTo({
        top: topOffset - navbarHeight,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Connect Plan Click to Form Inject & Scroll down
  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    handleNavigate("contact");
  };

  // Scrollspy to update active indicators in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "programs", "transformations", "membership", "trainers"];
      const scrollPosition = window.scrollY + 250; // trigger offset
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans antialiased relative selection:bg-cyber selection:text-black">
      {/* Decorative vertical coordinates alignment guide border - very elite detail */}
      <div className="fixed left-6 top-0 bottom-0 w-[0.5px] bg-white/[0.02] pointer-events-none hidden xl:block z-20" />
      <div className="fixed right-6 top-0 bottom-0 w-[0.5px] bg-white/[0.02] pointer-events-none hidden xl:block z-20" />

      {/* Navigation Layer */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Sections */}
      <main id="main-content-flow">
        {/* Continuous Framed Section (White Padding) */}
        <div className="w-full bg-white p-2 md:p-2.5">
          <div className="bg-[#000000] w-full flex flex-col rounded-3xl md:rounded-[2.5rem] overflow-hidden">
            
            {/* 1. Hero Module */}
            <Hero
              onJoinClick={() => handleNavigate("membership")}
              onExploreClick={() => handleNavigate("programs")}
            />

            {/* 1.5 Quotes Module */}
            <Quotes />

            {/* 2. Programs Module */}
            <Programs
              onJoinClick={() => handlePlanSelect("QUARTERLY PLAN")}
            />
            
            {/* 3. Biological success transformations & live SVG timeline graph */}
            <Transformations />

            {/* 4. Pricing Acclimation levels */}
            <Membership onPlanSelect={handlePlanSelect} />

            {/* 5. Coaches command bento grid */}
            <Trainers />

            {/* 6. Form interactive intake and pass token rendering */}
            <InteractiveContact selectedPlan={selectedPlan} />
            {/* 7. Footer */}
            <Footer onSectionNavigate={handleNavigate} />
          </div>
        </div>
      </main>
    </div>
  );
}
