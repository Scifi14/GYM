import { PLANS } from "../data";
import { MembershipTier } from "../types";
import { motion } from "motion/react";
import { Check, ShieldAlert, Award } from "lucide-react";

interface MembershipProps {
  onPlanSelect: (planName: string) => void;
}

export default function Membership({ onPlanSelect }: MembershipProps) {
  // Entrance animations config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 }
    }
  };

  return (
    <section id="membership" className="w-full bg-[#000000] py-24 border-t border-white/5 relative">
      {/* Visual background ambient details */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-cyber/1 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-indigo-500/[0.01] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-cyber font-semibold uppercase block mb-3">
              ACCREDITATION GRADES
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
              MEMBERSHIP TIERS
            </h2>
          </div>
          <p className="font-sans text-zinc-500 text-xs sm:text-sm max-w-sm font-light leading-relaxed tracking-wide">
            Secure your node on the high-performance grid. Access medical-grade analytics, tailored shock therapies, and personalized vector maps.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          id="pricing-grid-container"
        >
          {PLANS.map((plan) => {
            const isElite = plan.isPopular;
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={`flex flex-col rounded-2xl p-5 md:p-6 text-left relative overflow-hidden transition-all duration-500 group backdrop-blur-2xl bg-white/[0.02] border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] hover:bg-white/[0.04] hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] ${
                  isElite
                    ? "border-cyber/30 shadow-neon"
                    : ""
                }`}
                style={{
                  backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)"
                }}
                id={`membership-card-${plan.id}`}
              >
                {/* Visual line texture grid inside popular plan */}
                {isElite && (
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:12px_12px] opacity-100 pointer-events-none" />
                )}

                {/* Popular Badge */}
                {isElite && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-cyber/10 border border-cyber/20 text-cyber text-[8px] font-mono tracking-widest px-2.5 py-1 rounded-full uppercase">
                    <Award size={10} /> RECOMMENDED CYCLE
                  </div>
                )}

                {/* Cyber System Identifier Code */}
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="font-mono text-[10px] text-zinc-500 tracking-widest">
                    SYSTEM NODE // {plan.tierSymbol}
                  </span>
                </div>

                {/* Plan Core Title & Pricing */}
                <div className="mb-4">
                  <h3 className="font-display font-extrabold text-white text-xl sm:text-2xl tracking-tight uppercase mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight">
                      {plan.price}
                    </span>
                    <span className="font-mono text-zinc-500 text-xs">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-4 border-b border-white/5 pb-4">
                  {plan.description}
                </p>

                {/* Plan features check-list */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`p-0.5 rounded-full ${
                          isElite ? "bg-cyber/15 text-cyber" : "bg-white/5 text-zinc-400"
                        }`}
                      >
                        <Check size={10} />
                      </div>
                      <span className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-normal">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Securing Tier Access button trigger */}
                <button
                  onClick={() => onPlanSelect(plan.name)}
                  className={`w-full font-mono text-xs tracking-widest py-3 rounded-sm text-center transition-all duration-300 font-bold cursor-pointer uppercase mt-auto ${
                    isElite
                      ? "bg-cyber text-black hover:bg-white hover:text-black shadow-neon hover:shadow-none"
                      : "bg-white/5 border border-white/10 hover:border-cyber hover:text-cyber hover:bg-cyber/5 text-white"
                  }`}
                >
                  SELECT {plan.name}
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
