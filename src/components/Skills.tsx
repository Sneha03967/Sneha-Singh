import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillCategories } from '../data';
import { 
  Palette, Laptop, Terminal, Users, Activity, Sliders, Cpu, Code2, Sparkles, Pin
} from 'lucide-react';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(skillCategories[0]?.skills[0] || null);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="h-4 w-4" />;
      case 'Laptop': return <Laptop className="h-4 w-4" />;
      case 'Terminal': return <Terminal className="h-4 w-4" />;
      case 'Users': return <Users className="h-4 w-4" />;
      default: return <Code2 className="h-4 w-4" />;
    }
  };

  return (
    <section id="skills" className="relative bg-[#0e0d0c] px-6 py-28 select-none border-t border-[#21201e] overflow-hidden">
      
      {/* Background ledger blueprint grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100%_33px] pointer-events-none" />
      <div className="absolute inset-y-0 left-[4%] w-[1px] bg-[#21201e]/30 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-[4%] w-[1px] bg-[#21201e]/30 pointer-events-none hidden xl:block" />

      {/* Large background section label "04/" */}
      <div className="absolute top-12 left-[6%] select-none pointer-events-none opacity-5 font-serif text-[18vw] font-light tracking-tighter text-[#eae8e4] leading-none">
        04
      </div>

      <div className="mx-auto max-w-7xl relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-[#21201e] pb-8 flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-xl text-left">
            <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-[#cb3a22] uppercase block">
              04 // CAPABILITY DICTIONARY DIAGNOSIS
            </span>
            <h2 className="mt-4 font-serif text-4xl font-extralight tracking-tight text-[#f4f3f0] sm:text-6xl uppercase leading-none">
              SKILLS & <span className="font-syne font-black text-[#cb3a22]">CAPABILITIES</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left">
            <p className="font-serif text-xs text-[#a8a7a5] max-w-xs leading-relaxed italic">
              Highly integrated engineering proficiencies, verified through Smart India Hackathon prototypes and algorithmic de-biasing solutions.
            </p>
          </div>
        </div>

        {/* Dynamic Skills Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skill Cards Matrix (7 Units) */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-10 text-left">
            {skillCategories.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-4">
                <span className="font-mono text-[9px] font-black tracking-[0.25em] text-[#cb3a22] uppercase block font-bold">
                  [SPECIALIZATION_{catIdx + 1}] // {cat.title}
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.skills.map((skill, sIdx) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <motion.div
                        key={sIdx}
                        onMouseEnter={() => setSelectedSkill(skill)}
                        onClick={() => setSelectedSkill(skill)}
                        className={`border p-4.5 transition-all duration-300 cursor-pointer flex items-center justify-between group rounded-none relative overflow-hidden ${
                          isSelected 
                            ? 'border-[#cb3a22] bg-[#cb3a22]/5' 
                            : 'border-[#21201e] bg-[#161514]/10 hover:border-[#cb3a22]/40 hover:bg-[#161514]/30'
                        }`}
                        whileHover={{ y: -1 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 items-center justify-center border transition-colors duration-200 rounded-none ${
                            isSelected ? 'border-[#cb3a22] text-[#cb3a22] bg-[#0e0d0c]' : 'border-[#21201e] bg-[#0e0d0c] text-[#a8a7a5]'
                          }`}>
                            {getSkillIcon(skill.icon)}
                          </div>
                          <div>
                            <h4 className="font-serif text-xs font-semibold text-[#f4f3f0] uppercase tracking-wide transition-colors">
                              {skill.name}
                            </h4>
                            <span className="font-mono text-[7px] text-[#a8a7a5]/70 tracking-widest block mt-0.5 uppercase">VERIFIED PROTOCOL</span>
                          </div>
                        </div>

                        {/* Level badge */}
                        <div className={`font-mono text-[9px] font-bold px-3 py-1.5 border ${
                          isSelected ? 'bg-[#0e0d0c] border-[#cb3a22] text-white' : 'bg-[#0e0d0c] border-[#21201e] text-[#a8a7a5]'
                        }`}>
                          {skill.level}%
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Diagnostic Console (5 Units) - Notebook styled worksheet evaluation */}
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="border border-[#21201e] bg-[#161514]/10 p-6 md:p-8 relative overflow-hidden min-h-[380px] flex flex-col justify-between text-left rounded-none">
              
              {/* Notebook binding accent */}
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-[repeating-linear-gradient(to_bottom,#cb3a22,#cb3a22_4px,transparent_4px,transparent_8px)]" />

              {/* Millimeter calibration mark mocks inside visual frame */}
              <div className="absolute top-0 right-0 p-5 font-mono text-[7px] text-[#cb3a22]/30 uppercase tracking-widest select-none">
                SKILLS_DIAGNOSTIC_C_1.0
              </div>

              {/* Head display details */}
              <div className="space-y-1.5 pl-2">
                <div className="font-mono text-[9px] tracking-[0.25em] text-[#cb3a22] uppercase flex items-center gap-1.5 font-bold">
                  <Activity className="h-4 w-4 animate-pulse text-[#cb3a22]" /> SYSTEM CORE SCOPE
                </div>
                <div className="font-mono text-[7.5px] text-[#a8a7a5] uppercase tracking-wider">Verification State & Matrix Plottings</div>
              </div>

              <AnimatePresence mode="wait">
                {selectedSkill ? (
                  <motion.div
                    key={selectedSkill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 my-auto py-4 pl-2"
                  >
                    <div>
                      <span className="font-mono text-[7px] text-[#cb3a22] uppercase tracking-widest block font-bold">SELECTED SPECIALTY_</span>
                      <h4 className="font-serif text-2xl font-normal text-[#f4f3f0] tracking-wide uppercase mt-1 leading-none">{selectedSkill.name}</h4>
                    </div>

                    <div>
                      <span className="font-mono text-[7px] text-[#a8a7a5] uppercase tracking-widest block mb-1.5 font-bold">ASSESSED SKILL DENSITY</span>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-extrabold font-mono text-[#cb3a22] leading-none">{selectedSkill.level}%</div>
                        <div className="flex-1 h-[2px] bg-[#21201e] overflow-hidden">
                          <motion.div 
                            className="h-full bg-[#cb3a22]"
                            initial={{ width: 0 }}
                            animate={{ width: `${selectedSkill.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="font-mono text-[7px] text-[#a8a7a5] uppercase tracking-widest block font-bold">APPLICATIONS CONTEXT // SPEC SHEET</span>
                      <p className="font-serif text-sm text-[#a8a7a5] mt-2 leading-relaxed text-left italic font-light">
                        {selectedSkill.description}
                      </p>
                    </div>

                    {/* Highly intimate handwriting note relating to the selected skill */}
                    <div className="border border-[#21201e] bg-[#0e0d0c] p-4 font-notebook text-xl text-[#eae8e4] tracking-wide relative select-none">
                      <Pin className="absolute top-2 right-2 h-4.5 w-4.5 text-[#cb3a22] transform rotate-12 scale-75 opacity-70" />
                      {selectedSkill.name === "Web Design" && (
                        <span>"Design is the emotional container. Moving a text block 4 pixels left can make the user breathe easier without ever knowing why."</span>
                      )}
                      {selectedSkill.name === "Web App Development" && (
                        <span>"React state needs to flow like physical liquids. If it gets trapped in local locks, the user experience builds static drag friction."</span>
                      )}
                      {selectedSkill.name === "Python Programming Proficiency" && (
                        <span>"Python code in Dharitri AI was engineered to sweep demographic lexical offsets. Pure logic working as an equalizing mechanical filter."</span>
                      )}
                      {selectedSkill.name === "Leadership and Team Building" && (
                        <span>"SIH's final 12 hours teach you that leadership is less about delegation and more about holding the visual rhythm steady, keeping exhaustion at bay."</span>
                      )}
                      {/* Fallback handwritten annotation */}
                      {!["Web Design", "Web App Development", "Python Programming Proficiency", "Leadership and Team Building"].includes(selectedSkill.name) && (
                        <span>"Continuous builder execution state verified across Smart India Hackathon prototypes. Built with rigorous dedication."</span>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <div className="my-auto py-12 text-center text-[#a8a7a5] font-mono text-xs pl-2">
                    Hover or select a diagnostic module...
                  </div>
                )}
              </AnimatePresence>

              {/* Footer diagnostic logs */}
              <div className="border-t border-[#21201e] pt-3.5 pl-2 flex items-center justify-between font-mono text-[8px] text-[#a8a7a5] uppercase leading-none font-bold">
                <span>Verification State // SIH 25</span>
                <span className="text-[#cb3a22] font-semibold">PEER VERIFIED // CS</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
