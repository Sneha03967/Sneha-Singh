import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project as ProjectType } from '../types';
import { projects } from '../data';
import { 
  Plus, Minus, Globe, Github, Sparkles, Layers, TrendingUp, UserCheck, RefreshCw, Compass, ShieldAlert, BookOpen, AlertCircle, Cpu, Eye, Archive
} from 'lucide-react';

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>("heritage-canvas");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="relative bg-[#0e0d0c] px-6 py-28 select-none border-t border-[#21201e] overflow-hidden">
      
      {/* Background grids and faint ledger lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100%_30px] pointer-events-none" />
      <div className="absolute inset-y-0 left-[4%] w-[1px] bg-[#21201e]/30 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-[4%] w-[1px] bg-[#21201e]/30 pointer-events-none hidden xl:block" />

      {/* Background watermark "AUTHORED" */}
      <div className="absolute top-24 left-[5%] select-none pointer-events-none opacity-5 font-serif text-[12vw] font-bold tracking-tighter text-[#eae8e4] leading-none">
        WORKS/
      </div>

      <div className="mx-auto max-w-7xl relative z-10 font-sans">
        
        {/* Section Header with generous breathing room and strong editorial control */}
        <div className="mb-24 border-b border-[#21201e] pb-10 flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-xl text-left">
            <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-[#cb3a22] uppercase block">
              02 // INDIVIDUAL ARCHITECTURE & CODE WORLD
            </span>
            <h2 className="mt-4 font-serif text-4xl font-extralight tracking-tight text-[#f4f3f0] sm:text-6xl uppercase leading-none">
              AUTHORED <span className="font-syne font-black text-[#cb3a22]">SYSTEMS</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left">
            <p className="font-serif text-xs text-[#a8a7a5] max-w-xs leading-relaxed italic">
              Each project is rendered as its own conceptual universe—balancing the ancient weight of cultural heritage with mathematical models of fairness.
            </p>
          </div>
        </div>

        {/* Project workspace deck using custom non-identical cards */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isExpanded = expandedId === project.id;
            
            // Custom Visual Identity definitions
            const isHeritage = project.id === "heritage-canvas";
            
            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                
                // Heritage Canvas has a warm, museum-archive, heritage gold/crimson styling
                // DHARITRI has a tactical scientific laboratory model styling
                className={`group border relative transition-all duration-500 overflow-hidden rounded-none ${
                  isHeritage 
                    ? isExpanded 
                      ? 'border-[#eab308]/60 bg-[#161410] shadow-xl shadow-amber-950/5' 
                      : 'border-[#21201e] bg-[#161514]/10 hover:border-[#eab308]/30'
                    : isExpanded 
                      ? 'border-[#3b82f6]/60 bg-[#0d121c] shadow-xl shadow-blue-950/5' 
                      : 'border-[#21201e] bg-[#161514]/10 hover:border-[#3b82f6]/30'
                }`}
              >
                {/* Custom Cinematic Graphic Vibe watermarks for each world */}
                {isHeritage ? (
                  <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none select-none opacity-[0.015] group-hover:opacity-[0.045] transition-all duration-[800ms] ease-[0.16,1,0.3,1] group-hover:scale-105 z-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#eab308] fill-none stroke-[0.35]">
                      <circle cx="50" cy="50" r="45" />
                      <circle cx="50" cy="50" r="35" strokeDasharray="1 2" />
                      <path d="M 50,5 Q 55,25 50,45 Q 45,25 50,5" />
                      <path d="M 50,95 Q 55,75 50,55 Q 45,75 50,95" />
                      <path d="M 5,50 Q 25,55 45,50 Q 25,45 5,50" />
                      <path d="M 95,50 Q 75,55 55,50 Q 75,45 95,50" />
                      <polygon points="50,2 45,10 55,10" />
                      <polygon points="50,98 45,90 55,90" />
                      <circle cx="50" cy="50" r="15" />
                      <path d="M 50,50 L 85,15 M 50,50 L 15,85 M 50,50 L 85,85 M 50,50 L 15,15" strokeDasharray="3 3" />
                    </svg>
                  </div>
                ) : (
                  <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none select-none opacity-[0.015] group-hover:opacity-[0.045] transition-all duration-[800ms] ease-[0.16,1,0.3,1] group-hover:scale-105 z-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#3b82f6] fill-none stroke-[0.35]">
                      <rect x="10" y="10" width="80" height="80" strokeDasharray="2 2" />
                      <circle cx="30" cy="30" r="1.5" fill="#3b82f6" />
                      <circle cx="35" cy="25" r="1.5" fill="#3b82f6" />
                      <circle cx="25" cy="38" r="1.5" fill="#3b82f6" />
                      <circle cx="42" cy="30" r="1.5" fill="#3b82f6" />
                      <circle cx="70" cy="70" r="1.5" fill="#cb3a22" />
                      <circle cx="78" cy="65" r="1.5" fill="#cb3a22" />
                      <circle cx="65" cy="75" r="1.5" fill="#cb3a22" />
                      <circle cx="72" cy="80" r="1.5" fill="#cb3a22" />
                      <line x1="15" y1="85" x2="85" y2="15" strokeWidth="0.5" />
                      <line x1="20" y1="80" x2="80" y2="20" strokeDasharray="1 2" strokeWidth="0.25" />
                      <line x1="10" y1="90" x2="90" y2="10" strokeDasharray="1 2" strokeWidth="0.25" />
                      <path d="M 30,30 L 41.5,41.5 M 70,70 L 58.5,58.5" strokeDasharray="2 1" />
                    </svg>
                  </div>
                )}

                {/* Handcrafted Margin Stamping and Details for Individual World Building */}
                {isHeritage ? (
                  <div className="absolute top-0 right-0 h-[100px] w-[100px] pointer-events-none select-none opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg className="h-full w-full rotate-12" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
                      <text x="50" y="55" textAnchor="middle" className="font-serif text-[10px] fill-[#eab308]">ARCHIVE</text>
                    </svg>
                  </div>
                ) : (
                  <div className="absolute top-0 right-0 h-[100px] w-[100px] pointer-events-none select-none opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg className="h-full w-full" viewBox="0 0 100 100">
                      <rect x="10" y="10" width="80" height="80" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2 2" />
                      <text x="50" y="55" textAnchor="middle" className="font-mono text-[7px] fill-[#3b82f6]">MODEL_EVAL</text>
                    </svg>
                  </div>
                )}

                {/* Left decorative edge binder lines */}
                <div className={`absolute top-0 bottom-0 left-0 w-[4px] transition-transform duration-300 ${isHeritage ? 'bg-[#eab308]' : 'bg-[#3b82f6]'}`} />

                {/* Primary Trigger Row */}
                <div 
                  onClick={() => toggleExpand(project.id)}
                  className="p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none text-left relative z-10"
                >
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`font-mono text-[8px] font-bold tracking-[0.2em] px-3 py-1 bg-[#0e0d0c] border uppercase ${
                        isHeritage ? 'border-[#eab308]/30 text-[#eab308]' : 'border-[#3b82f6]/30 text-[#3b82f6]'
                      }`}>
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className={`font-mono text-[8px] font-bold tracking-[0.15em] flex items-center gap-1.5 px-3 py-1 bg-[#0e0d0c] border ${
                          isHeritage ? 'border-[#eab308]/20 text-[#eab308]/80' : 'border-[#3b82f6]/20 text-[#3b82f6]/80'
                        }`}>
                          <Sparkles className="h-3 w-3 animate-pulse" /> SIH NATIONAL FINALIST
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-serif text-3xl sm:text-4xl font-extralight text-[#f4f3f0] tracking-tight transition-all uppercase leading-none flex items-center gap-4">
                      <span className={`text-xs font-mono font-bold ${isHeritage ? 'text-[#eab308]' : 'text-[#3b82f6]'}`}>
                        0{index+1} //
                      </span>
                      {project.title}
                    </h3>
                    
                    <p className="font-serif text-sm font-light text-[#a8a7a5] leading-relaxed max-w-4xl italic">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tactile control button tailored per world */}
                  <div className="flex items-center gap-4 shrink-0自 mt-2 md:mt-0">
                    <div className="hidden lg:flex items-center gap-2">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className={`font-mono text-[8s] text-[#a8a7a5] bg-[#0e0d0c] px-3 py-1 border ${
                          isHeritage ? 'border-[#eab308]/15' : 'border-[#3b82f6]/15'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`flex h-12 w-12 items-center justify-center border transition-all duration-300 bg-[#0e0d0c] ${
                      isHeritage 
                        ? 'border-[#eab308]/20 text-[#eab308] hover:border-[#eab308]' 
                        : 'border-[#3b82f6]/20 text-[#3b82f6] hover:border-[#3b82f6]'
                    }`}>
                      {isExpanded ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded laboratory workspace */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="border-t border-[#21201e] bg-[#0e0d0c]/90 text-left relative"
                    >
                      {/* Notebook line backing inside details */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100%_35px] pointer-events-none" />

                      <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
                        
                        {/* Specifications Column (5 Units) */}
                        <div className="lg:col-span-5 space-y-8">
                          
                          {/* Section: The Problem */}
                          <div className="space-y-2">
                            <span className="font-mono text-[8px] tracking-[0.25em] text-[#cb3a22] font-black uppercase flex items-center gap-2">
                              {isHeritage ? <BookOpen className="h-4.5 w-4.5 text-[#eab308]" /> : <AlertCircle className="h-3.5 w-3.5 text-[#3b82f6]" />}
                              01 // EXAMINED ANOMALY / PROBLEM
                            </span>
                            <p className="font-serif text-sm text-[#a8a7a5] leading-relaxed italic pr-4">
                              {project.problem}
                            </p>
                          </div>

                          {/* Section: System Engineering Blueprint */}
                          <div className="space-y-2">
                            <span className="font-mono text-[8px] tracking-[0.25em] text-[#cb3a22] font-black uppercase block">
                              02 // IMPLEMENTATION BLUEPRINT / LOGIC
                            </span>
                            <p className="font-sans text-xs font-bold text-[#f4f3f0] leading-relaxed uppercase tracking-wider">
                              {project.solution}
                            </p>
                          </div>

                          {/* Personal Margin Diary / Handwritten notes for humanity */}
                          <div className="border border-[#21201e] bg-[#161514]/40 p-4 relative overflow-hidden">
                            {/* Tape graphical element on notebook diary */}
                            <div className="absolute top-0 left-6 right-6 h-3 bg-[#eab308]/5 border-x border-b border-[#21201e] text-[6px] text-center font-mono text-[#a8a7a5] leading-none select-none">
                              NOTEBOOK EXPANSION // CLASSIFIED
                            </div>
                            <div className="pt-2">
                              <span className="font-notebook text-xl text-[#eae8e4] block leading-relaxed italic">
                                {isHeritage 
                                  ? '"In building Heritage Canvas, my core revelation was that static pictures do not convey reverence. We had to build numerical coordinate algorithms that trace visual light paths over the monumental facades in pure code, giving a feeling of archival density."' 
                                  : '"Ethics in machine learning cannot be a superficial post-processing patch. Auditing DHARITRI required coding pre-training bias verification directly into demographic token dimensions. If model layers cannot justify fairness, they shouldn\'t compute."'}
                              </span>
                              <span className="font-mono text-[7px] text-[#cb3a22] tracking-[0.15em] block mt-3 uppercase font-bold text-right">
                                —— Sneha's Hand-scribed Diary
                              </span>
                            </div>
                          </div>

                          {/* Contributions Table */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="border border-[#21201e] bg-[#161514]/20 p-4 text-left">
                              <span className={`font-mono text-[8px] tracking-widest uppercase flex items-center gap-1.5 font-bold ${isHeritage ? 'text-[#eab308]' : 'text-[#3b82f6]'}`}>
                                <TrendingUp className="h-3.5 w-3.5" /> MILESTONE
                              </span>
                              <p className="mt-2 font-serif text-[11px] text-[#a8a7a5] leading-relaxed italic">
                                {project.impact}
                              </p>
                            </div>

                            <div className="border border-[#21201e] bg-[#161514]/20 p-4 text-left">
                              <span className={`font-mono text-[8px] tracking-widest uppercase flex items-center gap-1.5 font-bold ${isHeritage ? 'text-[#eab308]' : 'text-[#3b82f6]'}`}>
                                <UserCheck className="h-3.5 w-3.5" /> CONTRIBUTION
                              </span>
                              <p className="mt-2 font-serif text-[11px] text-[#a8a7a5] leading-relaxed italic">
                                {project.role}
                              </p>
                            </div>
                          </div>

                          {/* Technology Stack Nodes */}
                          <div className="space-y-3">
                            <span className="font-mono text-[8px] tracking-[0.25em] text-[#cb3a22] font-black uppercase block">
                              03 // ARCHITECT FLUID STACK
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {project.techStack.map((tech, i) => (
                                <span 
                                  key={i} 
                                  className={`font-mono text-[9px] text-[#f4f3f0] bg-[#161514]/60 border px-3 py-1 transition-colors ${
                                    isHeritage ? 'border-[#eab308]/20 hover:border-[#eab308]' : 'border-[#3b82f6]/20 hover:border-[#3b82f6]'
                                  }`}
                                >
                                    {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Repository triggers */}
                          <div className="flex flex-wrap gap-4 pt-6 border-t border-[#21201e]">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`flex items-center gap-2 text-white font-mono text-[10px] font-bold tracking-widest px-6 py-3.5 border transition-all ${
                                  isHeritage 
                                    ? 'bg-[#eab308] border-[#eab308] hover:bg-transparent hover:text-white' 
                                    : 'bg-[#3b82f6] border-[#3b82f6] hover:bg-transparent hover:text-white'
                                }`}
                              >
                                <Globe className="h-3.5 w-3.5" /> ACCESS SYSTEM PROTOTYPE
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 border border-[#21201e] bg-transparent text-[#a8a7a5] hover:text-[#f4f3f0] hover:border-[#cb3a22]/50 font-mono text-[10px] tracking-widest px-6 py-3.5 transition-colors"
                              >
                                <Github className="h-3.5 w-3.5" /> BROWSE LOGBOOK (GITHUB)
                              </a>
                            )}
                          </div>

                        </div>

                        {/* Interactive Diagnostic Work Bench (7 Units) */}
                        <div className="lg:col-span-7 flex flex-col justify-stretch">
                          <div className={`border bg-[#161514]/20 p-6 relative overflow-hidden flex-1 ${
                            isHeritage ? 'border-[#eab308]/20' : 'border-[#3b82f6]/20'
                          }`}>
                            {/* Decorative blueprint corners */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#21201e]" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#21201e]" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#21201e]" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#21201e]" />

                            <div className="absolute top-0 right-0 p-4 font-mono text-[7px] text-[#cb3a22]/65 uppercase tracking-widest select-none">
                              {isHeritage ? 'CULTURAL_PRESERVATION_BENCH v1.05' : 'FAIRNESS_AUDITING_BENCH v2.4'}
                            </div>

                            <div className="mb-6 flex items-center gap-2 border-b border-[#21201e] pb-3.5 font-mono text-[9px] tracking-widest uppercase font-black text-[#a8a7a5]">
                              {isHeritage ? (
                                <Archive className="h-4 w-4 text-[#eab308]" />
                              ) : (
                                <Cpu className="h-4.5 w-4.5 text-[#3b82f6] animate-pulse" />
                              )}
                              <span>{isHeritage ? 'HERITAGE ARCHIVAL MESH PLATFORM':'DHARITRI DECISION ENGINE INSPECTION'}</span>
                            </div>

                            {/* Dynamically render themed simulators */}
                            {project.id === "heritage-canvas" ? (
                              <HeritageCanvasSimulator />
                            ) : (
                              <DharitriSimulator />
                            )}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// MONOMENTAL BLUEPRINT SIMULATOR FOR HERITAGE CANVAS (GOLD/ARCHIVAL ARCHITECTURE)
// ============================================================================
function HeritageCanvasSimulator() {
  const [selectedMonument, setSelectedMonument] = useState<number>(0);

  const monuments = [
    { 
      name: "Taj Mahal Complex", 
      location: "Agra, UP", 
      details: "Mughal symmetry architecture rendering and virtual 3D point cloud coordinate alignment.", 
      meshNodes: 4500, 
      state: "CALIBRATED_100%",
      century: "17th Century",
      annotation: "Mathematical mirroring holds a 0.02% variance discrepancy across facades."
    },
    { 
      name: "Sun Temple Konark", 
      location: "Odisha", 
      details: "Elegantly calculated chariot stone-wheels functioning as solar chronometers. Virtual mesh simulation.", 
      meshNodes: 8200, 
      state: "ACTIVE_SCAN",
      century: "13th Century",
      annotation: "24 wheels serve as active sun dials tracing solar shadow gradients."
    },
    { 
      name: "Hampi Monuments", 
      location: "Karnataka", 
      details: "Stone temples and virtual interactive acoustic musical pillars frequency logs.", 
      meshNodes: 6100, 
      state: "CALIBRATED_94%",
      century: "14th Century",
      annotation: "Acoustic logs mapping solid granite pillar resonance structures."
    }
  ];

  return (
    <div className="space-y-6 text-xs text-left">
      <div className="flex flex-col gap-2 relative">
        <span className="font-mono text-[7px] text-[#eab308] uppercase tracking-widest block font-bold">// SECTOR SELECTOR // ORIGINAL FOLIOS</span>
        <p className="text-[#a8a7a5] font-serif leading-relaxed italic">
          Select an engineered cultural node below to inspect historic coordinates, vector calculations, and mathematical mesh density mapping:
        </p>
      </div>
      
      {/* Selector tabs styled like a physical portfolio ledger */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {monuments.map((m, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedMonument(idx)}
            className={`p-4 border text-left transition-all duration-300 cursor-pointer focus:outline-none flex flex-col justify-between h-[85px] relative ${
              selectedMonument === idx 
                ? 'border-[#eab308] bg-[#eab308]/5 text-[#f4f3f0]' 
                : 'border-[#21201e] bg-[#0e0d0c]/60 text-[#a8a7a5] hover:border-[#eab308]/30 hover:bg-[#161514]/30'
            }`}
          >
            {selectedMonument === idx && <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#eab308]" />}
            <div>
              <span className="font-mono text-[7px] text-[#cb3a22] font-black uppercase tracking-widest">FOLIO_0{idx+1}</span>
              <div className="truncate text-xs font-display font-bold uppercase tracking-wider text-[#f4f3f0] mt-1">{m.name}</div>
            </div>
            <div className="text-[8px] text-[#a8a7a5]/80 font-mono uppercase tracking-wider mt-1">{m.location}</div>
          </button>
        ))}
      </div>

      {/* Main Archival Simulator Panel */}
      <div className="bg-[#0e0d0c] border border-[#21201e] p-6 space-y-6 relative overflow-hidden">
        {/* Archival certificate header */}
        <div className="flex justify-between items-center text-[8px] font-mono border-b border-[#21201e] pb-3 text-[#a8a7a5]">
          <span className="flex items-center gap-1.5"><Globe className="h-3 w-3 text-[#eab308]" /> REGISTERED MONUMENT MESH PROTOCOL</span>
          <span className="text-[#eab308] bg-[#eab308]/5 border border-[#eab308]/25 px-2 py-0.5 font-bold tracking-widest">
            {monuments[selectedMonument].state}
          </span>
        </div>

        {/* Grid data specs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 space-y-4">
            <div>
              <span className="font-mono text-[7.5px] text-[#eab308] uppercase tracking-wider block font-bold">HISTORICAL ERA</span>
              <span className="text-sm font-serif font-semibold text-[#f4f3f0] block italic mt-0.5">{monuments[selectedMonument].century}</span>
            </div>

            <div>
              <span className="font-mono text-[7.5px] text-[#eab308] uppercase tracking-wider block font-bold">MATHEMATICAL RESOLUTON</span>
              <div className="text-[#f4f3f0] font-sans font-semibold uppercase tracking-wider text-xs leading-snug mt-1">{monuments[selectedMonument].details}</div>
            </div>

            {/* Handwritten scholar marginalia */}
            <div className="border-l-2 border-[#eab308] pl-4 py-0.5 bg-[#eab308]/2 pointer-events-none select-none">
              <span className="font-notebook text-lg leading-relaxed text-[#eae8e4] tracking-wide block">
                "{monuments[selectedMonument].annotation}"
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between border border-[#21201e] p-4 bg-[#161514]/30">
            <div className="space-y-1">
              <span className="font-mono text-[7px] text-[#a8a7a5] block uppercase leading-none font-bold">FACET NODE COUNT</span>
              <span className="text-3xl font-extrabold font-mono text-[#eab308] block leading-none mt-1">
                {monuments[selectedMonument].meshNodes}
              </span>
              <span className="text-[7px] text-[#a8a7a5] font-mono uppercase block">Symmetric Nodes</span>
            </div>

            <div className="h-[3px] w-full bg-[#21201e] mt-4 relative overflow-hidden">
              <motion.div 
                className="h-full bg-[#eab308]" 
                initial={{ width: 0 }}
                animate={{ width: `${(monuments[selectedMonument].meshNodes / 10000) * 100}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>

        {/* Vector laser tracing map animation */}
        <div className="h-20 w-full bg-[#161410] border border-[#eab308]/15 flex items-center justify-center relative overflow-hidden">
          <svg className="absolute inset-0 h-full w-full opacity-10 stroke-[#eab308]" viewBox="0 0 400 100" preserveAspectRatio="none">
            {/* Draw architectural lines */}
            <polygon points="120,80 160,20 200,50 240,20 280,80" strokeWidth="0.5" fill="none" />
            <line x1="160" y1="20" x2="240" y2="20" strokeWidth="0.5" />
            <circle cx="200" cy="50" r="3" fill="#eab308" />
            <path d="M 0,90 Q 200,10 400,90" strokeWidth="0.5" strokeDasharray="3 3 M 0,50 L 400,50" />
          </svg>
          <div className="flex items-center gap-2 relative z-10 font-mono text-[8px] text-[#eab308] tracking-widest uppercase bg-[#0e0d0c] border border-[#eab308]/30 px-3.5 py-1.5 font-bold select-none">
            <span className="animate-pulse h-1.5 w-1.5 rounded-full bg-[#eab308]" />
            COORDINATE VECTOR MAPPING SYSTEM ACTIVATED
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// FAIRNESS TESTING BLUEPRINT SIMULATOR FOR DHARITRI AI (SCIENTIFIC LABORATORY STYLE)
// ============================================================================
function DharitriSimulator() {
  const [demographic, setDemographic] = useState<'gender' | 'geographic' | 'economic'>('gender');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<{ biasScore: number; status: string; discrepancy: string; mathProof: string } | null>(null);

  const performAudit = () => {
    setIsAuditing(true);
    setAuditResult(null);
    setTimeout(() => {
      setIsAuditing(false);
      if (demographic === 'gender') {
        setAuditResult({ 
          biasScore: 92, 
          status: 'SEVERE_DISCREPANCY_SPOT', 
          discrepancy: 'Model outputs skewed risk weights against female biographical text strings by a 12% mathematical divergence ratio.',
          mathProof: "δ = ∫[x∈X] || P(Y|X, Gender=F) - P(Y|X, Gender=M) || dx"
        });
      } else if (demographic === 'geographic') {
        setAuditResult({ 
          biasScore: 54, 
          status: 'MUTED_TRANS_BIAS', 
          discrepancy: '8% performance margin variation cataloged between Tier-3 geographical regional embeddings versus Tier-1 corporate hubs.',
          mathProof: "Δ(G1, G2) = D_KL( P_G1 || P_G2 ) > 0.08"
        });
      } else {
        setAuditResult({ 
          biasScore: 78, 
          status: 'CLASS_DISCREPANCY', 
          discrepancy: 'Demographic models validate private pedigree features disproportional to generic economic cohorts, leading to high-contrast bias curves.',
          mathProof: "ε_Fairness = argmin_f [ Risk(f) + λ ⋅ Bias_Demographic(f) ]"
        });
      }
    }, 1200);
  };

  return (
    <div className="space-y-6 text-xs text-left">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[7px] text-[#3b82f6] uppercase tracking-widest block font-bold">// SCIENTIFIC DEMOGRAPHIC AXIS VALIDATORS //</span>
        <p className="text-[#a8a7a5] font-serif leading-relaxed italic">
          Run automated mathematical bias inspections along three fundamental societal cohorts. Inspect NLP vectors and de-biasing proofs in real-time:
        </p>
      </div>

      {/* Axis controllers styled as high quality laboratory dashboard levers */}
      <div className="grid grid-cols-3 gap-2">
        {(['gender', 'geographic', 'economic'] as const).map((demo) => (
          <button
            key={demo}
            onClick={() => { setDemographic(demo); setAuditResult(null); }}
            className={`py-3.5 border font-mono text-[9px] tracking-widest uppercase transition-all duration-300 cursor-pointer focus:outline-none relative ${
              demographic === demo 
                ? 'border-[#3b82f6] bg-[#3b82f6]/5 text-white font-black' 
                : 'border-[#21201e] bg-[#0e0d0c]/60 text-[#a8a7a5] hover:border-[#3b82f6]/30 hover:bg-[#161514]/30'
            }`}
          >
            {demographic === demo && <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#3b82f6]" />}
            {demo.toUpperCase()} COHORT
          </button>
        ))}
      </div>

      {/* Diagnostic panel */}
      <div className="bg-[#0e0d0c] border border-[#21201e] p-6 space-y-6 relative overflow-hidden">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#21201e] pb-3 text-[#a8a7a5] font-mono text-[8.5px]">
          <span className="flex items-center gap-1.5"><Cpu className="h-3 w-3 text-[#3b82f6]" /> MATRIX_TRANS_EVALUATOR</span>
          <button
            onClick={performAudit}
            disabled={isAuditing}
            className={`border font-mono text-[9px] font-bold tracking-widest px-5 py-2 transition-all cursor-pointer ${
              isAuditing 
                ? 'bg-[#21201e] border-[#21201e] text-[#a8a7a5]' 
                : 'bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] text-white active:scale-95'
            }`}
          >
            {isAuditing ? 'CALCULATING VERIFICATION...' : 'COMPUTE BIAS METRICS'}
          </button>
        </div>

        {/* Loading active audit state */}
        {isAuditing && (
          <div className="h-36 flex flex-col items-center justify-center text-center space-y-3">
            <RefreshCw className="h-7 w-7 text-[#3b82f6] animate-spin" />
            <div className="font-mono text-[8px] tracking-[0.25em] text-[#3b82f6] animate-pulse uppercase font-black">
              TRANSITIONING COHORT TOKEN SPACE // ANALYZING DISCREPANCY DISTANCES...
            </div>
          </div>
        )}

        {/* Inactive Standby State */}
        {!isAuditing && !auditResult && (
          <div className="h-36 flex flex-col items-center justify-center text-center border border-dashed border-[#21201e] space-y-2 select-none">
            <span className="font-mono text-[8px] text-[#3b82f6] uppercase tracking-widest animate-pulse">// STANDBY FOR TRIGGER INPUT //</span>
            <span className="font-serif text-[11px] text-[#a8a7a5] max-w-xs leading-relaxed italic block">
              Initiate the mathematical model audit mechanism above to analyze socio-demographic variance coefficients.
            </span>
          </div>
        )}

        {/* Active Analysis Result */}
        {!isAuditing && auditResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            
            {/* Visual Bias Score Index */}
            <div className="md:col-span-4 border border-[#21201e] bg-[#161514]/30 p-4 font-mono text-center flex flex-col justify-between items-center min-h-[140px]">
              <div>
                <span className="text-[7.5px] text-[#a8a7a5] block uppercase tracking-wider leading-none">BIAS IMPACT COMPLIANCE</span>
                <span className="text-4xl font-extrabold text-[#3b82f6] block mt-3 leading-none">{auditResult.biasScore}%</span>
              </div>
              <div className="w-full">
                <span className="text-[8px] text-[#cb3a22] block font-black border border-[#cb3a22]/20 bg-[#cb3a22]/5 py-1 px-2 uppercase tracking-wide">
                  {auditResult.status}
                </span>
              </div>
            </div>

            {/* Scientific Math and textual analysis */}
            <div className="md:col-span-8 space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-[7px] text-[#3b82f6] block uppercase tracking-widest font-black">// VECTOR DISCREPANCY DIAGNOSTIC</span>
                <p className="font-serif text-[11px] leading-relaxed italic text-[#a8a7a5]">
                  {auditResult.discrepancy}
                </p>
              </div>

              {/* Mathematical de-biasing formula rendering */}
              <div className="border border-[#21201e] p-3.5 bg-[#0e0d0c] font-mono text-center relative select-all">
                <span className="absolute top-1 left-2 font-mono text-[5.5px] text-[#a8a7a5]/60 uppercase">EVALUATION THEOREM Proof // Verified</span>
                <div className="text-[10px] text-[#3b82f6] mt-2.5 font-bold tracking-normal overflow-x-auto whitespace-nowrap pb-1">
                  {auditResult.mathProof}
                </div>
              </div>
            </div>

          </motion.div>
        )}

        {/* Scientific ticking graph element */}
        <div className="h-20 w-full border border-[#21201e] relative overflow-hidden select-none bg-[#0a0c10] flex items-center justify-between px-6 font-mono text-[8px] text-[#3b82f6]">
          <div className="flex gap-2 items-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
            </span>
            <span className="uppercase tracking-widest font-bold">ETHICAL EMBEDDING METRIC PIPELINE : DIRECT</span>
          </div>
          <div className="flex gap-1 items-center font-bold tracking-tighter shrink-0">
            <span>DHARITRI v1.07</span>
            <span>[EVALS_COMPLETED]</span>
          </div>
        </div>

      </div>
    </div>
  );
}
