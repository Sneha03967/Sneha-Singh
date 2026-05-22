import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="relative border-t border-[#21201e] bg-[#0e0d0c] py-14 px-6 select-none">
      
      {/* Structural visual lines */}
      <div className="absolute inset-y-0 left-[4%] w-[1px] bg-[#21201e]/45 hidden xl:block" />
      <div className="absolute inset-y-0 right-[4%] w-[1px] bg-[#21201e]/45 hidden xl:block" />

      <div className="mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Humility credits */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="font-syne text-xs font-bold text-[#f4f3f0] tracking-widest uppercase">
            Sneha Singh // Software Engineer
          </div>
          <p className="font-mono text-[8.5px] text-[#cb3a22] uppercase tracking-[0.2em] leading-relaxed">
            COPYRIGHT © 2026 SNEHA SINGH. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Right Side: Back to top */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:block text-right font-mono text-[8px] text-[#a8a7a5] uppercase tracking-[0.15em]">
            B.Tech CSE // School of Management Sciences Lucknow
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center border border-[#21201e] hover:border-[#cb3a22] bg-[#161514]/20 text-[#a8a7a5] hover:text-white transition-colors duration-200 cursor-pointer rounded-none"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
