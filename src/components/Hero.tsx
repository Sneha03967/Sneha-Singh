import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Terminal, Globe, Cpu, ArrowDown, Trophy, GraduationCap, LayoutGrid, BadgeCheck, Compass, Sparkles, Activity } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // States for the Interactive Systems Notebook
  const [activeSegment, setActiveSegment] = useState<number>(0);

  const cognitiveFacets = [
    {
      id: 0,
      title: "Analytical Systems",
      subtitle: "Deterministic Logic Flow",
      metric: "99% Algorithmic Precision",
      shortDesc: "Translating PCM (Physics, Chemistry, Maths) analytical frameworks to web systems. Software modeled as a deterministic ecosystem.",
      details: "Utilizing numerical optimization, physics engine concepts, and mathematically verified state logic. Bridges the gap between physical mechanics and functional layout design.",
      stats: { architecture: "Deterministic", nodes: "9.5k/s", logic: "Mathematical" },
      color: "#cb3a22", // Saffron Akane Red
      angle: 0,
      noteKey: "Sneha's annotation: Nature is structured. Why shouldn't web layouts exhibit the same physical elegance?",
      sketchType: "vector"
    },
    {
      id: 1,
      title: "AI Fairness Audit",
      subtitle: "Ethical Legibility Guardrails",
      metric: "98% Metric Consistency",
      shortDesc: "Authoring identity-based bias audits with Dharitri AI. Mapping socio-demographic lexical vectors.",
      details: "Built structured NLP embedding test matrices to inspect machine decisions across gender, geographic, and economic axes before release.",
      stats: { architecture: "Decentered", nodes: "1.2M params", logic: "Rigorous" },
      color: "#cb3a22", // Saffron Akane Red
      angle: 90,
      noteKey: "Audit observation: Machine logic without ethical guardrails is just automated prejudice.",
      sketchType: "auditGrid"
    },
    {
      id: 2,
      title: "SIH Hackathon Agility",
      subtitle: "Rapid Tactical Execution",
      metric: "100% Finalist Delivery",
      shortDesc: "Smart India Hackathon 25 finalist. Transitioning from abstract challenge to deployed prototype in 36 hours.",
      details: "High-pressure product mapping, full-stack coordination, interface wireframing, and stakeholder narrative design under strict SIH timelines.",
      stats: { architecture: "Tactile", nodes: "36hr Sprints", logic: "Entrepreneurial" },
      color: "#cb3a22",
      angle: 180,
      noteKey: "SIH '25 Log: Under severe resource fatigue, visual clarity and solid design hierarchy become your strongest leverage.",
      sketchType: "timeline"
    },
    {
      id: 3,
      title: "Interactive Interfaces",
      subtitle: "High-Fidelity Virtual Preservation",
      metric: "Aesthetic Core Focus",
      shortDesc: "Architecting interactive cultural portals like Heritage Canvas. Precision layouts and custom vector art.",
      details: "Merging custom 3D monument mesh simulation and fluid interactive soundscapes into performant React clients running flawlessly everywhere.",
      stats: { architecture: "Modular", nodes: "60fps Render", logic: "Empathetic" },
      color: "#cb3a22",
      angle: 270,
      noteKey: "Design Philosophy: Preserving heritage digitally is more than archival. It is an emotional translation of timeless architecture.",
      sketchType: "coordinate"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0e0d0c] px-6 md:px-12 py-24 text-[#f4f3f0] md:py-32 border-b border-[#21201e]"
    >
      {/* Background Ledger Lines - Giving a subtle notebook aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none opacity-80" />
      <div className="absolute inset-y-0 left-[8%] w-[1px] bg-[#cb3a22]/15 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-[8%] w-[1px] bg-[#21201e]/40 pointer-events-none hidden xl:block" />

      {/* Floating System-Diagram Blueprint Overlay (Cinematic parallax response) */}
      <div 
        className="absolute right-[5%] top-[25%] w-[45%] h-[50%] pointer-events-none select-none opacity-[0.035] hidden lg:block z-0"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full stroke-[#cb3a22] fill-none stroke-[0.75]">
          {/* Circular system orbitals */}
          <circle cx="200" cy="200" r="160" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="110" />
          <circle cx="200" cy="200" r="60" strokeDasharray="2 4" />
          
          {/* Crosshairs & grid lines */}
          <line x1="200" y1="10" x2="200" y2="390" strokeDasharray="3 3" />
          <line x1="10" y1="200" x2="390" y2="200" strokeDasharray="3 3" />
          
          {/* Outer compass markers */}
          <polygon points="200,6 195,18 205,18" />
          <polygon points="200,394 195,382 205,382" />
          
          {/* Sub nodes and vector chains */}
          <circle cx="200" cy="40" r="4.5" fill="#cb3a22" />
          <circle cx="90" cy="200" r="4.5" fill="#cb3a22" />
          <path d="M 200,40 L 310,90 L 290,310 L 90,200 Z" />
          <text x="212" y="36" className="font-mono text-[7px] fill-[#a8a7a5] stroke-none tracking-widest uppercase">SYS_PIVOT_VAL_1</text>
          <text x="40" y="196" className="font-mono text-[7px] fill-[#a8a7a5] stroke-none tracking-widest uppercase">ALPHA_INDEX</text>
        </svg>
      </div>

      {/* Large visual section marker "01" in elegant modern serif typography */}
      <div className="absolute top-[15%] right-[10%] select-none pointer-events-none opacity-5 font-serif text-[18vw] font-light tracking-tighter text-[#eae8e4] leading-none">
        01
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        
        {/* Living Notebook Margin Notes / Metadata Header */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between border-b border-[#21201e] pb-6 mb-16 gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[9px] tracking-[0.25em] text-[#a8a7a5] uppercase">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cb3a22] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#cb3a22]"></span>
              </span>
              <span className="font-semibold text-[#f4f3f0] tracking-[0.2em]">FOLIO INDEX_2026</span>
            </div>
            <div className="border-l border-[#21201e] pl-4">Location: Lucknow Area // 226001</div>
            <div className="border-l border-[#21201e] pl-4">Focus: Algorithmic Systems</div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-notebook text-base text-[#cb3a22] translate-y-0.5 select-none animate-pulse">
              * Living Journal Entries of an Inquisitive Builder
            </span>
          </div>
        </div>

        {/* Master layout grid: Left cinematic narrative, Right Interactive Journal Node */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start mt-6">
          
          {/* Main Cinematic Column (7 Units on desktop) */}
          <div className="lg:col-span-7 space-y-12 text-left relative z-10">
            
            {/* Cinematic Narrative Title Block */}
            <div className="space-y-6">
              
              <div className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] text-[#cb3a22] uppercase border-b border-[#cb3a22]/20 pb-1">
                <span>Sneha Singh's Manifesto // Chapter I</span>
              </div>

              {/* Spectacular narrative opening heading */}
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-[#f4f3f0] leading-[1.15] max-w-3xl">
                I build systems for <span className="italic font-normal text-[#cb3a22] relative group inline-block">memory
                  <span className="absolute bottom-1 left-0 w-full h-[1.5px] bg-[#cb3a22]/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </span>, <span className="font-mono text-xs sm:text-sm tracking-widest font-light text-[#a8a7a5] inline-block align-middle px-3 py-1 border border-[#21201e] mx-2 bg-[#161514]/30 select-all hover:border-[#cb3a22]/30 hover:text-white transition-all">trust</span>, and <span className="italic font-normal relative group inline-block">human complexity
                  <sup className="text-[10px] font-mono text-[#cb3a22] ml-0.5 select-none">*</sup>
                </span>.
              </h1>

              {/* Emotionally connected student / builder biography */}
              <p className="font-serif text-lg md:text-xl leading-relaxed text-[#a8a7a5] font-light max-w-2xl italic">
                A computer science developer trained to look past automated logic. I find elegance in systems that honor our culture, audit bias with absolute rigor, and survive under extreme hackathon durations.
              </p>
            </div>

            {/* Handcrafted Notebook annotation callout */}
            <div className="relative border-l-2 border-[#cb3a22] pl-6 py-1 max-w-xl">
              <span className="absolute -left-[9px] top-0 h-4 w-4 bg-[#cb3a22]/10 text-[#cb3a22] flex items-center justify-center font-mono text-[9px] font-bold select-none">*</span>
              <p className="font-notebook text-xl leading-relaxed text-[#eae8e4] tracking-wide select-none">
                "We are in the era of automated logic, but the systems that endure are the ones engineered with real human intent. That is what I build."
              </p>
              <div className="mt-2 font-mono text-[8px] tracking-[0.2em] text-[#a8a7a5] uppercase">
                —— CURRENT_TRAJECTORY : B.TECH CSE @ SMS LUCKNOW
              </div>
            </div>

            {/* Dynamic Interactive Call to Action */}
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <button
                onClick={() => handleScrollToSection('projects')}
                className="group relative flex items-center justify-center gap-3 bg-[#cb3a22] px-8 py-4 text-xs font-mono tracking-widest text-white transition-all hover:bg-[#b02f1a] active:scale-95 cursor-pointer border border-[#cb3a22]"
              >
                OPEN WORK ARCHIVES
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollToSection('about')}
                className="group flex items-center justify-center gap-2 border border-[#21201e] bg-transparent px-8 py-4 text-xs font-mono tracking-widest text-[#f4f3f0] hover:bg-[#21201e] hover:border-[#cb3a22]/30 active:scale-95 transition-all cursor-pointer"
              >
                READ THE JOURNAL
              </button>

              <a
                href="https://www.linkedin.com/in/sneha-singh-6aaa6a317"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 border-b border-[#21201e] hover:border-[#cb3a22] px-1 py-1.5 text-[9px] font-mono tracking-[0.2em] text-[#a8a7a5] hover:text-[#f4f3f0] transition-all ml-0 sm:ml-4"
              >
                <span>CONNECT [CV.INDEX]</span>
              </a>
            </div>

          </div>

          {/* Interactive Journal Worksheets Console (5 Units) */}
          <div className="lg:col-span-5 flex flex-col items-stretch space-y-6">
            
            {/* The Notebook Folio Interactive Header */}
            <div className="border border-[#21201e] bg-[#161514]/30 p-6 relative overflow-hidden flex flex-col justify-between">
              
              {/* Notebook page header styling */}
              <div className="flex justify-between items-start border-b border-[#21201e] pb-3.5 mb-4">
                <div>
                  <span className="font-mono text-[8px] text-[#cb3a22] tracking-widest block font-bold">// SYSTEMS_NOTEBOOK //</span>
                  <h3 className="font-display text-xs font-black uppercase tracking-wider text-[#f4f3f0] mt-1">Core Cognitive Pillars</h3>
                </div>
                <div className="text-right font-mono text-[8px] text-[#a8a7a5] select-none">
                  Page 01 // Index
                </div>
              </div>

              {/* Selector Tabs styled as hand-tabbed notebook bookmarks */}
              <div className="space-y-2">
                {cognitiveFacets.map((facet, idx) => {
                  const isActive = activeSegment === idx;
                  return (
                    <button
                      key={facet.id}
                      onClick={() => setActiveSegment(idx)}
                      className={`w-full text-left p-3.5 border transition-all duration-300 relative overflow-hidden cursor-pointer focus:outline-none flex justify-between items-center ${
                        isActive 
                          ? 'border-[#cb3a22] bg-[#cb3a22]/5 text-[#f4f3f0]' 
                          : 'border-[#21201e] bg-[#0e0d0c]/80 text-[#a8a7a5] hover:border-[#cb3a22]/30 hover:bg-[#161514]/40'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#cb3a22]" />
                      )}
                      
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[8px] text-[#cb3a22]">0{idx + 1} /</span>
                          <span className={`text-[11px] font-display font-black tracking-widest uppercase ${isActive ? 'text-white' : 'text-[#a8a7a5]'}`}>
                            {facet.title}
                          </span>
                        </div>
                        <span className="font-serif text-[10px] italic block text-[#a8a7a5]/80">
                          {facet.subtitle}
                        </span>
                      </div>

                      <div className="text-right flex items-center gap-2">
                        <span className="font-mono text-[8px] opacity-70 tracking-tight hidden sm:block">
                          {facet.metric}
                        </span>
                        <div className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-[#cb3a22] animate-pulse' : 'bg-transparent'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Details of the active journal annotation */}
              <div className="mt-6 border-t border-[#21201e] pt-4 min-h-[140px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-[7px] font-mono text-[#a8a7a5] uppercase tracking-widest">
                    <span>Active Annotation Log:</span>
                    <span className="text-[#cb3a22] font-black">{cognitiveFacets[activeSegment].metric}</span>
                  </div>
                  
                  <p className="font-serif text-sm text-[#f4f3f0] leading-relaxed mt-2.5 italic">
                    {cognitiveFacets[activeSegment].shortDesc}
                  </p>

                  <div className="font-notebook text-lg text-[#cb3a22] mt-3 leading-tight select-none">
                    "{cognitiveFacets[activeSegment].noteKey}"
                  </div>
                </div>

                {/* Micro specification ledger */}
                <div className="mt-5 grid grid-cols-3 gap-2 pt-3 border-t border-[#21201e] text-center font-mono text-[8px] text-[#a8a7a5]">
                  <div>
                    <span className="block text-[6px] text-[#a8a7a5]/60 uppercase tracking-widest">ARCHITECT STYLE</span>
                    <span className="text-[#f4f3f0] font-bold uppercase mt-0.5 block">{cognitiveFacets[activeSegment].stats.architecture}</span>
                  </div>
                  <div>
                    <span className="block text-[6px] text-[#a8a7a5]/60 uppercase tracking-widest">BANDWIDTH SPEED</span>
                    <span className="text-[#f4f3f0] font-bold uppercase mt-0.5 block">{cognitiveFacets[activeSegment].stats.nodes}</span>
                  </div>
                  <div>
                    <span className="block text-[6px] text-[#a8a7a5]/60 uppercase tracking-widest">VERIFIED PROTOCOL</span>
                    <span className="text-[#cb3a22] font-bold uppercase mt-0.5 block">{cognitiveFacets[activeSegment].stats.logic}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Notebook Sketch Box */}
            <div className="border border-[#21201e] bg-[#161514]/15 p-5 relative overflow-hidden flex flex-col justify-between h-[150px] group select-none">
              <div className="absolute top-2 right-3 font-notebook text-sm text-[#cb3a22]/60 uppercase">
                * Handdrawn_vector_render
              </div>
              
              <div className="font-mono text-[8px] text-[#a8a7a5] uppercase tracking-[0.2em]">
                SYS // STRUCTURAL_MESH_SKETCH
              </div>

              {/* Responsive interactive dynamic geometric rendering simulating a handwritten journal draft */}
              <div className="h-20 w-full relative flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="absolute inset-0 h-full w-full stroke-[#cb3a22] fill-none" viewBox="0 0 400 100">
                  {activeSegment === 0 && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      {/* Mathematical mechanical formula sketch */}
                      <path d="M 10,50 L 50,50 L 90,20 L 130,80 L 170,50 L 390,50" strokeWidth="0.75" />
                      <circle cx="90" cy="20" r="3" fill="#cb3a22" />
                      <circle cx="130" cy="80" r="3" fill="#cb3a22" />
                      <line x1="90" y1="20" x2="90" y2="80" strokeDasharray="3 3" strokeWidth="0.5" />
                      <line x1="130" y1="80" x2="130" y2="20" strokeDasharray="3 3" strokeWidth="0.5" />
                      <text x="100" y="30" className="font-mono text-[6px] fill-[#a8a7a5] stroke-none">f(x) = Deterministic Engine</text>
                    </motion.g>
                  )}
                  {activeSegment === 1 && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      {/* NLP model matrix nodes */}
                      <rect x="50" y="15" width="300" height="70" strokeWidth="0.5" strokeDasharray="2 2" />
                      <line x1="200" y1="15" x2="200" y2="85" strokeWidth="0.5" />
                      <circle cx="150" cy="50" r="10" strokeWidth="1" />
                      <circle cx="250" cy="50" r="10" strokeWidth="1" />
                      <path d="M 160,50 Q 200,80 240,50" strokeWidth="0.75" />
                      <text x="75" y="30" className="font-notebook text-xs fill-[#cb3a22] stroke-none">Gender Bias Mitigation Axis</text>
                    </motion.g>
                  )}
                  {activeSegment === 2 && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      {/* SIH Sprint timeline */}
                      <line x1="10" y1="50" x2="390" y2="50" strokeWidth="1" />
                      <path d="M 10,50 C 100,10 150,90 200,50 C 250,10 300,90 390,50" strokeWidth="0.5" strokeDasharray="3 3" />
                      <text x="15" y="35" className="font-mono text-[6px] fill-[#cb3a22] stroke-none">0HR START</text>
                      <text x="175" y="80" className="font-mono text-[6px] fill-[#cb3a22] stroke-none">18HR INTEGRATION</text>
                      <text x="340" y="35" className="font-mono text-[6px] fill-[#cb3a22] stroke-none">36HR COMPILATION</text>
                    </motion.g>
                  )}
                  {activeSegment === 3 && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      {/* Heritage virtual mesh coordinate */}
                      <polygon points="200,15 150,75 250,75" strokeWidth="1" />
                      <line x1="200" y1="15" x2="200" y2="75" strokeWidth="0.5" />
                      <line x1="150" y1="75" x2="200" y2="45" strokeWidth="0.5" />
                      <line x1="250" y1="75" x2="200" y2="45" strokeWidth="0.5" />
                      <text x="260" y="45" className="font-notebook text-sm fill-[#a8a7a5] stroke-none">Virtual Dome Meshing</text>
                    </motion.g>
                  )}
                </svg>
              </div>

              <div className="flex justify-between items-center text-[7px] font-mono text-[#a8a7a5]">
                <span>SCALE INDEX: DYNAMIC_1.0</span>
                <span>STATE_NODE: ACTIVE // 100% PERSISTENT</span>
              </div>
            </div>

          </div>

        </div>

        {/* Real Profile Highlights (Brutalist card layout with sharp borders & margin annotations) */}
        <div className="mt-28 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#21201e] pt-10 text-left">
          
          {/* Card 1: B.Tech CSE Education */}
          <div className="group border border-[#21201e] bg-[#161514]/10 p-5 hover:border-[#cb3a22]/60 transition-colors flex flex-col justify-between h-[155px] relative">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] text-[#cb3a22] tracking-widest uppercase font-semibold">I // EDUCATION</span>
              <GraduationCap className="h-4 w-4 text-[#a8a7a5] group-hover:text-[#cb3a22] transition-colors" />
            </div>
            <div className="absolute right-3 top-8 translate-y-2 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="font-notebook text-sm text-[#cb3a22]">SMS Lucknow!</span>
            </div>
            <div className="mt-2 text-left">
              <div className="text-md font-bold text-[#f4f3f0] font-display uppercase tracking-wide">
                B-TECH STUDENT
              </div>
              <span className="text-[9px] text-[#a8a7a5] font-serif italic block mt-0.5">School of Management Sciences</span>
            </div>
            <div className="font-mono text-[8.5px] text-[#a8a7a5] leading-relaxed truncate">Translating computer logic to real-world products.</div>
          </div>

          {/* Card 2: SIH 2025 Finalist */}
          <div className="group border border-[#21201e] bg-[#161514]/10 p-5 hover:border-[#cb3a22]/60 transition-colors flex flex-col justify-between h-[155px] relative">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] text-[#cb3a22] tracking-widest uppercase font-semibold">II // RECOGNITIONS</span>
              <Trophy className="h-4 w-4 text-[#a8a7a5] group-hover:text-[#cb3a22] transition-colors" />
            </div>
            <div className="absolute right-3 top-8 translate-y-2 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="font-notebook text-sm text-[#cb3a22]">SIH Finals '25!</span>
            </div>
            <div className="mt-2 text-left">
              <div className="text-md font-bold text-[#f4f3f0] font-display uppercase tracking-wide">
                SIH 2025 FINALIST
              </div>
              <span className="text-[9px] text-[#a8a7a5] font-serif italic block mt-0.5">Smart India Hackathon</span>
            </div>
            <div className="font-mono text-[8.5px] text-[#a8a7a5] leading-relaxed truncate">National finalist in cultural preservation.</div>
          </div>

          {/* Card 3: DHARITRI AI Fairness */}
          <div className="border border-[#21201e] bg-[#161514]/10 p-5 hover:border-[#cb3a22]/60 transition-colors flex flex-col justify-between h-[155px] group relative">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] text-[#cb3a22] tracking-widest uppercase font-semibold">III // RESEARCH FOCUS</span>
              <Cpu className="h-4 w-4 text-[#a8a7a5] group-hover:text-[#cb3a22] transition-colors" />
            </div>
            <div className="absolute right-3 top-8 translate-y-2 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="font-notebook text-sm text-[#cb3a22]">Ethical Weight AI</span>
            </div>
            <div className="mt-2 text-left">
              <div className="text-md font-bold text-[#f4f3f0] font-display uppercase tracking-wide">
                AI FAIRNESS TESTING
              </div>
              <span className="text-[9px] text-[#a8a7a5] font-serif italic block mt-0.5">Dharitri De-biasing Unit</span>
            </div>
            <div className="font-mono text-[8.5px] text-[#a8a7a5] leading-relaxed truncate">Mitigating demographic bias anomalies.</div>
          </div>

          {/* Card 4: Certifications Badge */}
          <div className="group border border-[#21201e] bg-[#161514]/10 p-5 hover:border-[#cb3a22]/60 transition-colors flex flex-col justify-between h-[155px] relative">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] text-[#cb3a22] tracking-widest uppercase font-semibold">IV // CREDENTIAL CORE</span>
              <BadgeCheck className="h-4 w-4 text-[#a8a7a5] group-hover:text-[#cb3a22] transition-colors" />
            </div>
            <div className="absolute right-4 top-8 translate-y-2 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="font-notebook text-[15px] text-[#cb3a22]">Verified Skills</span>
            </div>
            <div className="mt-2 text-left">
              <div className="text-md font-bold text-[#f4f3f0] font-display uppercase tracking-wide">
                VERIFIED SKILLS
              </div>
              <span className="text-[9px] text-[#a8a7a5] font-serif italic block mt-0.5">Ethical hacking, Fullstack, Prompts</span>
            </div>
            <div className="font-mono text-[8.5px] text-[#a8a7a5] leading-relaxed truncate">Continuously building modern prototypes.</div>
          </div>
        </div>

        {/* Scroll Manifesto trigger */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => handleScrollToSection('about')}
            className="flex flex-col items-center gap-1.5 hover:text-white transition-colors cursor-pointer group focus:outline-none"
          >
            <span className="font-mono text-[8px] tracking-[0.3em] text-[#cb3a22] group-hover:text-white transition-colors uppercase select-none">READ THE SYSTEMS MANIFESTO</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="h-4 w-4 text-[#cb3a22]" />
            </motion.div>
          </button>
        </div>

      </div>
    </section>
  );
}
