import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, Terminal, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
}

export default function Navbar({ theme, toggleTheme, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home_00' },
    { id: 'about', label: 'About_01' },
    { id: 'projects', label: 'Projects_02' },
    { id: 'experience', label: 'Experience_03' },
    { id: 'skills', label: 'Skills_04' },
    { id: 'contact', label: 'Contact_05' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-[#0e0d0c]/85 hover:bg-[#0e0d0c]/95 backdrop-blur-xl border-[#21201e]/60 py-3.5 px-6 md:px-12 shadow-lg shadow-black/20' 
            : 'bg-transparent border-transparent py-6 px-6 md:px-12'
        }`}
      >
        {/* Floating Millimeter markings at the top of Navbar for architectural blueprint realism */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:16px_100%] opacity-40 pointer-events-none" />

        <div className="mx-auto max-w-7xl">
          <div className="flex h-12 items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => scrollToSection('hero')} 
              className="group flex cursor-pointer items-center gap-3 font-display uppercase tracking-widest text-[#f4f3f0]"
            >
              <div className="relative flex h-8 w-8 items-center justify-center border border-[#21201e] bg-[#161514] text-xs text-[#cb3a22] font-mono transition-all duration-500 group-hover:rotate-180 group-hover:border-[#cb3a22] rounded-none">
                <span className="absolute inset-0.5 border border-[#cb3a22]/15 scale-70 rounded-none group-hover:border-[#cb3a22]/40" />
                S
              </div>
              <span className="text-xs font-black tracking-[0.25em] group-hover:text-[#cb3a22] transition-colors relative overflow-hidden">
                SNEHA SINGH
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#cb3a22] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </span>
            </div>

            {/* Desktop Navigation with high physical fidelity */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1 border border-[#21201e]/60 bg-[#161514]/30 p-1 rounded-none relative">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-4 py-1.5 text-[10px] font-mono tracking-wider transition-colors duration-300 rounded-none cursor-pointer uppercase ${
                        isActive 
                          ? 'text-white font-bold' 
                          : 'text-[#a8a7a5] hover:text-[#f4f3f0]'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-[#cb3a22]"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                          style={{ zIndex: 0 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Theme Toggle & Social Shortcut */}
              <div className="flex items-center gap-3 border-l border-[#21201e]/60 pl-4">
                <button
                  onClick={toggleTheme}
                  className="flex h-9 w-9 items-center justify-center border border-[#21201e]/40 bg-[#161514]/20 text-[#a8a7a5] hover:text-[#cb3a22] hover:border-[#cb3a22]/30 hover:bg-[#cb3a22]/5 transition-all duration-300 rounded-none cursor-pointer"
                  aria-label="Toggle Theme"
                >
                  <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="h-4 w-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-[#21201e]/40 bg-[#161514]/20 text-[#a8a7a5] hover:text-[#f4f3f0] hover:border-[#cb3a22]/40 hover:bg-[#161514]/60 transition-all rounded-none"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-[#21201e]/40 bg-[#161514]/20 text-[#a8a7a5] hover:text-[#f4f3f0] hover:border-[#cb3a22]/40 hover:bg-[#161514]/60 transition-all rounded-none"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="relative group bg-[#cb3a22] hover:bg-[#b02f1a] px-5 py-2 text-[10px] font-mono tracking-widest text-white transition-all uppercase rounded-none cursor-pointer overflow-hidden border border-[#cb3a22]"
                >
                  <span className="absolute inset-0 bg-[#f4f3f0] translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none mix-blend-difference" />
                  CONNECT
                </button>
              </div>
            </div>

            {/* Mobile Nav Button */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center border border-[#21201e] bg-[#161514]/40 text-[#a8a7a5] hover:text-[#cb3a22] rounded-none"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-9 w-9 items-center justify-center border border-[#21201e] bg-[#161514]/40 text-[#a8a7a5] hover:text-white rounded-none"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Minimalist Side Tracking Timeline (Desktop Only) */}
      <div className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-4 pointer-events-auto select-none">
        <div className="absolute right-[4px] top-0 bottom-0 w-[1px] bg-[#21201e]/30" />
        <div 
          className="absolute right-[4px] w-[1.5px] bg-[#cb3a22] transition-all duration-500 ease-[0.16,1,0.3,1]"
          style={{ 
            height: '24px',
            top: `${navItems.findIndex(item => item.id === activeSection) * 36 + 6}px`
          }}
        />
        {navItems.map((item, idx) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center gap-3 font-mono text-[8px] tracking-[0.2em] text-[#a8a7a5] hover:text-[#f4f3f0] transition-colors focus:outline-none cursor-pointer h-5 relative pr-4"
            >
              <span className={`transition-all duration-300 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 ${isActive ? 'opacity-100 translate-x-0 text-[#cb3a22] font-black' : ''}`}>
                {item.label}
              </span>
              <span className={`h-2.5 w-2.5 border transition-all duration-500 rounded-none flex items-center justify-center ${
                isActive 
                  ? 'border-[#cb3a22] bg-[#cb3a22]/10 scale-100' 
                  : 'border-[#21201e] bg-[#0e0d0c] scale-75 group-hover:border-[#cb3a22]/60 group-hover:scale-90'
              }`}>
                {isActive && <span className="h-1 w-1 bg-[#cb3a22] rounded-none animate-pulse" />}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-30 mx-4 border border-[#21201e] bg-[#0e0d0c]/95 p-6 backdrop-blur-2xl shadow-2xl md:hidden rounded-none"
          >
            <div className="flex flex-col gap-4 text-left">
              <span className="font-mono text-[9px] text-[#cb3a22] tracking-widest uppercase font-bold">NAVIGATION MATRIX</span>
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-2 border border-[#21201e] bg-[#161514]/30 p-3 text-left font-mono text-[10px] text-[#a8a7a5] hover:border-[#cb3a22] rounded-none uppercase"
                  >
                    <Terminal className="h-3.5 w-3.5 text-[#cb3a22]" />
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 border-t border-[#21201e] pt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#cb3a22] font-bold uppercase tracking-widest">DIGITAL REFRESH</span>
                  <div className="flex gap-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center border border-[#21201e] text-[#a8a7a5] hover:text-white rounded-none"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center border border-[#21201e] text-[#a8a7a5] hover:text-white rounded-none"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex h-8 w-8 items-center justify-center border border-[#21201e] text-[#a8a7a5] hover:text-white rounded-none"
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#cb3a22] py-3 text-center font-mono text-[10px] font-bold text-white tracking-widest uppercase rounded-none"
                >
                  GET IN TOUCH_
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
