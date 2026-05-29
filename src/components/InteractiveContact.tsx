import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck, Mail, Cpu, Terminal, Calendar } from "lucide-react";

interface InteractiveContactProps {
  selectedPlan: string;
}

export default function InteractiveContact({ selectedPlan }: InteractiveContactProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [intensity, setIntensity] = useState("MUSCLE BUILDING");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passToken, setPassToken] = useState("");

  const handleApply = (e: FormEvent) => {
    // We purposefully DO NOT use e.preventDefault() here.
    // We want the browser to natively submit the form to the hidden_iframe.
    if (!email || !name) return;

    setIsSubmitting(true);

    // Google Apps Script usually takes ~1-2 seconds to process
    setTimeout(() => {
      const generatedToken = "AURA-APEX-" + Math.floor(100000 + Math.random() * 900000) + "-X26";
      setPassToken(generatedToken);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleReset = () => {
    setEmail("");
    setName("");
    setIsSubmitted(false);
    setPassToken("");
  };

  return (
    <section id="contact" className="w-full bg-[#000000] pt-32 pb-40 border-t border-white/5 relative">
      {/* Background neon visual glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-cyber/[0.012] blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-[9px] tracking-[0.3em] text-cyber font-semibold uppercase block mb-3">
          START YOUR JOURNEY
        </span>
        
        <h2 className="font-display font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase mb-6 leading-none">
          CLAIM YOUR FIRST SESSION
        </h2>
        
        <p className="font-sans text-zinc-400 text-xs sm:text-sm md:text-base font-light tracking-wide max-w-xl mx-auto mb-16 leading-relaxed">
          Train with elite-level equipment, expert guidance, and a personalized roadmap built for your goals. Complete your registration below to unlock your free gym trial and body assessment.
        </p>

        {/* Console Workspace Box */}
        <div className="backdrop-blur-xl bg-white/[0.015] border border-white/10 rounded-2xl p-6 sm:p-10 text-left max-w-xl mx-auto relative shadow-2xl overflow-hidden">
          {/* Subtle grid background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          {/* Hidden iframe to catch the native form submission quietly */}
          <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="apply-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleApply}
                action={(import.meta as any).env?.VITE_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzPNHrBBAC_v04X8aCwm5Hnq9c-e5lnDVAQwbQG6KHS-Q2t7OxygtN9NMaIAIrUpvjrvA/exec"}
                method="POST"
                target="hidden_iframe"
                className="space-y-6 relative z-10"
                id="interactive-apply-form"
              >
                {/* Auto-fill indicator if membership tier was clicks */}
                {selectedPlan && (
                  <div className="bg-cyber/10 border border-cyber/20 rounded p-3 text-xs font-mono text-cyber flex items-center justify-between">
                    <span>ACCREDITATION DESIRED:</span>
                    <span className="font-bold underline tracking-wider">{selectedPlan}</span>
                  </div>
                )}

                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="applicant-name" className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                    FULL NAME
                  </label>
                  <input
                    id="applicant-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ENTER YOUR NAME"
                    className="w-full bg-black/60 border border-white/5 rounded px-4 py-3.5 text-sm text-white placeholder-zinc-700 font-mono focus:border-cyber focus:outline-none transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="applicant-email" className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
                    <input
                      id="applicant-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER YOUR EMAIL"
                      className="w-full bg-black/60 border border-white/5 rounded pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-700 font-mono focus:border-cyber focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Selected Intensity Level */}
                <input type="hidden" name="goal" value={intensity} />
                <div className="space-y-2">
                  <label className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                    YOUR FITNESS GOAL
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["FAT LOSS", "MUSCLE BUILDING", "STRENGTH & PERFORMANCE"].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setIntensity(tier)}
                        className={`text-[9px] font-mono py-2.5 rounded border uppercase transition-all duration-300 pointer-events-auto cursor-pointer ${
                          intensity === tier
                            ? "bg-cyber/15 border-cyber text-cyber"
                            : "bg-black/40 border-white/5 text-zinc-500 hover:border-white/10"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action button trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyber hover:bg-white text-black font-mono text-xs tracking-widest py-4 rounded-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 uppercase select-none hover:shadow-neon cursor-pointer disabled:opacity-50"
                  id="submit-spec-application"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Cpu size={14} className="animate-spin text-black" />
                      PROCESSING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      START THE CHANGE
                      <ArrowRight size={14} />
                    </span>
                  )}
                </button>
              </motion.form>
            ) : (
              // Holographic Diagnostic Pass output
              <motion.div
                key="pass-token-viewport"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-6 relative z-10"
                id="credentials-granted-token-card"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-cyber/10 border border-cyber/30 flex items-center justify-center mb-6 text-cyber animate-pulse">
                  <ShieldCheck size={22} className="shadow-neon-strong" />
                </div>

                <h3 className="font-display font-extrabold text-white text-2xl uppercase tracking-widest mb-2">
                  YOU'RE IN. LET'S GET STRONGER.
                </h3>
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-8">
                  Your fitness journey starts now. Check your membership details below.
                </span>

                {/* Real-time ticket panel */}
                <div className="bg-black/40 border border-cyber/20 rounded p-5 text-left font-mono text-[11px] space-y-3 mb-8 shadow-neon relative">
                  {/* Subtle decorative scanline effect */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-cyber/15 animate-pulse" />

                  <div className="flex justify-between border-b border-white/5 pb-2 text-zinc-400">
                    <span>MEMBER NAME:</span>
                    <span className="text-white text-right">{name.toUpperCase() || "NEW MEMBER"}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2 text-zinc-400">
                    <span>MEMBERSHIP ID:</span>
                    <span className="text-cyber font-bold select-all">FIT-{new Date().getFullYear()}-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2 text-zinc-400">
                    <span>STATUS:</span>
                    <span className="text-teal-400 font-bold uppercase">ACTIVE ✓</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2 text-zinc-400">
                    <span>PLAN SELECTED:</span>
                    <span className="text-white uppercase font-bold">{selectedPlan || intensity}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2 text-zinc-400">
                    <span>START DATE:</span>
                    <span className="text-white uppercase font-bold">{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>PERSONAL COACH:</span>
                    <span className="text-white uppercase font-bold">ASSIGNED</span>
                  </div>
                </div>

                <div className="space-y-4 text-center mb-8 border-t border-white/5 pt-6">
                  <p className="font-sans text-sm font-light text-zinc-300">
                    Your membership has been successfully registered.
                  </p>
                  
                  <button className="w-full bg-cyber hover:bg-white text-black font-mono text-xs tracking-widest py-4 rounded-sm font-bold transition-all duration-300 uppercase cursor-pointer">
                    SCHEDULE YOUR FIRST WORKOUT
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
