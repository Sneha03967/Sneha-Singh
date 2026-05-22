import { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Sparkles, Network, User, CheckCircle2, Bookmark, Flame, CalendarRange, Heart } from 'lucide-react';
import { personalInfo, certifications, hobbies } from '../data';

export default function About() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [imgSrc, setImgSrc] = useState<string>("/sneha.jpg");
  const [mode, setMode] = useState<'portrait' | 'blueprint'>('portrait');

  const handleImageError = () => {
    const fallbacks = [
      "/sneha.jpg",
      "/Sneha.jpg.jpeg",
      "/sneha.jpg.jpeg",
      "/Sneha.jpg",
      "/sneha.png",
      "/Sneha.png",
      "/sneha.jpeg",
      "/Sneha.jpeg",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    ];
    
    const currentIndex = fallbacks.indexOf(imgSrc);
    if (currentIndex !== -1 && currentIndex < fallbacks.length - 1) {
      setImgSrc(fallbacks[currentIndex + 1]);
    }
  };

  const blueprintItems = [
    {
      icon: <Network className="h-4 w-4 text-[#cb3a22]" />,
      label: "Rigorous Systems Architecture",
      desc: "Coming from an analytical mathematical background (PCM in Senior Secondary) to Computer Science, I perceive software through a highly structured, systemic lens. Coding architectures are modular, highly-performant engines modeled to execute complex logic with high deterministic precision."
    },
    {
      icon: <Lightbulb className="h-4 w-4 text-[#cb3a22]" />,
      label: "Founder Instincts & Adaptability",
      desc: "I specialize in the intense creative margin between abstract inception and high-fidelity deployment. Fast mockup creation, database structuring, cohesive UI architecture, and direct pitching. Hackathons are my ultimate playground."
    },
    {
      icon: <Target className="h-4 w-4 text-[#cb3a22]" />,
      label: "Responsible AI Stewardship",
      desc: "Through DHARITRI AI, I study how neural weights propagate socio-demographic biases. My goal is to design real-world checking schemas that keep deep-learning workflows fair, transparent, and completely human-aligned."
    }
  ];

  return (
    <section
      id="about"
      className="relative bg-[#0e0d0c] px-6 py-28 select-none border-t border-[#21201e] overflow-hidden"
    >
      {/* Background grids and horizontal notebook-ledger texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_36px] pointer-events-none opacity-80" />
      <div className="absolute inset-y-0 left-[4%] w-[1px] bg-[#21201e]/30 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-[4%] w-[1px] bg-[#21201e]/30 pointer-events-none hidden xl:block" />

      {/* Narrative Section Index stamp on background */}
      <div className="absolute top-[10%] right-[5%] select-none pointer-events-none opacity-5 font-notebook text-7xl text-[#cb3a22]">
        * personal philosophy_
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Fine Editorial Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-[#21201e] pb-10">
          <div className="max-w-xl text-left">
            <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-[#cb3a22] uppercase block">
              01 // BIOGRAPHY & SYSTEM MANIFESTO
            </span>
            <h2 className="mt-4 font-serif text-4xl font-extralight tracking-tight text-[#f4f3f0] sm:text-6xl uppercase leading-none">
              BIOGRAPHICAL <span className="font-syne font-black text-[#cb3a22]">NARRATIVE</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md text-left md:text-right">
            <p className="font-mono text-[9px] text-[#a8a7a5] uppercase tracking-[0.25em] leading-relaxed font-bold">
              B.Tech Computer Science & Engineering<br />
              School of Management Sciences Lucknow
            </p>
          </div>
        </div>

        {/* Asymmetrical Multi-column Grid */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 items-start">
          
          {/* Left Block: Bio Narrative & Strengths MATRIX (7 Units) */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              {/* Elegant context tag */}
              <div className="inline-flex items-center gap-2 border-b border-[#21201e] pb-1 text-[#cb3a22] font-mono text-[9px] font-semibold tracking-[0.25em] uppercase">
                <span>BRIDGING NATURAL LOGIC & DIGITAL FRAMEWORKS</span>
              </div>

              <div className="space-y-4">
                <p className="font-serif text-lg leading-relaxed text-[#a8a7a5] italic font-light relative">
                  {personalInfo.bio}
                </p>
              </div>
              
              {/* Detailed credentials list */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="border border-[#21201e] bg-[#161514]/30 p-4 hover:border-[#cb3a22]/40 transition-colors">
                  <span className="font-mono text-[8px] text-[#cb3a22] tracking-wider block font-bold">ORGANIZATION</span>
                  <span className="text-xs font-bold text-[#f4f3f0] font-display uppercase tracking-wider mt-1 block">SMS Lucknow</span>
                </div>
                <div className="border border-[#21201e] bg-[#161514]/30 p-4 hover:border-[#cb3a22]/40 transition-colors">
                  <span className="font-mono text-[8px] text-[#cb3a22] tracking-wider block font-bold">DEGREE SPEC</span>
                  <span className="text-xs font-bold text-[#f4f3f0] font-display uppercase tracking-wider mt-1 block font-black">B.Tech CSE</span>
                </div>
                <div className="border border-[#21201e] bg-[#161514]/30 p-4 hover:border-[#cb3a22]/40 transition-colors bg-[#cb3a22]/2">
                  <span className="font-mono text-[8px] text-[#cb3a22] tracking-wider block font-bold">CORE MOTIVE</span>
                  <span className="text-xs font-bold text-[#f4f3f0] font-display uppercase tracking-wider mt-1 block">AI fairness & equity</span>
                </div>
              </div>
            </motion.div>

            {/* Custom Handwritten Annotative Margin Break to insert extreme humanity */}
            <div className="border-t border-b border-[#21201e] py-8 my-10 relative">
              <span className="absolute -top-3 left-[15%] px-3 bg-[#0e0d0c] font-mono text-[83%] tracking-widest text-[#cb3a22] font-bold uppercase">
                // SNEHA'S BUILD PHILOSOPHY //
              </span>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <p className="font-notebook text-2xl tracking-normal text-[#f4f3f0] leading-relaxed">
                    "I believe code should feel less like clean plastic templates and more like a carefully turned oak instrument. Whether structuring cultural details or detecting model bias, every decimal point of margin deserves intent."
                  </p>
                </div>
                <div className="md:col-span-4 border-l border-[#21201e] pl-4 font-mono text-[9px] text-[#a8a7a5] uppercase tracking-wider space-y-1">
                  <div className="flex justify-between font-bold">
                    <span>COFFEE PER ROUTINE:</span>
                    <span className="text-[#cb3a22]">2.5x</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>HACKATHON CAPACITY:</span>
                    <span className="text-[#cb3a22]">36HRS MAX</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>STATUS:</span>
                    <span className="text-white">ALWAYS EXPLORING</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Structured strengths deck */}
            <div className="space-y-6 pt-4">
              <span className="font-mono text-[9px] font-black tracking-[0.25em] text-[#cb3a22] uppercase block">
                SYSTEM ARCHITECT METHODOLOGIES // EXCLUDE NOISE
              </span>
              <div className="grid grid-cols-1 gap-4">
                {blueprintItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="group flex gap-5 border border-[#21201e] bg-[#161514]/10 hover:bg-[#161514]/30 p-5 hover:border-[#cb3a22]/30 transition-all duration-300"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-[#21201e] bg-[#0e0d0c] text-[#cb3a22] group-hover:border-[#cb3a22] transition-colors">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-xs font-black text-[#f4f3f0] tracking-widest uppercase">
                        {item.label}
                      </h4>
                      <p className="font-serif text-xs text-[#a8a7a5] leading-relaxed italic">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Custom Visual Portrait Frame & Certifications (5 Units) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Elegant Technical Portrait Deck (Intellectual Systems Blueprint) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative border border-[#21201e] bg-[#161514]/20 p-5 overflow-hidden group text-middle"
            >
              {/* Handwritten Note Ribbon Overlay */}
              <div className="absolute top-2 left-2 z-20 bg-[#cb3a22] text-white px-2 py-0.5 font-mono text-[7px] tracking-widest uppercase select-none font-bold">
                * ACTIVE DIARY SCRAP
              </div>

              {/* Blueprint space */}
              <div className="relative h-[480px] md:h-[540px] w-full border border-[#21201e] bg-[#0e0d0c] flex flex-col items-center justify-center overflow-hidden">
                {/* Horizontal blueprint guides */}
                <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_100%] border-b border-[#21201e]/50 z-10 pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_10px] border-r border-[#21201e]/50 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:16px_16px] z-10 pointer-events-none" />

                {mode === 'portrait' ? (
                  <div className="relative w-full h-full overflow-hidden">
                    {/* The Cinematic Photo */}
                    <img
                      src={imgSrc}
                      alt="Sneha Singh"
                      onError={handleImageError}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
                    />
                    
                    {/* Soft, professional, transparent vignette to align with theme aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c]/40 via-transparent to-[#0e0d0c]/15 pointer-events-none" />
                    
                    {/* Soft laser scanner line purely as a modern indicator, thin and high up */}
                    <div className="absolute top-2 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#cb3a22]/40 to-transparent animate-pulse" />
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center bg-[#0d0c0b]">
                    {/* Handdrawn circle vector layers */}
                    <svg className="h-44 w-44 text-[#21201e]/85 group-hover:text-[#cb3a22]/35 transition-colors duration-500 z-10" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.75" />
                      
                      {/* Axis coordinate lines */}
                      <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                      <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />

                      {/* High contrast Vermillion indicator */}
                      <circle cx="50" cy="30" r="2" fill="#cb3a22" />
                      <line x1="50" y1="30" x2="50" y2="50" stroke="#cb3a22" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="1.5" fill="#cb3a22" />
                    </svg>

                    {/* Mathematical/blueprint overlays */}
                    <div className="absolute top-8 left-8 font-mono text-[6px] text-white/10 tracking-widest uppercase">
                      X_AXIS_ROT_VECTOR_09
                    </div>
                    <div className="absolute bottom-8 right-8 font-mono text-[6px] text-white/10 tracking-widest uppercase">
                      Y_AXIS_ROT_VECTOR_14
                    </div>
                  </div>
                )}

                {/* Handdrawn annotation overlays - rendered ONLY under vector blueprint mode to prevent overlapping her headshot */}
                {mode === 'blueprint' && (
                  <>
                    <div className="absolute top-[18%] right-[8%] transform rotate-[8deg] select-none z-20">
                      <span className="font-notebook text-md md:text-lg text-[#cb3a22] leading-none pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        "pcm background yields symmetry!"
                      </span>
                    </div>

                    <div className="absolute bottom-[22%] left-[8%] transform -rotate-[4deg] select-none z-20">
                      <span className="font-notebook text-sm md:text-md text-[#ffffff]/70 leading-none pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        "SIH national final matrix"
                      </span>
                    </div>
                  </>
                )}

                {/* State Mode Toggler Pill positioned elegantly on top-right of the frame */}
                <div className="absolute top-3 right-3 z-30 flex items-center gap-1 bg-[#161514]/90 border border-[#21201e] p-[2px] rounded-none">
                  <button
                    onClick={() => setMode('portrait')}
                    className={`px-2 py-0.5 font-mono text-[7px] tracking-wider transition-all rounded-none uppercase cursor-pointer ${
                      mode === 'portrait' ? 'bg-[#cb3a22] text-white font-bold' : 'text-[#a8a7a5] hover:text-[#f4f3f0]'
                    }`}
                  >
                    PORTRAIT
                  </button>
                  <button
                    onClick={() => setMode('blueprint')}
                    className={`px-2 py-0.5 font-mono text-[7px] tracking-wider transition-all rounded-none uppercase cursor-pointer ${
                      mode === 'blueprint' ? 'bg-[#cb3a22] text-white font-bold' : 'text-[#a8a7a5] hover:text-[#f4f3f0]'
                    }`}
                  >
                    VECTOR
                  </button>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[8px] text-[#a8a7a5] uppercase tracking-widest z-20">
                  <span>BLUEPRINT COGNITION INDEX</span>
                  <span className="text-[#cb3a22] font-semibold animate-pulse">ACTIVE_MATRIX</span>
                </div>
              </div>

              {/* Identity coordinates block */}
              <div className="mt-5 space-y-1.5 text-left">
                <div className="font-display text-sm font-bold text-[#f4f3f0] tracking-widest uppercase">SNEHA SINGH // COGNITIVE_NODE</div>
                <div className="font-mono text-[9px] text-[#cb3a22] tracking-[0.15em] uppercase font-bold">LUCKNOW, IND // SECURE CHANNEL</div>
              </div>
            </motion.div>

            {/* Custom styled Credentials Tickets (Certifications) */}
            <div className="space-y-4">
              <div className="border border-[#21201e] bg-[#161514]/20 p-5 text-left">
                <h4 className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#cb3a22] uppercase mb-4 flex items-center gap-2">
                  <Bookmark className="h-3.5 w-3.5" /> VERIFIED CREDENTIALS
                </h4>
                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between border-b border-[#21201e]/60 pb-2.5 font-mono text-xs text-[#a8a7a5]"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#cb3a22] shrink-0" />
                        <span>{cert}</span>
                      </div>
                      <span className="hidden sm:block text-[8px] text-[#cb3a22] font-bold uppercase tracking-widest bg-[#cb3a22]/5 px-2.5 py-0.5">
                        [VERIFIED]
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research pursuits & Engagement bento */}
              <div className="border border-[#21201e] bg-[#161514]/20 p-5 text-left relative overflow-hidden">
                <h4 className="font-mono text-[9px] text-[#cb3a22] uppercase mb-4 flex items-center gap-2 tracking-[0.2em] font-bold">
                  <User className="h-3.5 w-3.5" /> CURRENT ACADEMIC PURSUITS
                </h4>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {hobbies.map((hobby, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#0e0d0c] border border-[#21201e] px-4 py-1.5 font-mono text-[#a8a7a5] text-xs hover:border-[#cb3a22]/40 duration-200 uppercase font-medium"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
                
                {/* Micro notebook doodle in the corner */}
                <div className="absolute -bottom-1 -right-3 select-none pointer-events-none opacity-20 transform -rotate-12">
                  <span className="font-notebook text-4xl text-[#cb3a22]">explore!</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
