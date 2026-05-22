import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("COMPILING TECHNICAL LEDGER...");

  const loadingPhrases = [
    "Reading Profile Summary...",
    "Aligning B.Tech CS Education Details...",
    "Loading Interactive Project Simulators...",
    "Gathering National Smart India Hackathon Data...",
    "Polishing Visual Styles and Typography...",
    "Welcome to Sneha Singh's Interactive CV!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const index = Math.min(
      Math.floor((progress / 100) * loadingPhrases.length),
      loadingPhrases.length - 1
    );
    setCurrentText(loadingPhrases[index]);

    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      id="loading-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0e0d0c] font-sans"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background structural noise & lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      <div className="relative z-10 w-full max-w-md px-6 text-center">
        {/* Minimal layout */}
        <div className="mb-10 flex justify-center items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 border border-[#21201e] flex items-center justify-center bg-[#161514] rounded-none">
              <span className="font-mono text-xs font-black text-[#cb3a22]">SS</span>
            </div>
            {/* Pulsing ring */}
            <motion.div 
              className="absolute inset-0 border border-[#cb3a22]/35"
              animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </div>
          <div className="text-left">
            <div className="font-syne text-xs font-black tracking-widest text-[#f4f3f0] uppercase">SNEHA SINGH</div>
            <div className="font-mono text-[8s] text-[#cb3a22] tracking-widest uppercase">CSE // PORTFOLIO MATRIX</div>
          </div>
        </div>

        {/* Big percentage */}
        <div className="mb-6 overflow-hidden">
          <motion.div 
            className="font-display text-8xl font-black tracking-tighter text-[#f4f3f0] flex justify-center items-end leading-none"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {progress}<span className="text-base text-[#cb3a22] font-mono mb-2 ml-1">%</span>
          </motion.div>
        </div>

        {/* Progress bar line */}
        <div className="h-[1px] w-full bg-[#21201e] overflow-hidden mb-4 relative">
          <motion.div 
            className="h-full bg-[#cb3a22]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Detail description */}
        <div className="flex items-center justify-between font-mono text-[8px] tracking-[0.25em] text-[#a8a7a5] uppercase">
          <motion.div
            key={currentText}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-left font-black select-none truncate max-w-[270px] text-[#cb3a22]"
          >
            {currentText}
          </motion.div>
          <div className="text-right">LUCKNOW, IND</div>
        </div>
      </div>

      {/* Floating status tags */}
      <div className="absolute bottom-6 font-mono text-[8px] text-[#a8a7a5]/40 tracking-[0.25em] uppercase flex flex-col sm:flex-row gap-4 sm:gap-10 text-center items-center">
        <div>SMART INDIA HACKATHON NATIONAL FINALIST</div>
        <div className="hidden sm:block">•</div>
        <div>COMPUTER SCIENCE & ENGINEERING B.TECH</div>
      </div>
    </motion.div>
  );
}
