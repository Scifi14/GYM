import { motion } from "framer-motion";

const quotes = [
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
  {
    text: "What seems impossible today will one day become your warm-up.",
    author: "Unknown",
  },
  {
    text: "The body achieves what the mind believes.",
    author: "Napoleon Hill",
  },
  {
    text: "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi",
  },
];

export default function Quotes() {
  return (
    <section className="w-full bg-black py-16 md:py-24 relative overflow-hidden flex items-center border-y border-white/5">
      {/* Subtle ambient glow behind marquee */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
        <div className="w-[100vw] h-[50vw] bg-white rounded-full blur-[200px] opacity-30"></div>
      </div>

      <motion.div
        className="flex whitespace-nowrap w-max gap-16 md:gap-32 pr-16 md:pr-32 relative z-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {/* We duplicate the array to create a seamless infinite marquee effect */}
        {[...quotes, ...quotes].map((quote, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-3xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tighter text-white"
          >
            <span>"{quote.text}"</span>
            <span className="text-zinc-500 font-mono text-xl md:text-3xl tracking-widest font-normal">
              // {quote.author}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
