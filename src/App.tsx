import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState('hero');

  // Load theme preference from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem('sneha-theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('sneha-theme', nextTheme);
  };

  // Section intersection detection for floating navbar highlight
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for accuracy
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div key="loader" className="fixed inset-0 z-50">
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        </motion.div>
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`min-h-screen relative ${
            theme === 'light' 
              ? 'bg-[#f5f3ef] text-[#161514] selection:bg-[#cb3a22] selection:text-white' 
              : 'bg-[#0e0d0c] text-[#f4f3f0] selection:bg-[#cb3a22] selection:text-white'
          }`}
        >
          {/* Noise overlay for premium physical paper texture */}
          <div className="editorial-noise" />

          {/* Cinematic Background Atmosphere & Architectural Guides */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Cinematic layered radial glows */}
            <div className={`fixed top-[10%] left-[15%] w-[65vw] h-[65vw] rounded-full blur-[150px] opacity-[0.035] transition-all duration-1000 ${
              theme === 'light' ? 'bg-[#cb3a22]/10 mix-blend-multiply' : 'bg-[#cb3a22]/15 mix-blend-screen'
            }`} />
            <div className={`fixed bottom-[20%] right-[5%] w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-[0.025] transition-all duration-1000 ${
              theme === 'light' ? 'bg-[#eab308]/8 mix-blend-multiply' : 'bg-[#eab308]/12 mix-blend-screen'
            }`} />
            
            {/* Fine architectural line structures & faint grid overlays */}
            <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:48px_48px]" />
            
            {/* Delicate coordinate crosses in the corners/margins for "thoughtful systems builder" workspace vibe */}
            <div className="fixed top-24 left-[4%] text-[8px] font-mono text-[#cb3a22]/15 select-none tracking-widest hidden xl:block">
              [COORD_0,0_INDEXED]
            </div>
            <div className="fixed bottom-24 right-[4%] text-[8px] font-mono text-[#cb3a22]/15 select-none tracking-widest hidden xl:block">
              [SYSTEMS_STATUS_RUNNING]
            </div>
          </div>

          {/* Light-theme Custom Color Injector Overrides */}
          <style dangerouslySetInnerHTML={{ __html: `
            ${theme === 'light' ? `
              body {
                background-color: #f5f3ef !important;
                color: #161514 !important;
              }
              #navbar .relative, #navbar .bg-zinc-950\\/60 {
                background-color: rgba(245, 243, 239, 0.8) !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
                color: #161514 !important;
              }
              #navbar .text-zinc-400 {
                color: #5c5a57 !important;
              }
              #navbar .text-zinc-400:hover {
                color: #161514 !important;
              }
              #navbar .bg-zinc-900\\/40 {
                background-color: rgba(232, 230, 224, 0.8) !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #navbar span {
                color: #161514 !important;
              }
              #hero {
                background-color: #f5f3ef !important;
                color: #161514 !important;
              }
              #hero h1 {
                color: #161514 !important;
              }
              #hero p {
                color: #4a4845 !important;
              }
              #hero .text-zinc-500 {
                color: #5c5a57 !important;
              }
              #hero .bg-zinc-950\\/40, #hero .bg-zinc-900\\/60 {
                background-color: rgba(245, 243, 239, 0.8) !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #hero .text-zinc-400 {
                color: #4a4845 !important;
              }
              #hero .bg-white\\/5 {
                background-color: rgba(232, 230, 224, 1) !important;
                border-color: rgba(33, 32, 30, 0.1) !important;
              }
              #hero button.bg-zinc-900\\/60 {
                background-color: rgba(232, 230, 224, 1) !important;
                border: 1px solid rgba(33, 32, 30, 0.15) !important;
                color: #161514 !important;
              }
              #hero button.bg-zinc-900\\/60:hover {
                background-color: #e8e6e0 !important;
              }
              #hero button.bg-\\[\\#eae8e4\\] {
                background-color: #cb3a22 !important;
                color: #ffffff !important;
              }
              #hero button.bg-\\[\\#eae8e4\\]:hover {
                background-color: #b02f1a !important;
              }
              #hero a.border-zinc-800\\/40 {
                border-color: rgba(33, 32, 30, 0.15) !important;
                color: #4a4845 !important;
              }
              #hero a.border-zinc-800\\/40:hover {
                color: #161514 !important;
              }
              #about {
                background-color: #fcfbfa !important;
                border-top: 1px solid rgba(33, 32, 30, 0.1);
                color: #161514 !important;
              }
              #about h2 {
                color: #161514 !important;
              }
              #about h3 {
                color: #161514 !important;
              }
              #about .text-zinc-500 {
                color: #5c5a57 !important;
              }
              #about .text-zinc-400 {
                color: #4a4845 !important;
              }
              #about .bg-zinc-900\\/60 {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #about .bg-zinc-900\\/20 {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #about h5 {
                color: #161514 !important;
              }
              #about .bg-zinc-950 {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #about .bg-zinc-950 span {
                color: #5c5a57 !important;
              }
              #about circle {
                stroke-opacity: 0.15;
              }
              #about line {
                stroke-opacity: 0.1;
              }
              #projects {
                background-color: #f5f3ef !important;
                border-top: 1px solid rgba(33, 32, 30, 0.1);
                color: #161514 !important;
              }
              #projects h2 {
                color: #161514 !important;
              }
              #projects .text-zinc-500 {
                color: #5c5a57 !important;
              }
              #projects .border-zinc-900 {
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #projects .bg-zinc-900\\/10 {
                background-color: #ffffff !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #projects .bg-zinc-900\\/10:hover {
                border-color: rgba(33, 32, 30, 0.3) !important;
              }
              #projects .bg-zinc-900\\/40 {
                background-color: #ffffff !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
                box-shadow: 0 4px 20px -2px rgba(0,0,0,0.03) !important;
              }
              #projects h3 {
                color: #161514 !important;
              }
              #projects .text-zinc-400 {
                color: #4a4845 !important;
              }
              #projects .bg-zinc-950\\/40 {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #projects .bg-zinc-950 {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #projects .bg-zinc-900\\/60 {
                background-color: #ffffff !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #projects .bg-zinc-955 {
                background-color: #ffffff !important;
              }
              #projects input, #projects textarea {
                background-color: #ffffff !important;
                border-color: rgba(33, 32, 30, 0.2) !important;
              }
              #projects button.bg-zinc-900\\/20 {
                background-color: #e8e6e0 !important;
                color: #161514 !important;
              }
              #projects button.bg-zinc-900\\/10 {
                background-color: #faf9f6 !important;
                color: #161514 !important;
              }
              #experience {
                background-color: #fcfbfa !important;
                border-top: 1px solid rgba(33, 32, 30, 0.1);
                color: #161514 !important;
              }
              #experience h2 {
                color: #161514 !important;
              }
              #experience .bg-zinc-900\\/60 {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #experience .border-zinc-900 {
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #experience h3 {
                color: #161514 !important;
              }
              #experience .text-zinc-400 {
                color: #4a4845 !important;
              }
              #experience .bg-zinc-900\\/10 {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #experience .bg-zinc-950 {
                background-color: #ffffff !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #skills {
                background-color: #f5f3ef !important;
                border-top: 1px solid rgba(33, 32, 30, 0.1);
                color: #161514 !important;
              }
              #skills h2 {
                color: #161514 !important;
              }
              #skills .text-zinc-500 {
                color: #5c5a57 !important;
              }
              #skills .border-zinc-900 {
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #skills .bg-zinc-900\\/10 {
                background-color: #ffffff !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #skills .bg-zinc-900\\/10:hover {
                border-color: rgba(33, 32, 30, 0.3) !important;
              }
              #skills h4 {
                color: #161514 !important;
              }
              #skills .bg-zinc-950\\/40 {
                background-color: #ffffff !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
                box-shadow: 0 4px 20px -2px rgba(0,0,0,0.03) !important;
              }
              #skills .bg-zinc-950 {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #skills .text-zinc-400 {
                color: #4a4845 !important;
              }
              #contact {
                background-color: #ffffff !important;
                border-top: 1px solid rgba(33, 32, 30, 0.1);
                color: #161514 !important;
              }
              #contact h2 {
                color: #161514 !important;
              }
              #contact .text-zinc-550, #contact .text-zinc-500 {
                color: #5c5a57 !important;
              }
              #contact .bg-zinc-900\\/10 {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #contact .bg-zinc-950\\/40 {
                background-color: #ffffff !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #contact input, #contact textarea {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.2) !important;
                color: #161514 !important;
              }
              #contact input:focus, #contact textarea:focus {
                border-color: #cb3a22 !important;
              }
              #contact button.bg-zinc-900 {
                background-color: #e8e6e0 !important;
                color: #161514 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
              #footer {
                background-color: #fbf9f6 !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
                color: #5c5a57 !important;
              }
              #footer .text-zinc-300 {
                color: #161514 !important;
              }
              #footer .text-zinc-550 {
                color: #5c5a57 !important;
              }
              #footer .bg-zinc-900\\/10 {
                background-color: #ffffff !important;
                border-color: rgba(33, 32, 30, 0.15) !important;
              }
            ` : ''}
          ` }} />

          {/* Floating Navigation Menu */}
          <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

          {/* Main Content Regions */}
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>

          {/* Clean minimal footer */}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
