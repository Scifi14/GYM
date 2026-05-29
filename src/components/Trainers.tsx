import { TRAINERS } from "../data";
import CardStack from "./ui/stack-card";

export default function Trainers() {
  return (
    <section id="trainers" className="w-full bg-[#070707] py-24 border-t border-white/5 relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyber/[0.01] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8 text-center md:text-left mb-16 relative z-20">
        <span className="font-mono text-[9px] tracking-[0.3em] text-cyber font-semibold uppercase block mb-3">
          FACULTY COMMAND
        </span>
        <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
          ELITE COACHES
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto">
        <CardStack 
          items={TRAINERS.map(trainer => ({
            id: trainer.id,
            src: trainer.imageUrl,
            alt: trainer.name,
            title: trainer.name,
            subtitle: trainer.role
          }))} 
        />
      </div>
    </section>
  );
}
